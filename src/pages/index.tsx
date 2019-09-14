import React from "react";
import withLayout from "../template/Layout";

import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";

class Index extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <Category />
        <Featured />
      </>
    );
  }
}

export default withLayout(Index);
