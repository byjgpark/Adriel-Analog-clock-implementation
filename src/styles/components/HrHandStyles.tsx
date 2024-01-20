import styled from "styled-components";

const HrHandStyles = styled.div<{ degree?: number }>`
  
  // Seperate this css
  position: absolute;
  transform-origin: bottom;
  border-radius: 40%;
  // 

  width: 16px;
  height: 160px;
  background: #999;
  top: calc(50% - 160px);
  left: calc(50% - 8px);
  rotate: ${(props) => props.degree}deg;
`;

export default HrHandStyles;
