import React from 'react'

export default function Auth(props) {
	return (
		<div
			className='auth menu-item'
			style={{
				display: props.show ? 'flex' : 'none',
				textAlign: 'center',
			}}
		>
			<a
				href='#'
				className='item log menu-item'
				style={{ alignSelf: 'center' }}
			>
				Login
			</a>
			<a
				href='#'
				className='item reg menu-item'
				style={{
					border: '0.1rem solid hsl(var(--clr-neutral-2))',
					borderRadius: '1rem',
					padding: '0.75rem 1.25rem',
				}}
			>
				Register
			</a>
		</div>
	)
}
