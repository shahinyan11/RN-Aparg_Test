import React from 'react';
import {FormikProvider} from 'formik';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import images from '../../assets/images';
import useContainer from './hook';
import styles from './styles';
import Input from '../../components/Input';

const Welcome = () => {
  const {formik} = useContainer();

  return (
    <ImageBackground source={images.bg_main} style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.top}>
          <Image source={images.subtract} style={styles.imageAbsolute} />
          <View style={styles.inputsContainer}>
            <Text style={{marginBottom: 25}}>Войти</Text>
            <FormikProvider value={formik}>
              <Input
                id="name"
                name="email"
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#77B6DB"
              />
              <Input
                id="password"
                name="password"
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="#77B6DB"
              />
            </FormikProvider>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Image source={images.bg_bottom} style={styles.imageAbsolute} />
        <TouchableOpacity
          disabled={!formik.isValid}
          onPress={formik.handleSubmit}>
          <View style={[styles.button, styles.buttonWhite]}>
            <Text>Войти</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text>Регистрация</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
