import React from 'react'
import { nanoid } from 'nanoid'

export default function SubItems(props) {
	return (
		<ul
			className='sub-items menu-item sub-item'
			aria-hidden={props.dropped ? 'false' : 'true'}
			style={{
				display: props.dropped ? 'grid' : 'none',
				justifyItems: 'start',
				gap: '1rem',
			}}
		>
			{props.subItems.map(subitem => (
				<li
					key={nanoid()}
					className='menu-item sub-item'
				>
					<a
						href='#'
						className='item menu-item sub-item'
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '1rem',
						}}
					>
						{subitem.img && (
							<img
								className='menu-item sub-item'
								src={subitem.img}
								alt=''
								width={16}
								height={16}
							/>
						)}
						{subitem.name}
					</a>
				</li>
			))}
		</ul>
	)
}
