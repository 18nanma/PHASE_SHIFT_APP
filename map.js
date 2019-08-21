import React, { Component } from 'react';
import { StyleSheet, View, Modal,Dimensions, Image } from 'react-native';
import {Icon} from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';
import PinchZoomView from 'react-native-pinch-zoom-view';
import ImageZoom from 'react-native-image-pan-zoom';

export default class App extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
<View style={{

        backgroundColor:'#213368',
 //       paddingTop:5,                //remove all other padding lines
 //      paddingLeft:10,
        flexDirection:'row'
      }}>

   //     <View style={{flex:1,alignItems:'flex-start',paddingTop:0}}>        //remove all other padding lines
          <Icon name='sort' color='#ffffff' size={35}  onPress= {()=>this.props.navigation.openDrawer()}/>

        </View>
      </View>

        <ImageZoom cropWidth={Dimensions.get('window').width}
           cropHeight={Dimensions.get('window').height}
 //          imageHeight={Dimensions.get('window').height}
 //          imageWidth={Dimensions.get('window').width}>


          <Image source={require('./assets/map.jpeg')} style={{width:450, height:600,paddingBottom:20}}  />

          </ImageZoom>

          </View>

    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

  },
});
