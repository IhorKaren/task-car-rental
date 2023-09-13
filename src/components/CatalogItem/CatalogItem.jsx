import { useState, useEffect } from 'react';
import {
  Card,
  FavoriteButton,
  Icon,
  Image,
  TitleThumb,
  CardTitle,
  Accent,
  TagList,
  TagItem,
  Button,
} from './CatalogItem.styled';
import PageModal from 'components/Modal/Modal';
import CatalogItemModal from 'components/CatalogItemModal/CatalogItemModal';
import {
  useGetAllFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} from 'redux/cars/carsApi';

const CatalogItem = ({ el }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const { data = [] } = useGetAllFavoritesQuery();

  const [addToFavorites] = useAddToFavoritesMutation();
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();

  const checkFavorites = data.some(favorite => favorite.img === el.img);

  console.log(favorites);

  useEffect(() => {
    if (isFirstRender) {
      return setIsFirstRender(false);
    }

    if (data && data.length > 0) {
      setFavorites(prevState => [...prevState, ...data]);
    }
  }, [data, isFirstRender]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addCommaToNumber = number => {
    return number.toLocaleString('en-US');
  };

  const favoriteItemToggle = el => {
    if (checkFavorites) {
      removeFromFavorites(el.id);
      return;
    }

    if (!checkFavorites) {
      addToFavorites(el);
      return;
    }
  };

  const address = el.address.split(',');
  const city = address[1];
  const country = address[2];

  return (
    <>
      <Card>
        <div>
          <Image>
            <img src={el.img} alt={`${el.make} ${el.model}`} />
          </Image>
          <FavoriteButton type="button" onClick={() => favoriteItemToggle(el)}>
            <Icon fill={checkFavorites ? '#3470ff' : '#ffffff'} />
          </FavoriteButton>
          <TitleThumb>
            <CardTitle>
              {el.make} <Accent>{el.model}</Accent>, {el.year}
            </CardTitle>
            <p>{el.rentalPrice}</p>
          </TitleThumb>
          <TagList>
            <TagItem>
              <p>{city}</p>
            </TagItem>
            <TagItem>
              <p>{country}</p>
            </TagItem>
            <TagItem>
              <p> {el.rentalCompany}</p>
            </TagItem>
            <TagItem>
              <p>{el.type}</p>
            </TagItem>
            <TagItem>
              <p>{el.make}</p>
            </TagItem>
            <TagItem>
              <p>{addCommaToNumber(el.mileage)}</p>
            </TagItem>
            <TagItem>
              <p>{el.accessories[2]}</p>
            </TagItem>
          </TagList>
        </div>
        <Button type="button" onClick={openModal}>
          Learn more
        </Button>
      </Card>
      {isModalOpen && (
        <PageModal closeModal={closeModal}>
          <CatalogItemModal
            el={el}
            city={city}
            country={country}
            closeModal={closeModal}
            addComma={addCommaToNumber}
          />
        </PageModal>
      )}
    </>
  );
};

export default CatalogItem;
