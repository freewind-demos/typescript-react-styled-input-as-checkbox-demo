import React from 'react'

import { Button } from '@material-ui/core'
import { ConfirmableButton } from './ConfirmableButton';

export default function MyList() {

  return <ConfirmableButton trigger={<Button>Delete?</Button>}>
    <Button onClick={() => {
      console.log('### deleting!')
    }}>Just do it!</Button>
  </ConfirmableButton>
}
