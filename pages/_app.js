import App from 'next/app';

import Layout from '../components/layout';
import ScrollToTop from '../utils/scrolltotop';

const MegaGYM = ({Component, pageProps, store, custom}) => {
	return <ScrollToTop>
		<Layout> 
			<Component {...pageProps} />
		</Layout>
	</ScrollToTop>
}

MegaGYM.getInitialProps = async ({Component, ctx}) => {
	const products = [
		{
			name: "Rose",
			details: "A lovely flower, it is. Gives your garden a romantic and warm aura.",
			target: "rose",
			img: "rose.png",
			cost: 120,
			featured: true,
		},
		{
			name: "Cactus",
			details: "Cactus is a good plant. It gives an area an ambient and cool vibe. It is low maintenance too!",
			target: "cactus",
			img: "cactus.png",
			cost: 200,
			featured: true,
		},
		{
			name: "Daisy",
			details: "A very common flower plant to decorate your garden. Livens up the mood.",
			target: "daisy",
			img: "daisy.png",
			cost: 130,
			featured: true,
		},
		{
			name: "Magnolia",
			details: "A lovely flower it is. Gives your garden a very nature-ish vibe.",
			target: "magnolia",
			img: "magnolia.png",
			cost: 115,
			featured: false,
		},
		{
			name: "Mallows",
			details: "This is  a very good flower. It gives you the true feeling of summer.",
			target: "mallows",
			img: "mallows.png",
			cost: 125,
			featured: false,
		},
		{
			name: "Buttercups",
			details: "A flower with a vibrant color. It gives off the vibe of happiness, optimism, creativity and spring.",
			target: "buttercups",
			img: "Buttercup.png",
			cost: 130,
			featured: false,
		}
	];
	const pageProps = Component.getInitialProps ? await Component.getInitialProps({...ctx, store: {products}}) : {store: {products}};
	return {pageProps: pageProps};
}




export default MegaGYM;