/**
 * Created by Sinclair on 2017/4/12.
 */
import React from 'react'
import {View,Text} from 'react-native';
import SlideMenuItem from './SlideMenuItem'
/**
 * 左侧滑页面
 */

class SlideMenu extends React.Component {
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.top}></View>
                <View style={styles.body}>
                    <SlideMenuItem icon="star" text="点赞" badge={18}/>
                    <SlideMenuItem icon="star" text="点赞" badge={18}/>

                </View>
                <View style={styles.foot}></View>
            </View>
        )
    }
}
const styles = {
    page:{
        borderWidth:3,borderColor:'orange',flex:1
    },
    top:{
        height:200,
        backgroundColor:'orange'
    },
    body:{
        flex:1
    },
    foot:{
        height:50,backgroundColor:"#ccc"
    }
}
export default SlideMenu