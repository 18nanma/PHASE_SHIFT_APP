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

export default class f8 extends React.Component {
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
                      }}>MAZE RUNNER</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
Are you good at solving clues? Are your basics strong in the field of Environmental sciences? Then buckle up your seats as this event is handcrafted for you. Form teams and solve riddles, to get answers to the next question.                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 2
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 100 INR per team
                        </Text>
                        <Text style={{fontSize: 15,
                              }}>
                         Prize money:1st-1500/-INR; 2nd-1000/-INR
                      </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Date: 15/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 10 AM - 12 PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: BT Classroom-1 and CMB Lab(BT department)
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
                      }}>1. Round 1- Word scramble to be solved pertaining to the theme of Phase Shift
                         </Text>
                         <Text style={{paddingBottom: 20,
                         fontSize: 15,
                       }}>2. Round 2- A surprise wet lab experiment to be solved to qualify to the next round
                          </Text>
                          <Text style={{paddingBottom: 20,
                          fontSize: 15,
                        }}>3. Round 3- Picture clues to be solved based on the locations in and around College Round 4- Clues for them to reach the final destination.
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
                              1. Benak - 9742903871
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Dhanush - 9113500792
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
