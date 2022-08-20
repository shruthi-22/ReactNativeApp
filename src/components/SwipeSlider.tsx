import React from 'react';
import {View, Image} from 'react-native';
import SwipeButton from 'rn-swipe-button';

const SwipeIcon = () => (
  <Image source={require('../assets/images/swipeIcon.png')} />
);

export const SwipeSlider = ({title}) => {
  return (
    <View>
      <SwipeButton
        swipeSuccessThreshold={70}
        height={45}
        width={300}
        title={title}
        thumbIconComponent={SwipeIcon}
        thumbIconBackgroundColor="white"
        thumbIconStyles={{borderRadius: 1, borderWidth: 0}}
        containerStyles={{borderRadius: 15, padding: 10, borderWidth: 0}}
        titleStyles={{color: '#808080', fontSize: 17}}
        railStyles={{
          backgroundColor: '#d3d3d3',
          borderWidth: 0,
          borderRadius: 5,
        }}
        railBackgroundColor="#f5f5f5"
        onSwipeSuccess={() => {
          alert('Money Sent !');
        }}
      />
    </View>
  );
};
