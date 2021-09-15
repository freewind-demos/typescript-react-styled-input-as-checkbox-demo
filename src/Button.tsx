import React, {FC} from 'react';

export type Props = {
  text: string;
  className?: string;
}

export const Button: FC<Props> = ({text, className}) => {
  return <button className={className}>{text}</button>
}
