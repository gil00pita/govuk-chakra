import { createElement, type ElementType, useEffect, useState } from 'react'
import type { IconBaseProps, IconType } from 'react-icons'

type ReactIconModule = Record<string, unknown>
type ReactIconModuleLoader = () => Promise<ReactIconModule>

type ReactIconLibraryKey =
  | 'ai'
  | 'bi'
  | 'bs'
  | 'cg'
  | 'ci'
  | 'di'
  | 'fa'
  | 'fa6'
  | 'fc'
  | 'fi'
  | 'gi'
  | 'go'
  | 'gr'
  | 'hi'
  | 'hi2'
  | 'im'
  | 'io'
  | 'io5'
  | 'lia'
  | 'lu'
  | 'md'
  | 'pi'
  | 'ri'
  | 'rx'
  | 'si'
  | 'sl'
  | 'tb'
  | 'tfi'
  | 'ti'
  | 'vsc'
  | 'wi'

type ReactIconLibraryPath =
  | 'react-icons/ai'
  | 'react-icons/bi'
  | 'react-icons/bs'
  | 'react-icons/cg'
  | 'react-icons/ci'
  | 'react-icons/di'
  | 'react-icons/fa'
  | 'react-icons/fa6'
  | 'react-icons/fc'
  | 'react-icons/fi'
  | 'react-icons/gi'
  | 'react-icons/go'
  | 'react-icons/gr'
  | 'react-icons/hi'
  | 'react-icons/hi2'
  | 'react-icons/im'
  | 'react-icons/io'
  | 'react-icons/io5'
  | 'react-icons/lia'
  | 'react-icons/lu'
  | 'react-icons/md'
  | 'react-icons/pi'
  | 'react-icons/ri'
  | 'react-icons/rx'
  | 'react-icons/si'
  | 'react-icons/sl'
  | 'react-icons/tb'
  | 'react-icons/tfi'
  | 'react-icons/ti'
  | 'react-icons/vsc'
  | 'react-icons/wi'

export type ReactIconLibrary = ReactIconLibraryKey | ReactIconLibraryPath

const reactIconLibraryLoaders: Record<ReactIconLibrary, ReactIconModuleLoader> = {
  ai: () => import('react-icons/ai'),
  bi: () => import('react-icons/bi'),
  bs: () => import('react-icons/bs'),
  cg: () => import('react-icons/cg'),
  ci: () => import('react-icons/ci'),
  di: () => import('react-icons/di'),
  fa: () => import('react-icons/fa'),
  fa6: () => import('react-icons/fa6'),
  fc: () => import('react-icons/fc'),
  fi: () => import('react-icons/fi'),
  gi: () => import('react-icons/gi'),
  go: () => import('react-icons/go'),
  gr: () => import('react-icons/gr'),
  hi: () => import('react-icons/hi'),
  hi2: () => import('react-icons/hi2'),
  im: () => import('react-icons/im'),
  io: () => import('react-icons/io'),
  io5: () => import('react-icons/io5'),
  lia: () => import('react-icons/lia'),
  lu: () => import('react-icons/lu'),
  md: () => import('react-icons/md'),
  pi: () => import('react-icons/pi'),
  ri: () => import('react-icons/ri'),
  rx: () => import('react-icons/rx'),
  si: () => import('react-icons/si'),
  sl: () => import('react-icons/sl'),
  tb: () => import('react-icons/tb'),
  tfi: () => import('react-icons/tfi'),
  ti: () => import('react-icons/ti'),
  vsc: () => import('react-icons/vsc'),
  wi: () => import('react-icons/wi'),
  'react-icons/ai': () => import('react-icons/ai'),
  'react-icons/bi': () => import('react-icons/bi'),
  'react-icons/bs': () => import('react-icons/bs'),
  'react-icons/cg': () => import('react-icons/cg'),
  'react-icons/ci': () => import('react-icons/ci'),
  'react-icons/di': () => import('react-icons/di'),
  'react-icons/fa': () => import('react-icons/fa'),
  'react-icons/fa6': () => import('react-icons/fa6'),
  'react-icons/fc': () => import('react-icons/fc'),
  'react-icons/fi': () => import('react-icons/fi'),
  'react-icons/gi': () => import('react-icons/gi'),
  'react-icons/go': () => import('react-icons/go'),
  'react-icons/gr': () => import('react-icons/gr'),
  'react-icons/hi': () => import('react-icons/hi'),
  'react-icons/hi2': () => import('react-icons/hi2'),
  'react-icons/im': () => import('react-icons/im'),
  'react-icons/io': () => import('react-icons/io'),
  'react-icons/io5': () => import('react-icons/io5'),
  'react-icons/lia': () => import('react-icons/lia'),
  'react-icons/lu': () => import('react-icons/lu'),
  'react-icons/md': () => import('react-icons/md'),
  'react-icons/pi': () => import('react-icons/pi'),
  'react-icons/ri': () => import('react-icons/ri'),
  'react-icons/rx': () => import('react-icons/rx'),
  'react-icons/si': () => import('react-icons/si'),
  'react-icons/sl': () => import('react-icons/sl'),
  'react-icons/tb': () => import('react-icons/tb'),
  'react-icons/tfi': () => import('react-icons/tfi'),
  'react-icons/ti': () => import('react-icons/ti'),
  'react-icons/vsc': () => import('react-icons/vsc'),
  'react-icons/wi': () => import('react-icons/wi'),
}
export type DynamicReactIconFallback = ElementType<IconBaseProps>

export interface DynamicReactIconProps extends IconBaseProps {
  fallback?: DynamicReactIconFallback | null
  iconName: string
  lib: ReactIconLibrary
}

function isReactIcon(component: unknown): component is IconType {
  return typeof component === 'function'
}

function normalizeReactIconModule(module: ReactIconModule) {
  return module as Record<string, unknown>
}

export async function loadReactIcon(iconName: string, lib: ReactIconLibrary) {
  const loadModule = reactIconLibraryLoaders[lib]

  if (!loadModule) {
    return null
  }

  const iconModule = normalizeReactIconModule(await loadModule())
  const icon = iconModule[iconName]

  return isReactIcon(icon) ? icon : null
}

export function DynamicReactIcon({ fallback, iconName, lib, ...props }: DynamicReactIconProps) {
  const [icon, setIcon] = useState<IconType | null>(null)

  useEffect(() => {
    let active = true

    void loadReactIcon(iconName, lib).then((loadedIcon) => {
      if (active) {
        setIcon(() => loadedIcon)
      }
    })

    return () => {
      active = false
    }
  }, [iconName, lib])

  if (icon) {
    const LoadedIcon = icon
    return createElement(LoadedIcon, props)
  }

  if (fallback) {
    const FallbackIcon = fallback
    return createElement(FallbackIcon, props)
  }

  return null
}

export const reactIconLibraries = Object.freeze(
  Object.keys(reactIconLibraryLoaders)
) as readonly ReactIconLibrary[]
