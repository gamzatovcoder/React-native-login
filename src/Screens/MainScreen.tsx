import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import ButtonToMain from '../components/other/ButtonToMain';
import RouterButton from '../components/Extensions/RouterButton';
import ButtonToStart from '../components/other/ButtonToStart';
import ModuleCallButton from '../components/Main/ModuleCallButton';
import { modalText } from '../constants/modalText';

import CurrentCartTariff from '../components/Main/CurrentCartTariff';

const MainScreen = () => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.screen]}>
      <ScrollView>
        <View style={[styles.wrapper, { height: windowHeight }]}>
          <View>
            <View style={[styles.topBlock, styles.container]}>
              <Text style={styles.title}>Главная</Text>
              <View style={styles.ButtonToStartWrapper}>
                <RouterButton route="InputIdScreen">
                  <ButtonToStart />
                </RouterButton>
              </View>
            </View>
            <View style={styles.cartWrapper}>
              <CurrentCartTariff />
            </View>
          </View>
          <View>
            <View style={[styles.descriptionList, styles.container]}>
              <ModuleCallButton
                image="userLock"
                buttonText="Политика конфиденциальности"
                modalText={modalText}
              />
              <ModuleCallButton
                image="licenseMaintenance"
                buttonText="Пользовательское соглашение"
                modalText={modalText}
              />
              <View style={styles.versionWrapper}>
                <Text style={styles.versionTitle}>Версия приложения</Text>
                <Text style={styles.version}>11.0003.503</Text>
              </View>
            </View>
            <View style={[styles.tabBar, styles.container]}>
              <ButtonToMain />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F8F8F8',
  },
  container: {
    paddingHorizontal: 16,
  },
  wrapper: {
    backgroundColor: '#F8F8F8ш',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topBlock: {
    height: 126,
    backgroundColor: '#F8F8F8',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    boxShadow:
      '0px 1px 3px 0px #8F8F8F26, 0px 5px 5px 0px #8F8F8F21, 0px 12px 7px 0px #8F8F8F14, 0px 21px 8px 0px #8F8F8F05, 0px 33px 9px 0px #8F8F8F00',
  },

  title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 24,
  },
  ButtonToStartWrapper: {
    marginBottom: 12,
  },
  cartWrapper: {
    marginTop: 48,
  },
  descriptionList: {
    rowGap: 8,
  },
  versionWrapper: {
    height: 54,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  versionTitle: {
    fontSize: 14,
    color: '#110C22',
  },
  version: {
    fontSize: 12,
    fontWeight: 'medium',
    color: '#676472',
  },
  tabBar: {
    height: 92,
    backgroundColor: '#F8F8F8',

    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    boxShadow:
      ' 0px -1px 2px 0px #A1A1A11A, 0px -3px 3px 0px #A1A1A117, 0px -7px 4px 0px #A1A1A10D, 0px -12px 5px 0px #A1A1A103, 0px -20px 5px 0px #A1A1A100',
  },
});

export default MainScreen;
