import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Pressable,
  Modal,
  //Easing,
} from 'react-native';
import {React, useState} from 'react';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(0);
  const [modalVisible, setModalVisible] = useState(false);
  // Animated.timing(translateYImage, {
  //   toValue: 0,
  //   duration: 1000,
  //   useNativeDriver: true,
  //   easing: Easing.bounce,
  // }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView2}>
              <View style={styles.modalView}>
                <View style={styles.container2}>
                  <Text style={styles.title2}>
                    <Icon name="location-sharp" size={17} color="black" />
                    {item.title2} city
                  </Text>
                  <Animated.Image
                    source={item.img}
                    resizeMode="contain"
                    style={[styles.image2]}
                  />
                  <Text style={styles.title}>
                    {item.title} - {item.price}
                  </Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Book</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>View Details</Text>
          </Pressable>
        </View>
        {/*  modal ends here */}
        <Text style={styles.title2}>
          <Icon name="location-sharp" size={17} color="black" />
          {item.title2} city
        </Text>

        <Text style={styles.title}>
          {item.title} - {item.price}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width,
    height,
    alignItems: 'center',
  },
  container2: {
    flex: 3,
    //flexDirection: 'column',
    width,
    //height,
    alignItems: 'center',
    //position: 'absolute',
  },
  image: {
    flex: 0.35,
    width: '80%',
    borderRadius: 30,
    marginBottom: 30,
    //marginTop: 1,
  },
  image2: {
    flex: 1,
    width: '100%',
    //height: '25%',
    borderRadius: 10,
    //size: '20%',
    marginBottom: 20,
    marginTop: 10,
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
    marginBottom: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 12,
    marginVertical: 5,
    color: COLORS.gray,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 15,
  },
  centeredView: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  centeredView2: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLORS.black,
    marginBottom: 10,
  },
  buttonClose: {
    backgroundColor: 'black',
    width: 100,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
});
