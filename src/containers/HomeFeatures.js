import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image,  } from "react-native";

export default function HomeFeatures({features}) {

    const Header = () => (
        <View style={{ marginBottom: 15 }}>
            <Text style={{  fontSize: 16, lineHeight: 22  }}>Features</Text>
        </View>
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: 15, width: 60, alignItems: 'center' }}
            onPress={() => console.log(item.description)}
        >
            <View
                style={{
                    height: 50,
                    width: 50,
                    marginBottom: 5,
                    borderRadius: 20,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: item.color
                    }}
                />
            </View>
            <Text style={{ textAlign: 'center', flexWrap: 'wrap', fontSize:14 }}>{item.description}</Text>
        </TouchableOpacity>
    )


    return (
        <FlatList
            ListHeaderComponent={Header}
            data={features}
            numColumns={4}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            style={{margin:15}}
        />
    )
}
