const customSemusingsPlugin = require('./semusings-plugin')

module.exports = {
    engine: ({marp}) => marp
        .use(require('@kazumatu981/markdown-it-kroki'), {entrypoint: "https://kroki.io"})
        .use(customSemusingsPlugin)
}