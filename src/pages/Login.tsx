import React from "react";
import { SvgUse } from "../template/Layout";
import Link from "next/link";
import { InputField } from "../components/Input";
import * as Yup from "yup";
import { FormikActions, Formik } from "formik";
import Router from "next/router";
import Api from "../service/api";

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
        <div className="container-fluid px-3">
          <div className="row min-vh-100">
            <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
              <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
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
                      <form className="form-validate" onSubmit={handleSubmit}>
                        <div className="form-group">
                          {/* <label htmlFor="loginUsername" className="form-label">
                      {" "}
                      Email Address
                    </label> */}
                          <InputField name="username" label="Username" />
                          {/* <input
                      name="loginUsername"
                      id="loginUsername"
                      type="email"
                      placeholder="name@address.com"
                      autoComplete="off"
                      required
                      data-msg="Please enter your email"
                      className="form-control"
                    /> */}
                        </div>
                        <div className="form-group mb-4">
                          {/* <div className="row">
                            <div className="col">
                              <label
                                htmlFor="loginPassword"
                                className="form-label"
                              >
                                {" "}
                                Password
                              </label>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="form-text small">
                                Forgot password?
                              </a>
                            </div>
                          </div>
                          <input
                            name="loginPassword"
                            id="loginPassword"
                            placeholder="Password"
                            type="password"
                            required
                            data-msg="Please enter your password"
                            className="form-control"
                          /> */}
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
                              <span className="text-sm">
                                Remember me for 30 days
                              </span>
                            </label>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-lg btn-block btn-primary"
                        >
                          Sign in
                        </button>
                        <hr
                          data-content="OR"
                          className="my-3 hr-text letter-spacing-2"
                        />
                        <button
                          onClick={async () => {
                            // TESTING SIGNOUT
                            const test = await Api.post("/client/signout");

                            console.log("test", test);
                          }}
                          className="btn btn btn-outline-primary btn-block btn-social mb-3"
                        >
                          <i className="fa-2x fa-facebook-f fab btn-social-icon">
                            {" "}
                          </i>
                          Connect
                          <span className="d-none d-sm-inline">
                            with Facebook SIGN OUT TEST
                          </span>
                        </button>
                        <button className="btn btn btn-outline-muted btn-block btn-social mb-3">
                          <i className="fa-2x fa-google fab btn-social-icon">
                            {" "}
                          </i>
                          Connect
                          <span className="d-none d-sm-inline">
                            with Google
                          </span>
                        </button>
                        <hr className="my-4" />
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
                    <SvgUse
                      hrefVal="#close-1"
                      className="svg-icon w-3rem h-3rem"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
              <div
                style={{
                  backgroundImage:
                    "url(../static/sampleTemplate/distribution/pages/img/photo/photo-1497436072909-60f360e1d4b1.jpg)"
                }}
                className="bg-cover h-100 mr-n3"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
