import SignInForm from './_components/sign-in-form';

export default function SignIn() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<h1 className='text-base font-bold tracking-tight'>Sign In</h1>
			<p className='text-sm leading-7 text-muted-foreground'>
				Welcome back! Please login to your account to access the
				dashboard.
			</p>
			<SignInForm />
		</div>
	);
}
