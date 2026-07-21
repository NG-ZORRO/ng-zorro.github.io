---
category: Components
subtitle: 图片
type: 数据展示
title: Image
cols: 1
experimental: true
description: 实验性的图片组件。
---

## 何时使用

- 需要浏览器优先加载图片时（需要在 SSR 下处理）。
- 需要对高清显示器（如视网膜屏）优化时。
- 使用图片 CDN 服务时。
- 以及 [Image documentation](/components/image/zh) 中的功能
- 下一步计划
  - 添加 [sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes) 属性及响应式的支持

## API

### nz-image

| 参数           | 说明                                                                                     | 类型               | 默认值                  | 支持全局配置 |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------ | ----------------------- | ------------ |
| `nzSrc`        | url                                                                                      | `string`           | -                       |              |
| `nzAlt`        | alt                                                                                      | `string`           | -                       |              |
| `nzWidth`      | 宽度                                                                                     | `number\|string`   | `auto`                  |              |
| `nzHeight`     | 高度                                                                                     | `number\|string`   | `auto`                  |              |
| `nzAutoSrcset` | 是否优化图片加载                                                                         | `boolean`          | `false`                 | ✅           |
| `nzSrcLoader`  | 加载器                                                                                   | `NzImageSrcLoader` | `defaultImageSrcLoader` | ✅           |
| `nzPriority`   | 是否添加 [preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) | `boolean`          | `false`                 |              |

### NzImageSrcLoader

```ts
export type NzImageSrcLoader = (params: { src: string; width: number }) => string;
```

## 注意

### nzSrcLoader

使用 `nzSrcLoader` 可以帮助你填充请求图片的关键信息，例如 `src` 和 `srcset`，默认为：

```ts
export const defaultImageSrcLoader: NzImageSrcLoader = ({ src }) => {
  return src;
};
```

内置的图片 CND 创建方法

```ts
/**
 * AliObjectsLoader return format
 * {domain}/{src}?x-oss-process=image/resize,w_{width}
 */
export function createAliObjectsLoader(domain: string): NzImageSrcLoader;

/**
 * ImgixLoader return format
 * {domain}/{src}?format=auto&fit=max&w={width}
 */
export function createImgixLoader(domain: string): NzImageSrcLoader;

/**
 * CloudinaryLoader return format
 * {domain}/c_limit,q_auto,w_{width}/{src}
 */
export function createCloudinaryLoader(domain: string): NzImageSrcLoader;
```

### 响应式图片和预加载图片

使用响应式图片可以帮助网页在不同的设备上显示良好的效果，预加载图片可以帮助你更快地加载图片，更多信息请参考：

- [preloading responsive images](https://web.dev/preload-responsive-images/)
- [next.js image component and image optimization](https://nextjs.org/docs/basic-features/image-optimization)

---

## 代码示例

### 自动填充 srcset

使用 `nzAutoSrcset` 时要求必须定义图片尺寸(`nzWidth`、`nzHeight`)，配合 Loader 为不同的像素密度自动生成 [srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)。

```typescript
import { Component } from '@angular/core';

import { createAliObjectsLoader, NzImageModule as NzExperimentalImageModule } from 'ng-zorro-antd/experimental/image';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-experimental-image-auto-srcset',
  imports: [NzImageModule, NzExperimentalImageModule],
  template: `<nz-image [nzSrc]="src" nzWidth="200" nzHeight="200" [nzSrcLoader]="loader" nzAutoSrcset />`
})
export class NzDemoExperimentalImageAutoSrcsetComponent {
  src = 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  loader = createAliObjectsLoader('https://zos.alipayobjects.com/rmsportal');
}
```

### 优先加载

设置 `nzPriority` 将会在服务端渲染(SSR) 时添加 `<link rel="preload">` 标签，浏览器会将其视为高优先级资源加载。你可以在 [MDN - Preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)、[web.dev - Preloading responsive images](https://web.dev/preload-responsive-images/) 了解更多。

需要注意的是，通常只需要为首屏图片设置 `nzPriority` 因此在循环生成的模版中只需要为靠前的子项添加即可，例如：

```html
@for (product of products; track product)
<nz-image [nzPriority]="$index <= 8"></nz-image>
}
```

```typescript
import { Component } from '@angular/core';

import { NzImageModule as NzExperimentalImageModule } from 'ng-zorro-antd/experimental/image';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-experimental-image-preloading',
  imports: [NzImageModule, NzExperimentalImageModule],
  template: `<nz-image [nzSrc]="src" nzWidth="200" nzHeight="200" nzPriority />`
})
export class NzDemoExperimentalImagePreloadingComponent {
  src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
}
```

### 使用 Src Loader

自定义 `nzSrcLoader` 用于解析图片 URLs, 也可以使用内置的图片 CND 提供商的 Loaders。
<br/>
我们建议始终指定图片的尺寸(`nzWidth`、`nzHeight`)，不仅可以帮助提高网页体验的关键指标 [CLS](https://web.dev/cls/)，还可以配合 Loader 利用图片 CND 对图片进行优化处理提高加载速度。
<br/>
如果希望在不同的环境下使用不同的 Loader 时你可以像下面这样做：

```ts
import { environment } from 'environments/environment';

import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { aliObjectsLoader, defaultImageSrcLoader } from 'ng-zorro-antd/experimental/image';

const nzConfig: NzConfig = {
  imageExperimental: {
    nzSrcLoader: environment.production ? aliObjectsLoader : defaultImageSrcLoader
  }
};

export const appConfig: ApplicationConfig = {
  providers: [provideNzConfig(nzConfig)]
};
```

```typescript
import { Component } from '@angular/core';

import { createAliObjectsLoader, NzImageModule as NzExperimentalImageModule } from 'ng-zorro-antd/experimental/image';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-experimental-image-src-loader',
  imports: [NzImageModule, NzExperimentalImageModule],
  template: `<nz-image [nzSrc]="src" nzWidth="200" nzHeight="200" [nzSrcLoader]="loader" />`
})
export class NzDemoExperimentalImageSrcLoaderComponent {
  src = 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  loader = createAliObjectsLoader('https://zos.alipayobjects.com/rmsportal');
}
```
