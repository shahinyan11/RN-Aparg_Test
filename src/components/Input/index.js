import React from 'react';

import useContainer from './hook';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const Input = ({name, ...props}) => {
  const {meta, field} = useContainer({name});

  return (
    <View>
      <TextInput
        name={field.name}
        onChangeText={field.onChange(name)}
        onBlur={field.onBlur(name)}
        {...props}
      />
      {meta.touched && meta.error && (
        <Text style={styles.errorText}>{meta.error}</Text>
      )}
    </View>
  );
};

export default Input;
