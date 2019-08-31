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
export default class g4 extends React.Component {
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

                      }}>FARRAGO</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>

                        Craving for fun with a touch of tech, then this is exactly the event you are looking for... engage yourself in 3 fun rounds of taboo, Quescussion and a Life sized board game where you end up rigging a circuit. Let's see if you can breakthrough!
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,

                        }}>

                           Participation: Team of 3
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>

                           Registration Fee:150 INR
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Prize money:: 1st - 1000 INR ; 2nd - 500 INR
                        </Text>
                        <Text style={{fontSize: 15,

                          }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,

                          }}>
                           Time: 2:30PM-4:30 PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue:ML 6002, New building
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

                    1. Round 1: Taboo! – Is a word guessing game, where a player (giver) should have their team guess the words on the player's card one by one in the allotted time.
Rules: The giver should not use the word itself or five additional words listed on the card. The team may make as many guesses as they want with no penalties for wrong guesses. The teams with the highest score moves ahead to next round

                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>

                 2. Round 2: Quescussion- Here qualifying teams from previous rounds are given a trigger(topic /Problem Statement) is provided for the students to discuss about, only through questions i.e. any type of statements are forbidden.
Rules: One member from each team takes part. Any member using a statement gets disqualified and is replaced by another member of the team. The last few remaining teams are selected for final round.

                         </Text>
                    <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

 Round 3: Roll it. Solve it. Win it.
It’s a life-size boardgame,with 2members starting off the game, pawn (one member)’s action is decided by their ability to solve the puzzles and riddles. As the game proceeds the difficulty level increases.  As they solve the riddles they’ll gain the components required to complete the final circuit.
                         </Text>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
               4. The circuit will be based on alternative energy sources.
                         </Text>
                      <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

               5. Students must follow the given time limit
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

                         1.Neha Sreedharala- 9742677599
                        </Text>
                        <Text style={{fontSize: 15,
                        }}>

                         2.Anusha Sonar- 88925581121
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
