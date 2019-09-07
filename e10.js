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

export default class e10 extends React.Component {
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
                      }}>E � WASTE FOR SUSTAINABILITY</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        color: 'rgba(255,255,255,1)',
                        }}>
                         Teams will be given electronics waste. They have to come up with a functional Model using E-waste given for a sustainable environment.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                         }}>
                           Participation: Team of 4
                        </Text>
                          <Text style={{fontSize: 15,
                               }}>
                           Registration Fee: 200 INR
                        </Text>
                          <Text style={{fontSize: 15,
                               }}>
                           Prize money:1st-1000/-INR ; 2nd-600/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                           }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                             }}>
                           Time: 10.00PM to 4.00PM
                        </Text>
                          <Text style={{fontSize: 15,
                           }}>
                           Venue: AMC LAB, TCE Dept.
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
		 Participants are supposed to get pen, paper and other stationary needed.
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                        color: 'rgba(255,255,255,1)',
                      }}>
		They need to build something solely technical from the given E-Junk.
                         </Text>
		<Text style={{paddingBottom: 20,
                        fontSize: 15,
                        color: 'rgba(255,255,255,1)',
                      }}>
		 The final score depends upon the functionality of the model.
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
                              1. Komala M - 7259235988
                        </Text>
                        <Text style={{fontSize: 15,
                         }}>
                              2.Keerthana B - 9743101317
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
