import { className } from '../shared/lib/helpers/classNames/classNames'
import { AppRouter } from './Providers/router'
import { Suspense, useEffect, useState } from 'react'
import { PreLoader } from 'widgets/PreLoader/index'
import { useTheme } from './Providers/Theme/useTheme'
import Fon from '../shared/assets/fon.svg'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar/ui/sidebar'

export function App() {
	const { theme } = useTheme()

	return (
		<main className="app">
			<Fon className="mainfon" />
			<section className="app__content">
				<Navbar />
				<Sidebar />
				<Suspense fallback={<PreLoader />}>
					<AppRouter />
				</Suspense>
			</section>
		</main>
	)
}
