// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Profiler, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Start from "../pages/Start/Start";
import Render from "../pages/Render/Render";
import Memo from "../pages/Memo/Memo";
import List from "../pages/List/List";
import Split from "../pages/Split/Split";
// const Split = lazy(() => import("../pages/Split/Split"));

// @ts-ignore
// const logTimes = (id, phase, actualTime, baseTime, startTime, commitTime) => {
//   console.log([`${id}'s ${phase} phase:`, `Actual time: ${actualTime}`]);
// };

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ background: "red" }}>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/render" component={Render} />
          <Route path="/memo" component={Memo} />
          <Route path="/split" component={Split} />
          <Route path="/list" component={List} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
