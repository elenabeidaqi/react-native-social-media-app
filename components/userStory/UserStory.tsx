
import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './style';
import UserProfileImage from '../userProfileImage/UserProfileImage';

const UserStory = ({firstName}: any) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage/>
      <View>
        <Text style={style.name}>{firstName}</Text>
      </View>
    </View>
  );
};

export default UserStory;
