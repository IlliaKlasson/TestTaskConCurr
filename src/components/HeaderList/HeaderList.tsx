import { List, Text } from './HeaderListStyled';


interface ICurrency {
  [key: string]:  number;
}
interface ISelectConverterProps {
  location: string;
  currency: ICurrency
}
const HeaderList = ({ currency, location }: ISelectConverterProps) => {
  const locationConverter = (curr: number) => curr * currency[location];
  const list = ['USD', 'EUR'];
  return (
    <List>
      {currency &&
        list.map(item => {
          const EUR = item === 'EUR' && location === 'EUR';
          const value = EUR ? 1 : locationConverter(currency[item]);
          return (
            <li key={item}>
              <Text>{item}</Text>
              <Text>{value.toFixed(3)}</Text>
            </li>
          );
        })}
    </List>
  );
};
export default HeaderList;
