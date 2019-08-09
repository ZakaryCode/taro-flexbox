import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import OrderLabel from './orderLabel';
import NotSupport from '../NotSupport';
import clnx from "classnames";
import '../index.scss';

function Order(): JSX.Element {
  if (process.env.TARO_ENV === 'rn') {
    return <View className={clnx(['margin_box'])}>
      <NotSupport />
    </View>;
  }
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>默认: 0 数值越小，排列越靠前</Text>
      </View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 0 }}>
          <View className={clnx(['margin_auto'])}><OrderLabel index={1} order={0}/></View>
        </View>
        <View className={clnx(['flex', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 2 }}>
          <View className={clnx(['margin_auto'])}><OrderLabel index={2} order={2}/></View>
        </View>
        <View className={clnx(['flex', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 4 }}>
          <View className={clnx(['margin_auto'])}><OrderLabel index={3} order={4}/></View>
        </View>
        <View className={clnx(['flex', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 0 }}>
          <View className={clnx(['margin_auto'])}><OrderLabel index={4} order={0}/></View>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 0 }}>
          <View className={clnx(['margin_auto'])}><OrderLabel index={1} order={0}/></View>
        </View>
        <View className={clnx(['flex', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: -1 }}>
          <View className={clnx(['margin_auto'])}><OrderLabel index={2} order={-1}/></View>
        </View>
        <View className={clnx(['flex', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ order: 1 }}>
          <View className={clnx(['margin_auto'])}><OrderLabel index={3} order={1}/></View>
        </View>
      </View>
    </View>
  </View>
}

Order.options = {
  addGlobalClass: true,
}

export default Order;
