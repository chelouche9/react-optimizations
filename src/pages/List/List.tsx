/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import _ from "lodash";

import PageTemplate from "../../components/PageTemplate/PageTemplate";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: 400,
      maxWidth: 300,
      backgroundColor: "#e4e4e4",
      overflow: "scroll",
    },
  })
);

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;
  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

const Lists: React.FC = () => {
  const classes = useStyles();
  const list = useMemo(() => _.times(20000, String), []);

  return (
    <PageTemplate
      title="Virtualizing"
      subtitles={[
        "When working with large sets of data like lists or gallaries, each item is rendered even if not visible to the user.",
        "Use lazy-load technique to render only what is in the user's view.",
      ]}
    >
      {/* <div className={classes.root}>
        <FixedSizeList height={400} width={300} itemSize={46} itemCount={20000}>
          {renderRow}
        </FixedSizeList>
      </div> */}
      <List classes={classes}>
        {list.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={`Item ${item}`} />
          </ListItem>
        ))}
      </List>
    </PageTemplate>
  );
};

export default Lists;
