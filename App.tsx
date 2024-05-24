import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from './components/Title/Title';
import {Mail} from 'lucide-react-native';
import {style} from './assets/styles/main';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title props={'Let’s Explore'} />
          <Pressable style={style.messageIcon}>
            <Mail color={'#898DAE'} />
            <View
              style={style.badge}>
              <Text style={style.badgeText}>2</Text> 
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
