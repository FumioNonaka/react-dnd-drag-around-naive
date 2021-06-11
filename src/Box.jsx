import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const style = {
	position: 'absolute',
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	cursor: 'move',
	width: 'max-content',
};
const role = 'Box';
export const Box = ({ id, left, top, children }) => {
	const [, drag] = useDrag(() => ({
		type: ItemTypes.BOX,
		item: { id, left, top },
	}), [id, left, top]);
	return (
		<div ref={drag} style={{ ...style, left, top }} role={role}>
			{children}
		</div>
	);
};
