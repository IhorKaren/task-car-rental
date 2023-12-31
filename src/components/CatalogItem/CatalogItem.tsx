import { useState, useEffect, FC } from 'react';
import {
  Card,
  FavoriteButton,
  Icon,
  ImageThumb,
  Image,
  TitleThumb,
  CardTitle,
  Accent,
  Price,
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

import { Car } from 'components/App.types';

type ItemProps = {
  car: Car;
};

const CatalogItem: FC<ItemProps> = ({ car }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { data = [] } = useGetFavoritesQuery();
  const [addToFavorites] = useAddToFavoritesMutation();
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();

  const location = useLocation();

  const isFavorite = data.find(favorite => favorite._id === car.id);

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

  const addCommaToNumber = (number: number): string => {
    return number.toLocaleString('en-US');
  };

  const favoriteItemToggle = (favorite: Car): void => {
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

  const address = car.address.split(',');
  const city = address[1];
  const country = address[2];

  const isIconBlue = isFavorite || checkLocation;

  return (
    <>
      <Card>
        <div>
          <ImageThumb>
            <Image src={car.img} alt={`${car.make} ${car.model}`} />
          </ImageThumb>
          <FavoriteButton
            type="button"
            onClick={() => favoriteItemToggle(car)}
            style={{
              fill: isIconBlue ? '#3470ff' : '#FFFFFF',
            }}
          >
            <Icon />
          </FavoriteButton>
          <TitleThumb>
            <CardTitle>
              {car.make} <Accent>{car.model}</Accent>, {car.year}
            </CardTitle>
            <Price>{car.rentalPrice}</Price>
          </TitleThumb>
          <TagList>
            <TagItem>
              <p>{city}</p>
            </TagItem>
            <TagItem>
              <p>{country}</p>
            </TagItem>
            <TagItem>
              <p> {car.rentalCompany}</p>
            </TagItem>
            <TagItem>
              <p>{car.type}</p>
            </TagItem>
            <TagItem>
              <p>{car.make}</p>
            </TagItem>
            <TagItem>
              <p>{addCommaToNumber(car.mileage)}</p>
            </TagItem>
            <TagItem>
              <p>{car.accessories[2]}</p>
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
            el={car}
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
