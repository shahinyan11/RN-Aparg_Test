import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
  },

  image: {
    position: 'absolute',
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
  },
});

export default styles;
