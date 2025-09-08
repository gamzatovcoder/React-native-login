import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ViewAllTariffs = () => {
  const navigation = useNavigation();

  const navigateTo = (): void => {
    navigation.navigate('AvailableTariffsScreen');
  };

  return (
    <Pressable onPress={navigateTo}>
      <View>
        <Text style={styles.button}>{'Выбрать тариф'}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 9,
    paddingHorizontal: 28,
    backgroundColor: '#0097D6',
    borderRadius: 200,
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default ViewAllTariffs;
