import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 4,
    marginHorizontal: 4,
  },

  image: {
    position: 'absolute',
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
  },
});

export default styles;
