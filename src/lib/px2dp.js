/**
 * @summary 屏幕适配
 * @author linlei
 * Created at     : 2018-06-10
 */
import {Dimensions} from 'react-native'
const basePixelWidth = 375;
const basePixelHeight = 667;
const scale = Math.min(Dimensions.get('window').height  / basePixelHeight, Dimensions.get('window').width / basePixelWidth); 

const px2dp  = (px) => {
    px = Math.round(px * scale + 0.5);
    return px;
}
export {px2dp}