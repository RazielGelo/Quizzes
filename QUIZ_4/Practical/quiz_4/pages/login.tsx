import mainStyles from '../styles/Main.module.sass'
import Image from 'next/image'

const login = () => {
	return (
		<main className={mainStyles.main}>
			<div>
				<h1>LOGIN</h1>
				<p>LEARN AND PLAY THE BEST CARD GAME.</p>
			</div>
			<form>
				<input type="email" placeholder="YOUR EMAIL" />
				<br />				
				<input type="password" placeholder="PASSWORD" />
				<br />
				<button>
					<Image src='/images/signup.png' width='187px' height='105px' alt='signuplogo' />
				</button>
			</form>
		</main>
	)
}

export default login