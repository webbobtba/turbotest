// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/', static: true },
  },
  buildOptions: {
    baseUrl: '/turbotest',
    out: './docs',
  },
  plugins: [
    ['snowpack-plugin-posthtml', {
      root: './src/',
      encoding: 'utf-8'
    }]
  ],
}