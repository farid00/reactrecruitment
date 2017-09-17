import React from 'react'
import { connect } from 'react-redux' 
import RecruitDetail from '../components/RecruitDetail'
import { getRecruit } from '../actions/RecruitActions'
import {FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button} from 'react-bootstrap';

class RecruitDetailContainer extends React.Component {

	componentWillMount() {
		this.props.getRecruit(this.props.match.params.id)
	}

	render() {
		return (
			<RecruitDetail recruit={this.props.recruit}></RecruitDetail>
		)
	}
}

const mapStateToProps = (state) => {

	return {
		recruit: state.recruitReducer.activeRecruit
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getRecruit: (id) => { dispatch(getRecruit(id)) },
	}
}
const RecruitDetailContainerExport = connect(mapStateToProps, mapDispatchToProps)(RecruitDetailContainer);

export default RecruitDetailContainerExport;