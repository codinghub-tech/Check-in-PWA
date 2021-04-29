import React from 'react'
import { TextField } from "@material-ui/core"
import {
  withStyles,
} from '@material-ui/core/styles';


function BoxInput({ label, ...rest }) {
  const CustomTextField = withStyles({
    root: {
      '& input': {
        color: 'white',
        fontSize: "1.1em",
        textAlign: "center"
      },
      '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderWidth: 2,
        padding: '4px !important', // override inline-style
      },
      width: "70px"
    }

  })(TextField);
  return (
    <div>
      <CustomTextField
        variant="outlined"
        inputProps={{ maxLength: 1 }}
        label={label}
        {...rest}
      />
    </div>
  )
}

export default BoxInput
