import { useState, useEffect } from 'react';
import { useGetCarsQuery } from 'redux/cars/carsApi';
import CatalogList from 'components/CatalogList/CatalogList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const { data = [] } = useGetCarsQuery({ page: page, limit: 8 });
  const [carsList, setCarsList] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setCarsList(prevState => [...prevState, ...data]);
    }
  }, [data]);

  const loadMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const list = document.querySelector('ul');
    const lastImage = list.lastElementChild;

    if (carsList.length > 8) {
      const { height: cardHeight } = lastImage.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 1,
        behavior: 'smooth',
      });
    }
  }, [carsList]);

  return (
    <>
      <h1>Catalog</h1>
      <CatalogList data={carsList} />
      {data.length > 1 && <LoadMoreBtn onClick={loadMoreBtnClick} />}
    </>
  );
};

export default Catalog;
