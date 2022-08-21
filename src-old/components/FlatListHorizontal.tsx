import React from 'react';
import {Image, FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export const FlatListHorizontal = ({data}) => {
  const tailwind = useTailwind();

  const SmallImage = ({item}) => {
    return (
      <Image
        style={tailwind('m-2.5 h-48 w-48')}
        source={{
          uri: item.download_url,
        }}
      />
    );
  };

  const renderItem = ({item}) => <SmallImage item={item} />;

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
