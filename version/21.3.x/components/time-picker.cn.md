---
category: Components
subtitle: 时间选择框
type: 数据录入
title: TimePicker
cover: 'https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg'
description: 输入或选择时间的控件。
---

## 何时使用

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## API

### nz-time-picker

| 参数                      | 说明                                                    | 类型                                                       | 默认值         | 全局配置 | 版本   |
| ------------------------- | ------------------------------------------------------- | ---------------------------------------------------------- | -------------- | -------- | ------ |
| `[nzId]`                  | 组件内部 input 的 id 值                                 | `string`                                                   | -              |
| `[ngModel]`               | 当前时间                                                | `Date`                                                     | -              |
| `[nzAddOn]`               | 选择框底部显示自定义的内容                              | `TemplateRef<void>`                                        | -              |
| `[nzAllowEmpty]`          | 是否展示清除按钮                                        | `boolean`                                                  | `true`         | ✅       |
| `[nzAutoFocus]`           | 自动获取焦点                                            | `boolean`                                                  | `false`        |
| `[nzBackdrop]`            | 浮层是否应带有背景板                                    | `boolean`                                                  | `false`        |
| `[nzClearText]`           | 清除按钮的提示文案                                      | `string`                                                   | `'clear'`      | ✅       |
| `[nzNowText]`             | 此刻按钮文本                                            | `string`                                                   | `'此刻'`       | ✅       |
| `[nzOkText]`              | 确认按钮文本                                            | `string`                                                   | `'确定'`       | ✅       |
| `[nzDefaultOpenValue]`    | 当 `[ngModel]` 不存在时，可以设置面板打开时默认选中的值 | `Date`                                                     | `new Date()`   |
| `[nzDisabled]`            | 禁用全部操作                                            | `boolean`                                                  | `false`        |
| `[nzDisabledHours]`       | 禁止选择部分小时选项                                    | `() => number[]`                                           | -              |
| `[nzDisabledMinutes]`     | 禁止选择部分分钟选项                                    | `(hour: number) => number[]`                               | -              |
| `[nzDisabledSeconds]`     | 禁止选择部分秒选项                                      | `(hour: number, minute: number) => number[]`               | -              |
| `[nzFormat]`              | 展示的时间格式                                          | [DatePipe](https://angular.cn/api/common/DatePipe)         | `'HH:mm:ss'`   | ✅       |
| `[nzHideDisabledOptions]` | 隐藏禁止选择的选项                                      | `boolean`                                                  | `false`        |
| `[nzHourStep]`            | 小时选项间隔                                            | `number`                                                   | `1`            | ✅       |
| `[nzMinuteStep]`          | 分钟选项间隔                                            | `number`                                                   | `1`            | ✅       |
| `[nzSecondStep]`          | 秒选项间隔                                              | `number`                                                   | `1`            | ✅       |
| `[nzSize]`                | 时间选择框大小                                          | `'large' \| 'small' \| 'default'`                          | `'default'`    |
| `[nzStatus]`              | 设置校验状态                                            | `'error' \| 'warning'`                                     | -              |
| `[nzVariant]`             | 形态变体                                                | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`   | `'outlined'`   | ✅       | 20.0.0 |
| `[nzInputReadOnly]`       | 为 input 标签设置只读属性（避免在移动设备上触发小键盘） | `boolean`                                                  | `false`        | -        |
| `[nzOpen]`                | 面板是否打开，可双向绑定                                | `boolean`                                                  | `false`        |
| `[nzPlaceHolder]`         | 没有值的时候显示的内容                                  | `string`                                                   | `'请选择时间'` |
| `[nzPopupClassName]`      | 弹出层类名                                              | `string`                                                   | `''`           | ✅       |
| `[nzUse12Hours]`          | 使用 12 小时制，为 true 时 format 默认为`h:mm:ss a`     | `boolean`                                                  | `false`        | ✅       |
| `[nzSuffixIcon]`          | 自定义的后缀图标                                        | `string \| TemplateRef`                                    | -              | ✅       |
| `[nzPrefix]`              | 自定义前缀                                              | `string \| TemplateRef`                                    | -              |          | 21.1.0 |
| `[nzNeedConfirm]`         | 是否需要确认按钮，为 false 时失去焦点即代表选择         | `boolean`                                                  | -              |          | 21.1.0 |
| `[nzPlacement]`           | 选择框弹出的位置                                        | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | -              |          | 21.1.0 |
| `(ngModelChange)`         | 时间发生变化的回调                                      | `EventEmitter<Date>`                                       | -              |
| `(nzOpenChange)`          | 面板打开/关闭时的回调                                   | `EventEmitter<boolean>`                                    | -              |

#### 方法

| 名称      | 描述     |
| --------- | -------- |
| `blur()`  | 移除焦点 |
| `focus()` | 获取焦点 |

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 附加内容

在 `nz-time-picker` 选择框底部显示自定义的内容。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-addon',
  imports: [FormsModule, NzButtonModule, NzTimePickerModule],
  template: `
    <nz-time-picker [(ngModel)]="time" [nzAddOn]="addOnTemplate" #timePicker />
    <ng-template #addOnTemplate>
      <button nz-button nzSize="small" nzType="primary" (click)="timePicker.close()">Ok</button>
    </ng-template>
  `
})
export class NzDemoTimePickerAddonComponent {
  time: Date | null = null;
}
```

### 基本

点击 `nz-time-picker`，然后可以在浮层中选择或者输入某一时间。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-basic',
  imports: [FormsModule, NzTimePickerModule],
  template: `<nz-time-picker [(ngModel)]="time" [nzDefaultOpenValue]="defaultOpenValue" />`
})
export class NzDemoTimePickerBasicComponent {
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
}
```

### 选择确认

TimePicker 默认会根据 picker 的交互行为，自动选择是否需要确认按钮。你也可以通过 `nzNeedConfirm` 属性来手动设置是否需要确认按钮。当有 `nzNeedConfirm` 时，用户始终需要点击确认按钮才能完成选择。反之，则会在选择或者失去焦点时提交。

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-confirmation',
  imports: [NzTimePickerModule],
  template: ` <nz-time-picker nzNeedConfirm />`
})
export class NzDemoTimePickerConfirmationComponent {}
```

