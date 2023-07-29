import React from 'react'
import classes from './BG.module.css'
import clsx from 'clsx'
type Props = {}

const FlowersBG = (props: Props) => {
  return (
    <div className={clsx(classes.container)}>
      <div id={clsx(classes.stars, ``)}></div>
      <div id={clsx(classes.stars2)}></div>
      <div id={clsx(classes.stars3)}></div>
      <div id={clsx(classes.title)}>
        {/* <span>
    PURE CSS
  </span>
  <br/>
  <span>
    PARALLAX PIXEL STARS
  </span> */}
      </div>
    </div>
  )
}

export default FlowersBG
