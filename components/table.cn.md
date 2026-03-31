---
category: Components
cols: 1
type: 数据展示
title: Table
subtitle: 表格
cover: 'https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg'
description: 展示行列数据。
---

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用

Table 组件同时具备了易用性和高度可定制性

### 高度定制

在 `nz-table` 组件中完整的暴露了 [`W3C标准 <table>`](https://www.w3.org/TR/html401/struct/tables.html) 的所有组成部分，你可以像使用 `table` 元素一样使用 `nz-table` ，根据依据业务需求，使用者可以自由的控制任何一个部分的样式、内容、逻辑和事件绑定。

### 组件增强

在 `nz-table`, `thead`, `th`, `td` 等多个暴露的元素上，组件提供了增强语法，经过配置之后可以很方便的实现多选、过滤、排序、固定列、固定表头、服务端分页等功能。

### 数据处理

将数据传入`[nzData]`，经过组件处理之后（包括分页、排序、筛选等），通过 [模板变量](https://angular.cn/guide/templates/template-statements#statement-context) 获取当前展示表格部分的数据，使用 `*ngFor` 依据需求将数据渲染。

```html
<nz-table #basicTable [nzData]="dataSet">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of basicTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
      <td>
        <a>Action 一 {{data.name}}</a>
        <nz-divider nzType="vertical"></nz-divider>
        <a>Delete</a>
      </td>
    </tr>
  </tbody>
</nz-table>
```

## API

### nz-table

| 参数                        | 说明                                                                                                                 | 类型                                                                   | 默认值                   | 全局配置 |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------ | -------- |
| `[nzData]`                  | 数据数组                                                                                                             | `T[]`                                                                  | -                        |
| `[nzFrontPagination]`       | 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false                                 | `boolean`                                                              | `true`                   |
| `[nzTotal]`                 | 当前总数据，在服务器渲染时需要传入                                                                                   | `number`                                                               | -                        |
| `[nzCustomColumn]`          | 控制表格列的展示与排序，(开启后 `nzWidthConfig` 和 `th` 的 `[nzWidth]` 将不生效)                                     | `NzCustomColumn[]`                                                     | -                        |
| `[nzPageIndex]`             | 当前页码，可双向绑定                                                                                                 | `number`                                                               | -                        |
| `[nzPageSize]`              | 每页展示多少数据，可双向绑定                                                                                         | `number`                                                               | -                        |
| `[nzShowPagination]`        | 是否显示分页器                                                                                                       | `boolean`                                                              | `true`                   |
| `[nzPaginationPosition]`    | 指定分页显示的位置                                                                                                   | `'top' \| 'bottom' \| 'both'`                                          | `'bottom'`               |
| `[nzPaginationType]`        | 指定分页显示的尺寸                                                                                                   | `'default' \| 'small'`                                                 | `'default'`              |
| `[nzBordered]`              | 是否展示外边框和列边框                                                                                               | `boolean`                                                              | `false`                  | ✅       |
| `[nzOuterBordered]`         | 是否显示外边框                                                                                                       | `boolean`                                                              | `false`                  | -        |
| `[nzWidthConfig]`           | 表头分组时指定每列宽度，与 `th` 的 `[nzWidth]` 不可混用                                                              | `string[]`                                                             | `[]`                     |
| `[nzSize]`                  | 正常或迷你类型                                                                                                       | `'middle' \| 'small' \| 'default'`                                     | `'default'`              | ✅       |
| `[nzLoading]`               | 页面是否加载中                                                                                                       | `boolean`                                                              | `false`                  |
| `[nzLoadingIndicator]`      | 加载指示符                                                                                                           | `TemplateRef<void>`                                                    | -                        | ✅       |
| `[nzLoadingDelay]`          | 延迟显示加载效果的时间（防止闪烁）                                                                                   | `number`                                                               | `0`                      |
| `[nzScroll]`                | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{ x: "300px", y: "300px" }`                                       | `object`                                                               | -                        |
| `[nzTitle]`                 | 表格标题                                                                                                             | `string \| TemplateRef<void>`                                          | -                        |
| `[nzFooter]`                | 表格尾部                                                                                                             | `string \| TemplateRef<void>`                                          | -                        |
| `[nzNoResult]`              | 无数据时显示内容                                                                                                     | `string \| TemplateRef<void>`                                          | -                        |
| `[nzPageSizeOptions]`       | 页数选择器可选值                                                                                                     | `number[]`                                                             | `[ 10, 20, 30, 40, 50 ]` |
| `[nzShowQuickJumper]`       | 是否可以快速跳转至某页                                                                                               | `boolean`                                                              | `false`                  | ✅       |
| `[nzShowSizeChanger]`       | 是否可以改变 `nzPageSize`                                                                                            | `boolean`                                                              | `false`                  | ✅       |
| `[nzShowTotal]`             | 用于显示数据总量和当前数据范围，用法参照 Pagination 组件                                                             | `TemplateRef<{ $implicit: number, range: [ number, number ] }>`        | -                        |
| `[nzItemRender]`            | 用于自定义页码的结构，用法参照 Pagination 组件                                                                       | `TemplateRef<{ $implicit: 'page' \| 'prev' \| 'next', page: number }>` | -                        |
| `[nzHideOnSinglePage]`      | 只有一页时是否隐藏分页器                                                                                             | `boolean`                                                              | `false`                  | ✅       |
| `[nzSimple]`                | 当添加该属性时，显示为简单分页                                                                                       | `boolean`                                                              | -                        | ✅       |
| `[nzTemplateMode]`          | 模板模式，无需将数据传递给 `nzData`                                                                                  | `boolean`                                                              | `false`                  |
| `[nzVirtualItemSize]`       | 虚拟滚动时每一列的高度，与 [cdk itemSize](https://material.angular.io/cdk/scrolling/api) 相同                        | `number`                                                               | `0`                      |
| `[nzVirtualMaxBufferPx]`    | 缓冲区最大像素高度，与 [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) 相同                         | `number`                                                               | `200`                    |
| `[nzVirtualMinBufferPx]`    | 缓冲区最小像素高度，低于该值时将加载新结构，与 [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) 相同 | `number`                                                               | `100`                    |
| `[nzVirtualForTrackBy]`     | 虚拟滚动数据 `TrackByFunction` 函数                                                                                  | `TrackByFunction<T>`                                                   | -                        |
| `(nzPageIndexChange)`       | 当前页码改变时的回调函数                                                                                             | `EventEmitter<number>`                                                 | -                        |
| `(nzPageSizeChange)`        | 页数改变时的回调函数                                                                                                 | `EventEmitter<number>`                                                 | -                        |
| `(nzCurrentPageDataChange)` | 当前页面展示数据改变的回调函数                                                                                       | `EventEmitter<T[]>`                                                    | -                        |
| `(nzCustomColumnChange)`    | 当表格重新排序后的回调                                                                                               | `EventEmitter<NzCustomColumn[]>`                                       | -                        |
| `(nzQueryParams)`           | 当服务端分页、筛选、排序时，用于获得参数，具体见示例                                                                 | `EventEmitter<NzTableQueryParams>`                                     | -                        |

### th

勾选属性

| 参数                | 说明                            | 类型                    | 默认值 |
| ------------------- | ------------------------------- | ----------------------- | ------ |
| `[nzShowCheckbox]`  | 是否添加 checkbox               | `boolean`               | -      |
| `[nzDisabled]`      | checkbox 是否禁用               | `boolean`               | -      |
| `[nzIndeterminate]` | checkbox indeterminate 状态     | `boolean`               | -      |
| `[nzLabel]`         | checkbox 的可访问性标签         | `string`                | -      |
| `[nzChecked]`       | checkbox 是否被选中，可双向绑定 | `boolean`               | -      |
| `(nzCheckedChange)` | 选中的回调                      | `EventEmitter<boolean>` | -      |

下拉选择属性

| 参数                   | 说明                                        | 类型                                     | 默认值 |
| ---------------------- | ------------------------------------------- | ---------------------------------------- | ------ |
| `[nzShowRowSelection]` | 是否显示下拉选择                            | `boolean`                                | -      |
| `[nzSelections]`       | 下拉选择的内容 `text` 及回调函数 `onSelect` | `Array<{ text: string, onSelect: any }>` | -      |

排序属性

| 参数                  | 说明                                                                                      | 类型                                          | 默认值                        |
| --------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------- |
| `[nzShowSort]`        | 是否显示排序                                                                              | `boolean`                                     | -                             |
| `[nzSortFn]`          | 排序函数，前端排序使用一个函数(参考 Array.sort 的 compareFunction)，服务端排序时传入 true | `NzTableSortFn<T> \| boolean`                 | -                             |
| `[nzSortDirections]`  | 支持的排序方式，取值为 `'ascend'`, `'descend'`, `null`                                    | `Array<'ascend' \| 'descend' \| null>`        | `['ascend', 'descend', null]` |
| `[nzSortOrder]`       | 当前排序状态，可双向绑定                                                                  | `'ascend' \| 'descend' \| null`               | null                          |
| `(nzSortOrderChange)` | 排序状态改变回调                                                                          | `EventEmitter<'ascend' \| 'descend' \| null>` | -                             |

过滤属性

| 参数                    | 说明                                                                                   | 类型                                                       | 默认值    |
| ----------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------- |
| `[nzShowFilter]`        | 是否显示过滤                                                                           | `boolean`                                                  | -         |
| `[nzFilterFn]`          | 前端排序时，确定筛选的运行函数，服务端排序时，传入 true                                | `NzTableFilterFn<T> \| boolean`                            | -         |
| `[noDataVirtualHeight]` | 没有数据时内部滚动的高度，如果没有传递任何内容，则使用默认值。                         | `string`                                                   | `'182px'` |
| `[nzFilters]`           | 过滤器内容, 显示数据 `text`，回调函数传出 `value`，设置 `byDefault` 以默认应用过滤规则 | `Array<{ text: string; value: any; byDefault?: boolean }>` | -         |
| `[nzFilterMultiple]`    | 是否为多选过滤器                                                                       | `boolean`                                                  | `true`    |
| `(nzFilterChange)`      | 过滤器内容选择的 value 数据回调                                                        | `EventEmitter<any[] \| any>`                               | -         |

样式属性

| 参数              | 说明                                                                                           | 类型                            | 默认值  |
| ----------------- | ---------------------------------------------------------------------------------------------- | ------------------------------- | ------- |
| `[nzWidth]`       | 指定该列宽度，表头未分组时可用                                                                 | `string`                        | -       |
| `[nzLeft]`        | 左侧距离，用于固定左侧列，当为 `true` 时自动计算，为 `false` 时停止固定                        | `string \| boolean`             | `false` |
| `[nzRight]`       | 右侧距离，用于固定右侧列，当为 `true` 时自动计算，为 `false` 时停止固定                        | `string \| boolean`             | `false` |
| `[nzAlign]`       | 设置列内容的对齐方式                                                                           | `'left' \| 'right' \| 'center'` | -       |
| `[nzCellControl]` | 设置列的位置，该值为 `NzCustomColumn` 类型中 `value` 字段的值                                  | `string`                        | -       |
| `[nzBreakWord]`   | 是否折行显示                                                                                   | `boolean`                       | `false` |
| `[nzEllipsis]`    | 超过宽度将自动省略，暂不支持和排序筛选一起使用。仅当表格布局将为 `nzTableLayout="fixed"`时可用 | `boolean`                       | `false` |
| `[colSpan]`       | 每单元格中扩展列的数量                                                                         | `number`                        | `null`  |
| `[rowSpan]`       | 每单元格中扩展行的数量                                                                         | `number`                        | `null`  |

其他

| 参数            | 说明                                   | 类型     | 默认值 |
| --------------- | -------------------------------------- | -------- | ------ |
| `[nzColumnKey]` | 当前列的 key，用于服务端筛选和排序使用 | `string` | -      |

### td

勾选属性

| 参数                | 说明                            | 类型                    | 默认值 |
| ------------------- | ------------------------------- | ----------------------- | ------ |
| `[nzShowCheckbox]`  | 是否添加 checkbox               | `boolean`               | -      |
| `[nzDisabled]`      | checkbox 是否禁用               | `boolean`               | -      |
| `[nzIndeterminate]` | checkbox indeterminate 状态     | `boolean`               | -      |
| `[nzLabel]`         | checkbox 的可访问性标签         | `string`                | -      |
| `[nzChecked]`       | checkbox 是否被选中，可双向绑定 | `boolean`               | -      |
| `(nzCheckedChange)` | 选中的回调                      | `EventEmitter<boolean>` | -      |
| `[colSpan]`         | 单元格可横跨的列数              | `number`                | `null` |
| `[rowSpan]`         | 单元格可横跨的行数              | `number`                | `null` |

展开属性

| 参数               | 说明                         | 类型                    | 默认值 |
| ------------------ | ---------------------------- | ----------------------- | ------ |
| `[nzShowExpand]`   | 是否显示展开按钮             | `boolean`               | -      |
| `[nzExpand]`       | 当前展开按钮状态，可双向绑定 | `boolean`               | -      |
| `[nzExpandIcon]`   | 自定义展开图标               | `TemplateRef<void>`     | -      |
| `(nzExpandChange)` | 当前展开按钮状态改变回调函数 | `EventEmitter<boolean>` | -      |

样式属性

| 参数              | 说明                                                                                           | 类型                            | 默认值  |
| ----------------- | ---------------------------------------------------------------------------------------------- | ------------------------------- | ------- |
| `[nzLeft]`        | 左侧距离，用于固定左侧列，当为 `true` 时自动计算，为 `false` 时停止固定                        | `string \| boolean`             | `false` |
| `[nzRight]`       | 右侧距离，用于固定右侧列，当为 `true` 时自动计算，为 `false` 时停止固定                        | `string \| boolean`             | `false` |
| `[nzAlign]`       | 设置列内容的对齐方式                                                                           | `'left' \| 'right' \| 'center'` | -       |
| `[nzCellControl]` | 设置列的位置，该值为 `NzCustomColumn` 类型中 `value` 字段的值                                  | `string`                        | -       |
| `[nzBreakWord]`   | 是否折行显示                                                                                   | `boolean`                       | `false` |
| `[nzEllipsis]`    | 超过宽度将自动省略，暂不支持和排序筛选一起使用。仅当表格布局将为 `nzTableLayout="fixed"`时可用 | `boolean`                       | `false` |

其他

| 参数             | 说明                                         | 类型     | 默认值 |
| ---------------- | -------------------------------------------- | -------- | ------ |
| `[nzIndentSize]` | 展示树形数据时，每层缩进的宽度，以 px 为单位 | `number` | -      |

### thead

| 参数                  | 说明                                                      | 类型                                                                  | 默认值 |
| --------------------- | --------------------------------------------------------- | --------------------------------------------------------------------- | ------ |
| `(nzSortOrderChange)` | 排序状态改变回调，需要与 `th` 上的 `nzColumnKey` 同时使用 | `EventEmitter<{ key: string, value: 'descend' \| 'ascend' \| null }>` | -      |

### tr

| 参数         | 说明                                                 | 类型      | 默认值 |
| ------------ | ---------------------------------------------------- | --------- | ------ |
| `[nzExpand]` | 当前列是否展开，与 `td` 上的 `nzExpand` 属性配合使用 | `boolean` | -      |

### tfoot

| 参数          | 说明                                       | 类型                           | 默认值  |
| ------------- | ------------------------------------------ | ------------------------------ | ------- |
| `[nzSummary]` | 总结栏                                     | `boolean`                      | -       |
| `[nzFixed]`   | 总结栏是否固定，与 `nzScroll` 属性配合使用 | `boolean \| 'top' \| 'bottom'` | `false` |

### nz-filter-trigger

用于自定义筛选功能

| 参数                | 说明                                     | 类型                      | 默认值  |
| ------------------- | ---------------------------------------- | ------------------------- | ------- |
| `[nzDropdownMenu]`  | Dropdown 下拉菜单组件                    | `NzDropdownMenuComponent` | -       |
| `[nzVisible]`       | 菜单是否显示，可双向绑定                 | `boolean`                 | -       |
| `[nzActive]`        | 是否激活选中图标效果                     | `boolean`                 | `false` |
| `[nzHasBackdrop]`   | 是否附带背景板                           | `boolean`                 | `false` |
| `(nzVisibleChange)` | 菜单显示状态改变时调用，参数为 nzVisible | `EventEmitter<boolean>`   | -       |

### [nz-virtual-scroll]

虚拟滚动时配合 `ng-template` 使用, 格式为： `TemplateRef<{ $implicit: T, index: number }>`。

## 注意

为了获得更好的性能，NG-ZORRO 所有组件都运行在 [OnPush](https://angular.cn/guide/components/advanced-configuration#changedetectionstrategy) 模式下，这意味着对 `@Input()` 数据的 mutate 将不会生效，请使用 immutable 方式操作数组或者对象。

```typescript
// 增加数据
this.dataSet = [
  ...this.dataSet,
  {
    key: `${this.i}`,
    name: `Edward King ${this.i}`,
    age: '32',
    address: `London, Park Lane no. ${this.i}`
  }
];
// 删除数据
this.dataSet = this.dataSet.filter(d => d.key !== i);
```

开发者也可以使用 [immer](https://immerjs.github.io/immer/docs/introduction) 获得更好的操作体验。

---

## 代码示例

### 远程加载数据

这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。

- 分页：使用 `[nzFrontPagination]="false"` 指定由服务端分页。
- 排序：使用 `[nzSortFn]="true"` 指定由服务端排序，如果需要多列排序可使用 `[nzSortPriority]="true"`。
- 筛选：使用 `[nzFilters]` 来指定筛选项，使用 `[nzFilterFn]="true"` 指定由服务端筛选
- 参数传输：通过 `(nzQueryParams)` 服务端需要的参数，数据结构为

```typescript
{
  pageIndex: number;
  pageSize: number;
  sort: Array<{ key: string; value: 'ascend' | 'descend' | null }>;
  filter: Array<{ key: string; value: any | any[] }>;
}
```

**注意，此示例使用 [模拟接口](https://randomuser.me)，展示数据可能不准确，请打开网络面板查看请求。**

```typescript
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';

interface RandomUser {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}

@Component({
  selector: 'nz-demo-table-ajax',
  imports: [NzTableModule],
  template: `
    <nz-table
      nzShowSizeChanger
      [nzData]="listOfRandomUser"
      [nzFrontPagination]="false"
      [nzLoading]="loading"
      [nzTotal]="total"
      [nzPageSize]="pageSize"
      [nzPageIndex]="pageIndex"
      (nzQueryParams)="onQueryParamsChange($event)"
    >
      <thead>
        <tr>
          <th nzColumnKey="name" [nzSortFn]="true">Name</th>
          <th nzColumnKey="gender" [nzFilters]="filterGender" [nzFilterFn]="true">Gender</th>
          <th nzColumnKey="email" [nzSortFn]="true">Email</th>
        </tr>
      </thead>
      <tbody>
        @for (data of listOfRandomUser; track data) {
          <tr>
            <td>{{ data.name.first }} {{ data.name.last }}</td>
            <td>{{ data.gender }}</td>
            <td>{{ data.email }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableAjaxComponent implements OnInit {
  total = 1;
  listOfRandomUser: RandomUser[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe(data => {
      this.loading = false;
      this.total = 200; // mock the total data here
      this.listOfRandomUser = data.results;
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }

  getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>
  ): Observable<{ results: RandomUser[] }> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`);
    filters.forEach(filter => {
      filter.value.forEach(value => {
        params = params.append(filter.key, value);
      });
    });
    return this.http
      .get<{ results: RandomUser[] }>('https://api.randomuser.me/', { params })
      .pipe(catchError(() => of({ results: [] })));
  }
}
```

### 基本用法

简单的表格，最后一列是各种操作。

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-basic',
  imports: [NzDividerModule, NzTableModule],
  template: `
    <nz-table #basicTable [nzData]="listOfData">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of basicTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
            <td>
              <a>Action 一 {{ data.name }}</a>
              <nz-divider nzType="vertical" />
              <a>Delete</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableBasicComponent {
  listOfData: Person[] = [
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
}
```

### 带边框

添加表格边框线，页头和页脚。

```typescript
import { Component } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-bordered',
  imports: [NzTableModule],
  template: `
    <nz-table #borderedTable nzBordered nzFooter="Footer" nzTitle="Header" [nzData]="dataSet">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of borderedTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>

    <nz-table #outBordered nzOuterBordered nzFooter="Footer" nzTitle="Header" [nzData]="dataSet">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of outBordered.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableBorderedComponent {
  dataSet = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
```

### 折行显示

当有连续超长字符串时，可以使用 `nzBreakWord` 来折行显示

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-break-word',
  imports: [NzTableModule],
  template: `
    <nz-table #fixedTable [nzData]="listOfData" [nzScroll]="{ x: '1000px', y: '240px' }">
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of fixedTable.data; track data) {
          <tr>
            <td nzLeft>{{ data.name }}</td>
            <td nzLeft>{{ data.age }}</td>
            <td nzBreakWord>{{ data.address }}</td>
            <td nzBreakWord>{{ data.address }}</td>
            <td nzBreakWord>{{ data.address }}</td>
            <td nzBreakWord>{{ data.address }}</td>
            <td nzBreakWord>{{ data.address }}</td>
            <td nzBreakWord>{{ data.address }}</td>
            <td nzBreakWord>{{ data.address }}</td>
            <td nzBreakWord>{{ data.address }}</td>
            <td nzRight>
              <a>action</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableBreakWordComponent implements OnInit {
  listOfData: Array<{ name: string; age: number; address: string }> = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King`,
        age: 32,
        address: `LondonLondonLondonLondonLondon`
      });
    }
  }
}
```

### 表格行/列合并

像 [`W3C标准 <table>`](https://www.w3.org/TR/html401/struct/tables.html) 一样，使用 `colspan` 和 `rowspan` 合并行/列。

```typescript
import { Component } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-colspan-rowspan',
  imports: [NzTableModule],
  template: `
    <nz-table #colSpanTable [nzData]="listOfData" nzBordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th colspan="2">Home phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of colSpanTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            @switch ($index) {
              @case (2) {
                <td>{{ data.age }}</td>
                <td rowspan="2">{{ data.tel }}</td>
                <td>{{ data.phone }}</td>
                <td>{{ data.address }}</td>
              }
              @case (3) {
                <td>{{ data.age }}</td>
                <td>{{ data.phone }}</td>
                <td>{{ data.address }}</td>
              }
              @case (4) {
                <td colspan="5">{{ data.age }}</td>
              }
              @default {
                <td>{{ data.age }}</td>
                <td>{{ data.tel }}</td>
                <td>{{ data.phone }}</td>
                <td>{{ data.address }}</td>
              }
            }
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableColspanRowspanComponent {
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park'
    },
    {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park'
    }
  ];
}
```

