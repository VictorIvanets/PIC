import { useLeng } from 'app/Providers/ChangeLeng/useLeng'
import { useTheme } from 'app/Providers/Theme/useTheme'
import { memo } from 'react'
import { className } from 'shared/lib/helpers/classNames/classNames'

export const MainPage = memo(() => {
	const { leng } = useLeng()
	const { theme } = useTheme()

	return (
		<article className={className('mainpage', {}, [])}>
			<h1>MAIN</h1>
		</article>
	)
})

export default MainPage
