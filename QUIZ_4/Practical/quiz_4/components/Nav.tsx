import navStyles from '../styles/Nav.module.sass'
import Link from 'next/link'

const Nav = () => {
	return (
		<nav className={navStyles.navbar}>
			<ul className={navStyles.ul1}>
				<li><Link href='/'>HOME</Link></li>
				<li><Link href='/what'>WHAT</Link></li>
				<li><Link href='/how'>HOW</Link></li>
				<li><Link href='/cards'>CARDS</Link></li>
			</ul>
			<ul className={navStyles.ul2}>
				<li><Link href='/login'>LOGIN</Link></li>
				<li><Link href='/signup'>SIGNUP</Link></li>
			</ul>
		</nav>
	)
}

export default Nav