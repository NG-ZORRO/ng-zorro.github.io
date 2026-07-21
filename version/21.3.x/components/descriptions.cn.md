---
category: Components
type: 数据展示
title: Descriptions
subtitle: 描述列表
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg'
description: 展示多个只读字段的组合。
---

## 何时使用

常见于详情页的信息展示。

## API

### nz-descriptions

| 参数           | 说明                                                                                                  | 类型                               | 默认值                                          | 支持全局配置 |
| -------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------------------------- | ------------ |
| `[nzTitle]`    | 描述列表的标题，显示在最顶部                                                                          | `string \| TemplateRef<void>`      | `false`                                         |
| `[nzExtra]`    | 描述列表的操作区域，显示在右上方                                                                      | `string \| TemplateRef<void>`      | `-`                                             |
| `[nzBordered]` | 是否展示边框                                                                                          | `boolean`                          | `false`                                         | ✅           |
| `[nzColumn]`   | 一行的 `nz-descriptions-item` 的数量，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | `number \| object`                 | `{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }` | ✅           |
| `[nzSize]`     | 设置列表的大小（只有设置 `nzBordered` 时生效）                                                        | `'default' \| 'middle' \| 'small'` | `'default'`                                     | ✅           |
| `[nzColon]`    | 在标题后显示冒号                                                                                      | `boolean`                          | `true`                                          | ✅           |

### nz-descriptions-item

| 参数        | 说明         | 类型                          | 默认值 |
| ----------- | ------------ | ----------------------------- | ------ |
| `[nzTitle]` | 内容的描述   | `string \| TemplateRef<void>` | -      |
| `[nzSpan]`  | 包含列的数量 | `number`                      | `1`    |

---

## 代码示例

### 基本

简单的展示。

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

### 带边框的

带边框和背景颜色列表。

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

### 自定义尺寸

自定义尺寸，适应在各种容器中展示。

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

### 响应式

通过响应式的配置可以实现在小屏幕设备上的完美呈现。

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

### 垂直边框

垂直且带边框。

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

### 垂直

垂直的列表。

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
