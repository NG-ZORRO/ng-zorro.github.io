---
category: Components
type: Layout
title: Splitter
tag: 19.2.0
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*f0SISaETY0wAAAAAAAAAAAAADrJ8AQ/original'
description: Splits the area into multiple horizontal or vertical sides.
---

## When To Use

The Splitter component can be used to separate areas horizontally or vertically.
You can freely drag the splitter to adjust the size of each side, while also being able to specify its minimum and
maximum width and height.

## API

### nz-splitter

| Property          | Description                     | Type                         | Default        |
| ----------------- | ------------------------------- | ---------------------------- | -------------- |
| `[nzLayout]`      | Layout direction                | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `[nzLazy]`        | Lazy Mode                       | `boolean`                    | `false`        |
| `(nzResizeStart)` | Callback before dragging starts | `EventEmitter<number[]>`     | -              |
| `(nzResize)`      | Panel size change callback      | `EventEmitter<number[]>`     | -              |
| `(nzResizeEnd)`   | Drag end callback               | `EventEmitter<number[]>`     | -              |

### nz-splitter-panel

| Property          | Description                                                     | Type                                             | Default |
| ----------------- | --------------------------------------------------------------- | ------------------------------------------------ | ------- |
| `[nzDefaultSize]` | Initial panel size support number for px or 'percent%' usage    | `number \| string`                               | -       |
| `[nzMin]`         | Minimum threshold support number for px or 'percent%' usage     | `number \| string`                               | -       |
| `[nzMax]`         | Maximum threshold support number for px or 'percent%' usage     | `number \| string`                               | -       |
| `[nzSize]`        | Controlled panel size support number for px or 'percent%' usage | `number \| string`                               | -       |
| `[nzCollapsible]` | Quick folding                                                   | `boolean  \| { start?: boolean; end?: boolean }` | `false` |
| `[nzResizable]`   | Whether to enable drag and drop                                 | `boolean`                                        | `true`  |

---

## Examples

### Basic

Initialize panel size, panel size limit.

