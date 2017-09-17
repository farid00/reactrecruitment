import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroupItem } from 'react-bootstrap'
import { push } from 'react-router-redux/actions'
const RecruitDetail = ({ recruit  }) => (
	<div>
		<p>{recruit.first_name}</p>
		<p>{recruit.last_name}</p>
	</div>
)

export default RecruitDetail