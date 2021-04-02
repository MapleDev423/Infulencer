import { createMuiTheme } from '@material-ui/core/styles';
import { grey, deepPurple, amber,teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light:'#6a6a6a',
      main: deepPurple[500],
    },
    secondary: {
//      main:grey[700],
      main:'rgba(75,192,192,1)',

      contrastText: deepPurple[900],
    },
    third:{
      //main:'linear-gradient(to top, #33ccff 24%, #ccff33 81%)',
      light:grey[100],
    },
    fourth:{
      main:teal['A200']
    }
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiTooltip: {
    arrow: true,
  },
  MuiTypography:{
    
  }
};

theme.overrides = {
  MuiTypography:{
    root:{
      color:theme.palette.primary.light,
      paddingBottom:theme.spacing(1)
    },
    body1:{
      fontWeight:'500',
    }
  },
  MuiButton: {
    root: {
      borderRadius: '3px',
      textTransform: 'none',
      color:theme.palette.primary.main,
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
      },
    },
    containedSecondary: {
      fontWeight: 500,
      color:'white'
    },
    containedThird:{
      color:'white'
    }
  },
  MuiButtonLabel:{
    fontWeight:'500'
  },
  MuiInputLabel: {
    root: {
      textTransform: 'uppercase',
      fontSize: '1.5rem',
    },
  },
  MuiInput: {
    root: {
      top: theme.spacing(1),
      borderRadius:'3px',
      border: `1px solid ${grey[400]}`,
      outline: `1px solid transparent`,
      padding: theme.spacing(1),
      '&$focused': {
        border: `1px solid ${theme.palette.primary.main}`,
       // outline: `1px solid ${theme.palette.primary.main}`,
        borderRadius:'3px',

      },
    },
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: '#fff',
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
    arrow: {
      color: theme.palette.primary.main,
    },
  },

  MuiCardHeader:{
    titleTypographyProps: {
      variant:'h6'
    }
  },
  MuiPaper:{

    root:{
      boxShadow:'0px 0px white',
    },
    elevation1:{
      boxShadow:'0px 0px white',
    }
  }
};

export default theme;
