import React from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SwipeSlider} from '../../components/SwipeSlider';

const styles = StyleSheet.create({
  elevation: {
    shadowColor: '#000',
    elevation: 2,
  },
});

export function MoneyTransfer() {
  const [transactionDetails, setTransactionDetails] = React.useState({
    name: '',
    amount: '2350',
  });

  console.log(transactionDetails);

  const [isAmountComponentTouched, setIsAmountComponentTouched] =
    React.useState(false);

  const tailwind = useTailwind();
  return (
    // <KeyboardAvoidingView>
    <View style={tailwind('m-4 rounded-3xl flex-1 bg-white')}>
      <View style={tailwind('m-3 rounded-2xl bg-slate-100')}>
        <View style={tailwind('m-3 mt-4 p-2 flex-row justify-between')}>
          <Ionicons size={26} name="arrow-back-outline" color="black" />
          <Text style={tailwind('text-black text-lg font-semibold')}>
            Send Money
          </Text>
          <Ionicons size={26} name="options-outline" color="black" />
        </View>
        <View>
          <View style={tailwind('items-center')}>
            <Image
              style={tailwind('rounded-full w-28 h-28 m-6')}
              source={require('../../assets/images/user.jpg')}
            />
            <Text style={tailwind('text-black mt-3 font-semibold text-2xl')}>
              Libiska Mandan
            </Text>
            <Text style={tailwind('text-black m-1 mb-8')}>
              +142 235 745 765
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          tailwind(
            'flex-row bg-white border-slate-200 rounded-xl px-4 py-5 border mx-8 my-11 items-center justify-between',
          ),
          styles.elevation,
        ]}>
        <Ionicons size={26} name="card-outline" color="black" />
        <Text style={tailwind('text-black')}>Debit Card</Text>
        <Text style={tailwind('text-black font-bold text-base')}>
          $ 36,365.00
        </Text>
      </View>

      <View style={tailwind('items-center justify-between')}>
        <TouchableWithoutFeedback
          onPress={() =>
            setIsAmountComponentTouched(!isAmountComponentTouched)
          }>
          {!isAmountComponentTouched ? (
            <Text
              style={tailwind('text-black font-semibold text-4xl m-1 mt-3')}>
              ${transactionDetails.amount}
            </Text>
          ) : (
            <TextInput
              keyboardType="numeric"
              style={tailwind('text-black font-semibold text-4xl m-1 mt-3')}
              value={transactionDetails.amount}
              placeholder={transactionDetails.amount.toString()}
              onSubmitEditing={() => {
                setIsAmountComponentTouched(!isAmountComponentTouched);
              }}
                onBlur={() => {
                alert('clicked outsidee ! ');
              }}
              onChangeText={text =>
                setTransactionDetails({
                  ...transactionDetails,
                  amount: text,
                })
              }
            />
          )}
        </TouchableWithoutFeedback>
      </View>

      <View style={tailwind('items-center justify-between mt-16')}>
        <SwipeSlider title="Swipe to send" />
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
}
