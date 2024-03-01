import { AppLayout, AuthLayout, DefaultLayout } from '@/layouts';
import { Landing, NotFound } from '@/pages';
import { NewPassword, RecoverPassword, SignIn, SignUp } from '@/pages/auth';
import { App, NetWorth, Settings, Transactions } from '@/pages/protected';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '/',
				element: <Landing />,
			},
		],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: '/auth',
				element: <SignIn />,
			},
			{
				path: 'new-password',
				element: <NewPassword />,
			},
			{
				path: 'recover-password',
				element: <RecoverPassword />,
			},
			{
				path: 'sign-in',
				element: <SignIn />,
			},
			{
				path: 'sign-out',
				element: <SignIn />,
			},
			{
				path: 'sign-up',
				element: <SignUp />,
			},
		],
	},
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: 'app',
				element: <App />,
			},
			{
				path: 'transactions',
				element: <Transactions />,
			},
			{
				path: 'net-worth',
				element: <NetWorth />,
			},
			{
				path: 'settings',
				element: <Settings />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
