import { MainLayout } from 'components/layouts/MainLayout';
import { HomePage } from 'pages/HomePage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to='/' />,
	},
]);
