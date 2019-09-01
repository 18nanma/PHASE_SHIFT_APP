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

export default class p9 extends React.Component {
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
                      }}>SUSTAINABLE ORATORY</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                         Picking the topics given and orating your skills for the time given in the most creative manner
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
                               Registration Fee: 120 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-2000/-INR ; 2nd-750/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 1.00AM to 4.00PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: ML1 MECH BLOCK 2ND FLOOR
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
		 There will be two bowls full of chits with some innovative topics. The contestants should pick one chit from each bowl, club the topics and speak out for the time given.
                         </Text>
	        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 Can't exceed the time limit.
                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Bowl 1: Sources of Energy
Bowl 2: Application of Energy

                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		Use appropriate technical words.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		The judge's decision is final.
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
                              1.Gourav Goyal - 9119329262
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.R ChandanShashank - 807315877
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
