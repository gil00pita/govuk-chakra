import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

import { colors } from '../src/theme/colors'
import { fonts } from '../src/theme/fonts'

addons.setConfig({
  theme: create({
    base: 'light',
    appBg: colors.common.white.value,
    appContentBg: colors.common.white.value,
    appPreviewBg: colors.common.white.value,
    barBg: colors.common.white.value,
    barTextColor: colors.grey[950].value,
    barSelectedColor: colors.blue[700].value,
    colorPrimary: colors.blue[700].value,
    colorSecondary: colors.blue[700].value,
    fontBase: fonts.body.value,
    fontCode: fonts.mono.value,
    fontSize: 16,
    inputBg: colors.grey[50].value,
    inputBorder: colors.grey[100].value,
    inputTextColor: colors.grey[950].value,
    textColor: colors.grey[950].value,
  }),
})
