import React, { Component } from 'react'
import { connect } from 'react-redux'
import update from 'react/lib/update'
import Card from './dnd/Card'
import Box from './dnd/Box'
import DroppedCard from './dnd/DroppedCard'
import MiniBox from './dnd/MiniBox'
import Subjects from './dnd/Subjects'
import DnDButton from './dnd/DnDButton'
import EvaluationAxis from './dnd/EvaluationAxis'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = ({}) => ({
})


let array        = new Array();
let length     = Subjects.length
let minibox      = new Array(length);
const firstData  = JSON.parse(JSON.stringify(Subjects))
let dndData = JSON.parse(JSON.stringify(Subjects))
let pageCounter= 0

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
		this.next= this.next.bind(this);
		this.state = {}
	}


	componentDidMount() {
	}

	dragCard(dragIndex, dragId, dragText, hoverIndex){

		array[hoverIndex][0] = dragId;
		array[hoverIndex][1] = dragText;
		dndData.splice(dragIndex,1);
		this.setState(dndData);

	}

	dragDropCard(dragIndex, hoverIndex) {
		const dragCard = array[dragIndex];
		array.splice(dragIndex, 1);
		array.splice(hoverIndex, 0, dragCard);
		this.setState(array);
	}

	next(dataarray, bst){
		pageCounter++
		console.log("pageCounter:%d\nEvaluationAxis.length:%d",pageCounter,EvaluationAxis.length)
		if(pageCounter == EvaluationAxis.length){
			const { dataBarn } = this.props
			dataBarn(dataarray)
			array        = new Array();
			length     = EvaluationAxis.length
			minibox      = new Array(length);
			let dt = new Array()

			for(let i=0; i<length; i++){
				array[i]   = new Array();
				array[i][0]=-1;
				array[i][1]="";
				array[i][2]= i;
				minibox[i] = i;

				dt[i]      = new Array();
				dt[i][0]   = i;
				dt[i][1]   = EvaluationAxis[i];
			}

			dndData      = JSON.parse(JSON.stringify(dt))
			console.log("array:%s",JSON.stringify(array))
			console.log("minibox:%s",JSON.stringify(minibox))
			console.log("dndData:%s",JSON.stringify(dndData))

			this.setState({array, minibox, dndData})
		}

		else {
			const { dataBarn } = this.props
			dataBarn(dataarray)
			for(let i=0; i<length; i++){
				array[i][0]=-1;
				array[i][1]="";
				array[i][2]= i;
				minibox[i] = i;
			}
			dndData = JSON.parse(JSON.stringify(firstData))
			console.log("array:%s",JSON.stringify(array))
			console.log("minibox:%s",JSON.stringify(minibox))
			console.log("dndData:%s",JSON.stringify(dndData))
			this.setState({array,dndData})
		}
	}


	render() {
		const { Len, Num } = this.props
		return (
			<div>
			<div style={{float:'left'}}>
			<Box Num={Num} Len={Len}>
			{minibox.map((dt, i) => <MiniBox 
				Num={Num}
				Len={Len}
				index={i}
				flag = {array[i][0]}
				key={dt[i]}
				dragCard={this.dragCard}
				>
				<DroppedCard 
				key={array[i][2]} 
				index={i} 
				id={array[i][0]} 
				text={array[i][1]}
				dragDropCard={this.dragDropCard}
				/>
				</MiniBox>
			)
			}
			</Box>
			<DnDButton bst={dndData.length} next={this.next} array={JSON.parse(JSON.stringify(array))} pageCounter={pageCounter}/>
			</div>
			<div style={{  float: 'right'}}>
			{dndData.map((card, i) => <Card
				key={card[0]}
				index={i}
				id={card[0]}
				text={card[1]}
				/>
			)
			} 
			</div>
			</div>
		);

	}
}

export default DragDropContext(HTML5Backend)(DnD)

