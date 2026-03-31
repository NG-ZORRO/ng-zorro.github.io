---
category: Components
subtitle: 穿梭框
type: 数据录入
cols: 1
title: Transfer
cover: 'https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg'
description: 双栏穿梭选择框。
---

## 何时使用

- 需要在多个可选项中进行多选时。
- 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。

穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。

选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。
其中，左边一栏为 `source`，右边一栏为 `target`，API 的设计也反映了这两个概念。

## API

### nz-transfer

| 参数                    | 说明                                                                                                                  | 类型                                                   | 默认值             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------ |
| `[nzDataSource]`        | 数据源，其中若数据属性 `direction: 'right'` 将会被渲染到右边一栏中或使用 `nzTargetKeys`                               | `TransferItem[]`                                       | `[]`               |
| `[nzDisabled]`          | 是否禁用                                                                                                              | `boolean`                                              | `false`            |
| `[nzTitles]`            | 标题集合，顺序从左至右                                                                                                | `string[]`                                             | `['', '']`         |
| `[nzOperations]`        | 操作文案集合，顺序从下至上                                                                                            | `string[]`                                             | `['', '']`         |
| `[nzListStyle]`         | 两个穿梭框的自定义样式，等同 `ngStyle`                                                                                | `object`                                               | -                  |
| `[nzItemUnit]`          | 单数单位                                                                                                              | `string`                                               | `'项目'`           |
| `[nzItemsUnit]`         | 复数单位                                                                                                              | `string`                                               | `'项目'`           |
| `[nzRenderList]`        | 自定义渲染列表，见示例                                                                                                | `Array<TemplateRef<void> \| null>`                     | `[null, null]`     |
| `[nzRender]`            | 每行数据渲染模板，见示例                                                                                              | `TemplateRef<void>`                                    | -                  |
| `[nzFooter]`            | 底部渲染模板，见示例                                                                                                  | `TemplateRef<void>`                                    | -                  |
| `[nzShowSelectAll]`     | 是否显示全选框                                                                                                        | `boolean`                                              | `true`             |
| `[nzShowSearch]`        | 是否显示搜索框                                                                                                        | `boolean`                                              | `false`            |
| `[nzFilterOption]`      | 接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。                  | `(inputValue: string, item: TransferItem) => boolean`  | -                  |
| `[nzSearchPlaceholder]` | 搜索框的默认值                                                                                                        | `string`                                               | `'请输入搜索内容'` |
| `[nzNotFoundContent]`   | 当列表为空时显示的内容                                                                                                | `string`                                               | `'列表为空'`       |
| `[nzCanMove]`           | 穿梭时二次校验。**注意：** 穿梭组件内部始终只保留一份数据，二次校验过程中需取消穿梭项则直接删除该项；具体用法见示例。 | `(arg: TransferCanMove) => Observable<TransferItem[]>` | -                  |
| `[nzSelectedKeys]`      | 设置被选中的 key 集合                                                                                                 | `string[]`                                             | -                  |
| `[nzTargetKeys]`        | 显示在右侧框数据的 key 集合                                                                                           | `string[]`                                             | -                  |
| `[nzOneWay]`            | 展示为单向样式                                                                                                        | `boolean`                                              | `false`            |
| `[nzStatus]`            | 设置校验状态                                                                                                          | `'error' \| 'warning'`                                 | -                  |
| `(nzChange)`            | 选项在两栏之间转移时的回调函数                                                                                        | `EventEmitter<TransferChange>`                         | -                  |
| `(nzSearchChange)`      | 搜索框内容时改变时的回调函数                                                                                          | `EventEmitter<TransferSearchChange>`                   | -                  |
| `(nzSelectChange)`      | 选中项发生改变时的回调函数                                                                                            | `EventEmitter<TransferSearchChange>`                   | -                  |

#### TransferItem

