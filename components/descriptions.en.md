---
category: Components
type: Data Display
title: Descriptions
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg'
description: Display multiple read-only fields in a group.
---

## When To Use

Commonly displayed on the details page.

## API

### nz-descriptions

| Property       | Description                                                                                                     | Type                               | Default                                         | Global Config |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------------------------- | ------------- |
| `[nzTitle]`    | Describe the title of the list, displayed at the top                                                            | `string \| TemplateRef<void>`      | `false`                                         |
| `[nzExtra]`    | The action area of the description list, placed at the top-right                                                | `string \| TemplateRef<void>`      | `-`                                             |
| `[nzBordered]` | Whether to display the border                                                                                   | `boolean`                          | `false`                                         | ✅            |
| `[nzColumn]`   | The number of `nz-descriptions-item` in a row. It could be a number or a object like `{ xs: 8, sm: 16, md: 24}` | `number \| object`                 | `{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }` | ✅            |
| `[nzSize]`     | Set the size of the list. Only works when `nzBordered` is set                                                   | `'default' \| 'middle' \| 'small'` | `'default'`                                     | ✅            |
| `[nzColon]`    | Show colon after title                                                                                          | `boolean`                          | `true`                                          | ✅            |
| `[nzLayout]`   | Set the layout of the list                                                                                      | `'horizontal' \| 'vertical'`       | `'horizontal'`                                  |               |

### nz-descriptions-item

| Property    | Description                    | Type                          | Default |
| ----------- | ------------------------------ | ----------------------------- | ------- |
| `[nzTitle]` | Description of the content     | `string \| TemplateRef<void>` | -       |
| `[nzSpan]`  | The number of columns included | `number`                      | `1`     |

---

## Examples

### Basic

Basic usage.

```typescript
import { Component } from '@angular/core';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'nz-demo-descriptions-basic',
  imports: [NzDescriptionsModule],
  template: `
    <nz-descriptions nzTitle="User Info">
      <nz-descriptions-item nzTitle="UserName">Zhou Maomao</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Telephone">18100000000</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Live">Hangzhou, Zhejiang</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Remark">Empty</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </nz-descriptions-item>
    </nz-descriptions>
  `
})
export class NzDemoDescriptionsBasicComponent {}
```

### Border

Descriptions with border and background color.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'nz-demo-descriptions-border',
  imports: [NzBadgeModule, NzDescriptionsModule],
  template: `
    <nz-descriptions nzTitle="User Info" nzBordered>
      <nz-descriptions-item nzTitle="Product">Cloud Database</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Billing Mode">Prepaid</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Automatic Renewal">YES</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Order Time">2018-04-24 18:00:00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Usage Time" [nzSpan]="2">
        2018-04-24 18:00:00 To 2019-04-24 18:00:00
      </nz-descriptions-item>
      <nz-descriptions-item nzTitle="Status" [nzSpan]="3">
        <nz-badge nzStatus="processing" nzText="Running" />
      </nz-descriptions-item>
      <nz-descriptions-item nzTitle="Negotiated Amount">$80.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Discount">$20.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Official Receipts">$60.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication_factor:3
        <br />
        Region: East China 1
        <br />
      </nz-descriptions-item>
    </nz-descriptions>
  `
})
export class NzDemoDescriptionsBorderComponent {}
```

### Custom size

Custom sizes to fit in a variety of containers.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule, NzDescriptionsSize } from 'ng-zorro-antd/descriptions';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-descriptions-custom-size',
  imports: [FormsModule, NzButtonModule, NzDescriptionsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio nzValue="default">default</label>
      <label nz-radio nzValue="middle">middle</label>
      <label nz-radio nzValue="small">small</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-descriptions nzTitle="Custom Size" [nzExtra]="extraTpl" nzBordered [nzSize]="size">
      <nz-descriptions-item nzTitle="Product">Cloud Database</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Billing">Prepaid</nz-descriptions-item>
      <nz-descriptions-item nzTitle="time">18:00:00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Amount">$80.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Discount">$20.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Official">$60.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication_factor:3
        <br />
        Region: East China 1
        <br />
      </nz-descriptions-item>
    </nz-descriptions>
    <br />
    <br />
    <nz-descriptions nzTitle="Custom Size" [nzSize]="size" [nzExtra]="extraTpl">
      <nz-descriptions-item nzTitle="Product">Cloud Database</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Billing">Prepaid</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Time">18:00:00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Amount">$80.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Discount">$20.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Official">$60.00</nz-descriptions-item>
    </nz-descriptions>
    <ng-template #extraTpl>
      <button nz-button nzType="primary">Edit</button>
    </ng-template>
  `
})
export class NzDemoDescriptionsCustomSizeComponent {
  size: NzDescriptionsSize = 'default';
}
```

### Responsive

Responsive configuration enables perfect presentation on small screen devices.

```typescript
import { Component } from '@angular/core';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'nz-demo-descriptions-responsive',
  imports: [NzDescriptionsModule],
  template: `
    <nz-descriptions
      nzTitle="Responsive Descriptions"
      nzBordered
      [nzColumn]="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <nz-descriptions-item nzTitle="Product">Cloud Database</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Billing">Prepaid</nz-descriptions-item>
      <nz-descriptions-item nzTitle="time">18:00:00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Amount">$80.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Discount">$20.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Official">$60.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication_factor:3
        <br />
        Region: East China 1
        <br />
      </nz-descriptions-item>
    </nz-descriptions>
  `
})
export class NzDemoDescriptionsResponsiveComponent {}
```

### Vertical border

Vertical descriptions with border.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'nz-demo-descriptions-vertical-border',
  imports: [NzBadgeModule, NzDescriptionsModule],
  template: `
    <nz-descriptions nzTitle="User Info" nzBordered nzLayout="vertical">
      <nz-descriptions-item nzTitle="Product">Cloud Database</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Billing Mode">Prepaid</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Automatic Renewal">YES</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Order Time">2018-04-24 18:00:00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Usage Time" [nzSpan]="2">
        2018-04-24 18:00:00 To 2019-04-24 18:00:00
      </nz-descriptions-item>
      <nz-descriptions-item nzTitle="Status" [nzSpan]="3">
        <nz-badge nzStatus="processing" nzText="Running" />
      </nz-descriptions-item>
      <nz-descriptions-item nzTitle="Negotiated Amount">$80.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Discount">$20.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Official Receipts">$60.00</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication_factor:3
        <br />
        Region: East China 1
        <br />
      </nz-descriptions-item>
    </nz-descriptions>
  `
})
export class NzDemoDescriptionsVerticalBorderComponent {}
```

### Vertical

Simplest Usage.

```typescript
import { Component } from '@angular/core';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'nz-demo-descriptions-vertical',
  imports: [NzDescriptionsModule],
  template: `
    <nz-descriptions nzTitle="User Info" nzLayout="vertical">
      <nz-descriptions-item nzTitle="UserName">Zhou Maomao</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Telephone">1810000000</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Live">Hangzhou, Zhejiang</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Address" [nzSpan]="2">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </nz-descriptions-item>
      <nz-descriptions-item nzTitle="Remark">empty</nz-descriptions-item>
    </nz-descriptions>
  `
})
export class NzDemoDescriptionsVerticalComponent {}
```
