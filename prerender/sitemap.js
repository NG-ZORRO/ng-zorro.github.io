"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var sitemap = require("sitemap");
var static_paths_1 = require("./static.paths");
var build_config_1 = require("../build-config");
var priorityMap = {
    '/docs/introduce/en': 1,
    '/docs/getting-started/en': 0.9,
    '/docs/schematics/en': 0.8,
    '/docs/i18n/en': 0.8,
    '/docs/faq/en': 0.7,
    '/docs/changelog/en': 0.7
};
function generateUrls(lang) {
    var urls = Array.from(new Set(static_paths_1.ROUTES.filter(function (r) { return r !== '/'; }).map(function (r) { return r.replace(/\/(zh|en)$/, ''); })));
    return urls.map(function (r) {
        var url = r + "/" + lang;
        return {
            url: url,
            changefreq: sitemap.EnumChangefreq.WEEKLY,
            priority: priorityMap[url] || 0.5,
            links: [{ lang: 'en', url: r + "/en" }, { lang: 'zh', url: r + "/zh" }]
        };
    });
}
var sitemapInstance = sitemap.createSitemap({
    hostname: 'https://ng.ant.design',
    cacheTime: 600000,
    urls: __spreadArrays([
        { url: '/', changefreq: sitemap.EnumChangefreq.WEEKLY, priority: 0.5, lastmodrealtime: true }
    ], generateUrls('en'), generateUrls('zh'))
});
fs_1.writeFileSync(path_1.join(build_config_1.buildConfig.outputDir, 'sitemap.xml'), sitemapInstance.toString(true));
//# sourceMappingURL=sitemap.js.map