import React, { Component } from 'react'
import { connect } from 'react-redux'
import update from 'react/lib/update'
import Card from './Card'
import Box from './Box'
import DroppedCard from './DroppedCard'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const mapStateToProps = ({}) => ({
})

const style = {
  width: 400
};

let array = new Array();

let dragCardCall = 0;

const exarray = [[1,"xxx"],
				 [2,"yyy"],
				 [3,"zzz"]];

class App extends Component {
  constructor(props, context) {
    super(props, context)
	this.dragCard = this.dragCard.bind(this);
	this.dragDropCard = this.dragDropCard.bind(this);
    this.state = {
	  cards: [{
        id: 1,
        text: 'aaa'
      }, {
        id: 2,
        text: 'bbb'
      }, {
        id: 3,
        text: 'ccc'
      }, {
        id: 4,
        text: 'ddd'
      }, {
        id: 5,
        text: 'eee'
      }, {
        id: 6,
        text: 'fff'
      }, {
        id: 7,
        text: 'ggg'
      }]
	}
  }
  

  componentDidMount() {
  }

	dragCard(dragIndex, dragId, dragText){

		const { cards } = this.state;
		const dragCard = cards[dragIndex];

		array[dragCardCall] = new Array();
		array[dragCardCall][0] = dragId;
		array[dragCardCall][1] = dragText;
		dragCardCall++;
		console.log(JSON.stringify(array));

		this.setState(update(this.state, {
			cards: {
				$splice: [
					[dragIndex, 1]
				]
			}
		}));
	}

	dragDropCard(dragIndex, hoverIndex) {
   const dragCard = array[dragIndex];
		array.splice(dragIndex, 1);
		array.splice(hoverIndex, 0, dragCard);
	  this.setState(array);
	  console.log(JSON.stringify(array));
  }

  render() {
    const { cards } = this.state;

    return (
		<div>
		<Box moveCard={this.moveCard} dragCard={this.dragCard}>
		{array.map((dt,i) => <DroppedCard 
			key={dt[0]} 
			index={i} 
			id={dt[0]} 
			text={dt[1]}
			dragDropCard={this.dragDropCard}
			/>)}
		</Box>
		<div style={style}>
			{cards.map((card, i) => {
				return (
					<Card key={card.id}
					 index={i}
					 id={card.id}
					 text={card.text}
					 />
				);
			})}

		</div>
		</div>
	);
}
}
export default connect()(App)

export default DragDropContext(HTML5Backend)(App)
