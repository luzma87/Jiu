import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme } from '@material-ui/core/styles/index';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {
    MuiButton: {
      root: {
        height: 48,
      },
    },
  },
});

export default theme;
