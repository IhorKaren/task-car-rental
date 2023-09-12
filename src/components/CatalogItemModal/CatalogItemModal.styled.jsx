import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  width: 540px;
`;

export const ModalImage = styled.img`
  display: block;
  width: 420px;
  height: 280px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const CardTitle = styled.h3`
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
