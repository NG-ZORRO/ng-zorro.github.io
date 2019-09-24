"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var sitemap = require("sitemap");
var static_paths_1 = require("./static.paths");
var build_config_1 = require("../build-config");
function generateUrls(lang) {
    var urls = Array.from(new Set(static_paths_1.ROUTES.filter(function (r) { return r !== '/'; }).map(function (r) { return r.replace(/\/(zh|en)$/, ''); })));
    return urls.map(function (r) {
        return {
            url: r + "/" + lang,
            changefreq: sitemap.EnumChangefreq.WEEKLY,
            priority: r.includes('docs') ? 0.5 : 0.8,
            links: [{ lang: 'en', url: r + "/en" }, { lang: 'zh', url: r + "/zh" }]
        };
    });
}
var sitemapInstance = sitemap.createSitemap({
    hostname: 'https://ng.ant.design',
    cacheTime: 600000,
    urls: [
        { url: '/', changefreq: sitemap.EnumChangefreq.WEEKLY, priority: 0.5, lastmodrealtime: true }
    ].concat(generateUrls('en'), generateUrls('zh'))
});
fs_1.writeFileSync(path_1.join(build_config_1.buildConfig.outputDir, 'sitemap.xml'), sitemapInstance.toString(true));
//# sourceMappingURL=sitemap.js.map