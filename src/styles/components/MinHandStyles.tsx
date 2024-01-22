import styled from "styled-components";
import BaseStyles from "../global/BaseStyles";

const MinHandStyles = styled(BaseStyles)<{ degree: number }>`
  
  width: 10px;
  height: 220px;
  background: #999;
  top: calc(50% - 220px);
  left: calc(50% - 5px);
  rotate: ${(props) => props.degree}deg;
`;

export default MinHandStyles;