| 参数      | 说明                                                | 类型                | 默认值  |
| --------- | --------------------------------------------------- | ------------------- | ------- |
| title     | 标题，用于显示及搜索关键字判断                      | `string`            | -       |
| direction | 指定数据方向，若指定 `right` 为右栏，其他情况为左栏 | `'left' \| 'right'` | -       |
| disabled  | 指定 checkbox 为不可用状态                          | `boolean`           | `false` |
| checked   | 指定 checkbox 为选中状态                            | `boolean`           | `false` |

#### TransferCanMove

| 参数      | 说明     | 类型                | 默认值 |
| --------- | -------- | ------------------- | ------ |
| direction | 数据方向 | `'left' \| 'right'` | -      |
| list      | 数据源   | `TransferItem[]`    | `[]`   |

#### TransferChange

| 参数 | 说明     | 类型                | 默认值 |
| ---- | -------- | ------------------- | ------ |
| from | 数据方向 | `'left' \| 'right'` | -      |
| to   | 数据方向 | `'left' \| 'right'` | -      |
| list | 数据源   | `TransferItem[]`    | `[]`   |

#### TransferSearchChange

| 参数      | 说明       | 类型                | 默认值 |
| --------- | ---------- | ------------------- | ------ |
| direction | 数据方向   | `'left' \| 'right'` | -      |
| value     | 搜索关键词 | `string`            | -      |

#### nzRenderList

| 参数              | 说明           | 类型                           | 默认值 |
| ----------------- | -------------- | ------------------------------ | ------ |
| `direction`       | 渲染列表的方向 | `'left' \| 'right'`            | -      |
| `disabled`        | 是否禁用列表   | `boolean`                      | -      |
| `items`           | 过滤后的数据   | `TransferItem[]`               | -      |
| `onItemSelect`    | 勾选条目       | `(item: TransferItem) => void` | -      |
| `onItemSelectAll` | 勾选一组条目   | `(selected: boolean) => void`  | -      |

---

## 代码示例

### 高级用法

穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTransferModule, TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nz-demo-transfer-advanced',
  imports: [NzButtonModule, NzTransferModule],
  template: `
    <nz-transfer
      [nzDataSource]="list"
      nzShowSearch
      [nzOperations]="['to right', 'to left']"
      [nzListStyle]="{ 'width.px': 250, 'height.px': 300 }"
      [nzRender]="render"
      [nzFooter]="footer"
      (nzSelectChange)="select($event)"
      (nzChange)="change($event)"
    >
      <ng-template #render let-item>{{ item.title }}-{{ item.description }}</ng-template>
      <ng-template #footer let-direction>
        <button nz-button (click)="reload(direction)" nzSize="small" style="float: right; margin: 5px;">
          reload
        </button>
      </ng-template>
    </nz-transfer>
  `
})
export class NzDemoTransferAdvancedComponent implements OnInit {
  list: TransferItem[] = [];

