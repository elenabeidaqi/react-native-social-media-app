import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Title from './components/Title/Title';
import {Mail} from 'lucide-react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop : 30,
            paddingRight : 17,
            paddingLeft : 17
          }}>
          <Title props={'Let’s Explore'} />
          <Mail color={'#898DAE'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
