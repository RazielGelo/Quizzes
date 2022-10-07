import Image from 'next/image'
import footerStyles from '../styles/Footer.module.sass'
const Footer = () => {
	return (
		<div>
			<div className={footerStyles.image}>
				<Image src='/images/footer.png' width='210px' height='55px' alt='footerlogo' />
			</div>
			<p className={footerStyles.p}>Copyright 2021-2022 YUGIOH AllRights Reserved</p>
		</div>
	)
}

export default Footer