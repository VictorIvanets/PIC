import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './sass/index.sass'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './app/Providers/ChangeLeng/LengProvider'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorBoundarie } from 'app/Providers/Error/ErrorBoundarie'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
	<React.StrictMode>
		<BrowserRouter
		// basename='newfront'
		>
			<ErrorBoundary FallbackComponent={ErrorBoundarie}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</React.StrictMode>,
)
