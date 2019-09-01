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

export default class g6 extends React.Component {
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

                      }}>TALKING TECH</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        color: 'rgba(255,255,255,1)',
                        }}>

                        Are you intelligent, savvy, and quick-witted with strong perspectives? Do you think you have what it takes to advocate for what you stand for? If yes, this two round event with a 'Pick and Speak' and a 'Technical Debate' is just the right event to showcase your inner orator!
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

                           Registration Fee:150/- INR per team
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                            }}>
                           Prize money:1st-1000/- INR; 2nd-500/- INR
                        </Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                          }}>
                         Date: 14th September 2019
                      </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                          }}>
                           Time:11.00AM-12.30AM
                        </Text>
                          <Text style={{fontSize: 15,
                            color: 'rgba(255,255,255,1)',
                        }}>
                           Venue:ML- 6002
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

                    1. ROUND 1: The teams will be given a suitable statement to speak upon and they have to express their views on the same. Depending upon their facts and contents the teams will move on to the next round.
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,
                        color: 'rgba(255,255,255,1)',
                      }}>

                 2. ROUND 2: The selected teams will again be given with statements for which they’ll have to debate either for or against verses an opponent team. The selected teams will go through the final decisive round.
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

                         1. AnshuAndani- 9591811058
                        </Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                        }}>

                          2. Priyanka Kulkarni- 7019677663
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
