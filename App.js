import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* This sets the status bar color */}
      <StatusBar barStyle="light-content" backgroundColor="#2563EB" />
      
      {/* A Native Header to make it look like a real App */}
      <View style={styles.header}>
        <Text style={styles.headerText}>STEI - Lab</Text>
      </View>

      {/* The WebView loads your simulation */}
      <WebView 
        // This points to the file you put in the assets folder
        source={{ uri: 'https://steilab.netlify.app/' }} 
        
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['*']}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#2563EB', // Blue header
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
  },
});