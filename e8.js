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

export default class e8 extends React.Component {
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
                      }}>MECH-ASSEMBLE</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
Assemble the given components on the given topic using the junk available and other amenities.
                    </Text>
                   <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 4
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 200
                        </Text>
                        <Text style={{fontSize: 15,
                              }}>
                         Prize money:1st-4000/-INR; 2nd-2000/-INR
                      </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Date: 15/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 9:30 AM- 12:30PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue:Turbo LAB
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
                      }}>1. Pre-defined Kit will be provided
                         </Text>
                         <Text style={{paddingBottom: 20,
                         fontSize: 15,
                       }}>2. Lab facilities will be provided
                          </Text>
                          <Text style={{paddingBottom: 20,
                          fontSize: 15,
                        }}>3. A working model has to be assembled related to the theme.
                           </Text>
                           <Text style={{paddingBottom: 20,
                           fontSize: 15,
                         }}>4. Based on the condition provided, the assembled model will be judged.
                            </Text>
                            <Text style={{paddingBottom: 20,
                            fontSize: 15,
                          }}>5. The participant should assemble within the stipulated time frame.
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
                              1. Anikethan - 9620621673
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Rishikesh S Nadgouda - 9945142696
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
