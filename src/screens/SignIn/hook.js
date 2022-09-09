import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import signIn from '../../hoocks/signIn';
import {setLoggedInAction} from '../../redux/actions';
import validationSchema from '../../validations/signIn';

function useContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async (values, form) => {
    const res = await signIn(values);

    if (res?.error) {
      form.setErrors({password: 'Invalid password'});

      return;
    }

    dispatch(setLoggedInAction(true));
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
