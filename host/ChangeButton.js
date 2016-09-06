import React, {Component }from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({}) => {
    return {}
}

class ChangeButton extends Component {
	render (){
		return(
		<div>
			<button type="button">aaa</button>
		</div>
		);
	}
}


export default connect(mapStateToProps)(ChangeButton)

