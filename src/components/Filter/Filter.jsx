import { useState } from 'react';
import {
  Form,
  Label,
  InputLabel,
  Thumb,
  Select,
  SelectPrice,
  InputThumb,
  InputWrap,
  Input,
  Icon,
  Button,
} from './Filter.styled';
import makesList from 'resources/makes';

const prices = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600,
];

const Filter = ({ onSubmit }) => {
  const [choosenBrand, setChoosenBrand] = useState();

  const onFormSubmit = e => {
    e.preventDefault();

    onSubmit(choosenBrand.target.value);
    return;
  };

  return (
    <Form>
      <Thumb>
        <Label htmlFor="car-select">Car brand</Label>
        <Select name="cars" id="car-select" onChange={setChoosenBrand}>
          <option value="without">All cars</option>
          {makesList.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </Select>
        <Icon />
      </Thumb>
      <Thumb>
        <Label htmlFor="price-select">Price/ 1 hour</Label>
        <SelectPrice name="price" id="price-select">
          <option value="without">To $</option>
          {prices.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </SelectPrice>
        <Icon />
      </Thumb>
      <Thumb>
        <Label>Car mileage / km</Label>
        <InputThumb>
          <InputWrap>
            <Input
              type="text"
              name="mileageFrom"
              id="mileageFrom"
              style={{ paddingLeft: '60px', borderRadius: '14px 0 0 14px' }}
            />
            <InputLabel htmlFor="mileageFrom">From</InputLabel>
          </InputWrap>
          <InputWrap>
            <Input
              type="text"
              name="mileageTo"
              id="mileageTo"
              style={{ paddingLeft: '44px', borderRadius: '0 14px 14px 0' }}
            />
            <InputLabel htmlFor="mileageTo">To</InputLabel>
          </InputWrap>
        </InputThumb>
      </Thumb>
      <Button type="submit" onClick={e => onFormSubmit(e)}>
        Search
      </Button>
    </Form>
  );
};

export default Filter;
