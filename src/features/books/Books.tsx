import React, {useEffect} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {useSelector, useDispatch} from 'react-redux';
import {Book, add as addBook, update as updateBooks} from './bookSlice';
import {BACKEND_URL} from '@env';
import {RootState} from '../types';

export const Books = () => {
  const tailwind = useTailwind();
  const dispatch = useDispatch();

  const books = useSelector((state: RootState) => state.library.books);

  const inputInitialState : Book = {
    title: '',
    author: '',
  };

  const [input, setInput] = React.useState(inputInitialState);

  useEffect(() => {
    fetchAllBooks().then(data => {
      dispatch(updateBooks(data))
    });
  }, []);

  const fetchAllBooks = () => {
    const url = BACKEND_URL + 'books';
    // const url = ""
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        return json.data;
      })
      .catch(err => {
        console.log("Error : ", err);
      });
  };

  const addBookToLibrary = book => {
    const url = BACKEND_URL + 'books';
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then(res => res.json())
      .then(json => {
        return json.data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitHandler = () => {
    if (input.title && input.author) {
      addBookToLibrary(input).then((data) => {
        dispatch(addBook(input))
        setInput({
          title: '',
          author: ''
        })
      })
    } else {
      alert('Please enter something');
    }
  };

  return (
    <View>
      <View style={tailwind('p-2.5')}>
        <Text style={tailwind('text-black text-xl')}>Existing Books</Text>
        {books &&
          books.map((book: Book) => {
            return (
              <Text
                key={book.title}
                style={tailwind('text-black p-1 text-base')}>
                {book.title} : {book.author}
              </Text>
            );
          })}
      </View>
      <Text style={tailwind('text-black ml-2.5 text-xl')}>Add Book</Text>
      <TextInput
        placeholderTextColor="gray"
        style={tailwind('text-black p-2.5 m-3 border')}
        value={input.title}
        placeholder="Enter Title"
        onChangeText={text =>
          setInput({
            ...input,
            title: text,
          })
        }
      />
      <TextInput
        placeholderTextColor="gray"
        style={tailwind('text-black p-2.5 m-3 border')}
        value={input.author}
        placeholder="Enter author"
        onChangeText={text =>
          setInput({
            ...input,
            author: text,
          })
        }
      />
      <View style={tailwind('items-center ml-12 mr-12 mt-2.5')}>
        <Button onPress={onSubmitHandler} title="Add Book" />
      </View>
    </View>
  );
};
