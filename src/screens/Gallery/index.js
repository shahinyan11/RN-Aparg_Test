import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import images from '../../assets/images';
import socialIcons from '../../assets/socialIcons';
import useContainer from './hook';
import styles from './styles';

const Welcome = () => {
  const {handleSignIn} = useContainer();

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image source={images.shutterstock} style={styles.bgTop} />
        <Image source={images.mask_group} style={styles.bgBottom} />
        <View style={styles.bottomContainer}>
          <Image source={images.evernow} style={styles.evernowIcon} />
          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={handleSignIn}>
              <View style={styles.button}>
                <Text>Войти</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text>Регистрация</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.socialsHeader}>
              <View style={styles.line} />
              <Text>Войти через соц сети</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.iconsContainer}>
              <Image source={socialIcons.google} style={styles.socialIcon} />
              <Image source={socialIcons.fb} style={styles.socialIcon} />
              <Image source={socialIcons.vk} style={styles.socialIcon} />
              <Image source={socialIcons.apple} style={styles.socialIcon} />
            </View>
            <Text style={styles.text}>Политика конфидециальности</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;
