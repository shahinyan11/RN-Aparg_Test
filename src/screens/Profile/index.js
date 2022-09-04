import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import useContainer from './hook';
import styles from './styles';
import {FormikProvider} from 'formik';

import Input from '../../components/Input';
import images from '../../assets/images';
import GalleryItem from '../../components/GalleryItem';
import {Camera} from '../../assets/svgs';

const Profile = () => {
  const {formik, chooseAvatar, photos, avatar, uploadPhotos} = useContainer();
  console.log(222, photos);
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={{uri: avatar}} style={styles.avatar} />

        <ImageBackground source={images.shadow} style={styles.shadow}>
          <TouchableOpacity onPress={chooseAvatar}>
            <Camera />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.gallery}>
        <FlatList
          data={photos}
          contentContainerStyle={styles.flatList}
          horizontal={true}
          renderItem={({item, index}) =>
            index < 1 ? (
              <TouchableOpacity onPress={uploadPhotos}>
                <GalleryItem {...item} addPhoto={true} />
              </TouchableOpacity>
            ) : (
              <GalleryItem {...item} />
            )
          }
          ItemSeparatorComponent={() => <View style={{width: 8}} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.inputsContainer}>
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
  );
};

export default Profile;
