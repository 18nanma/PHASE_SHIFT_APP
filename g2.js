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
export default class g2 extends React.Component {
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
                      }}>FUSION RYDER</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>

                         Eco-Friendly vehicles have invaluable benefits to the environment. So keeping this concept in mind a fun filled path is designed.
Obstacles will be allocated throughout the path, participants will be given a scenario based on which they have to ride in the respective path using an Eco-friendly vehicle.
The person who reaches the final line in the least amount of time will be considered as the winner

                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                        }}>

                           Participation:  individual
                        </Text>
                          <Text style={{fontSize: 15,
                           }}>

                           Registration Fee: 50 INR
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Prize money:2000 INR(Geared) 2000 INR(Non-Geared Electric)
                        </Text>
                        <Text style={{fontSize: 15,

                          }}>
                         Date: 14/09/2019 & 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                          }}>
                           Time: Day 1- 11AM - 5PM ; Day 2-10AM-4PM
                        </Text>
                          <Text style={{fontSize: 15,
                        }}>
                           Venue:Mechanical block parking and Gopi wall
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

                    1. Participants cannot use their own bikes.
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>

                  2. If the two wheeler is damaged while taking part in the event, the participants will be disqualified and they have to bear the expenses for the damage.
                         </Text>
                    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                  3. Participants cannot go off boundary and should only follow the path.
                         </Text>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                4. Touching the bike to the path or any other objects aligned in the path can have a penalty in terms of time.
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
                         1.Maurya Krishna - 8892638922
                        </Text>
                        <Text style={{fontSize: 15}}>
                           2 Raghothama- 9986949379
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
