'use client'
import { useState, useEffect, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import io from 'socket.io-client'
import { TextArea } from '../TextArea/TextArea'
import { useToast } from '@/components/ui/use-toast'
import Scripture from '../Dropdowns/Scripture'
import Language from '../Dropdowns/Language'
import dropdownContext from '../../context/dropdownContext'
import userContext from '../../context/userContext'
import historyContext from '../../context/historyContext'
import { useRouter } from 'next/navigation'

import { db, app, auth, provider } from '../../firebase/firebase'
import {
  set,
  ref,
  push,
  query,
  orderByChild,
  orderByKey,
  limitToLast,
  equalTo,
  onValue,
  orderByValue,
} from 'firebase/database'
import Loader from '../Loader/Loader'

type Props = {}
const apiServer = process.env.NEXT_PUBLIC_API_SERVER
// @ts-ignore
const socket = io(apiServer, {
  transports: ['websocket'],
  upgrade: false,
})

export const Main = (props: Props) => {
  const router = useRouter()
  const { user } = useContext(userContext)
  const { language, scripture } = useContext(dropdownContext)
  const { history, setHistory } = useContext(historyContext)
  const { toast } = useToast()
  const [answer, setAnswer] = useState('')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [connected, setConnected] = useState(false)
  const [recievingAnswer, setRecievingAnswer] = useState(false)
  console.log("recievingAnswer",recievingAnswer,"connected",connected)
  if (!user) {
    router.push('/login')
  }

  const generateHandler = async (e?: any) => {
    if (input == '')
      toast({
        title: 'Write a question first',
      })
    else {
      try {
        setAnswer('')
        setLoading(true)
        setRecievingAnswer(true)
        socket.emit('question', {
          scripture: scripture,
          question: input,
          language: language,
          user: user?.email,
        })
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong !',
        })
      }
    }
  }
  useEffect(() => {
    if (socket.connected) {
      console.log('connected')
      setConnected(true)
    }
  }, [socket.connected])

  // setting answer till packets arrive
  useEffect(() => {
    socket.on('answer', (data) => {
      setAnswer(data)
      setRecievingAnswer(false)
    })
    socket.on('error', (data: any) => {
      toast({
        variant: 'destructive',
        title: ` I cant answer this question because it was unable to generate due to ${
          data || ''
        } reason`,
      })
      setLoading(false)
      setRecievingAnswer(false)
    })
  }, [])

  // storing in database when answer is completed
  useEffect(() => {
    socket.on('end', (data) => {
      toast({
        title: 'Answer Completed',
      })
      const postListRef = ref(db, 'responses')
      const newPostRef = push(postListRef)
      set(newPostRef, {
        email: data.user,
        question: data.question,
        answer: data.answer,
        time: new Date().toLocaleString(),
        language: data.language,
        scripture: data.scripture,
      })
      setLoading(false)
      setRecievingAnswer(false)
    })

    return () => {
      socket.off('end')
    }
  }, [])

  return (
    // <div className="h-[81.9vh] flex flex-wrap justify-center ">
    <div className="absolute h-screen max-h-screen overflow-hidden flex flex-wrap justify-center ">
      <div className="relative top-48">
        {
          !connected || recievingAnswer  ? <div className='w-full flex justify-center'>
            <Loader connected={connected} loading={recievingAnswer}/>
            </div> : <TextArea data={answer} />
        }
    
        <div className="w-screen flex flex-col justify-start items-center">

          <Input
            className="w-[80vw] tracking-wider h-12 mb-4  mt-6 card"
            placeholder="Ask question here..."
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                ev.preventDefault()
                generateHandler()
              }
            }}
            value={input}
          />

          <div className="flex flex-wrap gap-4 justify-center z-10">
            <Scripture />
            <Language />

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                onClick={generateHandler}
                className="w-28 h-12 tracking-wide text-white"
                disabled={!user?.email || loading}
              >
                Generate
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setAnswer('')
                  setInput('')
                }}
                className="w-28  h-12 tracking-wide  text-red-500"
                disabled={!user?.email || loading}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
