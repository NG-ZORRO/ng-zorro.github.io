---
category: Components
type: Layout
title: Resizable
cols: 1
experimental: true
description: Resize element.
---

## When To Use

When you want to resize elements.

- Support preview
- Support Grids System
- Support for custom handles and preview styles

### Import Style

```less
@import 'node_modules/ng-zorro-antd/resizable/style/entry.less';
```

## API

### [nz-resizable]

Resizable element the `position` attribute must be one of `'relative' | 'absolute' | 'fixed' |'sticky'`，default is `'relative'`.

```ts
interface NzResizeEvent {
  width?: number;
  height?: number;
  col?: number;
  direction?: NzResizeDirection;
  mouseEvent?: MouseEvent;
}
```

| Property              | Description                                     | Type                                              | Default  |
| --------------------- | ----------------------------------------------- | ------------------------------------------------- | -------- |
| `[nzBounds]`          | Specifies resize boundaries.                    | `'window' \| 'parent' \| ElementRef<HTMLElement>` | `parent` |
| `[nzMaxHeight]`       | Maximum height of resizable element             | `number`                                          | -        |
| `[nzMaxWidth]`        | Maximum width of resizable element              | `number`                                          | -        |
| `[nzMinHeight]`       | Minimum height of resizable element             | `number`                                          | `40`     |
| `[nzMinWidth]`        | Minimum width of resizable element              | `number`                                          | `40`     |
| `[nzGridColumnCount]` | Number of columns(-1 is not grid)               | `number`                                          | `-1`     |
| `[nzMaxColumn]`       | Maximum Column                                  | `number`                                          | -        |
| `[nzMinColumn]`       | Minimum Column                                  | `number`                                          | -        |
| `[nzLockAspectRatio]` | Lock the aspect ratio based on the initial size | `boolean`                                         | `false`  |
| `[nzPreview]`         | Enable preview when resizing                    | `boolean`                                         | `false`  |
| `[nzDisabled]`        | Disable resize                                  | `boolean`                                         | `false`  |
| `(nzResize)`          | Calls when Resizing                             | `EventEmitter<NzResizeEvent>`                     | -        |
| `(nzResizeStart)`     | Calls when resize start                         | `EventEmitter<NzResizeEvent>`                     | -        |
| `(nzResizeEnd)`       | Calls when resize end                           | `EventEmitter<NzResizeEvent>`                     | -        |

### nz-resize-handle

Define handles and directions.

```ts
type NzResizeDirection = 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
type NzCursorType = 'window' | 'grid';
```

| Property         | Description                    | Type                | Default         |
| ---------------- | ------------------------------ | ------------------- | --------------- |
| `[nzDirection]`  | Set the direction of resizable | `NzResizeDirection` | `'bottomRight'` |
| `[nzCursorType]` | Cursor type for handle         | `NzCursorType`      | `'window'`      |

### nz-resize-handles

Simpler way to define handles.

```ts
interface NzResizeHandleOption {
  direction: NzResizeDirection;
  cursorType: NzCursorType;
}
```

| Property         | Description                               | Type                                            | Default        |
| ---------------- | ----------------------------------------- | ----------------------------------------------- | -------------- |
| `[nzDirections]` | Allow handle directions or handle options | `<NzResizeDirection \| NzResizeHandleOption>[]` | ALL DIRECTIONS |

### Styling

The Component styles only contain the necessary positional properties and simple styles, you can customize the style by overriding the following class.

- `.nz-resizable` The `nz-resizable` component namespace
- `.nz-resizable-resizing` This class name that is added to `nz-resizable` while resizing
- `.nz-resizable-preview` The ghost element's class name when enable preview
- `.nz-resizable-handle-box-hover` This class name that is added to `nz-resize-handle` while mouse hover on `nz-resizable`
- `.nz-resizable-handle` The `nz-resize-handle` component namespace and directions class name
  - `.nz-resizable-handle-top`
  - `.nz-resizable-handle-left`
  - `.nz-resizable-handle-bottom`
  - `.nz-resizable-handle-right`
  - `.nz-resizable-handle-topRight`
  - `.nz-resizable-handle-topLeft`
  - `.nz-resizable-handle-bottomRight`
  - `.nz-resizable-handle-bottomLeft`
- `.nz-resizable-handle-cursor-type` Cursor type namespace for handle
  - `.nz-resizable-handle-cursor-type-window`
  - `.nz-resizable-handle-cursor-type-grid`

---

## Examples

### Basic Usage

Basic Usage.

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

### Customize

Customize Handle。

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

### Drawer

Resize the drawer width.

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

### Grid

Resize with grid.

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

### Layout

Layout with resizable.

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

### Lock Aspect Ratio

Lock the resize aspect ratio.

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

### Preview

Preview before apply size.

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

### Table

Resize the table header.

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
