import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'
import ReduxFormControl from './ReduxFormControl'
const RecruitForm = ({ handleSubmit, pristine, reset, submitting, onSubmit }) => (

    <Grid>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="first_name"
              component={ReduxFormControl}
              type="text"
              placeholder="Jessica"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="last_name"
              component={ReduxFormControl}
              type="text"
              placeholder="Jones"
            />
            <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
          </div>
        </div>
      </form>
    </Grid>
)

export default RecruitForm;