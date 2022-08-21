import React from 'react';
import {Text, View, Button} from 'react-native';

import { useTailwind } from 'tailwind-rn';

const LandingScreen = ({navigation}) => {

  const tailwind = useTailwind();

    return (
      <View style={tailwind('justify-center items-center flex-1')}>
        <Text style={tailwind('text-black text-3xl')}>Oak</Text>
        <Text style={tailwind('text-black pb-3')}>
          Estate & Plantation Management Simplified !
        </Text>
        <Button
          onPress={() => navigation.navigate('HomeScreen')}
          title="Sign Up"
        />
      </View>
    );
}
export default LandingScreen;
