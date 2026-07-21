---
category: Components
type: Data Display
title: Tooltip
cover: 'https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg'
description: Simple text popup box.
---

## When To Use

- The Tooltip doesn't support complex text or operations. The tip is shown on mouse enter and is hidden on mouse leave.
- To provide an explanation fo a `button/text/operation`. It's often used instead of the HTML `title` attribute to explain `button/text/operation`.

## API

### [nz-tooltip]

| Property                        | Description                                                      | Type                                                                                                                                                                              | Default   |
| ------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `[nzTooltipArrowPointAtCenter]` | Arrow point at center of the origin                              | `boolean`                                                                                                                                                                         | `false`   |
| `[nzTooltipTitle]`              | The text shown in the tooltip                                    | `string \| TemplateRef<void>`                                                                                                                                                     | -         |
| `[nzTooltipTitleContext]`       | The context of tooltip title                                     | `object`                                                                                                                                                                          | -         |
| `[nzTooltipTrigger]`            | Tooltip trigger mode. If set to `null` it would not be triggered | `'click' \| 'focus' \| 'hover' \| null`                                                                                                                                           | `'hover'` |
| `[nzTooltipPlacement]`          | The position of the tooltip relative to the target               | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom' \| Array<string>` | `'top'`   |
| `[nzTooltipColor]`              | The background color                                             | `string`                                                                                                                                                                          | -         |
| `[nzTooltipOrigin]`             | Origin of the tooltip                                            | `ElementRef`                                                                                                                                                                      | -         |
| `[nzTooltipVisible]`            | Show or hide tooltip                                             | `boolean`                                                                                                                                                                         | `false`   |
| `(nzTooltipVisibleChange)`      | Callback of hide or show                                         | `EventEmitter<boolean>`                                                                                                                                                           | -         |
| `[nzTooltipMouseEnterDelay]`    | Delay in seconds, before tooltip is shown on mouse enter         | `number`                                                                                                                                                                          | `0.15`    |
| `[nzTooltipMouseLeaveDelay]`    | Delay in seconds, before tooltip is hidden on mouse leave        | `number`                                                                                                                                                                          | `0.1`     |
| `[nzTooltipOverlayClassName]`   | Class name of the tooltip card                                   | `string`                                                                                                                                                                          | -         |
| `[nzTooltipOverlayStyle]`       | Style of the tooltip card                                        | `object`                                                                                                                                                                          | -         |

### Common API

The following APIs are shared by `nz-tooltip`, `nz-popconfirm`, `nz-popover`.

| Method             | Description     |
| ------------------ | --------------- |
| `show()`           | Show            |
| `hide()`           | Hide            |
| `updatePosition()` | Update position |

## Exclude body element's scroll event need to refresh the position of CDK

In using the tooltip (including popconfirm、popover), the body element's scroll event will update the position of the tooltip. It will never update the tooltip's position if the scroll event happens in a custom element. You can add the `cdkScrollable` directive to achieve the goal. Take notice that you need to import relative package `import { ScrollingModule } from '@angular/cdk/scrolling';`, for more information you can visit [scrolling/api](https://material.angular.io/cdk/scrolling/api).

## Note

Please ensure that the node of `[nz-tooltip]` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Arrow pointing at the center

By specifying `nzTooltipArrowPointAtCenter` prop, the arrow can be point to the center of the target element.

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

### Basic

The simplest usage.

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

### Colorful tooltip

We preset a series of colorful Tooltip styles for use in different situations.

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

### Target

Use `nzTooltipOrigin` to set the origin of the tooltip (You can use the utility directive `NzElementPatchDirective` to get the element).

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

### Placement

The Tooltip has 12 placements choice.

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

### Template

`nzTooltipTitle` accept the type of `TemplateRef<any>`

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
