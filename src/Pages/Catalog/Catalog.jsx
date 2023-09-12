import { useGetCarsQuery } from 'redux/cars/carsApi';

const Catalog = () => {
  const { data = [] } = useGetCarsQuery();

  console.log(data);

  return (
    <>
      {/* {loading && <Loader />} */}
      <h1>Catalog</h1>
    </>
  );
};

export default Catalog;
