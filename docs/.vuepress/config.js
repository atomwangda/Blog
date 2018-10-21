let theme = require('./theme.config');
//将对象赋值给模块（浅拷贝即可）
module.exports = {
    base: '/Blog/dist',
    title: 'WangDa的知识库',
    description: '你的工作帮手',
    head: [
        ['link', { rel: 'icon', href: '/hero.png' }],
    ],
    // host: 'localhost',
    port: 8848,
    dest: 'dist',
    themeConfig: theme,
    serviceWorker: {
        updatePopup: {
            message: '页面有新的内容，点击”刷新“按钮可查看',
            buttonText: '刷新'
        }
    },
    markdown: {
        lineNumbers: true
    }

};