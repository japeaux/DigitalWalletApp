import React, { useState } from "react";
import { View, Text, TouchableOpacity ,Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function SignupHeader() {
  return (
   <View >
        <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: 15,
                    paddingHorizontal: 15,
                }}
                onPress={() => console.log("Sign Up")}
            >
            <Ionicons name="arrow-back" size={24} color='white' />
            <Text style={{ marginLeft:15, color: 'white',}}>Sign Up</Text>
        </TouchableOpacity>
   </View>
  );
}
