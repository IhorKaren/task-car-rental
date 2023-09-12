import { useState, useEffect } from 'react';
import {
  Card,
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

const CatalogItem = ({ el }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('no-scroll');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('no-scroll');
    };
  }, [isModalOpen]);

  const address = el.address.split(',');
  const city = address[1];
  const country = address[2];

  return (
    <>
      <Card>
        <div>
          <Image src={el.img} alt={`${el.make} ${el.model}`} width={240} />
          <TitleThumb>
            <CardTitle>
              {el.make} <Accent>{el.model}</Accent>, {el.year}
            </CardTitle>
            <p>{el.rentalPrice}</p>
          </TitleThumb>

          <TagList>
            <TagItem>{city}</TagItem>
            <TagItem>{country}</TagItem>
            <TagItem>{el.rentalCompany}</TagItem>
            <TagItem>{el.type}</TagItem>
            <TagItem>{el.make}</TagItem>
            <TagItem>{el.mileage}</TagItem>
            <TagItem>{el.accessories[2]}</TagItem>
          </TagList>
        </div>
        <Button type="button" onClick={openModal}>
          Learn more
        </Button>
      </Card>
      {isModalOpen && (
        <PageModal closeModal={closeModal}>
          <CatalogItemModal el={el} />
        </PageModal>
      )}
    </>
  );
};

export default CatalogItem;
