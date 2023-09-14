import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  max-width: 1140px;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Label = styled.label`
  color: #8a8a89;

  font-size: 14px;
  line-height: 1.28;
`;

export const SelectThumb = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

export const Select = styled.select`
  appearance: none;
  height: 48px;
  padding: 0 36px 0 18px;

  border-radius: 14px;

  border: none;
  outline: none;

  background-color: #f7f7fb;

  font-family: 'Manrope';
  font-weight: 600;

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

export const Button = styled.button`
  display: inline-block;
  border: none;
  width: 136px;
  height: 48px;
  border-radius: 12px;
  padding: 0 12px;

  color: #ffffff;
  background-color: #3470ff;

  transition: background-color 250ms linear;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
