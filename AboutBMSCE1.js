
//the summary part will be replaced by an image which ill forward in gmail when the designer sends it

import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';


export default class AboutBMSCE extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./assets/BACKG2.png')}
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
                paddingTop:10
              }}>
                <Image source={require('./assets/ps_logo_white_2019-07-31/ps_logo_white.png')} />
              </View>

              <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }} >


                <View style={{
                    paddingBottom:45
                }}>
                <TouchableRipple
                  onPress={() => console.log('Pressed')}
                  rippleColor="rgba(255,255,255, 0.8)"
                >
                     <Text style={{
                       height: 30,
                       wigth:25,
                       color: 'rgba(34, 189, 239, 0.99)',
                       fontStyle: 'Monsterrat',
                       fontSize: 25
                     }}>
                          About BMSCE
                     </Text>
                     </TouchableRipple>

                </View>

                <View style={{
                    padding:28,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <TouchableRipple
                  onPress={() => console.log('Pressed')}
                  rippleColor="rgba(255,255,255, 0.8)"
                >
                    <Text style={{
                    letterSpacing:0.16,
                    textAlign:'justify',
                    fontStyle: 'Poppins-ExtraLight',
                    paddingLeft: 9,
                    fontSize: 18,
                    color: '#fff',
                    lineHeight: 28
                    }}>
                       B.M.S. College of Engineering, Bengaluru was founded in the year 1946
                       by Late Sri B.M. Sreenivasaiah, a great visionary and philanthropist and
                       later nurtured by his illustrious son Late Sri B.S. Narayan. BMSCE is the
                       first private sector initiative from the erstwhile state of Mysore towards
                       engineering education in India. Started with only three undergraduate and
                       15 postgraduate programmes both in conventional and emerging areas.
                       Fifteen of its departments are recognised as Research Centres offering
                       Ph.D. degree in Science, Engineering and Management. Modernization,
                       expansion and sophistication have not changed the basic philosophy of
                       education at BMSCE,
                       which continually stay put with the real and ever changing technologies.

                        </Text>
                        </TouchableRipple>

                    </View>
               </View>
               <TouchableRipple
                 onPress={() => console.log('Pressed')}
                 rippleColor="rgba(255,255,255, 0.8)"
               >
               <Text style={{color:'#00000000', paddingTop:-100}}>
                  lalalalalalalalalalananmalalalalala
                  lalalalalalalalalalananmalalalalala
                  lalalalalalalalalalananmalalalalala
                  lalalalalalalalalalananmalalalalala
                  lalalalalalalalalalananmalalalalala
               </Text>
               </TouchableRipple>


        </ScrollView>
        </SafeAreaView>
        </ImageBackground>

      </Fragment>


    );
  }
}





import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';


export default class App extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./assets/BACKG2.png')}
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
                paddingTop:10
              }}>
                <Image source={require('./assets/ps_logo_white_2019-07-31/ps_logo_white.png')} />
              </View>

              <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }} >


                <View style={{
                    paddingBottom:45
                }}>
                <TouchableRipple
                  onPress={() => console.log('Pressed')}
                  rippleColor="rgba(255,255,255, 0.8)"
                >
                     <Text style={{
                       height: 30,
                       wigth:25,
                       color: 'rgba(34, 189, 239, 0.99)',
                       fontStyle: 'Monsterrat',
                       fontSize: 25
                     }}>
                          About BMSCE
                     </Text>
                     </TouchableRipple>

                </View>

                <View style={{
                    padding:28,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <TouchableRipple
                  onPress={() => console.log('Pressed')}
                  rippleColor="rgba(255,255,255, 0.8)"
                >

                              <View style={{
                                padding:10,
                                paddingTop:10,
                                resizeMode: 'contain',

                              }}>
                                <Image source={require('./assets/About_BMS.png')} />
                              </View>

                        </TouchableRipple>

                    </View>
               </View>
               <TouchableRipple
                 onPress={() => console.log('Pressed')}
                 rippleColor="rgba(255,255,255, 0.8)"
               >
               <Text style={{color:'#00000000', paddingTop:-100}}>
                  lalalalalalalalalalananmalalalalala
                  lalalalalalalalalalananmalalalalala
                  lalalalalalalalalalananmalalalalala
                  lalalalalalalalalalananmalalalalala
                  lalalalalalalalalalananmalalalalala
               </Text>
               </TouchableRipple>


        </ScrollView>
        </SafeAreaView>
        </ImageBackground>

      </Fragment>


    );
  }
}
