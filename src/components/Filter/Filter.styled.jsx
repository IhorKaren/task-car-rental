import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

export const Form = styled.form`
    display: flex;
    gap: 18px;
`

export const SelectThumb = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

export const Select = styled.select`
  appearance: none;

  padding: 14px 36px 14px 18px;
  border-radius: 14px;

  border: none;
  outline: none;

  background-color: #f7f7fb;

  cursor: pointer;
`;

export const Icon = styled(BsChevronDown)`
  position: absolute;
  right: 12px;
  bottom: 14px;

  width: 16px;
  height: 16px;

  pointer-events: none;
`;
