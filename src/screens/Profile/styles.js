import {StyleSheet} from 'react-native';
import {ratioWidth} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: ratioWidth * 28,
    backgroundColor: '#E7E7E7',
  },
  circle: {
    width: ratioWidth * 120,
    height: ratioWidth * 120,
    borderRadius: 120,
    alignItems: 'center',
    marginTop: 89,
    overflow: 'hidden',
  },

  avatar: {
    width: '100%',
    height: '100%',
  },

  shadow: {
    position: 'absolute',
    bottom: 0,
    width: ratioWidth * 120,
    height: ratioWidth * 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gallery: {
    height: 162,
    width: '100%',
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },

  flatList: {
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  inputsContainer: {
    width: ratioWidth * 319,
    height: 367,
    paddingHorizontal: 32,
    paddingTop: 37,
  },

  input: {
    height: 48,
    width: ratioWidth * 241,
    borderBottomWidth: 1,
    borderBottomColor: '#77B6DB',
  },
});

export default styles;
