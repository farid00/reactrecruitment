import React from 'react'
import {FormControl} from 'react-bootstrap';


const ReduxFormControl = ({input, meta, ...props}) => {
    return <FormControl {...props} {...input} />
};

export default ReduxFormControl