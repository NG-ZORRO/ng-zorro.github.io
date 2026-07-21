---
category: Components
subtitle: 头像
type: 数据展示
title: Avatar
cover: 'https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg'
description: 用来代表用户或事物，支持图片、图标或字符展示。
---

## API

### nz-avatar

| 参数                | 说明                                                                                                                                           | 类型                                        | 默认值      | 全局配置 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ----------- | -------- |
| `[nzIcon]`          | 设置头像的图标类型，参考 `Icon`                                                                                                                | `string`                                    | -           |
| `[nzShape]`         | 指定头像的形状                                                                                                                                 | `'circle' \| 'square'`                      | `'circle'`  | ✅       |
| `[nzSize]`          | 设置头像的大小                                                                                                                                 | `'large' \| 'small' \| 'default' \| number` | `'default'` | ✅       |
| `[nzGap]`           | 字符类型距离左右两侧边界单位像素                                                                                                               | `number`                                    | `4`         | ✅       |
| `[nzSrc]`           | 图片类头像的资源地址                                                                                                                           | `string`                                    | -           |
| `[nzSrcSet]`        | 设置图片类头像响应式资源地址                                                                                                                   | `string`                                    | -           |
| `[nzAlt]`           | 图像无法显示时的替代文本                                                                                                                       | `string`                                    | -           |
| `[nzText]`          | 文本类头像                                                                                                                                     | `string`                                    | -           |
| `[nzLoading]`       | 设置图片类头像 `<img>` 元素原生 [`loading`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/img#loading) 属性             | `'eager' \| 'lazy'`                         | `'eager'`   |          |
| `[nzFetchPriority]` | 设置图片类头像 `<img>` 元素原生 [`fetchpriority`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/img#fetchpriority) 属性 | `'high' \| 'low' \| 'auto'`                 | `'auto'`    |          |
| `(nzError)`         | 图片加载失败的事件，调用 `preventDefault` 方法会阻止组件默认的 fallback 行为                                                                   | `EventEmitter<Event>`                       | -           |

### nz-avatar-group

```html
<nz-avatar-group>
  <nz-avatar nzIcon="user"></nz-avatar>
  <!--  ...  -->
</nz-avatar-group>
```

---

## 代码示例

### 带徽标的头像

通常用于消息提示。

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-avatar-badge',
  imports: [NzBadgeModule, NzAvatarModule],
  template: `
    <nz-badge [nzCount]="5" style="margin-right: 24px">
      <nz-avatar nzIcon="user" nzShape="square" />
    </nz-badge>
    <nz-badge nzDot>
      <nz-avatar nzIcon="user" nzShape="square" />
    </nz-badge>
  `
})
export class NzDemoAvatarBadgeComponent {}
```

### 基本

头像有三种尺寸，两种形状可选。

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'nz-demo-avatar-basic',
  imports: [NzAvatarModule],
  template: `
    <div>
      <nz-avatar [nzSize]="64" nzIcon="user" />
      <nz-avatar nzSize="large" nzIcon="user" />
      <nz-avatar nzIcon="user" />
      <nz-avatar nzSize="small" nzIcon="user" />
    </div>
    <div>
      <nz-avatar nzShape="square" [nzSize]="64" nzIcon="user" />
      <nz-avatar nzShape="square" nzSize="large" nzIcon="user" />
      <nz-avatar nzShape="square" nzIcon="user" />
      <nz-avatar nzShape="square" nzSize="small" nzIcon="user" />
    </div>
  `,
  styles: `
    nz-avatar {
      margin-top: 16px;
      margin-right: 16px;
    }
  `
})
export class NzDemoAvatarBasicComponent {}
```

### 自动调整字符大小

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

```typescript
import { Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

const userList = ['Lucy', 'U', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
  selector: 'nz-demo-avatar-dynamic',
  imports: [FormsModule, NzAvatarModule, NzButtonModule, NzInputNumberModule],
  template: `
    <div>
      <label>Gap: </label>
      <nz-input-number [nzMin]="0" [nzMax]="16" [nzStep]="1" [(ngModel)]="gap" />
      <button nz-button (click)="change()">Change Text</button>
    </div>

    <nz-avatar [nzGap]="gap()" [nzText]="text()" nzSize="large" [style.background-color]="color()" />
  `,
  styles: `
    div {
      margin-bottom: 16px;
    }
    button {
      margin-left: 8px;
    }
  `
})
export class NzDemoAvatarDynamicComponent {
  index = signal(3);
  text = computed(() => userList[this.index()]);
  color = computed(() => colorList[this.index()]);
  gap = model(4);
  change(): void {
    this.index.update(idx => (idx + 1) % userList.length);
  }
}
```

### 头像组

头像组合展现。

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-avatar-group',
  imports: [NzAvatarModule, NzDividerModule, NzTooltipModule, NzIconModule],
  template: `
    <nz-avatar-group>
      <nz-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <nz-avatar style="background-color: #f56a00" nzText="U" />
      <nz-avatar style="background-color: #87d068" nz-tooltip nzTooltipTitle="NG-ZORRO User" nzIcon="user" />
      <nz-avatar style="background-color: #1890ff" nzText="NG" />
      <nz-avatar [nzSize]="32">
        <nz-icon nzType="ant-design" nzTheme="outline" />
      </nz-avatar>
    </nz-avatar-group>
    <nz-divider />
    <nz-avatar-group>
      <nz-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <nz-avatar style="background-color: #f56a00" nzText="U" />
      <nz-avatar style="background-color: #fde3cf; color: #f56a00" nzText="+2" />
    </nz-avatar-group>
  `
})
export class NzDemoAvatarGroupComponent {}
```

### 类型

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'nz-demo-avatar-type',
  imports: [NzAvatarModule],
  template: `
    <nz-avatar nzIcon="user" />
    <nz-avatar nzText="U" />
    <nz-avatar nzText="USER" />
    <nz-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <nz-avatar nzText="U" style="color:#f56a00; background-color:#fde3cf;" />
    <nz-avatar nzIcon="user" style="background-color:#87d068;" />
  `,
  styles: `
    nz-avatar {
      margin-top: 16px;
      margin-right: 16px;
    }
  `
})
export class NzDemoAvatarTypeComponent {}
```
