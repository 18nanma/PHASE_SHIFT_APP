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

export default class p4 extends React.Component {
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
                      }}>PAPER SHARK</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>
                        Be prepared to stimulate the entrepreneur in you as this event not only requires your creative thinking but also your skill in convincing the jury, why you're idea is better.
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
                           Time: 2.00PM to 5.00PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue: C301, C302
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
 FIRST ROUND: Paper Presentation - The topic will be given a week before the event. Participants will have to prepare a paper in accordance with the given topic and submit it
                     </Text>
      <Text style={{paddingBottom: 20,
                    fontSize: 15,
                  }}>
 SECOND ROUND: Participants must choose a field of Energy and a sensor and come up with a problem and solution to it.
                     </Text>
 <Text style={{paddingBottom: 20,
                    fontSize: 15,
                  }}>
THIRD ROUND: The best solution will be presented in front of the judges where the winner will be selected based on the creativity of the team and their skill in defending their solution.
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
                              1.Bharath Raj S- 8095725612
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>
                              2.Niveditha N- 9035611594
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>
                              3.RashmiPai- 7348940728
                        </Text>
                      
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
