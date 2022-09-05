import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import images from '../../assets/images';
import {Camera} from '../../assets/svgs';
import GalleryItem from '../../components/GalleryItem';

import styles from './styles';
import useContainer from './hook';

const genders = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'Female'},
];

const Profile = () => {
  const {
    name,
    photos,
    gender,
    avatar,
    setName,
    surname,
    username,
    setGender,
    setSurname,
    setUsername,
    chooseAvatar,
    uploadPhotos,
  } = useContainer();

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={avatar} style={styles.avatar} />
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
          showsHorizontalScrollIndicator={false}
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
        <Text style={styles.label}>Имя</Text>
        <TextInput
          name="name"
          onChangeText={text => setName(text)}
          style={styles.input}
          placeholderTextColor="#77B6DB"
          value={name}
        />
        <Text style={styles.label}>Фамилия</Text>
        <TextInput
          name="surname"
          onChangeText={text => setSurname(text)}
          style={styles.input}
          placeholderTextColor="#77B6DB"
          value={surname}
        />
        <Text style={styles.label}>Пол</Text>
        <RNPickerSelect
          items={genders}
          onValueChange={value => {
            setGender(value);
          }}
          value={gender}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          name="username"
          onChangeText={text => setUsername(text)}
          style={styles.input}
          placeholderTextColor="#77B6DB"
          value={username}
        />
      </View>
    </View>
  );
};

export default Profile;
