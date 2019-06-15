// Formik x React Native example
import React, {Fragment} from 'react';
import {Alert, TextInput, View, StyleSheet, Text, Button} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup';

export default class ProfileSetupForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Formik
                initialValues={{
                    email: this.props.email,
                    firstName: this.props.firstName,
                    lastName: this.props.lastName
                }}
                // validationSchema={
                //     yup.object().shape({
                //         email: yup
                //             .string()
                //             .email("Not a valid e-mail")
                //             .required ("E-mail is required")
                //     })}
                enableReinitialize
                onSubmit={values => this.props.createUser({...values, avatarUrl: this.props.avatarUrl})}
            >
                {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                    <Fragment>
                        <Input
                            value={values.firstName}
                            onChangeText={handleChange('firstName')}
                            placeholder="First Name"
                        />
                        <Input
                            value={values.lastName}
                            onChangeText={handleChange('lastName')}
                            placeholder="Last Name"
                        />
                        <Input
                            value={values.email}
                            onChangeText={handleChange('email')}
                            placeholder="E-mail"
                            onBlur={() => setFieldTouched('email')}
                        />
                        {touched.email && errors.email &&
                        <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
                        }
                        <Text>{JSON.stringify(values)}</Text>
                        <Button
                            title='Sign In'
                            // disabled={!isValid}
                            onPress={handleSubmit}
                        />
                    </Fragment>
                )}
            </Formik>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
});