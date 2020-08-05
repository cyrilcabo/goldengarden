//Material components
import Grid from '@material-ui/core/Grid';

//Custom components
import HomeBanner from '../components/Home/banner';
import HomeProducts from '../components/Home/products';
import HomeStories from '../components/Home/stories';

const Index = (props) => {
	return (
		<Grid item xs={12}>
			<HomeBanner />
			<HomeProducts products={props.store.products} />
			<HomeStories />
		</Grid>
	);
} 

export default Index;