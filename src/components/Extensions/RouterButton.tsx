import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

interface Props {
  route: string;
  children: React.ReactNode;
}

const RouterButton = ({ route, children }: Props) => {
  const navigation = useNavigation();

  const handleNext = (): void => {
    navigation.navigate(route);
  };

  return <Pressable onPress={handleNext}>{children}</Pressable>;
};

export default RouterButton;
