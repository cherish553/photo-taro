// import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./index.scss";

class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}
  config: Config = {
    navigationBarTitleText: "我的"
  };
  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className='index'></View>;
  }
}

export default Index;
