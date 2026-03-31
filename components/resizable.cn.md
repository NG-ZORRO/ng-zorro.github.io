---
category: Components
type: 布局
title: Resizable
subtitle: 调整尺寸
cols: 1
experimental: true
description: 调整元素尺寸。
---

## 何时使用

当你想调整元素尺寸时.

- 支持释放前预览提高性能
- 支持栅格系统
- 支持自定义调整手柄和预览样式

### 引入样式

```less
@import 'node_modules/ng-zorro-antd/resizable/style/entry.less';
```

## API

### [nz-resizable]

声明在需要调整尺寸的元素上，元素 `position` 属性必须为 `'relative' | 'absolute' | 'fixed' |'sticky'` 之一，默认会自动设置为 `'relative'`。

```ts
interface NzResizeEvent {
  width?: number;
  height?: number;
  col?: number;
  direction?: NzResizeDirection;
  mouseEvent?: MouseEvent;
}
```

| 参数                  | 说明                       | 类型                                              | 默认值   |
| --------------------- | -------------------------- | ------------------------------------------------- | -------- |
| `[nzBounds]`          | 调整尺寸的边界             | `'window' \| 'parent' \| ElementRef<HTMLElement>` | `parent` |
| `[nzMaxHeight]`       | 最大高度(超过边界部分忽略) | `number`                                          | -        |
| `[nzMaxWidth]`        | 最大宽度(超过边界部分忽略) | `number`                                          | -        |
| `[nzMinHeight]`       | 最小高度                   | `number`                                          | `40`     |
| `[nzMinWidth]`        | 最小宽度                   | `number`                                          | `40`     |
| `[nzGridColumnCount]` | 栅格列数(-1 为不栅格)      | `number`                                          | `-1`     |
| `[nzMaxColumn]`       | 栅格最大列数               | `number`                                          | -        |
| `[nzMinColumn]`       | 栅格最小列数               | `number`                                          | -        |
| `[nzLockAspectRatio]` | 锁定宽高比                 | `boolean`                                         | `false`  |
| `[nzPreview]`         | 开启预览                   | `boolean`                                         | `false`  |
| `[nzDisabled]`        | 禁用                       | `boolean`                                         | `false`  |
| `(nzResize)`          | 调整尺寸时的事件           | `EventEmitter<NzResizeEvent>`                     | -        |
| `(nzResizeStart)`     | 开始调整尺寸时的事件       | `EventEmitter<NzResizeEvent>`                     | -        |
| `(nzResizeEnd)`       | 结束调整尺寸时的事件       | `EventEmitter<NzResizeEvent>`                     | -        |

### nz-resize-handle

定义调整手柄及方向。

```ts
type NzResizeDirection = 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
type NzCursorType = 'window' | 'grid';
```

| 参数             | 说明           | 类型                | 默认值          |
| ---------------- | -------------- | ------------------- | --------------- |
| `[nzDirection]`  | 调整方向       | `NzResizeDirection` | `'bottomRight'` |
| `[nzCursorType]` | 手柄的光标类型 | `NzCursorType`      | `'window'`      |

### nz-resize-handles

定义调整手柄的快捷组件。

```ts
interface NzResizeHandleOption {
  direction: NzResizeDirection;
  cursorType: NzCursorType;
}
```

| 参数             | 说明                     | 类型                                            | 默认值   |
| ---------------- | ------------------------ | ----------------------------------------------- | -------- |
| `[nzDirections]` | 需要的手柄方向或手柄选项 | `<NzResizeDirection \| NzResizeHandleOption>[]` | 所有方向 |

### 样式

组件样式只包含了必要的位置属性和简单的样式，你可以通过覆写下列类名自定义样式。

- `.nz-resizable` `nz-resizable` 组件命名空间
- `.nz-resizable-resizing` 正在调整尺寸时被添加到 `nz-resizable` 上
- `.nz-resizable-preview` 开启预览时幽灵元素的类名
- `.nz-resizable-handle-box-hover` 当鼠标悬停在 `nz-resizable` 上时被添加到 ` nz-resize-handle` 上。
- `.nz-resizable-handle` 调整手柄命名空间及各方向类名
  - `.nz-resizable-handle-top`
  - `.nz-resizable-handle-left`
  - `.nz-resizable-handle-bottom`
  - `.nz-resizable-handle-right`
  - `.nz-resizable-handle-topRight`
  - `.nz-resizable-handle-topLeft`
  - `.nz-resizable-handle-bottomRight`
  - `.nz-resizable-handle-bottomLeft`
- `.nz-resizable-handle-cursor-type` 手柄的光标类型命名空间
  - `.nz-resizable-handle-cursor-type-window`
  - `.nz-resizable-handle-cursor-type-grid`

---

## 代码示例

### 基本使用

基本使用。

