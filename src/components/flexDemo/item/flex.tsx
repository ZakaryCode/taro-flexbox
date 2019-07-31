import { View, Text } from "@tarojs/components";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>默认: 0 1 auto (后两个属性可选) 该属性有两个快捷值: auto (1 1 auto) 和 none (0 0 auto) 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flex: 'auto' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>auto</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flex: 'auto' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1 1 auto</Text>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flex: 'none' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>none</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flex: 'none' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>0 0 auto</Text>
      </View>
    </View>
  </View>
</View>