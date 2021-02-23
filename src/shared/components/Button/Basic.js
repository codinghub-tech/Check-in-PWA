import React from 'react'
import { Button } from "@material-ui/core"

function Basic({ children, ...details }) {
  return (
    <div>
      <Button
        style={{ textTransform: 'none' }}
        color="secondary"
        variant="contained"
        {...details}
      >
        {children}
      </Button>
    </div>
  )
}

export default Basic
