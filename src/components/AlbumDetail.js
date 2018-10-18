import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { textConatinerStyle, thumbnailStyle, imageContainerStyle, headerStyle, atrWorkStyle } = styles;
    return (
        <Card>
        <CardItem>
            <View style={imageContainerStyle}>
                <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
            </View>
            <View style={textConatinerStyle}>
            < Text style={headerStyle}>{title}</Text>  
            < Text>{artist}</Text>  
            </View>
        </CardItem>
        <CardItem>
            <Image source={{ uri: image }} style={atrWorkStyle} />
        </CardItem>

        <CardItem>
            <Button onPress={() => Linking.openURL(url)} buttonTitle={'Buy Now'} />
        </CardItem>
        </Card>
    );
};

const styles = {
    textConatinerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    headerStyle: {
        fontSize: 18,
    },

    thumbnailStyle: {
        height: 50,
        width: 50,
    },

    imageContainerStyle: {
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    atrWorkStyle: {
        height: 300,
        flex: 1,
        width: null,
    }

};

export default AlbumDetail;