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
export default class i4 extends React.Component {
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
                      }}>MINDCRAFT</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        Build smart models out of the limited "common supplies" that are provided.
        Creativity and Efficiency are Paramount! Split in two rounds, teams are required to think out of the
        box and come up with strong, efficient models to accomplish the given task!
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 2, 3 or 4
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration fee: 150/-INR per team(IEEE Members); 200/- INR per team (non-IEEE Members)
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money: 1st-1500/- INR; 2nd-900/- INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 10AM to 1PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: EE6006 PG block 6th floor
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
                      1. No use of Internet is allowed for any of the rounds.
                         </Text>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      2. Judgement will be on the basis of efficiency  and design.
                         </Text>
                   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      3.The decision of the event coordinator is final.
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
                       1.Piyush- 9113846705
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                         2.Diksha- 9901444201
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
