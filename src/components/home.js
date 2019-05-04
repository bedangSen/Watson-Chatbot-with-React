import React from 'react';

import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import {
    Actions,
} from 'react-native-router-flux';

class home extends React.Component {
    state={
        name: '',
    };

    render() {
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name : 
                </Text>
                <TextInput 
                    style={styles.nameInput}
                    placeholder="Bedang Sen"
                    onChangeText={(text) => {
                        this.setState({
                            name: text,
                        });
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity
                    onPress={() => {
                        {/* Navigate to the second screen. */}
                        console.log(this.state.name);
                        {/* debugger; */}

                        Actions.chat({
                            name: this.state.name,
                        })
                    }}
                >
                    <Text style={styles.buttonText}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }    
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        padding: 5,
    },
    buttonText: {
        fontSize: 20,
        marginLeft: 20,
    }
});

export default home; 