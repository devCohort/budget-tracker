import React from 'react'
import classes from './ButtonGroup.module.css'

function ButtonGroup() {
  return (
      
        <div className={classes.buttonGroup}>
          <button className={classes.button}>facebook</button>
          <button className={classes.button}>google</button>
        </div>
  )
}

export default ButtonGroup