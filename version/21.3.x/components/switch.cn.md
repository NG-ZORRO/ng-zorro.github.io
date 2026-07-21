---
category: Components
subtitle: 开关
type: 数据录入
title: Switch
cover: 'https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg'
description: 使用开关切换两种状态之间。
---

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## API

### nz-switch

| 参数                    | 说明                                | 类型                          | 默认值      | 全局配置 |
| ----------------------- | ----------------------------------- | ----------------------------- | ----------- | -------- |
| `[nzId]`                | 组件内部 button 的 id 值            | `string`                      | -           |
| `[ngModel]`             | 指定当前是否选中，可双向绑定        | `boolean`                     | `false`     |
| `[nzCheckedChildren]`   | 选中时的内容                        | `string \| TemplateRef<void>` | -           |
| `[nzUnCheckedChildren]` | 非选中时的内容                      | `string \| TemplateRef<void>` | -           |
| `[nzDisabled]`          | disable 状态                        | `boolean`                     | `false`     |
| `[nzSize]`              | 开关大小，可选值：`default` `small` | `'small' \| 'default'`        | `'default'` | ✅       |
| `[nzLoading]`           | 加载中的开关                        | `boolean`                     | `false`     |
| `[nzControl]`           | 是否完全由用户控制状态              | `boolean`                     | `false`     |
| `(ngModelChange)`       | 当前是否选中的回调                  | `EventEmitter<boolean>`       | `false`     |

#### 方法

| 名称    | 描述     |
| ------- | -------- |
| focus() | 获取焦点 |
| blur()  | 移除焦点 |

---

## 代码示例

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-basic',
  imports: [FormsModule, NzSwitchModule],
  template: `<nz-switch [(ngModel)]="switchValue" />`
})
export class NzDemoSwitchBasicComponent {
  switchValue = false;
}
```

### 完整控制

`Switch` 的状态完全由用户接管，不再自动根据点击事件改变数据。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-control',
  imports: [FormsModule, NzSwitchModule],
  template: ` <nz-switch [(ngModel)]="switchValue" [nzControl]="true" (click)="clickSwitch()" [nzLoading]="loading" /> `
})
export class NzDemoSwitchControlComponent {
  switchValue = false;
  loading = false;

  clickSwitch(): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        this.loading = false;
      }, 3000);
    }
  }
}
```

### 不可用

Switch 失效状态。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-disabled',
  imports: [FormsModule, NzButtonModule, NzSwitchModule],
  template: `
    <nz-switch [(ngModel)]="switchValue" [nzDisabled]="isDisabled" />
    <br />
    <br />
    <button nz-button nzType="primary" (click)="isDisabled = !isDisabled">Toggle disabled</button>
  `
})
export class NzDemoSwitchDisabledComponent {
  switchValue = false;
  isDisabled = true;
}
```

### 加载中

标识开关操作仍在执行中。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-loading',
  imports: [FormsModule, NzSwitchModule],
  template: `
    <nz-switch [ngModel]="true" nzLoading />
    <br />
    <br />
    <nz-switch nzSize="small" [ngModel]="false" nzLoading />
  `
})
export class NzDemoSwitchLoadingComponent {}
```

### 两种大小

`nzSize="small"` 表示小号开关。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-size',
  imports: [FormsModule, NzSwitchModule],
  template: `
    <nz-switch [ngModel]="true" />
    <br />
    <br />
    <nz-switch nzSize="small" [ngModel]="true" />
  `
})
export class NzDemoSwitchSizeComponent {}
```

### 文字和图标

带有文字和图标。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-text',
  imports: [FormsModule, NzIconModule, NzSwitchModule],
  template: `
    <nz-switch [ngModel]="true" nzCheckedChildren="开" nzUnCheckedChildren="关" />
    <br />
    <br />
    <nz-switch [ngModel]="false" nzCheckedChildren="1" nzUnCheckedChildren="0" />
    <br />
    <br />
    <nz-switch [ngModel]="true" [nzCheckedChildren]="checkedTemplate" [nzUnCheckedChildren]="unCheckedTemplate" />
    <ng-template #checkedTemplate><nz-icon nzType="check" /></ng-template>
    <ng-template #unCheckedTemplate><nz-icon nzType="close" /></ng-template>
  `
})
export class NzDemoSwitchTextComponent {}
```
