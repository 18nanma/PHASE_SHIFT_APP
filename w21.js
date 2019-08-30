import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions} from 'react-native';
  const { width, height } = Dimensions.get('window');

export default class w21 extends React.Component {
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
                      }}>WORKSHOP ON HARVEST OF SOLAR POWER </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
It's a workshop cum event, where u will learn to build a simulation model to convert solar power to battery power i.e., a constant electric source. Followed by an event where participants are supposed to design and build a simulation model. Model with highest efficiency is considered as winner
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
                           Registration Fee: 200 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize Money: 1500 INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 10AM - 5PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: C301 + MC Lab, ECE
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
                      }}>First half of workshop:
                      </Text>
                      <Text style={{paddingBottom: 20,
                      fontSize: 15,
                    }}>
Here participants will be taught to convert solar energy to electric energy. Participants can build their own conversion circuit using simulation tools.
                         </Text>
                         <Text style={{paddingBottom: 20,
                         fontSize: 15,
                        }}>Second half of workshop:
                       </Text>
                       <Text style={{paddingBottom: 20,
                       fontSize: 15,
                      }}>Participants will be asked to design a conversion circuit with specifications given on spot,that circuit with highest efficiency, will be considered as the winner.
                          </Text>
                          <Text style={{paddingBottom: 20,
                          fontSize: 15,
                          }}>Note: Participants are supposed to carry their own laptop.
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
                              1.Chethan B Mali : 9008112535
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.K S Eshwar Subramanya Prasad: 9739803885
                        </Text>


                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
