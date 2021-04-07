import { createMuiTheme } from '@material-ui/core/styles';
import { grey, deepPurple, amber,teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      //light:'#6a6a6a',
      //main: deepPurple[500],
      //dark:'black'
      light:'#C2CFE0',
      main:'#90A0B7',
      dark:'#192A3E',
      contrastText:'#fff'
    },
    secondary: {
      main:'#666FE8',
      //contrastText:'#fff'
      //dark:'rgb(194,207,224)',
      //contrastText: deepPurple[900],
    },
    purple:{
      backgroundColor: '#000', color: '#666FE8'
    },
    blue:{
      backgroundColor: '#37E8BF', color: '#109CF1'
    },
    green:{
      backgroundColor: '#37E8BF', color: '#37E8BF'
    },
    yellow:{
      backgroundColor: '#37E8BF', color: '#EE6F6D'
    },
    pan:{
      backgroundColor: '#F6F8FA', color: '#F6F8FA'
    },

    third:{
      //main:'linear-gradient(to top, #33ccff 24%, #ccff33 81%)',
      light:grey[100],
    },
    fourth:{
      main:teal['A200']
    }
  },
  typography:{
    fontFamily: `"Poppins", sans-serif`,
    fontWeight:'bold',
  }
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
      color:theme.palette.primary.dark,
      fontWeight:600,
      paddingBottom:theme.spacing(1)
    },
    subtitle1:{
   //   fontWeight:'bold',
      fontSize:'15px'
    },
    body1:{
      fontWeight:'500',
    },
    colorPrimary:{
      color:theme.palette.primary.dark,

    }
  },
  MuiButton: {
    root: {
      borderRadius: '5px',
      textTransform: 'none',
      color:theme.palette.primary.dark,
      
    },
    containedPrimary: {
      backgroundColor: theme.palette.primary.dark,
      border:`1px solid ${theme.palette.primary.dark}`,

      '&:hover': {
        backgroundColor: '#fff',//theme.palette.primary.light,
        color: theme.palette.primary.dark,
      },
    },
    outlinedPrimary:{
      border:`1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.dark,
      '&:hover': {
        backgroundColor: '#fff',//theme.palette.primary.light,
        border:`1px solid ${theme.palette.primary.dark}`,
      }
    },
    containedSecondary: {
    //  border:`1px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.secondary.main,

      '&:hover': {
        backgroundColor: '#fff',//theme.palette.primary.light,
        color: theme.palette.secondary.main,
        border:`1px solid ${theme.palette.secondary.main}`,

      },
    },
    outlinedSecondary:{
      border:`1px solid ${theme.palette.primary.main}`,
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: '#fff',//theme.palette.primary.light,
        border:`1px solid ${theme.palette.secondary.main}`,
      }
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
      //top: theme.spacing(1),
      borderRadius:'5px',
      border: `1px solid ${theme.palette.primary.main}`,
      outline: `1px solid transparent`,
      height:theme.spacing(4.5),
      padding: theme.spacing(1),
      '&$focused': {
        border: `1px solid ${theme.palette.primary.dark}`,
       // outline: `1px solid ${theme.palette.primary.main}`,
        borderRadius:'5px',

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
  MuiCard:{
    root:{
      padding:theme.spacing(2),
      boxShadow:'2px 2px 5px 5px #f2f2f2'
    }
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
  },
  MuiTable:{
    root:{
      minWidth: 650,

      '& thead':{
        borderRadius:'8px',
        backgroundColor:'#c2cfe066',
        color:theme.palette.primary.main,
      },
      '& th:first-child':{
          borderRadius:`15px 0px 0px 15px`
      },
      '& th:last-child':{
          borderRadius:`0px 15px 15px 0px`
      },
      '& tbody':{
        borderTop:'5px solid white'
      }
    }
  },
  MuiTableHead:{
    root:{
      '& h6':{
        color:theme.palette.primary.main,
        padding:'0px'
      },
      '& th':{
          paddingTop:theme.spacing(1),
          paddingBottom:theme.spacing(1),
      }
    }
  },
  MuiTableBody:{
    root:{
      marginTop:'5px',
      backgroundColor:'#F6F8FA'
    }
  }
};

export default theme;
