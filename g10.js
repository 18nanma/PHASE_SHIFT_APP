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

export default class g10 extends React.Component {
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


                      }}>OF CHRONOS AND GAEA </Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',

                        }}>

                      Do you pride yourself on your logical reasoning and quick thinking? Think you have what it takes to emerge victor in a battle of wits and precision? BMSCE's very own Astronomy club - Alternate Universe - invites you to do just that!
Come put your cognitive abilities and knowledge  to the test with our event which comprises questions of simple yet analytical nature spread over two rounds.
Round 1: A timed elimination round which will test the teams' basic knowledge on space programs through a series of simple riddles and puzzles.
Round 2: A timed round which will require the teams to make use of their wit to solve questions as accurately and as fast as possible.


                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,

                        }}>

                           Participation:team of  2
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>

                           Registration Fee:100 INR
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Prize money:1000 INR: 500 INR
                        </Text>
                        <Text style={{fontSize: 15,

                          }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,

                          }}>
                           Time:11AM to 1PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue:: New Block, Room 303
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

                    1. Teams of 2.
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                 2. The use of the internet for the rounds will result in immediate disqualification.
                         </Text>
                    <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                 3. Cross college teams are allowed.
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                 4. The event judge's decision is final in case of any dispute.

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

                         1. Ishaan : 9663083857
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>

                       2. Vallari : 9901981854
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
