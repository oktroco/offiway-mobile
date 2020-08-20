import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { kakao } from '../../settings';

class Map extends Component<{}, {}> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'black' }}>KaKao : {kakao.JS_KEY}</Text>
      </View>
    );
  }
}

export default Map;
