// import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'
import Footer from './Footer'
import layoutStyles from '../styles/Layout.module.sass'

interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div className={layoutStyles.container}>
			<Meta />
			<Nav />
			<div>
				<main>
					{children}
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default Layout