  constructor(private messageService: NzMessageService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const ret: TransferItem[] = [];
    for (let i = 0; i < 20; i++) {
      ret.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : undefined
      });
    }
    this.list = ret;
  }

  reload(direction: string): void {
    this.getData();
    this.messageService.success(`your clicked ${direction}!`);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
```

### 基本用法

最基本的用法，展示了 `nzDataSource` 每行的渲染函数 `nzRender` 以及回调函数 `nzChange`、`nzSelectChange` 的用法。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTransferModule, TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nz-demo-transfer-basic',
  imports: [FormsModule, NzSwitchModule, NzTransferModule],
  template: `
    <nz-transfer
      [nzDataSource]="list"
      [nzDisabled]="disabled"
      [nzTitles]="['Source', 'Target']"
      (nzSelectChange)="select($event)"
      [nzSelectedKeys]="['0', '2', '3']"
      (nzChange)="change($event)"
    />
    <br />
    <nz-switch [(ngModel)]="disabled" nzCheckedChildren="disabled" nzUnCheckedChildren="disabled" />
  `
})
export class NzDemoTransferBasicComponent implements OnInit {
  list: TransferItem[] = [];
  disabled = false;

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1
      });
    }

    [2, 3].forEach(idx => (this.list[idx].direction = 'right'));
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
```

### 二次校验

利用 `nzCanMove` 允许在穿梭过程中二次校验；示例默认向右移时强制选中的第一项不可穿梭。

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { NzTransferModule, TransferCanMove, TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nz-demo-transfer-can-move',
  imports: [NzTransferModule],
  template: `
    <nz-transfer
      [nzDataSource]="list"
      [nzCanMove]="canMove"
      (nzSelectChange)="select($event)"
      (nzChange)="change($event)"
    />
  `
})
export class NzDemoTransferCanMoveComponent implements OnInit {
  list: TransferItem[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1
      });
    }

    [2, 3].forEach(idx => (this.list[idx].direction = 'right'));
  }

  canMove(arg: TransferCanMove): Observable<TransferItem[]> {
    if (arg.direction === 'right' && arg.list.length > 0) {
      arg.list.splice(0, 1);
    }
    // or
    // if (arg.direction === 'right' && arg.list.length > 0) delete arg.list[0];
    return of(arg.list).pipe(delay(1000));
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
```

### 自定义渲染行数据

自定义渲染每一个 Transfer Item，可用于渲染复杂数据。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTransferModule, TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nz-demo-transfer-custom-item',
  imports: [NzIconModule, NzTransferModule],
  template: `
    <nz-transfer
      [nzDataSource]="list"
      [nzListStyle]="{ 'width.px': 300, 'height.px': 300 }"
      [nzRender]="render"
      (nzSelectChange)="select($event)"
      (nzChange)="change($event)"
    >
      <ng-template #render let-item>
        <nz-icon nzType="{{ item.icon }}" />
        {{ item.title }}
      </ng-template>
    </nz-transfer>
  `
})
export class NzDemoTransferCustomItemComponent implements OnInit {
  list: Array<TransferItem & { description: string; icon: string }> = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const ret: Array<TransferItem & { description: string; icon: string }> = [];
    for (let i = 0; i < 20; i++) {
      ret.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : undefined,
        icon: `frown-o`
      });
    }
    this.list = ret;
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
```

### 单向样式

通过 `nzOneWay` 将 Transfer 转为单向样式。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTransferModule, TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nz-demo-transfer-one-way',
  imports: [NzTransferModule, NzSwitchModule, FormsModule],
  template: `
    <nz-transfer
      [nzDataSource]="list"
      [nzDisabled]="disabled"
      [nzTitles]="['Source', 'Target']"
      (nzSelectChange)="select($event)"
      [nzSelectedKeys]="['0', '2', '3']"
      nzOneWay
      (nzChange)="change($event)"
    />
    <div style="margin-top: 8px;">
      <nz-switch [(ngModel)]="disabled" nzCheckedChildren="disabled" nzUnCheckedChildren="disabled" />
      <div></div>
    </div>
  `
})
export class NzDemoTransferOneWayComponent implements OnInit {
  list: TransferItem[] = [];
  disabled = false;

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1
      });
    }

    [2, 3].forEach(idx => (this.list[idx].direction = 'right'));
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
```

### 带搜索框

带搜索框的穿梭框，可以自定义搜索函数。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTransferModule, TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nz-demo-transfer-search',
  imports: [FormsModule, NzSwitchModule, NzTransferModule],
  template: `
    <nz-transfer
      [nzDataSource]="list"
      [nzDisabled]="disabled"
      nzShowSearch
      [nzFilterOption]="filterOption"
      (nzSearchChange)="search($event)"
      (nzSelectChange)="select($event)"
      (nzChange)="change($event)"
    />
    <br />
    <nz-switch [(ngModel)]="disabled" nzCheckedChildren="disabled" nzUnCheckedChildren="disabled" />
  `
})
export class NzDemoTransferSearchComponent implements OnInit {
  list: TransferItem[] = [];
  disabled = false;

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : undefined
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterOption(inputValue: string, item: any): boolean {
    return item.description.indexOf(inputValue) > -1;
  }

  search(ret: {}): void {
    console.log('nzSearchChange', ret);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
```