### 禁用部分

禁用部分时间选择。

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-disabled-part',
  imports: [NzTimePickerModule],
  template: `
    <nz-time-picker
      [nzDisabledHours]="disabledHours"
      [nzDisabledMinutes]="disabledMinutes"
      [nzDisabledSeconds]="disabledSeconds"
    />
  `
})
export class NzDemoTimePickerDisabledPartComponent {
  disabledHours(): number[] {
    return [1, 2, 3];
  }

  disabledMinutes(hour: number): number[] {
    if (hour === 4) {
      return [20, 21, 22, 23, 24, 25];
    } else {
      return [];
    }
  }

  disabledSeconds(hour: number, minute: number): number[] {
    if (hour === 5 && minute === 1) {
      return [20, 21, 22, 23, 24, 25];
    } else {
      return [];
    }
  }
}
```

### 禁用

禁用时间选择。

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-disabled',
  imports: [NzTimePickerModule],
  template: `<nz-time-picker nzDisabled />`
})
export class NzDemoTimePickerDisabledComponent {}
```

### 选择时分

`nz-time-picker` 浮层中的列会随着 `nzFormat` 变化，当略去 `nzFormat` 中的某部分时，浮层中对应的列也会消失。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-hide-column',
  imports: [FormsModule, NzTimePickerModule],
  template: `<nz-time-picker [(ngModel)]="time" nzFormat="HH:mm" />`
})
export class NzDemoTimePickerHideColumnComponent {
  time = new Date();
}
```

### 步长选项

可以使用 `nzHourStep` `nzMinuteStep` `nzSecondStep` 按步长展示可选的时分秒。

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-interval-options',
  imports: [NzTimePickerModule],
  template: `<nz-time-picker [nzMinuteStep]="15" [nzSecondStep]="10" />`
})
export class NzDemoTimePickerIntervalOptionsComponent {}
```

