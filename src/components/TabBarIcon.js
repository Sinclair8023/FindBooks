/**
 * Created by Sinclair on 2017/3/31.
 */
import React from 'react'
import TextIcon from './TextIcon'
/**
 * 底部导航栏图标
 */
class TabBarIcon extends React.Component{
    constructor(props){
        super(props)

    }
    static propTypes={
        selected: React.PropTypes.bool,
        title: React.PropTypes.string,
        icon:React.PropTypes.string.isRequired
    }
    render(){
        let iconColor= this.props.selected?'blue':'#ccc';
        return <TextIcon icon={this.props.icon} iconColor={iconColor}/>
    }
}
export default TabBarIcon