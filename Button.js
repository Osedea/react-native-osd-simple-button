import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

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
        backgroundColor: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node,
        ]),
        containerStyle: View.propTypes.style,
        onPress: React.PropTypes.func.isRequired,
        text: React.PropTypes.string,
        textContainerStyle: View.propTypes.style,
        textStyle: Text.propTypes.style,
        underlayColor: React.PropTypes.string,
        uppercase: React.PropTypes.bool,
    };

    static defaultProps = {
      underlayColor: colors.defaultUnderlayColorrr,
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
        );
    }
}
