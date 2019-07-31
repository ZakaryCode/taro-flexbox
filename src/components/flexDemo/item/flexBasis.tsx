import { View, Text } from "@tarojs/components";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>默认: auto 项目的本来大小 它可以设为跟width或height属性一样的值(比如350px)，则项目将占据固定空间。</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexBasis: 'auto' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>auto</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexBasis: '25%' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>25%</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexBasis: '50%' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>50%</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexBasis: '75%' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>75%</Text>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexBasis: 'auto' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>auto</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexBasis: '25%' }}>
        <Text className={clnx(['demo-box-container-itemText'])}>25%</Text>
      </View>
    </View>
  </View>
</View>