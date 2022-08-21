import React from 'react';
import {Text, View, StatusBar, Button} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export function Home() {
    const tailwind = useTailwind();
    const [count, setCount] = React.useState(0);
    const onClickHandler = () => {
      setCount(count + 1);
    };
  
    return (
      <View style={tailwind('justify-center items-center flex-1')}>
        <Button onPress={onClickHandler} title="Click me" />
        <Text style={tailwind('text-black')}>I was clicked {count} times</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  