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
export default class i2 extends React.Component {
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
                      }}> A WEEK TO PEAK </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                       This event is all about offering exposure of industries to the students. It is about enhancing their practical knowledge. Students have to come up with a simulation model/presentation on the problem statement that will be given to them from the company.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation:Individual Event
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee:: 150INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:: 1st – 2000 INR; 2nd – 1000 INR; Also internship to the winners and deserving candidates.
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date:15-09-19
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time:11:00-3:00
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue:AUDI 2
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
                  Pre event:  Students are supposed to prepare a questionnaire (10 questions) on INDUSTRY 4.0.  Later, they will have to go to the industries like GE, INTEL, BOSCH,TOYOTA,HONDA etc  and meet company officials (any one of the 10) and get the answers of the questionnaire on INDUSTRY 4.0 and get the problem statement.Work on the problem statement and submit it on 13th September.
Round 1: (45 mins)
A panel discussion between the INDUSTRY OFFICIALS and students (Q & A round)
Round 2: ( 1hour 15 mins)
Presentation on the problem statement given to them ( in the form of a working model or prototype).
Round 3: (1 hour)
A group discussion between students which will be judged by the committee.


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
                        1.Kalpan- 9099558834
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                       2.Prerana- 9980667279
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
