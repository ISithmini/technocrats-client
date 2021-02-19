import React from 'react';
import './Button.css';

const TYPES = ['primary', 'outLine', 'primary-float'];
const COLOURS = ['gold-yellow'];
const SIZES = ['btn-medium', 'btn-large', 'btn-small', 'btn-wide'];

const Button = ({buttonType, buttonColour, buttonSize, children, onClick}) => {

	const checkButtonStyle = TYPES.includes(buttonType) ? buttonType : TYPES[0];
	const checkButtonColor = COLOURS.includes(buttonColour) ? buttonColour : COLOURS[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button 
			className={`${checkButtonStyle} ${checkButtonColor} ${checkButtonSize}`} 
			onClick={onClick}
		>{children}</button>
	);
};

export default Button;