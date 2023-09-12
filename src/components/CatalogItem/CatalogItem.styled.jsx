import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: calc((100% - 90px) / 4);
  height: 380px;
  padding: 0;
`;

export const Image = styled.div`
 
  height: 220px;
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
  display: inline-flex;
  width: 100%;
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
