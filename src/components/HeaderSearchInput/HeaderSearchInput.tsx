import { useRef } from 'react';

import Box from '../../utils';
import { Button, Input, Title } from './HeaderSearchInputStyled';


interface ICurrency {
  [key: string]:  number;
}
interface HeaderProps {
  location: string;
  currency: ICurrency;
  locationChanger: (str: string)=> void
}

const HeaderSearchInput = ({ locationChanger, currency, location }: HeaderProps) => {
  const locationInput = useRef<HTMLInputElement>(null);

  const handleLocationChanger = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const curr = locationInput?.current?.value.toUpperCase();
    const currencyList = Object.keys(currency);
    if(curr && locationInput)
    currencyList.includes(curr)
      ? locationChanger(curr)
      : alert('Currency not found, please try again.');
  };

  return (
    <Box
      as="form"
      onSubmit={handleLocationChanger}
      autoComplete="off"
      display="flex"
      gridGap="16px"
      alignItems="center"
    >
      <Title>Choose your currency code: {location}</Title>
      <Box display="flex">
        <Input
          id="locationInput"
          type="text"
          ref={locationInput}
          placeholder="Enter currency code"
          minLength={3}
          maxLength={3}
        />
        <Button type="submit">
         <p>Submit</p>
        </Button>
      </Box>
    </Box>
  );
};
export default HeaderSearchInput;
