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
export default class g7 extends React.Component {
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

                      }}>JAM</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        color: 'rgba(255,255,255,1)',
                        }}>

                       One minute or less extempore speech that is carried out without any preparation or impromptu performances. ... Mental Preparation: Know what to speak before delivering speech. Ponder over the topic for some time and prepare the flow of delivery. Topics will be given based on the theme “Energy and Sustainability”.

                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>

                           Participation:Individual
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                            }}>

                           Registration Fee: 50 INR per participant
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                            }}>
                           Prize money:: 1st-1000/- INR; 2nd-500/- INR
                        </Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                          }}>
                         Date:15th September 2019
                      </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                          }}>
                           Time:10AM-12PM
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                        }}>
                           Venue:RK hall
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

                    On the spot topic will be given to contestants. The contestant has to speak continuously without any pause or repetition of a word for 60 seconds and he cannot repeat the idea more than two times and cannot steal ideas of others. Speaking continuously for 5 seconds will gain the participants a point. In case of discrepancy, argument or confusion, the decision of the judges will be considered as final. The participants who will finish the topic will get one extra point
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

                       1.Rachana S Raju- 8867860970
                        </Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>

                          2.Sushmitha-8050473706
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
