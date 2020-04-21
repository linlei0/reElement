import i18n from 'react-native-i18n'
import zh from './zh-CN/index'
import en from './en/index'

// console.log(i18n)
// 设置默认语言
// 设置方法
// i18n.locale = 'en'

i18n.fallbacks = true
i18n.defaultLocale = 'zh'
i18n.locale = 'zh'
i18n.translations = {
  zh,
  en
}

export default i18n;

