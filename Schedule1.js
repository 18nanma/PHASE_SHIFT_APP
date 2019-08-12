import React, { Fragment } from 'react';
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback ,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ImageBackground
} from 'react-native';

export default class Schedule extends React.Component{
    state = {
      animation: new Animated.Value(0),
    };
startAnimation = () =>
{
  Animated.timing(this.state.animation , {
    toValue: 360,
    duration: 3000,
  }).start();

}
render() {
  const rotateInterpolate = this.state.animation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "1080deg"]

  })



  return(
    <Fragment>
    <StatusBar barStyle="dark-content" />
    <ImageBackground source={require('./assets/Grad-01.jpg')}
    style={{
      width: '100%',
      flex:1,
      height: '100%',
      resizeMode: 'cover',
      }}>
    <SafeAreaView>
    <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{
          alignItems:'flex-end',
          resizeMode: 'contain',
          padding:10,
          paddingRight:0,
          paddingTop:10,
          paddingBottom:0,
        }}>
          <Image source={require('./assets/ps_logo_white_2019-07-31/ps_logo_white.png')} />
        </View>

        <View style={{
          alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:0
        }} >
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableWithoutFeedback onPress=
                    {this.startAnimation}>
                    <Animated.View style={{paddingBottom:28,
                    transform : [
                      {
                         rotateY: rotateInterpolate
                      } ] }}>
                        <Text style={{fontSize: 45, letterSpacing: 0.3, color:'white', justifyContent: 'center', alignItems: 'center'}}>
                        Schedule</Text>
                    </Animated.View>

                    </TouchableWithoutFeedback>
                    </View>


          <View style={{backgroundColor: 'rgba(0,0,139, 0.1)', borderRadius:15, width:260}}>
          <Image source={require('./assets/Info.gif')}
          style={{width:250, height:200}}/>
          </View>
              </View>
      </ScrollView>
      </SafeAreaView>
      </ImageBackground>
      </Fragment>

  );
}
}
