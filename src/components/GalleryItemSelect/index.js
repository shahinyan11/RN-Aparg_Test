import React from 'react';
import {Image, View} from 'react-native';

import styles from './styles';

const Input = ({uri, addPhoto}) => {
  const source = addPhoto ? uri : {uri};

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

export default Input;
