---
category: Components
type: Data Entry
cols: 1
title: Transfer
cover: 'https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg'
description: Double column transfer choice box.
---

## When To Use

- It is a select control essentially which can be use for selecting multiple items.
- Transfer can display more information for items and take up more space.

Transfer the elements between two columns intuitively and efficiently.

One or more elements can be selected from either column, one click on the proper `direction` button, and the transfer is done. The left column is considered the `source` and the right column is considered the `target`. As you can see in the API description, these names are reflected in.

## API

### nz-transfer

| Property                | Description                                                                                                                       | Type                                                   | Default               |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------- |
| `[nzDataSource]`        | Used for setting the data source. Except for the elements whose keys are `direction: 'right'` prop, or using `nzTargetKeys` prop. | `TransferItem[]`                                       | `[]`                  |
| `[nzDisabled]`          | Whether the transfer is disabled                                                                                                  | `boolean`                                              | `false`               |
| `[nzTitles]`            | A set of titles that are sorted from left to right.                                                                               | `string[]`                                             | `['', '']`            |
| `[nzOperations]`        | A set of operations that are sorted from bottom to top.                                                                           | `string[]`                                             | `['', '']`            |
| `[nzListStyle]`         | A custom CSS style used for rendering the transfer columns. equals to `ngStyle`                                                   | `object`                                               | -                     |
| `[nzItemUnit]`          | single unit                                                                                                                       | `string`                                               | `'item'`              |
| `[nzItemsUnit]`         | multiple unit                                                                                                                     | `string`                                               | `'items'`             |
| `[nzRenderList]`        | Customize render list, please refer to the case.                                                                                  | `Array<TemplateRef<void> \| null>`                     | `[null, null]`        |
| `[nzRender]`            | The function to generate the item shown on a column. please refer to the case.                                                    | `TemplateRef<void>`                                    | -                     |
| `[nzFooter]`            | A function used for rendering the footer. please refer to the case.                                                               | `TemplateRef<void>`                                    | -                     |
| `[nzShowSelectAll]`     | Whether to display the select all box                                                                                             | `boolean`                                              | `true`                |
| `[nzShowSearch]`        | Whether a search box is shown on each column.                                                                                     | `boolean`                                              | `false`               |
| `[nzFilterOption]`      | A function to determine whether an item should be shown in a search result list                                                   | `(inputValue: string, item: TransferItem) => boolean`  | -                     |
| `[nzSearchPlaceholder]` | The hint text of the search box.                                                                                                  | `string`                                               | `'Search here'`       |
| `[nzNotFoundContent]`   | Text to display when a column is empty.                                                                                           | `string`                                               | `'The list is empty'` |
| `[nzCanMove]`           | A function to determine what items should be moved (by default all checked items are moved). please refer to the case.            | `(arg: TransferCanMove) => Observable<TransferItem[]>` | -                     |
| `[nzSelectedKeys]`      | A set of keys of selected items.                                                                                                  | `string[]`                                             | -                     |
| `[nzTargetKeys]`        | A set of keys of elements that are listed on the right column.                                                                    | `string[]`                                             | -                     |
| `[nzOneWay]`            | Display as single direction style                                                                                                 | `boolean`                                              | `false`               |
| `[nzStatus]`            | Set validation status                                                                                                             | `'error' \| 'warning'`                                 | -                     |
| `(nzChange)`            | A callback function that is executed when the transfer between columns is complete.                                               | `EventEmitter<TransferChange>`                         | -                     |
| `(nzSearchChange)`      | A callback function which is executed when search field are changed                                                               | `EventEmitter<TransferSearchChange>`                   | -                     |
| `(nzSelectChange)`      | A callback function which is executed when selected items are changed.                                                            | `EventEmitter<TransferSearchChange>`                   | -                     |

#### TransferItem

| Property  | Description                                                                                     | Type                | Default |
| --------- | ----------------------------------------------------------------------------------------------- | ------------------- | ------- |
| title     | Used to display and search keyword                                                              | `string`            | -       |
| direction | Used for setting the data source. Except the elements whose keys are `direction: 'right'` prop. | `'left' \| 'right'` | -       |
| disabled  | specifies whether the checkbox is disabled                                                      | `boolean`           | `false` |
| checked   | specifies whether the checkbox is selected                                                      | `boolean`           | `false` |

#### TransferCanMove

| Property  | Description                       | Type                | Default |
| --------- | --------------------------------- | ------------------- | ------- |
| direction | data direction                    | `'left' \| 'right'` | -       |
| list      | Used for setting the source data. | `TransferItem[]`    | `[]`    |

#### TransferChange

| Property | Description                       | Type                | Default |
| -------- | --------------------------------- | ------------------- | ------- |
| from     | data direction                    | `'left' \| 'right'` | -       |
| to       | data direction                    | `'left' \| 'right'` | -       |
| list     | Used for setting the source data. | `TransferItem[]`    | `[]`    |

#### TransferSearchChange

| Property  | Description    | Type                | Default |
| --------- | -------------- | ------------------- | ------- |
| direction | data direction | `'left' \| 'right'` | -       |
| value     | Search keyword | `string`            | -       |

#### nzRenderList

| Property          | Description             | Type                           | Default |
| ----------------- | ----------------------- | ------------------------------ | ------- |
| `direction`       | List render direction   | `'left' \| 'right'`            | -       |
| `disabled`        | Disable list or not     | `boolean`                      | -       |
| `items`           | Filtered items          | `TransferItem[]`               | -       |
| `onItemSelect`    | Select item             | `(item: TransferItem) => void` | -       |
| `onItemSelectAll` | Select a group of items | `(selected: boolean) => void`  | -       |

---

## Examples

### Advanced

Advanced Usage of Transfer.

You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer.

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

### Basic

The most basic usage of `nz-transfer` involves providing the source data and target keys arrays, plus the rendering and some callback functions.

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

### Check Before Move

Can use `nzCanMove` to do two-verification.

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

### Custom datasource

Custom each Transfer Item, and in this way you can render a complex datasource.

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

### One Way

Use `nzOneWay` to make Transfer the one way style.

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

### Search

Transfer with a search box.

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

### Status

Add status to Transfer with `nzStatus`, which could be `error` or `warning`.

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

### Table Transfer

Customize render list with Table component.

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

### Tree Transfer

Customize render list with Tree component.

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
