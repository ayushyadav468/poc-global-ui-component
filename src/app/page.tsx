// import PillComponent from '@/components/PillComponent';
// import CheckboxForm from '@/components/checkboxForm';
// import Form from '@/components/form';
// import TestForm from '@/components/testForm';

import ModalComponent from '@/components/ModalComponent';
import '@monsterindia/global-ui-components/dist/styles.css';

export default function Home() {
	return (
		<main className='flex flex-col gap-2 mt-4'>
			<h1 className='text-xl font-bold text-center'>Input component POC</h1>
			<div className='w-1/2 mx-auto'>
				<ModalComponent />
				{/* <Form /> */}
				{/* <CheckboxForm /> */}
				{/* <PillComponent /> */}
			</div>

			<div className='w-1/2 mx-auto'>{/* <TestForm /> */}</div>
		</main>
	);
}
