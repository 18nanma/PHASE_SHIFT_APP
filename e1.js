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
export default class e1 extends React.Component {
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
                      }}>SACRED GAMES</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        A team of two  will have to complete a set of tasks in the shortest time possible.
                        </Text>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        1. The participants will be provided with binary codes of renewable sources of energy. Using renewable sources of energy that they successfully decode the participants will have to build a sustainable city backed up with reasoning for each one of the sources.
                        </Text>

                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        2. The participants will work as a team wherein a solar powered toy car has to be guided through the maze. But that's not all! The catch is that the member operating the car through the maze is blindfolded and will follow the instructions given by his/her teammate.
                        </Text>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        3. This task consists of energy jumbles placed in containers that needs to be unscrambled once the ball has been aimed correctly using the catapult in a specific sequence.
                        </Text>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        4. The participants have to develop a working model of a sustainable source of energy using a set of parts provided to them within a specific amount of time.
                        </Text>

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
                           Prize money:1st-2000/-INR ; 2nd-1000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date:  14/09/2019 & 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: Day1: 11AM - 5PM ; Day2: 10AM-4PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: Classroom 2, IEM Department, Mech Block
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
                      1. Mobile phones or any other gadget is strictly prohibited throughout the game.
                         </Text>
                                                <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      2. During the maze task, the blindfold cannot be opened at any cost. Removing the blindfold will lead to immediate disqualification.
                         </Text>
                                                <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      3. If the team fails to complete the round within the stipulated time, the round will be stopped and team will be scored accordingly.
                         </Text>
                         <Text style={{paddingBottom: 20,
                         fontSize: 15,
                       }}>
                       4. Judging is done based on the cumulative score at the end of the relay.
                          </Text>
                          <Text style={{paddingBottom: 20,
                          fontSize: 15,
                        }}>
                        5. The team with the highest cumulative score will be considered as the winner
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
                              1. Vindhya Kashyap - 9008184966
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Sheetal Agrawal – 7022414223
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
