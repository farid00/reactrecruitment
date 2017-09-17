import React from 'react'
import {FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button} from 'react-bootstrap';
import { Field } from 'redux-form'
import ReduxFormControl from './ReduxFormControl'
const CommentForm = ({ handleSubmit, pristine, reset, submitting, onSubmit, recruitId, parentId }) => (

    <Grid>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name="text"
              component={ReduxFormControl}
              componentClass="textarea"
              placeholder="Expressed interest in joining because he went to a great party of ours"
            />
            <Field
              name="recruitId"
              component="input"
              type="hidden"
              />
            <Field
              name="parentId"
              component="input"
              type="hidden"
              />
          </div>
        </div>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
      </form>
    </Grid>
)

export default CommentForm;