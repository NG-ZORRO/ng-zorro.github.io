---
category: Components
type: 布局
title: Splitter
subtitle: 分隔面板
tag: 19.2.0
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*f0SISaETY0wAAAAAAAAAAAAADrJ8AQ/original'
description: 自由切分指定区域。
---

## 何时使用

- 可以水平或垂直地分隔区域。
- 当需要自由拖拽调整各区域大小。
- 当需要指定区域的最大最小宽高时。

## API

### nz-splitter

| 参数              | 说明             | 类型                         | 默认值         |
| ----------------- | ---------------- | ---------------------------- | -------------- |
| `[nzLayout]`      | 布局方向         | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `[nzLazy]`        | 延迟渲染模式     | `boolean`                    | `false`        |
| `(nzResizeStart)` | 开始拖拽之前回调 | `EventEmitter<number[]>`     | -              |
| `(nzResize)`      | 面板大小变化回调 | `EventEmitter<number[]>`     | -              |
| `(nzResizeEnd)`   | 拖拽结束回调     | `EventEmitter<number[]>`     | -              |

### nz-splitter-panel

| 参数              | 说明                                              | 类型                                             | 默认值  |
| ----------------- | ------------------------------------------------- | ------------------------------------------------ | ------- |
| `[nzDefaultSize]` | 初始面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string`                               | -       |
| `[nzMin]`         | 最小阈值，支持数字 px 或者文字 '百分比%' 类型     | `number \| string`                               | -       |
| `[nzMax]`         | 最大阈值，支持数字 px 或者文字 '百分比%' 类型     | `number \| string`                               | -       |
| `[nzSize]`        | 受控面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string`                               | -       |
| `[nzCollapsible]` | 快速折叠                                          | `boolean  \| { start?: boolean; end?: boolean }` | `false` |
| `[nzResizable]`   | 是否开启拖拽伸缩                                  | `boolean`                                        | `true`  |

---

## 代码示例

### 基本用法

初始化面板大小，面板大小限制。

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

### 可折叠

配置 `nzCollapsible` 提供快捷收缩能力。可以通过 `nzMin` 限制收缩后不能通过拖拽展开。

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

### 复杂组合

复杂组合面板，快捷折叠，禁止改变大小。

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

### 受控模式

受控调整尺寸。当 Panel 之间任意一方禁用 `nzResizable`，则其拖拽将被禁用。

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

### 延迟渲染模式

延迟渲染模式，拖拽时不会立即更新大小，而是等到松手时才更新。

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

### 多面板

多面板。

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

### 垂直方向

使用垂直布局。

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
