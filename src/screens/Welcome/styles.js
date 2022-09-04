import {StyleSheet} from 'react-native';
import {ratioWidth} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgTop: {
    height: 405,
    width: ratioWidth * 375,
  },
  bottomContainer: {
    height: '100%',
    position: 'absolute',
    width: ratioWidth * 375,
    top: 284,
    alignItems: 'center',
  },

  bgBottom: {
    flex: 1,
  },

  evernowIcon: {
    width: ratioWidth * 88,
    height: 82,
    marginTop: 60,
  },

  actionsContainer: {
    marginTop: 53,
    paddingHorizontal: 24,
    width: '100%',
    justifyContent: 'space-around',
  },

  button: {
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    borderRadius: 12,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },

  line: {
    width: ratioWidth * 71,
    height: 1,
    backgroundColor: '#343434',
  },

  iconsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  socialIcon: {
    width: ratioWidth * 52,
    height: ratioWidth * 52,
    borderRadius: 16,
    marginHorizontal: 10,
    marginVertical: 16,
  },

  text: {
    textAlign: 'center',
  },
});

export default styles;
