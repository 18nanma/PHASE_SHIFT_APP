import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./assets/Grad-01.jpg')}
      style={{
        width: '100%',
        flex:1,
        height: '100%',
        resizeMode: 'cover',
        }}>
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
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
                        color: 'rgba(255,255,255,1)',
                        fontWeight: 'bold',
                        padding:20,
                        paddingBottom:30
                      }}>DO IT YOURSELF?</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        color: 'rgba(255,255,255,1)',
                        }}>
                          Get ready for a thriving campus. It's now easier than ever to make your own compost-machine.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>
                           Participation: Individual
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                            }}>
                           Registration Fee: 200 INR
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                            }}>
                           Date: 14/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                          }}>
                           Time: 11.30AM to 5PM
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
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
                          color: 'rgba(255,255,255,1)',
                        }}>Rules of the event:</Text>
                    </View>
                    <View>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                        color: 'rgba(255,255,255,1)',
                      }}>The students will be divided into groups.
                        Each group will be given the material and will be
                         taught how to make a Compost -making machine.
                          The machines made by the students
                         will be kept in the college campus.
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
                          color: 'rgba(255,255,255,1)',
                        }}>Event Coordinators:</Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>
                              1.Aditya B N - 9538280275
                        </Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>
                              2.Chethan B - 8861529292
                        </Text>
                       <Text style={{fontSize: 15,
                         color: 'rgba(255,255,255,1)',
                       }}>
                              3.Syed Adnan Hyder - 9980829318
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
      </Fragment>


    );
  }
}
