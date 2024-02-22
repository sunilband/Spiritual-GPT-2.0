require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

const { GoogleGenerativeAI} = require('@google/generative-ai')
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY)

app.use(cors())
app.use(express.json())

io.on('connection', (socket) => {
  console.log('user connected: ' + socket.id)
  socket.on('question', async (data) => {
    const { question, scripture, language, user } = data
    console.log(question, scripture, language, user)
    try {
      let ans = ''
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = `${question} according to ${scripture}. also give references.answer only in in ${language}.If the question is not releted to the specific scripture, please mention the scripture name that is relevent.`
   
      model.generateContentStream(prompt).then(async (result) => {
        for await (const chunk of result.stream) {
          // Safety check for prompt
          if(chunk?.candidates[0]?.finishReason!=="STOP"){
            socket.emit(
              'error',
              `Sorry, I can't answer that question because it was blocked due to ${chunk?.candidates[0]?.finishReason} reason. Please try another question.`,
            )
            break
          }
          // Safety check for prompt
          if(chunk?.promptFeedback?.blockReason){
            socket.emit(
            'error',
            `Sorry, I can't answer that question because it was blocked due to ${chunk.promptFeedback.blockReason} reason. Please try another question.`,
          )
          break
          }
          const chunkText = chunk.text()
          // Send chunkText to the client
          ans += chunkText
          socket.emit('answer', ans)
        }
        // Indicate the end of the stream
        if(ans.length>0){
          socket.emit('end', {
            answer: ans,
            question,
            scripture,
            language,
            user,
          })
        }
        
      })
    } catch (error) {
      console.log(error)
      if (error.message.includes('blocked due to SAFETY')) {
        socket.emit(
          'error',
          `Sorry, I can't answer that question because it was blocked due to ${promptFeedback.blockReason} reason. Please try another question.`,
        )
      }
    }
  })
})

app.get('/', (req, res) => {
  res.send('visit spiritualgpt.sunilband.me')
})

const Port = process.env.PORT || 5000
server.listen(Port, () => {
  console.log(`server started at ${Port}`)
})

module.exports = server
