import React from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ScanHeader({navigation}) {
  return (
    <View style={{ flexDirection: 'row',margin:15, paddingHorizontal: 15}}>
        <TouchableOpacity
            style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#24C16B',
                borderTopLeftRadius:15,
                borderBottomLeftRadius:15,
            }}
            onPress={() => navigation.navigate("Home")}
        >
            <Ionicons name="close" size={24} color='white' />
            
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor:'#24C16B'}}>
            <Text style={{fontSize: 16,color: 'white' }}>Scan for payment</Text>
        </View>

        <TouchableOpacity
            style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#24C16B',
                borderTopRightRadius:15,
                borderBottomRightRadius:15,
            }}
            onPress={() => console.log("Info")}
        >
            <Ionicons name="information" size={24} color='white' />
            
        </TouchableOpacity>
    </View>
  );
}
