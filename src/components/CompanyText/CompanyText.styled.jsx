import styled from 'styled-components';

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 700px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 16px;

  color: #ffffff;
  background-color: rgba(39, 94, 197, 0.7);

  backdrop-filter: blur(4px);
`;

export const MainTitle = styled.h1`
  margin-bottom: 20px;

  text-align: center;
  font-size: 26px;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 20px;
`;

export const FeatureTitle = styled.h3`
  margin-bottom: 5px;

  font-size: 18px;
`;

export const FeatureText = styled.p`
  font-size: 16px;
`;
