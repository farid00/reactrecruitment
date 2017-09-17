import { connect } from 'react-redux'
import RecruitList from '../components/RecruitList'
import React from 'react'
import { push } from 'react-router-redux/actions'
import { getRecruits } from '../actions/RecruitActions'



class RecruitListContainer extends React.Component {
	componentWillMount() {
		this.props.getRecruits()
	}

	render() {
		return (
			<RecruitList handleClick={this.props.handleClick} recruits={this.props.recruits}></RecruitList>
		)
	}
}

const mapStateToProps = state => {

	return {
		recruits: state.recruitReducer.recruits
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getRecruits: () => { dispatch(getRecruits()) },
		handleClick: (id) => {dispatch(push('/recruits/' + id))}
	}
}
const RecruitListContainerExport = connect(mapStateToProps, mapDispatchToProps)(RecruitListContainer);
export default RecruitListContainerExport;