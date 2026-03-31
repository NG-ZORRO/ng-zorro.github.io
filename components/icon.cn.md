---
category: Components
subtitle: 图标
type: 通用
title: Icon
hasPageDemo: true
cover: 'https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg'
description: 语义化的矢量图形。
---

## 图标列表

新版图标可能略有缺失，我们将与 [Ant Design](https://ant.design/components/icon-cn/) 同步保持图标的更新。

## API

### nz-icon, [nz-icon]

| 参数               | 说明                                                         | 类型                           | 默认值      | 支持全局配置 |
| ------------------ | ------------------------------------------------------------ | ------------------------------ | ----------- | ------------ |
| `[nzType]`         | 图标类型，遵循图标的命名规范                                 | string                         | -           | -            |
| `[nzTheme]`        | 图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标 | `'fill'丨'outline'丨'twotone'` | `'outline'` | ✅           |
| `[nzSpin]`         | 是否有旋转动画                                               | `boolean`                      | `false`     | -            |
| `[nzTwotoneColor]` | 双色图标的主要颜色，默认为 Ant Design 蓝色                   | `string (十六进制颜色)`        | -           | ✅           |
| `[nzIconfont]`     | 指定来自 IconFont 的图标类型                                 | string                         | -           | -            |
| `[nzRotate]`       | 图标旋转角度                                                 | `number`                       | -           | -            |

### NzIconService

| 方法                   | 说明                                                                               | 参数                     |
| ---------------------- | ---------------------------------------------------------------------------------- | ------------------------ |
| `addIcon()`            | 用于静态引入图标，可传入多个值（或者用数组解构赋值）                               | `IconDefinition`         |
| `addIconLiteral()`     | 用于静态引入用户自定义图标                                                         | `string`, `string (SVG)` |
| `fetchFromIconfont()`  | 用于从 IconFont 获取图标资源文件                                                   | `NzIconfontOption`       |
| `changeAssetsSource()` | 用于修改动态加载图标的资源前缀，使得你可以部署图标资源到你想要的任何位置，例如 CDN | `string`                 |

### SVG 图标

NG-ZORRO 采用 svg 图标，带来了以下优势：

- 支持多色图标。
- 在低端设备上 SVG 有更好的清晰度。
- 对于内建图标的更换可以提供更多 API，而无需样式覆盖。

你可以使用 `nz-icon` 组件，传入 `theme` 以明确图标的主题风格，例如：

```html
<nz-icon nzType="star" nzTheme="fill" />
```

### 静态加载与动态加载

对于 Ant Design 提供的图标，我们提供了两种方式来加载图标资源文件。

**静态加载**，可以在 `app.config.ts` 中使用 `provideNzIcons` 引入你需要的图标（推荐）或者是全部的图标，例如：

```typescript
import { IconDefinition } from '@ant-design/icons-angular';
import { provideNzIcons } from 'ng-zorro-antd/icon';

// 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

// 引入全部的图标，不推荐 ❌
// import * as AllIcons from '@ant-design/icons-angular/icons';

// const antDesignIcons = AllIcons as Record<string, IconDefinition>;
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

export const appConfig: ApplicationConfig = {
  providers: [provideNzIcons(icons)]
};
```

本质上是调用了 `NzIconService` 的 `addIcon` 方法，引入后的文件会被打包到 `.js` 文件中。
静态引入会增加包体积，所以我们建议尽可能地使用动态加载，如果要静态加载，也仅仅加载你需要用到的图标。

> 为了加快渲染速度，NG-ZORRO 本身用到的图标是静态引入的。官网的图标是动态引入的。

**动态加载**，这是为了减少包体积而提供的方式。当 NG-ZORRO 检测用户想要渲染的图标还没有静态引入时，会发起 HTTP 请求动态引入。
你只需要配置 `angular.json` 文件：

```json
{
  "assets": [
    {
      "glob": "**/*",
      "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
      "output": "/assets/"
    }
  ]
}
```

你可以通过 `NzIconService` 的 `changeAssetsSource()` 方法来修改图标资源的位置，这样你就可以部署这些资源到 CDN 上。你的参数会被直接添加到 `assets/` 的前面。

例如，你在 `https://mycdn.somecdn.com/icons/assets` 目录下部署了静态资源文件，则可以通过调用 `changeAssetsSource('https://mycdn.somecdn.com/icons')`，来告诉 NG-ZORRO 从这个位置动态加载图标资源。

### 在子模块中补充图标

有时候，为了避免增大 `main.js` 的体积，你可能想要在懒加载的组件中或路由的 `providers` 中使用 `provideNzIconsPatch` 来补充图标

```typescript
import { NzIconModule, provideNzIconsPatch } from 'ng-zorro-antd/icon';

// 在 xxx.component.ts 中
@Component({
  imports: [NzIconModule],
  providers: [provideNzIconsPatch([QuestionOutline])]
})
class ChildComponent {}

// 或 在 xxx.routes.ts 中
const routes: Routes = [
  {
    path: '',
    providers: [provideNzIconsPatch([QuestionOutline])]
  }
];
```

这样，当 QuestionOutline 图标加载之后，整个应用都能够使用它。

### 双色图标主色

对于双色图标，可以通过提供全局配置 `{ nzIcon: { nzTwotoneColor: 'xxx' } }` 或 `NzConfigService` 的对应方法修改来全局设置图标主色。

### 自定义 font 图标

我们提供了 `fetchFromIconfont` 方法，方便开发者调用在 [iconfont.cn](http://iconfont.cn/) 上自行管理的图标。

```typescript
this._iconService.fetchFromIconfont({
  scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});
```

```html
<nz-icon nzIconfont="icon-tuichu" />
```

其本质上是创建了一个使用 `<use>` 标签渲染图标的组件。

`options` 的配置项如下：

| 参数        | 说明                                                                                           | 类型   | 默认值 |
| ----------- | ---------------------------------------------------------------------------------------------- | ------ | ------ |
| `scriptUrl` | [iconfont.cn](http://iconfont.cn/) 项目在线生成的 `js` 地址，在 `namespace` 也设置的情况下有效 | string | -      |

在 `scriptUrl` 都设置有效的情况下，组件在渲染前会自动引入 [iconfont.cn](http://iconfont.cn/) 项目中的图标符号集，无需手动引入。

见 [iconfont.cn 使用帮助](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code) 查看如何生成 js 地址。

### 命名空间

用户可以使用该功能方便地添加自己的图标。在渲染自定义图标时，只需要将 `type` 指定为 `namespace:name` 的形式，`nz-icon` 组件就会在用户自行添加的图标中进行检索并渲染。同时支持静态和动态引入。

静态引入，只需要调用 `NzIconService` 的 `addIconLiteral` 方法即可。

动态引入，只需要保证 SVG 资源文件放到了相应的目录，即 `assets/${namespace}`。
例如你在 `zoo` 命名空间下有一个 `panda` 图标，你需要将 `panda.svg` 放到 `assets/zoo` 目录下。

## 常见问题

### 图标都不见了！

你是不是没有阅读以上的文档？

### 我想静态引入全部的图标，该怎么做？

尽管这是不推荐的行为，实际上我们已经在 <a href="/components/icon/zh#%E9%9D%99%E6%80%81%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD">静态加载与动态加载</a> 部分演示过了：

```typescript
import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as Record<string, IconDefinition>;
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
```

然后通过 `provideNzIcons` 或者 `NzIconService` 的 `addIcon` 方法引入。

### 动态加载会不会影响网页的性能？

我们用了多种手段来尽量减少动态请求，包括先静态后动态、缓存和相同图标的请求复用，用户很少能感知到图标是异步加载的。
在网络环境尚可的情况下，即使是有三百多个图标同时展示的 NG-ZORRO 官网，也基本没有卡顿。
对于加载速度要求更高的用户，我们也支持 CDN。

### 我怎么知道一个图标的静态引入名？

很简单，大写驼峰加主题即为图标的引入名。比如 `alibaba` 的引入名就是 `AlibabaOutline`，事实上，编辑器的自动补全能帮助到你。

---

## 代码示例

### 基本使用

使用 `<nz-icon>` 来声明组件。使用 `nzType` 属性指定对应的图标。
可以通过 `nzTheme` 属性来设置不同的主题风格的图标，也可以通过设置 `nzSpin` 属性来实现动画旋转效果。

> `<nz-icon>` 自 v19 版本起受支持，而 `<span nz-icon>` 与 `<i nz-icon>` 仍受支持，但不再推荐。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-icon-basic',
  imports: [NzIconModule],
  template: `
    <div class="icons-list">
      <nz-icon nzType="home" />
      <nz-icon nzType="setting" nzTheme="fill" />
      <nz-icon nzType="smile" nzTheme="outline" />
      <nz-icon nzType="sync" [nzSpin]="true" />
      <nz-icon nzType="smile" nzTheme="outline" [nzRotate]="180" />
      <!-- Loading with new API would spin automatically! -->
      <nz-icon nzType="loading" />
    </div>
  `,
  styles: `
    nz-icon {
      margin-right: 6px;
      font-size: 24px;
    }
  `
})
export class NzDemoIconBasicComponent {}
```

### 自定义图标

你可以直接将 `svg` 标签放在 `nz-icon` 中来渲染自定义内容，我们会为你处理大小和颜色等问题。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-icon-custom',
  imports: [NzIconModule],
  template: `
    <nz-icon style="color: hotpink">
      <svg>
        <path
          d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"
        />
      </svg>
    </nz-icon>
    <nz-icon style="font-size: 32px">
      <svg>
        <path
          d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
          fill="#6B676E"
          p-id="1143"
        />
        <path
          d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
          fill="#FFEBD2"
          p-id="1144"
        />
        <path
          d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
          fill="#E9D7C3"
          p-id="1145"
        />
        <path
          d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
          fill="#FFFFFF"
          p-id="1146"
        />
        <path
          d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
          fill="#6B676E"
          p-id="1147"
        />
        <path
          d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
          fill="#464655"
          p-id="1148"
        />
        <path
          d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
          fill="#464655"
          p-id="1149"
        />
        <path
          d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
          fill="#464655"
          p-id="1150"
        />
      </svg>
    </nz-icon>
  `,
  styles: `
    nz-icon {
      margin-right: 6px;
      font-size: 24px;
    }
  `
})
export class NzDemoIconCustomComponent {}
```

### 使用 Iconfont.cn

对于使用 [iconfont.cn](http://iconfont.cn/) 的用户，通过设置 `fetchFromIconfont` 方法参数对象中的 `scriptUrl` 字段，即可轻松地使用已有项目中的图标。

```typescript
import { Component } from '@angular/core';

import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-icon-iconfont',
  imports: [NzIconModule],
  template: `
    <nz-icon nzIconfont="icon-tuichu" />
    <nz-icon nzIconfont="icon-facebook" />
    <nz-icon nzIconfont="icon-twitter" />
  `,
  styles: `
    nz-icon {
      margin-right: 6px;
      font-size: 24px;
    }
  `
})
export class NzDemoIconIconfontComponent {
  constructor(private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }
}
```

### 命名空间

可以使用命名空间来添加自定义的 Icon，支持静态加载和动态加载。

```typescript
import { Component } from '@angular/core';

import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';

const ngZorroIconLiteral =
  '<svg viewBox="0 0 106 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient x1="68.1279872%" y1="-35.6905737%" x2="30.4400914%" y2="114.942679%" id="linearGradient-1">\n      <stop stop-color="#FA8E7D" offset="0%"></stop>\n      <stop stop-color="#F74A5C" offset="51.2635191%"></stop>\n      <stop stop-color="#F51D2C" offset="100%"></stop>\n    </linearGradient>\n    <linearGradient x1="68.1279872%" y1="-35.6905737%" x2="74.5363914%" y2="162.511755%" id="linearGradient-2">\n      <stop stop-color="#FA8E7D" offset="0%"></stop>\n      <stop stop-color="#F74A5C" offset="51.2635191%"></stop>\n      <stop stop-color="#F51D2C" offset="100%"></stop>\n    </linearGradient>\n    <linearGradient x1="69.644116%" y1="0%" x2="69.644116%" y2="100%" id="linearGradient-3">\n      <stop stop-color="#29CDFF" offset="0%"></stop>\n      <stop stop-color="#148EFF" offset="37.8600687%"></stop>\n      <stop stop-color="#0A60FF" offset="100%"></stop>\n    </linearGradient>\n    <linearGradient x1="-19.8191553%" y1="-36.7931464%" x2="138.57919%" y2="157.637507%" id="linearGradient-4">\n      <stop stop-color="#29CDFF" offset="0%"></stop>\n      <stop stop-color="#0F78FF" offset="100%"></stop>\n    </linearGradient>\n  </defs>\n  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Angular" transform="translate(-11.000000, -4.000000)">\n      <g id="Group-9" transform="translate(11.000000, 4.000000)">\n        <path d="M65.63,72.2 L53.23,53.2 L46,63.69 L53.37,63.69 C56.4075661,63.69 58.87,66.1524339 58.87,69.19 C58.87,72.2275661 56.4075661,74.69 53.37,74.69 L35.49,74.69 C33.4448986,74.6890667 31.569189,73.5534846 30.620326,71.7418281 C29.671463,69.9301715 29.8061511,67.7416349 30.97,66.06 L48.84,40.26 C49.879226,38.7527636 51.6013948,37.8627393 53.4320154,37.8868264 C55.2626361,37.9109135 56.960791,38.8459421 57.96,40.38 L74.84,66.18 C75.9449505,67.8698206 76.0352122,70.0292067 75.0751376,71.8053446 C74.115063,73.5814826 72.2590116,74.6888076 70.24,74.69 C68.3799194,74.6978131 66.6433454,73.7598372 65.63,72.2 Z" id="Path" fill="url(#linearGradient-1)"></path>\n        <path d="M70.28,25 C69.0616939,25.0004053 67.8648105,24.6796268 66.81,24.07 L52.87,16.07 L39,24 C36.8331842,25.2504298 34.1638674,25.249892 31.9975556,23.9985892 C29.8312438,22.7472865 28.4970513,20.4353214 28.4975555,17.933589 C28.4980597,15.4318566 29.833184,13.1204295 32,11.87 L49.34,1.87 C51.5058075,0.619570435 54.1741925,0.619570435 56.34,1.87 L73.76,11.87 C76.574107,13.4207731 77.9710889,16.688234 77.147902,19.7941088 C76.324715,22.8999837 73.492775,25.0466031 70.28,25 Z" id="Path" fill="url(#linearGradient-2)"></path>\n        <path d="M52.86,119.92 C51.6310454,119.919338 50.4239235,119.595139 49.36,118.98 L3.93,92.75 C1.76486614,91.4999595 0.43077789,89.190081 0.43,86.69 L0.43,34.23 C0.43077789,31.729919 1.76486614,29.4200405 3.93,28.17 L15.16,21.69 C17.3290879,20.369153 20.0434251,20.3267208 22.2527396,21.5791219 C24.4620541,22.831523 25.8197544,25.182284 25.8004986,27.7218131 C25.7812428,30.2613423 24.3880518,32.5912449 22.16,33.81 L14.43,38.27 L14.43,82.65 L52.86,104.83 L89.7896161,83.5159515 C90.7180357,82.9801111 91.29,81.9896088 91.29,80.9176536 L91.29,40.0028421 C91.29,38.9306213 90.7177545,37.9399157 89.7889721,37.4041727 L83.61,33.84 C81.4431842,32.5895704 80.1080601,30.2781434 80.1075559,27.7764111 C80.1070518,25.2746788 81.4412443,22.9627138 83.6075559,21.7114111 C85.7738676,20.4601083 88.4431842,20.4595704 90.61,21.71 L101.79,28.17 C103.955134,29.4200405 105.289222,31.729919 105.29,34.23 L105.29,86.69 C105.289222,89.190081 103.955134,91.4999595 101.79,92.75 L56.36,119 C55.2952279,119.610805 54.087499,119.928265 52.86,119.92 Z" id="Path" fill="url(#linearGradient-3)" fill-rule="nonzero"></path>\n        <path d="M78.06,106.45 C66.89,113 52.87,104.83 52.87,104.83 L15.9403839,83.5159515 C15.0119643,82.9801111 14.44,81.9896088 14.44,80.9176536 L14.44,40.0026171 C14.44,38.9305169 15.0121179,37.9399035 15.9407356,37.4041163 L22.17,33.81 C24.3980518,32.5912449 25.7912428,30.2613423 25.8104986,27.7218131 C25.8297544,25.182284 24.4720541,22.831523 22.2627396,21.5791219 C20.0534251,20.3267208 17.3390879,20.369153 15.17,21.69 L3.94,28.17 C1.77486614,29.4200405 0.44077789,31.729919 0.44,34.23 L0.44,86.69 C0.44077789,89.190081 1.77486614,91.4999595 3.94,92.75 L49.36,119 C51.5258075,120.25043 54.1941925,120.25043 56.36,119 L78.06,106.47 L78.06,106.45 Z" id="Path" fill="url(#linearGradient-4)" fill-rule="nonzero"></path>\n      </g>\n    </g>\n  </g>\n</svg>';

@Component({
  selector: 'nz-demo-icon-namespace',
  imports: [NzIconModule],
  template: `<nz-icon nzType="ng-zorro:antd" />`,
  styles: `
    nz-icon {
      margin-right: 6px;
      font-size: 24px;
    }
  `
})
export class NzDemoIconNamespaceComponent {
  constructor(private iconService: NzIconService) {
    this.iconService.addIconLiteral('ng-zorro:antd', ngZorroIconLiteral);
  }
}
```

### 多色图标

可以通过设置 `nzTheme` 属性为 `twotone` 来渲染双色图标，并且可以设置主题色。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-icon-twotone',
  imports: [NzIconModule],
  template: `
    <nz-icon nzType="smile" nzTheme="twotone" />
    <nz-icon nzType="heart" nzTheme="twotone" nzTwotoneColor="#eb2f96" />
    <nz-icon nzType="check-circle" nzTheme="twotone" nzTwotoneColor="#52c41a" />
  `,
  styles: `
    nz-icon {
      margin-right: 6px;
      font-size: 24px;
    }
  `
})
export class NzDemoIconTwotoneComponent {}
```
