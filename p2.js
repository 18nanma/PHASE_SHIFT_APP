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

export default class p2 extends React.Component {
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
                      }}>SLIDERS</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>
                          Every team will be given a topic to prepare the presentation and propose a suitable solution for the same. The presentation should contain only 5 slides and should be presented within 5 minutes followed by 2 minutes of Q&A by the judges if necessary.
Presentation slides should be prepared on the spot within 30 minutes and 5 minutes will be given to present their solution.
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
                           Prize money:1st-3000/-INR ; 2nd-1500/-INR
                        </Text>
                        <Text style={{fontSize: 15,

                          }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,

                          }}>
                           Time: 11.00AM to 2.00PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue: MCA Lab
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
		 Decision of judge will be final
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
                              1.Bharath P G- 8050568616
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>
                              2. Ranjitha S- 7411840130
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
