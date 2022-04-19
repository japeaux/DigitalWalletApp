import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity ,Image,TextInput ,TouchableWithoutFeedback, Keyboard} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function SignupHeader() {

    const [showPassword, setShowPassword] = useState(false)

    const [areas, setAreas] = useState([])
    const [selectedArea, setSelectedArea] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={{flex:1, margin:15}}>
            {/* Full Name */}
            <View >
                <Text style={{ color: '#E6FEF0',}}>Full Name</Text>
                <TextInput
                    style={{
                        marginVertical: 15,
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                        height: 40,
                        color: 'white',
                    }}
                    placeholder="Enter Full Name"
                    placeholderTextColor='white'
                    selectionColor='white'
                />
            </View>

                    {/* Phone Number */}
            <View style={{ marginTop:15 }}>
                <Text style={{ color: '#E6FEF0',}}>Phone Number</Text>
                <TextInput
                        style={{
                            flex: 1,
                            marginVertical: 15,
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                            height: 40,
                            color: 'white'
                        }}
                        placeholder="Enter Phone Number"
                        placeholderTextColor='white'
                        selectionColor='white'
                    />
            </View>

            {/* Password */}
            <View style={{ marginTop:15 }}>
                <Text style={{ color: '#E6FEF0',}}>Password</Text>
                <TextInput
                    style={{
                        marginVertical: 15,
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                        height: 40,
                        color: 'white'
                    }}
                    placeholder="Enter Password"
                    placeholderTextColor='white'
                    selectionColor="white"
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 10,
                                height: 30,
                                width: 30
                            }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                {showPassword ? (
                    <Ionicons name="eye-off" size={24} color='white' />
                ) : (
                    <Ionicons name="eye" size={24} color='white' />
                )}
                </TouchableOpacity>
            </View>
    </View>
    
  );
}
