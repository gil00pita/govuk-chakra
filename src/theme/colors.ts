const govUKPalette = {
  common: {
    white: { value: '#ffffff' }, // body-background-colour
    black: { value: '#000000' }, // print-text-colour
  },
  brand: {
    50: { value: '#f4f8fb' }, // template-background-colour, surface-background-colour
    100: { value: '#d2e2f1' }, // tag-blue
    200: { value: '#8eb8dc' }, // surface-border-colour
    300: { value: '#5694ca' },
    400: { value: '#3d7ebc' },
    500: { value: '#1d70b8' }, // brand-colour,
    600: { value: '#1a65a6' }, // link-colour
    700: { value: '#0e4d88' }, // link-hover-colour
    800: { value: '#0f385c' },
    900: { value: '#052c53' },
    950: { value: '#021c37' },
  },
  brown: {
    50: { value: '#faf8f6' },
    100: { value: '#e7ddd3' },
    200: { value: '#ccb8a5' },
    300: { value: '#c4a78b' },
    400: { value: '#b39477' },
    500: { value: '#99704a' },
    600: { value: '#8f6845' },
    700: { value: '#84603f' },
    800: { value: '#6a4c31' },
    900: { value: '#563d27' },
    950: { value: '#442f1d' },
  },
  yellow: {
    50: { value: '#fffdf2' },
    100: { value: '#fff8cc' },
    200: { value: '#ffee80' }, // tag-yellow
    300: { value: '#ffe640' },
    400: { value: '#ffe22c' },
    500: { value: '#ffdd00' }, // focus-colour
    600: { value: '#c7ab00' },
    700: { value: '#aa9200' },
    800: { value: '#8d7900' },
    900: { value: '#695a00' },
    950: { value: '#534700' },
  },
  teal: {
    50: { value: '#f3f9f9' },
    100: { value: '#d0e6e7' }, // tag-teal
    200: { value: '#8ac0c3' },
    300: { value: '#50a1a5' },
    400: { value: '#3b9297' },
    500: { value: '#158187' },
    600: { value: '#137278' },
    700: { value: '#106165' },
    800: { value: '#0b4144' },
    900: { value: '#073437' },
    950: { value: '#04282a' },
  },
  red: {
    50: { value: '#fcf5f5' },
    100: { value: '#f4d7d7' }, // tag-red
    200: { value: '#e59a9a' },
    300: { value: '#d76868' },
    400: { value: '#d15353' },
    500: { value: '#ca3535' }, // error-colour
    600: { value: '#b32f2f' },
    700: { value: '#982828' },
    800: { value: '#651b1b' },
    900: { value: '#521414' },
    950: { value: '#400e0e' },
  },
  green: {
    50: { value: '#f3f9f7' },
    100: { value: '#cfe7de' }, // tag-green closest to #cfe4dc
    200: { value: '#88c3ad' },
    300: { value: '#4da583' },
    400: { value: '#389771' },
    500: { value: '#0f7a52' }, // success-colour
    600: { value: '#0f7850' },
    700: { value: '#105840' },
    800: { value: '#09442d' },
    900: { value: '#063723' },
    950: { value: '#042a1a' },
  },
  grey: {
    50: { value: '#f3f3f3' }, // lightGrey, secondary-bg-color
    100: { value: '#cecece' }, // border-colour, hover-colour, tag-grey
    200: { value: '#858686' },
    300: { value: '#6c6d6d' },
    400: { value: '#484949' }, // secondary-text-colour
    500: { value: '#434444' },
    800: { value: '#262626' },
    600: { value: '#3d3e3e' },
    700: { value: '#303030' },
    900: { value: '#191b1b' },
    950: { value: '#0b0c0c' }, // focus-text-colour, link-active-colour, text-colour, surface-text-colour
  },
  orange: {
    50: { value: '#fcf0f2' },
    100: { value: '#fde4d7' }, // tag-orange
    200: { value: '#fabb9c' },
    300: { value: '#f7996a' },
    400: { value: '#f68955' },
    500: { value: '#f47738' },
    600: { value: '#f35a10' },
    700: { value: '#d14909' },
    800: { value: '#ab3906' },
    900: { value: '#842b04' },
    950: { value: '#752503' },
  },
  magenta: {
    50: { value: '#fcf5f8' },
    100: { value: '#f4d7e5' }, // tag-magenta
    200: { value: '#e59abe' },
    300: { value: '#d7689d' },
    400: { value: '#d1538e' },
    500: { value: '#ca357c' },
    600: { value: '#b32f6e' },
    700: { value: '#98285d' },
    800: { value: '#651b3e' },
    900: { value: '#521432' },
    950: { value: '#400e26' },
  },
  purple: {
    50: { value: '#f6f5fa' },
    100: { value: '#ddd6ec' }, // tag-purple
    200: { value: '#aa98cf' },
    300: { value: '#7f65b7' },
    400: { value: '#6c50ac' },
    500: { value: '#54319f' }, // link-visited-colour
    600: { value: '#4a2b8d' },
    700: { value: '#3f2577' },
    800: { value: '#2a1950' },
    900: { value: '#211341' },
    950: { value: '#180d32' },
  },
  voodoo: {
    50: { value: '#F7F2F6' },
    100: { value: '#E5D5E1' },
    200: { value: '#C4A9C0' },
    300: { value: '#9E7A98' },
    400: { value: '#77516F' },
    500: { value: '#532A45' },
    600: { value: '#47223B' },
    700: { value: '#391A2E' },
    800: { value: '#2A1221' },
    900: { value: '#1C0B15' },
    950: { value: '#12060D' },
  },
} as const

const scale = <T extends Record<string, { value: string }>>(palette: T) =>
  Object.fromEntries(Object.entries(palette).map(([k, v]) => [k, { value: v.value }]))

export const colors = {
  common: {
    white: { value: govUKPalette.common.white.value },
    black: { value: govUKPalette.common.black.value },
    transparent: { value: 'transparent' },
  },
  govuk: {
    blue: { value: govUKPalette.brand[500].value },
    darkBlue: { value: govUKPalette.brand[700].value },
    white: { value: govUKPalette.common.white.value },
    text: { value: govUKPalette.grey[950].value },
    secondaryText: { value: govUKPalette.grey[400].value },
    border: { value: govUKPalette.grey[100].value },
    lightGrey: { value: govUKPalette.grey[50].value },
    link: { value: govUKPalette.brand[600].value },
    linkHover: { value: govUKPalette.brand[700].value },
    linkVisited: { value: govUKPalette.purple[500].value },
    linkActive: { value: govUKPalette.grey[950].value },
    focusYellow: { value: govUKPalette.yellow[500].value },
    focusText: { value: govUKPalette.grey[950].value },
    red: { value: govUKPalette.red[500].value },
    green: { value: govUKPalette.green[500].value },
  },
  brand: scale(govUKPalette.brand),
  blue: scale(govUKPalette.brand),
  primary: scale(govUKPalette.brand),
  brown: scale(govUKPalette.brown),
  yellow: scale(govUKPalette.yellow),
  teal: scale(govUKPalette.teal),
  red: scale(govUKPalette.red),
  green: scale(govUKPalette.green),
  grey: scale(govUKPalette.grey),
  gray: scale(govUKPalette.grey),
  orange: scale(govUKPalette.orange),
  magenta: scale(govUKPalette.magenta),
  purple: scale(govUKPalette.purple),
  voodoo: scale(govUKPalette.voodoo),
  dot: {
    magenta: { value: '#ba49ff' },
    red: { value: '#fd5d5d' },
    teal: { value: '#01fee2' },
  },
} as const
