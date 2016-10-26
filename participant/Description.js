import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import SwipeableViews from 'react-swipeable-views'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import CircularProgress from 'material-ui/CircularProgress'

const mapStateToProps = ({}) => ({
})

class Description extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Card style={{marginBottom: "5%"}}>
		<CardHeader
			title="説明"
			subtitle="授業評価アンケートです。"
		/>
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Description)
