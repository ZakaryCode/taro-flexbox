import { View } from "@tarojs/components";
import OrderLabel from './orderLabel';
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>默认: 0 数值越小，排列越靠前</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ order: 0 }}>
        <View className={clnx(['demo-box-container-itemText'])}><OrderLabel index={1} order={0}/></View>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ order: 2 }}>
        <View className={clnx(['demo-box-container-itemText'])}><OrderLabel index={2} order={2}/></View>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ order: 4 }}>
        <View className={clnx(['demo-box-container-itemText'])}><OrderLabel index={3} order={4}/></View>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ order: 0 }}>
        <View className={clnx(['demo-box-container-itemText'])}><OrderLabel index={4} order={0}/></View>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ order: 0 }}>
        <View className={clnx(['demo-box-container-itemText'])}><OrderLabel index={1} order={0}/></View>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ order: -1 }}>
        <View className={clnx(['demo-box-container-itemText'])}><OrderLabel index={2} order={-1}/></View>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ order: 1 }}>
        <View className={clnx(['demo-box-container-itemText'])}><OrderLabel index={3} order={1}/></View>
      </View>
    </View>
  </View>
</View>