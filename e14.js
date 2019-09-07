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

export default class e14 extends React.Component {
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
                      }}>CANSAT- SATELLITE IN A CAN</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        A CanSat is a simulation of a real satellite, integrated within the volume and shape of a soft drink
can. The challenge for students is to fit all the major subsystems found in a satellite, such as power,
sensors and a communication system, into this minimal volume.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 3-5
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 150 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money: 1st- 4000 INR; 2nd - 2500 INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 10.00AM - 2.00PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: Old Library lawn & 4001, PG block
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
		1. The aim of the event is to build a Cansat that will consist of shape of soft drink can and payload.
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 2. The team should also have other basic components like battery, communication module, antenna,etc integrated with the payload in the cylindrical shell.
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
3. The Cansat will raise to approximate height 8-10 meters with the help of a Drone controlled by the organizers.
                    </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
4. The payload consisting of sensors, should monitor ambient temperature ,attitude and pressure .
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
5. The CanSat while hovering from the Drone should transmit the real time data from the payload to the ground receiving Unit.
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
6. Teams will be judged on receiving correct data to the ground station from the specified height.An Informative session will be conducted to let you know all the requirements and how to go about the event.
For Complete Rule book ->
https://bit.ly/2L8CBKl
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
                              1.Divyam Salarpuria - 9540066305
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.Priyanshu � 9739716351
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>
                              3.Sushir - 9964285755
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
