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
export default class e2 extends React.Component {
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
                      }}>FURY ROAD V5</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                          The scintillating flagship event of the EC department is the Fury Road. The participants are required to build an RC (remote controlled) car on their own. The car will be tested against other team’s cars until the last one standing is worthy of being the winner. This event tests the team's RC car on design, speed, durability, power and additional features.
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
                           Registration Fee: 300 INR per team
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-6000/-INR ; 2nd-3000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14/09/2019 & 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: Day1: 11AM ; Day2: 8:30AM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: ECE Dept. corridor (Day 1), ECE Dept. Seminar Hall (Day  2), New building.
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
                      1. Gameplay:-
                         </Text>
                                                <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      ●	The gameplay consists of 3 rounds, with first round being an ‘elimination round’ on day 1, followed by a 1v1 ‘knockout round’ and the finale ‘death race’ on day 2.
                         </Text>
                                                <Text style={{paddingBottom: 20,
/                        fontSize: 15,
                      }}>
                      ●	Detailed rules regarding the event will be disclosed two days before the event.
                         </Text>
                         <Text style={{paddingBottom: 20,
                         fontSize: 15,
                       }}>
                       2. TEAM SPECIFICATIONS
                          </Text>
                          <Text style={{paddingBottom: 20,
                          fontSize: 15,
                        }}>
                        ●	A team may consist of a maximum of 4 MEMBERS.
                           </Text>
                           <Text style={{paddingBottom: 20,
                           fontSize: 15,
                         }}>
                         ●	Cross-college teams ARE allowed.
                            </Text>
                            <Text style={{paddingBottom: 20,
                            fontSize: 15,
                          }}>
                          ●	Only participants with a valid college ID card are allowed to participate.
                             </Text>
                             <Text style={{paddingBottom: 20,
                             fontSize: 15,
                           }}>
                           3. ROBOT (RC CAR) SPECIFICATIONS
                              </Text>
                              <Text style={{paddingBottom: 20,
                              fontSize: 15,
                            }}>
                            ●	The maximum dimensions of the RC Car MUST be within 17cm (width) x 20cm (length) x 25cm (height).A maximum of 3 cm variation in width is allowed.
                               </Text>
                               <Text style={{paddingBottom: 20,
                               fontSize: 15,
                             }}>
                             ●	The RC Car MUST be 4 wheel driven.
                                </Text>
                                <Text style={{paddingBottom: 20,
                                fontSize: 15,
                              }}>
                              ●	Robot MUST be controlled manually via wireless communication (E.g.: Bluetooth, Radio) by only a SINGLE member of the team for a given run.
                                 </Text>
                                 <Text style={{paddingBottom: 20,
                                 fontSize: 15,
                               }}>
                               ●	The robot MUST be electrically powered and power supply must be on-board.
                                  </Text>
                                  <Text style={{paddingBottom: 20,
                                  fontSize: 15,
                                }}>
                                ●	On-Board sensors are NOT allowed.
                                   </Text>
                                   <Text style={{paddingBottom: 20,
                                   fontSize: 15,
                                 }}>
                                 ●	A robot must not expand in size once a run begins, must not physically separate into pieces, and must remain a single centralized robot.
                                    </Text>
                                    <Text style={{paddingBottom: 20,
                                    fontSize: 15,
                                  }}>
                                  ●	The teams MUST carry all the required components and the necessary accessories (such as extra batteries, soldering irons). Only AC power sockets will be provided.
                                     </Text>
                                     <Text style={{paddingBottom: 20,
                                     fontSize: 15,
                                   }}>
                                   ●	Any robot found damaging the arena would be penalized or disqualified from the event.
                                      </Text>
                                      <Text style={{paddingBottom: 20,
                                      fontSize: 15,
                                    }}>
                                    ●	Ready-made bots are not allowed to compete in the competition.
                                       </Text>
                                       <Text style={{paddingBottom: 20,
                                       fontSize: 15,
                                     }}>
                                     ●	Any slight changes in the rules will be informed to participants before therounds.
                                        </Text>
                                        <Text style={{paddingBottom: 20,
                                        fontSize: 15,
                                      }}>
                                      ●	In case of any disputes, the reviewer’s/judge’s decision will be final.
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
                              1. Akash Jawahar S - 8123329629
                        </Text>

                        <Text style={{fontSize: 15,
                          }}>
                              2. Varun Kumar T P - 8310726474
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              3. Yashas H S – 7899046512
                        </Text>


                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
