import React, { ReactElement } from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Avatar,
  Link,
  Snackbar,
  Slide,
} from '@material-ui/core';
import './assets/css/initialHomeStyle.css';
import avatarImg from './assets/images/avatar.jpeg';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import API, { ApiResponse } from '../utils/api';

const useStyles = makeStyles({
  bg: {
    minWidth: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #4e4376, #2b5876);',
    padding: '5%',
  },
  header: {
    color: '#87ccde',
    fontWeight: 'bold',
  },
  avatar: {
    width: '80px',
    height: '80px',
    marginBottom: '2em',
  },
});

const InitialHome: React.FC = (): ReactElement => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = React.useState({
    isOpen: false,
    message: '',
  });
  const [tested, setTested] = React.useState(false);

  const handleClose = (): void => {
    if (isOpen.isOpen) {
      setIsOpen({
        isOpen: false,
        message: '',
      });
    }
  };

  React.useEffect((): void => {
    const checkConnection = async (): Promise<any> => {
      setTested(true);
      const isConnected: ApiResponse = await API.post('/connection', {
        testdata: 'hello?',
      });

      if (!!isConnected.error) {
        setIsOpen({
          isOpen: true,
          message: isConnected.error.message,
        });
      } else {
        setIsOpen({
          isOpen: true,
          message: 'connection success',
        });
      }
    };
    if (!tested) {
      checkConnection();
    }
  }, [setIsOpen, tested, setTested]);

  return (
    <div className={classes.bg}>
      <Grid
        container={true}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item={true} sm={12}>
          <Avatar
            alt="Rodave Bobadilla"
            src={avatarImg}
            className={classes.avatar}
          />
        </Grid>
        <Grid item={true} sm={12}>
          <Typography
            className={classes.header}
            variant="h2"
            component="h1"
            gutterBottom={true}
          >
            <Link
              href="https://github.com/DaveDev813/davedev-boilerplate-web"
              className={classes.header}
            >
              DaveDev Boilerplate | Web
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <div className="logo">
        <span />
        <span />
        <span />
      </div>

      <Snackbar
        open={isOpen.isOpen}
        onClose={handleClose}
        TransitionComponent={(props: TransitionProps): ReactElement => (
          <Slide {...props} direction="up" />
        )}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={
          <span id="message-id">
            <Typography variant="h6">API status: {isOpen.message}</Typography>
          </span>
        }
      />
    </div>
  );
};

export default InitialHome;
