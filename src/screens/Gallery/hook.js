import {useEffect, useState} from 'react';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {setPhotosAction} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

function useContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [lastSelected, setLastSelected] = useState(null);

  const getPhotos = async item => {
    return await CameraRoll.getPhotos({
      first: 30,
      assetType: 'Photos',
    })
      .then(res => {
        setPhotos(res.edges);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleSelect = index => {
    const arr = [...selectedIndexes];

    if (!arr.includes(index)) {
      if (selectedIndexes.length > 4) {
        alert("you can't select more than 5 photos");

        return;
      }

      arr.push(index);
      setLastSelected(photos[index].node.image);
    } else {
      arr.splice(arr.indexOf(index), 1);

      const lastIndex = arr.length - 1;
      setLastSelected(photos[lastIndex]?.node.image);
    }

    setSelectedIndexes(arr);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const handleAdd = () => {
    const selectedPhotos = [];

    photos.forEach((photo, index) => {
      if (selectedIndexes.includes(index)) {
        selectedPhotos.push(photo.node.image);
      }
    });

    dispatch(setPhotosAction(selectedPhotos));
    navigation.navigate('profile');
  };

  return {
    photos,
    selectedIndexes,
    setSelectedIndexes,
    handleSelect,
    buttonVisible: selectedIndexes.length > 0,
    handleAdd,
    lastSelected,
  };
}

export default useContainer;
