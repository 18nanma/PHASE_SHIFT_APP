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
export default class i1 extends React.Component {
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


                      }}>TECH JUNK</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>

                        Think you can make something from nothing? Empower innovation with your creative side with this event. The first round would be an exercise to test your general knowledge on how basic components on circuit boards work. The number of correct answers here will give your team virtual money which will be used in the second round to buy electrical components.
Round 2:- The participants would have to buy components with the virtual money they have made in round one, the participants will then have to use these viable components and make a functional circuit out of these components, the team with the best functioning circuit wins

                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,

                        }}>

                           Participation:Team of 3
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>

                           Registration Fee:150 INR
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Prize money:1st - Internship by UTO; 2nd - 750 INR
                        </Text>
                        <Text style={{fontSize: 15,

                          }}>
                         Date:14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,

                          }}>
                           Time:12:15 PM - 5:00PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue:EE6003 and EE6002, PG Block
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
                        color: 'rgba(255,255,255,1)',
                      }}>

                   1. No internet access in the first round
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                  2. Participants will be given 5 minutes to present their models
                         </Text>
                    <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                 3. Laptops have to be brought by the participants
                         </Text>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                   4. Each team will be provided with a list of components and their respective costs.
                         </Text>
                    <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                   5. Each team gets a total of 4.5 hours to discuss, buy components and come up with a working model.
                         </Text>
                  <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                    6. Judges decision is final
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

                        1.Rohan Thomas- 9483966208
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>

                         2.Shashank BN- 8073827758
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
