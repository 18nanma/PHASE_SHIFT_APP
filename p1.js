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

export default class P1 extends React.Component {
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
                      }}>PSYCHIC'S SURVIVAL</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        color: 'rgba(255,255,255,1)',
                        }}>
                          Do u think your PSYCHIC skills are great? Come unlock the psychic in you to solve some outrageous real world problems in energy and sustainability.
                        </Text>
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
                           Prize money:1st-1000/-INR ; 2nd-700/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                          }}>
                           Time: 12.30AM to 3.30PM
                        </Text>
                          <Text style={{fontSize: 15,
                        }}>
                           Venue: EE6005 PG BLOCK 6TH FLOOR
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
		 Participants will be made to play a game called �PSYCH� in the eliminator round followed by poster presentation in the next rounds for the given problem statement regarding energy and sustainability.
                         </Text>
	        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 Top 10 teams of 1st round qualifies to second round in which top 5 teams get to present their ideas in the last round. Internet usage in the 1st round is not allowed. Solution write up should be in specified format only. Coordinators and judges� decision is final
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
                              1.Yogesh P Rao - 7204908550
                        </Text>
                        <Text style={{fontSize: 15,
                        }}>
                              2.Varsha M- 8951323197
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
