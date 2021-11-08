// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useMemo, useState } from "react";
import Button from "@material-ui/core/Button";
import _ from "lodash";

import PageTemplate from "../../components/PageTemplate/PageTemplate";

// console.log("outer function - render only once");
// const heavyCalc = _.times(10000000, String)[0];

const Memo: React.FC = () => {
  const [notRelevant, setNotRelevant] = useState(1);
  console.log("render every state change");
  const heavyCalc = _.times(10000000, String)[0];
  // const heavyCalc = useMemo(() => _.times(10000000, String)[0], []);
  // const cacl = useCallback(() => _.times(10000000, String)[0], []);
  // const heavyCalc = useMemo(() => cacl(), [cacl]);

  return (
    <PageTemplate
      title="Memoizing"
      subtitles={[
        "Although the re-render mechanism only replaces the HTML nodes, it has to calculate the whole component all over again.",
        "This means any variable or function will be exectued again.",
      ]}
    >
      <div>Relevant: {heavyCalc}</div>
      <div style={{ marginTop: 15 }}>Non Relevant: {notRelevant}</div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 15 }}
        onClick={() => setNotRelevant((s) => s + 1)}
      >
        Non relevant state change
      </Button>
    </PageTemplate>
  );
};

export default Memo;
