import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPager = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View className='flex-1 justify-center items-center bg-red-500' key="1">
        <Text>First page</Text>
      </View>
      <View className='flex-1 justify-center items-center bg-green-500' key="2">
        <Text>Second page</Text>
      </View>
      <View className='flex-1 justify-center items-center bg-pink-500' key="3">
        <Text>Thrid page</Text>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default MyPager