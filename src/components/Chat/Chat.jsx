import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    float: "right",
  },
}));

const Chat = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
      </div>
    </div>
  );
};
export default Chat;
