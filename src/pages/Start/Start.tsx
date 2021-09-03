import React from "react";
import Typography from "@material-ui/core/Typography";

import { Container } from "./styles";
import Navigator from "../../components/Navigator/Navigator";

const Start: React.FC = () => {
  return (
    <Container>
      <Typography style={{ fontWeight: 600 }} variant="h2" align="center">
        React optimizations and where to find them
      </Typography>
      <Navigator />
    </Container>
  );
};

export default Start;
