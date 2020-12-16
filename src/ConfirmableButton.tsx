import React, { FC, useState, PropsWithChildren } from 'react';
import Popover from '@material-ui/core/Popover';

type Props = {
  popover: React.ReactElement
};

export const ConfirmableButton: FC<PropsWithChildren<Props>> = ({ children, popover }) => {
  const [open, setOpen] = useState(false)
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null)
  return <>
    <span onClick={(event) => {
      setAnchorElement(event.currentTarget)
      setOpen(true)
    }}>{children}</span>
    <Popover open={open} onClick={() => setOpen(false)} anchorEl={anchorElement}>
      {popover}
    </Popover>
  </>
}
