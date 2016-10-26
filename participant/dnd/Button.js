import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = ()=> {
}

class Button extends Component{
	render(){
			const { next, array} = this.props;
			return (
			<div>
			<FlatButton style={{ marginLeft: '3%' }} disabled={true}>戻る</FlatButton>
			<RaisedButton  onClick={next.bind(this,array)} primary={true} style={{ marginLeft: '3%' }}>次へ</RaisedButton>
	        </div>
			);

}
}

export default connect()(Button)





