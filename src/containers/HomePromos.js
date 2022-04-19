import React from "react";
import { View, 
        Text, 
        TouchableOpacity, 
        FlatList, 
        Image,  
    } from "react-native";
import { Dimensions } from "react-native";
import HomeFeatures from "./HomeFeatures";
import HomeBanner from "./HomeBanner";
import HomeHeader from "./HomeHeader";
const { width } = Dimensions.get("window");
export default function HomePromos({promos, features}) {

    const Header = () => (
        <View style={{ marginBottom: 15 }}>
            <HomeHeader/>
            <HomeBanner/>
            <HomeFeatures features={features}/>
            <Text style={{  fontSize: 16, lineHeight: 22  }}>Special Promos</Text>
        </View>
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity
                style={{
                    marginVertical: 15,
                    width: width / 2.5
                }}
                onPress={() => console.log(item.title)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: '#24C16'
                    }}
                >
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: 15,
                        backgroundColor: '#f9f9f9',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ fontSize:20 }}>{item.title}</Text>
                    <Text style={{ fontSize:16 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
    )


    return (
        <FlatList
            ListHeaderComponent={Header}
            data={promos}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            style={{margin:15}}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
                <View style={{ marginBottom: 80 }}>
                </View>
            }

        />
    )
}
