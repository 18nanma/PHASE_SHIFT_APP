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
export default class i6 extends React.Component {
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
                      }}>ROCKETEERS READY? </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                      If you are interested in working models, this is the event for you!! The only objective is to make the bottle fly the highest (vertical height) without direct physical contact.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation:Team of up to 3 persons
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee:150/- INR per team
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-1500/-INR; 2nd-500/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date:15-09-19
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time:10 AM to 1 PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue:Cement pathway near the parking exit which connects to the main canteen
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
                 Basic materials (1L empty bottle, Tape (brown 3M tape), Scissors, Cork, Cycle pump and needle, Cardboard and Parachute) will be provided. Participants are encouraged to bring materials to suit respective designs (Parachute included). Usage of model rocket boosters are not allowed. Non-mentioned required items are to be brought by participants. Usage of combustion as the driving force is not allowed. Bonus Points will be awarded for reusability of items. Any further rules will be provided at the event.
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
                       1. Pranav Rao - 9900363398
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                           2. Sanjeev Ravi – 9481255919
                        </Text>
                       <Text style={{fontSize: 15,
                          }}>
                         3. Ankita Krishna  kumar : 9686417409
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
