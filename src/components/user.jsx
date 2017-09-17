import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { push } from 'react-router-redux/actions'
import OrganizationListContainer from '../containers/OrganizationListContainer'
import {LinkContainer} from 'react-router-bootstrap'
import JoinOrganizationFormContainer from '../containers/JoinOrganizationFormContainer'
import { Route,} from 'react-router-dom'
const User = ({users, activeOrganization, clearOrganization, isJoinOrganization, handleJoinOrganizationClick, match}) => (
	<Grid>
		<Row>
			<Col md={12}>
				<h2>{users.first_name} {users.last_name}</h2>
				<LinkContainer to="/recruit/new">
 					<Button >New Recruit</Button>
				</LinkContainer>
				<LinkContainer to="/organization/new">
 					<Button >New Organization</Button>
				</LinkContainer>
				<Button onClick={handleJoinOrganizationClick}>Join Organization</Button>
				{isJoinOrganization && <JoinOrganizationFormContainer></JoinOrganizationFormContainer>}
			</Col>
		</Row>
		<Row>
			<Col md={12}>
				<hr/>
			</Col>
		</Row>
	</Grid>
)

export default User