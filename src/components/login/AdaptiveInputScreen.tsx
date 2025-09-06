import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  Dimensions,
  Keyboard,
} from 'react-native';
import { useEffect, useState } from 'react';
import MainButton from '../other/MainButton';
import PrivacyNotice from './PrivacyNotice';
import BackButton from './BackButton';
import BackButtonExtension from '../Extensions/BackButton';

interface Props {
  isVisibleButtonBack?: true;
  mainButtonHandler?: () => void;
  requiredInput?: true;
  inputAttributes: TextInputProps;
  inputImage: 'user' | 'lock';
  buttonText: string;
}

const AdaptiveInputScreen = ({
  isVisibleButtonBack,
  mainButtonHandler,
  inputAttributes,
  inputImage,
  buttonText,
}: Props) => {
  const [isFocusedInput, setIsFocusedInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const updateInputValue = (text: string): void => {
    setInputValue(text);
  };

  const windowHeight: number = Dimensions.get('window').height;

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const inputImages = {
    user: require('../../images/user.png'),
    lock: require('../../images/lock.png'),
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={{ height: windowHeight }}>
        <View style={{ height: windowHeight }}>
          <View style={[styles.contentWrapper]}>
            <View style={styles.topWrapper}>
              {isVisibleButtonBack && (
                <View style={styles.backButton}>
                  <BackButtonExtension>
                    <BackButton />
                  </BackButtonExtension>
                </View>
              )}
              <Image
                style={styles.image}
                source={require('../../images/logo.png')}
              />
            </View>
            <Text style={styles.title}>Очень домашний интернет</Text>
            <Text style={styles.description}>
              Войдите в систему, чтобы пользоваться всеми функциями приложения.
            </Text>
            <View
              style={[
                styles.inputWrapper,
                isFocusedInput && styles.inputFocused,
              ]}
            >
              <Image
                style={styles.inputImage}
                source={inputImages[inputImage]}
              />
              <TextInput
                style={[styles.input]}
                onFocus={() => setIsFocusedInput(true)}
                onBlur={() => setIsFocusedInput(false)}
                onChangeText={updateInputValue}
                value={inputValue}
                {...inputAttributes}
              />
            </View>
            <View
              style={[styles.bottomWrapper, { marginBottom: keyboardHeight }]}
            >
              <PrivacyNotice />
              <MainButton
                title={buttonText}
                isActive={inputValue ? true : false}
                handler={mainButtonHandler}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#833b3bff',
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 78,
    paddingHorizontal: 30,
    paddingBottom: 48,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topWrapper: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 22,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  image: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 22,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 400,

    color: '#8D8A95',
    marginBottom: 22,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  inputImage: {
    position: 'absolute',
    top: '50%',
    left: 13,
    transform: [{ translateY: -7.5 }],
    zIndex: 2,
  },
  inputFocused: {
    borderColor: '#0097D6',
    boxShadow: '0px 2px 10px 0px #00000026, 0px 0px 0px 4px #0097D640',
  },
  input: {
    height: 54,
    width: '100%',
    paddingLeft: 39,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    fontSize: 16,
  },

  bottomWrapper: {
    marginTop: 'auto',
    rowGap: 8,
  },
});

export default AdaptiveInputScreen;
