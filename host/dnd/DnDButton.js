import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = ()=> {
}

class DnDButton extends Component{

	render(){
			return (
			<div>
			<RaisedButton primary={false}  style={{ marginLeft: '3%' }}>回答する</RaisedButton>
	        </div>

			);
	}
}

export default connect()(DnDButton)





