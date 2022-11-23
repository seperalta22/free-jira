import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: grey[300],
			paper: '#ffffff',
		},
		primary: {
			main: '#4a148c',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: '#f44336',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#4a148c',
					elevation: 0,
				},
			},
		},
	},
});