### 自定义列

控制表格中列的展示与排序

```typescript
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCustomColumn, NzTableModule } from 'ng-zorro-antd/table';

interface Person {
  key: string;
  name: string;
  gender: 'male' | 'female';
  age: number;
  address: string;
}

interface CustomColumn extends NzCustomColumn {
  name: string;
  required?: boolean;
  position?: 'left' | 'right';
}

@Component({
  selector: 'nz-demo-table-custom-column',
  imports: [
    NzButtonModule,
    NzDividerModule,
    NzGridModule,
    NzIconModule,
    NzModalModule,
    NzTableModule,
    CdkDrag,
    CdkDropList
  ],
  template: `
    <button nz-button nzType="primary" nzSize="small" (click)="showModal()" style="margin-bottom: 8px;">
      <nz-icon nzType="setting" nzTheme="outline" />
    </button>
    <nz-table #basicTable [nzData]="listOfData" [nzCustomColumn]="customColumn">
      <thead>
        <tr>
          <th nzCellControl="name">Name</th>
          <th nzCellControl="gender">Gender</th>
          <th nzCellControl="age">Age</th>
          <th nzCellControl="address">Address</th>
          <th nzCellControl="action">Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of basicTable.data; track data) {
          <tr>
            <td nzCellControl="name">{{ data.name }}</td>
            <td nzCellControl="gender">{{ data.gender }}</td>
            <td nzCellControl="age">{{ data.age }}</td>
            <td nzCellControl="address">{{ data.address }}</td>
            <td nzCellControl="action">
              <a>Action</a>
              <nz-divider nzType="vertical" />
              <a>Delete</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>

    <nz-modal [(nzVisible)]="isVisible" nzTitle="Custom Column" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
      <ng-container *nzModalContent>
        <div nz-row [nzGutter]="24">
          <div nz-col class="gutter-row" [nzSpan]="12">
            <div class="example-container">
              <p>Displayed (drag and drop to sort)</p>
              @for (item of title; track item) {
                <div class="example-box">
                  {{ item.name }}
                </div>
              }
              <div
                cdkDropList
                #todoList="cdkDropList"
                [cdkDropListData]="fix"
                [cdkDropListConnectedTo]="[doneList]"
                class="example-list"
                (cdkDropListDropped)="drop($event)"
              >
                @for (item of fix; track item) {
                  <div class="example-box" cdkDrag>
                    {{ item.name }}
                    <nz-icon nzType="minus-circle" nzTheme="outline" (click)="deleteCustom(item, $index)" />
                  </div>
                }
              </div>
              @for (item of footer; track item) {
                <div class="example-box">
                  {{ item.name }}
                </div>
              }
            </div>
          </div>
          <div nz-col class="gutter-row" [nzSpan]="12">
            <div class="example-container">
              <p>Not Shown</p>
              <div
                cdkDropList
                #doneList="cdkDropList"
                [cdkDropListData]="notFix"
                [cdkDropListConnectedTo]="[todoList]"
                class="example-list"
                (cdkDropListDropped)="drop($event)"
              >
                @for (item of notFix; track item) {
                  <div class="example-box" cdkDrag>
                    {{ item.name }}
                    <nz-icon nzType="plus-circle" nzTheme="outline" (click)="addCustom(item, $index)" />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </nz-modal>
  `,
  styles: `
    .example-container {
      height: 350px;
      display: flex;
      flex-direction: column;
    }

    .example-list {
      min-height: 60px;
      border-radius: 4px;
      overflow-x: hidden;
      overflow-y: auto;
      display: block;
      border: 1px dashed #ccc;
      flex: 1 1 auto;
    }

    .example-list > .example-box {
      cursor: move;
    }

    .cdk-drag-preview {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow:
        0 5px 5px -3px rgba(0, 0, 0, 0.2),
        0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .cdk-drag-placeholder {
      opacity: 0;
    }

    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    .example-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      margin: 4px;
      padding: 4px 8px;
      background-color: rgb(0 112 204 / 15%);
    }

    .example-box span {
      cursor: pointer;
    }
  `
})
export class NzDemoTableCustomColumnComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      gender: 'female',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      gender: 'female',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      gender: 'male',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  customColumn: CustomColumn[] = [
    {
      name: 'Name',
      value: 'name',
      default: true,
      required: true,
      position: 'left',
      width: 200,
      fixWidth: true
    },
    {
      name: 'Gender',
      value: 'gender',
      default: true,
      width: 200
    },
    {
      name: 'Address',
      value: 'address',
      default: true,
      width: 200
    },
    {
      name: 'Age',
      value: 'age',
      default: true,
      width: 200
    },
    {
      name: 'Action',
      value: 'action',
      default: true,
      required: true,
      position: 'right',
      width: 200
    }
  ];

  isVisible: boolean = false;
  title: CustomColumn[] = [];
  footer: CustomColumn[] = [];
  fix: CustomColumn[] = [];
  notFix: CustomColumn[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.title = this.customColumn.filter(item => item.position === 'left' && item.required);
    this.footer = this.customColumn.filter(item => item.position === 'right' && item.required);
    this.fix = this.customColumn.filter(item => item.default && !item.required);
    this.notFix = this.customColumn.filter(item => !item.default && !item.required);
  }

  drop(event: CdkDragDrop<CustomColumn[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.fix = this.fix.map(item => {
      item.default = true;
      return item;
    });
    this.notFix = this.notFix.map(item => {
      item.default = false;
      return item;
    });
    this.cdr.markForCheck();
  }

  deleteCustom(value: CustomColumn, index: number): void {
    value.default = false;
    this.notFix = [...this.notFix, value];
    this.fix.splice(index, 1);
    this.cdr.markForCheck();
  }

  addCustom(value: CustomColumn, index: number): void {
    value.default = true;
    this.fix = [...this.fix, value];
    this.notFix.splice(index, 1);
    this.cdr.markForCheck();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.customColumn = [...this.title, ...this.fix, ...this.notFix, ...this.footer];
    this.isVisible = false;
    this.cdr.markForCheck();
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
```

### 自定义筛选菜单

通过 `<nz-filter-trigger>` 组件定义自定义的列筛选功能，并实现一个搜索列的示例。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';

interface DataItem {
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'nz-demo-table-custom-filter-panel',
  imports: [FormsModule, NzButtonModule, NzDropdownModule, NzIconModule, NzInputModule, NzTableModule],
  template: `
    <nz-table #nzTable [nzData]="listOfDisplayData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th nzCustomFilter>
            Name
            <nz-filter-trigger [(nzVisible)]="visible" [nzActive]="searchValue.length > 0" [nzDropdownMenu]="menu">
              <nz-icon nzType="search" />
            </nz-filter-trigger>
          </th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of nzTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <div class="ant-table-filter-dropdown">
        <div class="search-box">
          <input type="text" nz-input placeholder="Search name" [(ngModel)]="searchValue" />
          <button nz-button nzSize="small" nzType="primary" (click)="search()" class="search-button">Search</button>
          <button nz-button nzSize="small" (click)="reset()">Reset</button>
        </div>
      </div>
    </nz-dropdown-menu>
  `,
  styles: `
    .search-box {
      padding: 8px;
    }

    .search-box input {
      width: 188px;
      margin-bottom: 8px;
      display: block;
    }

    .search-box button {
      width: 90px;
    }

    .search-button {
      margin-right: 8px;
    }
  `
})
export class NzDemoTableCustomFilterPanelComponent {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }
}
```

### 拖拽排序

使用自定义元素，用户可以导入 [@angular/cdk/drag-drop](https://material.angular.io/cdk/drag-drop/overview) 来实现拖拽排序。

> 注意：需要手动导入 `import { DragDropModule } from '@angular/cdk/drag-drop'`;

```typescript
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-drag-sorting',
  imports: [CdkDropList, CdkDrag, NzTableModule],
  template: `
    <nz-table [nzData]="listOfData" [nzFrontPagination]="false" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody cdkDropList (cdkDropListDropped)="drop($event)">
        @for (data of listOfData; track data) {
          <tr cdkDrag>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: `
    ::ng-deep .cdk-drag-preview {
      display: table;
    }

    ::ng-deep .cdk-drag-placeholder {
      opacity: 0;
    }
  `
})
export class NzDemoTableDragSortingComponent {
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

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.listOfData, event.previousIndex, event.currentIndex);
  }
}
```

