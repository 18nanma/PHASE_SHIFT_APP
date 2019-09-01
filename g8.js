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

export default class g8 extends React.Component {
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


                      }}>TECHNOLOCUTION</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        color: 'rgba(255,255,255,1)',
                        }}>

                        The event tests creative thinking and knowledge in three stages- Factual knowledge, Critical thinking and comparing, and Adaptation. In the first round one teammate must state accurate facts about a given alternate energy source to make the other teammate identify it. In the second round, a pair of energy forms will be given and the teams must compare them with logical statements to determine which would be more sustainable. Round 3 will require the teams to present a sustainable business plan for a given situation and adapt to a crisis that will bounce in midway. The finalist teams must then sell their plan to a panel of judges who will deliver the verdict
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>

                           Participation:Team of 2
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                            }}>

                           Registration Fee:200/- INR per team
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                            }}>
                           Prize money:1st-1500/- INR; 2nd-500/- INR
                        </Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                          }}>
                         Date:14th September 2019
                      </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                          }}>
                           Time:1PM - 5PM
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                        }}>
                           Venue:Classroom 3001
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
                      }}>

                   Round one will not allow usage of phones. Each team will get 4 minutes (2 minutes per member) to relay the maximum number of resources possible. In round 2, also will not allow usage of mobile phones. The write-up should be submitted in 30 minutes. For round 3, teams will be given 5 minutes to research, where they may use their mobiles. Thereafter, 40 minutes will be provided to formulate the business plan. The crisis will be told at halftime. All materials will be provided at the venue.
                         </Text>

                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                        color: 'rgba(255,255,255,1)',
                      }}>

                    3. Participants cannot go off boundary and should only follow the path.
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

                         1. Chinmayi R. Gudi- 7019711121
                        </Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>
                         2. Saisanthoshi SSK- 9590018933
                        </Text>
 <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>

                         3. Muriel Almeida : 8217810200
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
