import { ISearchInput } from "./ISearchInput";

export interface IOnChange {
    onSubmit: (values: ISearchInput) => void;
  }