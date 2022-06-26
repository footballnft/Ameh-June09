import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://contact.amehswap.com',
        isHighlighted: true,
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: '—',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
  {
    label: t(''),
    items: [
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
  {
    label: t(''),
    items: [
      {
        label: '',
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
]
