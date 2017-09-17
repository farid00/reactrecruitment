import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap'
import { push } from 'react-router-redux/actions'
import OrganizationItem from './OrganizationItem'

const OrganizationList = ({handleClick, organizations}) => (
	<ListGroup>
		{organizations.map(curOrganization => (
			<OrganizationItem key={curOrganization.id} handleClick={handleClick} organization={curOrganization}></OrganizationItem>
		))}
	</ListGroup>
)

export default OrganizationList