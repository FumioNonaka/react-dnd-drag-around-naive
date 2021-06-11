import { useState } from 'react';
import { Box } from './Box';

const styles = {
	width: 300,
	height: 300,
	border: '1px solid black',
	position: 'relative',
};
export const Container = () => {
	const [boxes, setBoxes] = useState({
		a: { top: 20, left: 80, title: 'Drag me around' },
		b: { top: 180, left: 20, title: 'Drag me too' },
	});
	return (
		<div style={styles}>
			{Object.keys(boxes).map((key) => {
				const { left, top, title } = boxes[key];
				return (
					<Box key={key} id={key} left={left} top={top}>
						{title}
					</Box>
				);
			})}
		</div>
	);
};
