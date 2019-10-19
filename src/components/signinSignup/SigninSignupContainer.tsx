import React, { ReactElement } from 'react';

const SigninSignupContainer = (props: any): ReactElement => {
  return (
    <React.Fragment>
      <div className="container-fluid px-3">
        <div className="row min-vh-100">
          <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
              {props.children}
            </div>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
            <div
              style={{
                backgroundImage:
                  'url(../static/sampleTemplate/distribution/pages/img/photo/photo-1497436072909-60f360e1d4b1.jpg)',
              }}
              className="bg-cover h-100 mr-n3"
            />
          </div>
        </div>
      </div>
    </React.Fragment >
  );
};

export default SigninSignupContainer;
