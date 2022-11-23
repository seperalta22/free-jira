import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import type { NextComponentType, NextPageContext } from 'next';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

interface Props {}

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts'];

export const Sidebar: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<Drawer anchor='left' open={true} onClose={() => {}}>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: '10px 20px' }}>
					<Typography variant='h6' noWrap component='div'>
						Menu
					</Typography>
				</Box>

				<List>
					{menuItems.map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? (
									<InboxIcon />
								) : (
									<DraftsIcon />
								)}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
			</Box>
		</Drawer>
	);
};
