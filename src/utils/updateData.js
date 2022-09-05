import AsyncStorage from '@react-native-async-storage/async-storage';

const updateData = async userData => {
  let users = JSON.parse(await AsyncStorage.getItem('users'));
  let currentUser = JSON.parse(await AsyncStorage.getItem('currentUser'));

  const newUsers = users.map(user => {
    return user?.email === currentUser.email
      ? {...user, ...userData, signedIn: false}
      : user;
  });

  AsyncStorage.setItem(
    'currentUser',
    JSON.stringify({...currentUser, ...userData}),
  );
  AsyncStorage.setItem('users', JSON.stringify(newUsers));
};

export default updateData;
