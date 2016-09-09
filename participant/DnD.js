import React, { Component } from 'react'
import { connect } from 'react-redux'
import update from 'react/lib/update'
import Card from './dnd/Card'
import Box from './dnd/Box'
import DroppedCard from './dnd/DroppedCard'
import MiniBox from './dnd/MiniBox'
import Subjects from './dnd/Subjects'
import DnDButton from './dnd/DnDButton'


import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = ({}) => ({
})


let array        = new Array();
let dragCardCall = 0;
const length     = Subjects.length
let minibox      = new Array(length);
let SubjectsNum      = Subjects.length 

for(let i=0; i<length; i++){
	array[i]   = new Array();
	array[i][0]=-1;
	array[i][1]="";
	array[i][2]= i;
	minibox[i] = i;
}



class DnD extends Component {
	constructor(props, context) {
		super(props, context)
		this.dragCard = this.dragCard.bind(this);
		this.dragDropCard = this.dragDropCard.bind(this);
		this.state = {}
	}

	componentDidMount() {
	}

	dragCard(dragIndex, dragId, dragText, hoverIndex){

		array[hoverIndex][0] = dragId;
		array[hoverIndex][1] = dragText;
		dragCardCall++;

		console.log(array[hoverIndex][0])

		Subjects.splice(dragIndex,1);
		this.setState(Subjects);
	}

	dragDropCard(dragIndex, hoverIndex) {
		const dragCard = array[dragIndex];
		array.splice(dragIndex, 1);
		array.splice(hoverIndex, 0, dragCard);
		this.setState(array);
	}

	render() {
		const { next } = this.props
		return (
			<div>
			<div style={{float:'left'}}>
				<Box>
					{minibox.map((dt, i) => <MiniBox 
						flag = {array[i][0]}
					><DroppedCard 
						key={array[i][2]} 
						index={i} 
						id={array[i][0]} 
						text={array[i][1]}
						dragDropCard={this.dragDropCard}
					/>
					</MiniBox>)}
				</Box>
			<DnDButton bst={Subjects.length} next={this.next}/>
			</div>
				<div style={{  float: 'right'}}>
					{Subjects.map((card, i) => <Card
						key={card[0]}
						index={i}
						id={card[0]}
						text={card[1]} />)} 
				</div>
				
			</div>
		);
	}
}

export default connect()(DnD)
export default DragDropContext(HTML5Backend)(DnD)


