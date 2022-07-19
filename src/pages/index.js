import * as React from "react";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Temp from "../components/Temp";
import AnimatedCursor from "react-animated-cursor"

export default class Index extends React.Component {
  render() {
    return (
      <><Temp /><AnimatedCursor color='0,0,255'/></>
    );
  }
}
