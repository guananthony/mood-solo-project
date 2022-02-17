import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
	<Box
		component='span'
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
		•
	</Box>
);

const card = (lyric, annotation) => (
	<React.Fragment>
		<CardContent>
			<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
				ig caption
			</Typography>
			<Typography variant='h5' component='div'>
				{lyric}
			</Typography>
			<Typography sx={{ mb: 1.5 }} color='text.secondary'>
				{annotation}
			</Typography>
			<Typography variant='body2'>
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size='small'>Learn More</Button>
		</CardActions>
	</React.Fragment>
);

function CaptionCard(props) {
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant='outlined'>{card(props.lyric, props.annotation)}</Card>
		</Box>
	);
}

export default CaptionCard;
