import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		secondary: {
			main: '#f19857b',
		},
		error: {
			main: red.A400,
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
