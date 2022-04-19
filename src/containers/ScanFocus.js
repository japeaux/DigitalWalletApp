import React from "react";
import { View, Image  } from "react-native";

export default function ScanFocus() {
  return (
    <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <Image
            source={require('../../assets/focus.png')}
            resizeMode="stretch"
            style={{
                marginTop: "-55%",
                width: 200,
                height: 300
            }}
        />
    </View>
  )
}
