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

function App(): React.JSX.Element {
  const data : any = [
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
  const pageSize : number = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState<any[]>(data.slice(0 , pageSize));
  const pagination =(data : [] , pageNumber : number , pageSize : number)=>{
    const startIndex = (pageNumber -1)*pageSize //  4 , 8
    if(startIndex > data.length){
      return []
    }
    setPageNumber(pageNumber)
    return data.slice(startIndex , startIndex+pageSize) //  slice(4 , 8) slice(8 , 12)
  }
  return (
    <SafeAreaView>
      <ScrollView>
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
            keyExtractor={(item) => item.id.toString()}
            onEndReached={() =>{
              if(!isLoading){
                setIsLoading(true)
                setRenderedData(prev =>[...prev , ...pagination(data , pageNumber+1 , pageSize)])
                setIsLoading(false)
              }
            }}
            data={renderedData}
            horizontal={true}
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
