import Carousel from 'react-native-snap-carousel';
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export class DestinationCarousel extends React.Component {
  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={this.props.destinations}
        renderItem={this._renderItem}
        sliderWidth={400}
        itemWidth={300}
        onBeforeSnapToItem={index => {
          this.props.goToDestination(this.props.destinations[index]);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'red'
  },
  title: {}
});
