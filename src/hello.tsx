import React from 'react'

import {Button} from '@material-ui/core'

export default function Hello() {

  return <div>
    <h1>Button </h1>
    <Button>Hello</Button>
    <Button style={{textTransform: 'none'}}>Hello</Button>
  </div>
}
