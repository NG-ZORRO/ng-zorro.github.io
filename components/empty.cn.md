---
category: Components
type: 数据展示
subtitle: 空状态
title: Empty
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg'
description: 空状态时的展示占位图。
---

## 何时使用

当目前没有数据时，用于显式的用户提示。

## API

### nz-empty

| 参数                  | 说明                                           | 类型                                  | 默认值 |
| --------------------- | ---------------------------------------------- | ------------------------------------- | ------ |
| `[nzNotFoundImage]`   | 设置显示图片，为 `string` 时表示自定义图片地址 | `string \| TemplateRef<void>`         | -      |
| `[nzNotFoundContent]` | 自定义描述内容                                 | `string \| TemplateRef<void> \| null` | -      |
| `[nzNotFoundFooter]`  | 设置自定义 footer                              | `string \| TemplateRef<void>`         | -      |

### `NZ_CONFIG`

`nzEmpty` 接口有如下字段：

| 参数                    | 说明                                                                | 类型                                                      |
| ----------------------- | ------------------------------------------------------------------- | --------------------------------------------------------- |
| `nzDefaultEmptyContent` | 用户自定义的全局空组件，可通过 `undefined` 来取消自定义的全局空组件 | `Type<any> \| TemplateRef<string> \| string \| undefined` |

### InjectionToken

| Token                     | 说明                                                             | 参数     |
| ------------------------- | ---------------------------------------------------------------- | -------- |
| `NZ_EMPTY_COMPONENT_NAME` | 将会被注入到用户的全局自定义空组件中，告诉该组件其所在组件的名称 | `string` |

### 全局自定义空组件

你或许知道或者用过一些类似 `nzNotFoundContent` 的属性来自定义组件数据为空时的内容，现在它们都会使用 `Empty` 组件。你可以通过在 `NZ_CONFIG` 中提供 `{ empty: { nzDefaultEmptyContent: something } }` 来定义一个自定义的全局空组件。

```ts
{
  provide: NZ_CONFIG,
  useValue: {
    empty: {
      nzDefaultEmptyContent
    }
  }
}
```

---

## 代码示例

### 基本

简单的展示。

```typescript
import { Component } from '@angular/core';

import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  selector: 'nz-demo-empty-basic',
  imports: [NzEmptyModule],
  template: `<nz-empty />`
})
export class NzDemoEmptyBasicComponent {}
```

### 全局化配置

自定义全局组件的 Empty 样式。

```typescript
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-empty-config',
  imports: [
    FormsModule,
    NzCascaderModule,
    NzDividerModule,
    NzEmptyModule,
    NzIconModule,
    NzListModule,
    NzSelectModule,
    NzSwitchModule,
    NzTableModule,
    NzTransferModule,
    NzTreeSelectModule
  ],
  template: `
    <nz-switch
      nzUnCheckedChildren="default"
      nzCheckedChildren="customize"
      [(ngModel)]="customize"
      (ngModelChange)="onConfigChange()"
    />

    <nz-divider />

    <h3>Select</h3>
    <nz-select style="width: 200px" />

    <h3>TreeSelect</h3>
    <nz-tree-select style="width: 200px;" />

    <h3>Cascader</h3>
    <nz-cascader style="width: 200px;" [nzShowSearch]="true" [nzOptions]="[]" />

    <h3>Transfer</h3>
    <nz-transfer />

    <h3>Table</h3>
    <nz-table [nzData]="[]">
      <thead>
        <tr>
          <th>Title</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody></tbody>
    </nz-table>

    <h3>List</h3>
    <nz-list [nzDataSource]="[]" />

    <ng-template #customTpl let-name>
      <div style="text-align: center;">
        <nz-icon nzType="smile" style="font-size: 20px;" />
        <p>Data Not Found in {{ name }}</p>
      </div>
    </ng-template>
  `,
  styles: `
    h3 {
      font-size: inherit;
      margin: 16px 0 8px 0;
    }
  `
})
export class NzDemoEmptyConfigComponent {
  @ViewChild('customTpl', { static: false }) customTpl?: TemplateRef<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

  customize = false;

  constructor(private nzConfigService: NzConfigService) {}

  onConfigChange(): void {
    if (this.customize) {
      this.nzConfigService.set('empty', { nzDefaultEmptyContent: this.customTpl });
    } else {
      this.nzConfigService.set('empty', { nzDefaultEmptyContent: undefined });
    }
  }
}
```

### 自定义

自定义图片、描述、附属内容。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  selector: 'nz-demo-empty-customize',
  imports: [NzButtonModule, NzEmptyModule],
  template: `
    <nz-empty
      nzNotFoundImage="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      [nzNotFoundContent]="contentTpl"
      [nzNotFoundFooter]="footerTpl"
    >
      <ng-template #contentTpl>
        <span>
          Customize
          <a href="#API">Description</a>
        </span>
      </ng-template>
      <ng-template #footerTpl>
        <button nz-button nzType="primary" (click)="onClick()">Create Now</button>
      </ng-template>
    </nz-empty>
  `
})
export class NzDemoEmptyCustomizeComponent {
  onClick(): void {
    console.log('clicked');
  }
}
```

### 无描述

无描述展示。

```typescript
import { Component } from '@angular/core';

import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  selector: 'nz-demo-empty-description',
  imports: [NzEmptyModule],
  template: `<nz-empty [nzNotFoundContent]="null" />`
})
export class NzDemoEmptyDescriptionComponent {}
```

### 选择图片

可以通过设置 `nzNotFoundImage` 为 `simple` 选择另一种风格的图片。

```typescript
import { Component } from '@angular/core';

import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  selector: 'nz-demo-empty-simple',
  imports: [NzEmptyModule],
  template: `<nz-empty nzNotFoundImage="simple" />`
})
export class NzDemoEmptySimpleComponent {}
```
