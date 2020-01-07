import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Breadcrumb from 'react-native-breadcrumb';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      index: 0,
      content: ''
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(index) {
    this.setState({ content: `Tab ${index + 1} selected !!!`, index});
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>react-native-breadcrumb</Text>
        <Breadcrumb
          entities={['My Tab 1', 'My Tab 2', 'My Tab 3']}
          isTouchable={true}
          flowDepth={this.state.index}
          height={30}
          onCrumbPress={this.handlePress}
          borderRadius={5}
          activeCrumbStyle={{ backgroundColor: 'green' }}
        />
        <View style={{ marginTop: 20, marginBottom: -50}}>
        <Text style={styles.tab}>{this.state.content}</Text>
        <Text style={styles.info}>Author: casth</Text>
        <Text style={styles.info}>Email: chanakaathurugiriya@gmail.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: -200,
    marginBottom: 60
  },
  info: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
    padding: 5
  },
  tab: {
    padding: 30,
    alignSelf: 'center'
  }  
});
