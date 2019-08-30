import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class w1 extends React.Component {
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
                      }}>DO IT YOURSELF?</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>
                          Get ready for a thriving campus. It's now easier than ever to make your own compost-machine.
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
                           Registration Fee: 200 INR
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Date: 15/09/2019
                        </Text>
                          <Text style={{fontSize: 15,

                          }}>
                           Time: 11.30AM to 5PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue: ML 5001(PG block)+ class 3002
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
                      The students will be divided into groups.
                        Each group will be given the material and will be
                         taught how to make a Compost -making machine.
                          The machines made by the students
                         will be kept in the college campus.
                         </Text>
                    </View>
                    </View>

                    <View style={{padding:7,
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
                              1.Aditya B N - 9538280275
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>
                              2.Chethan B - 8861529292
                        </Text>
                       <Text style={{fontSize: 15,

                       }}>
                              3.Syed Adnan Hyder - 9980829318
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
