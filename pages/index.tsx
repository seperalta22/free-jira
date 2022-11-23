import { Typography } from '@mui/material';
import { Layout } from '../components/layouts';

export default function HomePage() {
	return (
		<Layout title='Home'>
			<Typography variant='h1' color='primary'>
				Hola Next
			</Typography>
		</Layout>
	);
}
