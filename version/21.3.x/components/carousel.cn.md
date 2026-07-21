---
category: Components
type: 数据展示
title: Carousel
subtitle: 走马灯
cover: 'https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg'
description: 一组轮播的区域。
---

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## API

### nz-carousel

| 参数                | 说明                                               | 类型                                         | 默认值      | 支持全局配置 | 版本   |
| ------------------- | -------------------------------------------------- | -------------------------------------------- | ----------- | ------------ | ------ |
| `[nzAutoPlay]`      | 是否自动切换                                       | `boolean`                                    | `false`     | ✅           |
| `[nzAutoPlaySpeed]` | 切换时间(毫秒)，当设置为 0 时不切换                | `number`                                     | `3000`      | ✅           |
| `[nzDotRender]`     | Dot 渲染模板                                       | `TemplateRef<{ $implicit: number }>`         | -           |
| `[nzDotPosition]`   | 面板指示点位置，可选 `top` `bottom` `left` `right` | `'top' \| 'right' \| 'bottom' \| 'left'`     | `'bottom'`  | ✅           |
| `[nzDots]`          | 是否显示面板指示点                                 | `boolean`                                    | `true`      | ✅           |
| `[nzEffect]`        | 动画效果函数，可取 `scrollx`, `fade`               | `'scrollx' \| 'fade'`                        | `'scrollx'` | ✅           |
| `[nzEnableSwipe]`   | 是否支持手势划动切换                               | `boolean`                                    | `true`      | ✅           |
| `[nzLoop]`          | 是否支持循环                                       | `boolean`                                    | `true`      | ✅           |
| `[nzArrows]`        | 是否显示箭头按钮                                   | `boolean`                                    | `false`     | -            | 20.3.0 |
| `(nzAfterChange)`   | 切换面板的回调                                     | `EventEmitter<number>`                       | -           |
| `(nzBeforeChange)`  | 切换面板的回调                                     | `EventEmitter<{ from: number; to: number }>` | -           |

#### 方法

| 名称                | 描述           |
| ------------------- | -------------- |
| `goTo(slideNumber)` | 切换到指定面板 |
| `next()`            | 切换到下一面板 |
| `pre()`             | 切换到上一面板 |

### InjectionToken

| Token                           | 说明                     | 参数                             | 默认值 |
| ------------------------------- | ------------------------ | -------------------------------- | ------ |
| `NZ_CAROUSEL_CUSTOM_STRATEGIES` | 提供用户自定义的切换效果 | `CarouselStrategyRegistryItem[]` | -      |

### 自定义切换效果

你可以提供自定义的切换效果，切换效果应当继承 `NzCarouselBaseStrategy` 类（默认的两种切换效果同样基于该类）。

---

## 代码示例

### 切换箭头

显示切换箭头。

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-arrow',
  imports: [NzCarouselModule],
  template: ` <nz-carousel [nzEffect]="effect" nzArrows>
    @for (index of array; track index) {
      <div nz-carousel-content>
        <h3>{{ index }}</h3>
      </div>
    }
  </nz-carousel>`,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselArrowComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
```

### 自动切换

定时切换下一张。

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-autoplay',
  imports: [NzCarouselModule],
  template: `
    <nz-carousel nzAutoPlay>
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselAutoplayComponent {
  array = [1, 2, 3, 4];
}
```

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-basic',
  imports: [NzCarouselModule],
  template: `
    <nz-carousel [nzEffect]="effect">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselBasicComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
```

### 自定义切换效果

通过继承 `NzCarouselBaseStrategy` 自定义轮播图切换动画。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  NZ_CAROUSEL_CUSTOM_STRATEGIES,
  NzCarouselFlipStrategy,
  NzCarouselModule,
  NzCarouselTransformNoLoopStrategy
} from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-carousel-custom',
  imports: [FormsModule, NzCarouselModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="strategy">
      <label nz-radio-button nzValue="transform-no-loop">Transform No Loop</label>
      <label nz-radio-button nzValue="flip">Flip</label>
      <label nz-radio-button nzValue="fade">Fade (built-in)</label>
    </nz-radio-group>
    <nz-carousel [nzEffect]="strategy">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    nz-radio-group {
      margin-bottom: 8px;
    }

    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `,
  providers: [
    {
      provide: NZ_CAROUSEL_CUSTOM_STRATEGIES,
      useValue: [
        { name: 'transform-no-loop', strategy: NzCarouselTransformNoLoopStrategy },
        { name: 'flip', strategy: NzCarouselFlipStrategy }
      ]
    }
  ]
})
export class NzDemoCarouselCustomComponent {
  strategy = 'transform-no-loop';
  array = [1, 2, 3, 4];
}
```

### 渐显

切换效果为渐显。

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-fade',
  imports: [NzCarouselModule],
  template: `
    <nz-carousel nzEffect="fade">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselFadeComponent {
  array = [1, 2, 3, 4];
}
```

### 循环

防止轮播进入循环

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-loop',
  imports: [NzCarouselModule],
  template: `
    <nz-carousel nzAutoPlay [nzEffect]="effect" [nzLoop]="false">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselLoopComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
```

### 位置

位置有 4 个方向。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-carousel-position',
  imports: [FormsModule, NzCarouselModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="dotPosition">
      <label nz-radio-button nzValue="bottom">Bottom</label>
      <label nz-radio-button nzValue="top">Top</label>
      <label nz-radio-button nzValue="left">Left</label>
      <label nz-radio-button nzValue="right">Right</label>
    </nz-radio-group>
    <nz-carousel [nzDotPosition]="dotPosition">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    nz-radio-group {
      margin-bottom: 8px;
    }

    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselPositionComponent {
  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
}
```
