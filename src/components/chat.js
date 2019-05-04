import React from 'react';

import {
    View,
    Text,
} from 'react-native'

//import backend here. 

import { GiftedChat } from "react-native-gifted-chat";

export default class chat extends React.Component {
    state = {
        messages: [],
    };

    componentWillMount(){

    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    //Send message to your backend. 
                }}
                user={{
                    _id: 1
                }}
            />
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }
}



chat.defaultProps = {
    name: 'Test',
};

// chat.propTypes = {
//     name: React.PropTypes.strings,
// }

// export default chat; 