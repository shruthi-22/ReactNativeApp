import React, {useState} from 'react';
import {
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  Text,
  ToastAndroid,
} from 'react-native';
import Joi from 'react-native-joi-validation';
import {useTailwind} from 'tailwind-rn';

var schema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required().label('Name'),
  phoneNumber: Joi.string()
    .regex(/\d/)
    .length(10)
    .min(10)
    .required()
    .label('Phone Number'),
  emailId: Joi.string().email().required().label('Email Address'),
});

const SignUpScreen = ({navigation}) => {
  const tailwind = useTailwind();

  const userDetailsInitialState = {
    phoneNumber: '',
    emailId: '',
    name: '',
  };

  const [userDetails, setUserDetails] = React.useState(userDetailsInitialState);
  const [isEditable, setisEditable] = React.useState(true);
  const [validationErrorMessage, setValidationErrorMessage] = useState(null);
  const [isDataVisible, setIsDataVisible] = useState(false);

  const onSubmitHandler = () => {
    const {error: validationError} = Joi.validate(userDetails, schema);
    if (validationError) {
      setValidationErrorMessage(validationError.details[0].message);
    } else {
      setIsDataVisible(true);
      navigation.navigate('HomeScreen');
    }
  };

  const onDisableHandler = () => {
    setisEditable(!isEditable);
  };

  const onClearHandler = () => {
    setUserDetails(userDetailsInitialState);
    setIsDataVisible(false);
  };

  const onInputChangeHandler = (key, text) => {
    setUserDetails({
      ...userDetails,
      [key]: text,
    });
  };

  const showToast = () => {
    ToastAndroid.showWithGravity(
      validationErrorMessage,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    setValidationErrorMessage(null);
  };

  return (
    <KeyboardAvoidingView style={tailwind('flex-1')}>
      <View style={tailwind('justify-around flex-1')}>
        <View style={tailwind('p-2.5')}>
          <TextInput
            editable={isEditable}
            placeholderTextColor="gray"
            style={tailwind('text-black border h-10 m-3 p-2.5')}
            value={userDetails.name}
            placeholder="Name"
            onChangeText={text => onInputChangeHandler('name', text)}
          />
          <TextInput
            editable={isEditable}
            placeholderTextColor="gray"
            style={tailwind('text-black border h-10 m-3 p-2.5')}
            value={userDetails.phoneNumber}
            placeholder="Phone Number"
            onChangeText={text => onInputChangeHandler('phoneNumber', text)}
          />
          <TextInput
            editable={isEditable}
            placeholderTextColor="gray"
            style={tailwind('text-black border h-10 m-3 p-2.5')}
            value={userDetails.emailId}
            placeholder="Email ID"
            onChangeText={text => onInputChangeHandler('emailId', text)}
          />
        </View>
        <View style={tailwind('flex-row justify-center m-1.5')}>
          <Button onPress={onSubmitHandler} title="Submit" />
          <Button
            onPress={onDisableHandler}
            title={isEditable ? 'Disable' : 'Enable'}
          />
          <Button
            disabled={!isEditable}
            onPress={onClearHandler}
            title="Clear"
          />
        </View>
        {isDataVisible && (
          <View style={tailwind('m-1 p-1.5')}>
            <Text style={tailwind('text-black')}>
              Name : {userDetails.name}
            </Text>
            <Text style={tailwind('text-black')}>
              Phone Number : {userDetails.phoneNumber}
            </Text>
            <Text style={tailwind('text-black')}>
              Email : {userDetails.emailId}
            </Text>
          </View>
        )}
        {validationErrorMessage !== null && showToast()}
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
