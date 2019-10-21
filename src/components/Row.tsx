import React, { ReactElement } from 'react';
const Row: React.FC<any> = (props: any): ReactElement => {
  return <div className={props.className ? `row ${props.className}` : 'row'}>{props.children}</div>;
};

export default Row;
