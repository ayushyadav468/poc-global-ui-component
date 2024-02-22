'use client';

import { useForm } from 'react-hook-form';

export default function TestForm() {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm();
	const onSubmit = (data: unknown) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				className='w-full p-2 border border-gray-300 rounded-md'
				placeholder='Enter your first name'
				{...register('firstName', { required: true })}
				aria-invalid={errors.firstName ? 'true' : 'false'}
			/>
			{errors.firstName?.type === 'required' && (
				<p role='alert'>First name is required</p>
			)}

			<input
				className='w-full p-2 border border-gray-300 rounded-md'
				placeholder='Enter your email address'
				{...register('mail', { required: 'Email Address is required' })}
				aria-invalid={errors.mail ? 'true' : 'false'}
			/>
			{errors.mail && <p role='alert'>{errors.mail.message as string}</p>}

			<input type='submit' />
		</form>
	);
}
