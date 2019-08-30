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

export default class i9 extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <View>
      <Image source={require('../assets/ww.jpeg')}
        style={{width:width,
        height:150}}/>
      </View>
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
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
                      }}>FAST & FURIOUS</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                         Participants are expected to build the robot on their own. Ready-made robots are strictly not allowed. The models will be evaluated based on different criteria.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: team of 4
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 500 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-12000/-INR ; 2nd-8000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 11AM-4PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: 1st floor PG block (open space)
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
                      1. Only controller (E.g. Arduino), communication module, motors and battery can be bought. Rest of the robot, including wheels, chassis etc. must be made by recycling junk, and cannot be store bought.
                      </Text>
                                               <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                       2. If at any point of time, participants are found using store bought items, they will be disqualified. All necessary components and equipment must be brought by respective teams. Only AC power supply will be provided.
                      </Text>
                                              <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      3. Use of thermocol is strictly prohibited.
                      </Text>

                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                       4. Robot must be controlled manually via wireless communication (E.g.: Bluetooth, Radio) by only one member of the team for a given run.
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
                             1. Akhil Aithal - 9986866706
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Vineet - 9731311557
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>
                             3. Rakshitha - 9113052792
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
