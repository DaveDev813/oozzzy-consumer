import React, { ReactElement } from 'react';
// import InitialHome from '../components/InitialHome';
import withLayout from '../components/Layout';
import SnackbarNotif, { SnackbarVariant } from '../components/Snackbar';
import API, { ApiResponse } from '../utils/api';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Featured from '../components/Featured';
const Home: React.FC = (): ReactElement => {
  const [hasNotif, setHasNotif] = React.useState({
    isOpen: false,
    message: 'placeholder',
    variant: SnackbarVariant.SUCCESS,
  });
  React.useEffect((): void => {
    const checkApi = async (): Promise<void> => {
      const call: ApiResponse = await API.get('/connection');
      if (call.error) {
        setHasNotif({
          isOpen: true,
          variant: SnackbarVariant.ERROR,
          message: 'Error: Please connect to API',
        });
      }
    };
    checkApi();
  }, []);
  return (
    <div className="mainContainerTest">
      <SnackbarNotif
        onCloseSnackbar={(): void =>
          setHasNotif({
            isOpen: false,
            variant: hasNotif.variant,
            message: '',
          })
        }
        {...hasNotif}
      />
      <Banner />
      <Category />
      <Featured />

    </div>
  );
};

export default withLayout(Home);
