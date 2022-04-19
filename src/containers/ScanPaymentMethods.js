import React from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ScanPaymentMethods({navigation}) {
  return (
    <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 120,
                    padding:15,
                    borderTopLeftRadius:15,
                    borderTopRightRadius: 15,
                    backgroundColor:'white'
                }}
            >
                <Text style={{ fontSize:16 }}>Another payment methods</Text>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginTop: 15
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={() => console.log("Phone Number")}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#F3EFFF',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Ionicons name="phone-portrait" size={24} color='white' />
                        </View>
                        <Text style={{ marginLeft: 15, fontSize:13 }}>Phone Number</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 15
                        }}
                        onPress={() => console.log("Barcode")}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#E6FEF0',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                           <Ionicons name="barcode" size={24} color='white' />
                        </View>
                        <Text style={{ marginLeft: 15, fontSize:13 }}>Barcode</Text>
                    </TouchableOpacity>
                </View>
            </View>
  );
}
