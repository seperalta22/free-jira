import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import type { NextComponentType, NextPageContext } from 'next';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface Props {}

export const Navbar: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<IconButton size='large' edge='start'>
					<MenuOutlinedIcon />
				</IconButton>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					FreeJira
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
