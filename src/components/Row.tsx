import React, { ReactElement } from 'react';
const Row: React.FC<any> = (props: any): ReactElement => {
  return <div className={`row ${props.className}`}>{props.children}</div>;
};

export default Row;
