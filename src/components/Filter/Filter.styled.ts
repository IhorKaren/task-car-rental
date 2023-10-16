import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  justify-content: center;
`;

export const Label = styled.label`
  margin-bottom: 8px;

  color: #8a8a89;

  font-size: 14px;
  line-height: 1.28;
`;

export const Thumb = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

export const InputThumb = styled.div`
  display: flex;
`;

export const Select = styled.select`
  appearance: none;
  width: 224px;
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

export const SelectPrice = styled.select`
  appearance: none;
  width: 125px;
  height: 48px;
  padding: 0 36px 0 18px;

  border-radius: 14px;

  border: none;
  outline: none;

  background-color: #f7f7fb;

  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;

  cursor: pointer;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 24px;

  transform: translateY(-50%);

  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px 14px 0;

  border: none;
  outline: none;
  background-color: #f7f7fb;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  font-family: 'Manrope';
  font-weight: 600;
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
