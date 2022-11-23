import { Box } from '@mui/material';
import type { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import { Navbar, Sidebar } from '../UI';

interface Props {
	title?: string;
	children: React.ReactNode;
}

export const Layout: NextComponentType<NextPageContext, {}, Props> = ({
	title = 'FreeJira',
	children,
}) => {
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
		>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar />
			<Sidebar />
			<Box sx={{ padding: '10px 20px' }}>{children}</Box>
		</Box>
	);
};
