import React, { Children } from 'react'
import classes from './BG.module.css'
import clsx from 'clsx'
type Props = {}

const FlowersBG = (props: Props) => {
  return (
    <div className={clsx(classes.main)}>
      <div className={clsx(classes.container)}>
        <div id={clsx(classes.stars, ``)}></div>
        <div id={clsx(classes.stars2)}></div>
        <div id={clsx(classes.stars3)}></div>
        <div id={clsx(classes.title)}></div>
      </div>
    </div>
  )
}

export default FlowersBG
