import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/bs';

export const Card = styled.li`
  position: relative;
  display: flex;
  max-width: 268px;
  height: 380px;
  flex-direction: column;
  justify-content: space-between;

  padding: 0;
`;

export const FavoriteButton = styled.button`
  display: inline-flex;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;

  transition: fill 250ms linear;

  cursor: pointer;

  fill: #ffffff;

  &:hover,
  &:focus {
    fill: #3470ff;
  }
`;

export const Icon = styled(BsHeartFill)`
  width: 20px;
  height: 20px;
  /* fill: inherit; */
`;

export const Image = styled.div`
  height: 100%;
  max-height: 200px;
  border-radius: 15px;

  margin-bottom: 14px;

  overflow: hidden;
`;

export const TitleThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
  font-size: 14px;
`;

export const CardTitle = styled.h2`
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
  display: block;
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
