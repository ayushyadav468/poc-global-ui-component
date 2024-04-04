'use client';

import { Modal } from '@monsterindia/global-ui-components';
import { useState } from 'react';

const ModalComponent = () => {
	const [open, setOpen] = useState(false);

	const closeModal = () => {
		setOpen(false);
	};

	// isMobile = false,
	// screenAlignment = "right",

	return (
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
				voluptatibus quo. Voluptatem, dolorem a, molestiae maxime cumque ex id,
				suscipit sit modi iste expedita fuga? Officiis distinctio porro pariatur
				velit!
			</p>
			<button onClick={() => setOpen(true)}>Open Modal</button>
			<Modal
				showModal={open}
				closeModal={closeModal}
				screenAlignment='bottom-sheet'
			>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
					temporibus quaerat ipsum earum consectetur, accusamus enim eligendi
					sequi culpa assumenda cumque harum tempore, expedita aliquam sunt, ea
					distinctio ipsam. Ipsam!
					<div>
						<input
							type='text'
							style={{
								width: '100%',
								padding: '10px',
								border: '1px solid #000'
							}}
						/>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ModalComponent;
