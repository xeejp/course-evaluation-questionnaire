import React, {Component }from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ started }) => {
    return { started }
}

const arr = [{id:1,text:"aaaaa"}];

function pu(){
	console.log(JSON.stringify(arr));
}

const ChangeButton = ({ started }) => started
	? null
	: <button onClick={pu()}>start</button>



export default connect(mapStateToProps)(ChangeButton)

