import {StyleSheet} from 'react-native';
import {ratioWidth} from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: ratioWidth * 75,
    height: ratioWidth * 75,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: ratioWidth * 4,
    marginHorizontal: ratioWidth * 4,
    position: 'relative',
  },

  iconContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
  },

  icon: {
    height: ratioWidth * 16,
    width: ratioWidth * 16,
  },
  image: {
    position: 'absolute',
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
  },
});

export default styles;
