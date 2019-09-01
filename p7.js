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

export default class p4 extends React.Component {
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
                      }}>DECISION DILEMMA</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                          This is a thinking-based decision-making and planning event. Participants will need to come up with a solution to a problem statement and present it.
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
                           Registration Fee: 100 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-1000/-INR ; 2nd-500/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 9.30AM to 1.30PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: CLASSROOM 3001
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
		 This is a single-day, single-round event.
                         </Text>
	        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 The problem statement will be given on the day of the event
                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Teammates need to discuss and make the best plan of action to fully solve the problem statement.
                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		The solution needs to be presented as a PPT, having a minimum of 8 slides.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Total time required for the event: 4 hours The problem statement will be explained in 15 minutes. 2 hours will be provided for discussing the problem, formulating an effective Solution and making the PPT One and a half hours will be allotted for presentation, judging and announcement of results.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		6. Each team will be given 15 minutes for their presentation.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Participants are required to bring their own laptops. The internet can be accessed during the event.
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
                              1.Meghana Shyam  sunder- 9113588112
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.Rakshita s kumtakar -8197894586
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>
                              3.Megan Carmel Aranha : 9743952705
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
