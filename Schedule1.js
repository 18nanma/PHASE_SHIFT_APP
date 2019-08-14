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
  ImageBackground,
  Easing
} from 'react-native';

export default class App extends React.Component{
    state = {
      animation: new Animated.Value(0),
    };
startAnimation = () =>
{
  Animated.sequence([
  Animated.timing(this.state.animation , {
    toValue: 360,
    duration: 1000,
    easing:Easing.linear,
  }),
  Animated.timing(this.state.animation , {
    toValue: 0,
    duration: 0,
  }),
]).start();

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
