import React from 'react';
import { Text, View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import {connect} from 'react-redux';

class AddContactsScreen extends React.Component {

    render() {
        return (
            <Text>Add Friends</Text>
        );
    }
}

const styles = StyleSheet.create({
});

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

const ConnectedAddContactsScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddContactsScreen);

export default ConnectedAddContactsScreen;