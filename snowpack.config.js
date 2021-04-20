// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/', static: true },
  },
  plugins: [
    ['snowpack-plugin-posthtml', {
      root: './src/',
      encoding: 'utf-8'
    }]
  ],
}