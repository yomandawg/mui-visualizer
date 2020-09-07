import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changePalette,
  changePaletteText,
  changePaletteAction,
  changePaletteBackground,
} from 'actions/PaletteActions';
import { CompactPicker } from 'react-color';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';

const LightRadio = withStyles(() => ({
  root: {
    color: 'grey',
    '&$checked': {
      color: 'grey',
    },
  },
}))((props) => <Radio color="default" {...props} />);

const DarkRadio = withStyles(() => ({
  root: {
    color: 'black',
    '&$checked': {
      color: 'black',
    },
  },
}))((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.background.default,
  },
  palette: {
    marginTop: '20px',
    fontSize: '40px',
    color: theme.palette.text.primary,
  },
  paper: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  type: {
    fontSize: '20px',
    color: theme.palette.text.secondary,
  },
  value: {
    color: theme.palette.text.disabled,
  },
}));

const paletteTypes = {
  text: ['primary', 'secondary', 'disabled'],
  action: ['active', 'hover', 'selected', 'disabled'],
  background: ['default', 'paper'],
};

export default function PaletteComponent() {
  const palette = useSelector(({ palette }) => palette);
  const [preset, setPreset] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRadio = (event) => {
    setPreset(event.target.value);
    dispatch(changePalette(event.target.value));
  };

  let obj;
  const handleChange = (type, value, hex) => {
    switch (type) {
      case 'text':
        obj = { ...palette[type] };
        obj[value] = hex;
        dispatch(changePaletteText(obj));
        break;
      case 'action':
        obj = { ...palette[type] };
        obj[value] = hex;
        dispatch(changePaletteAction(obj));
        break;
      case 'background':
        obj = { ...palette[type] };
        obj[value] = hex;
        dispatch(changePaletteBackground(obj));
        break;
      default:
    }
  };

  return (
    <div className={classes.body}>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <div className={classes.palette}>Palette</div>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <div>
              <LightRadio
                checked={preset === 'light'}
                onChange={handleRadio}
                value="light"
              />
              <DarkRadio
                checked={preset === 'dark'}
                onChange={handleRadio}
                value="dark"
              />
            </div>
          </Paper>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          lg={9}
          md={10}
          sm={11}
          xs={12}
          spacing={2}
        >
          {Object.keys(paletteTypes).map((type) => (
            <Grid
              key={type}
              item
              container
              justify="center"
              xs={12}
              sm={6}
              md={4}
            >
              <Paper className={classes.paper} elevation={2}>
                <span className={classes.type}>{type}</span>
                <div style={{ padding: '5px' }}>
                  {paletteTypes[type].map((value) => (
                    <div
                      className={classes.primary}
                      style={{ margin: '5px' }}
                      key={value}
                    >
                      <div className={classes.value}>{value}</div>
                      <CompactPicker
                        color={palette[type][value]}
                        onChange={(color) =>
                          handleChange(type, value, color.hex)
                        }
                      />
                    </div>
                  ))}
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
