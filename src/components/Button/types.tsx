import { ReactNode } from "react";
import { RuleSet } from "styled-components";

export type VariantMapType = {
  contained: RuleSet<object>;
  outlined: RuleSet<object>;
  text: RuleSet<object>;
};

export type BtnPropsType = {
  $variant: keyof VariantMapType;
  $btnColor: string;
  isDisabled: boolean;
  children: ReactNode;
};

export type StyledPropsType = {
  $btnColor: string;
};
