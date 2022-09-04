import {useNavigation} from '@react-navigation/native';

function useContainer() {
  const navigation = useNavigation();

  const handleSignIn = () => navigation.navigate('signIn');

  return {
    handleSignIn,
  };
}

export default useContainer;
