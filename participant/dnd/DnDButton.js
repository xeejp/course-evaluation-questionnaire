import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = ()=> {
}

class DnDButton extends Component{

	render(){
		const { bst, next, array} = this.props;
			return (
			<div>
			<FlatButton style={{ marginLeft: '3%' }} disabled={true}>戻る</FlatButton>
			<RaisedButton primary={false} onClick={next.bind(this,array,bst)} style={{ marginLeft: '3%' }}>次へ</RaisedButton>
	        </div>

			);
	}
}

export default connect()(DnDButton)





