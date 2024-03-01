import { Outlet } from 'react-router-dom';

export default function AppLayout() {
	return (
		<main>
			App Layout
			<Outlet />
		</main>
	);
}
