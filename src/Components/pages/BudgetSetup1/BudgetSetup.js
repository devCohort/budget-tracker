import React from 'react'
import Title from '../../UI/Title/Title'
import classes from './BudgetSetup.module.css'
import wallet from "../../../assets/images/wallet.png"
import smallLogo from "../../../assets/images/smallLogo.png"
import Ellipse2 from "../../../assets/images/Ellipse2.png"

function BudgetSetup() {
    const divStyle = {
        width: '33%',
      };
  return (
    <div className={classes.budgetPage}>
        <div className={classes.navigationBar}>
        <div className={classes.imageWallet}>
            <div className={classes.imageBox}>
            <img className={classes.logo} src={smallLogo} alt="nil"  />
            <img className={classes.ellipse2} src={Ellipse2} alt="nil" />
            </div>
        </div>
            <div><button className={classes.logoutButton}>Logout</button></div>
        </div>
        <div className={classes.pageBody}>
                <p>Step 1/3</p>
                <div className={classes.h1}><Title title="Set up Your Budget"/></div>
                <div className={classes.progressBar}>
                    <div className={classes.progressInner} style={divStyle}></div>
                </div>
                <div className={classes.imageWallet}>
                    <img className={classes.wallet} src={wallet} alt="nil" />
                </div>
                <div className={classes.textBox}>
                <h4 className={classes.h4}>Click the button below to set up your plan and amount</h4>
                </div>
                <div className={classes.selectGroup}>
                    <div className={classes.dateGroup}>
                        <input type="date" name="date" id="" />
                    </div>
                    <div className={classes.addButtonBox}>
                        <button className={classes.addButton}>Add Budget</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default BudgetSetup