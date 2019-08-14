import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import CountDown from 'react-native-countdown-component';

export default class PowerUp extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./assets/screen1.png')}
      style={{
        width: '100%',
        flex:1,
        height: '100%',
        resizeMode: 'cover',
        }}>
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">

          <View>
          <TouchableRipple
                  onPress={() => console.log('Pressed')}
                  rippleColor="rgba(255,255,255, 0.9)">
            <Text style={{color:'#00000000'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut. Non nisi est sit amet. Elementum integer enim neque volutpat ac. Pharetra massa massa ultricies mi quis hendrerit dolor. Consequat id porta nibh venenatis cras sed felis eget. Imperdiet massa tincidunt nunc pulvinar. Accumsan lacus vel facilisis volutpat est velit egestas dui. Cras adipiscing enim eu turpis egestas pretium aenean. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Morbi tincidunt augue interdum velit euismod in. Nisl vel pretium lectus quam id leo in vitae. Volutpat blandit aliquam etiam erat velit scelerisque in. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
                Ornare arcu odio ut sem nulla pharetra diam sit amet. Dictum non consectetur a erat nam at lectus. In arcu cursus euismod quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Non arcu risus quis varius quam quisque. Sed velit dignissim sodales ut eu sem integer vitae. Urna porttitor rhoncus dolor purus non. Dui accumsan sit amet nulla facilisi. Viverra orci sagittis eu volutpat. Eget velit aliquet sagittis id consectetur purus. Vitae aliquet nec ullamcorper sit amet risus. Lobortis scelerisque fermentum dui faucibus in ornare.
                Nisl nunc mi ipsum fau. Eu lobortis elementum nibh tellus molestie nunc. Dignissim diam quis enim lobortis scelerisque fermentum. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.
                sem nulla pharetra diam sit amet. Dictum non consectetur a erat nam at lectus. In arcu cursus euismod quis. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Non arcu risus quis varius quam quisque. Sed velit dignissim sodales ut eu sem integer vitae. Urna porttitor rhoncus dolor purus non. Dui accumsan sit amet nulla facilisi. Viverra orci sagittis eu volutpat. Eget velit aliquet sagittis id consectetur purus. Vitae aliquet nec ullamcorper sit amet risus. Lobortis scelerisque fermentum dui faucibus in ornare.
                Nisl nunc mi ipsum fau. Eu lobor
              </Text>
          </TouchableRipple>
        </View>
        <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    flex:1,
                    paddingBottom: 15,
                    paddingTop:70
                }}>
                  <CountDown
                    until={60*11+60*45+10}
                    onFinish={()=> alert('finish')}
                    digitStyle={{backgroundColor:'transparent'}}
                    digitTxtStyle={{color:'rgba(212,175,55,0.8)', paddingBottom:0}}
                    timeLabelStyle={{color:'rgba(212,175,55,0.8)', fontSize: 16}}
                    size={30}/>
              </View>

        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: 'rgba(255,255,255,0.6)'}}>
          <TouchableOpacity>
            <Image source={require('./assets/button_cta_2019-08-07/button_cta.png')} style={{justifyContent: 'center', alignItems: 'center'}}/>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
      </Fragment>


    );
  }
}
