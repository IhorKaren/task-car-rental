import { useState } from 'react';
import {
  Form,
  Label,
  Thumb,
  Select,
  SelectPrice,
  InputThumb,
  Input,
  Icon,
  Button,
} from './Filter.styled';
import makesList from 'resources/makes';

const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90];

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
        <SelectPrice name="price" id="price-select" onChange={setChoosenBrand}>
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
        <Label htmlFor="mileage">Car mileage / km</Label>
        <InputThumb>
          <Input type="text" name="mileageFrom" placeholder="From" />
          <Input type="text" name="mileageTo" placeholder="To" />
        </InputThumb>
      </Thumb>
      <Button type="submit" onClick={e => onFormSubmit(e)}>
        Search
      </Button>
    </Form>
  );
};

export default Filter;
