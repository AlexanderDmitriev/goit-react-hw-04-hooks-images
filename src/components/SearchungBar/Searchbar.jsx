import React from 'react';
import { Formik } from 'formik';
import {
  HeaderBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { MdSearch } from 'react-icons/md';

//При начальном рендере ключевое слово для поиска пустая строка
const initialValues = { keyWord: '' };

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <HeaderBar>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            <MdSearch size="30px" />
          </SearchFormButton>

          <SearchFormInput
            name="keyWord"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </HeaderBar>
  );
};

export default Searchbar;
