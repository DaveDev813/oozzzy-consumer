import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, FormikActions, FormikProps } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../components/Input';
import { Paper, LinearProgress } from '@material-ui/core';
import API, { ApiResponse } from '../utils/api';
import uniqid from 'uniqid';
import SnackbarNotif, { SnackbarVariant } from '../components/Snackbar';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn: React.FC = (): ReactElement => {
  const [loading, setLoading] = React.useState(false);
  const [hasNotif, setHasNotif] = React.useState({
    isOpen: false,
    message: 'placeholder',
    variant: SnackbarVariant.SUCCESS,
  });

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .label('Email')
      .required('Email is required'),
    password: Yup.string().required('Password is required.'),
  });

  const onSubmit = async (
    values: SignInFormValues,
    actions: FormikActions<SignInFormValues>
  ): Promise<void> => {
    console.log('TCL: onSubmit -> actions', actions);
    console.log('TCL: onSubmit -> values', values);
    const userLogin: ApiResponse = await API.post('/users', {
      id: uniqid(),
      ...values,
    });
    console.log('TCL: userLogin', userLogin);
    if (userLogin.error) {
      setHasNotif({
        isOpen: true,
        message: userLogin.error.message,
        variant: SnackbarVariant.WARNING,
      });
    }
    actions.setSubmitting(false); // don't reload page
  };

  return (
    <React.Fragment>
      {loading && <LinearProgress color="secondary" />}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            validateOnChange={true}
            onSubmit={onSubmit}
          >
            {({
              handleSubmit,
              isSubmitting,
            }: FormikProps<SignInFormValues>): ReactElement => {
              setLoading(isSubmitting);
              return (
                <form
                  className={classes.form}
                  noValidate={true}
                  onSubmit={handleSubmit}
                >
                  <Grid container={true} direction="column" spacing={2}>
                    <Grid item={true}>
                      <InputField name="email" label="Email" />
                    </Grid>
                    <Grid item={true}>
                      <InputField
                        name="password"
                        label="Password"
                        type="password"
                      />
                    </Grid>
                    <Grid item={true}>
                      <Grid container={true} justify="space-between">
                        <Grid item={true}>
                          <FormControlLabel
                            control={
                              <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                          />
                        </Grid>
                        <Grid item={true}>
                          <Grid container={true} spacing={1}>
                            <Grid item={true}>
                              <Button
                                type="button"
                                fullWidth={true}
                                variant="contained"
                                color="secondary"
                                disabled={isSubmitting}
                              >
                                Sign up
                              </Button>
                            </Grid>
                            <Grid item={true}>
                              <Button
                                type="submit"
                                fullWidth={true}
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                              >
                                Sign In
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </Paper>
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
      </Container>
    </React.Fragment>
  );
};

export default SignIn;
