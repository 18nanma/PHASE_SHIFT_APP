import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  Animated
} from 'react-native';

export default class App extends React.Component {

  state={
    animated:new Animated.Value(0),
    opacityA: new Animated.Value(1),
    animated2:new Animated.Value(0),
    opacityA2: new Animated.Value(1),
  }
  componentDidMount(){
    const{animated, opacityA,animated2,opacityA2}= this.state;


    Animated.stagger(1000,[
      Animated.loop(
        Animated.parallel([
           Animated.timing(animated,{
                  toValue:3,
                  duration:3000,
              }),
            Animated.timing(opacityA,{
              toValue:0,
              duration:3000,
            })
            ])
      ),
      Animated.loop(
        Animated.parallel([
           Animated.timing(animated2,{
                  toValue:3,
                  duration:3000,
              }),
            Animated.timing(opacityA2,{
              toValue:0,
              duration:3000,
            })
            ])
      )

    ]).start()
  }
  render() {
    const {animated,opacityA,animated2,opacityA2}= this.state;
    return (
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
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
          <Animated.View style={{width:100, justifyContent: 'center', alignItems: 'center',height:100, borderRadius:50,
            backgroundColor: 'rgba(0,0,255,0.4)',
            opacity: opacityA,
            transform:[
              {
                scale:animated
              }
            ]

          }}>
          <Animated.View style={{width:100, justifyContent: 'center', alignItems: 'center',height:100, borderRadius:50,
            backgroundColor: 'rgba(192,192,192,0.7)',
            opacity: opacityA2,
            transform:[
              {
                scale:animated2
              }
            ]

          }}>

          </Animated.View>

          </Animated.View>
          <Text style={{
            height: 55,
            wigth:55,
            color: 'white',
            fontStyle: 'Monsterrat',
            fontSize: 40
          }}>
               Schedules
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop:30}}>
        <View style={{paddingTop: 10,justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0,0,139, 0.1)', borderRadius:15, width:260}}>
        <Image source={require('./assets/Info.gif')}
        style={{width:250, height:200,justifyContent: 'center',alignItems: 'center'}}/>
        </View>
        </View>



        </ScrollView>
        </SafeAreaView>
        </ImageBackground>

      </Fragment>


    );
  }
}
