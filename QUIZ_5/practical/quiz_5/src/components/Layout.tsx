import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'
import React, { ReactNode } from 'react'

interface Props {
	children: ReactNode
}


const Layout = ({ children }: Props) => {
	return (

		<div className={styles.container}>
			<Nav />
				<main className={styles.main}>
					{children}
				</main>
			<Footer />
		</div>

	)
}

export default Layout