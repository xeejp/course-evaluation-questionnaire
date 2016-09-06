import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({}) => ({
})

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
	  sendData('fetchContents')
  }

  render() {
    return <div> 
    </div>
  }
}

export default connect()(App)
