import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const BackButton = ({ children }: Props) => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <Pressable style={styles.wrapper} onPress={backHandler}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButton;
