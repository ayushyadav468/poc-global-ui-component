import * as zod from 'zod';

const phoneRegex = new RegExp(
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = zod.object({
	name: zod.string().min(3),
	email: zod
		.string()
		.min(4)
		.email('Invalid email')
		.regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email'),
	phoneNumber: zod
		.string()
		.min(10)
		.max(10)
		.regex(phoneRegex, 'Invalid phone number')
});

export { formSchema };
