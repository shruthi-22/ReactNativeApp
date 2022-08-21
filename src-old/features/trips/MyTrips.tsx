import React, {useState, useEffect} from 'react';
import { FlatListHorizontal } from '../../components/FlatListHorizontal'; 
import {FlatListVertical} from '../../components/FlatListVertical'; 
import {View} from 'react-native';

export function MyTrips() {
  const [data, setData] = useState([]); // should it be a state

  useEffect(() => {
    async function fetchData() {
      const images = await getImagesFromApi();
      setData(images);
    }
    fetchData();
  }, []);

  const getImagesFromApi = () => {
    return fetch('https://picsum.photos/v2/list/')
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <FlatListHorizontal data={data} />
      <FlatListVertical data={data} />
    </View>
  );
}
