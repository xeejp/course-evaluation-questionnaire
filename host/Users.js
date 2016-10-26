import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardHeader, CardText } from 'material-ui/Card'

const mapStateToProps = ({page, users, text, joined, answered}) => ({
  page,
  users,
  text,
  joined, 
  answered, 
})

function createHeaderInfoStr(page, joined, answered, red_description) {
  switch (page) {
    case "experiment":
      return "("+answered+"人が回答を済ませました)"
    default:
      return ""
  }
}

function createUserStatuStr(user, page, text) {
  switch (page) {
    case "description":
      return (
        <span>
		  説明画面
        </span>
      )
	case "experiment":
	　return (
		<span>
		　回答中 
	　　</span>
		  )
	
	case "result":
      return (
        <span>
  　　　　実験終了
        </span>
      )
    default:
      return <span>-</span>
  }
}

const User = ({ id, user, page, text }) => (
  <tr>
    <td>{id}</td>
    <td>{createUserStatuStr(user, page, text)}</td>
  </tr>
)

class Users extends Component {
  render() {
    const {users, page, text, joined, answered, red_description} = this.props

    return (
      <Card>
        <CardHeader
          title={"登録者 "+joined + "人 "+createHeaderInfoStr(page, joined, answered, red_description)}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>状態</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(users).map(id => (
                  users[id].status != "noactive"
                    ? <User
                      key={id}
                      id={id}
                      user={users[id]}
                      page={page}
                      text={text}
                    />
                    : null
                )).reverse()
              }
            </tbody>
          </table>
        </CardText>
      </Card>
    )
  }
}

export default connect(mapStateToProps)(Users)
