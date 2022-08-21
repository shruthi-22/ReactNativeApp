import { LibraryState } from "./books/bookSlice";
import { PhoneBookState } from "./contacts/contactSlice";

export interface RootState {
  phoneBook: PhoneBookState;
  library: LibraryState;
}
