import * as React from "react";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Temp from "../components/Temp";
import AnimatedCursor from "react-animated-cursor";
import Loadable from "@loadable/component";

export default class Index extends React.Component {
  render() {
    return (
      <><Temp /><CursorLoaded/></>
    );
  }
}


const Cursor = props => {
  return <AnimatedCursor color='0,0,255'/>
}
const CursorLoaded = Loadable(() => import(Cursor))