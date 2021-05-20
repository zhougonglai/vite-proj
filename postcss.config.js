module.exports = {
  postcss: true,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      selectorBlackList: [/^weui-$/],
      minPixelValue: 50
    },
  },
}
