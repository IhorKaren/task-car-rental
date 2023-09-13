import { useState } from 'react';
import { useGetFavoritesQuery } from 'redux/cars/carsApi';
import CatalogList from 'components/CatalogList/CatalogList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Favorites = () => {
  const [page, setPage] = useState(1);

  const { data = [] } = useGetFavoritesQuery({ page: page, limit: 8 });

  const loadMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <h1>Favorites</h1>
      <CatalogList data={data} />
      {data.length > 7 && <LoadMoreBtn onClick={loadMoreBtnClick} />}
    </>
  );
};

export default Favorites;
