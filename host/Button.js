import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


const mapStateToProps = ()=> {
}


class Button extends Component{
	render(){
		return (
			<button type="button">send</button>
		);	
	}
}


export default connect(mapStateToProps)(Button)

