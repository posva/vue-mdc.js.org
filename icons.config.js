const sizes = {
  apple: ['57x57', '60x60', '72x72', '76x76', '114x114', '120x120', '144x144', '152x152', '180x180'],
  favs: ['16x16', '32x32']
}

const appleIcons = sizes.apple.map(s => ({
  rel: 'apple-touch-icon',
  sizes: s,
  href: `/icons/apple-touch-icon-${s}.png`
}))

const favicons = sizes.favs.map(s => ({
  rel: 'icon',
  type: 'image/png',
  sizes: s,
  href: `/icons/favicon-${s}.png`
}))

module.exports = [
  { rel: 'shortcut icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
  { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-chrome-192x192.png' },
  ...appleIcons,
  ...favicons
]
