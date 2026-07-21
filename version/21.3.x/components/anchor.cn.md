---
category: Components
subtitle: 锚点
type: 导航
title: Anchor
cover: 'https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg'
description: 用于跳转到页面指定位置。
---

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## API

### nz-anchor

| 成员                 | 说明                                    | 类型                                  | 默认值       | 全局配置 |
| -------------------- | --------------------------------------- | ------------------------------------- | ------------ | -------- |
| `[nzAffix]`          | 固定模式                                | `boolean`                             | `true`       |
| `[nzBounds]`         | 锚点区域边界，单位：px                  | `number`                              | `5`          | ✅       |
| `[nzOffsetTop]`      | 距离窗口顶部达到指定偏移量后触发        | `number`                              | -            | ✅       |
| `[nzShowInkInFixed]` | 固定模式是否显示小圆点                  | `boolean`                             | `false`      | ✅       |
| `[nzTargetOffset]`   | 锚点滚动偏移量，默认与 `offsetTop` 相同 | number                                | -            |          |
| `[nzContainer]`      | 指定滚动的容器                          | `string \| HTMLElement`               | `window`     |
| `[nzCurrentAnchor]`  | 自定义高亮的锚点                        | string                                | -            |          |
| `[nzDirection]`      | 设置导航方向                            | `'vertical' \| 'horizontal'`          | `'vertical'` |          |
| `(nzClick)`          | 点击项触发                              | `EventEmitter<string>`                | -            |
| `(nzChange)`         | 监听锚点链接改变                        | `EventEmitter<string>`                | -            |          |
| `(nzScroll)`         | 滚动至某锚点时触发                      | `EventEmitter<NzAnchorLinkComponent>` | -            |

### nz-link

| 成员         | 说明                           | 类型                          |
| ------------ | ------------------------------ | ----------------------------- |
| `[nzHref]`   | 锚点链接                       | `string`                      |
| `[nzTarget]` | 该属性指定在何处显示链接的资源 | `string`                      |
| `[nzTitle]`  | 文字内容                       | `string \| TemplateRef<void>` |

---

## 代码示例

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-basic',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor>
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorBasicComponent {}
```

### 自定义锚点高亮

自定义锚点高亮。

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-customize-highlight',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor nzCurrentAnchor="#components-anchor-demo-static">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorCustomizeHighlightComponent {}
```

### 横向 Anchor

横向 Anchor。

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-horizontal-anchor',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor nzDirection="horizontal">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorHorizontalAnchorComponent {}
```

### 监听锚点链接改变

监听锚点链接改变

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-on-change',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor (nzChange)="handleChange($event)">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorOnChangeComponent {
  handleChange(link: string): void {
    console.log('Anchor:OnChange', link);
  }
}
```

### 自定义 onClick 事件

点击锚点不记录历史。

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-on-click',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor (nzClick)="handleClick($event)">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorOnClickComponent {
  handleClick(e: string): void {
    console.log(e);
  }
}
```

### 静态位置

不浮动，状态不随页面滚动变化。

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-static',
  imports: [NzAnchorModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-anchor [nzAffix]="false">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorStaticComponent {}
```

### 设置锚点滚动偏移量

锚点目标滚动到屏幕正中间。

```typescript
import { afterNextRender, Component, signal } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-target-offset',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor [nzTargetOffset]="targetOffset()">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorTargetOffsetComponent {
  readonly targetOffset = signal(0);

  constructor() {
    afterNextRender(() => {
      this.targetOffset.set(window.innerHeight / 2);
    });
  }
}
```
