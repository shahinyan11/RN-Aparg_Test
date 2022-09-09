import {StyleSheet} from 'react-native';

import {ratioWidth} from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 84,
    paddingHorizontal: ratioWidth * 20,
    alignItems: 'center',
  },
  preview: {
    height: ratioWidth * 180,
    width: ratioWidth * 180,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  previewImage: {
    height: '100%',
    width: '100%',
  },
  button: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56,
    borderRadius: 12,
  },
});

export default styles;
