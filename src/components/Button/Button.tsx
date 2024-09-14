//import styled from '@emotion/styled';
import { IOnClick } from "../../interfaces/IOnClick";

//Рендер кастомной кнопки для дозагрузки картинок
export const Button = ({ onClick }:IOnClick) => {
  return (
    <button
      type="button"
      className="py-2 px-4 my-0 mx-auto  inline-block bg-indigo-500 text-xl
       text-white rounded-md hover:bg-indigo-600 focus:bg-indigo-600 
       transition-transform text-center border-none cursor-pointer font-medium w-40 shadow-md"
      onClick={onClick}
    >
      Load more
    </button>
  );
};

/*const CustomButton = styled.button`
   padding: ${props => props.theme.spacing(2)} ${props =>
    props.theme.spacing(4)};
  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.blue}; 
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  //display: inline-block;
  //margin: 0 auto;
  //color: ${props => props.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  //font-size: ${props => props.theme.spacing(4.5)};
  line-height: ${props => props.theme.spacing(6)};
  font-style: normal;
  font-weight: 500;
  width: ${props => props.theme.spacing(45)};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  /* :hover,
  :focus {
    background-color: ${props => props.theme.colors.focusColor};
  } 
`;*/
