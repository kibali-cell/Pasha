import { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Message from '../components/Message';
import bg from '../../assets/images/BG.png';

import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox';
import { API, graphqlOperation } from 'aws-amplify';
import { getChatRoom } from '../graphql/queries';

const ChatsScreen = () => {
    const [chatRoom, setChatRoom] = useState(null)


    const route = useRoute();
    const navigation = useNavigation();

    const chatroomID = route.params.id;

    useEffect(() => {
        API.graphql(graphqlOperation(getChatRoom, { id: chatroomID})).then(
            (result) => setChatRoom(result.data?.getChatRoom)
            );
    }, []);

    useEffect(() => {
        navigation.setOptions({ title: route.params.name})
    }, [route.params.name]);

    if (!chatRoom) {
        return <ActivityIndicator />;
    }

    console.log(chatRoom);    

    return (
        <ImageBackground source={bg} style={styles.bg}>
            <FlatList 
            data={chatRoom.Messages.items} 
            renderItem={({ item }) => <Message message={item}/>} 
            style={styles.list}
            inverted
            />
            <InputBox chatroom={chatRoom}/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
});

export default ChatsScreen;