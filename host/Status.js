import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = ({ started }) => {
  return {
    started
  }
}


const Status = ({ started }) => <div>
{started
  ? <button type="button">start</button>
  : <button type="button">stop</button>
}
</div>

export default connect(mapStateToProps)(Status)
