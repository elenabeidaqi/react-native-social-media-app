
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from './components/Title/Title';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Title props={"Let’s Explore"}/>
    </SafeAreaView>
  );
}

export default App;