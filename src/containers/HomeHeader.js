import React from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeHeader() {
  return (
    <View style={{ flexDirection: 'row',margin:15}}>
        <View style={{ flex: 1 }}>
            <Text style={{fontSize: 20, lineHeight: 36  }}>Hello!</Text>
            <Text style={{fontSize: 16, lineHeight: 30, color: 'grey' }}>ByProgrammers</Text>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                style={{
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >
               <Ionicons name="notifications-outline" size={24} color='grey' />
                <View
                    style={{
                        position: 'absolute',
                        top: -5,
                        right: -5,
                        height: 10,
                        width: 10,
                        backgroundColor: 'red',
                        borderRadius: 5
                    }}
                >
                </View>
            </TouchableOpacity>
        </View>

    </View>
  );
}
