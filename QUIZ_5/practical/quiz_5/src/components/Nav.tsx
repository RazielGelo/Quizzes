import navStyles from '@/styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
	return (
		<div className={navStyles.navcontainer}>
			<div className={navStyles.subcontainer1}>
				<Link href='/meet'><p>meet minions</p></Link>
				<Link href='/gallery'><p>minions gallery</p></Link>
				<Link href='/post'><p>post minions</p></Link>
			</div>
			<div className={navStyles.subcontainer2}>
				<Link href='/login'><p>login</p></Link>
				<Link href='/register'><p>register</p></Link>
			</div>
		</div>
	)
}

export default Nav