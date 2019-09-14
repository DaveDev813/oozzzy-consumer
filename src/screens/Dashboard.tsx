import React, { ReactElement } from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Featured from '../components/Featured';
import withLayout from '../components/Layout';

const Dashboard: React.FC = (): ReactElement => {
  return (
    <>
      <Banner />
      <Category />
      <Featured />
    </>
  );
};

export default withLayout(Dashboard);
