---
order: 6
title: 定制主题
---

Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

![Example](https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png)

Ant Design 的样式使用了 [Less](https://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，[默认样式变量](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/style/themes/default.less)

> Ant Design React 的主题定制文件在 `ng-zorro-antd` 中同样可以使用。

## 使用预定义主题

### 配置非定制主题

在初始化项目时，运行 `ng add ng-zorro-antd` 命令之后，选择不配置自定义主题文件，你的项目则会自动在 `angular.json` 中配置：

```json
{
  "build": {
    "options": {
      "styles": ["./node_modules/ng-zorro-antd/ng-zorro-antd.min.css"]
    }
  }
}
```

当然，你也可以在 `angular.json` 中手动添加该配置。

### 官方主题

除了默认主题外，我们还提供了三种官方主题，欢迎在项目中试用，并且给我们提供反馈。

- 🌑 暗黑主题
- 📦 紧凑主题
- ☁️ 阿里云主题

#### 方式一： Less

在样式文件全量，如 `style.less`，中引入 `ng-zorro-antd.less`、`ng-zorro-antd.dark.less`、`ng-zorro-antd.compact.less` 或 `ng-zorro-antd.aliyun.less` 覆盖主题变量。

```less
// 引入官方提供的默认 less 样式文件
@import '~ng-zorro-antd/ng-zorro-antd.less';

// 引入官方提供的暗黑 less 样式文件
//@import "~ng-zorro-antd/ng-zorro-antd.dark.less";

// 引入官方提供的紧凑 less 样式文件
//@import "~ng-zorro-antd/ng-zorro-antd.compact.less";

// 引入官方提供的阿里云 less 样式文件
//@import "~ng-zorro-antd/ng-zorro-antd.aliyun.less";
```

#### 方式二: CSS

如果项目不使用 Less，可在 CSS 文件或者 `angular.json` 的 `styles` 字段中，全量引入 `ng-zorro-antd.css`、`ng-zorro-antd.dark.css`、`ng-zorro-antd.compact.css` 或者 `ng-zorro-antd.aliyun.css`。

样式文件中：

```css
@import '~ng-zorro-antd/ng-zorro-antd.css';
/*@import "~ng-zorro-antd/ng-zorro-antd.dark.css";*/
/*@import "~ng-zorro-antd/ng-zorro-antd.compact.css";*/
/*@import "~ng-zorro-antd/ng-zorro-antd.aliyun.css";*/
```

`angular.json` 中：

```json
{
  "build": {
    "options": {
      "styles": ["node_modules/ng-zorro-antd/ng-zorro-antd.css"]
    }
  }
}
```

## 修改预定义主题

### 方式一：在 Less 中覆盖主题变量

#### 引入预定义主题文件

在 `src/styles.less` 里引入预定义主题文件 （也可以在初始化项目运行 `ng add ng-zorro-antd` 命令之后，选择配置自定义主题文件）：

```less
// Custom Theming for NG-ZORRO
// For more information: https://ng.ant.design/docs/customize-theme/en
@import '../node_modules/ng-zorro-antd/ng-zorro-antd.less';
```

#### 自定义样式变量

引入官方主题文件之后，再根据实际需求自定义覆盖主题样式变量的参数。例如，在以下样例中通过修改 `@primary-color` 的数值将预定义默认主题的基础色修改为 `#f5222d`：

```less
// -------- 引入官方提供的 less 样式入口文件 -----------
@import '../node_modules/ng-zorro-antd/ng-zorro-antd.less';

// -------- 自定义参数覆盖 -----------
@primary-color: #f5222d;
```

### 方式二：webpack 中覆盖主题变量

#### 覆盖为预定义主题变量

在 webpack 中使用 less-loader 按需引入：

```javascript
const darkThemeVars = require('ng-zorro-antd/dark-theme');
const compactThemeVars = require('ng-zorro-antd/compact-theme');
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          modifyVars: {
            hack: `true;@import "${require.resolve('ng-zorro-antd/style/color/colorPalette.less')}";`,
            ...darkThemeVars,
            ...compactThemeVars
          },
          javascriptEnabled: true
        }
      }
    ]
  }
};
```

#### 覆盖为定制主题变量

Angular CLI 提供了 [custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack) 的 builder，可以通过该 builder 轻松的调整 webpack 中 [less-loader](https://github.com/webpack-contrib/less-loader) 的配置来进行主题配置。

1. 在 `angular.json` 中引入 `ng-zorro-antd.less` 文件

   ```json
   {
     "styles": ["node_modules/ng-zorro-antd/ng-zorro-antd.less"]
   }
   ```

2. 安装 `@angular-builders/custom-webpack` builder

   ```bash
   npm i -D @angular-builders/custom-webpack
   ```

3. 新建 webpack 配置文件 `extra-webpack.config.js`

   ```javascript
   module.exports = {
     module: {
       rules: [
         {
           test: /\.less$/,
           loader: 'less-loader',
           options: {
             modifyVars: {
               // 修改主题变量
               'primary-color': '#1DA57A',
               'link-color': '#1DA57A',
               'border-radius-base': '2px'
             },
             javascriptEnabled: true
           }
         }
       ]
     }
   };
   ```

4. 在 `angular.json` 中配置自定义 builder

   ```diff
     "architect": {
       "build": {
   -     "builder": "@angular-devkit/build-angular:browser",
   +     "builder": "@angular-builders/custom-webpack:browser",
         "options": {
   +        "customWebpackConfig": {
   +          "path": "./extra-webpack.config.js",
   +          "mergeStrategies": {
   +            "module.rules": "append"
   +          },
   +          "replaceDuplicatePlugins": true
   +        }
         },
       },
       "serve": {
   -      "builder": "@angular-devkit/build-angular:dev-server",
   +      "builder": "@angular-builders/custom-webpack:dev-server",
       }
     }
   ```

更多在 Angular CLI 中定制 webpack 的文章可以参考

- [Angular Builder Document](https://www.npmjs.com/package/@angular-builders/custom-webpack)
- [Angular CLI: Custom webpack Config](https://alligator.io/angular/custom-webpack-config/)
- [Customize Webpack Configuration in Your Angular Application](https://netbasal.com/customize-webpack-configuration-in-your-angular-application-d09683f6bd22)

全部可被自定义 less 变量可以参考 [这里](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/style/themes/default.less)。

## 动态切换主题

我们为你准备了一个演示动态切换主题的项目，欢迎前往 [这里](https://github.com/yangjunhan/nz-themes) 查看。

### 配置 angular.json 文件

1. 样式预处理器选项 `stylePreprocessorOptions`

   在`angular.json` 中配置样式预处理器选项 `stylePreprocessorOptions` 并添加路径：

   ```json
   "stylePreprocessorOptions": {
     "includePaths": [
       "src/styles/themes"
     ]
   },
   ```

   于是，在项目组件样式文件里，无需相对路径，`src/styles/themes` 路径下的任意文件定义文件都可以从项目中的任何位置导入，例如：

   ```less
   // A relative path works
   @import 'src/styles/themes/mixin';
   // But now this works as well
   @import 'mixin';
   ```

2. styles 里的 `bundleName` 和 `inject`

   如果需要在项目运行时动态切换主题，你就需要为构建器配置好每个主题的全局上下文样式文件。继续以默认和暗黑主题为例，请在 `angular.json` 的 `styles` 选项数组里进行如下配置：

   ```json
   "styles": [
     "src/styles.less",
     {
       "input": "src/styles/default.less",
       "bundleName": "default",
       "inject": false
     },
     {
       "input": "src/styles/dark.less",
       "bundleName": "dark",
       "inject": false
     }
   ],
   ```

   `bundleName` 指捆绑包的自定义 CSS 文件名称，方便了之后切换主题创建所需的 link 标签的 href 属性。`inject` 默认为 `true`，会将捆绑包注入。为了动态主题切换则需要将主题捆绑包从注入中排除。

### 多主题定制

在多主题项目的情景下，每一个主题都应该创建一个单独的样式入口文件。为了更好管理多主题项目，我们推荐将所有类似的主题定义入口文件放在 `src/styles` 路径下。例如，当你的项目有默认和暗黑主题时，你的项目 styles 可能会是以下结构：

<pre>
  src/styles
  ├── dark.less
  ├── default.less
  └── themes
      ├── base.less
      ├── dark.less
      ├── default.less
      └── mixin.less
</pre>

`src/styles/` 下的主题文件是主题入口文件，它的作用是引入预定义官方 Less 样式入口文件以及 `src/styles/themes/` 下对应的主题样式定制文件。例如，`src/styles/dark.less` 入口文件含有以下代码：

```less
@import '../../node_modules/ng-zorro-antd/ng-zorro-antd';
@import './themes/dark';
```

相应的，`src/styles/themes/dark.less` 文件负责定制暗黑主题的样式：

```less
@import (multiple) '../../../node_modules/ng-zorro-antd/src/style/themes/dark';
@import './base';

@layout-sider-background: @component-background;
@layout-header-background: @component-background;
```

> 当引入对应的预定义主题样式变量文件的时候，会遇到 `.less` 样式文件名跟项目自己的主题样式文件名是一样的情况，这样的话单单使用 `@import '<url>';` 是无法生效的。这种时候， Less 为我们提供了 `@import (multiple) '<url>';` 的 `multiple` 方法来引入这些同名的 `.less` 文件。

注意，如果存在所有主题通用的样式变量，还可以引入一个统一的 `base.less` 基本样式文件并在每个主题样式定制文件中引入它：

```less
// base.less 定制通用样式变量
@margin-md: 17px;
```

### 切换主题

切换主题包括两部分，一是切换项目组件主题，二是切换预定义主题。

#### 切换项目组件主题

Angular 目前默认的模板和 CSS 样式使用的样式封装策略是 `ViewEncapsulation.Emulated`，也就是使用垫片 CSS 来模拟原生行为。根据不同的样式封装策略，Angular 会将项目组件样式以不同方式打包进 JS 文件里。

切换项目组件主题的策略是在定制项目组件样式时，会通过 html 里的代表主题 class 的 `className`，例如 `default` 和 `dark`，以切换打包好的主题。

但是，在每一个项目组件样式文件里根据以下格式写样式会很繁琐：

```less
html {
  &.default {
    @import 'default';
    // 组件样式
    ...;
  }
  &.dark {
    @import 'dark';
    // 组件样式
    ...;
  }
}
```

> 注意，由于已经配置了样式预处理器选项 `stylePreprocessorOptions` 里的路径 `src/styles/themes`，这里的 `@import` 不需要完整的相对路径。

更好的实现方式是，在上文提到的 `mixin.less` 中定义一个 Mixin `.themeMixin(@rules)`：

```less
.themeMixin(@rules) {
  html {
    &.default {
      @import './default.less';
      @rules();
    }
    &.dark {
      @import './dark.less';
      @rules();
    }
  }
}
```

并在所有的项目组件样式文件里，只需要将所有样式传入 `.themeMixin(@rules)` 里即可：

```less
@import 'mixin'; // 同样的，不需要完整的相对路径

.themeMixin({
  :host {
    // 组件样式
    ...
  }
});
```

#### 切换预定义主题

切换预定义主题样式文件则是需要动态创建 `link` 标签，将样式文件动态加载在应用中，并移除上个主题的 `link` 标签。

```ts
private loadCss(href: string, id: string): Promise<Event> {
  return new Promise((resolve, reject) => {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = href;
    style.id = id;
    style.onload = resolve;
    style.onerror = reject;
    document.head.append(style);
  });
}

```

这里的 `href` 将指代上文配置的[捆绑包](/docs/customize-theme/zh#配置-angular-json-文件)的路径，也就是 `bundleName`的路径。

#### 同步两种主题切换

项目组件样式会被打包进 js 文件，因此在切换 html 的 `className` 的时候主题样式会立即生效。另一方面，动态地加载 CSS 预定义主题文件却是需要时间完成的。如果两个操作同时进行，页面则会出现一部分是立即生效的项目组件样式，另一部分是切换主题加载之前的样式。因此，整个切换主题 `className` 操作需要包裹在 `Promise` 里等待 CSS 文件加载完成后才执行。

```ts
private removeUnusedTheme(theme: ThemeType): void {
  document.documentElement.classList.remove(theme);
  const removedThemeStyle = document.getElementById(theme);
  if (removedThemeStyle) {
    document.head.removeChild(removedThemeStyle);
  }
}

loadTheme(firstLoad = true): Promise<Event> {
  const theme = this.currentTheme;
  if (firstLoad) {
    document.documentElement.classList.add(theme);
  }
  this.loadCss(`${theme}.css`, theme).then(
    e => {
      if (!firstLoad) {
        document.documentElement.classList.add(theme);
      }
      this.removeUnusedTheme(this.previousTheme);
      resolve(e);
    },
    e => reject(e)
  );
}
```

注意：第一次加载首先需要先将用户默认的项目组件主题加入 html 里，而不是包进 Promise 里，否则开始有一段时间会出现没有主题 `className` 的情况。

## Q&A