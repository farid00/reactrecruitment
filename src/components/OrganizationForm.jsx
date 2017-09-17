import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'
import ReduxFormControl from './ReduxFormControl'
const OrganizationForm = ({ handleSubmit, pristine, reset, submitting, handleOrganizationSubmit }) => (

    <Grid>
      <form onSubmit={handleSubmit(handleOrganizationSubmit)}>
        <div>
          <label>Primary Name</label>
          <div>
            <Field
              name="primary_name"
              component={ReduxFormControl}
              type="text"
              placeholder="AEPI (National)"
            />
          </div>
        </div>
        <div>
          <label>Secondary Name</label>
          <div>
            <Field
              name="secondary_name"
              component={ReduxFormControl}
              type="text"
              placeholder="SKP (Chapter)"
            />
            <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
          </div>
        </div>
      </form>
    </Grid>
)

export default OrganizationForm;