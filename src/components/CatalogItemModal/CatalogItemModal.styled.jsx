import styled from 'styled-components';
import { BsXLg } from 'react-icons/bs';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  width: 540px;
  max-height: 550px;
`;

export const CloseModal = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const CloseIcon = styled(BsXLg)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 15px;
  height: 15px;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: #d8d8d8;
    width: 4px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3470ff;
    border-radius: 12px;
  }
`;

export const ModalImage = styled.img`
  display: block;
  width: 320px;

  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const ModalTitle = styled.h3`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
`;

export const Accent = styled.span`
  color: #3470ff;
`;

export const TagList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
`;

export const TagItem = styled.li`
  position: relative;

  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: -6px;
    height: 14px;
    border: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const Decription = styled.p`
  font-size: 14px;
  line-height: 1.42;
`;

export const Text = styled.p`
  margin-bottom: 8px;

  font-size: 14px;
  line-height: 1.42;
`;

export const ConditionList = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  gap: 8px;

  display: flex;
  flex-wrap: wrap;
`;

export const ConditionItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;

  font-size: 12px;
  line-height: 1.5;

  background-color: #f9f9f9;
`;

export const Button = styled.button`
  display: inline-flex;
  width: 168px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px;

  color: #ffffff;
  background-color: #3470ff;

  transition: background-color 250ms linear;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
