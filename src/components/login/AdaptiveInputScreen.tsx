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
import MainButton from '../other/MainButton';
import PrivacyNotice from './PrivacyNotice';
import BackButton from './BackButton';
import BackButtonExtension from '../Extensions/BackButton';
import { useEffect, useState } from 'react';

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
  const [isFocusedInput, setIsFocusedInput] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputValue = (text: string) => {
    setInputValue(text);
  };

  const windowHeight = Dimensions.get('window').height;
  // , { height: windowHeight }
  const inputImages = {
    user: require('../../images/user.png'),
    lock: require('../../images/lock.png'),
  };

  const [keyboardHeight, setKeyboardHeight] = useState(0);

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
                onChangeText={handleInputValue}
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
    top: '50%',
    left: 0,
    transform: [{ translateY: -24 }],
  },
  image: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    marginBottom: 22,
  },
  description: {
    fontSize: 12,
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
