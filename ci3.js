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

export default class ci3 extends React.Component {
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
                      }}>PLAN P</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        Round1: You think only coders can debug? Should the medicos be that proud of debugging people? Come, let us prove them all wrong. Presenting Electrical Debugging, where the EEE geeks bring out their debugging powers.
Round 2: Tired of the 'P's around you - Plastic, Pollution and People. It's time to turn all of it into a viable source of energy. Coz why not? One day you might use plastic to power your car or just dance to heat a building. So here is your chance to present and explain the idea of how, why, when, where the source will work and market it as well as sell it to the judges panel.
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
                           Prize money:1st-1500/-INR ; 2nd-1000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date:15/09-2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 12:00 PM - 4:00 PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: Power electronics lab & EE6005
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
		 1. The first round consists of practical debugging of the circuits.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 2. Use of internet is not allowed in the first round. However, the internet can be used for a maximum of 45 minutes in the second round.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 3. Each team will have to bring their own laptops to prepare the presentation (if any) for the second round.
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
                              1.H M Deepika Jain - 9886224070
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.Shreya Arya - 7619120670
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
