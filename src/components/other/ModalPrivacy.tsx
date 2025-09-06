import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import MainButton from '../other/MainButton';
import { SafeAreaView } from 'react-native-safe-area-context';
interface Props {
  text: string;
  isVisible: boolean;
  setIsVisible: () => void;
}
const ModalPrivacy = ({ text, isVisible, setIsVisible }: Props) => {
  return (
    <Modal transparent visible={isVisible} statusBarTranslucent>
      <View style={styles.overlay}>
        <SafeAreaView>
          <View style={styles.wrapper}>
            <ScrollView>
              <Text style={styles.description}>{text}</Text>
              <MainButton
                isActive={true}
                title="Закрыть"
                handler={setIsVisible}
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  wrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
  },
  description: {
    marginBottom: 20,
  },
});

export default ModalPrivacy;
