import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme } from '@material-ui/core/styles/index';
import brown from '@material-ui/core/colors/brown';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: brown,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;
