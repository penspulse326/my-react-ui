import { ReactNode } from "react";
import StyledButton from "./styled";
import { useColor } from "../../hooks/useColor";

const Button = ({ $variant, isDisabled, themeColor, ...props }: PropsType) => {
  const { makeColor } = useColor();
  const btnColor = makeColor({ themeColor, isDisabled });

  return (
    <StyledButton
      $variant={$variant}
      isDisabled={isDisabled}
      $btnColor={btnColor}
      {...props}
    >
      <span>{props.children}</span>
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "contained",
  className: null,
  themeColor: "primary",
  isLoading: false,
  isDisabled: false,
  startIcon: null,
  endIcon: null,
  onClick: () => {},
};

export type PropsType = {
  $variant: "outlined" | "contained" | "text";
  isDisabled: boolean;
  themeColor: string;
  children: ReactNode;
};

export default Button;
