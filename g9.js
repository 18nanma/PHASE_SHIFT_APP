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


export default class g9 extends React.Component {
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


                      }}>POTPOURRI</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>

                        Stand the test of time, in this multi-level game of heads up and taboo.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                        }}>

                           Participation:: team of  2- 3
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>

                           Registration Fee:150 INR
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Prize money:1000 INR: 750 INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date:15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                          }}>
                           Time:2 PM-4 PM
                        </Text>
                          <Text style={{fontSize: 15,
                        }}>
                           Venue:RK Hall, PG block, 1st floor
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

                    1. Round 1: preliminary elimination round consisting of word games to be solved within 10 minutes by each team. Depending on the number of teams, the lowest score bearing teams are eliminated
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>

                  2. Round 2: The teams go in order, where a player from a team picks a card with the key word. The player has to prompt his teammates to guess the word without using any of the taboo words listed on the card.
                         </Text>
                    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>

                 3. Round 3: A life sized board game, where teams roll a dice, and have to answer a question or a riddle. First team to the end wins.
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

                        1. Namratha Pradeep - 9845400542
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>

                           2. Surya - 7594094668
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
