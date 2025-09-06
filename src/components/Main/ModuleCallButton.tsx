import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ModalPrivacy from '../other/ModalPrivacy';

interface Props {
  image: 'userLock' | 'licenseMaintenance';
  buttonText: string;
  modalText: string;
}

const ModuleCallButton = ({ image, buttonText, modalText }: Props) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handlerButton = () => {
    setIsVisibleModal(prev => !prev);
  };

  const imageList = {
    userLock: require('../../images/userLock.png'),
    licenseMaintenance: require('../../images/licenseMaintenance.png'),
  };

  return (
    <Pressable style={styles.wrapper} onPress={() => setIsVisibleModal(true)}>
      <View style={styles.cartButton}>
        <Image style={styles.image} source={imageList[image]} />
        <Text style={styles.text}>{buttonText}</Text>
      </View>
      <ModalPrivacy
        text={modalText}
        isVisible={isVisibleModal}
        setIsVisible={handlerButton}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  cartButton: {
    backgroundColor: '#FFFFFF',
    height: 54,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#2E293D',
  },
});

export default ModuleCallButton;
