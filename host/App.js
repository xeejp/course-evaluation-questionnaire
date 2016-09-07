import React, { Component } from 'react'
import { connect } from 'react-redux'
import update from 'react/lib/update'
import Card from './Card'
import Box from './Box'
import DroppedCard from './DroppedCard'
import MiniBox from './MiniBox'
import data from './Data'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const mapStateToProps = ({}) => ({
})

const style = {
  width: 400
};

let array        = new Array();
let dragCardCall = 0;
const length     = data.length
let minibox      = new Array(length);

for(let i=0; i<length; i++){
	minibox[i] = i;
}


class App extends Component {
  constructor(props, context) {
    super(props, context)
	this.dragCard = this.dragCard.bind(this);
	this.dragDropCard = this.dragDropCard.bind(this);
    this.state = {}
  }
  

  componentDidMount() {
  }

	dragCard(dragIndex, dragId, dragText){

		array[dragCardCall] = new Array();
		array[dragCardCall][0] = dragId;
		array[dragCardCall][1] = dragText;
		dragCardCall++;
		console.log(JSON.stringify(array));		
		console.log(JSON.stringify(minibox));		

	    console.log(length)

		data.splice(dragIndex,1);
		this.setState(data);
	}

	dragDropCard(dragIndex, hoverIndex) {
   const dragCard = array[dragIndex];
		array.splice(dragIndex, 1);
		array.splice(hoverIndex, 0, dragCard);
	  this.setState(array);
  }

  render() {
    return (
		<div>
		<Box moveCard={this.moveCard} dragCard={this.dragCard}>
			{minibox.map((dt, i) => <MiniBox index={i} >{i}</MiniBox>)}
		</Box>
		<div style={style}>
			{data.map((card, i) => <Card
					 key={card[0]}
					 index={i}
					 id={card[0]}
					 text={card[1]}
					 />)}
			

		</div>
		</div>
	);
}
}
export default connect()(App)

export default DragDropContext(HTML5Backend)(App)

