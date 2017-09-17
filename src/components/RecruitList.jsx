import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap'
import { push } from 'react-router-redux/actions'
import RecruitItem from './RecruitItem'

const RecruitList = ({handleClick, recruits}) => (
	<ListGroup>
		{recruits.map(curRecruit => (
			<RecruitItem key={curRecruit.id} recruit={curRecruit} handleClick={handleClick}></RecruitItem>
		))}
	</ListGroup>
)

export default RecruitList