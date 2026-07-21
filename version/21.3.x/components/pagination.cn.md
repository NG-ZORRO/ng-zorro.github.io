---
category: Components
subtitle: 分页
type: 导航
title: Pagination
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg'
description: 分页器用于分隔长列表，每次只加载一个页面。
---

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## API

```html
<nz-pagination [nzPageIndex]="1" [nzTotal]="50"></nz-pagination>
```

### nz-pagination

| 参数                   | 说明                                                       | 类型                                                                                         | 默认值             | 全局配置 | 版本   |
| ---------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------ | -------- | ------ |
| `[nzTotal]`            | 数据总数                                                   | `number`                                                                                     | -                  | -        |
| `[nzPageIndex]`        | 当前页数，可双向绑定                                       | `number`                                                                                     | `1`                | -        |
| `[nzPageSize]`         | 每页条数，可双向绑定                                       | `number`                                                                                     | `10`               | -        |
| `[nzDisabled]`         | 是否禁用                                                   | `boolean`                                                                                    | `false`            | -        |
| `[nzShowQuickJumper]`  | 是否可以快速跳转至某页                                     | `boolean`                                                                                    | `false`            | ✅       |
| `[nzShowSizeChanger]`  | 是否可以改变 `nzPageSize`                                  | `boolean`                                                                                    | `false`            | ✅       |
| `[nzSimple]`           | 当添加该属性时，显示为简单分页                             | `boolean`                                                                                    | -                  | ✅       |
| `[nzSize]`             | 当为`'small'` 时，是小尺寸分页                             | `'small' \| 'default'`                                                                       | `'default'`        | ✅       |
| `[nzResponsive]`       | 当 `nzSize` 未指定时，根据屏幕宽度自动调整尺寸             | `boolean`                                                                                    | `false`            | -        |
| `[nzPageSizeOptions]`  | 指定每页可以显示多少条                                     | `number[]`                                                                                   | `[10, 20, 30, 40]` | ✅       |
| `[nzItemRender]`       | 用于自定义页码的结构                                       | `TemplateRef<{ $implicit: 'page' \| 'prev' \| 'next'\| 'prev_5'\| 'next_5', page: number }>` | -                  | -        |
| `[nzShowTotal]`        | 用于显示数据总量和当前数据范围，具体使用方式见代码演示部分 | `TemplateRef<{ $implicit: number, range: [ number, number ] }>`                              | -                  | -        |
| `[nzHideOnSinglePage]` | 只有一页时是否隐藏分页器                                   | `boolean`                                                                                    | `false`            | -        |
| `[nzAlign]`            | 对齐方式                                                   | `NzPaginationAlign`                                                                          | `start`            | -        | 20.4.0 |
| `(nzPageIndexChange)`  | 页码改变的回调                                             | `EventEmitter<number>`                                                                       | -                  | -        |
| `(nzPageSizeChange)`   | 每页条数改变的回调                                         | `EventEmitter<number>`                                                                       | -                  | -        |

---

## 代码示例

### 基本

使用 `nzAlign` 属性来设置分页器的水平对齐方式。

```typescript
import { Component } from '@angular/core';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-align',
  imports: [NzPaginationModule, NzFlexModule],
  template: `
    <div nz-flex nzVertical nzGap="2rem">
      <nz-pagination [nzPageIndex]="1" [nzTotal]="50" nzAlign="start" />
      <nz-pagination [nzPageIndex]="1" [nzTotal]="50" nzAlign="center" />
      <nz-pagination [nzPageIndex]="1" [nzTotal]="50" nzAlign="end" />
    </div>
  `
})
export class NzDemoPaginationAlignComponent {}
```

### 基本

基础分页。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-basic',
  imports: [NzPaginationModule],
  template: `<nz-pagination [nzPageIndex]="1" [nzTotal]="50" />`
})
export class NzDemoPaginationBasicComponent {}
```

### 改变

改变每页显示条目数。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-changer',
  imports: [NzPaginationModule],
  template: `
    <nz-pagination [nzPageIndex]="3" [nzTotal]="500" nzShowSizeChanger [nzPageSize]="10" />
    <br />
    <nz-pagination [nzPageIndex]="3" [nzTotal]="500" nzShowSizeChanger [nzPageSize]="10" nzDisabled />
  `
})
export class NzDemoPaginationChangerComponent {}
```

### 页码

改变页码。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-controlled',
  imports: [NzPaginationModule],
  template: `<nz-pagination [nzPageIndex]="3" [nzTotal]="50" />`
})
export class NzDemoPaginationControlledComponent {}
```

### 上一步和下一步

修改上一步和下一步为文字链接。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-item-render',
  imports: [NzPaginationModule],
  template: `
    <nz-pagination [nzPageIndex]="1" [nzTotal]="500" [nzItemRender]="renderItemTemplate" />
    <ng-template #renderItemTemplate let-type let-page="page">
      @switch (type) {
        @case ('page') {
          <a>{{ page }}</a>
        }
        @case ('prev') {
          <a>Previous</a>
        }
        @case ('next') {
          <a>Next</a>
        }
        @case ('prev_5') {
          <a><<</a>
        }
        @case ('next_5') {
          <a>>></a>
        }
      }
    </ng-template>
  `
})
export class NzDemoPaginationItemRenderComponent {}
```

### 跳转

快速跳转到某一页。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-jump',
  imports: [NzPaginationModule],
  template: `
    <nz-pagination [nzPageIndex]="2" [nzTotal]="500" nzShowQuickJumper />
    <br />
    <nz-pagination [nzPageIndex]="2" [nzTotal]="500" nzShowQuickJumper nzDisabled />
  `
})
export class NzDemoPaginationJumpComponent {}
```

### 迷你

迷你版本。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-mini',
  imports: [NzPaginationModule],
  template: `
    <nz-pagination [(nzPageIndex)]="current" [nzTotal]="50" nzSize="small" />
    <br />
    <nz-pagination [(nzPageIndex)]="current" [nzTotal]="50" nzSize="small" nzShowSizeChanger nzShowQuickJumper />
    <br />
    <nz-pagination [(nzPageIndex)]="current" [nzTotal]="50" nzSize="small" [nzShowTotal]="totalTemplate" />
    <ng-template #totalTemplate let-total>Total {{ total }} items</ng-template>
  `
})
export class NzDemoPaginationMiniComponent {
  current = 1;
}
```

### 更多

更多分页。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-more',
  imports: [NzPaginationModule],
  template: `<nz-pagination [nzPageIndex]="1" [nzTotal]="500" />`
})
export class NzDemoPaginationMoreComponent {}
```

### 简洁

简单的翻页。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-simple',
  imports: [NzPaginationModule],
  template: `<nz-pagination [nzPageIndex]="2" [nzTotal]="50" nzSimple />`
})
export class NzDemoPaginationSimpleComponent {}
```

### 总数

通过设置 `nzShowTotal` 展示总共有多少数据。

```typescript
import { Component } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'nz-demo-pagination-total',
  imports: [NzPaginationModule],
  template: `
    <nz-pagination [nzPageIndex]="1" [nzTotal]="85" [nzPageSize]="20" [nzShowTotal]="totalTemplate" />
    <br />
    <nz-pagination [nzPageIndex]="1" [nzTotal]="85" [nzPageSize]="20" [nzShowTotal]="rangeTemplate" />
    <ng-template #totalTemplate let-total>Total {{ total }} items</ng-template>
    <ng-template #rangeTemplate let-range="range" let-total>
      {{ range[0] }}-{{ range[1] }} of {{ total }} items
    </ng-template>
  `
})
export class NzDemoPaginationTotalComponent {}
```
