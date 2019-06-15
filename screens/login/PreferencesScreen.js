import React from 'react';
import { Text, View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import {Avatar} from "react-native-elements";
import ProfileSetupForm from '../../components/ProfileSetupForm';
import {__retrieveData} from "../../services/LocalStorage";
import {connect} from 'react-redux';
import {createUser} from "../../actions";


class PreferencesScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Avatar
                    rounded
                    source={{
                        uri:
                            this.props.avatarUrl
                    }}
                />
                <ProfileSetupForm
                    avatarUrl={this.props.avatarUrl}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    email={this.props.email}
                    createUser={this.props.createUser}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    }
});

const mapStateToProps = state => {
  return {
      avatarUrl: state.userProfile.picture.data.url,
      firstName: state.userProfile.first_name,
      lastName: state.userProfile.last_name,
      email: state.userProfile.email
  }
};

const mapDispatchToProps = dispatch => {
  return {
      createUser: (userObj) => {
          dispatch(createUser(userObj))
      }
  }
};

const ConnectedPreferencesScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(PreferencesScreen);

export default ConnectedPreferencesScreen;