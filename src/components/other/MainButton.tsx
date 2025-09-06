import { Pressable, StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
  title: string;
  handler?: () => void;
  isActive?: boolean;
  buttonStyles?: TextStyle;
}

const MainButton = ({ title, handler, isActive, buttonStyles }: Props) => {
  return (
    <Pressable onPress={isActive ? handler : null}>
      <Text
        style={[
          styles.button,
          buttonStyles,
          !isActive && styles.buttonNotActive,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#0097D6',
    paddingVertical: 18,
    textAlign: 'center',
    borderRadius: 200,
  },
  buttonNotActive: {
    backgroundColor: '#E2E2E4',
    color: '#8D8A95',
  },
});

export default MainButton;
