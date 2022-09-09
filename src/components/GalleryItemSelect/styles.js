import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 4,
    marginHorizontal: 4,
    position: 'relative',
  },

  iconContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
  },

  icon: {
    height: 16,
    width: 16,
  },
  image: {
    position: 'absolute',
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
  },
});

export default styles;
