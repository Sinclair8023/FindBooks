/**
 * Created by Sinclair on 2017/3/16.
 */
import React, {Component} from 'react'
import {Text,View} from 'react-native'
import icon from 'react-native-iconic-font/fontawesome'
/*
 字体图标组件
 组件库：fontawesome
 props:{icon,size}
 icon:图标名称 string isrequired
 size:字体大小 number default 30
 text:文字
 dir：文字方向 left||right||top||bottom
 */
class TextIcon extends Component {
    constructor(props){
        super(props)
    }
    static defaultProps = {
        iconSize:30,
        textSize:15,
        iconColor:'#ccc',
        text:'',
        dir:'bottom',
        textStyle:{},
        style:{}
    }
    static propTypes = {
        icon: React.PropTypes.string.isRequired,
        iconSize:React.PropTypes.number,
        textSize:React.PropTypes.number,
        text:React.PropTypes.string,
        dir:React.PropTypes.oneOf(["right","left","top","bottom"])
    }
    render() {
        let {dir,iconSize,textSize,textStyle,style,iconColor} = this.props;
        let flexDir = (dir == 'left' || dir == 'right') ?'row':'column';
        return (
            <View style={[{flexDirection:flexDir,  justifyContent: 'center',  alignItems: 'center',},{...style}]}>
                {
                    ( dir == 'top'|| dir == 'left')&&<Text style={[{fontSize:textSize},{...textStyle}]} >{this.props.text}</Text>
                }
                <Text style={{fontFamily: 'fontawesome',fontSize:iconSize,color:iconColor}}>
                    {icon(this.props.icon)}
                </Text>
                {
                    (dir == 'bottom'|| dir == 'right')&&<Text style={[{fontSize:textSize},{...textStyle}]} >{this.props.text}</Text>
                }
            </View>
        )
    }
}
export default TextIcon