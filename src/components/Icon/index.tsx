import React from "react";
import { StyledImg, StyledLink, StyledItem } from "./styled";

interface IconProps {
  path: string
  icon: string
  alt: string
  text?: string
};

const Icon = ({ path, icon, alt, text }: IconProps) => {
  return (
    <StyledItem>
      <StyledLink href={path} target="_blank" rel="noopener noreferrer">
        <StyledImg src={icon} alt={alt} />
        {text && text}
      </StyledLink>
    </StyledItem>
  )
};

export default Icon;