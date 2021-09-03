import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import PageTemplate from "../../components/PageTemplate/PageTemplate";

const Render: React.FC = () => {
  const [state, setState] = useState("Change state");

  console.log("state", state);

  return (
    <PageTemplate
      title="Rendering"
      subtitles={[
        "React turns JSX into an HTML tree. When a state changes React compares the current DOM and its Virtual DOM, and replaces only what have changed.",
        "In this process, only the relevant components are rendered.",
      ]}
    >
      <Button
        variant="contained"
        color="primary"
        style={{
          marginBottom: 15,
        }}
        onClick={() => setState("Changed")}
      >
        {state}
      </Button>
      <Button
        variant="text"
        color="primary"
        onClick={() => setState("Change state")}
      >
        Reset
      </Button>
    </PageTemplate>
  );
};

export default Render;
