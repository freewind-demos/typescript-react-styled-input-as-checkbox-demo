import React from 'react'

import styled from 'styled-components';
import {Button} from '@material-ui/core'

const MyButton = styled(Button)`
  text-transform: none;
`;

export default function Hello() {
  return <div>
    <h1>Button </h1>
    <Button>Hello</Button>
    <MyButton>Hello</MyButton>
  </div>
}
