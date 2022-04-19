import React from "react";
import { View, Image  } from "react-native";

export default function HomeBanner() {
  return (
    <View
        style={{
            height: 120,
            borderRadius: 20,
            margin:15,
        }}
    >
        <Image
            source={require('../../assets/banner.png')}
            resizeMode="cover"
            style={{
                width: "100%",
                height: "100%",
                borderRadius: 20
            }}
        />
    </View>
  );
}
