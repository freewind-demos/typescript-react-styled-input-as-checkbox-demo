import React, { useState } from 'react'

import { Button } from '@material-ui/core'
import Popover from '@material-ui/core/Popover';

export default function MyList() {
  const [open, setOpen] = useState(false)

  return <div>
    <Button onClick={() => setOpen(n => !n)}>Delete?</Button>
    <Popover open={open}>
      <Button onClick={() => {
        setOpen(false)
      }}>Just do it!</Button>
    </Popover>
  </div>
}
