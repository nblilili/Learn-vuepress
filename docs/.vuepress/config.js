const sidebarConf = require('./config/sidebarConf.js');
const navConf = require('./config/navConf.js');
const algoliaConf = require('./config/algoliaConf.js');

const sidebarUtil = require('./utils/sidebarUtil');
const tagsUtil = require('./utils/tagsUtil');
const navUtil = require('./utils/navUtil.js');
const sidebarSelectUtil = require('./utils/sidebarSelectUtil.js');
const base = '/'

module.exports = {
	locales: {
		'/cn/': {
			lang: 'cn',
			title: '菊风云平台',
			description: '菊风云平台'
		},
		'/en/': {
			lang: 'en',
			title: 'Juphoon Cloud Platform',
			description: 'Juphoon Cloud Platform'
		},
	},
	plugins: [
		['vuepress-plugin-baidu-autopush', {}],
		['sitemap', { hostname: 'https://developer.juphoon.com' }],
		['vuepress-plugin-code-copy', true]
	],
	host: "0.0.0.0",
	base: base,
	devServer: {
		proxy: {
			"/portal/cn/message": "http://developer.juphoon.com:8088"
		}
	},
	head: [
		['link', {
			rel: 'shortcut icon',
			type: "image/x-icon",
			href: `https://developer.juphoon.com/style/images/favicon.ico`
		}],
		['meta', {
			name: 'keywords', content: ['视频通话sdk', '语音通话sdk', '互动直播sdk', '视频聊天sdk', '实时音视频sdk', '音视频sdk', '实时视频sdk', '实时语音sdk', '一对一视频sdk', '多方视频通话sdk', '视频api', '语音api', '直播互动课堂', '互动课堂解决方案']
		}],
		['script', { type: 'text/javascript', src: 'https://hm.baidu.com/hm.js?987f810a49ad7c3ef50b75f613b8b43e' }]
	],
	themeConfig: {
		locales: {
			'/cn/': {
				selectText: '选择语言',
				label: '简体中文',
				editLinkText: '在 GitHub 上编辑此页',
				serviceWorker: {
					updatePopup: {
						message: "发现新内容可用.",
						buttonText: "刷新"
					}
				},
				// 当前 locale 的 algolia docsearch 选项
				algolia: algoliaConf,
				nav: navUtil.getNavConf('cn'),
				sidebarSelect: sidebarSelectUtil.getSidebarSelectConf('cn'),
				sidebar: sidebarUtil.getSidebarConf('docs/cn/'),
				tagConfig: tagsUtil.getTagsConf('docs/cn/')
			},
			'/en/': {
				selectText: 'Languages',
				label: 'English',
				editLinkText: 'Edit this page on GitHub',
				serviceWorker: {
					updatePopup: {
						message: "New content is available",
						buttonText: "Refresh"
					}
				},
				algolia: algoliaConf,
				// algolia: {
				//   apiKey: 'd02d64058b08646fc04cf361671ec59c',
				//   indexName: 'juphoon'
				// },
				// algolia: {
				//   apiKey: '48aefdd5edf4e5a94a5ffee6f59e5271',
				//   indexName: 'juphoon_developer'
				// },
				nav: navUtil.getNavConf('en'),
				sidebarSelect: sidebarSelectUtil.getSidebarSelectConf('en'),
				sidebar: sidebarUtil.getSidebarConf('docs/en/'),
				tagConfig: tagsUtil.getTagsConf('docs/en/')
			}
		}
	},
	siteConfig: {
		title: "菊风云平台"
	}
}