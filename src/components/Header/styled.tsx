import styled from "styled-components";
import moon from "assets/icons/moon.svg";
import sun from "assets/icons/sun.svg";

export const Wrapper = styled.nav`
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em;
  justify-content: space-around;
  text-align: center;
  z-index: 5;

  @media screen and (min-width: 768px) {
    position: fixed;
    flex-direction: row;
    padding: 0;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

`;

export const Title = styled.h1`
  font-size: 1.5em;
  background-image: ${props => props.theme.titleHeader}; 
  margin: auto 0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Navigation = styled.nav `
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 80vw;

  @media screen and (min-width: 480px) {
    width: auto;
    flex-direction: row;
  }

  li {
    margin: .2em 0;
    justify-self: center;
  }
`;

export const Items = styled.a`
  color: ${props => props.theme.itemsHeader};
  font-size: 1em;;
  font-weight: 400;
  padding: 0em;
  margin: 0 .5em; 
  border-radius: 2px;

    &:hover {
    background-color: #597bf720;
    padding: .3em;
    margin: 0 .2em;
    transition: .2s;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin: 0 1em;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 53px;
  height: 28px;
  border-radius: 15px;
  background: #212C49;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background: #D7D7D7;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  &::after {
    background-image: url(${moon});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  width: 53px;
  height: 28px;
  border-radius: 15px;
  cursor: pointer;

  &:checked + ${CheckBoxLabel} {
    background: #D7D7D7;

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      background: #161D37;
      margin-left: 25px;
      transition: 0.2s;
    }

    &::after {
    background-image: url(${sun});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    }
  }
`;