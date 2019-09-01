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


export default class p5 extends React.Component {
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
                      }}>CTRL+N</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>
                         Participants will make an e-poster on Energy and Sustainability using the latest software. Each will be given 30 minutes to create a poster from scratch.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,

                        }}>
                           Participation: Individual
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Registration Fee: 50 INR for IEEE members, 100 INR for non IEEE members
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Prize money:1st-1000/-INR ; 2nd-500/-INR
                        </Text>
                        <Text style={{fontSize: 15,

                          }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,

                          }}>
                           Time: 10.00AM to 12.00PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue: CSE Lab - 3
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
		 Participants cannot use custom templates from the internet.
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
                              1.PrithviRaghavan- 8660708536
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>
                              2.AyushSonthalia 9731762162
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
