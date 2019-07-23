import React from "react";
import { SvgUse } from "../template/Layout";
import Link from "next/link";
import { InputField } from "../components/Input";
import * as Yup from "yup";
import { FormikActions, Formik } from "formik";
import Router from "next/router";
import Api from "../service/api";
import SigninSignupContainer from "../components/signinSignup/SigninSignupContainer";
import LoginWithButtons from "../components/signinSignup/LoginWithButtons";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username too short.")
    .max(20, "Username too long.")
    .required("Username required"),
  password: Yup.string().required("Password required.")
});

class Login extends React.Component {
  public onSubmit = async (values: any, actions: FormikActions<any>) => {
    console.log("bayag");
    const test = await Api.post("/client/signin", {
      email: values.username,
      password: values.password
    });
    console.log("Testing response", await test.json());
    actions.setSubmitting(false);
    Router.push(`/`); // don't reload page
  };

  render() {
    return (
      <React.Fragment>
        <SigninSignupContainer>
          <div className="mb-5">
            <img
              src="../static/sampleTemplate/distribution/pages/img/logo-square.svg"
              alt="..."
              style={{ maxWidth: "4rem" }}
              className="img-fluid mb-3"
            />
            <h2>Welcome back</h2>
          </div>

          <Formik
            initialValues={{
              username: "",
              password: ""
            }}
            validationSchema={LoginSchema}
            validateOnChange={true}
            onSubmit={this.onSubmit}
          >
            {({ handleSubmit }: any) => {
              return (
                <form
                  className="form-validate"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="form-group">
                    <InputField name="username" label="Username" />
                  </div>
                  <div className="form-group mb-4">
                    <InputField name="password" label="Password" />
                  </div>
                  <div className="form-group mb-4">
                    <div className="custom-control custom-checkbox">
                      <input
                        id="loginRemember"
                        type="checkbox"
                        className="custom-control-input"
                      />
                      <label
                        htmlFor="loginRemember"
                        className="custom-control-label text-muted"
                      >
                        <span className="text-sm">Remember me for 30 days</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Sign in
                  </button>

                  <LoginWithButtons />

                  <p className="text-center">
                    <small className="text-muted text-center">
                      Don't have an account yet?
                      <a href="signup.html"> Sign Up</a>
                    </small>
                  </p>
                </form>
              );
            }}
          </Formik>

          <Link href="/">
            <a className="close-absolute mr-md-5 mr-xl-6 pt-5">
              <SvgUse hrefVal="#close-1" className="svg-icon w-3rem h-3rem" />
            </a>
          </Link>
        </SigninSignupContainer>
      </React.Fragment>
    );
  }
}

export default Login;
