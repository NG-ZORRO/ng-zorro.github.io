---
category: Components
subtitle: 徽标数
type: 数据展示
title: Badge
cover: 'https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg'
description: 图标右上角的圆形徽标数字。
---

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## API

### nz-badge

| 参数                | 说明                                                                         | 类型                                                             | 默认值      | 全局配置 |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------- | -------- |
| `[nzStandalone]`    | 是否独立使用                                                                 | `boolean`                                                        | -           | -        |
| `[nzColor]`         | 自定义小圆点的颜色                                                           | `string`                                                         | -           | ✅       |
| `[nzCount]`         | 展示的数字，大于 nzOverflowCount 时显示为 `${nzOverflowCount}+`，为 0 时隐藏 | `number \| TemplateRef<void>`                                    | -           |
| `[nzDot]`           | 不展示数字，只有一个小红点                                                   | `boolean`                                                        | `false`     |
| `[nzShowDot]`       | 是否展示小红点                                                               | `boolean`                                                        | `true`      |
| `[nzOverflowCount]` | 展示封顶的数字值                                                             | `number`                                                         | `99`        | ✅       |
| `[nzShowZero]`      | 当数值为 0 时，是否展示 Badge                                                | `boolean`                                                        | `false`     |
| `[nzSize]`          | 在设置了 `nzCount` 的前提下有效，设置小圆点的大小                            | `'default' \| 'small'`                                           | `'default'` |
| `[nzStatus]`        | 设置 `nz-badge` 为状态点                                                     | `'success' \| 'processing' \| 'default' \| 'error' \| 'warning'` | -           |
| `[nzText]`          | 在设置了 `nzStatus` 的前提下有效，设置状态点的文本                           | `string \| TemplateRef<void>`                                    | -           |
| `[nzTitle]`         | 设置鼠标放在状态点上时显示的文字 (非独立使用时), 为 `null` 时隐藏            | `string \| null`                                                 | `nzCount`   |
| `[nzOffset]`        | 设置状态点的位置偏移，格式为 `[x, y]` (非独立使用时)                         | `[number, number]`                                               | -           |

### nz-ribbon

| 参数            | 说明             | 类型                          | 默认值  |
| --------------- | ---------------- | ----------------------------- | ------- |
| `[nzColor]`     | 自定义缎带的颜色 | `string`                      | -       |
| `[nzPlacement]` | 缎带的位置       | `'start' \| 'end'`            | `'end'` |
| `[nzText]`      | 缎带中填入的内容 | `string \| TemplateRef<void>` | -       |

---

## 代码示例

### 基本

简单的徽章展示，当 `nzCount` 为 `0` 时，默认不显示，但是可以使用 `nzShowZero` 修改为显示。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-badge-basic',
  imports: [NzBadgeModule, NzIconModule],
  template: `
    <nz-badge [nzCount]="5">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="0" nzShowZero>
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="iconTemplate">
      <a class="head-example"></a>
    </nz-badge>
    <ng-template #iconTemplate>
      <nz-icon nzType="clock-circle" class="ant-scroll-number-custom-component" style="color: #f5222d" />
    </ng-template>
  `,
  styles: `
    nz-badge {
      margin-right: 20px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeBasicComponent {}
```

### 多彩徽标

我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-badge-colorful',
  imports: [NzBadgeModule, NzDividerModule],
  template: `
    <nz-divider nzOrientation="left" nzText="Presets" />
    @for (color of presets; track color) {
      <div>
        <nz-badge [nzColor]="color" [nzText]="color" />
      </div>
    }

    <nz-divider nzOrientation="left" nzText="Custom" />
    @for (color of customColors; track color) {
      <div>
        <nz-badge [nzColor]="color" [nzText]="color" />
      </div>
    }
  `
})
export class NzDemoBadgeColorfulComponent {
  readonly presets = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime'
  ];
  readonly customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
}
```

### 讨嫌的小红点

没有具体的数字。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-badge-dot',
  imports: [NzBadgeModule, NzIconModule],
  template: `
    <nz-badge nzDot>
      <nz-icon nzType="notification" />
    </nz-badge>
    <nz-badge nzDot>
      <a>Link something</a>
    </nz-badge>
  `,
  styles: `
    nz-badge {
      margin-right: 20px;
    }

    nz-icon {
      font-size: 16px;
    }
  `
})
export class NzDemoBadgeDotComponent {}
```

### 动态