### 动态控制表格属性

选择不同配置组合查看效果。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import {
  NzTableLayout,
  NzTableModule,
  NzTablePaginationPosition,
  NzTablePaginationType,
  NzTableSize
} from 'ng-zorro-antd/table';

interface ItemData {
  name: string;
  age: number | string;
  address: string;
  checked: boolean;
  expand: boolean;
  description: string;
  disabled?: boolean;
}

type TableScroll = 'unset' | 'scroll' | 'fixed';

interface Setting {
  bordered: boolean;
  loading: boolean;
  pagination: boolean;
  sizeChanger: boolean;
  title: boolean;
  header: boolean;
  footer: boolean;
  expandable: boolean;
  checkbox: boolean;
  fixHeader: boolean;
  noResult: boolean;
  ellipsis: boolean;
  simple: boolean;
  size: NzTableSize;
  tableScroll: TableScroll;
  tableLayout: NzTableLayout;
  position: NzTablePaginationPosition;
  paginationType: NzTablePaginationType;
}

@Component({
  selector: 'nz-demo-table-dynamic-settings',
  imports: [ReactiveFormsModule, NzDividerModule, NzFormModule, NzRadioModule, NzSwitchModule, NzTableModule],
  template: `
    <div class="components-table-demo-control-bar">
      <form nz-form nzLayout="inline" [formGroup]="settingForm">
        @for (item of listOfSwitch; track item) {
          <nz-form-item>
            <nz-form-label>{{ item.name }}</nz-form-label>
            <nz-form-control>
              <nz-switch [formControlName]="item.formControlName" />
            </nz-form-control>
          </nz-form-item>
        }
        @for (radio of listOfRadio; track radio) {
          <nz-form-item>
            <nz-form-label>{{ radio.name }}</nz-form-label>
            <nz-form-control>
              <nz-radio-group [formControlName]="radio.formControlName">
                @for (o of radio.listOfOption; track o) {
                  <label nz-radio-button [nzValue]="o.value">{{ o.label }}</label>
                }
              </nz-radio-group>
            </nz-form-control>
          </nz-form-item>
        }
      </form>
    </div>
    <nz-table
      #dynamicTable
      [nzScroll]="{ x: scrollX, y: scrollY }"
      [nzData]="listOfData"
      [nzTableLayout]="settingValue.tableLayout"
      [nzBordered]="settingValue.bordered"
      [nzSimple]="settingValue.simple"
      [nzLoading]="settingValue.loading"
      [nzPaginationType]="settingValue.paginationType"
      [nzPaginationPosition]="settingValue.position"
      [nzShowSizeChanger]="settingValue.sizeChanger"
      [nzFrontPagination]="settingValue.pagination"
      [nzShowPagination]="settingValue.pagination"
      [nzFooter]="settingValue.footer ? 'Here is Footer' : null"
      [nzTitle]="settingValue.title ? 'Here is Title' : null"
      [nzSize]="settingValue.size"
      (nzCurrentPageDataChange)="currentPageDataChange($event)"
    >
      <thead>
        @if (settingValue.header) {
          <tr>
            @if (settingValue.expandable) {
              <th nzWidth="40px" [nzLeft]="fixedColumn"></th>
            }
            @if (settingValue.checkbox) {
              <th
                nzWidth="60px"
                [(nzChecked)]="allChecked"
                [nzLeft]="fixedColumn"
                [nzIndeterminate]="indeterminate"
                (nzCheckedChange)="checkAll($event)"
              ></th>
            }
            <th [nzLeft]="fixedColumn">Name</th>
            <th>Age</th>
            <th>Address</th>
            <th [nzRight]="fixedColumn">Action</th>
          </tr>
        }
      </thead>
      <tbody>
        @for (data of dynamicTable.data; track data) {
          <tr>
            @if (settingValue.expandable) {
              <td [nzLeft]="fixedColumn" [(nzExpand)]="data.expand"></td>
            }
            @if (settingValue.checkbox) {
              <td [nzLeft]="fixedColumn" [(nzChecked)]="data.checked" (nzCheckedChange)="refreshStatus()"></td>
            }
            <td [nzLeft]="fixedColumn">{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td [nzEllipsis]="settingValue.ellipsis">{{ data.address }}</td>
            <td [nzRight]="fixedColumn" [nzEllipsis]="settingValue.ellipsis">
              <a href="#">Delete</a>
              <nz-divider nzType="vertical" />
              <a href="#">More action</a>
            </td>
          </tr>
          @if (settingValue.expandable) {
            <tr [nzExpand]="data.expand">
              <span>{{ data.description }}</span>
            </tr>
          }
        }
      </tbody>
    </nz-table>
  `,
  styles: `
    form nz-form-item {
      margin-right: 16px;
      margin-bottom: 8px;
    }
  `
})
export class NzDemoTableDynamicSettingsComponent implements OnInit {
  settingForm: FormGroup<{ [K in keyof Setting]: FormControl<Setting[K]> }>;
  listOfData: readonly ItemData[] = [];
  displayData: readonly ItemData[] = [];
  allChecked = false;
  indeterminate = false;
  fixedColumn = false;
  scrollX: string | null = null;
  scrollY: string | null = null;
  settingValue: Setting;
  listOfSwitch = [
    { name: 'Bordered', formControlName: 'bordered' },
    { name: 'Loading', formControlName: 'loading' },
    { name: 'Pagination', formControlName: 'pagination' },
    { name: 'PageSizeChanger', formControlName: 'sizeChanger' },
    { name: 'Title', formControlName: 'title' },
    { name: 'Column Header', formControlName: 'header' },
    { name: 'Footer', formControlName: 'footer' },
    { name: 'Expandable', formControlName: 'expandable' },
    { name: 'Checkbox', formControlName: 'checkbox' },
    { name: 'Fixed Header', formControlName: 'fixHeader' },
    { name: 'No Result', formControlName: 'noResult' },
    { name: 'Ellipsis', formControlName: 'ellipsis' },
    { name: 'Simple Pagination', formControlName: 'simple' }
  ];
  listOfRadio = [
    {
      name: 'Size',
      formControlName: 'size',
      listOfOption: [
        { value: 'default', label: 'Default' },
        { value: 'middle', label: 'Middle' },
        { value: 'small', label: 'Small' }
      ]
    },
    {
      name: 'Table Scroll',
      formControlName: 'tableScroll',
      listOfOption: [
        { value: 'unset', label: 'Unset' },
        { value: 'scroll', label: 'Scroll' },
        { value: 'fixed', label: 'Fixed' }
      ]
    },
    {
      name: 'Table Layout',
      formControlName: 'tableLayout',
      listOfOption: [
        { value: 'auto', label: 'Auto' },
        { value: 'fixed', label: 'Fixed' }
      ]
    },
    {
      name: 'Pagination Position',
      formControlName: 'position',
      listOfOption: [
        { value: 'top', label: 'Top' },
        { value: 'bottom', label: 'Bottom' },
        { value: 'both', label: 'Both' }
      ]
    },
    {
      name: 'Pagination Type',
      formControlName: 'paginationType',
      listOfOption: [
        { value: 'default', label: 'Default' },
        { value: 'small', label: 'Small' }
      ]
    }
  ];

