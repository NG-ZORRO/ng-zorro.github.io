---
category: Components
type: Navigation
title: Pagination
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg'
description: A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.
---

## When To Use

- When it will take a long time to load/render all items.
- If you want to browse the data by navigating through pages.

## API

```html
<nz-pagination [nzPageIndex]="1" [nzTotal]="50"></nz-pagination>
```

### nz-pagination

| Property               | Description                                                    | Type                                                                                         | Default            | Global Config | Version |
| ---------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------ | ------------- | ------- |
| `[nzTotal]`            | total number of data items                                     | `number`                                                                                     | `0`                | -             |
| `[nzPageIndex]`        | current page number，double binding                            | `number`                                                                                     | `1`                | -             |
| `[nzPageSize]`         | number of data items per page, double binding                  | `number`                                                                                     | `10`               | -             |
| `[nzDisabled]`         | disable pagination                                             | `boolean`                                                                                    | `false`            | -             |
| `[nzShowQuickJumper]`  | determine whether you can jump to pages directly               | `boolean`                                                                                    | `false`            | ✅            |
| `[nzShowSizeChanger]`  | determine whether `nzPageSize` can be changed                  | `boolean`                                                                                    | `false`            | ✅            |
| `[nzSimple]`           | whether to use simple mode                                     | `boolean`                                                                                    | -                  | ✅            |
| `[nzSize]`             | specify the size of `nz-pagination`                            | `'small' \| 'default'`                                                                       | `'default'`        | ✅            |
| `[nzResponsive]`       | `Pagination` would resize according to the width of the window | `boolean`                                                                                    | `false`            | -             |
| `[nzPageSizeOptions]`  | specify the sizeChanger options                                | `number[]`                                                                                   | `[10, 20, 30, 40]` | ✅            |
| `[nzItemRender]`       | to customize item                                              | `TemplateRef<{ $implicit: 'page' \| 'prev' \| 'next'\| 'prev_5'\| 'next_5', page: number }>` | -                  | -             |
| `[nzShowTotal]`        | to display the total number and range                          | `TemplateRef<{ $implicit: number, range: [ number, number ] }>`                              | -                  | -             |
| `[nzHideOnSinglePage]` | Whether to hide pager on single page                           | `boolean`                                                                                    | `false`            | -             |
| `[nzAlign]`            | Align                                                          | `NzPaginationAlign`                                                                          | `start`            | -             | 20.4.0  |
| `(nzPageIndexChange)`  | current page number change callback                            | `EventEmitter<number>`                                                                       | -                  | -             |
| `(nzPageSizeChange)`   | number of data items per page change callback                  | `EventEmitter<number>`                                                                       | -                  | -             |

---

## Examples

### Align

use `nzAlign` to align horizontally the pagination

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

### Basic

Basic pagination.

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

### Changer

Change `nzPageSize`.

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

### Page Index

Change page index number.

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

### Prev and next

Use text link for prev and next button.

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

### Jumper

Jump to a page directly.

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

### Mini size

Mini size pagination.

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

### More

More pages.

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

### Simple mode

Simple mode.

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

### Total number

You can show the total number of data by setting `nzShowTotal`.

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
