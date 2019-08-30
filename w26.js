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
export default class w26 extends React.Component {
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
                        color: 'rgba(44, 130, 201, 1)',
                        fontWeight: 'bold',
                        paddingTop:20,
                        paddingBottom:30,
                        paddingLeft: 7
                      }}>TALK ON GREEN BUILDINGS </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        A resource person will be delivering a talk on present developments in green buildings taking place in construction field.
                        </Text>
                        <View style={{padding:7,
                            borderRadius: 4,
                            paddingLeft:5,
                            fontWeight: 'bold',
                          }}>
                        <Text style={{fontSize: 15,
                        }}>
                           Participation: Individual
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Registration Fee: Free
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Date: 14/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                          }}>
                           Time: 2 PM - 4 PM
                        </Text>
                          <Text style={{fontSize: 15,
                        }}>
                           Venue: MV hall
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
                              1. Bhavan - 9916403943
                        </Text>
                        <Text style={{fontSize: 15,
                        }}>
                              2. Sinchana - 7019782562
                        </Text>
                        <Text style={{fontSize: 15,
                        }}>
                              3. Chirag - 7348844465
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
