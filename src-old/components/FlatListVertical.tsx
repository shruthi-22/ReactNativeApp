import React from 'react';
import {
  TouchableOpacity,
  Button,
  Image,
  View,
  FlatList,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { Modal } from './Modal';
import {useTailwind} from 'tailwind-rn';

export const FlatListVertical = ({ data }) => {
  const tailwind = useTailwind();

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [activeImageUrl, setActiveImageUrl] = React.useState(null);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const renderItem = ({item}) => <ImageCard item={item} />;

  // resizeMode: 'stretch', image style
  const Item = ({downloadUrl}) => {
    return (
      <View style={tailwind('p-5')}>
        <Image
          style={tailwind('w-48 h-48')}
          source={{
            uri: downloadUrl,
          }}
        />
      </View>
    );
  };

  const ImageCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsModalVisible(true);
          setActiveImageUrl(item.download_url);
        }}>
        <View>
          <Card style={tailwind('items-center m-2.5')}>
            <Item downloadUrl={item.download_url} />
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tailwind('items-center')}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <MyModal
        activeImageUrl={activeImageUrl}
        isModalVisible={isModalVisible}
        handleModal={handleModal}
      />
    </View>
  );
};

const MyModal = ({ activeImageUrl, isModalVisible, handleModal }) => {
  const tailwind = useTailwind();
  return (
    <Modal
      style={tailwind('items-center')}
      isVisible={isModalVisible}
      onBackdropPress={isModalVisible ? handleModal : undefined}>
      <Modal.Container>
        <Modal.Header title="Image" />
        <Modal.Body>
          <Image
            style={tailwind('h-80 w-80 m-2.5')}
            source={{
              uri: activeImageUrl,
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button title="Close" onPress={handleModal} />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};
