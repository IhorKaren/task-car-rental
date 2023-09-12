import { LoadMore } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
};

export default LoadMoreBtn;