### 自定义位置

可以通过 `nzPlacement` 手动指定弹出的位置。

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { NzPlacement } from 'ng-zorro-antd/core/types';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-placement',
  imports: [FormsModule, NzTimePickerModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="placement">
      <label nz-radio-button nzValue="bottomLeft">bottomLeft</label>
      <label nz-radio-button nzValue="bottomRight">bottomRight</label>
      <label nz-radio-button nzValue="topLeft">topLeft</label>
      <label nz-radio-button nzValue="topRight">topRight</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-time-picker [nzPlacement]="placement()" />
    <br />
  `,
  styles: `
    nz-time-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoTimePickerPlacementComponent {
  readonly placement = signal<NzPlacement>('bottomLeft');
}
```

### 前后缀

自定义前缀 `nzPrefix` 和后缀图标 `nzSuffixIcon`。

```typescript
import { Component } from '@angular/core';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-prefix-suffix',
  imports: [NzTimePickerModule, NzIconModule, NzFlexModule],
  template: `
    <nz-flex nzVertical nzGap="small">
      <nz-time-picker nzPrefix="smile" />
      <nz-time-picker [nzPrefix]="smile" />
      <nz-time-picker nzSuffixIcon="smile" />
      <nz-time-picker [nzSuffixIcon]="smile" />
      <ng-template #smile><nz-icon nzType="smile" /></ng-template>
    </nz-flex>
  `
})
export class NzDemoTimePickerPrefixSuffixComponent {}
```

### 三种大小

三种大小的输入框，大的用在表单中，中的为默认。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-size',
  imports: [FormsModule, NzTimePickerModule],
  template: `
    <nz-time-picker [(ngModel)]="time" nzSize="large" />
    <nz-time-picker [(ngModel)]="time" />
    <nz-time-picker [(ngModel)]="time" nzSize="small" />
  `,
  styles: `
    nz-time-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoTimePickerSizeComponent {
  time = new Date();
}
```

### 自定义状态

使用 `nzStatus` 为 TimePicker 添加状态，可选 `error` 或者 `warning`。

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-status',
  imports: [NzTimePickerModule],
  template: `
    <nz-time-picker nzStatus="error" />
    <br />
    <br />
    <nz-time-picker nzStatus="warning">></nz-time-picker>
  `
})
export class NzDemoTimePickerStatusComponent {}
```

### 12小时制

12小时制的时间选择器，默认format为 `h:mm:ss a`

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-use12-hours',
  imports: [FormsModule, NzTimePickerModule],
  template: `
    <nz-time-picker [(ngModel)]="time" nzUse12Hours />
    <br />
    <br />
    <nz-time-picker [(ngModel)]="time" nzUse12Hours nzFormat="h:mm a" />
  `
})
export class NzDemoTimePickerUse12HoursComponent {
  time: Date | null = null;
}
```

### 数据绑定

可以进行双向绑定。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-value',
  imports: [FormsModule, NzTimePickerModule],
  template: `<nz-time-picker [(ngModel)]="time" />`
})
export class NzDemoTimePickerValueComponent {
  time: Date | null = null;
}
```

### 形态变体

TimePicker 形态变体，可选 `outlined`、`filled`、`borderless`、`underlined` 四种形态。

```typescript
import { Component } from '@angular/core';

import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-variant',
  imports: [NzTimePickerModule, NzSpaceModule],
  template: ` <nz-space nzDirection="vertical" style="width: 100%">
    <nz-time-picker *nzSpaceItem nzVariant="outlined" />
    <nz-time-picker *nzSpaceItem nzVariant="filled" />
    <nz-time-picker *nzSpaceItem nzVariant="borderless" />
    <nz-time-picker *nzSpaceItem nzVariant="underlined" />
  </nz-space>`
})
export class NzDemoTimePickerVariantComponent {}
```
