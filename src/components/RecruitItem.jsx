import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroupItem } from 'react-bootstrap'
import { push } from 'react-router-redux/actions'
const RecruitItem = ({handleClick, recruit}) => (
	<ListGroupItem onClick={() => {handleClick(recruit.id)}}>{recruit.first_name} {recruit.last_name}</ListGroupItem>
)

export default RecruitItem