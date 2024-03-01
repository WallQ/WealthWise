import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
	return (
		<main className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='mx-auto flex min-h-screen w-full max-w-[40rem] items-center justify-center'>
				<Outlet />
			</div>
		</main>
	);
}