展示动态变化的效果。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-badge-dynamic',
  imports: [FormsModule, NzBadgeModule, NzButtonModule, NzFlexModule, NzIconModule, NzSwitchModule, NzSpaceModule],
  template: `
    <div nz-flex nzVertical nzGap="middle">
      <div nz-flex nzGap="large" nzAlign="center">
        <nz-badge [nzCount]="count">
          <a class="head-example"></a>
        </nz-badge>
        <nz-space-compact>
          <button nz-button (click)="minusCount()"><nz-icon nzType="minus" /></button>
          <button nz-button (click)="addCount()"><nz-icon nzType="plus" /></button>
          <button nz-button (click)="random()"><nz-icon nzType="question" /></button>
        </nz-space-compact>
      </div>
      <div nz-flex nzGap="large" nzAlign="center">
        <nz-badge [nzDot]="dot">
          <a class="head-example"></a>
        </nz-badge>
        <nz-switch [(ngModel)]="dot" />
      </div>
    </div>
  `,
  styles: `
    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeDynamicComponent {
  count = 5;
  dot = true;

  addCount(): void {
    this.count++;
  }

  minusCount(): void {
    this.count = Math.max(0, this.count - 1);
  }

  random(): void {
    this.count = Math.floor(Math.random() * 100);
  }
}
```

### 可点击

用 `a` 标签进行包裹即可。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-link',
  imports: [NzBadgeModule],
  template: `
    <a>
      <nz-badge [nzCount]="5">
        <a class="head-example"></a>
      </nz-badge>
    </a>
  `,
  styles: `
    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeLinkComponent {}
```

### 独立使用

不包裹任何元素，增加 `nzStandalone`标签后，即是独立使用，可自定样式展现。

> 在右上角的 badge 则限定为红色。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-badge-no-wrapper',
  imports: [FormsModule, NzBadgeModule, NzFlexModule, NzIconModule, NzSwitchModule],
  template: `
    <nz-flex nzGap="small" nzAlign="center">
      <nz-switch [(ngModel)]="show" />
      <nz-badge nzStandalone nzShowZero [nzCount]="show ? 11 : 0" [nzStyle]="{ backgroundColor: '#faad14' }" />
      <nz-badge nzStandalone [nzCount]="show ? 25 : 0" />
      <nz-badge nzStandalone [nzCount]="show ? iconTemplate : 0" />
      <nz-badge nzStandalone [nzCount]="show ? 109 : 0" [nzStyle]="{ backgroundColor: '#52c41a' }" />
    </nz-flex>

    <ng-template #iconTemplate>
      <nz-icon nzType="clock-circle" class="ant-scroll-number-custom-component" style="color: #f5222d" />
    </ng-template>
  `
})
export class NzDemoBadgeNoWrapperComponent {
  show = true;
}
```

### 自定义位置偏移

设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-offset',
  imports: [NzBadgeModule],
  template: `
    <a>
      <nz-badge [nzCount]="5" [nzOffset]="[10, 10]">
        <a class="head-example"></a>
      </nz-badge>
    </a>
  `,
  styles: `
    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeOffsetComponent {}
```

### 封顶数字

超过 `nzOverflowCount` 的会显示为 `nzOverflowCount+`，默认的 `nzOverflowCount` 为 `99`。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-overflow',
  imports: [NzBadgeModule],
  template: `
    <nz-badge [nzCount]="99">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="200">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="200" [nzOverflowCount]="10">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="10000" [nzOverflowCount]="999">
      <a class="head-example"></a>
    </nz-badge>
  `,
  styles: `
    nz-badge {
      margin-right: 20px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeOverflowComponent {}
```

### 缎带

使用缎带型的徽标。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-badge-ribbon',
  imports: [NzBadgeModule, NzCardModule],
  template: `
    <nz-ribbon nzText="Hippies">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="pink">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="red">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="cyan">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="green">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="purple">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="volcano">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="magenta">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
  `
})
export class NzDemoBadgeRibbonComponent {}
```

### 大小

可以设置有数字徽标的大小。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-size',
  imports: [NzBadgeModule],
  template: `
    <nz-badge nzSize="default" [nzCount]="5">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge nzSize="small" [nzCount]="5">
      <a class="head-example"></a>
    </nz-badge>
  `,
  styles: `
    nz-badge {
      margin-right: 20px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeSizeComponent {}
```

### 状态点

用于表示状态的小圆点。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-status',
  imports: [NzBadgeModule],
  template: `
    <nz-badge nzStatus="success" />
    <nz-badge nzStatus="error" />
    <nz-badge nzStatus="default" />
    <nz-badge nzStatus="processing" />
    <nz-badge nzStatus="warning" />
    <br />
    <nz-badge nzStatus="success" nzText="Success" />
    <br />
    <nz-badge nzStatus="error" nzText="Error" />
    <br />
    <nz-badge nzStatus="default" nzText="Default" />
    <br />
    <nz-badge nzStatus="processing" nzText="Processing" />
    <br />
    <nz-badge nzStatus="warning" nzText="Warning" />
    <br />
  `
})
export class NzDemoBadgeStatusComponent {}
```
