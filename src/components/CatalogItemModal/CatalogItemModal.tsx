import { FC } from 'react';
import {
  Container,
  CloseModal,
  CloseIcon,
  ModalImage,
  Thumb,
  ModalTitle,
  Accent,
  TagList,
  TagItem,
  Decription,
  Text,
  ConditionList,
  ConditionItem,
  Button,
} from './CatalogItemModal.styled';

import { Car } from 'components/App.types';

type ItemModalProps = {
  el: Car;
  city: string;
  country: string;
  addComma: (number: number) => string;
  closeModal: () => void;
};

const CatalogItemModal: FC<ItemModalProps> = ({
  el,
  city,
  country,
  addComma,
  closeModal,
}) => {
  const rentalConditions = el.rentalConditions.split('\n');

  const numberFinder = (string: string): number => {
    const searchNumber = string.split('\n')[0].slice(-2);
    const parsedNumber = parseInt(searchNumber);
    const isNumber = Number.isNaN(parsedNumber);

    if (!isNumber) {
      return parsedNumber;
    }

    return NaN;
  };

  return (
    <Container>
      <CloseModal
        type="button"
        onClick={closeModal}
        aria-label="Close modal window"
      >
        <CloseIcon />
      </CloseModal>
      <ModalImage src={el.img} />
      <ModalTitle>
        {el.make} <Accent>{el.model}</Accent>, {el.year}
      </ModalTitle>
      <Thumb>
        <TagList>
          <TagItem>
            <p>{city}</p>
          </TagItem>
          <TagItem>
            <p>{country}</p>
          </TagItem>
          <TagItem>
            <p>id: {el.id}</p>
          </TagItem>
          <TagItem>
            <p>Year: {el.year}</p>
          </TagItem>
          <TagItem>
            <p>Type: {el.type}</p>
          </TagItem>
          <TagItem>
            <p>Fuel Consumption: {el.fuelConsumption}</p>
          </TagItem>
          <TagItem>
            <p>Engine Size: {el.engineSize}</p>
          </TagItem>
        </TagList>
        <Decription>{el.description}</Decription>
        <div>
          <Text>Accessories and functionalities:</Text>
          <TagList>
            {el.functionalities.map((string, index) => (
              <TagItem key={index}>{string}</TagItem>
            ))}
            {el.accessories.map((string, index) => (
              <TagItem key={index}>{string}</TagItem>
            ))}
          </TagList>
        </div>
        <div>
          <Text>Rental Conditions: </Text>
          <ConditionList>
            {rentalConditions.map((condition, index) => {
              const searchAge = numberFinder(condition);

              return (
                <ConditionItem key={index}>
                  <p>
                    {condition.replace(`${searchAge}`, '')}
                    {searchAge && <Accent>{searchAge}</Accent>}
                  </p>
                </ConditionItem>
              );
            })}
            <ConditionItem>
              <p>
                Milage: <Accent>{addComma(el.mileage)}</Accent>
              </p>
            </ConditionItem>
            <ConditionItem>
              <p>
                Price: <Accent>{el.rentalPrice}</Accent>
              </p>
            </ConditionItem>
          </ConditionList>
        </div>
      </Thumb>

      <Button href="tel:+380730000000" rel="noopener">
        Rental car
      </Button>
    </Container>
  );
};

export default CatalogItemModal;
