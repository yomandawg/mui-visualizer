import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  block: (props) => ({
    position: 'fixed',
    bottom: theme.spacing(props.index * 9 + 2),
    right: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(props.index * 7.5 + 1.5),
      right: theme.spacing(1.5),
    },
    zIndex: 2000 - props.index,
  }),
  paper: {
    width: '250px',
    height: '400px',
    marginBottom: '3px',
  },
}));

export default function FabComponent(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles(props);
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  return (
    <div className={classes.block}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="top-end"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper} elevation={3}>
              <div>FAB #{props.index}</div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Zoom in={true} unmountOnExit timeout={500}>
        <Fab
          onClick={handleClick}
          color="primary"
          size={matches ? 'medium' : 'large'}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
}
