import { useLeng } from 'app/Providers/ChangeLeng/useLeng'
import className from 'shared/lib/helpers/classNames/classNames'
import { useState, useEffect, memo, useCallback } from 'react'
import { useTheme } from 'app/Providers/Theme/useTheme'

export const ArticlesPage = memo(() => {
	const { leng } = useLeng()
	const { theme } = useTheme()

	return (
		<article className={className('articles', { dark: theme === 'dark' ? true : false }, [])}>
			<div>ART</div>
		</article>
	)
})

export default ArticlesPage
