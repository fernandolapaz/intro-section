import React from 'react'
import imgCross from '/images/icon-close-menu.svg'
import imgHamburger from '/images/icon-menu.svg'
import NavItems from './NavItems'
import Auth from './Auth'

export default function MobileMenu(props) {
	const [show, setShow] = React.useState(false)

	const handleClick = () => {
		setShow(prevShow => !prevShow)
	}

	// CLOSE MENU
	// Click outside
	document.addEventListener('click', e => {
		if (!e.target.classList.contains('menu-item')) {
			setShow(false)
		}
	})

	// Escape
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			setShow(false)
		}
	})

	return (
		<div className='mobile-menu menu-item'>
			<div
				style={{
					position: 'fixed',
					top: '0',
					left: '0',
					height: '100vh',
					width: show ? '100vw' : 0,
					transition: 'width 0.5s',
					backgroundColor: 'rgba(40, 45, 50, 0.8)',
					backdropFilter: 'blur(0.1rem)',
				}}
			></div>
			<button
				className='menu-item'
				type='button'
				aria-label={show ? 'Close navigation bar' : 'Open navigation bar'}
				aria-expanded={show ? 'true' : 'false'}
				onClick={handleClick}
				style={{
					position: show ? 'fixed' : 'static',
					top: '1.5rem',
					right: '1rem',
					zIndex: '1',
				}}
			>
				<img
					className='menu-item'
					src={show ? imgCross : imgHamburger}
					alt=''
					width={32}
					height={18}
					style={{
						filter: props.dark ? 'invert(90%) hue-rotate(180deg)' : 'none',
					}}
				/>
			</button>
			<div
				className='menu menu-item'
				aria-hidden={show ? 'false' : 'true'}
				style={{
					position: 'fixed',
					top: '0',
					right: '0',
					height: '100vh',
					backgroundColor: 'hsla(var(--clr-neutral-1), 0.8)',
					backdropFilter: 'blur(0.5rem)',
					width: show ? 'min(90vw, 15rem)' : 0,
					transition: 'width 0.5s',
					padding: show ? '5rem 2rem' : 0,
					display: 'grid',
					gap: '3rem',
					alignContent: 'start',
				}}
			>
				<ul
					className='list menu-item'
					style={{ display: 'grid', gap: '1.5rem' }}
				>
					<NavItems show={show} />
				</ul>
				<Auth show={show} />
			</div>
		</div>
	)
}
