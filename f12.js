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

export default class f12 extends React.Component {
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
                      }}>MAKE-A-THON</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                         There's a few that possess the mettle and maven for a race against time. Engage on a 36 hour journey to innovate, design and discover.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 2-3
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 200 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-Internship with ElectronoSolutions
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14/09/2019 & 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 12PM on 14th to 12 PM on 15th
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: Measurements lab
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
		 It will be a 24 hour event that will happen in both days of Phase Shift.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Problem statement will be given to the participants by the industry.
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 Participants have to submit the solution 2 days prior to the Phase Shift. It will be evaluated and the best ones will be selected.
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 The 6 selected teams will get a chance to implement their solution during the 24 hrs.
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 The winners will  get a chance to intern with ELECTRONO SOLUTIONS.
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 All participants will get e-certificates
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 The winners and the runner-ups will get printed certificates with company logos
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 Number of people in one team: 2 to 3
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
                              1.Anusha- 7259491307
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.K D Pathak- 8141483231
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