### 自定义状态

使用 `nzStatus` 为 Transfer 添加状态，可选 `error` 或者 `warning`。

```typescript
import { Component } from '@angular/core';

import { NzTransferModule } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nz-demo-transfer-status',
  imports: [NzTransferModule],
  template: `
    <nz-transfer [nzDataSource]="[]" nzStatus="error" />
    <br />
    <nz-transfer [nzDataSource]="[]" nzStatus="warning" nzShowSearch />
  `
})
export class NzDemoTransferStatusComponent {}
```

### 表格穿梭框

使用 Table 组件作为自定义渲染列表。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTransferModule, TransferChange, TransferItem, TransferSelectChange } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nz-demo-transfer-table-transfer',
  imports: [FormsModule, NzSwitchModule, NzTableModule, NzTagModule, NzTransferModule],
  template: `
    <nz-transfer
      [nzDataSource]="list"
      [nzDisabled]="disabled"
      [nzShowSearch]="showSearch"
      [nzShowSelectAll]="false"
      [nzRenderList]="[renderList, renderList]"
      (nzSelectChange)="select($event)"
      (nzChange)="change($event)"
    >
      <ng-template
        #renderList
        let-items
        let-direction="direction"
        let-stat="stat"
        let-disabled="disabled"
        let-onItemSelectAll="onItemSelectAll"
        let-onItemSelect="onItemSelect"
      >
        <nz-table #t [nzData]="$asTransferItems(items)" nzSize="small">
          <thead>
            <tr>
              <th
                [nzDisabled]="disabled"
                [nzChecked]="stat.checkAll"
                [nzIndeterminate]="stat.checkHalf"
                (nzCheckedChange)="onItemSelectAll($event)"
              ></th>
              <th>Name</th>
              @if (direction === 'left') {
                <th>Tag</th>
              }
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            @for (data of t.data; track data) {
              <tr (click)="onItemSelect(data)">
                <td
                  [nzChecked]="!!data.checked"
                  [nzDisabled]="disabled || data.disabled"
                  (nzCheckedChange)="onItemSelect(data)"
                ></td>
                <td>{{ data.title }}</td>
                @if (direction === 'left') {
                  <td>
                    <nz-tag>{{ data.tag }}</nz-tag>
                  </td>
                }
                <td>{{ data.description }}</td>
              </tr>
            }
          </tbody>
        </nz-table>
      </ng-template>
    </nz-transfer>
    <div style="margin-top: 8px;">
      <nz-switch [(ngModel)]="disabled" nzCheckedChildren="disabled" nzUnCheckedChildren="disabled" />
      <nz-switch [(ngModel)]="showSearch" nzCheckedChildren="showSearch" nzUnCheckedChildren="showSearch" />
    </div>
  `
})
export class NzDemoTransferTableTransferComponent implements OnInit {
  list: TransferItem[] = [];
  $asTransferItems = (data: unknown): TransferItem[] => data as TransferItem[];
  disabled = false;
  showSearch = false;

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 4 === 0,
        tag: ['cat', 'dog', 'bird'][i % 3],
        checked: false
      });
    }

    [2, 3].forEach(idx => (this.list[idx].direction = 'right'));
  }

  select(ret: TransferSelectChange): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: TransferChange): void {
    console.log('nzChange', ret);
    const listKeys = ret.list.map(l => l.key);
    const hasOwnKey = (e: TransferItem): boolean => e.hasOwnProperty('key');
    this.list = this.list.map(e => {
      if (listKeys.includes(e.key) && hasOwnKey(e)) {
        if (ret.to === 'left') {
          delete e.hide;
        } else if (ret.to === 'right') {
          e.hide = false;
        }
      }
      return e;
    });
  }
}
```

### 树穿梭框

使用 Tree 组件作为自定义渲染列表。

```typescript
import { Component, ViewChild } from '@angular/core';

