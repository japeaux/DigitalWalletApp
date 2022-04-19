import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import HomePromos from '../containers/HomePromos';

export default function Profile( ) {

    const featuresData = [
        {
            id: 1,
            icon: require('../../assets/eye.png'),
            // color: 'purple',
            // backgroundColor: 'purple',
            description: "Top Up"
        },
        {
            id: 2,
            icon: require('../../assets/eye.png'),
            // color: 'yellow',
            // backgroundColor: 'yellow',
            description: "Transfer"
        },
        {
            id: 3,
            icon: require('../../assets/eye.png'),
            color: 'green',
            backgroundColor: 'green',
            description: "Internet"
        },
        {
            id: 4,
            icon: require('../../assets/eye.png'),
            // color: 'red',
            // backgroundColor: 'grey',
            description: "Wallet"
        },
        {
            id: 5,
            icon: require('../../assets/eye.png'),
            // color: 'yellow',
            // backgroundColor: 'grey',
            description: "Bill"
        },
        {
            id: 6,
            icon: require('../../assets/eye.png'),
            // color: 'green',
            // backgroundColor: 'grey',
            description: "Games"
        },
        {
            id: 7,
            icon: require('../../assets/eye.png'),
            color: 'red',
            backgroundColor: 'red',
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: require('../../assets/eye.png'),
            color: 'purple',
            backgroundColor: 'purple',
            description: "More"
        },
    ]

    const specialPromoData = [
        {
            id: 1,
            img:require('../../assets/banner.png'),
            title: "Promotion 1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: require('../../assets/banner.png'),
            title: "Promotion 2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: require('../../assets/banner.png'),
            title: "Promotion 3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: require('../../assets/banner.png'),
            title: "Promotion 4",
            description: "Don't miss it. Grab it now!"
        },
    ]


    const [features, setFeatures] = useState(featuresData)
    const [specialPromos, setSpecialPromos] = useState(specialPromoData)
    

    useEffect(() => {
        setFeatures(featuresData);
        setSpecialPromos(specialPromos);
    }, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <HomePromos promos={specialPromos} features={features}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
});