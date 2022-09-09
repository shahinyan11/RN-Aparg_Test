import React from 'react';
import {Image, Pressable, View} from 'react-native';
import images from '../../assets/images';

import styles from './styles';

const Input = ({uri, addPhoto, selected, onSelect}) => {
    const source = addPhoto ? uri : {uri};

    return (
        <Pressable style={styles.container} onPress={onSelect}>
            <Image source={source} style={styles.image}/>
            {selected && <Image source={images.photoLayer} style={styles.image}/>}

            <View style={styles.iconContainer}>
                {selected ? (
                    <Image style={styles.icon} source={images.ellipseSelected}/>
                ) : (
                    <Image style={styles.icon} source={images.ellipse}/>
                )}
            </View>
        </Pressable>
    );
};

export default Input;
