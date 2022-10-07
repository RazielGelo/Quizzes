import navStyles from '../styles/Nav.module.sass'
import Link from 'next/link'

const Nav = () => {
	return (
		<nav className={navStyles.navbar}>
			<ul className={navStyles.ul1}>
				<li><Link href='/'>HOME</Link></li>
				<li><Link href='/'>WHAT</Link></li>
				<li><Link href='/'>HOW</Link></li>
				<li><Link href='/'>CARDS</Link></li>
			</ul>
			<ul className={navStyles.ul2}>
				<li><Link href='/'>LOGIN</Link></li>
				<li><Link href='/'>SIGNUP</Link></li>
			</ul>
		</nav>
	)
}

export default Nav

	// < div className = { navStyles.navbar } >
	// 		<div className={navStyles.home}>
	// 			<Link href='/'>HOME</Link>
	// 		</div>
	// 		<div className={navStyles.what}>
	// 			<Link href='/What'>WHAT</Link>
	// 		</div>
	// 		<div className={navStyles.how}>
	// 			<Link href='/How'>HOW</Link>
	// 		</div>
	// 		<div className={navStyles.cards}>
	// 			<Link href='/Cards'>CARDS</Link>
	// 		</div>
	// 		<div className={navStyles.login}>
	// 			<Link href='/Login'>LOGIN</Link>
	// 		</div>
	// 		<div className={navStyles.signup}>
	// 			<Link href='/Signup'>SIGNUP</Link>
	// 		</div>
	// 	</div >