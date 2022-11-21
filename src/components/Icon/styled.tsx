import styled from "styled-components";

const StyledItem = styled.li`
  background-size: cover;
  margin: .5em .5em;
  padding: .4em;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  
  &:hover {
    padding: .3em;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  padding: auto;
`;

export { StyledItem, StyledImg, StyledLink };