import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class w3 extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
          <Image source={require('../assets/ww.jpeg')}
            style={{width:width,
            height:150}}/>
          </View>
            <View style={{paddingLeft:13,
                  paddingRight:13,
              }}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                  }}>
                      <Text style={{
                        fontSize: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(0,160,169,1)',
                        fontWeight: 'bold',
                        paddingTop:20,
                        paddingBottom:30,
                        paddingLeft: 7
                      }}>STABILIZED BLOCK</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                          This is an individual workshop in which students are taught the importance of soil and its usage by making stabilized blocks
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Individual
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 50 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Date: 14/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 11AM to 2PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: MV hall and passage beside SOM lab.
                        </Text>
                        </View>
                    </View>

                    <View style={{padding:10,
                    backgroundColor: '#00000000'}} />
                    <View style={{padding:7,
                          backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: 4,
                        paddingTop:10
                      }}>
                        <Text style={{
                          fontSize: 19,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingBottom:10,
                          fontWeight: 'bold',
                          }}>Event Coordinators:</Text>
                        <Text style={{fontSize: 15,
                          }}>
                              1.Byresh - 7892221867
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.Manish - 8277170765
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>

                        3.Khabeer - 9632910693
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
