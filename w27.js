import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions} from 'react-native';
  const { width, height } = Dimensions.get('window');


export default class w27 extends React.Component {
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
                      }}>ELECTRIC VEHICLE TECH TALK </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        color: 'rgba(255,255,255,1)',
                        }}>
                        Electrical Vehicles workshop conducted by a resource person from Ather Energy and our Alumni. Ather Energy is an Indian Electric Vehicle Company and has also established electric vehicle battery charging infrastructure AtherGrid.
                        In the workshop, our speakers will teach about different types of motors used by Tesla, Ather, and Reva and also about selection of different types of batteries and their cooling system in Electric Vehicles.
                        The participants will be taught about the technicalities of the EV (Mechanical, Electrical, and Electronics) and also aesthetics of EV’s i.e. design.                         </Text>
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
                           Registration Fee: 50 INR
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Date: 15/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Time: 1 PM - 4:30 PM
                        </Text>
                          <Text style={{fontSize: 15,
                          }}>
                           Venue: 6001
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
                              1.Manohar Bhat - +919611031079
                        </Text>
                        <Text style={{fontSize: 15,
                        }}>
                              2.Nithyashree - 9916782678
                        </Text>


                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
