import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import useContainer from './hook';
import GalleryItemSelect from '../../components/GalleryItemSelect';
import LinearGradient from 'react-native-linear-gradient';
import {deg} from 'react-native-linear-gradient-degree';

const Gallery = () => {
  const {
    photos,
    selectedIndexes,
    handleSelect,
    buttonVisible,
    handleAdd,
    lastSelected,
  } = useContainer();

  return (
    <View style={styles.container}>
      {lastSelected && (
        <View style={styles.preview}>
          <Image source={{uri: lastSelected.uri}} style={styles.previewImage} />
        </View>
      )}
      <FlatList
        data={photos}
        numColumns={4}
        renderItem={({index, item}) => {
          return (
            <GalleryItemSelect
              {...item.node.image}
              selected={selectedIndexes.includes(index)}
              onSelect={() => {
                handleSelect(index);
              }}
            />
          );
        }}
      />
      {buttonVisible && (
        <TouchableOpacity style={{width: '100%'}} onPress={handleAdd}>
          <LinearGradient
            style={styles.button}
            colors={['#FBEAC4', '#AFDDFF']}
            {...deg(118)}>
            <Text>Добавить</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Gallery;
