import styled from 'styled-components';
import bgImage from '../../images/Kha_flat_simple_design_Porsche_Carrera_4s_6727bbd9-cb8f-4502-996f-9c3c9385c124_upscayl_4x_realesrgan-x4plus.webp';

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
