import React, { Component } from 'react'
import { connect } from 'react-redux'

import Divider from 'material-ui/Divider'

import { fetchContents } from './actions'

import PageStepper from './PageStepper'
import Users from './Users'
import DnD from './DnD'

const mapStateToProps = ({page}) => ({
	page
})

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchContents())
  }

  render() {
	  const { page } = this.props
	  if(page == "experiment"){
    return (
      <div>
        <PageStepper />
        <Divider
          style={{
            marginTop: '5%',
            marginBottom: '5%',
          }}
        />
        <Users /><br />
		<DnD /><br />
      </div>
    )
  }
	  else{
		      return (
      <div>
        <PageStepper />
        <Divider
          style={{
            marginTop: '5%',
            marginBottom: '5%',
          }}
        />
        <Users /><br />
      </div>
    )
	  }
}
}

export default connect(mapStateToProps)(App)
