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

export default class ci2 extends React.Component {
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
                      }}>THE DECRYPTOR   </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
This event is of treasure hunt, circuit building and debugging competition
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
                           Registration Fee: 200 INR
                        </Text>
                        <Text style={{fontSize: 15,
                              }}>
                         Prize Money: 1st – 1500/- & 2nd – 1000/-
                      </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Date: 15/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 10:00  AM - 4:00 PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: C303+Digital Electronics Lab
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
                      1. This event will have three rounds.
                        </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      2. The first round will consist of answering 10 questions related to energy and sustainability and decrypting the final one word answer from them.
                         </Text>
                         <Text style={{paddingBottom: 20,
                         fontSize: 15,
                       }}>
                       3. 10 teams will be shortlisted for the next round.
                         </Text>
                          <Text style={{paddingBottom: 20,
                         fontSize: 15,
                       }}>4. The circuits for each team that has qualified from the previous round is decided here.
                          </Text>
                          <Text style={{paddingBottom: 20,
                          fontSize: 15,
                        }}>5. 2nd round is treasure hunt round where clues will lead to places around the campus. Each destination will give the participants one component based on their circuit.
                          </Text>
                           <Text style={{paddingBottom: 20,
                          fontSize: 15,
                        }}>6. The last clue will lead to a place on campus and the teams which arrive have to start constructing their circuit.
                            </Text>
                            <Text style={{paddingBottom: 20,
                           fontSize: 15,
                         }}>7. 3rd round is circuit jumbling. The components in the circuit are replaced/put in another orientation. The team has to debug the circuit from memory.
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
                              1.Mahalaxmi - 9482487135
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.JagritDuseja - 9990826222
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                          3. Sethastha Pathre P Kumar - 9880553463
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
