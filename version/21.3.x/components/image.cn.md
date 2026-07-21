---
category: Components
subtitle: 图片
type: 数据展示
title: Image
cover: 'https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg'
description: 可预览的图片。
---

## 何时使用

- 需要展示图片时使用。
- 加载大图时渐进加载或加载失败时容错处理。

## API

### [nz-image]

| 参数                  | 说明                                                                                                     | 类型        | 默认值  | 支持全局配置 |
| --------------------- | -------------------------------------------------------------------------------------------------------- | ----------- | ------- | ------------ |
| `nzSrc`               | 图片地址                                                                                                 | `string`    | -       | -            |
| `nzFallback`          | 加载失败容错地址                                                                                         | `string`    | -       | ✅           |
| `nzPlaceholder`       | 加载占位地址                                                                                             | `string`    | -       | ✅           |
| `nzDisablePreview`    | 是否禁止预览                                                                                             | `boolean`   | `false` | ✅           |
| `nzCloseOnNavigation` | 当用户在历史中前进/后退时是否关闭预览。注意，这通常不包括点击链接（除非用户使用 HashLocationStrategy）。 | `boolean`   | `false` | ✅           |
| `nzDirection`         | 文字方向                                                                                                 | `Direction` | `'ltr'` | ✅           |
| `nzScaleStep`         | `1 + nzScaleStep` 为缩放放大的每步倍数                                                                   | `number`    | `0.5`   | ✅           |

其他属性见 [<img\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)

### NzImageService

| 参数      | 说明     | 类型                    | 默认值 |
| --------- | -------- | ----------------------- | ------ |
| `images`  | 预览图片 | `NzImage[]`             | -      |
| `options` | 预览参数 | `NzImagePreviewOptions` | -      |

## 相关类型定义

### NzImage

| 参数     | 说明     | 类型     | 默认值 |
| -------- | -------- | -------- | ------ |
| `src`    | src      | `string` | -      |
| `alt`    | alt      | `string` | -      |
| `width`  | 图片宽度 | `string` | -      |
| `height` | 图片高度 | `string` | -      |

### NzImagePreviewOptions

| 参数                  | 说明                                                                                                     | 类型      | 默认值  |
| --------------------- | -------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `nzKeyboard`          | 是否支持键盘 esc 关闭、左右键切换图片                                                                    | `boolean` | `true`  |
| `nzMaskClosable`      | 点击蒙层是否允许关闭                                                                                     | `boolean` | `true`  |
| `nzCloseOnNavigation` | 当用户在历史中前进/后退时是否关闭预览。注意，这通常不包括点击链接（除非用户使用 HashLocationStrategy）。 | `boolean` | `true`  |
| `nzZIndex`            | 设置预览层的 z-index                                                                                     | `number`  | `1000`  |
| `nzZoom`              | 缩放比例                                                                                                 | `number`  | `1`     |
| `nzRotate`            | 旋转角度                                                                                                 | `number`  | `0`     |
| `nzScaleStep`         | `1 + nzScaleStep` 为缩放放大的每步倍数                                                                   | `number`  | `0.5`   |
| `nzFlipHorizontally`  | 在水平向量上翻转图像                                                                                     | `boolean` | `false` |
| `nzFlipVertically`    | 在垂直向量上翻转图像                                                                                     | `boolean` | `false` |

### NzImagePreviewRef

| 名称                            | 描述         |
| ------------------------------- | ------------ |
| `switchTo(index: number): void` | 设置预览索引 |
| `prev(): void`                  | 上一张       |
| `next(): void`                  | 下一张       |
| `close(): void`                 | 关闭预览     |

### NzImageGroupComponent

| 名称          | 描述                                   | 类型     | 默认值 |
| ------------- | -------------------------------------- | -------- | ------ |
| `nzScaleStep` | `1 + nzScaleStep` 为缩放放大的每步倍数 | `number` | -      |

---

## 代码示例

### 基本用法

单击图像可以放大显示。

```typescript
import { Component } from '@angular/core';

import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-basic',
  imports: [NzImageModule],
  template: `
    <img
      nz-image
      width="200px"
      height="200px"
      nzSrc="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      alt=""
    />
  `
})
export class NzDemoImageBasicComponent {}
```

### 受控的预览

可以使预览受控。

```typescript
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule, NzImageService } from 'ng-zorro-antd/image';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-image-controlled-preview',
  imports: [FormsModule, NzButtonModule, NzImageModule, NzInputNumberModule],
  template: `
    <div>
      <label>
        <span>scale step:</span>
        <nz-input-number [(ngModel)]="scaleStep" [nzMin]="0.1" [nzStep]="1" />
      </label>

      <button nz-button nzType="primary" (click)="onClick()">Preview</button>
    </div>
  `,
  styles: `
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `
})
export class NzDemoImageControlledPreviewComponent {
  private nzImageService = inject(NzImageService);
  scaleStep = 0.5;
  readonly images = [
    {
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      alt: ''
    }
  ];

  onClick(): void {
    this.nzImageService.preview(this.images, { nzZoom: 1, nzRotate: 0, nzScaleStep: this.scaleStep });
  }
}
```

### 容错处理

加载失败显示图像占位符。

```typescript
import { Component } from '@angular/core';

import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-fallback',
  imports: [NzImageModule],
  template: `<img nz-image width="200px" height="200px" nzSrc="error" [nzFallback]="fallback" alt="" />`
})
export class NzDemoImageFallbackComponent {
  fallback =
    'data:image/png;base64,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';
}
```

### 渐进加载

大图使用 placeholder 渐进加载。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-image-placeholder',
  imports: [NzButtonModule, NzImageModule, NzSpaceModule],
  template: `
    <nz-space [nzSize]="12">
      <img *nzSpaceItem nz-image width="200px" height="200px" [nzSrc]="src" [nzPlaceholder]="placeholder" />
      <button *nzSpaceItem nz-button nzType="primary" (click)="onReload()">Reload</button>
    </nz-space>
  `
})
export class NzDemoImagePlaceholderComponent {
  src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`;
  placeholder =
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';

  onReload(): void {
    this.src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${new Date()}`;
  }
}
```

### 多张图片预览

点击左右切换按钮可以预览多张图片。

```typescript
import { Component } from '@angular/core';

import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-preview-group',
  imports: [NzImageModule],
  template: `
    <nz-image-group>
      <img nz-image width="200px" nzSrc="https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg" alt="" />
      <img nz-image width="200px" nzSrc="https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg" alt="" />
    </nz-image-group>
  `
})
export class NzDemoImagePreviewGroupComponent {}
```

### 服务方式创建预览层

图片预览的 Service 用法，示例中包含使用 Service 创建单张或多张图片预览的用法

```typescript
import { Component, inject } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule, NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-service',
  imports: [NzButtonModule, NzImageModule],
  template: `<button nz-button nzType="primary" (click)="onClick()">Preview</button>`
})
export class NzDemoImageServiceComponent {
  private nzImageService = inject(NzImageService);
  readonly images = [
    {
      src: 'https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg',
      width: '200px',
      height: '200px',
      alt: 'ng-zorro'
    },
    {
      src: 'https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg',
      width: '200px',
      height: '200px',
      alt: 'angular'
    }
  ];

  onClick(): void {
    this.nzImageService.preview(this.images, { nzZoom: 1.5, nzRotate: 0 });
  }
}
```
