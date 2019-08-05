import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import OrderLabel from './orderLabel';
import clnx from "classnames";

function Order(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>默认: 0 数值越小，排列越靠前</View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 0 }}>
          <View className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}><OrderLabel index={1} order={0}/></View>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 2 }}>
          <View className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}><OrderLabel index={2} order={2}/></View>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 4 }}>
          <View className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}><OrderLabel index={3} order={4}/></View>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 0 }}>
          <View className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}><OrderLabel index={4} order={0}/></View>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 0 }}>
          <View className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}><OrderLabel index={1} order={0}/></View>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: -1 }}>
          <View className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}><OrderLabel index={2} order={-1}/></View>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 1 }}>
          <View className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}><OrderLabel index={3} order={1}/></View>
        </View>
      </View>
    </View>
  </View>
}

Order.options = {
  addGlobalClass: true,
}

export default Order;
