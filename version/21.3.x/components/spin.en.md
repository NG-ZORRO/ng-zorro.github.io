---
category: Components
type: Feedback
title: Spin
cover: 'https://gw.alipayobjects.com/zos/alicdn/LBcJqCPRv/Spin.svg'
description: Used for the loading status of a page or a block.
---

## When To Use

When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.

## API

### nz-spin

| Property        | Description                                                                             | Type                              | Default Value | Global Config |
| --------------- | --------------------------------------------------------------------------------------- | --------------------------------- | ------------- | ------------- |
| `[nzDelay]`     | specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds | `number`                          | -             |
| `[nzIndicator]` | the spinning indicator                                                                  | `TemplateRef<void>`               | -             | ✅            |
| `[nzSize]`      | size of Spin                                                                            | `'large' \| 'small' \| 'default'` | `'default'`   |
| `[nzSpinning]`  | whether Spin is spinning                                                                | `boolean`                         | `true`        |
| `[nzSimple]`    | whether Spin has no children                                                            | `boolean`                         | `false`       |
| `[nzTip]`       | customize description content when Spin has children                                    | `string`                          | -             |

---

## Examples

### Basic Usage

A simple loading status.

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

### Custom spinning indicator

Use custom loading indicator.

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

### delay

Specifies a delay for loading state. If `spinning` ends during delay, loading status won't appear.

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

### Inside a container

Spin in a container.

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

### Embedded mode

Embedding content into `nz-spin` will alter it into loading state.

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

### Size

A small `Spin` use in loading text, default `Spin` use in loading card-level block, and large `Spin` use in loading **page**.

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

### Customized description

Customized description content.

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
