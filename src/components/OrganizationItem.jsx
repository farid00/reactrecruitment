import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroupItem } from 'react-bootstrap'
import { push } from 'react-router-redux/actions'
const OrganizationItem = ({handleClick, organization}) => (
	<ListGroupItem onClick={() => handleClick(organization.id)}>{organization.primary_name} {organization.secondary_name}</ListGroupItem>
)

export default OrganizationItem