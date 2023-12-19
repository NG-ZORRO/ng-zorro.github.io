"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var BUILD_CONFIG_FILENAME = 'build-config.js';
function findBuildConfig() {
    var currentDir = process.cwd();
    while (!fs_1.existsSync(path_1.resolve(currentDir, BUILD_CONFIG_FILENAME))) {
        currentDir = path_1.dirname(currentDir);
    }
    return path_1.join(currentDir, BUILD_CONFIG_FILENAME);
}
exports.findBuildConfig = findBuildConfig;
var buildConfigPath = findBuildConfig();
exports.buildConfig = require(buildConfigPath);
//# sourceMappingURL=build-config.js.map