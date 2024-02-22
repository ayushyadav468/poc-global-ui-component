'use client';

import { Button, Input, Label } from '@monsterindia/global-ui-components';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { formSchema } from '@/schema/formSchema';
import { FormDataType } from '@/types/form';

const Form = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<FormDataType>({
		resolver: zodResolver(formSchema)
	});

	const onSubmit = (data: FormDataType) => {
		console.log(data);
	};

	return (
		<form
			className='border border-gray-300 p-4 flex flex-col gap-2'
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>
			<div>
				<Label labelText='Name' htmlFor='name'>
					<Input
						id='name'
						label='Name'
						type='text'
						placeholder='Enter your name'
						{...register('name', { required: true })}
						errorText={errors.name ? 'Name is required' : ''}
					/>
				</Label>
				<Label labelText='Email' htmlFor='email'>
					<Input
						id='email'
						type='email'
						placeholder='Enter your email'
						{...register('email', {
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'Email is invalid'
							}
						})}
						errorText={
							errors.email
								? errors.email?.type === 'too_small'
									? 'Email is required'
									: errors.email?.type === 'invalid_string'
									? 'Invalid email'
									: ''
								: ''
						}
					/>
				</Label>
				<Label labelText='Phone Number' htmlFor='phoneNumber'>
					<Input
						id='phoneNumber'
						placeholder='Enter your phone number'
						type='tel'
						maxLength={10}
						{...register('phoneNumber', {
							required: 'Phone number is required'
						})}
						errorText={
							errors.phoneNumber
								? errors.phoneNumber?.type === 'too_small'
									? 'Phone number is required'
									: errors.phoneNumber?.type === 'invalid_string'
									? 'Invalid phone number'
									: ''
								: ''
						}
					/>
				</Label>
			</div>

			<Button type='submit' label='Submit' modifier='primary' />
		</form>
	);
};

export default Form;
