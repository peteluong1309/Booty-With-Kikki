import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#f8bbd0', //100
            main: '#f06292', //300
            dark: '#e91e63', //400
            contrastText: '#4caf50' //green
        },
        secondary: {
            light: '#e1bee7',
            main: '#ba68c8',
            dark: '#ab47bc',
            contrastText: '#ffeb3b' //yellow
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        }
    },
    typography: {
        fontFamily: `'Roboto', "Helvetica", "Arial", "sans-serif"`,

    },
    text: {
        
    }
})

export default theme;