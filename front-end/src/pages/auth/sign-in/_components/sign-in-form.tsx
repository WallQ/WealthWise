import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { SignInSchema, type SignIn } from '@/validators/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Twitter } from 'lucide-react';
import { Fragment } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function SignInForm() {
	const { toast } = useToast();

	const form = useForm<SignIn>({
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: '',
			password: '',
			remember: false,
		},
	});

	const onSubmit: SubmitHandler<SignIn> = (data) => {};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				name='sign-in-form'
				className='flex w-full flex-col gap-4'>
				<FormField
					control={form.control}
					name='email'
					disabled={form.formState.isSubmitting}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='user@pulseconnect.com'
									autoComplete='email'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					disabled={form.formState.isSubmitting}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='********'
									autoComplete='current-password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-center'>
					<FormField
						control={form.control}
						name='remember'
						render={({ field }) => (
							<FormItem className='flex flex-row gap-x-3 space-y-0'>
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
										disabled={form.formState.isSubmitting}
									/>
								</FormControl>
								<FormLabel>Remember me</FormLabel>
							</FormItem>
						)}
					/>
					<Link
						href={APP_ROUTES.AUTH.FORGOT_PASSWORD}
						className='text-sm text-primary underline-offset-4 hover:underline'>
						Forgot your password?
					</Link>
				</div>
				<Button
					type='submit'
					className='w-full'
					disabled={form.formState.isSubmitting}>
					{form.formState.isSubmitting ? (
						<Fragment>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Submitting...
						</Fragment>
					) : (
						<Fragment>Submit</Fragment>
					)}
				</Button>
				<Separator />
				<Link
					to={}
					className={`w-full ${buttonVariants({
						variant: 'secondary',
					})}`}>
					Create an account
				</Link>
				<Button
					type='button'
					variant='outline'
					className='w-full'>
					<Twitter className='mr-2 h-4 w-4' />
					Continue with Twitter
				</Button>
			</form>
		</Form>
	);
}
