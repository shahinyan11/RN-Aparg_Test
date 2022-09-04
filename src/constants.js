import {Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const ratioWidth = deviceWidth / 375;
export const ratioHeight = deviceHeight / 812;
