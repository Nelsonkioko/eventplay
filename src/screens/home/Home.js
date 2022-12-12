/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  Animated,
  FlatList,
  View,
  Text,
  StyleSheet,
  Dimensions,

  //Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Slides, {sliderData} from '../../data';
import SlideItem from '../../components/SlideItem';
import {COLORS} from '../../constants';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const Home = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const names = useSelector(state => state.users);
  console.log(names);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderName = names.map(function (first, i) {
    return (
      <View key={i}>
        <View style={styles.itemContainerRow}>
          <Icon
            style={styles.hand}
            name="hand-left-outline"
            size={20}
            color="black"
          />
          <Text style={styles.name}>Hi {first.name}</Text>
        </View>
      </View>
    );
  });

  return (
    <>
      {renderName}
      <ScrollView style={styles.container}>
        <View style={styles.itemContainerRow}>
          <Text style={styles.title1}>Upcoming Festivals</Text>
        </View>
        <View style={{flex: 3}}>
          <FlatList
            data={Slides}
            renderItem={({item}) => <SlideItem item={item} />}
            horizontal
            pagingEnabled={false}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
        </View>

        <View style={styles.itemColumn}>
          <View>
            <Text style={styles.title2}>Upcoming Events</Text>
          </View>

          <View>
            <FlatList
              data={sliderData}
              renderItem={({item}) => (
                <FastImage
                  source={item}
                  key={index}
                  style={{
                    width: 150,
                    height: 180,
                    borderWidth: 2,
                    borderColor: COLORS.black,
                    resizeMode: 'contain',
                    margin: 8,
                  }}
                />
              )}
              horizontal
              pagingEnabled={false}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              onScroll={handleOnScroll}
              onViewableItemsChanged={handleOnViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Home;

//styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    width,
    height,
    backgroundColor: 'white',
    //alignItems: 'center',
  },
  itemContainerRow: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginLeft: 10,
    //marginBottom: 5,
    marginTop: 5,
  },
  itemColumn: {
    flex: 2,
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 390,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.gray,
    //marginLeft: '40%',
    marginTop: 5,
  },
  hand: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.gray,
    marginLeft: '35%',
    marginTop: 5,
    marginRight: 3,
  },
});
