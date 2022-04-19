import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import SignupHeader from '../containers/SignupHeader'
import SignupForm from '../containers/SignupForm'


export default function Signup({navigation}) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.body}>
                <SignupHeader/>
                <ScrollView>
                <View
                    style={{
                        marginTop: 0,
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={require('../../assets/wallet.png')}
                        resizeMode="contain"
                        style={{
                            width: "30%"
                        }}
                    />
                </View>
                <SignupForm/>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'center',
                        marginTop: 15,
                        padding: 15,
                        borderRadius:15,
                        backgroundColor:'black'
                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ marginLeft:15, color: 'white',alignItems:'center'}}>Continue</Text>
                </TouchableOpacity>
                
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor:'#24C16B'
    },
});