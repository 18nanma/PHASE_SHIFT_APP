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

export default class e9 extends React.Component {
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
                      }}>TREASURE ODYSSEY </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
A treasure hunt with intriguing and thought provoking clues with a seasoning of sustainable energy. First round will be an appraisal for awareness and understanding of sustainable energy and its uses. The second and ultimate round is a treasure hunt with a series of seven clues leading to the glory. The first team to solve these luring clues takes home the reward.     </Text>
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
                         Prize money: 1st- 1500/-INR; 2nd- 800/-INR
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
                           Venue: CR 3002 and CA 1,  PG block
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
                      }}>1. First round has participants given a question related to real life problems and having to find a solution to the given topic. Further the participants have to come up with an innovative solution that can be implemented in real life. A jury of three members will evaluate the answers and the top 8 teams with the best answers will move on to the next round.
                         </Text>
                         <Text style={{paddingBottom: 20,
                         fontSize: 15,
                       }}>2. Second Round has the top 4 teams given a head start over the other teams in which the participants are given a clue which leads to a further clue and which subsequently leads to the final treasure. The teams that finds the treasure first wins.
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
                              1. N Shyam Sundaram - 9483215916
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Kumar Ayush – 8840199829
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              3. Abhishek Bhat : 9620188723
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
