import React from 'react'
import heroMobile from '/images/image-hero-mobile.png'
import heroDesk from '/images/image-hero-desktop.png'
import clients from '../../data/clients.json'
import { nanoid } from 'nanoid'

export default function Main() {
	return (
		<main>
			<picture className='hero'>
				<source
					media='(min-width: 55rem)'
					srcSet={heroDesk}
					width={960}
					height={1280}
				/>
				<img
					src={heroMobile}
					alt=''
					width={750}
					height={564}
				/>
			</picture>
			<div className='text'>
				<h2 className='title'>
					<span>Make</span> remote work
				</h2>
				<p className='description'>
					Get your team in sync, no matter your location. Streamline processes,
					create team rituals, and watch productivity soar.
				</p>
				<a
					href='#'
					className='main-link'
					aria-label='Learn more about remote work'
				>
					Learn more
				</a>
				<div>
					<h2 className='sr-only'>Our clients</h2>
					<ul className='clients'>
						{clients.map(client => (
							<li
								key={nanoid()}
								className='client'
							>
								<a href='#'>
									<img
										src={client.img}
										alt={`${client.name}`}
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	)
}
