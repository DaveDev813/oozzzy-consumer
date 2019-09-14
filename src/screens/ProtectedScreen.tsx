import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

const ProtectedScreen: React.FC = (): ReactElement => (
  <Typography variant="h2">Protected and Authenticated Screen</Typography>
);

export default ProtectedScreen;
