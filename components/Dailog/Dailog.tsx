import React from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'

import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'
import classes from './Dailog.module.css'

type MyFunctionType = () => void
type Props = {
  question: string
  answer: string
  time: string
  scripture: string
  language: string
  openValue: boolean
  setOpenValue: any
}

const Dailog = ({
  question,
  answer,
  time,
  scripture,
  language,
  openValue,
  setOpenValue,
}: Props) => {
  return (
    <Dialog open={openValue}>
      <DialogContent className="sm:max-w-[425px] flex flex-col items-end">
        <div
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={() => {
            setOpenValue(false)
          }}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </div>
        <DialogHeader>
          <DialogTitle>
            {question}
            <p className="break-words">
              {/* asddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
            </p>
          </DialogTitle>
          <DialogDescription>
            <p className="font-bold">Scripture: {scripture}</p>
            <p className="font-bold">Language: {language}</p>
            <p className="font-bold mb-2">Time: {time}</p>
            <p
              className={`max-h-96 overflow-y-auto pr-2
            ${classes.style}`}
              id={classes.style2}
            >
              {answer}
            </p>
          </DialogDescription>
        </DialogHeader>
        {/* <DialogFooter>
         
          <Button
            variant="default"
            onClick={() => setOpenValue(false)}
            className="w-80"
          >
            Close
          </Button>
   
         
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}

export default Dailog
