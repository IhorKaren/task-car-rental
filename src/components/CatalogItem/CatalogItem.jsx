import { useState, useEffect } from 'react';
import {
  Card,
  FavoriteButton,
  Icon,
  ImageThumb,
  Image,
  TitleThumb,
  CardTitle,
  Accent,
  TagList,
  TagItem,
  Button,
} from './CatalogItem.styled';
import {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} from 'redux/cars/carsApi';
import { useLocation } from 'react-router-dom';

import PageModal from 'components/Modal/Modal';
import CatalogItemModal from 'components/CatalogItemModal/CatalogItemModal';

const CatalogItem = ({ el }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { data = [] } = useGetFavoritesQuery();
  const [addToFavorites] = useAddToFavoritesMutation();
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();

  const location = useLocation();

  const isFavorite = data.find(favorite => favorite._id === el.id);

  const checkLocation = location.pathname === '/favorites';

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

  const favoriteItemToggle = favorite => {
    if (checkLocation) {
      removeFromFavorites(favorite.id);
      return;
    }

    if (isFavorite) {
      removeFromFavorites(isFavorite.id);
      return;
    }

    if (!isFavorite) {
      addToFavorites({ ...favorite, _id: favorite.id });
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
          <ImageThumb>
            <Image src={el.img} alt={`${el.make} ${el.model}`} />
          </ImageThumb>
          <FavoriteButton type="button" onClick={() => favoriteItemToggle(el)}>
            <Icon fill={isFavorite || checkLocation ? '#3470ff' : '#ffffff'} />
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
