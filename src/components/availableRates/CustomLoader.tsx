import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const CustomLoader = () => {
  const rotateAnimFast = useRef(new Animated.Value(0)).current; // быстрое вращение
  const rotateAnimSlow = useRef(new Animated.Value(0)).current; // медленное вращение

  useEffect(() => {
    // Анимация для быстрого вращения
    Animated.loop(
      Animated.timing(rotateAnimFast, {
        toValue: 1,
        duration: 1500, // быстрее
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    // Анимация для медленного вращения
    Animated.loop(
      Animated.timing(rotateAnimSlow, {
        toValue: 1,
        duration: 1000, // медленнее
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    // Очистка при размонтировании
    return () => {
      rotateAnimFast.stopAnimation();
      rotateAnimSlow.stopAnimation();
    };
  }, [rotateAnimFast, rotateAnimSlow]);

  // Интерполяция для быстрых и медленных вращений
  const spinFast = rotateAnimFast.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const spinSlow = rotateAnimSlow.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.loader}>
      <View style={styles.wrapper}>
        <Animated.Image
          source={require('../../images/property1.png')}
          style={{
            position: 'absolute',
            transform: [{ rotate: spinFast }],
          }}
          resizeMode="contain"
        />
        <Animated.Image
          source={require('../../images/property2.png')}
          style={{
            position: 'absolute',
            transform: [{ rotate: spinSlow }],
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    backgroundColor: '#b62828ffFFF',
  },
  wrapper: {
    position: 'relative',
    width: 48,
    height: 48,
  },
});

export default CustomLoader;
