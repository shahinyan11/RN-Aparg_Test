import validationSchema from '../../validations/signIn';
import {useFormik} from 'formik';
import {useState} from 'react';
import images from '../../assets/images';
import ImagePicker from 'react-native-image-crop-picker';
import uuid from 'react-native-uuid';

const initPhotos = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    uri: images.addPhoto,
  },
];

function useContainer() {
  const [avatar, setAvatar] = useState(null);
  const [photos, setPhotos] = useState(initPhotos);

  const chooseAvatar = () => {
    ImagePicker.openPicker({}).then(image => {
      setAvatar(image.path);
    });
  };

  const uploadPhotos = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      const newPhotos = [];
      images.forEach(item =>
        newPhotos.push({
          id: uuid.v4(),
          uri: item.path,
        }),
      );

      setPhotos([...photos, ...newPhotos]);
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    // onSubmit,
  });

  return {
    formik,
    avatar,
    photos,
    chooseAvatar,
    uploadPhotos,
  };
}

export default useContainer;
