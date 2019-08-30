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

export default class w9 extends React.Component {
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
                      }}>ZEAL </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                          Workshop on energy conservation using technology
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
                           Registration Fee: 100 INR
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Date: 14/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Time: 1 PM to 5PM
                        </Text>
                          <Text style={{fontSize: 15,
                          }}>
                           Venue: PG block FDC
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
                              1.Kashish singh - 7406054057
                        </Text>
                        <Text style={{fontSize: 15,
                        }}>
                              2.Gowda Pooja Umesh - 9448645828
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
