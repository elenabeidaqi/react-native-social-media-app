import React from 'react';
import {Image, View} from 'react-native';
import { style } from './style';

const UserProfileImage  = () => {
  return (
    <View style={style.userProfileImageContainer}>
      <Image source={require('../../assets/images/default-profile.png')} />
    </View>
  );
};

export default UserProfileImage;
