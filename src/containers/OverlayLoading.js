import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';

export const OverLayLoading = () => {
  return (
    <View style={styles.overlayLoadingContainer}>
      <ActivityIndicator size={50} animating={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayLoadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
});
