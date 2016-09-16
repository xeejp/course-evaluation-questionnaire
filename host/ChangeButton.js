import React, {Component }from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({}) => {
    return {}
}

function change(){
		sendData("change")
}
class ChangeButton extends Component {

	render (){
		return(
		<div>
			<button type="button" onClick={change.bind(this)}>aaa</button>
		</div>
		);
	}
}


export default connect(mapStateToProps)(ChangeButton)

