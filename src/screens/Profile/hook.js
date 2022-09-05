import React, {useEffect, useLayoutEffect, useState} from 'react';
import uuid from 'react-native-uuid';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import images from '../../assets/images';
import {Back} from '../../assets/svgs/Back';
import updateData from '../../utils/updateData';

const initPhotos = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    uri: images.addPhoto,
  },
];

function useContainer() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [photos, setPhotos] = useState([]);
  const [gender, setGender] = useState('');
  const [surname, setSurname] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={handeGoBack}>
          <Back />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('currentUser').then(data => {
      const currentUser = JSON.parse(data);

      setAvatar(currentUser?.avatar);
      setPhotos(currentUser?.photos || []);
      setName(currentUser?.name || '');
      setSurname(currentUser?.surname || '');
      setGender(currentUser?.gender || '');
    });
  }, [navigation]);

  useEffect(() => {
    updateData({
      avatar,
      photos,
      name,
      surname,
      gender,
      username,
    });
  }, [avatar, photos, name, surname, gender, username]);

  const handeGoBack = async () => {
    await AsyncStorage.removeItem('currentUser');

    navigation.reset({
      index: 0,
      routes: [{name: 'signIn'}],
    });
  };

  const chooseAvatar = () => {
    ImagePicker.openPicker({}).then(image => {
      setAvatar(image.path);
    });
  };

  const uploadPhotos = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      const newPhotos = [];
      images.forEach(item =>
        newPhotos.push({
          id: uuid.v4(),
          uri: item.path,
        }),
      );

      setPhotos([...photos, ...newPhotos]);
    });
  };

  return {
    name,
    gender,
    surname,
    username,
    setName,
    setGender,
    setSurname,
    setUsername,
    chooseAvatar,
    uploadPhotos,
    photos: [...initPhotos, ...photos],
    avatar: avatar ? {uri: avatar} : images.defaultAvatar,
  };
}

export default useContainer;
