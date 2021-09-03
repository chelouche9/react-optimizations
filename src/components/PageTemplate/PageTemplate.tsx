import React from "react";
import Typography from "@material-ui/core/Typography";

import { Container, Content } from "./styles";
import Navigator from "../Navigator/Navigator";

interface Props {
  title: string;
  subtitles: string[];
}

const PageTemplate: React.FC<Props> = ({ title, subtitles, children }) => {
  return (
    <Container>
      <Typography style={{ fontWeight: 600 }} variant="h3" gutterBottom>
        {title}
      </Typography>
      {subtitles.map((s) => (
        <Typography key={s} variant="subtitle1" gutterBottom>
          {s}
        </Typography>
      ))}
      <Content>{children}</Content>
      <Navigator />
    </Container>
  );
};

export default PageTemplate;