```typescript
import { Component } from '@angular/core';

import { NzSplitterModule } from 'ng-zorro-antd/splitter';

@Component({
  selector: 'nz-demo-splitter-basic',
  imports: [NzSplitterModule],
  template: `
    <nz-splitter>
      <nz-splitter-panel nzDefaultSize="40%" nzMin="20%" nzMax="70%">
        <div class="box">First</div>
      </nz-splitter-panel>
      <nz-splitter-panel>
        <div class="box">Second</div>
      </nz-splitter-panel>
    </nz-splitter>
  `,
  styles: `
    nz-splitter {
      height: 200px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .box {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class NzDemoSplitterBasicComponent {}
```

### Collapsible

Set `nzCollapsible` to enable collapse. Can through `nzMin` to limit dragging to expand when collapsed.

```typescript
import { Component } from '@angular/core';

import { NzSplitterModule } from 'ng-zorro-antd/splitter';

@Component({
  selector: 'nz-demo-splitter-collapsible',
  imports: [NzSplitterModule],
  template: `
    <nz-splitter>
      <nz-splitter-panel nzMin="20%" [nzCollapsible]="true">
        <div class="box">First</div>
      </nz-splitter-panel>
      <nz-splitter-panel [nzCollapsible]="true">
        <div class="box">Second</div>
      </nz-splitter-panel>
    </nz-splitter>
    <br />
    <nz-splitter nzLayout="vertical">
      <nz-splitter-panel nzMin="20%" [nzCollapsible]="true">
        <div class="box">First</div>
      </nz-splitter-panel>
      <nz-splitter-panel [nzCollapsible]="true">
        <div class="box">Second</div>
      </nz-splitter-panel>
    </nz-splitter>
  `,
  styles: `
    nz-splitter {
      height: 200px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .box {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class NzDemoSplitterCollapsibleComponent {}
```

### Complex combination

Complex combination panel, quick folding, prohibited from changing size.

```typescript
import { Component } from '@angular/core';

import { NzSplitterModule } from 'ng-zorro-antd/splitter';

@Component({
  selector: 'nz-demo-splitter-complex',
  imports: [NzSplitterModule],
  template: `
    <nz-splitter>
      <nz-splitter-panel [nzCollapsible]="true">
        <div class="box">Left</div>
      </nz-splitter-panel>
      <nz-splitter-panel>
        <nz-splitter nzLayout="vertical">
          <nz-splitter-panel>
            <div class="box">Top</div>
          </nz-splitter-panel>
          <nz-splitter-panel>
            <div class="box">Bottom</div>
          </nz-splitter-panel>
        </nz-splitter>
      </nz-splitter-panel>
    </nz-splitter>
  `,
  styles: `
    nz-splitter {
      height: 300px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .box {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class NzDemoSplitterComplexComponent {}
```

### Control Mode

Control the size of the splitter. When one of the panels disables `nzResizable`, dragging will be disabled.

```typescript
import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSplitterModule } from 'ng-zorro-antd/splitter';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-splitter-control',
  imports: [FormsModule, NzButtonModule, NzFlexModule, NzSplitterModule, NzSwitchModule],
  template: `
    <nz-flex nzGap="middle" nzVertical>
      <nz-splitter (nzResize)="setSizes($event)">
        <nz-splitter-panel [nzSize]="sizes()[0]" [nzResizable]="resizable()">
          <div class="box">First</div>
        </nz-splitter-panel>
        <nz-splitter-panel [nzSize]="sizes()[1]">
          <div class="box">Second</div>
        </nz-splitter-panel>
      </nz-splitter>
      <nz-flex nzJustify="space-between">
        <nz-switch nzCheckedChildren="Enabled" nzUnCheckedChildren="Disabled" [(ngModel)]="resizable" />
        <button nz-button (click)="sizes.set(['50%', '50%'])">Reset</button>
      </nz-flex>
    </nz-flex>
  `,
  styles: `
    nz-splitter {
      height: 200px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .box {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class NzDemoSplitterControlComponent {
  resizable = model(true);
  sizes = signal<Array<number | string>>(['50%', '50%']);

  setSizes(sizes: Array<number | string>): void {
    console.log('output', sizes);
    this.sizes.set(sizes);
  }
}
```

### Lazy

Lazy mode, dragging does not update the size immediately, but updates when released.

```typescript
import { Component } from '@angular/core';

import { NzSplitterModule } from 'ng-zorro-antd/splitter';

@Component({
  selector: 'nz-demo-splitter-lazy',
  imports: [NzSplitterModule],
  template: `
    <nz-splitter nzLazy>
      <nz-splitter-panel nzDefaultSize="40%" nzMin="20%" nzMax="70%">
        <div class="box">First</div>
      </nz-splitter-panel>
      <nz-splitter-panel>
        <div class="box">Second</div>
      </nz-splitter-panel>
    </nz-splitter>
    <br />
    <nz-splitter nzLazy nzLayout="vertical">
      <nz-splitter-panel nzDefaultSize="40%" nzMin="30%" nzMax="70%">
        <div class="box">First</div>
      </nz-splitter-panel>
      <nz-splitter-panel>
        <div class="box">Second</div>
      </nz-splitter-panel>
    </nz-splitter>
  `,
  styles: `
    nz-splitter {
      height: 200px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .box {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class NzDemoSplitterLazyComponent {}
```

### Multiple Panels

Multiple panels.

```typescript
import { Component } from '@angular/core';

import { NzSplitterModule } from 'ng-zorro-antd/splitter';

@Component({
  selector: 'nz-demo-splitter-multiple',
  imports: [NzSplitterModule],
  template: `
    <nz-splitter>
      <nz-splitter-panel [nzCollapsible]="true">
        <div class="box">Panel 1</div>
      </nz-splitter-panel>
      <nz-splitter-panel [nzCollapsible]="{ start: true }">
        <div class="box">Panel 2</div>
      </nz-splitter-panel>
      <nz-splitter-panel>
        <div class="box">Panel 3</div>
      </nz-splitter-panel>
    </nz-splitter>
  `,
  styles: `
    nz-splitter {
      height: 200px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .box {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class NzDemoSplitterMultipleComponent {}
```

### Vertical

Use vertical layout.

```typescript
import { Component } from '@angular/core';

import { NzSplitterModule } from 'ng-zorro-antd/splitter';

@Component({
  selector: 'nz-demo-splitter-vertical',
  imports: [NzSplitterModule],
  template: `
    <nz-splitter nzLayout="vertical">
      <nz-splitter-panel>
        <div class="box">First</div>
      </nz-splitter-panel>
      <nz-splitter-panel>
        <div class="box">Second</div>
      </nz-splitter-panel>
    </nz-splitter>
  `,
  styles: `
    nz-splitter {
      height: 300px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .box {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class NzDemoSplitterVerticalComponent {}
```
