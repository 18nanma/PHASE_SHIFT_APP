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

export default class p14 extends React.Component {
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
                      }}>SUSTAIN YOUR ECOSYSTEM</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                         A sustainable future stands on a smarter present! So get thinking, start working on creating an ecosystem that sustains all possible extremities. Teams will be given an environment that they have to create and make sustainable. Energy efficiency will be something our judges will be looking at. Let�s all sustain to survive!
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
                           Registration Fee: 150 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-1000/-INR ; 2nd-500/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 9.30AM to 12.30PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: ML 6001
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
		 Idea and proof of concept presentation
                         </Text>
	        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		 (PPT) Participants will be given with 5 different environments (like an AMBULANCE etc.) for which they will have to come up with a design of an ecosystem which conserves energy and is sustainable.
                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		The participants come up with ideas to design a sustainable ecosystem.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		The participants have to present their ideas (ppt)
                         </Text>
	   <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		This event will also assess how candidates can design solutions and present (PPT) it as an individual and as a team
                         </Text>
	       <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
		They will be judged on the basis of their PPT and how effectively they present it
The PPT should contain: Idea, the need, the socio-economic impact, effective energy consumption
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
                              1.Bhamini NM- 9513869149
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.AnanyaMadhav- 9108042546
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
