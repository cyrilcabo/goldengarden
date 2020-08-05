//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 580,
		backgroundColor: '#ecfae8',
		marginBottom: 80,
	},
	title: {
		fontSize: '2.5rem',
		textAlign: 'center',
		margin: '100px 0px 100px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
		[theme.breakpoints.down('xs')]: {
			margin: '70px 0px 50px 0px',
		}
	},
	container: {
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			'& > div.MuiGrid-item': {
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
				marginBottom: 20,
			},
			[theme.breakpoints.down('xs')]: {
				marginBottom:  35,
			}
		}
	},
	testimonyContent: {
		fontSize: '1.2rem',
		margin: '0px 0px 15px 0px',
		textAlign: 'justify',
		fontStyle: 'italic',
		[theme.breakpoints.down('md')]: {
			fontSize: '1.1rem',
		},
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1rem',
			marginBottom: 5,
		}
	},
	testimonyImg: {
		[theme.breakpoints.down('md')]: {
			height: 130,
		},
		[theme.breakpoints.down('xs')]: {
			height: 100,
		}
	},
	testimonyCustomer: {
		margin: 0,
		color: '#E69E0C',
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.9rem',
		}
	},
	storyContainer: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: 100,
		},
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
			marginBottom: 40,
		}
	}
}));

const HomeStories = () => {
	const classes = useStyle();
	const testimonies = [
		{
			name: "Johnny Depp",
			content: "The flowers are very pretty! The plant is healthy in general. They smell very good too! Very fast delivery, and very accomodating customer service!",
			img: 'officeman1.png',
		},
		{
			name: "Elvis Presley",
			content: "The flowers are very pretty! The plant is healthy in general. They smell very good too! Very fast delivery, and very accomodating customer service!",
			img: 'officeman2.png',
		}
	];
	const stories = testimonies.map((item, key) => {
		return <Grid item key={key} xs={11} sm={5} md={6} container justify={key%2===0 ?'flex-start' :'flex-end'} className={classes.container}>
			<Grid item xs={12} md={4}>
				<img src={`/images/customers/${item.img}`} className={classes.testimonyImg} />
			</Grid>
			<Grid item container xs={12} md={7} direction="column" className={classes.testimonyContainer}>
				<Grid item>
					<p className={classes.testimonyContent}> "{item.content}" </p>
				</Grid>
				<Grid item>
					<p className={classes.testimonyCustomer}> {item.name} </p>
				</Grid>
			</Grid>
		</Grid>
	});
	return (
		<Grid item xs={12} className={classes.root} container justify="center">
			<Grid item xs={11} md={10} lg={8} container direction="column" alignItems="center">
				<Grid item>
					<p className={classes.title}> Our Customer Stories </p>
				</Grid>
				<Grid item container className={classes.storyContainer} justify="space-between">
					{stories}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default HomeStories;