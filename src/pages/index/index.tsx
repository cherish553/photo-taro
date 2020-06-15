// import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View,Image } from "@tarojs/components";
import home from 'tabbar/home.png'
import "./index.scss";

// const home =  


class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}
  config: Config = {
    navigationBarTitleText: "首页"
  };
  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className='index'>
      <Image src={home}></Image>
    </View>;
  }
}

export default Index;
