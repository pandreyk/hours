const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      assets: resolvePath('./src/assets'),
      components: resolvePath('./src/components'),
      connectors: resolvePath('./src/connectors'),
      config: resolvePath('./src/config'),
      containers: resolvePath('./src/containers'),
      contexts: resolvePath('./src/contexts'),
      documents: resolvePath('./src/documents'),
      helpers: resolvePath('./src/helpers'),
      hooks: resolvePath('./src/hooks'),
      i18n: resolvePath('./src/i18n'),
      icons: resolvePath('./src/icons'),
      libs: resolvePath('./src/libs'),
      pages: resolvePath('./src/pages'),
      styles: resolvePath('./src/styles'),
      constants: resolvePath('./src/constants'),
      services: resolvePath('./src/services')
    }
  }
}
