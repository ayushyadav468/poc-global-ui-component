export const checkValidNumber = (value: string) => {
	const regex = /^[0-9]+$/;
	return (
		regex.test(value) ||
		value === 'Backspace' ||
		value === 'Delete' ||
		value === 'ArrowLeft' ||
		value === 'ArrowRight' ||
		value === 'Tab'
	);
};