```typescript
import { Component } from '@angular/core';

import { NzResizableModule, NzResizeDirection, NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'nz-demo-resizable-basic',
  imports: [NzResizableModule],
  template: `
    <div
      class="box"
      nz-resizable
      [nzMaxWidth]="600"
      [nzMinWidth]="80"
      [nzMaxHeight]="200"
      [nzMinHeight]="80"
      [nzDisabled]="disabled"
      [style.height.px]="height"
      [style.width.px]="width"
      (nzResize)="onResize($event)"
    >
      <nz-resize-handles />
      content
    </div>
  `,
  styles: `
    :host {
      display: block;
      height: 200px;
    }
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eee;
      border: 1px solid #ddd;
    }
  `
})
export class NzDemoResizableBasicComponent {
  width = 400;
  height = 200;
  id = -1;
  disabled = false;
  resizeDirection: NzResizeDirection | null = null;

  onResize({ width, height, direction }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.width = width!;
      this.height = height!;
      this.resizeDirection = direction!;
    });
  }
}
```

### 自定义

自定义拖拽柄样式。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'nz-demo-resizable-customize',
  imports: [NzIconModule, NzResizableModule],
  template: `
    <div class="box" nz-resizable (nzResize)="onResize($event)" [style.height.px]="height" [style.width.px]="width">
      content
      <nz-resize-handle nzDirection="bottomRight">
        <nz-icon class="bottom-right" nzType="caret-up" nzTheme="outline" [nzRotate]="135" />
      </nz-resize-handle>
      <nz-resize-handle nzDirection="right">
        <div class="right-wrap">
          <nz-icon class="right" nzType="more" nzTheme="outline" />
        </div>
      </nz-resize-handle>
    </div>
  `,
  styles: `
    :host {
      display: block;
      height: 200px;
    }

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eee;
      border: 1px solid #ddd;
    }

    .bottom-right {
      position: absolute;
      top: 0;
      left: 0;
    }

    .right-wrap {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right {
      background: #fff;
      border: 1px solid #ddd;
      text-align: center;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
    }
  `
})
export class NzDemoResizableCustomizeComponent {
  width = 400;
  height = 200;
  id = -1;

  onResize({ width, height }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.width = width!;
      this.height = height!;
    });
  }
}
```

### 抽屉

调整抽屉宽度。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'nz-demo-resizable-drawer',
  imports: [NzButtonModule, NzDrawerModule, NzResizableModule],
  template: `
    <button nz-button nzType="primary" (click)="open()">Open</button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      [nzBodyStyle]="{
        padding: 0,
        height: 'calc(100vh - 55px)'
      }"
      [nzWidth]="width"
      nzPlacement="left"
      nzTitle="Resizable Drawer"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        @if (visible) {
          <div class="drawer-body" nz-resizable nzBounds="window" [nzMinWidth]="256" (nzResize)="onResize($event)">
            <nz-resize-handles [nzDirections]="['right']" />
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
        }
      </ng-container>
    </nz-drawer>
  `,
  styles: `
    .drawer-body {
      width: 100%;
      height: 100%;
      padding: 24px;
    }
  `
})
export class NzDemoResizableDrawerComponent {
  width = 256;
  visible = false;
  id = -1;

  onResize({ width }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.width = width!;
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
```

### 栅格

配合栅格使用

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzResizableModule, NzResizeEvent, NzResizeHandleOption } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'nz-demo-resizable-grid',
  imports: [NzGridModule, NzResizableModule],
  template: `
    <div nz-row>
      <div
        class="col"
        nz-col
        nz-resizable
        (nzResize)="onResize($event)"
        [nzMinColumn]="3"
        [nzMaxColumn]="20"
        [nzGridColumnCount]="24"
        [nzSpan]="col"
      >
        <nz-resize-handles [nzDirections]="directions" />
        col-{{ col }}
      </div>
      <div class="col right" nz-col [nzSpan]="24 - col">col-{{ 24 - col }}</div>
    </div>
  `,
  styles: `
    .col {
      padding: 16px 0;
      text-align: center;
      border-radius: 0;
      min-height: 30px;
      margin-top: 8px;
      margin-bottom: 8px;
      background: rgba(0, 160, 233, 0.7);
      color: #fff;
    }

    .col.right {
      background: #00a0e9;
    }
  `
})
export class NzDemoResizableGridComponent {
  col = 8;
  id = -1;
  directions: NzResizeHandleOption[] = [
    {
      direction: 'right',
      cursorType: 'grid'
    }
  ];

