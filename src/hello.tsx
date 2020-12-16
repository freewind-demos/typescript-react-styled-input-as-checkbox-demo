import React from 'react'

import { Button } from '@material-ui/core'
import { ConfirmableButton } from './ConfirmableButton';

export default function Hello() {

  return <div>
    <h1>ConfirmableButton</h1>
    <ConfirmableButton popover={
      <Button variant='contained' color='secondary' onClick={() => {
        console.log('### deleting!')
      }}>Just do it!</Button>
    }>
      <Button>Delete?</Button>
    </ConfirmableButton>
  </div>
}
