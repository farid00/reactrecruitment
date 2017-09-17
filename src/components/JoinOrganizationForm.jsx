import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'
import ReduxFormControl from './ReduxFormControl'
const JoinOrganizationForm = ({ handleSubmit, pristine, reset, submitting, onSubmit }) => (

    <Grid>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name="token"
              component={ReduxFormControl}
              type="text"
              placeholder="Organization Token"
            />
          </div>
        </div>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
      </form>
    </Grid>
)

export default JoinOrganizationForm;