import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import {_storeData} from "../../services/LocalStorage";
import {startLoginToFacebook} from "../../actions";
import {connect} from "react-redux";


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this._logIn.bind(this)
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/images/CityBlur.jpg')} style={styles.imageBackground}>
                <View style={styles.loginContainer}>
                    <Button style={styles.loginButton} title="Log into Facebook" onPress={this._logIn.bind(this)}/>
                </View>
            </ImageBackground>
        );
    }

    async _logIn() {
        this.props.onFBLogin();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFBLogin: () => {
            dispatch(startLoginToFacebook())
        }
    }
};

const ConnectedLoginScreen = connect(
    null,
    mapDispatchToProps
)(LoginScreen);

export default ConnectedLoginScreen;

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginContainer: {
        flex: 1,
        alignSelf: 'center',
        top: 600
    },
    loginButton: {

    }
});
