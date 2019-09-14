import React from "react";

class LoginWithButtons extends React.Component {
  render() {
    return (
      <React.Fragment>
        <hr data-content="OR" className="my-3 hr-text letter-spacing-2" />
        <button className="btn btn btn-outline-primary btn-block btn-social mb-3">
          <i className="fa-2x fa-facebook-f fab btn-social-icon"> </i>
          Connect
          <span className="d-none d-sm-inline">with Facebook</span>
        </button>
        <button className="btn btn btn-outline-muted btn-block btn-social mb-3">
          <i className="fa-2x fa-google fab btn-social-icon"> </i>
          Connect
          <span className="d-none d-sm-inline">with Google</span>
        </button>
        <hr className="my-4" />
      </React.Fragment>
    );
  }
}

export default LoginWithButtons;
