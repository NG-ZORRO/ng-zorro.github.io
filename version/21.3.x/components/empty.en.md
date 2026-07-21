---
category: Components
type: Data Display
title: Empty
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg'
description: Empty state placeholder.
---

## When To Use

When there is no data provided, display for friendly tips.

## API

### nz-empty

| Property              | Description                                                   | Type                                  | Default |
| --------------------- | ------------------------------------------------------------- | ------------------------------------- | ------- |
| `[nzNotFoundImage]`   | Customize image. Will tread as image url when string provided | `string \| TemplateRef<void>`         | -       |
| `[nzNotFoundContent]` | Custom description                                            | `string \| TemplateRef<void> \| null` | -       |
| `[nzNotFoundFooter]`  | Custom Footer                                                 | `string \| TemplateRef<void>`         | -       |

### `NZ_CONFIG`

The `nzEmpty` interface has properties as follows:

| Properties              | Description                                                                                             | Type                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `nzDefaultEmptyContent` | User default empty component. You can restore the system default empty content by providing `undefined` | `Type<any> \| TemplateRef<string> \| string \| undefined` |

### InjectionToken

| Token                     | Description                                                                                         | Parameters |
| ------------------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| `NZ_EMPTY_COMPONENT_NAME` | Would be injected to `NZ_DEFAULT_EMPTY_CONTENT`, telling that component its parent component's name | `string`   |

### Global Customizable Empty Content

You may notice or used some inputs like `nzNotFoundContent` in some components. Now they would use `Empty` component. So you can provide `nzDefaultEmptyContent` to customize them.

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

## Examples

### Basic

Simplest usage.

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

### Default Config

Use `NzEmptyService` set global Empty style.

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

### Customize

Customize image, description and extra content.

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

### No description

Simplest Usage with no description.

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

### Chose image

You can choose another style of `image` by setting `simple` to `nzNotFoundImage`.

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
