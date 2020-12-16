import React, { FC, useState, PropsWithChildren } from 'react';
import Popover from '@material-ui/core/Popover';

type Props = {
  trigger: React.ReactElement
};

export const ConfirmableButton: FC<PropsWithChildren<Props>> = ({ children, trigger }) => {
  const [open, setOpen] = useState(false)

  return <>
    <span onClick={() => setOpen(v => !v)}>{trigger}</span>
    <Popover open={open} onClick={() => setOpen(false)}>
      {children}
    </Popover>
  </>
}
