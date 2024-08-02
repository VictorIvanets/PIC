import { useTheme } from 'app/Providers/Theme/useTheme'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { className } from 'shared/lib/helpers/classNames/classNames'
export const Sidebar = () => {
	const { theme } = useTheme()
	const [hidden, setHidden] = useState(false)

	return (
		<>
			<aside
				className={className('sidebar', { sidebarhidden: hidden === true ? true : false }, [])}
			>
				<div className="sidebar__linkbox">
					<NavLink className="sidebar__linkbox__link" to={'/art'}>
						PICTURES
					</NavLink>
					<NavLink className="sidebar__linkbox__link" to={'/'}>
						MAIN
					</NavLink>
					<NavLink className="sidebar__linkbox__link" to={'/'}>
						ABOUT
					</NavLink>
				</div>
				<button
					onClick={() => setHidden(!hidden)}
					className={className(
						'sidebar__hiddenbtn',
						{ hiddenbtnhid: hidden === true ? true : false },
						[],
					)}
				>
					SIDEBAR
				</button>
			</aside>
		</>
	)
}
