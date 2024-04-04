'use client';

import { CheckboxList } from '@monsterindia/global-ui-components';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface IFormInputs {
	TextField: string;
	male: boolean;
	female: boolean;
}

export default function CheckboxForm() {
	const { handleSubmit, control, reset } = useForm<IFormInputs>({
		defaultValues: {
			male: false,
			female: false
		}
	});
	const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

	return (
		<form
			className='border border-gray-300 p-4 flex flex-col gap-2'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Controller
				name='male'
				control={control}
				rules={{ required: true }}
				render={({ field }) => {
					console.log('field', field);
					return <input type='checkbox' {...field} />;
				}}
			/>
			<Controller
				name='female'
				control={control}
				rules={{ required: true }}
				render={({ field }) => {
					console.log('field', field);
					return <input type='checkbox' {...field} />;
				}}
			/>
			<input type='submit' />
		</form>
	);
}
