
import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './style';

const UserStory = ({firstName}: any) => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={require('../../assets/images/default-profile.png')} />
      </View>
      <View>
        <Text style={style.name}>{firstName}</Text>
      </View>
    </View>
  );
};

export default UserStory;
