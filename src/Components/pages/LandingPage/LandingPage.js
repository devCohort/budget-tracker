import React from 'react'
import classes from './LandingPage.module.css'
import Logo from '../../UI/Logo/Logo'



function LandingPage() {
  return (
    <div className={classes.landing}>
        <div className={classes.imageBox}>
           <Logo/>
        </div>

        <div className={classes.buttons}>
            <button className={classes.btn1}>Sign in</button>
            <button className={classes.btn2}>Sign up</button>
        </div>
        
        <div className={classes.text1}>
                <h2 className={classes.h2}>#1</h2>
                <h4 className={classes.h4}>Always know what's in your pocket</h4>
                <p className={classes.p}>We crunch the numbers to show how much
                spendable money you have after setting aside 
                enough for bills, goals and necessities.</p>
        </div>
        <div className={classes.text2}>
            <div className={classes.text2Content}>
                <h2 className={classes.h2}>#2</h2>
                <h4 className={classes.h4}>Track and lower your bills</h4>
                <p className={classes.p}>
                Track!t helps you stay on top of your
                bills and negotiate better rates on your cable,
                cell phone and other bills.</p>
            </div>
        </div>
        <div className={classes.text3}>
                <h2 className={classes.h2}>#3</h2>
                <h4 className={classes.h4}>Keep tabs on your spending</h4>
                <p className={classes.p}>
                    See which expenses eat up too much of the pie. 
                    Personalize your reports with custom categories..</p>
        </div>
        <div className={classes.text4}>
            <p>© 2022 TRACK!T</p>
            <div className={classes.text4b}>
                <p>COMPANY</p>
                <p>CONTACT US</p>
            </div>
        </div>
    </div>
  )
}

export default LandingPage