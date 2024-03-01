import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
	return (
		<main>
			Default Layout
			<Outlet />
		</main>
	);
}
