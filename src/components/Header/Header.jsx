import React from 'react'
import Theme from './Theme'
import logo from '/images/logo.svg'
import MobileMenu from './MobileMenu'
import NavItems from './NavItems'
import Auth from './Auth'

export default function Header() {
	const [dark, setDark] = React.useState(false)

	const root = document.querySelector(':root')

	React.useEffect(() => {
		const mode = localStorage.getItem('mode')
		if (mode && mode === 'dark') {
			root.classList.add('dark')
			setDark(true)
		}
	}, [])

	const handleToggle = () => {
		setDark(prevDark => !prevDark)
		root.classList.toggle('dark')
		if (root.classList.contains('dark')) {
			localStorage.setItem('mode', 'dark')
		} else {
			localStorage.setItem('mode', 'light')
		}
	}

	return (
		<header>
			<h1 className='sr-only'>
				Frontend Mentor | Intro section with dropdown navigation
			</h1>
			<a
				href='#'
				className={dark ? 'logo dark' : 'logo'}
			>
				<img
					src={logo}
					alt='Site logo'
					width={84}
					height={27}
				/>
			</a>
			<nav className='nav'>
				<div className='mobile'>
					<Theme
						dark={dark}
						onClick={handleToggle}
					/>
					<MobileMenu dark={dark} />
				</div>
				<div className='desk'>
					<ul className='nav-items'>
						<NavItems show={true} />
					</ul>
					<Theme
						dark={dark}
						onClick={handleToggle}
					/>
					<Auth show={true} />
				</div>
			</nav>
		</header>
	)
}
