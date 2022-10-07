import mainStyles from '../styles/Main.module.sass'
import Image from 'next/image'

const signup = () => {
	return (
		<main className={mainStyles.main}>
			<div>
				<h1>SIGNUP</h1>
				<p>LEARN AND PLAY THE BEST CARD GAME.</p>
			</div>
			<form>
				<input type="email" placeholder="YOUR EMAIL" />
				<br />
				<input type="email" placeholder="EMAIL CONFIRMATION" />
				<br />
				<input type="password" placeholder="PASSWORD" />
				<br />
				<input type="password" placeholder="PASSWORD CONFIRMATION" />
				<br />
				<button>
					<Image src='/images/signup.png' width='187px' height='105px' alt='signuplogo' />
				</button>
			</form>
		</main>
	)
}

export default signup