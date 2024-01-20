import styled from "styled-components";

const SecHandStyles = styled.div<{ degree?: number }>`

  // Seperate this css
  position: absolute;
  transform-origin: bottom;
  border-radius: 40%;
  // 
  
  width: 4px;
  height: 200px;
  background: #0bd;
  top: calc(50% - 200px);
  left: calc(50% - 2px);
  rotate: ${(props) => props.degree}deg;

  &::after {
    border-radius: 50%;
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    background: #0bd;
    position: absolute;
    bottom: -15px;
    left: -15px;
  }
`;

export default SecHandStyles;
