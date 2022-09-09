import {StyleSheet} from 'react-native';

import {ratioWidth} from '../../constants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: ratioWidth * 28,
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
    paddingHorizontal: 32,
    paddingTop: 37,
  },
  label: {
    marginBottom: 8,
    marginTop: 28,
  },
  input: {
    height: 48,
    width: ratioWidth * 241,
    borderBottomWidth: 1,
    borderBottomColor: '#77B6DB',
  },
  dropDownButton: {
    backgroundColor: 'rgba(0,0,0,0)',
  },

  modal: {
    flex: 1,
    backgroundColor: 'rgba(30, 30, 30, 0.75)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  button: {
    width: ratioWidth * 355,
    height: 57,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cameraButton: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomWidth: 0.5,
  },

  albumButton: {
    borderTopWidth: 0.5,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },

  closeButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginTop: 6,
    marginBottom: 10,
  },
});

export default styles;
