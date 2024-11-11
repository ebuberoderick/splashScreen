import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPager = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View className='flex-1 justify-center items-center bg-white' key="1">
        <View className='gap-5'>
          <View className='h-96 w-96 rounded-full bg-slate-200' />
          <Text className='font-semibold text-3xl text-center'>Welcome to Surf</Text>
          <Text className='text-gray-400 text-center max-w-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus nihil nisi impedit fugit esse rerum maiores 
          </Text>
        </View>
      </View>
      <View className='flex-1 justify-center items-center bg-white' key="2">
        <Text>Second page</Text>
      </View>
      <View className='flex-1 justify-center items-center bg-white' key="3">
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