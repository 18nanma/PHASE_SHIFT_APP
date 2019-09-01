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

export default class g1 extends React.Component {
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

                      }}>STRESS YOUR BRAIN</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>

1. Slideshow with images will be shown and at the end they will have to decode a phrase.
2. Slide show will be shown and they will have to tell the contents of the presentation at the end.
3. Circuitpins will be paired with color cables and they will have to match the correct cable at the end. Questions will be shot in the middle to stress them out.

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
                           Prize money:1st - 3000 INR ; 2ND - 1500 INR
                        </Text>
                        <Text style={{fontSize: 15,

                          }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,

                          }}>
                           Time: 2.00PM - 5.00PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue:PG block CA4
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

                     1. Cannot use any electronic gadgets to answer any questions
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                   2. If the team fails to answer the question in the given time, points will not be allotted
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

                         1.Harshitha jain- 8660729521
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>

                            2.Goutham K- 9886426756
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
