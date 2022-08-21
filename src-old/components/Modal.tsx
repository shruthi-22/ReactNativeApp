import * as React from 'react';
import {Text, View} from 'react-native';
import RNModal from 'react-native-modal';
import {useTailwind} from 'tailwind-rn';

export const Modal = ({
  isVisible = false,
  onBackdropPress,
  children,
  ...props
}) => {

  return (
    <RNModal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({children}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        'border-black rounded-2xl bg-white border border-solid ',
      )}>
      {children}
    </View>
  );
};

const ModalHeader = ({title}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('justify-center items-center')}>
      <Text style={tailwind('text-center text-black text-2xl pt-2.5')}>
        {title}
      </Text>
    </View>
  );
};

const ModalBody = ({children}) => {
  const tailwind = useTailwind();
  return <View style={tailwind('justify-center px-3.5')}>{children}</View>;
};

const ModalFooter = ({children}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('justify-center items-center flex-row p-2.5')}>
      {children}
    </View>
  );
};

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
