import { StyledButton } from "./styled";

interface ButtonProps {
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <StyledButton {...props}>按鈕</StyledButton>;
}
