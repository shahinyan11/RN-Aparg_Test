import {useFormik} from 'formik';

import validationSchema from '../../validations/signIn';
import {useNavigation} from '@react-navigation/native';

function useContainer() {
  const navigation = useNavigation();

  const onSubmit = () => {
    navigation.navigate('profile');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return {
    formik,
  };
}

export default useContainer;