  currentPageDataChange($event: readonly ItemData[]): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  generateData(): readonly ItemData[] {
    const data: ItemData[] = [];
    for (let i = 1; i <= 100; i++) {
      data.push({
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false
      });
    }
    return data;
  }

  constructor(private formBuilder: NonNullableFormBuilder) {
    this.settingForm = this.formBuilder.group({
      bordered: [false],
      loading: [false],
      pagination: [true],
      sizeChanger: [false],
      title: [true],
      header: [true],
      footer: [true],
      expandable: [true],
      checkbox: [true],
      fixHeader: [false],
      noResult: [false],
      ellipsis: [false],
      simple: [false],
      size: 'small' as NzTableSize,
      paginationType: 'default' as NzTablePaginationType,
      tableScroll: 'unset' as TableScroll,
      tableLayout: 'auto' as NzTableLayout,
      position: 'bottom' as NzTablePaginationPosition
    });

    this.settingValue = this.settingForm.value as Setting;
  }

  ngOnInit(): void {
    this.settingForm.valueChanges.subscribe(value => {
      this.settingValue = value as Setting;
    });
    this.settingForm.controls.tableScroll.valueChanges.subscribe(scroll => {
      this.fixedColumn = scroll === 'fixed';
      this.scrollX = scroll === 'scroll' || scroll === 'fixed' ? '100vw' : null;
    });
    this.settingForm.controls.fixHeader.valueChanges.subscribe(fixed => {
      this.scrollY = fixed ? '240px' : null;
    });
    this.settingForm.controls.noResult.valueChanges.subscribe(empty => {
      if (empty) {
        this.listOfData = [];
      } else {
        this.listOfData = this.generateData();
      }
    });
    this.listOfData = this.generateData();
  }
}
```

### 可编辑单元格

定制带单元格编辑功能的表格，自由操作单元格内容。

> 为了获得更好的性能，NG-ZORRO 所有组件都运行在 [OnPush](https://angular.cn/guide/components/advanced-configuration#changedetectionstrategy) 模式下，这意味着对 `@Input()` 数据的 mutate 将不会生效，请使用 immutable 方式操作数组或者对象。

> 开发者可以参照该例子根据自己需求自由定制表格的编辑功能。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';

interface ItemData {
  id: string;
  name: string;
  age: string;
  address: string;
}

@Component({
  selector: 'nz-demo-table-edit-cell',
  imports: [FormsModule, NzButtonModule, NzInputModule, NzPopconfirmModule, NzTableModule],
  template: `
    <button nz-button (click)="addRow()" nzType="primary">Add</button>
    <br />
    <br />
    <nz-table #editRowTable nzBordered [nzData]="listOfData">
      <thead>
        <tr>
          <th nzWidth="30%">Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of editRowTable.data; track data) {
          <tr class="editable-row">
            <td>
              <div class="editable-cell" [hidden]="editId === data.id" (click)="startEdit(data.id)">
                {{ data.name }}
              </div>
              <input [hidden]="editId !== data.id" type="text" nz-input [(ngModel)]="data.name" (blur)="stopEdit()" />
            </td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
            <td>
              <a nz-popconfirm nzPopconfirmTitle="Sure to delete?" (nzOnConfirm)="deleteRow(data.id)">Delete</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: `
    .editable-cell {
      position: relative;
      padding: 5px 12px;
      cursor: pointer;
    }

    .editable-row:hover .editable-cell {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      padding: 4px 11px;
    }
  `
})
export class NzDemoTableEditCellComponent implements OnInit {
  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: '32',
        address: `London, Park Lane no. ${this.i}`
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
}
```

### 可编辑行

定制带行编辑功能的表格，自由操作行内容。

> 为了获得更好的性能，NG-ZORRO 所有组件都运行在 [OnPush](https://angular.cn/guide/components/advanced-configuration#changedetectionstrategy) 模式下，这意味着对 `@Input()` 数据的 mutate 将不会生效，请使用 immutable 方式操作数组或者对象。

> 开发者可以参照该例子根据自己需求自由定制表格的编辑功能。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';

interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-edit-row',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule],
  template: `
    <nz-table #editRowTable nzBordered [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th nzWidth="25%">Name</th>
          <th nzWidth="15%">Age</th>
          <th nzWidth="40%">Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of editRowTable.data; track data) {
          <tr>
            @if (!editCache[data.id].edit) {
              <td>{{ data.name }}</td>
              <td>{{ data.age }}</td>
              <td>{{ data.address }}</td>
              <td><a (click)="startEdit(data.id)">Edit</a></td>
            } @else {
              <td><input type="text" nz-input [(ngModel)]="editCache[data.id].data.name" /></td>
              <td><input type="text" nz-input [(ngModel)]="editCache[data.id].data.age" /></td>
              <td><input type="text" nz-input [(ngModel)]="editCache[data.id].data.address" /></td>
              <td>
                <a (click)="saveEdit(data.id)" class="save">Save</a>
                <a nz-popconfirm nzPopconfirmTitle="Sure to cancel?" (nzOnConfirm)="cancelEdit(data.id)">Cancel</a>
              </td>
            }
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: `
    .save {
      margin-right: 8px;
    }
  `
})
export class NzDemoTableEditRowComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data: ItemData[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: `${i}`,
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }
}
```

### 单元格自动省略

设置 `nzTableLayout="fixed"` 与 `nzEllipsis` 可以让单元格内容根据宽度自动省略。

> 列头缩略暂不支持和排序筛选一起使用。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-ellipsis',
  imports: [NzTableModule],
  template: `
    <nz-table #fixedTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th nzEllipsis>Column ColumnColumn 3</th>
          <th>Column 4</th>
        </tr>
      </thead>
      <tbody>
        @for (data of fixedTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td nzEllipsis>{{ data.address }}</td>
            <td nzEllipsis>{{ data.address }}</td>
            <td nzEllipsis>{{ data.address }}</td>
            <td nzEllipsis>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableEllipsisComponent implements OnInit {
  listOfData: Array<{ name: string; age: number; address: string }> = [];

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.listOfData.push({
        name: `Edward King`,
        age: 32,
        address: `LondonLondonLondonLondonLondon`
      });
    }
  }
}
```

### 树形数据展示

表格支持树形数据的展示，可以通过设置 `nzIndentSize` 以控制每一层的缩进宽度，本例子中提供了树与数组之间的转换函数，实际业务中请根据需求修改。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

export interface TreeNodeInterface {
  key: string;
  name: string;
  age?: number;
  level?: number;
  expand?: boolean;
  address?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}

@Component({
  selector: 'nz-demo-table-expand-children',
  imports: [NzTableModule],
  template: `
    <nz-table #expandTable [nzData]="listOfMapData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of expandTable.data; track data) {
          @for (item of mapOfExpandedData[data.key]; track item) {
            @if ((item.parent && item.parent.expand) || !item.parent) {
              <tr>
                <td
                  [nzIndentSize]="item.level! * 20"
                  [nzShowExpand]="!!item.children"
                  [(nzExpand)]="item.expand"
                  (nzExpandChange)="collapse(mapOfExpandedData[data.key], item, $event)"
                >
                  {{ item.name }}
                </td>
                <td>{{ item.age }}</td>
                <td>{{ item.address }}</td>
              </tr>
            }
          }
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableExpandChildrenComponent implements OnInit {
  listOfMapData: TreeNodeInterface[] = [
    {
      key: `1`,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [
        {
          key: `1-1`,
          name: 'John Brown',
          age: 42,
          address: 'New York No. 2 Lake Park'
        },
        {
          key: `1-2`,
          name: 'John Brown jr.',
          age: 30,
          address: 'New York No. 3 Lake Park',
          children: [
            {
              key: `1-2-1`,
              name: 'Jimmy Brown',
              age: 16,
              address: 'New York No. 3 Lake Park'
            }
          ]
        },
        {
          key: `1-3`,
          name: 'Jim Green sr.',
          age: 72,
          address: 'London No. 1 Lake Park',
          children: [
            {
              key: `1-3-1`,
              name: 'Jim Green',
              age: 42,
              address: 'London No. 2 Lake Park',
              children: [
                {
                  key: `1-3-1-1`,
                  name: 'Jim Green jr.',
                  age: 25,
                  address: 'London No. 3 Lake Park'
                },
                {
                  key: `1-3-1-2`,
                  name: 'Jimmy Green sr.',
                  age: 18,
                  address: 'London No. 4 Lake Park'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: `2`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [key: string]: boolean }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }
}
```

### 自定义展开 icon

当使用 `nzExpand` 属性时，添加 `nzExpandIcon` 自定义展开图标。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-expand-icon',
  imports: [NzIconModule, NzTableModule],
  template: `
    <nz-table #nzTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th nzWidth="60px"></th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of nzTable.data; track data) {
          <tr>
            <td [nzExpand]="expandSet.has(data.id)" [nzExpandIcon]="expandIcon"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
          <tr [nzExpand]="expandSet.has(data.id)">
            <span>{{ data.description }}</span>
          </tr>
          <ng-template #expandIcon>
            @if (!expandSet.has(data.id)) {
              <nz-icon nzType="plus-circle" nzTheme="outline" (click)="onExpandChange(data.id, true)" />
            } @else {
              <nz-icon nzType="minus-circle" nzTheme="outline" (click)="onExpandChange(data.id, false)" />
            }
          </ng-template>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableExpandIconComponent {
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  listOfData = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      expand: false,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      expand: false,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      expand: false,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    }
  ];
}
```

### 可展开

当表格内容较多不能一次性完全展示时，可以通过 `td` 上的 `nzExpand` 属性展开。

```typescript
import { Component } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-expand',
  imports: [NzTableModule],
  template: `
    <nz-table #nzTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th nzWidth="60px"></th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of nzTable.data; track data) {
          <tr>
            <td [nzExpand]="expandSet.has(data.id)" (nzExpandChange)="onExpandChange(data.id, $event)"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
          <tr [nzExpand]="expandSet.has(data.id)">
            <span>{{ data.description }}</span>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableExpandComponent {
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  listOfData = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      expand: false,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      expand: false,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      expand: false,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    }
  ];
}
```

### 固定头和列

同时固定头和列，适合同时展示有大量数据和数据列。

> 列头与内容不对齐或出现列重复，请指定固定列的宽度 `[nzWidth]`。如果指定 width 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。
> 建议指定 `nzScroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `nzScroll.x`。
> 注意：固定列通过 sticky 实现，IE 11 会降级成横向滚动。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

interface ItemData {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-fixed-columns-header',
  imports: [NzTableModule],
  template: `
    <nz-table #fixedTable [nzData]="listOfData" [nzScroll]="{ x: '1150px', y: '240px' }">
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of fixedTable.data; track data) {
          <tr>
            <td nzLeft>{{ data.name }}</td>
            <td nzLeft>{{ data.age }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td nzRight>
              <a>action</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableFixedColumnsHeaderComponent implements OnInit {
  listOfData: ItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
  }
}
```

### 固定列

对于列数很多的数据，可以使用 `[nzLeft]` 和 `[nzRight]` 固定前后的列，横向滚动查看其它数据，需要和 `[nzScroll].x` 配合使用。

> 列头与内容不对齐或出现列重复，请指定固定列的宽度 `[nzWidth]`。如果指定 width 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。
> 建议指定 `nzScroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `nzScroll.x`。
> 注意：固定列通过 sticky 实现，IE 11 会降级成横向滚动。

```typescript
import { Component } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-fixed-columns',
  imports: [NzTableModule],
  template: `
    <nz-table #columnTable [nzData]="listOfData" [nzScroll]="{ x: '1100px' }">
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th nzRight>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of columnTable.data; track data) {
          <tr>
            <td nzLeft>{{ data.name }}</td>
            <td nzLeft>{{ data.age }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td nzRight>{{ data.address }}</td>
            <td nzRight>
              <a>action</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableFixedColumnsComponent {
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London'
    }
  ];
}
```

### 固定表头

指定 `[nzScroll]` 的 `y` 数值 方便一页内展示大量数据，每一列的宽度可以由 `[nzWidth]` 指定。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

interface ItemData {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-fixed-header',
  imports: [NzTableModule],
  template: `
    <nz-table #headerTable [nzData]="listOfData" [nzPageSize]="50" [nzScroll]="{ y: '240px' }">
      <thead>
        <tr>
          <th>Name</th>
          <th nzWidth="100px">Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of headerTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableFixedHeaderComponent implements OnInit {
  listOfData: ItemData[] = [];

  ngOnInit(): void {
    const data: ItemData[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
    this.listOfData = data;
  }
}
```

### 表头分组

固定列与分组表头联合使用。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

interface ItemData {
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

@Component({
  selector: 'nz-demo-table-grouping-columns',
  imports: [NzTableModule],
  template: `
    <nz-table #groupingTable [nzData]="listOfData" nzBordered nzSize="middle" [nzScroll]="{ x: '1200px', y: '240px' }">
      <thead>
        <tr>
          <th rowspan="4" nzLeft [nzFilters]="filterName" [nzFilterFn]="nameFilterFn">Name</th>
          <th colspan="4">Other</th>
          <th colspan="2">Company</th>
          <th rowspan="4" nzRight>Gender</th>
        </tr>
        <tr>
          <th rowspan="3" [nzSortFn]="sortAgeFn">Age</th>
          <th colspan="3">Address</th>
          <th rowspan="3">Company Address</th>
          <th rowspan="3">Company Name</th>
        </tr>
        <tr>
          <th rowspan="2">Street</th>
          <th colspan="2">Block</th>
        </tr>
        <tr>
          <th>Building</th>
          <th>Door No.</th>
        </tr>
      </thead>
      <tbody>
        @for (data of groupingTable.data; track data) {
          <tr>
            <td nzLeft>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.street }}</td>
            <td>{{ data.building }}</td>
            <td>{{ data.number }}</td>
            <td>{{ data.companyAddress }}</td>
            <td>{{ data.companyName }}</td>
            <td nzRight>{{ data.gender }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableGroupingColumnsComponent implements OnInit {
  listOfData: ItemData[] = [];
  sortAgeFn = (a: ItemData, b: ItemData): number => a.age - b.age;
  nameFilterFn = (list: string[], item: ItemData): boolean => list.some(name => item.name.indexOf(name) !== -1);
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];

  ngOnInit(): void {
    const data: ItemData[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M'
      });
    }
    this.listOfData = data;
  }
}
```

### 多列排序

使用 `[nzSortPriority]` 字段以配置多列排序优先级。通过 `[nzSortFn]` 配置排序逻辑。

```typescript
import { Component } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

interface ItemData {
  name: string;
  chinese: number;
  math: number;
  english: number;
}

@Component({
  selector: 'nz-demo-table-multiple-sorter',
  imports: [NzTableModule],
  template: `
    <nz-table #sortTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          @for (column of listOfColumn; track column) {
            <th [nzSortFn]="column.compare" [nzSortPriority]="column.priority">
              {{ column.title }}
            </th>
          }
        </tr>
      </thead>
      <tbody>
        @for (data of sortTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.chinese }}</td>
            <td>{{ data.math }}</td>
            <td>{{ data.english }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableMultipleSorterComponent {
  listOfColumn = [
    {
      title: 'Name',
      compare: (a: ItemData, b: ItemData) => a.name.localeCompare(b.name),
      priority: false
    },
    {
      title: 'Chinese Score',
      compare: (a: ItemData, b: ItemData) => a.chinese - b.chinese,
      priority: 3
    },
    {
      title: 'Math Score',
      compare: (a: ItemData, b: ItemData) => a.math - b.math,
      priority: 2
    },
    {
      title: 'English Score',
      compare: (a: ItemData, b: ItemData) => a.english - b.english,
      priority: 1
    }
  ];
  listOfData: ItemData[] = [
    {
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70
    },
    {
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70
    },
    {
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89
    }
  ];
}
```

### 嵌套子表格

展示每行数据更详细的信息。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

interface ParentItemData {
  key: number;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number | string;
  creator: string;
  createdAt: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  name: string;
  date: string;
  upgradeNum: string;
}

@Component({
  selector: 'nz-demo-table-nested-table',
  imports: [NzBadgeModule, NzDividerModule, NzDropdownModule, NzIconModule, NzTableModule],
  template: `
    <nz-table #nestedTable [nzData]="listOfParentData" [nzPageSize]="10">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Platform</th>
          <th>Version</th>
          <th>Upgraded</th>
          <th>Creator</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of nestedTable.data; track data) {
          <tr>
            <td [(nzExpand)]="data.expand"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.platform }}</td>
            <td>{{ data.version }}</td>
            <td>{{ data.upgradeNum }}</td>
            <td>{{ data.creator }}</td>
            <td>{{ data.createdAt }}</td>
            <td>
              <a>Publish</a>
            </td>
          </tr>
          <tr [nzExpand]="data.expand">
            <nz-table #innerTable [nzData]="listOfChildrenData" nzSize="middle" [nzShowPagination]="false">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Upgrade Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                @for (data of innerTable.data; track data) {
                  <tr>
                    <td>{{ data.date }}</td>
                    <td>{{ data.name }}</td>
                    <td>
                      <nz-badge nzStatus="success" nzText="Finished" />
                    </td>
                    <td>{{ data.upgradeNum }}</td>
                    <td>
                      <span class="table-operation">
                        <a nz-dropdown class="operation" [nzDropdownMenu]="menu">
                          Pause
                          <nz-icon nzType="down" />
                        </a>
                        <nz-dropdown-menu #menu="nzDropdownMenu">
                          <ul nz-menu>
                            <li nz-menu-item>
                              <a>Action 1</a>
                            </li>
                            <li nz-menu-item>
                              <a>Action 2</a>
                            </li>
                          </ul>
                        </nz-dropdown-menu>
                        <nz-divider nzType="vertical" />
                        <a class="operation">Stop</a>
                        <nz-divider nzType="vertical" />
                        <a>More</a>
                      </span>
                    </td>
                  </tr>
                }
              </tbody>
            </nz-table>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableNestedTableComponent implements OnInit {
  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        name: 'Screen',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }
  }
}
```

### 可控的筛选和排序

修改 `[nzSortOrder]` 和 `[nzFilters]` 来指定当前列的排序与筛选状态。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder
} from 'ng-zorro-antd/table';

interface ItemData {
  name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<ItemData> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<ItemData> | null;
}

@Component({
  selector: 'nz-demo-table-reset-filter',
  imports: [NzButtonModule, NzTableModule],
  template: `
    <div class="table-operations">
      <button nz-button (click)="sortByAge()">Sort age</button>
      <button nz-button (click)="resetFilters()">Clear filters</button>
      <button nz-button (click)="resetSortAndFilters()">Clear filters and sorters</button>
    </div>
    <nz-table #filterTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          @for (column of listOfColumns; track column.name) {
            <th
              [(nzSortOrder)]="column.sortOrder"
              [nzSortFn]="column.sortFn"
              [nzFilters]="column.listOfFilter"
              [nzFilterFn]="column.filterFn"
            >
              {{ column.name }}
            </th>
          }
        </tr>
      </thead>
      <tbody>
        @for (data of filterTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: `
    .table-operations {
      margin-bottom: 16px;
    }

    .table-operations > button {
      margin-right: 8px;
    }
  `
})
export class NzDemoTableResetFilterComponent {
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: ItemData, b: ItemData) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ],
      filterFn: (list: string[], item: ItemData) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: null,
      sortFn: (a: ItemData, b: ItemData) => a.age - b.age,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Address',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: ItemData) => item.address.indexOf(address) !== -1
    }
  ];
  listOfData: ItemData[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];

  sortByAge(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Age') {
        item.sortOrder = 'descend';
      } else {
        item.sortOrder = null;
      }
    });
  }

  resetFilters(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Name') {
        item.listOfFilter = [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' }
        ];
      } else if (item.name === 'Address') {
        item.listOfFilter = [
          { text: 'London', value: 'London' },
          { text: 'Sidney', value: 'Sidney' }
        ];
      }
    });
  }

  resetSortAndFilters(): void {
    this.listOfColumns.forEach(item => {
      item.sortOrder = null;
    });
    this.resetFilters();
  }
}
```

### 选择和操作

第一列是联动的选择框，增加 `[nzChecked]` 后，`th` 获得和 `nz-checkbox` 一样的功能，选择后进行操作，完成后清空选择，请注意：数据逻辑需要自行控制。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}

@Component({
  selector: 'nz-demo-table-row-selection-and-operation',
  imports: [NzButtonModule, NzTableModule],
  template: `
    <div class="send-request">
      <button
        nz-button
        nzType="primary"
        [disabled]="setOfCheckedId.size === 0"
        [nzLoading]="loading"
        (click)="sendRequest()"
      >
        Send Request
      </button>
      <span>Selected {{ setOfCheckedId.size }} items</span>
    </div>
    <nz-table
      #rowSelectionTable
      nzShowPagination
      nzShowSizeChanger
      [nzData]="listOfData"
      (nzCurrentPageDataChange)="onCurrentPageDataChange($event)"
    >
      <thead>
        <tr>
          <th
            [nzChecked]="checked"
            [nzIndeterminate]="indeterminate"
            nzLabel="Select all"
            (nzCheckedChange)="onAllChecked($event)"
          ></th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of rowSelectionTable.data; track data) {
          <tr>
            <td
              [nzChecked]="setOfCheckedId.has(data.id)"
              [nzDisabled]="data.disabled"
              [nzLabel]="data.name"
              (nzCheckedChange)="onItemChecked(data.id, $event)"
            ></td>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: `
    .send-request {
      margin-bottom: 16px;
    }

    .send-request span {
      margin-left: 8px;
    }
  `
})
export class NzDemoTableRowSelectionAndOperationComponent implements OnInit {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => ({
      id: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`,
      disabled: index % 2 === 0
    }));
  }
}
```

### 自定义选择项

通过 `nzSelections` 自定义选择项.

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-row-selection-custom',
  imports: [NzTableModule],
  template: `
    <nz-table
      #rowSelectionTable
      nzShowSizeChanger
      [nzData]="listOfData"
      (nzCurrentPageDataChange)="onCurrentPageDataChange($event)"
    >
      <thead>
        <tr>
          <th
            [nzSelections]="listOfSelection"
            [(nzChecked)]="checked"
            [nzIndeterminate]="indeterminate"
            (nzCheckedChange)="onAllChecked($event)"
          ></th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of rowSelectionTable.data; track data) {
          <tr>
            <td [nzChecked]="setOfCheckedId.has(data.id)" (nzCheckedChange)="onItemChecked(data.id, $event)"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableRowSelectionCustomComponent implements OnInit {
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }));
  }
}
```

### 紧凑型

两种紧凑型的列表，小型列表只用于对话框内。

```typescript
import { Component } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-size',
  imports: [NzTableModule],
  template: `
    <h4>Middle size table</h4>
    <nz-table #middleTable nzSize="middle" [nzData]="data">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of middleTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
    <h4>Small size table</h4>
    <nz-table #smallTable nzSize="small" [nzData]="data">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of smallTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: `
    h4 {
      margin-bottom: 16px;
    }
  `
})
export class NzDemoTableSizeComponent {
  data = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
```

