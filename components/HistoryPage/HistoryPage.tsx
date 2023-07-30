'use client'
import React from 'react'
import historyContext from '../../context/historyContext'
import { useContext } from 'react'
import { Textarea } from '../ui/textarea'

type Props = {}

const HistoryPage = (props: Props) => {
  const { history } = useContext(historyContext)
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[80vh] w-[90vw] overflow-y-auto">
        {history?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start gap-2 card border my-4 rounded-md p-4 text-justify px-6"
            >
              <p className="text-sm text-center w-full tracking-widest">
                <span className="underline font-medium"></span> {item.time}
              </p>
              <p className="text-md">
                <span className="underline font-medium">Question:</span>
                {`\n`}
                {item.question}
              </p>
              <p className="text-md">
                <span className="underline font-medium">Answer:</span>{' '}
                {item.answer}
              </p>

              <p className="text-md">
                <span className="underline font-medium ">Scripture:</span>{' '}
                {item.scripture}
              </p>
              <p className="text-md">
                <span className="underline font-medium">Language:</span>{' '}
                {item.language}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HistoryPage
