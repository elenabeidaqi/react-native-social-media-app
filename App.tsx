import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {Mail} from 'lucide-react-native';
import {style} from './assets/styles/main';
import UserStory from './components/userStory/UserStory';
import UserPost from './components/userPost/UserPost';

function App(): React.JSX.Element {
  const data: any = [
    {firstName: 'Joseph', id: 1},
    {firstName: 'Angel', id: 2},
    {firstName: 'White', id: 3},
    {firstName: 'Olivier', id: 4},
    {firstName: 'Elena', id: 5},
    {firstName: 'Hazel', id: 6},
    {firstName: 'Nancy', id: 7},
    {firstName: 'Nick', id: 8},
    {firstName: 'Kevin', id: 9},
  ];
  const posts: any = [
    {
      id: 1,
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
    },
    {
      id: 2,
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 120,
      comments: 21,
      bookmarks: 5,
    },
    {
      id: 3,
      firstName: 'Elena',
      lastName: 'Gilbert',
      location: 'New Yok , New York',
      likes: 1401,
      comments: 201,
      bookmarks: 89,
    },
    {
      id: 4,
      firstName: 'Hazal',
      lastName: 'Yilmaz',
      location: 'Istanbul , Turkey',
      likes: 178,
      comments: 24,
      bookmarks: 54,
    },
    {
      id: 5,
      firstName: 'Elena',
      lastName: 'Beidaqi',
      location: 'Tehran , Iran',
      likes: 1701,
      comments: 241,
      bookmarks: 51,
    },
  ];
  const pageSizePosts: number = 2;
  const pageSize: number = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumberPosts, setPageNumberPosts] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedData, setRenderedData] = useState<any[]>(
    data.slice(0, pageSize),
  );
  const [renderedDataPosts, setRenderedDataPosts] = useState<any[]>(
    posts.slice(0, pageSizePosts),
  );
  const pagination = (
    data: [],
    pageNumber: number,
    pageSize: number,
    posts: boolean,
  ) => {
    const startIndex = (pageNumber - 1) * pageSize; //  4 , 8
    if (startIndex > data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPageNumberPosts(pageNumber);
    }

    return data.slice(startIndex, startIndex + pageSize); //  slice(4 , 8) slice(8 , 12)
  };
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title props={'Let’s Explore'} />
              <Pressable style={style.messageIcon}>
                <Mail color={'#898DAE'} />
                <View style={style.badge}>
                  <Text style={style.badgeText}>2</Text>
                </View>
              </Pressable>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderedData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize, false),
                    ]);
                    setIsLoading(false);
                  }
                }}
                data={renderedData}
                horizontal={true}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, pageNumberPosts + 1, pageSizePosts, true),
            ]);
            setIsLoadingPosts(false);
          }
        }}
        data={renderedDataPosts}
        renderItem={({item}) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default App;
