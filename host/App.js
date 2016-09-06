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

class App extends Component {
  constructor(props, context) {
    super(props, context)
	this.moveCard = this.moveCard.bind(this);
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
	moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1]
        ]
      }
    }));
  }

  dragCard(dragIndex, dragId, dragText){
	  array[dragCardCall] = new Array();
	  array[dragCardCall][0] = dragId;
	  array[dragCardCall][1] = dragText;
	  dragCardCall++;
	  console.log(JSON.stringify(array));
  }
  render() {
    const { cards } = this.state;

    return (
		<div>
		<Box moveCard={this.moveCard} dragCard={this.dragCard}>
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
