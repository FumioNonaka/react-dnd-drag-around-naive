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
// export const Box = ({ id, left, top, children }) => {
export const Box = ({ id, left, top, hideSourceOnDrag, children, }) => {
	// const [, drag] = useDrag(() => ({
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.BOX,
		item: { id, left, top },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}), [id, left, top]);
	if (isDragging && hideSourceOnDrag) {
		return <div ref={drag}/>;
	}
	return (
		<div ref={drag} style={{ ...style, left, top }} role={role}>
			{children}
		</div>
	);
};
