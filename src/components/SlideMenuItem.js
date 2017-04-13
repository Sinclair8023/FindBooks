/**
 * Created by Sinclair on 2017/4/12.
 */
import React from 'react'
import {View,Text} from 'react-native';
import TextIcon from './TextIcon';

/**
 *
 */

class SlideMenuItem extends React.Component {
    static propTypes = {
        badge:React.PropTypes.number.isRequired,
        icon:React.PropTypes.string.isRequired,
        text:React.PropTypes.string.isRequired,
    }
    render() {
        let {text} = this.props;

        return (
            <View style={styles.item}>
                <TextIcon icon="star" style={styles.left} text={text} dir="right" textStyle={{marginLeft:15}}/>

            </View>
        )
    }
}
const styles = {
    item:{
        flexDirection:'row',
        height:50,
        borderBottomWidth:1,
        borderBottomColor:"#ccc",
        justifyContent:"space-between",
        alignItems:"center",
    },
    left:{
        marginLeft:10
    },
    right:{
        marginRight:10
    }
};
export default SlideMenuItem