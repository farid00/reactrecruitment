import { connect } from 'react-redux'
import OrganizationList from '../components/OrganizationList'
import React from 'react'
import { getOrganizations, setActiveOrganization } from '../actions/organizationActions'



class OrganizationListContainer extends React.Component {
	componentWillMount() {
		this.props.getOrganizations()
	}

	render() {
		return (
			<OrganizationList handleClick={this.props.handleOrganizationClick} organizations={this.props.organizations}></OrganizationList>
		)
	}
}

const mapStateToProps = state => {

	return {
		organizations: state.organizationReducer.organizations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getOrganizations: () => { dispatch(getOrganizations()) },
		handleOrganizationClick: (organizationId) => { dispatch(setActiveOrganization(organizationId)) }
	}
}
const OLCExport = connect(mapStateToProps, mapDispatchToProps)(OrganizationListContainer);
export default OLCExport;