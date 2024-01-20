import styled from "styled-components";

const MinHandStyles = styled.div<{ degree?: number }>`
  
  // Seperate this css
  position: absolute;
  transform-origin: bottom;
  border-radius: 40%;
  // 

  width: 10px;
  height: 220px;
  background: #999;
  top: calc(50% - 220px);
  left: calc(50% - 5px);
  rotate: ${(props) => props.degree}deg;
`;

export default MinHandStyles;
