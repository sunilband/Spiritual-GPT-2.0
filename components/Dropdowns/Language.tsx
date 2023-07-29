import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { languageData } from './data'
import { useContext } from 'react'
import dropdownContext from '../../context/dropdownContext'

type Props = {}

const Language = (props: Props) => {
  const { setLanguage } = useContext(dropdownContext)

  return (
    <>
      <Select onValueChange={(value) => setLanguage(value)}>
        <SelectTrigger className="w-[180px] h-12 flex justify-center bg-slate-950 hover:bg-slate-800 tracking-wide ">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {languageData.map((item, key) => {
            return (
              <SelectItem
                value={item}
                key={key}
                onSelect={() => {
                  console.log('hie')
                }}
              >
                {item}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </>
  )
}

export default Language