### 筛选和排序

筛选：对某一列数据进行筛选，通过指定 `[nzFilters]` 属性来指定筛选菜单，`[nzFilterFn]` 指定筛选函数，`[nzFilterMultiple]` 用于指定多选和单选，通过设置 `[nzFilters]` 中的 `{ byDefault: true }` 属性来默认启用一个筛选器。

排序：对某一列数据进行排序，通过指定 `[nzSortOrder]` 来指定默认排序顺序，`[nzSortFn]` 指定排序函数 `[nzSortDirections]` 改变每列可用的排序方式。

```typescript
import { Component } from '@angular/core';

import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder
} from 'ng-zorro-antd/table';

interface ItemData {
  name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<ItemData> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<ItemData> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'nz-demo-table-sort-filter',
  imports: [NzTableModule],
  template: `
    <nz-table #filterTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          @for (column of listOfColumns; track column) {
            <th
              [nzSortOrder]="column.sortOrder"
              [nzSortFn]="column.sortFn"
              [nzSortDirections]="column.sortDirections"
              [nzFilterMultiple]="column.filterMultiple"
              [nzFilters]="column.listOfFilter"
              [nzFilterFn]="column.filterFn"
            >
              {{ column.name }}
            </th>
          }
        </tr>
      </thead>
      <tbody>
        @for (data of filterTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableSortFilterComponent {
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: ItemData, b: ItemData) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim', byDefault: true }
      ],
      filterFn: (list: string[], item: ItemData) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.age - b.age,
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Address',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: ItemData, b: ItemData) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: ItemData) => item.address.indexOf(address) !== -1
    }
  ];
  listOfData: ItemData[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];
}
```

### 总结栏

通过 `nzSummary` 设置总结栏。可以通过配置 `nzFixed` 属性使其固定。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-table-summary',
  imports: [NzTableModule, NzTypographyModule],
  template: `
    <nz-table #middleTable nzBordered [nzData]="data" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>Name</th>
          <th>Borrow</th>
          <th>Repayment</th>
        </tr>
      </thead>
      <tbody>
        @for (data of middleTable.data; track $index) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.borrow }}</td>
            <td>{{ data.repayment }}</td>
          </tr>
        }
      </tbody>
      <tfoot nzSummary>
        <tr>
          <td>Total</td>
          <td>
            <span nz-typography nzType="danger">{{ totalBorrow }}</span>
          </td>
          <td>
            <span nz-typography>{{ totalRepayment }}</span>
          </td>
        </tr>
        <tr>
          <td>Balance</td>
          <td colspan="2">
            <span nz-typography>{{ totalBorrow - totalRepayment }}</span>
          </td>
        </tr>
      </tfoot>
    </nz-table>

    <br />

    <nz-table
      #fixedTable
      nzBordered
      [nzData]="fixedData"
      [nzShowPagination]="false"
      [nzScroll]="{ x: '1280px', y: '500px' }"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        @for (data of fixedTable.data; track data.key) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.description }}</td>
          </tr>
        }
      </tbody>
      <tfoot nzSummary nzFixed>
        <tr>
          <td>Summary</td>
          <td>This is a summary content</td>
        </tr>
      </tfoot>
    </nz-table>
  `,
  styles: `
    :host ::ng-deep tfoot.ant-table-summary {
      background-color: #fafafa !important;
    }
  `
})
export class NzDemoTableSummaryComponent implements OnInit {
  data = [
    {
      name: 'John Brown',
      borrow: 10,
      repayment: 33
    },
    {
      name: 'Jim Green',
      borrow: 100,
      repayment: 0
    },
    {
      name: 'Joe Black',
      borrow: 10,
      repayment: 10
    },
    {
      name: 'Jim Red',
      borrow: 75,
      repayment: 45
    }
  ];

  fixedData: Array<{ key: number; name: string; description: string }> = [];
  totalBorrow = 0;
  totalRepayment = 0;

  ngOnInit(): void {
    this.data.forEach(({ borrow, repayment }) => {
      this.totalBorrow += borrow;
      this.totalRepayment += repayment;
    });

    for (let i = 0; i < 20; i += 1) {
      this.fixedData.push({
        key: i,
        name: ['Light', 'Bamboo', 'Little'][i % 3],
        description: 'Everything that has a beginning, has an end.'
      });
    }
  }
}
```

