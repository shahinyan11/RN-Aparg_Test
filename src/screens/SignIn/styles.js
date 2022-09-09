import {StyleSheet} from 'react-native';
import {ratioWidth} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    marginTop: 111,
  },

  inputsContainer: {
    width: ratioWidth * 319,
    height: 367,
    paddingHorizontal: 32,
    paddingTop: 37,
  },
  imageAbsolute: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  input: {
    height: 48,
    width: ratioWidth * 241,
    borderBottomWidth: 1,
    borderBottomColor: '#77B6DB',
  },
  bottomContainer: {
    marginTop: -53,
    height: 387,
    width: ratioWidth * 375,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  button: {
    marginBottom: 8,
    borderRadius: 12,
    width: ratioWidth * 300,
    backgroundColor: '#FFFFFF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTransparent: {
    backgroundColor: 'rgba(0,0,0, 0)',
    marginBottom: 45,
  },
});

export default styles;
