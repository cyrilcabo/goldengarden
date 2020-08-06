//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 468,
		[theme.breakpoints.down('xs')]: {
			padding: '50px 0px',
		}
	},
	outerContainer: {
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		}
	},
	container: {
		'& > div.MuiGrid-item': {
			justifyContent: 'center',
			textAlign: 'center',
			[theme.breakpoints.up('md')]: {
				width: '80%',
				display: 'flex',
			},
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 25,
		}
	},
	title: {
		fontSize: '1.8rem',
		margin: '0px 0px 20px 0px',
		color: '#E69E0C',
		[theme.breakpoints.down('md')]: {
			fontSize: '1.7rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
			marginBottom: 0,
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.3rem',
		}
	},
	details: {
		fontSize: '1rem',
		margin: 0,
		lineHeight: '25px',
		letterSpacing: '1px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.85rem',
			lineHeight: '20px',
		}
	},
}));

const AboutGoals = () => {
	const classes = useStyle();
	const goals = [
		{
			title: 'MISSION',
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		{
			title: "VISION",
			content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
		}
	];
	const mappedGoals = goals.map((item, key) => {
		return <Grid item key={key} xs={12} sm={10} md={6} container direction="column" alignItems="center" className={classes.container}>
			<Grid item> 
				<h4 className={classes.title}> {item.title} </h4>
			</Grid>
			<Grid item>
				<p className={classes.details}> {item.content} </p>
			</Grid>
		</Grid>
	});
	return (
		<Grid item xs={12} className={classes.root} container alignItems="center" justify="center">
			<Grid item container xs={11} md={10} justify="space-between" className={classes.outerContainer}>
				{mappedGoals}
			</Grid>
		</Grid>
	);
}

export default AboutGoals;