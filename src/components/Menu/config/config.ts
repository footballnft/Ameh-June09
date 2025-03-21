import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('BuyCrypto'),
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    href: '/Buy',
    showItemsOnMobile: false,
    items: [
      {
        label: t('BuyCrypto'),
        href: '/Buy',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
  {
    label: t('Trade'),
    href: '/swap',
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Limit'),
        href: '/limit-orders',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      {
        label: t('Perpetual'),
        href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT`,
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  /*
  {
    label: t('Win'),
    href: '/prediction',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [
      {
        label: t('Trading Competition'),
        href: '/competition',
        hideSubNav: true,
      },
      {
        label: t('Prediction (BETA)'),
        href: '/prediction',
      },
      {
        label: t('Lottery'),
        href: '/lottery',
      },
    ],
  },
  */
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
      {
        label: t('Activity'),
        href: `${nftsBaseUrl}/activity`,
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        // label: t('IFO'),
        // href: '/ifo',
      },
      {
        // label: t('Voting'),
        // href: '/voting',
      },
      {
        // type: DropdownMenuItemType.DIVIDER,
      },
      {
        // label: t('Leaderboard'),
        // href: '/teams',
      },
      {
        // type: DropdownMenuItemType.DIVIDER,
      },
      {
        // label: t('Blog'),
        // href: 'https://medium.com/pancakeswap',
        // type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        // label: t('Docs'),
        // href: 'https://docs.pancakeswap.finance',
        // type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
