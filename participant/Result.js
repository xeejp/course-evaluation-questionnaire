import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContents } from './actions'
import Chart from 'components/Chart'

const mapStateToProps = ({}) => ({
})

class Result extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return (
      <div>
		<Chart />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Result)
