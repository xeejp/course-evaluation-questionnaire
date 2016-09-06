import React, { Component } from 'react'
import { connect } from 'react-redux'
import Information from './Information'

const mapStateToProps = ({}) => ({
})

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return <div>
	   <Information />
    </div>
  }
}

export default connect()(App)
