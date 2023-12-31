import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { scriptureData } from './data'
import { useContext } from 'react'
import dropdownContext from '../../context/dropdownContext'

type Props = {}

const Scripture = (props: Props) => {
  const { setScripture } = useContext(dropdownContext)

  return (
    <>
      <Select onValueChange={(value) => setScripture(value)}>
        <SelectTrigger className="w-[180px] h-12 flex justify-center bg-slate-950 hover:bg-slate-800 tracking-wide ">
          <SelectValue placeholder="Scripture" />
        </SelectTrigger>
        <SelectContent>
          {scriptureData.map((item, key) => {
            return (
              <SelectItem value={item} key={key}>
                {item}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </>
  )
}

export default Scripture
