import React, { ReactElement } from 'react';
const Rate: React.FC<any> = (props: any): ReactElement => {
  const stars = [];
  for (let index = 0; index < props.rate; index++) {
    stars.push(<i key={index} className="fa fa-star text-warning" />);
  }

  return <>{stars}</>;
};

export default Rate;
