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
export default class g3 extends React.Component {
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

                      }}>GRIDLOCKED</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>

                         Fed up of being Gridlocked in Bangalore traffic? Well, can’t help you with that, but we can definitely help you get out of this mathematical Gridlock. PENTAGRAM, the Mathematical Society of BMSCE, brings you a fun cocktail of puzzles and riddles that will test your skills and a little more.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,

                        }}>

                           Participation:Team of 2
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>

                           Registration Fee: 100 INR
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Prize money:1st - 1500 INR ; 2nd - 1000 INR
                        </Text>
                        <Text style={{fontSize: 15,

                          }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                               }}>
                           Time: 2PM - 5PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue:CR 306 and CR 307
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

                    1. There will be 2 rounds.
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>

                  2. Round 1: A fun cocktail of brain twisters, puzzles and riddles that test logical and analytical skills. This round will be an eliminator round.
                         </Text>
                    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>

                  3. Round 2: Rules will be explained during the game.
                         </Text>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>

               4. In case of conflict, the decision of the coordinator will be final.
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

                        1. SowmyaHegde - 9449824854
                        </Text>
                        <Text style={{fontSize: 15,
                        }}>

                           2. K V Niranjan Gupta- 9743634919
                        </Text>
                         <Text style={{fontSize: 15,
                        }}>

                       3. Swathi G Bhat- 9916393283

                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
