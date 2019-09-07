import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
export default class e3 extends React.Component {
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
                      }}>SMART ROOMS WITH ALEXA</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        The workshop involves hands on training imparted by resource persons from Modelicon Infotech LLP. . The hands on session will cover the hardware aspects like controller, different sensors and actuators used in turning an existing ordinary room to a smart room.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 3
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 150/- per team
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money: 1st-internship  ; 2nd-1000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14th and 15th September 2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: Day1 - 1PM-4.30PM; Day2 - 9PM - 5PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue:  Day1 - MBA classroom 1;  Day2 - Computer lab (EIE department), PG block.
                        </Text>
                        </View>
                    </View>
                    <View style={{padding:7,
                          backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: 4,
                      }} >
                    <View>

                        <Text style={{
                          fontSize: 19,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingBottom:10,
                          fontWeight: 'bold',
                          }}>Rules of the event:</Text>
                    </View>
                    <View>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      No prerequisites are expected from participants. The session will be conducted covering basics of both programming the hardware, Alexa and hardware integration. The event scheduled shall witness which the participating teams compete amongst themselves, to build an application using Alexa.
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
                              1. Pranav M - 8147215299
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Priyanka - 9611252622
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
