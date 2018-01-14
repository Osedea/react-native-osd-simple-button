import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import PropTypes from 'prop-types'

const colors = {
    defaultBorderColor: "#3B373C",
    defaultUnderlayColor: 'rgba(0, 0, 0, 0.3)',
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.defaultBorderColor,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 3,
    },
    overflow: {
        overflow: 'hidden',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textContainer: {
        padding: 10,
    },
});

export default class Button extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        containerStyle: PropTypes.style,
        elevation: PropTypes.number,
        onPress: PropTypes.func.isRequired,
        text: PropTypes.string,
        textContainerStyle: PropTypes.style,
        textStyle: PropTypes.style,
        touchableContainerStyle: PropTypes.style,
        underlayColor: PropTypes.string,
        uppercase: PropTypes.bool,
    };

    static defaultProps = {
      underlayColor: colors.defaultUnderlayColor,
    };

    render() {
        return (
            <View
                style={[
                    styles.container,
                    this.props.backgroundColor
                        ? { backgroundColor: this.props.backgroundColor }
                        : {},
                    this.props.containerStyle,
                ]}
                elevation={this.props.elevation}
            >
                <View
                    style={[
                        styles.overflow,
                        this.props.touchableContainerStyle,
                    ]}
                >
                    <TouchableHighlight
                        underlayColor={this.props.underlayColor}
                        onPress={this.props.onPress}
                    >
                        <View
                            style={[
                                styles.textContainer,
                                this.props.textContainerStyle,
                            ]}
                        >
                            {this.props.text
                                ? <Text
                                    style={[
                                        styles.text,
                                        this.props.textStyle,
                                    ]}
                                >
                                    {this.props.uppercase
                                        ? this.props.text.toUpperCase()
                                        : this.props.text
                                    }
                                </Text>
                                : null
                            }
                            {this.props.children}
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
