import React, { Component } from 'react'
import FirstCard from './dnd/FirstCard'
import Box from './dnd/Box'
import MiniBox from './dnd/MiniBox'
import Subjects from 'util/Subjects'
import EvaluationAxis from 'util/EvaluationAxis'
import Button from './dnd/Button'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

import {Card} from 'material-ui/Card'

let array     = new Array();
let data      = new Array();
let dragCardCall = 0;
let isCardRender = 1;
const length  = Subjects.length
let pageCounter= 0
const isMobile= navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i) !== null

class App extends Component {
	constructor(props, context) {
		super(props, context)
		this.dragCard = this.dragCard.bind(this);
		this.dragDropCard = this.dragDropCard.bind(this);
		this.next= this.next.bind(this);
		this.setArray= this.setArray.bind(this)
		this.state = {}
	}

	dragCard(dragIndex, dragId, dragText, hoverIndex){
		console.log(hoverIndex)
		array[hoverIndex][0] = dragId;
		array[hoverIndex][1] = dragText;
		console.log(JSON.stringify(array));
		data.splice(dragIndex,1);
		this.setState(data);
	}

	dragDropCard(dragIndex, hoverIndex) {
		const dragCard = array[dragIndex];
		array.splice(dragIndex, 1);
		array.splice(hoverIndex, 0, dragCard);
		this.setState(array);
		console.log(JSON.stringify(array));
	}

	setArray(){
		const {isTeacher} = this.props

		if(isCardRender == 1){
			if(pageCounter == EvaluationAxis.length || isTeacher){
				array  = new Array();
				data   = new Array()
				for(let i=0; i<EvaluationAxis.length; i++){
					array[i]   = new Array();
					array[i][0]=-1;
					array[i][1]="";
					array[i][2]= i+100;

					data[i]    = new Array();
					data[i][0] = i;
					data[i][1] = EvaluationAxis[i];
				}
				isCardRender=0
			}
			else{
				for(let i=0; i<length; i++){
					array[i]   = new Array();
					array[i][0]=-1;
					array[i][1]= "";
					array[i][2]= i+100;

					data[i] = new Array();
					data[i][0] = i;
					data[i][1] = Subjects[i];
				}
				isCardRender = 0;
			}
		}
	}

	next(dataarray){
		pageCounter++
		isCardRender=1
		console.log("dataarray:%s",JSON.stringify(dataarray))
		const { dataBarn } = this.props
		dataBarn(dataarray)
		this.setState({array, data})
	}

	render() {
		const { Num } = this.props
		this.setArray()
		return (
			<div>
			<div style={{float:'left'}}>
			<Card>
			<Box Num={Num}>
			{array.map((dt,i) => <MiniBox
				key={dt[2]}
				index={i} 
				id={dt[0]} 
				text={dt[1]}
				dragDropCard={this.dragDropCard}
				dragCard={this.dragCard}
				/>)}
			</Box>
			</Card>
			<Button next={this.next} array={array}/>
			</div>
			<div style={{ float: 'right' }}>
			<Card>
			{data.map((card, i) => {
				return (
					<FirstCard
					key={card[0]}
					index={i}
					id={card[0]}
					text={card[1]}
					/>
				);
			})}
			</Card>

			</div>
			</div>
		);
	}
}

export default DragDropContext(isMobile ? TouchBackend : HTML5Backend)(App)
