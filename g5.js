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
export default class g5 extends React.Component {
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
                        padding:20,
                        paddingBottom:30

                      }}>ZEAL EXCHANGE</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                           paddingTop:20,
                        paddingBottom:30,
                        paddingLeft: 7

                        fontWeight: 'semibold',

                        }}>

                         Zeal Exchange is a speculative game that helps players to trade stocks of companies which deal with energy and sustainability in a simulated market environment.
The underlying concept of zeal exchange is for the player to gain experience or just entertainment by trading stocks in a virtual world where there is no real risk.
These games do not involve real money in any way. It imitates the real life working of the equities market.
Each player will have $100,000 in pretend money to start. From there, players pick the stock to trade and invest. These stocks are same as listed on the stock exchange.
The event would be 3 virtual days long which would let players search online about specifics of each company and invest accordingly. At the end of these 3 days, the team with the highest profits will be declared the winner.

                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,

                        }}>

                           Participation:Team of 2
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>

                           Registration Fee:100 INR
                        </Text>
                          <Text style={{fontSize: 15,

                            }}>
                           Prize money:1st - 1500 INR ; 2nd - 1000 INR
                        </Text>
                        <Text style={{fontSize: 15,
                          color: 'rgba(255,255,255,1)',
                          }}>
                         Date: 15/09/2019
                      </Text>
                          <Text style={{fontSize: 15,

                          }}>
                           Time: 10AM-4PM
                        </Text>
                          <Text style={{fontSize: 15,

                        }}>
                           Venue:ERP lab IEM
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

                   1. Participants are allowed to use mobile phones
                         </Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                 2.Any changes after the time is up won't be considered.
                         </Text>
                    <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>

                  3. The team with maximum profits wins.

.
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

                         1.RohitBagaria -9019685272
                        </Text>
                        <Text style={{fontSize: 15,

                        }}>

                          2.Aditya Suresh- 7406182333
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>

      </Fragment>


    );
  }
}
