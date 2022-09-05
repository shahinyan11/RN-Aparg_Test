import AsyncStorage from '@react-native-async-storage/async-storage';

const signIn = async ({email, password}) => {
  const users = JSON.parse(await AsyncStorage.getItem('users')) || [];

  const foundUser = users.find(user => user.email === email);
  const currenUser = foundUser || {email, password};

  if (foundUser && foundUser.password !== password) {
    return {error: {password: 'Invalid password'}};
  }

  if (!foundUser) {
    await AsyncStorage.setItem('users', JSON.stringify([...users, currenUser]));
  }

  await AsyncStorage.setItem('currentUser', JSON.stringify(currenUser));
};

export default signIn;
