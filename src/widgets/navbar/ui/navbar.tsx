import { useTheme } from 'app/Providers/Theme/useTheme'
import { className } from 'shared/lib/helpers/classNames/classNames'

// srr in ts
export const Navbar = () => {
	const { theme } = useTheme()
	return (
		<>
			<nav className={className('navbar', {}, [])}>
				<div>
					<button className="navbar__lengbtn">FR</button>
					<button className="navbar__lengbtn">ENG</button>
					<button className="navbar__lengbtn">UA</button>
				</div>
				<div>
					<button className="navbar__lengbtn">FR</button>
					<button className="navbar__lengbtn">ENG</button>
					<button className="navbar__lengbtn">UA</button>
				</div>
			</nav>
		</>
	)
}
