import styled from "styled-components"

export const HeaderNav = styled.div`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  z-index: 99;
`
export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.color};
  }
  span {
    height: 1rem;
    width: 1rem;
    background: ${props => props.theme.red};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`
export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.color};
      margin: 8px;
    }
  }
`
