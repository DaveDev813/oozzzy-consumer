import React, { ReactElement } from 'react';
import { FormikActions } from 'formik';

import SigninSignupContainer from '../components/signinSignup/SigninSignupContainer';

class Login extends React.Component<any> {
  public onSubmit = async (values: any, actions: FormikActions<any>) => {
    // const test = await Api.post('/client/signin', {
    //   email: values.username,
    //   password: values.password,
    // });
    // console.log('Testing response', await test.json());
    actions.setSubmitting(false);
    // Router.push(`/`);
  };

  render(): ReactElement {
    return (
      <React.Fragment>
        <SigninSignupContainer>
          <div className="mb-4">
            <img
              src="../static/sampleTemplate/distribution/pages/img/logo-square.svg"
              alt="..."
              style={{ maxWidth: '4rem' }}
              className="img-fluid mb-3"
            />
            <h2>Sign up</h2>
            <p className="text-muted">
              His room, a proper human room although a little too small, lay
              peacefully between its four familiar walls. A collection of
              textile samples lay spread out on the table.
            </p>
          </div>
          <form className="form-validate">
            <div className="form-group">
              <label htmlFor="loginUsername" className="form-label">
                Email Address
              </label>
              <input
                name="loginUsername"
                id="loginUsername"
                type="email"
                placeholder="name@address.com"
                autoComplete="off"
                required={true}
                data-msg="Please enter your email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                name="loginPassword"
                id="loginPassword"
                placeholder="Password"
                type="password"
                required={true}
                data-msg="Please enter your password"
                className="form-control"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="loginPassword2" className="form-label">
                Confirm your password
              </label>
              <input
                name="loginPassword2"
                id="loginPassword2"
                placeholder="Password"
                type="password"
                required={true}
                data-msg="Please enter your password"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-lg btn-block btn-primary">
              Sign up
            </button>
            <hr data-content="OR" className="my-3 hr-text letter-spacing-2" />
            <button className="btn btn btn-outline-primary btn-block btn-social mb-3">
              <i className="fa-2x fa-facebook-f fab btn-social-icon" />
              Connect <span className="d-none d-sm-inline">with Facebook</span>
            </button>
            <button className="btn btn btn-outline-muted btn-block btn-social mb-3">
              <i className="fa-2x fa-google fab btn-social-icon" />
              Connect <span className="d-none d-sm-inline">with Google</span>
            </button>
            <hr className="my-4" />
            <p className="text-sm text-muted">
              By signing up you agree to Directory's{' '}
              <a href="#">Terms and Conditions</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </p>
          </form>
          <a href="index.html" className="close-absolute mr-md-5 mr-xl-6 pt-5">
            <svg className="svg-icon w-3rem h-3rem">
              <use xlinkHref="#close-1" />
            </svg>
          </a>
        </SigninSignupContainer>
      </React.Fragment>
    );
  }
}

export default Login;
