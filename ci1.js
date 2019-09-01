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

export default class ci1 extends React.Component {
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
                      }}>CIRCUIT SCULPTURE -THE BATTLE OF BIDDING  </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
This event indulges you in a series of mind bending challenges along with modelling designs relevant to electronic systems. The participants have to deploy their bidding skills to catch hold of the right components to design their models,                        </Text>
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
                           Registration Fee: 150 INR
                        </Text>
                        <Text style={{fontSize: 15,
                              }}>
                         Prize Money: 1st – 1200/- & 2nd – 800/-
                      </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Date: 14/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 1PM - 5.00PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: C303+Analog Electronics Lab
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

1. Round 1: This round has some interesting challenges. A series of some mind boggling puzzles will be given to the participants. Using the points earned in this round the participants get to bid for the components in the next round.                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

2. Round 2: One energy system will be decided prior to the event. Auction will be on the electronic components required to build the different sub modules of that energy system. Sub modules will be assigned to each teams through a small game. Then participants have to buy the components required to complete model assigned to them. So this round tests the basic knowledge of electronics in energy systems.
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
                              1.Sai Lahari S - 8105968149
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.Ranjith D - 7892099655
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                          3. Yuktha C - 7892054123
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
