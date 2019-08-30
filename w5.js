import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class w5 extends React.Component {
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
                        fontWeight: 'bold',
                        paddingTop:20,
                        color: 'rgba(0,160,169,1)',
                        paddingBottom:30,
                        paddingLeft: 7
                      }}>UI/UX</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                          Participants will learn and apply the procedure of improving the overall experience of the users when they interact with the application or website.
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
                           Registration Fee: 150 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Date: 14/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 11.00AM to 5PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: CSE Seminar Hall
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
                      }}>1. Report at the venue before the workshop start.
                      </Text>
                      <Text style={{paddingBottom: 20,
                      fontSize: 15,
                    }}>
                      2. Each participant will be given a certificate.
                      </Text>
                      <Text style={{paddingBottom: 20,
                      fontSize: 15,
                    }}>
                    3. The participants have to bring their own laptops
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
                              1.Aminta Rebecca - 9686744132
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.Riyanchhi A - 7908273162
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>
                              3.Sakshi Pandey - 9972047474
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