import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import { NzTransferModule, TransferChange } from 'ng-zorro-antd/transfer';
import { NzTreeComponent, NzTreeModule } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-transfer-tree-transfer',
  imports: [NzTransferModule, NzTreeModule],
  template: `
    <nz-transfer
      [nzDataSource]="list"
      [nzShowSelectAll]="false"
      [nzRenderList]="[leftRenderList, null]"
      (nzChange)="change($event)"
    >
      <ng-template #leftRenderList let-items let-onItemSelectAll="onItemSelectAll" let-onItemSelect="onItemSelect">
        <nz-tree
          #tree
          [nzData]="treeData"
          nzExpandAll
          nzBlockNode
          nzCheckable
          nzCheckStrictly
          (nzCheckboxChange)="treeCheckboxChange($event, onItemSelect)"
        >
          <ng-template #nzTreeTemplate let-node>
            <span
              (click)="checkboxChange(node, onItemSelect)"
              class="ant-tree-node-content-wrapper ant-tree-node-content-wrapper-open"
            >
              {{ node.title }}
            </span>
          </ng-template>
        </nz-tree>
      </ng-template>
    </nz-transfer>
  `
})
export class NzDemoTransferTreeTransferComponent {
  @ViewChild('tree', { static: true }) tree!: NzTreeComponent;
  list: NzTreeNodeOptions[] = [
    { key: '0', id: 0, title: '0-0', isLeaf: true },
    { key: '1', id: 1, parentid: 0, title: '0-1' },
    { key: '2', id: 2, parentid: 1, title: '0-1-0', isLeaf: true },
    { key: '3', id: 3, parentid: 1, title: '0-1-1', isLeaf: true },
    { key: '4', id: 4, title: '0-3', isLeaf: true }
  ];
  treeData = this.generateTree(this.list);
  checkedNodeList: NzTreeNode[] = [];

  private generateTree(arr: NzTreeNodeOptions[]): NzTreeNodeOptions[] {
    const tree: NzTreeNodeOptions[] = [];
    const mappedArr: Record<string, NzTreeNodeOptions> = {};
    let arrElem: NzTreeNodeOptions;
    let mappedElem: NzTreeNodeOptions;

    for (let i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem.id] = { ...arrElem };
      mappedArr[arrElem.id].children = [];
    }

    for (const id in mappedArr) {
      if (mappedArr.hasOwnProperty(id)) {
        mappedElem = mappedArr[id];
        if (mappedElem.parentid) {
          mappedArr[mappedElem.parentid].children!.push(mappedElem);
        } else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

  treeCheckboxChange(event: NzFormatEmitEvent, onItemSelect: (item: NzTreeNodeOptions) => void): void {
    this.checkboxChange(event.node!, onItemSelect);
  }

  checkboxChange(node: NzTreeNode, onItemSelect: (item: NzTreeNodeOptions) => void): void {
    if (node.isDisabled) {
      return;
    }

    if (node.isChecked) {
      this.checkedNodeList.push(node);
    } else {
      const idx = this.checkedNodeList.indexOf(node);
      if (idx !== -1) {
        this.checkedNodeList.splice(idx, 1);
      }
    }
    const item = this.list.find(w => w.id === node.origin.id);
    onItemSelect(item!);
  }

  change(ret: TransferChange): void {
    const isDisabled = ret.to === 'right';
    this.checkedNodeList.forEach(node => {
      if (ret.list.find(w => w.key === node.key)) {
        node.isDisabled = isDisabled;
        node.isChecked = isDisabled;
      }
    });
    this.checkedNodeList = this.checkedNodeList.filter(item => item.isChecked);
  }
}
```
