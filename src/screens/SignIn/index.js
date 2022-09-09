import React from 'react';
import {FormikProvider} from 'formik';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import images from '../../assets/images';
import Input from '../../components/Input';
import useContainer from './hook';
import styles from './styles';

const Welcome = () => {
  const {formik} = useContainer();

  return (
    <ScrollView style={{flex: 1}}>
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
            <View style={styles.button}>
              <Text>Войти</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.button, styles.buttonTransparent]}>
              <Text>Регистрация</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Welcome;
