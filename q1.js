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

export default class q1 extends React.Component {
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
                      }}>ECO QUEST</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                         When humans deprived machines of solar energy, the machines responded by harvesting the humans' bioelectric power, keeping them pacified in the Matrix, a shared simulated reality modeled after the world as it was at the end of the 20th century. You and your team have to help The One in this battle by solving various puzzles riddles which will provide clean and renewable energy and end the battle, thus creating a peaceful and healthy planet.
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
                           Registration Fee: 150 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-1500/-INR ; 2nd-1000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 10.00AM to 12.00PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: 402 New Building
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
		 The teams have a time of 60 minutes to complete the tasks and solve the puzzles given to them
                         </Text>
	        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 All team members need to stay with their team at all times.
                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		No forcing people for items or photographs.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Teams must be courteous and respectful to their teammates and all the outside people involved in the scavenger hunt.
                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Items that were collected will need to be disposed of smartly or returned (if borrowed) after the scavenger hunt.
                         </Text>
	       <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		All challenges must be completed and pictures/videotaping scenes MUST be taken only during the duration of this specific scavenger hunt (challenges completed or photos/videotaping scenarios taken outside this time frame will be disqualified).
                         </Text>
	      <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		All teams must return to the initial briefing point regardless of whether they completed the scavenger hunt
                         </Text>
	      <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		If anyone on your team cheats or break any laws or breaks the scavenger hunt rules, the whole team gets disqualified.
                         </Text>
	     <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Judges determinations after the scavenger hunt are final.
                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Be kind and have fun
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
                              1.Tanvir - 8762246433
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.ArunTeja - 9381091844
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>
                              3.Nikhil C - 7795453566
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
