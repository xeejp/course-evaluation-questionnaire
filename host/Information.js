import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ started }) => {
    return {
        started
    }
}

const Information = ({ started }) => <div>
	{started
		? 
			<div>
			  <p>start experiment</p>
		    </div>
		  
		: 
			<div>
				<p>please wait</p>
			</div>
		
	}
</div>

export default connect(mapStateToProps)(Information)


