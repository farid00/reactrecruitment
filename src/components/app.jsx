import React from 'react'
import SignUpForm from './signUpForm'
import  UserInformation from '../containers/userInformation'
import { Route, Link, Switch} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Grid, Row, Col, Button, Nav, Navbar, MenuItem, NavItem } from 'react-bootstrap'
import NewOrganization  from '../containers/NewOrganization'
import RecruitFormContainer from '../containers/RecruitFormContainer'
import RecruitListContainer from '../containers/RecruitListContainer'
import OrganizationListContainer from '../containers/OrganizationListContainer'
import RecruitDetailContainer from '../containers/RecruitDetailContainer'
import RecruitWithComments from '../components/RecruitWithComments'
import 'bootstrap/dist/css/bootstrap.css';

const App = ({history}) => (

<ConnectedRouter history={history}>
	<div>
	<Navbar collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				Rush Hound
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<LinkContainer exact={true} to="/profile">
					<NavItem>
						Profile
					</NavItem>
				</LinkContainer>	
				<LinkContainer to="/recruits">
					<NavItem>
						Recruits
					</NavItem>
				</LinkContainer>
				<LinkContainer to="/organizations">
					<NavItem>
						Organizations
					</NavItem>
				</LinkContainer>
				<LinkContainer to="/signup">
					<NavItem>
						Sign Up
					</NavItem>
				</LinkContainer>			
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	<Grid>
		<Row>
			{/* Switch is in this order so that signup will match before general */}
			<Switch>
				<Route path="/signup" component={SignUpForm}/>
				<Route path="/" component={UserInformation}/>
			</Switch>
		</Row>
		<Row>
			<Col md={12}>
				<Route path="/organizations" component={OrganizationListContainer}/>
				<Route exact path="/recruits" component={RecruitListContainer}/>
				<Route path={"/recruits/:id"} component={RecruitWithComments}/>
				<Route path="/organization/new" component={NewOrganization}/>
    			<Route exact path="/recruit/new" component={RecruitFormContainer}/>
			</Col>
		</Row>
	</Grid>

  </div>
</ConnectedRouter>
)

export default App
