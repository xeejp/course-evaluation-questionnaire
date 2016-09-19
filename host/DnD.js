import React, { Component } from 'react'
import { connect } from 'react-redux'
import update from 'react/lib/update'
import Dcard from './dnd/card'
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
import { Card, CardHeader, CardText } from 'material-ui/Card'

const mapStateToProps = ({}) => ({
})


let array   = new Array();
let minibox = new Array(length);
let dndData = new Array()

for(let i=0; i<EvaluationAxis.length; i++){
	array[i]   = new Array();
	array[i][0]=-1;
	array[i][1]="";
	array[i][2]= i;
	minibox[i] = i;

	dndData[i]      = new Array();
	dndData[i][0]   = i;
	dndData[i][1]   = EvaluationAxis[i];
}

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
		dndData.splice(dragIndex,1);
		this.setState(dndData);

	}

	dragDropCard(dragIndex, hoverIndex) {
		const dragCard = array[dragIndex];
		array.splice(dragIndex, 1);
		array.splice(hoverIndex, 0, dragCard);
		this.setState(array);
	}



	render() {
		return (
      <Card>
        <CardHeader
          title={"教師実験"}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>



			<div style = {{height: 300}}>
			<div style={{float:'left'}}>
			<Box>
			{minibox.map((dt, i) => <MiniBox 
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
			<DnDButton />
			</div>
			<div style={{  float: 'right'}}>
			{dndData.map((card, i) => <Dcard
				key={card[0]}
				index={i}
				id={card[0]}
				text={card[1]}
				/>
			)
			} 
			</div>
			</div>



			        </CardText>
      </Card>
		);

	}
}

export default DragDropContext(HTML5Backend)(DnD)

