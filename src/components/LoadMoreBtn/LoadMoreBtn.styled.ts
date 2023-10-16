import styled from 'styled-components';

export const LoadMore = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;

  border: none;
  background-color: transparent;

  color: #3470ff;
  text-decoration: underline;

  transition: color 250ms linear;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