### 模板用法

模板模式，显示内容仅由模板内容控制，不再需要向 `nzData` 传入数据，完全像普通 `table` 一样使用，使用 ant-design 的样式。

```typescript
import { Component } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'nz-demo-table-template',
  imports: [NzTableModule],
  template: `
    <nz-table nzTemplateMode>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableTemplateComponent {}
```

### 虚拟滚动

虚拟滚动，结合 [cdk scrolling](https://material.angular.io/cdk/scrolling/overview) 的虚拟滚动，用于巨量数据加载。可以通过获得 `cdkVirtualScrollViewport` 进行进一步操作，见本示例及 [API](https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport)。

```typescript
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableComponent, NzTableModule } from 'ng-zorro-antd/table';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-virtual',
  imports: [NzButtonModule, NzTableModule],
  template: `
    <button nz-button (click)="scrollToIndex(200)">Scroll To Index 200</button>
    <br />
    <br />
    <nz-table
      #virtualTable
      [nzBordered]="true"
      [nzVirtualItemSize]="54"
      [nzData]="listOfData"
      [nzVirtualForTrackBy]="trackByIndex"
      [nzFrontPagination]="false"
      [nzShowPagination]="false"
      [nzScroll]="{ x: '1200px', y: '240px' }"
    >
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Index</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-template nz-virtual-scroll let-data let-index="index">
          <tr>
            <td nzLeft>{{ data.name }}</td>
            <td nzLeft>{{ data.age }}</td>
            <td>{{ data.index }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td nzRight>
              <a>action</a>
            </td>
          </tr>
        </ng-template>
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableVirtualComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;
  private destroy$ = new Subject<boolean>();
  listOfData: VirtualDataInterface[] = [];

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  trackByIndex(_: number, data: VirtualDataInterface): number {
    return data.index;
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 20000; i++) {
      data.push({
        index: i,
        name: `Edward`,
        age: i,
        address: `London`
      });
    }
    this.listOfData = data;
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
```
