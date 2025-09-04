import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainButton from './MainButton';
import PrivacyNotice from './PrivacyNotice';
import ButtonBack from './buttonBack';
import { useState } from 'react';
import { featureFlags } from 'react-native-screens';

interface Props {
  isVisibleButtonBack?: true;
  mainButtonHandler?: () => void;
  requiredInput?: true;
  inputAttributes: TextInputProps;
  inputImage: 'user' | 'lock';
}

const AdaptiveInputScreen = ({
  isVisibleButtonBack,
  mainButtonHandler,
  inputAttributes,
  inputImage,
}: Props) => {
  const [isFocusedInput, setIsFocusedInput] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputValue = (text: string) => {
    setInputValue(text);
  };

  const inputImages = {
    user: require('../../images/user.png'),
    lock: require('../../images/lock.png'),
  };
  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.topWrapper}>
          {isVisibleButtonBack && (
            <View style={styles.backButton}>
              <ButtonBack />
            </View>
          )}
          <Image source={require('../../images/logo.png')} />
        </View>
        <Text style={styles.title}>Очень домашний интернет</Text>
        <Text style={styles.description}>
          Войдите в систему, чтобы пользоваться всеми функциями приложения.
        </Text>
        <View
          style={[styles.inputWrapper, isFocusedInput && styles.inputBorder]}
        >
          <Image style={styles.inputImage} source={inputImages[inputImage]} />
          <TextInput
            style={[styles.input, isFocusedInput && styles.inputFocused]}
            onFocus={() => setIsFocusedInput(true)}
            onBlur={() => setIsFocusedInput(false)}
            onChangeText={handleInputValue}
            value={inputValue}
            {...inputAttributes}
          />
        </View>
        <View style={styles.bottomWrapper}>
          <PrivacyNotice />
          <MainButton
            title="Продолжить"
            isActive={inputValue ? true : false}
            handler={mainButtonHandler}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F8F8F8',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
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
    borderColor: 'rgba(0,0,0,0)',
    borderRadius: 15,
    borderWidth: 4,
  },
  inputImage: {
    position: 'absolute',
    top: '50%',
    left: 13,
    transform: [{ translateY: -7.5 }],
    zIndex: 2,
  },
  input: {
    height: 54,
    width: '100%',
    paddingLeft: 36,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#0097D6',
  },
  inputBorder: {
    borderColor: '#0097D640',
  },

  bottomWrapper: {
    marginTop: 'auto',
    rowGap: 8,
  },
});

export default AdaptiveInputScreen;
