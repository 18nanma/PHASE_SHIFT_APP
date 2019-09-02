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
export default class i3 extends React.Component {
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
                      }}>SHIPWRECKED </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                      ROUND 1: Players are made to be seated in small boats on grids on the floor.
Both the teams are separated by a ridge in the wall, i.e. the targeting grid.
Both the grids are marked with coordinates and the teams are given two varieties of balls, one signifying a tangible source of renewable energy and the other signifying a tangible source of non-renewable energy which they have to aim on the targeting grid.
First team to destroy both its opponent’s boats, wins.
Top 8 teams on the leader-board will qualify for round 2.
ROUND 2: Based on the IEM concept of string diagram.
The objective of the event is to design a power-ship where thermal energy is converted to electrical energy and distributed to electrical power stations of different countries.
The entire venue will be transformed representing a layout of a power-ship.
A predetermined layout of the plant is shown to the participants.
The team is required to fabricate a string diagram to show the path they are going to design and predict the time taken and energy saved and the new layout of the plant is designed and created.
The winner is based on who is closest to the given time and energy saved.

                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation:Team of 4
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee:: 200 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st - 1500 INR ; 2nd - 1000 INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time:11AM - 5PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue:Taylor hall, IEM Dept, Mech block
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
                 1. Players aren't allowed to move once they position themselves
                         </Text>
                   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                2. After the faceoff, 8 teams that last will qualify to round 2.
                         </Text>

                      <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                     3. They compete to achieve the closest time possible to the given time and also closest energy saving as compared to given energy saving
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
                        1. Khushi Soni - 9738306774
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                        2. Kritti Vassan- 8971769588
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
