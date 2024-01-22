import styled from "styled-components";
import BaseStyles from "../global/BaseStyles";

const HrHandStyles = styled(BaseStyles)<{ degree: number }>`
  
  width: 16px;
  height: 160px;
  background: #999;
  top: calc(50% - 160px);
  left: calc(50% - 8px);
  rotate: ${(props) => props.degree}deg;
`;

export default HrHandStyles;
