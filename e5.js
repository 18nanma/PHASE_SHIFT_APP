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
export default class e5 extends React.Component {
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
                      }}>CODER’S ARENA</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
Coder's Arena (Flagship event) is an event of the Computer Science Department which aims at testing the logical and mathematical ability of the contestants. Problems will be given to the contestants and they need to solve them using their programming knowledge. It is a one on one battle of code between two contestants who wins moves to the next round which is  one more step closer to become the ultimate champion.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Individual
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 150 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-2500/-INR ; 2nd-1500/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 12 PM - 4 PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: CSE Lab 5 & 6, New building.
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
1. It is a one on one coding contest and you need to beat your opponent to move to the next round.
                         </Text>
                      <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      2. It will consist of several rounds, where the winners progressively go on to the next rounds.
                         </Text>
                                                <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
3. The participants will write codes for solving problems whose statment will be related to energy conservation and efficient utilization. At most 5 rounds with 4 breaks of 10 minutes each. Each round of 30-35 minutes. Participants will be paired randomly and will battle with each other, each round will have 3 questions.
                         </Text>
                         <Text style={{paddingBottom: 20,
 fontSize: 15,
}}>
4. The platform of conducting the competition would be Hacker Rank.
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
                              1. Rohit Mehra - 9479588396
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Puneeth K - 9620835755
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
