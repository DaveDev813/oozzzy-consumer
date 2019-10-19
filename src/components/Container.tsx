import React, { ReactElement } from 'react';

const Container: React.FC<any> = (props: any): ReactElement => (
  <div className="container" style={{ textAlign: 'center' }}>
    {props.children}
  </div>
);

export default Container;
