import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardHeader, CardText } from 'material-ui/Card'
import CircularProgress from 'material-ui/CircularProgress'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { joinTeacher } from './actions'


const mapStateToProps = ({joined, teachers, answered, join_teacher }) => ({
	joined,
	teachers,
	answered,
	join_teacher
})

class Waiting extends Component {
	constructor(props, context) {
		super(props, context)
		const { expanded } = this.props
		this.state = {
			value:'',
			miss: true,
			expanded: expanded 
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleExpandChange(expanded) {
		this.setState({ expanded: expanded })
	}

	componentDidMount() {
	}

	handleChange(event) {
		const value = event.target.value
		this.setState({ value })
  	}
	handleClick(){
		const { dispatch ,teachers , answered, join_teacher} = this.props
		const { value } = this.state
		switch(value){
			case "aaa":
				dispatch(joinTeacher("math"))
				break
			case "bbb":
				dispatch(joinTeacher("english"))
				break
			case "ccc":
				dispatch(joinTeacher("art"))
				break
		}
		console.log(join_teacher)
		this.setState({
			value: '',
		})
	}

	render() {
		const { joined, join_teacher, teachers } = this.props
		const { value } = this.state
		const dt = JSON.stringify(teachers, null, '\t')
		return (
			<div>
			<p>join_teacher:{join_teacher}</p>
			<p>{dt}</p>
			<p>参加者の登録を待っています。(現在の参加者:{joined}人)</p>
			<p>この画面のまましばらくお待ちください。</p>
			<div>
			<Card
			expanded={this.state.expanded}
			onExpandChange={this.handleExpandChange.bind(this)}
			>
			<CardHeader
			title={"教師の方はこちら"}
			actAsExpander={true}
			showExpandableButton={true}
			/>
			<CardText expandable={true}>
			<TextField
			hintText=""
			value={value}
			onChange={this.handleChange.bind(this)}
			floatingLabelText="Experiment ID"
			/><br /><br /><br />
			<RaisedButton
			label="送信" 
			style={{marginLeft: '3%'}}
			primary={true} 
			onClick={this.handleClick.bind(this)} 
			/>
			</CardText>
			</Card>
			</div>
			<div style={{textAlign: "center"}}>
			<CircularProgress />
			</div>
			</div>
		)

	}
}

export default connect(mapStateToProps)(Waiting)
