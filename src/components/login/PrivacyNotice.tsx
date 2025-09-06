import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ModalPrivacy from '../other/ModalPrivacy';
import { modalText } from '../../constants/modalText';
const PrivacyNotice = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handlerButton = () => {
    setIsVisibleModal(prev => !prev);
  };

  return (
    <View>
      <Text style={styles.description}>
        Нажимая “Продолжить” вы соглашаетесь c
        <Pressable onPress={() => setIsVisibleModal(true)}>
          <Text style={styles.modalButtun}>политикой конфидкнциальности</Text>
        </Pressable>
      </Text>

      <ModalPrivacy
        text={modalText}
        isVisible={isVisibleModal}
        setIsVisible={handlerButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 12,
    color: '#8D8A95',
  },
  modalButtun: {
    fontSize: 12,
    color: '#0097D6',
  },
});

export default PrivacyNotice;
