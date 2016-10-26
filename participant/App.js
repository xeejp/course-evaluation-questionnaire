import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContents } from './actions'

import Waiting from './Waiting'
import Description from './Description'
import Question from './Question'
import Result from './Result'


const mapStateToProps = ({page}) => ({
	page
})

let isTeacher = false

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
	this.teacherForm = this.teacherForm.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchContents())
  }

  teacherForm(){
	  isTeacher = true
  }

  render() {
    const {page} = this.props
    return (
      <div>
		{ (status != "noactive" || page == "result")
          ? <div>
              { (page == "waiting") ? <Waiting teacherForm={this.teacherForm}/> : null }
              { (page == "description") ? <Description /> : null }
              { (page == "experiment") ? <Question isTeacher={isTeacher}/> : null }
              { (page == "result") ? <Result /> : null }
            </div>
          : <div>
              <p>実験はすでに開始されています。</p>
              <p>実験が終了するまでお待ちください。</p>
            </div>
          
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
