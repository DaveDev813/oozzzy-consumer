import React, { ReactElement } from 'react';
import SnackbarNotif, { SnackbarVariant } from '../components/Snackbar';
import { Button } from '@material-ui/core';

const TestScreen: React.FC = (): ReactElement => {
  const [hasNotif, setHasNotif] = React.useState(false);

  return (
    <React.Fragment>
      <h1>Test Screen</h1>
      <Button onClick={(): void => setHasNotif(true)}>Trigger!</Button>
      <SnackbarNotif
        variant={SnackbarVariant.SUCCESS}
        isOpen={hasNotif}
        onCloseSnackbar={(): void => setHasNotif(false)}
        message="asdasdasdasdasd asdasd asdas dasd asdasd  asdasdasd asdasdasdasd asdasdasd"
      />
    </React.Fragment>
  );
};

export default TestScreen;
