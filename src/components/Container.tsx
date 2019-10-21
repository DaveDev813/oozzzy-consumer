import React, { ReactElement } from 'react';

const Container: React.FC<any> = (props: any): ReactElement => (
  <div className="container">
    {props.children}
  </div>
);

export default Container;
