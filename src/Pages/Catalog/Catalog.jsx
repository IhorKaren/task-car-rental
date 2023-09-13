import { useState, useEffect } from 'react';
import { useGetCarsQuery, useGetCarsByBrandQuery } from 'redux/cars/carsApi';

import Filter from 'components/Filter/Filter';
import CatalogList from 'components/CatalogList/CatalogList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState('without');
  const { data = [] } = useGetCarsQuery({ page: page, limit: 8 });
  const { data: filter = [] } = useGetCarsByBrandQuery({
    page: page,
    limit: 8,
    brand,
  });
  const [carsList, setCarsList] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (filter && filter.length > 0) {
      setFilteredCars([...filter]);
      return;
    }
  }, [filter, isFirstRender]);

  useEffect(() => {
    if (isFirstRender) {
      return setIsFirstRender(false);
    }

    if (data && data.length > 0) {
      setCarsList(prevState => [...prevState, ...data]);
      return;
    }
  }, [data, isFirstRender]);

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

  const onFilterSubmit = brand => {
    if (brand === 'without') {
      setFilteredCars([]);
      setCarsList([...data]);
      return;
    }

    setPage(1);
    setCarsList([]);
    setBrand(brand);
  };

  const primaryArray = filteredCars.length === 0 ? carsList : filteredCars;

  return (
    <>
      <h1 className="visually-hidden">Catalog</h1>
      <Filter onSubmit={onFilterSubmit} />
      <CatalogList data={primaryArray} />
      {primaryArray.length > 7 && <LoadMoreBtn onClick={loadMoreBtnClick} />}
    </>
  );
};

export default Catalog;