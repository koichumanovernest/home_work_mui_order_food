import { Button as MuiButton } from "@mui/material";

const Button = ({
	children,
	variant = "contained",
	borderStyle = "rounded",
	onClick,
	...restProps
}) => {
	return (
		<MuiButton
			onClick={onClick}
			variant={variant}
			borderStyle={borderStyle}
			{...restProps}>
			{children}
		</MuiButton>
	);
};

export default Button;


