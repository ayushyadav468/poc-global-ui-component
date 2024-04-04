'use client';

// import { Button, Input, Label } from '@monsterindia/global-ui-components';
import { Button, CheckboxList } from '@monsterindia/global-ui-components';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { formSchema } from '@/schema/formSchema';
import { FormDataType } from '@/types/form';
import { useState } from 'react';

const Form = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		// resolver: zodResolver(formSchema)
	});

	const [checkedValues, setCheckvalues] = useState<string[]>([]);

	const onSubmit = (data: unknown) => {
		console.log('Submitted data: ', data);
	};

	const options = [
		{
			value: 'true',
			id: 'id-1',
			displayName:
				'By using this site, you agree to our Terms of Use and Privacy Policy.'
		},
		{
			value: 'opt-2',
			id: 'id-2',
			displayName: 'Orange'
		}
		// {
		// 	value: 'opt-3',
		// 	id: 'id-3',
		// 	displayName: 'Kiwi'
		// }
	];

	const eventFunctionHandler = (event: { values?: string[] }) => {
		// check state of checkbox
		setCheckvalues(event.values!);

		console.log('Checkbox list', event.values);
	};

	return (
		<form
			className='border border-gray-300 p-4 flex flex-col gap-2'
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>
			<div>
				<CheckboxList
					options={options}
					layout={'col'}
					size={'small'}
					eventChangeHandler={eventFunctionHandler}
					defaultChecked={['true']}
				/>
				<input
					id='name'
					type='text'
					placeholder='Enter your name'
					{...register('name', { required: true })}
				/>

				{/* <Label labelText='Name' htmlFor='name'>
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
				</Label> */}
			</div>

			<Button type='submit' label='Submit' modifier='primary' />
		</form>
	);
};

export default Form;
