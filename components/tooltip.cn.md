---
category: Components
subtitle: 文字提示
type: 数据展示
title: Tooltip
cover: 'https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg'
description: 简单的文字提示气泡框。
---

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## API

### [nz-tooltip]

| 参数                            | 说明                                                                       | 类型                                                                                                                                                                              | 默认值    |
| ------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `[nzTooltipArrowPointAtCenter]` | 箭头指向锚点的中心                                                         | `boolean`                                                                                                                                                                         | `false`   |
| `[nzTooltipTitle]`              | 提示文字                                                                   | `string \| TemplateRef<void>`                                                                                                                                                     | -         |
| `[nzTooltipTitleContext]`       | 提示文字模板上下文                                                         | `object`                                                                                                                                                                          | -         |
| `[nzTooltipTrigger]`            | 触发行为，可选 `'click' \| 'focus' \| 'hover'`，为 `null` 时不响应光标事件 | `'click' \| 'focus' \| 'hover' \| null`                                                                                                                                           | `'hover'` |
| `[nzTooltipPlacement]`          | 气泡框位置                                                                 | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom' \| Array<string>` | `'top'`   |
| `[nzTooltipColor]`              | 背景颜色                                                                   | `string`                                                                                                                                                                          | -         |
| `[nzTooltipOrigin]`             | 气泡框定位元素                                                             | `ElementRef`                                                                                                                                                                      | -         |
| `[nzTooltipVisible]`            | 显示隐藏气泡框                                                             | `boolean`                                                                                                                                                                         | `false`   |
| `(nzTooltipVisibleChange)`      | 显示隐藏的事件                                                             | `EventEmitter<boolean>`                                                                                                                                                           | -         |
| `[nzTooltipMouseEnterDelay]`    | 鼠标移入后延时多少才显示 Tooltip，单位：秒                                 | `number`                                                                                                                                                                          | `0.15`    |
| `[nzTooltipMouseLeaveDelay]`    | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒                                 | `number`                                                                                                                                                                          | `0.1`     |
| `[nzTooltipOverlayClassName]`   | 卡片类名                                                                   | `string`                                                                                                                                                                          | -         |
| `[nzTooltipOverlayStyle]`       | 卡片样式                                                                   | `object`                                                                                                                                                                          | -         |

### 共同的 API

以下 API 为 `nz-tooltip`、`nz-popconfirm`、`nz-popover` 共享的 API。

| 方法               | 说明     |
| ------------------ | -------- |
| `show()`           | 打开     |
| `hide()`           | 隐藏     |
| `updatePosition()` | 调整位置 |

## 注意

请确保 `[nz-tooltip]` 元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 箭头指向

通过设置 `nzTooltipArrowPointAtCenter` ，可以箭头将指向目标元素的中心。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-tooltip-arrow-point-at-center',
  imports: [NzButtonModule, NzTooltipModule],
  template: `
    <button nz-button nzTooltipTitle="prompt text" nzTooltipPlacement="topLeft" nz-tooltip>
      Align edge / 边缘对齐
    </button>
    <button
      nz-button
      nz-tooltip
      nzTooltipTitle="prompt text"
      nzTooltipPlacement="bottomLeft"
      [nzTooltipArrowPointAtCenter]="true"
    >
      Arrow points to center / 箭头指向中心
    </button>
  `,
  styles: `
    button {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `
})
export class NzDemoTooltipArrowPointAtCenterComponent {}
```

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-tooltip-basic',
  imports: [NzTooltipModule],
  template: `<span nz-tooltip nzTooltipTitle="prompt text">Tooltip will show when mouse enter.</span>`
})
export class NzDemoTooltipBasicComponent {}
```

### 多彩文字提示

我们添加了多种预设色彩的文字提示样式，供不同场景使用。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { presetColors } from 'ng-zorro-antd/core/color';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-tooltip-color',
  imports: [NzButtonModule, NzDividerModule, NzTooltipModule],
  template: `
    <nz-divider nzText="Preset" nzOrientation="left" />
    @for (color of presetColors; track color) {
      <button nz-button nz-tooltip [nzTooltipTitle]="color" [nzTooltipColor]="color">
        {{ color }}
      </button>
    }
    <nz-divider nzText="Custom" nzOrientation="left" />
    @for (color of customColors; track color) {
      <button nz-button nz-tooltip [nzTooltipTitle]="color" [nzTooltipColor]="color">
        {{ color }}
      </button>
    }
  `,
  styles: `
    .ant-btn {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `
})
export class NzDemoTooltipColorComponent {
  customColors: string[] = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
  presetColors = presetColors;
}
```

### 指定目标

通过 `nzTooltipOrigin` 指定 tooltip 的锚定元素（可以使用指令 `NzElementPatchDirective` 获取元素）

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzElementPatchDirective } from 'ng-zorro-antd/core/element-patch';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-tooltip-origin',
  imports: [NzButtonModule, NzTooltipModule, NzElementPatchDirective],
  template: `
    <button nz-button nz-element #button="nzElement">Action</button>
    <a nz-tooltip nzTooltipTitle="This action could not be revoked!" [nzTooltipOrigin]="button.elementRef">Notice</a>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoTooltipOriginComponent {}
```

### 位置

位置有 12 个方向。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-tooltip-placement',
  imports: [NzButtonModule, NzTooltipModule],
  template: `
    <div style="margin-left:60px;">
      <button nzTooltipTitle="prompt text" [nzTooltipPlacement]="['topLeft', 'leftTop']" nz-button nz-tooltip>
        TL
      </button>
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="top" nz-button nz-tooltip>Top</button>
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="topRight" nz-button nz-tooltip>TR</button>
    </div>
    <div style="float:left;width: 60px;">
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="leftTop" nz-button nz-tooltip>LT</button>
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="left" nz-button nz-tooltip>Left</button>
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="leftBottom" nz-button nz-tooltip>LB</button>
    </div>
    <div style="margin-left:270px;width: 60px;">
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="rightTop" nz-button nz-tooltip>RT</button>
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="right" nz-button nz-tooltip>Right</button>
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="rightBottom" nz-button nz-tooltip>RB</button>
    </div>
    <div style="margin-left:60px;clear: both;">
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="bottomLeft" nz-button nz-tooltip>BL</button>
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="bottom" nz-button nz-tooltip>Bottom</button>
      <button nzTooltipTitle="prompt text" nzTooltipPlacement="bottomRight" nz-button nz-tooltip>BR</button>
    </div>
  `,
  styles: `
    button {
      width: 70px;
      text-align: center;
      padding: 0;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `
})
export class NzDemoTooltipPlacementComponent {}
```

### 模板渲染

`nzTooltipTitle` 可以传入 `TemplateRef<any>` 模板渲染。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-tooltip-template',
  imports: [NzIconModule, NzTooltipModule],
  template: `
    <a nz-tooltip [nzTooltipTitle]="titleTemplate" [nzTooltipTitleContext]="{ $implicit: 'Icon' }"
      >This Tooltip has an Icon</a
    >
    <ng-template #titleTemplate let-thing>
      <nz-icon nzType="file" />
      <span>Tooltip With {{ thing }}</span>
    </ng-template>
  `,
  styles: `
    .anticon {
      margin-right: 8px;
      margin-left: 8px;
    }
  `
})
export class NzDemoTooltipTemplateComponent {}
```
