import React from 'react';

import styled from 'styled-components';


const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
outline: 3px solid red;
`


export default function Hello() {
  return <div>
    <Checkbox value="aaa" />
  </div>
}
