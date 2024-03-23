import React from 'react'
import navItems from '../../data/nav-items.json'
import arrow from '/images/icon-arrow-down.svg'
import SubItems from './SubItems'
import { nanoid } from 'nanoid'

export default function NavItems(props) {
	const [items, setItems] = React.useState(navItems)

	// Add 'dropped' property when a dropdown is displayed
	const handleItemClick = id => {
		setItems(prevItems =>
			prevItems.map(item =>
				item.name === id
					? {
							...item,
							dropped: item.dropped === undefined ? true : !item.dropped,
					  }
					: { ...item, dropped: false }
			)
		)
	}

	// CLOSE DROPDOWNS
	// Click outside
	document.addEventListener('click', e => {
		if (!e.target.classList.contains('sub-item')) {
			setItems(navItems)
		}
	})

	// Escape
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			setItems(navItems)
		}
	})

	// Menu collapsed (mobile)
	React.useEffect(() => {
		!props.show && setItems(navItems)
	}, [props.show])

	return items.map(item => (
		<li
			key={nanoid()}
			className='menu-item'
		>
			{item.subItems ? (
				<>
					<button
						className='item menu-item sub-item'
						type='button'
						aria-expanded={item.dropped ? 'true' : 'false'}
						style={{
							display: props.show ? 'flex' : 'none',
							alignItems: 'center',
							gap: '0.4rem',
						}}
						onClick={() => handleItemClick(item.name)}
						autoFocus={item.dropped && true}
					>
						{item.name}
						<img
							className='menu-item sub-item'
							src={arrow}
							alt=''
							width={10}
							height={6}
							style={{
								rotate: item.dropped ? '180deg' : 0,
							}}
						/>
					</button>
					<SubItems
						dropped={item.dropped}
						subItems={item.subItems}
					/>
				</>
			) : (
				<a
					href='#'
					className='item menu-item'
					style={{
						display: props.show ? 'inline' : 'none',
					}}
				>
					{item.name}
				</a>
			)}
		</li>
	))
}
