import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {style} from './style';
import {
  BookmarkMinus,
  Ellipsis,
  Heart,
  MessageCircleMore,
} from 'lucide-react-native';
interface userPostsProps {
  firstName: string;
  lastName: string;
  likes: number;
  comments: number;
  bookmarks: number;
  location: string;
}
const UserPost = ({
  firstName,
  lastName,
  likes,
  comments,
  bookmarks,
  location,
}: userPostsProps) => {
  return (
    <View style={style.postContainer}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <View style={style.image}>
            <Image
              source={require('../../assets/images/default-profile.png')}
            />
          </View>

          <View style={style.userPostInformation}>
            <Text style={style.name}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={style.location}>{location}</Text>}
          </View>
        </View>
        <Pressable>
          <Ellipsis color={'#79869F'} />
        </Pressable>
      </View>
      <View style={style.post}>
        <Image  source={require('../../assets/images/default-post.png')} />
      </View>

      <View style={style.userPostStatus}>
        <Pressable style={style.status}>
          <Heart color={'#79869F'} />
          <Text style={style.userStatusText}>{likes}</Text>
        </Pressable>
        <Pressable style={style.status}>
          <MessageCircleMore color={'#79869F'} />
          <Text style={style.userStatusText}>{comments}</Text>
        </Pressable>
        <Pressable style={style.status}>
          <BookmarkMinus color={'#79869F'} />
          <Text style={style.userStatusText}>{bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserPost;
