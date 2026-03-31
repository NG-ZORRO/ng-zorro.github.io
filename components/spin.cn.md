---
category: Components
type: 反馈
title: Spin
subtitle: 加载中
cover: 'https://gw.alipayobjects.com/zos/alicdn/LBcJqCPRv/Spin.svg'
description: 用于页面和区块的加载中状态。
---

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## API

### nz-spin

| 参数            | 说明                                           | 类型                              | 默认值      | 全局配置 |
| --------------- | ---------------------------------------------- | --------------------------------- | ----------- | -------- |
| `[nzDelay]`     | 延迟显示加载效果的时间（防止闪烁），单位：毫秒 | `number`                          | -           |
| `[nzIndicator]` | 加载指示符                                     | `TemplateRef<void>`               | -           | ✅       |
| `[nzSize]`      | 组件大小                                       | `'large' \| 'small' \| 'default'` | `'default'` |
| `[nzSpinning]`  | 是否旋转                                       | `boolean`                         | `true`      |
| `[nzSimple]`    | 是否包裹元素                                   | `boolean`                         | `false`     |
| `[nzTip]`       | 当作为包裹元素时，可以自定义描述文案           | `string`                          | -           |

---

## 代码示例

### 基本用法

一个简单的 loading 状态。

```typescript
import { Component } from '@angular/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'nz-demo-spin-basic',
  imports: [NzSpinModule],
  template: `<nz-spin nzSimple />`
})
export class NzDemoSpinBasicComponent {}
```

### 自定义指示符

使用自定义指示符。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'nz-demo-spin-custom-indicator',
  imports: [NzIconModule, NzSpinModule],
  template: `
    <ng-template #indicatorTemplate><nz-icon nzType="loading" /></ng-template>
    <nz-spin nzSimple [nzIndicator]="indicatorTemplate" />
  `,
  styles: `
    nz-icon {
      font-size: 24px;
    }
  `
})
export class NzDemoSpinCustomIndicatorComponent {}
```

### 延迟

延迟显示 loading 效果。当 spinning 状态在 `nzDelay` 时间内结束，则不显示 loading 状态。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-spin-delay-and-debounce',
  imports: [FormsModule, NzAlertModule, NzSpinModule, NzSwitchModule],
  template: `
    <nz-spin [nzSpinning]="isSpinning" [nzDelay]="500">
      <nz-alert
        nzType="info"
        nzMessage="Alert message title"
        nzDescription="Further details about the context of this alert."
      />
    </nz-spin>
    <br />
    <div>
      Loading state:
      <nz-switch [(ngModel)]="isSpinning" />
    </div>
  `
})
export class NzDemoSpinDelayAndDebounceComponent {
  isSpinning = false;
}
```

### 容器

放入一个容器中。

```typescript
import { Component } from '@angular/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'nz-demo-spin-inside',
  imports: [NzSpinModule],
  template: `
    <div class="container">
      <nz-spin nzSimple />
    </div>
  `,
  styles: `
    .container {
      text-align: center;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      padding: 30px 50px;
      margin: 20px 0;
    }
  `
})
export class NzDemoSpinInsideComponent {}
```

### 卡片加载中

可以直接把内容内嵌到 `nz-spin` 中，将现有容器变为加载状态。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-spin-nested',
  imports: [FormsModule, NzAlertModule, NzSpinModule, NzSwitchModule],
  template: `
    <nz-spin [nzSpinning]="isSpinning">
      <nz-alert
        nzType="info"
        nzMessage="Alert message title"
        nzDescription="Further details about the context of this alert."
      />
    </nz-spin>
    <br />
    <div>
      Loading state:
      <nz-switch [(ngModel)]="isSpinning" />
    </div>
  `
})
export class NzDemoSpinNestedComponent {
  isSpinning = false;
}
```

### 各种大小

小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。

```typescript
import { Component } from '@angular/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'nz-demo-spin-size',
  imports: [NzSpinModule],
  template: `
    <nz-spin nzSimple nzSize="small" />
    <nz-spin nzSimple />
    <nz-spin nzSimple nzSize="large" />
  `,
  styles: `
    nz-spin {
      display: inline-block;
      margin-right: 16px;
    }
  `
})
export class NzDemoSpinSizeComponent {}
```

### 自定义描述文案

自定义描述文案。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'nz-demo-spin-tip',
  imports: [NzAlertModule, NzSpinModule],
  template: `
    <nz-spin nzTip="Loading...">
      <nz-alert
        nzType="info"
        nzMessage="Alert message title"
        nzDescription="Further details about the context of this alert."
      />
    </nz-spin>
  `
})
export class NzDemoSpinTipComponent {}
```
