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

export default class q8 extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <View>
      <Image source={require('../assets/ww.jpeg')}
        style={{width:width,
        height:150}}/>
      </View>
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
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
                      }}>FISHING EXPEDITION</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        color: 'rgba(255,255,255,1)',
                        }}>
                         Participants are requested to be aware of ASCII values
ROUND1; Reframing the code using the ASCII values
ROUND 2; Debugging the HTML code and finding clues for the successive HTML files and finally reach the destination file.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                        }}>
                           Participation: Team of less 3
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Registration Fee: 200 INR
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Prize money:1st-4000/-INR ; 2nd-2000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Time: 1.00PM to 5.00PM
                        </Text>
                          <Text style={{fontSize: 15,
                          }}>
                           Venue: MCA Lab
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
                        color: 'rgba(255,255,255,1)',
                      }}>
		 Decision of the Judges will be final
                         </Text>
	    <Text style={{paddingBottom: 20,
                        fontSize: 15,
                        color: 'rgba(255,255,255,1)',
                      }}>
		Team size should not exceed 3
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
                              1.Anitha B - 9741175438
                        </Text>
                        <Text style={{fontSize: 15,
                        }}>
                              2.Prajwal M P - 9900806532
                        </Text>
                       <Text style={{fontSize: 15,
                         color: 'rgba(255,255,255,1)',
                       }}>
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
