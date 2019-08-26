"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var sitemap = require("sitemap");
var static_paths_1 = require("./static.paths");
var build_config_1 = require("../build-config");
var urls = Array.from(new Set(static_paths_1.ROUTES.filter(function (r) { return r !== '/'; }).map(function (r) { return r.replace(/\/(zh|en)$/, ''); }))).map(function (r) {
    return {
        url: r + "/en",
        changefreq: 'weekly',
        priority: r.includes('docs') ? 0.5 : 0.8,
        links: [{ lang: 'en', url: r + "/en" }, { lang: 'zh', url: r + "/zh" }]
    };
}
// tslint:disable-next-line:no-any
);
var sitemapInstance = sitemap.createSitemap({
    hostname: 'https://ng.ant.design',
    cacheTime: 600000,
    urls: [{ url: '/', changefreq: 'weekly', priority: 0.5, lastmodrealtime: true }].concat(urls)
});
fs_1.writeFileSync(path_1.join(build_config_1.buildConfig.outputDir, 'sitemap.xml'), sitemapInstance.toString());
//# sourceMappingURL=sitemap.js.map