import React from 'react'
import Title from '../../UI/Title/Title'
import classes from './BudgetSetup.module.css'
import wallet from "../../../assets/images/wallet.png"
import smallLogo from "../../../assets/images/smallLogo.png"

function BudgetSetup() {
    const divStyle = {
        width: '33%',
      };
  return (
    <div className={classes.budgetPage}>
        <div className={classes.navigationBar}>
        <div className={classes.imageWallet}><img src={smallLogo} alt="nil" /></div>
            <div><button className={classes.logoutButton}>Logout</button></div>
        </div>
        <div className={classes.pageBody}>
                <p>Step 1/3</p>
                <div className={classes.h1}><Title title="Set up Your Budget"/></div>
                <div className={classes.progressBar}>
                    <div className={classes.progressInner} style={divStyle}></div>
                </div>
                <div className={classes.imageWallet}><img src={wallet} alt="nil" /></div>
                <div className={classes.textBox}>
                <h4 className={classes.h4}>Click the button below to set up your plan and amount</h4>
                </div>
        </div>
    </div>
  )
}

export default BudgetSetup