  onResize({ col }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.col = col!;
    });
  }
}
```

### 布局

调整布局尺寸。

```typescript
import { Component } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'nz-demo-resizable-layout',
  imports: [NzLayoutModule, NzResizableModule],
  template: `
    <nz-layout>
      <nz-header>Header</nz-header>
      <nz-layout>
        <nz-sider
          [nzWidth]="siderWidth"
          nz-resizable
          [nzMinWidth]="50"
          [nzMaxWidth]="300"
          (nzResize)="onSideResize($event)"
        >
          <nz-resize-handle nzDirection="right" nzCursorType="grid">
            <div class="sider-resize-line"></div>
          </nz-resize-handle>
          Sider
        </nz-sider>
        <nz-content>
          <div
            nz-resizable
            class="resizable-box"
            [style.height.px]="contentHeight"
            [nzMaxHeight]="300"
            [nzMinHeight]="50"
            (nzResize)="onContentResize($event)"
          >
            <nz-resize-handle nzDirection="bottom" nzCursorType="grid">
              <div class="content-resize-line"></div>
            </nz-resize-handle>
            Content 1
          </div>
          <div>Content 2</div>
        </nz-content>
      </nz-layout>
    </nz-layout>
  `,
  styles: `
    nz-header {
      background: #7dbcea;
      color: #fff;
    }
    nz-sider {
      background: #3ba0e9;
      color: #fff;
    }

    nz-sider.nz-resizable-resizing {
      transition: none;
    }

    nz-content {
      display: flex;
      flex-direction: column;
      background: rgba(16, 142, 233, 1);
      height: 350px;
      color: #fff;
    }

    nz-content > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    nz-content .resizable-box {
      flex: none;
    }

    nz-content,
    nz-header,
    ::ng-deep nz-sider > .ant-layout-sider-children {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .sider-resize-line {
      height: 100%;
      width: 5px;
      border-right: 1px solid #e8e8e8;
    }

    .content-resize-line {
      width: 100%;
      height: 5px;
      border-bottom: 1px solid #e8e8e8;
    }
  `
})
export class NzDemoResizableLayoutComponent {
  siderWidth = 120;
  contentHeight = 200;
  id = -1;

  onSideResize({ width }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.siderWidth = width!;
    });
  }

  onContentResize({ height }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.contentHeight = height!;
    });
  }
}
```

### 锁定比例

锁定宽高比。

```typescript
import { Component } from '@angular/core';

import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'nz-demo-resizable-lock-aspect-ratio',
  imports: [NzResizableModule],
  template: `
    <div
      class="box"
      nz-resizable
      nzLockAspectRatio
      (nzResize)="onResize($event)"
      [style.height.px]="height"
      [style.width.px]="width"
    >
      <nz-resize-handles />
      content
    </div>
  `,
  styles: `
    :host {
      display: block;
      height: 200px;
    }
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eee;
      border: 1px solid #ddd;
    }
  `
})
export class NzDemoResizableLockAspectRatioComponent {
  width = 400;
  height = 200;
  id = -1;

  onResize({ width, height }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.width = width!;
      this.height = height!;
    });
  }
}
```

### 预览

在应用尺寸前预览。

```typescript
import { Component } from '@angular/core';

import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'nz-demo-resizable-preview',
  imports: [NzResizableModule],
  template: `
    <div
      class="box"
      nz-resizable
      nzPreview
      (nzResizeEnd)="onResize($event)"
      [style.height.px]="height"
      [style.width.px]="width"
    >
      <nz-resize-handles />
      content
    </div>
  `,
  styles: `
    :host {
      display: block;
      height: 200px;
    }
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eee;
      border: 1px solid #ddd;
    }
  `
})
export class NzDemoResizablePreviewComponent {
  width = 400;
  height = 200;

  onResize({ width, height }: NzResizeEvent): void {
    this.width = width!;
    this.height = height!;
  }
}
```

### 表格

调整表头宽度。

```typescript
import { Component } from '@angular/core';

import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-resizable-table',
  imports: [NzResizableModule, NzTableModule],
  template: `
    <nz-table #basicTable [nzData]="listOfData">
      <thead>
        <tr>
          @for (col of cols; track col) {
            @if (col.width) {
              <th
                nz-resizable
                nzBounds="window"
                nzPreview
                [nzWidth]="col.width"
                [nzMaxWidth]="256"
                [nzMinWidth]="60"
                (nzResizeEnd)="onResize($event, col.title)"
              >
                {{ col.title }}
                <nz-resize-handle nzDirection="right">
                  <div class="resize-trigger"></div>
                </nz-resize-handle>
              </th>
            } @else {
              <th>
                {{ col.title }}
              </th>
            }
          }
        </tr>
      </thead>
      <tbody>
        @for (data of basicTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
            <td>-</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: `
    .nz-resizable-preview {
      border-width: 0;
      border-right-width: 1px;
    }
  `
})
export class NzDemoResizableTableComponent {
  cols: Array<{ title: string; width?: string }> = [
    {
      title: 'Name',
      width: '180px'
    },
    {
      title: 'Age',
      width: '180px'
    },
    {
      title: 'Address',
      width: '200px'
    },
    {
      title: 'Actions'
    }
  ];

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  onResize({ width }: NzResizeEvent, col: string): void {
    this.cols = this.cols.map(e => (e.title === col ? { ...e, width: `${width}px` } : e));
  }
}
```
