const style = {
	position: 'absolute',
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	cursor: 'move',
	width: 'max-content',
};
const role = 'Box';
export const Box = ({ left, top, children }) => {
	return (
		<div style={{ ...style, left, top }} role={role}>
			{children}
		</div>
	);
};
