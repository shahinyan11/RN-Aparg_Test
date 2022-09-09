import React, {useEffect, useLayoutEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import images from '../../assets/images';
import {Back} from '../../assets/svgs/Back';
import updateData from '../../utils/updateData';
import {useDispatch, useSelector} from 'react-redux';
import {removePhotosAction, setPhotosAction} from '../../redux/actions';

const initPhotos = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    uri: images.addPhoto,
  },
];

function useContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [gender, setGender] = useState('');
  const [surname, setSurname] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('');
  const {photos} = useSelector(state => state.mainReducer);

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
      setName(currentUser?.name || '');
      setSurname(currentUser?.surname || '');
      setGender(currentUser?.gender || '');

      setPhotosAction(currentUser?.photos || []);
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
    dispatch(removePhotosAction());

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

  return {
    name,
    gender,
    surname,
    visible,
    username,
    setName,
    setGender,
    navigation,
    setVisible,
    setSurname,
    setUsername,
    chooseAvatar,
    photos: [...initPhotos, ...photos],
    avatar: avatar ? {uri: avatar} : images.defaultAvatar,
  };
}

export default useContainer;
