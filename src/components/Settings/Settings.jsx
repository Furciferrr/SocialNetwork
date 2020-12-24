import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './Settings.module.css';
import {setSummAC} from '../../redax/settingPage-reducer'


const Settings = (props) => {

const [currentValue, onChengeCurrentValue] = useState(0)

const onChengeValue = (e) => {
  onChengeCurrentValue(e.currentTarget.value)
}

    return (
      <div className={classes.settings}>
        <h1>Your Choise: <span>{props.summ}</span></h1>
        <div>Current summ value: <span>{currentValue}</span></div> 
        <input type="range" min='0' max='100' value={currentValue} onChange={onChengeValue} />
        <button onClick={ (e) => {
          props.setSummAC(currentValue)
        } }>Confirm</button>
        <button onClick={ () => {
          props.setSummAC(0)
        } }>Clear</button>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    summ: state.setting.choiseSumm
  }
}


export default connect (mapStateToProps, { setSummAC }) (Settings)