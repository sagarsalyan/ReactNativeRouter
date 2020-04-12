import React, { Component } from 'react'
import { StyleSheet, Text, View} from "react-native";

const Topic = ({ match }) => {
  return(
    <Text style={styles.topic}>{match.params.topicId}</Text>
  )
}

export default Topic;

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  }
});
