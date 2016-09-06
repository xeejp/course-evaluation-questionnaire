import React, {Component }from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ started }) => {
    return { started }
}

function start(){
	sendData("start");
}

function stop(){
	sendData("stop");
}

const ChangeButton = ({ started }) => started
	? <button onClick={stop()}>stop</button>
	: <button onClick={start()}>start</button>



export default connect(mapStateToProps)(ChangeButton)

