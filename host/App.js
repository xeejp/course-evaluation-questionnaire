import React, { Component } from 'react'
import { connect } from 'react-redux'
import Information from './Information'
import ChangeButton from './ChangeButton'

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
	  <ChangeButton/>
    </div>
  }
}

export default connect()(App)
