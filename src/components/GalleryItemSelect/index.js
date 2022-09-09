import React from 'react';
import {Image, Pressable, View} from 'react-native';
import images from '../../assets/images';

import styles from './styles';

const Input = ({uri, addPhoto, selected, onSelect}) => {
  const source = addPhoto ? uri : {uri};

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      {selected && <Image source={images.photoLayer} style={styles.image} />}

      <View style={styles.iconContainer}>
        {selected ? (
          <Pressable onPress={onSelect}>
            <Image style={styles.icon} source={images.ellipseSelected} />
          </Pressable>
        ) : (
          <Pressable onPress={onSelect}>
            <Image style={styles.icon} source={images.ellipse} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Input;
