import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage/index'
import { useSelector } from 'react-redux'
import { RouteProps, RouterProps } from 'react-router-dom'
import { PreLoader } from 'widgets/PreLoader'
import { NotFound } from 'widgets/not_found'

export type AppRouterProps = RouteProps & {
	path: string
	authOnli?: boolean
}

export enum AppRoutes {
	MAIN = 'main',
	// ABOUT = 'about',
	LOADER = 'load',
	ART = 'art',
	NOTFOUND = 'notfound',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	// [AppRoutes.ABOUT]: '/about',
	[AppRoutes.LOADER]: '/load',
	[AppRoutes.ART]: '/art',
	[AppRoutes.NOTFOUND]: '/*',
}

export const routerConfig: Record<AppRoutes, AppRouterProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.ART]: {
		path: RoutePath.art,
		element: <ArticlesPage />,
	},
	// [AppRoutes.ABOUT]: {
	// 	path: RoutePath.about,
	// 	element: <AboutPage />,
	// },
	[AppRoutes.LOADER]: {
		path: RoutePath.load,
		element: <PreLoader />,
	},

	[AppRoutes.NOTFOUND]: {
		path: RoutePath.notfound,
		element: <NotFound />,
	},
}
