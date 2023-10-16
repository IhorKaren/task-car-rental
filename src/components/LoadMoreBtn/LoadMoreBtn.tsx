import { FC } from 'react';
import { LoadMore } from './LoadMoreBtn.styled';

type Button = {
  onClick: () => void;
};

const LoadMoreBtn: FC<Button> = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
};

export default LoadMoreBtn;
