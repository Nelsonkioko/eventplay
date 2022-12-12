/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, ROUTES, IMGS} from '../../constants';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../redux/userSlice';

//const {width} = Dimensions.get('screen');

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(
      deleteUser({
        id: id,
      }),
    );
  };

  return (
    <>
      <ImageBackground source={IMGS.bgPattern} style={{height: 200}} />
      {/* <View style={styles.header} /> */}
      <View style={styles.meInfor} />
      <FastImage source={IMGS.user} style={styles.avatar} />

      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: COLORS.white,
        }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>My chats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={function () {
            navigation.navigate(ROUTES.LOGIN);
            onDelete();
          }}
          style={styles.button}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.white,
    padding: 17,
    margin: 10,
    borderRadius: 10,
    borderColor: COLORS.gray,
    borderWidth: 2,
    fontSize: 18,
    width: 300,
  },
  buttonText: {
    color: COLORS.gray,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  header: {
    height: 150,
    backgroundColor: 'grey',
  },
  meInfor: {
    backgroundColor: '#FFF',
    top: 0,
    height: 70,
    width: Dimensions.get('window').width,
  },
  avatar: {
    position: 'absolute',
    top: 140,
    left: Dimensions.get('window').width / 2 - 50,
    alignItems: 'center',
    width: 110,
    height: 110,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 120,
  },
});
