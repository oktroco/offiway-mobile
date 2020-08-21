import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Map } from '../components/map';

class MainScreen extends Component<{}, {}> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'black' }}>Hello</Text>
        <Map />
      </View>
    );
  }
}

export default MainScreen;
