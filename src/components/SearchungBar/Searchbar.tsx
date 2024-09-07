import { Field, Formik, FormikHelpers } from 'formik';
import {
  HeaderBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Searchbar.styled';
import { MdSearch } from 'react-icons/md';
import { IOnChange, ISearchInput } from '../../interfaces';

//При начальном рендере ключевое слово для поиска пустая строка
const initialValues = { keyWord: '' };

const Searchbar: React.FC<IOnChange> = ({ onSubmit }) => {
  const handleSubmit = (
    values: ISearchInput,
    { resetForm }: FormikHelpers<ISearchInput>
  ) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <HeaderBar className="bg-sky-600 px-6 py-3 flex justify-center ">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm className="bg-white overflow-hidden flex">
          <SearchFormButton type="submit" className="inline-block ">
            <SearchFormButtonLabel className="p-0 overflow-hidden">
              Search
            </SearchFormButtonLabel>
            <MdSearch size="30px" color="grey" />
          </SearchFormButton>
          <Field
            className="text-xl text-inherit outline-none"
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
