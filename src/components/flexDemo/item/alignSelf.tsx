import { View, Text } from "@tarojs/components";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>默认: auto 继承父元素的align-items属性，如果没有父元素，则等同于stretch</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])} style={{flexDirection: 'column'}}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemS'])} style={{ width: 'auto', alignSelf: 'auto' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>auto</Text>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])} style={{flexDirection: 'column'}}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemS', 'width5'])} style={{ alignSelf: 'flex-start' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>flex-start</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemS', 'width5'])} style={{ alignSelf: 'center' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>center</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemS', 'width5'])} style={{ alignSelf: 'flex-end' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>flex-end</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemS'])} style={{ width: 'auto', alignSelf: 'flex-stretch' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>flex-stretch</Text>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>baseline</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemS', 'height7'])} style={{ alignSelf: 'baseline' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemS', 'height5'])} style={{ alignSelf: 'baseline' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>2</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemS', 'height3'])} style={{ alignSelf: 'baseline' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>3</Text>
      </View>
    </View>
  </View>
</View>