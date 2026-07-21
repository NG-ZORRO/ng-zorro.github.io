---
category: Components
type: Data Display
title: Tree
cover: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg'
description: Multiple-level structure list.
---

## When To Use

Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The `Tree` component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a `Tree`.

## API

### nz-tree

> Tips: According to the current data structure design, you need to ensure that `nzData` is set first, otherwise other attributes will not take effect. After the asynchronous operation returns data, re-assign other attributes to trigger rendering(including `nzExpandAll` `nzExpandedKeys` `nzCheckedKeys` `nzSelectedKeys` `nzSearchValue`). Please refer to [#5152](https://github.com/NG-ZORRO/ng-zorro-antd/issues/5152) to track the optimization progress.

| Property                 | Description                                                                                                                                           | Type                                                        | Default | Global Config |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------- | ------------- |
| `[nzData]`               | Tree data (Reference NzTreeNode)                                                                                                                      | `NzTreeNodeOptions[] \| NzTreeNode[]`                       | `[]`    |
| `[nzBlockNode]`          | Whether treeNode fill remaining horizontal space                                                                                                      | `boolean`                                                   | `false` | ✅            |
| `[nzCheckable]`          | Add a checkbox before the treeNodes                                                                                                                   | `boolean`                                                   | `false` |
| `[nzShowExpand]`         | Show a Expand Icon before the treeNodes                                                                                                               | `boolean`                                                   | `true`  |               |
| `[nzShowLine]`           | Shows a connecting line                                                                                                                               | `boolean`                                                   | `false` |               |
| `[nzExpandedIcon]`       | Customize an expand icon                                                                                                                              | `TemplateRef<{ $implicit: NzTreeNode }>`                    | -       |
| `[nzShowIcon]`           | Shows the icon before a TreeNode's title. There is no default style                                                                                   | `boolean`                                                   | `false` | ✅            |
| `[nzAsyncData]`          | Load data asynchronously (should be used with NzTreeNode.addChildren(...))                                                                            | `boolean`                                                   | `false` |
| `[nzDraggable]`          | Specifies whether this Tree is draggable                                                                                                              | `boolean`                                                   | `false` |
| `[nzMultiple]`           | Allows selecting multiple treeNodes                                                                                                                   | `boolean`                                                   | `false` |
| `[nzHideUnMatched]`      | Hide unmatched nodes while searching                                                                                                                  | `boolean`                                                   | `false` | ✅            |
| `[nzCheckStrictly]`      | Check treeNode precisely; parent treeNode and children treeNodes are not associated                                                                   | `boolean`                                                   | `false` |
| `[nzTreeTemplate]`       | Custom Nodes                                                                                                                                          | `TemplateRef<{ $implicit: NzTreeNode }>`                    | -       |
| `[nzExpandAll]`          | Whether to expand all treeNodes                                                                                                                       | `boolean`                                                   | `false` |
| `[nzExpandedKeys]`       | Specify the keys of the default expanded treeNodes                                                                                                    | `string[]`                                                  | `[]`    |
| `[nzCheckedKeys]`        | Specifies the keys of the default checked treeNodes                                                                                                   | `string[]`                                                  | `[]`    |
| `[nzSelectedKeys]`       | Specifies the keys of the default selected treeNodes                                                                                                  | `string[]`                                                  | `[]`    |
| `[nzSearchValue]`        | Filter (highlight) treeNodes (see demo `Searchable`), two-way binding                                                                                 | `string`                                                    | `null`  |
| `[nzSearchFunc]`         | Custom matching method, used with `nzSearchValue`                                                                                                     | `(node: NzTreeNodeOptions) => boolean`                      | `null`  |
| `[nzBeforeDrop]`         | Drop before the second check, allowing the user to decide whether to allow placement                                                                  | `(confirm: NzFormatBeforeDropEvent) => Observable<boolean>` | -       |
| `[nzVirtualHeight]`      | The height of virtual scroll                                                                                                                          | `string`                                                    | `-`     |
| `[nzVirtualItemSize]`    | The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api)                                              | `number`                                                    | `28`    |
| `[nzVirtualMaxBufferPx]` | The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) | `number`                                                    | `500`   |
| `[nzVirtualMinBufferPx]` | The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api)        | `number`                                                    | `28`    |
| `(nzClick)`              | Callback function for when the user clicks a treeNode                                                                                                 | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzDblClick)`           | Callback function for when the user double clicks a treeNode                                                                                          | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzContextMenu)`        | Callback function for when the user right clicks a treeNode                                                                                           | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzCheckboxChange)`     | Callback function for when user clicks the checkbox                                                                                                   | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzExpandChange)`       | Callback function for when a treeNode is expanded or collapsed                                                                                        | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzSearchValueChange)`  | Callback function for when filter treeNodes(used with `nzSearchValue`)                                                                                | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragStart)`        | Callback function for when the onDragStart event occurs                                                                                               | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragEnter)`        | Callback function for when the onDragEnter event occurs                                                                                               | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragOver)`         | Callback function for when the onDragOver event occurs                                                                                                | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragLeave)`        | Callback function for when the onDragLeave event occurs                                                                                               | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDrop)`             | Callback function for when the onDrop event occurs                                                                                                    | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragEnd)`          | Callback function for when the onDragEnd event occurs                                                                                                 | `EventEmitter<NzFormatEmitEvent>`                           | -       |

#### Methods

| Property                 | Description                                     | Type           |
| ------------------------ | ----------------------------------------------- | -------------- |
| `getTreeNodes`           | get all nodes(NzTreeNode)                       | `NzTreeNode[]` |
| `getTreeNodeByKey`       | get NzTreeNode with key                         | `NzTreeNode`   |
| `getCheckedNodeList`     | get checked nodes(merged)                       | `NzTreeNode[]` |
| `getSelectedNodeList`    | get selected nodes                              | `NzTreeNode[]` |
| `getHalfCheckedNodeList` | get half checked nodes                          | `NzTreeNode[]` |
| `getExpandedNodeList`    | get expanded nodes                              | `NzTreeNode[]` |
| `getMatchedNodeList`     | get matched nodes(if nzSearchValue is not null) | `NzTreeNode[]` |

#### NzTreeNodeOptions props

| Property          | Description                                              | Type                  | Default |
| ----------------- | -------------------------------------------------------- | --------------------- | ------- |
| `title`           | Title                                                    | `string`              | `'---'` |
| `key`             | Must be unique！                                         | `string`              | `null`  |
| `icon`            | icon before the treeNode，used with `nzShowIcon`         | `string`              | `null`  |
| `children`        | TreeNode's children                                      | `NzTreeNodeOptions[]` | `[]`    |
| `isLeaf`          | Determines if this is a leaf node(can not be dropped to) | `boolean`             | `false` |
| `checked`         | Set the treeNode be checked                              | `boolean`             | `false` |
| `selected`        | Set the treeNode be selected                             | `boolean`             | `false` |
| `expanded`        | Set the treeNode be expanded ()                          | `boolean`             | `false` |
| `selectable`      | Set whether the treeNode can be selected                 | `boolean`             | `true`  |
| `disabled`        | Disables the treeNode                                    | `boolean`             | `false` |
| `disableCheckbox` | Disables the checkbox of the treeNode                    | `boolean`             | `false` |
| `[key: string]`   | Indexable Types, can be used with NzTreeNode.origin      | `any `                | -       |

#### NzFormatEmitEvent props

| Property        | Description                                                                 | Type                                                                                                                                                                | Default |
| --------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `eventName`     | Event Name                                                                  | enum: `'click' \| 'dblclick' \| 'contextmenu' \| 'check' \| 'expand' \| 'search' \| 'dragstart' \| 'dragenter' \| 'dragover' \| 'dragleave' \| 'drop' \| 'dragend'` | -       |
| `node `         | The current operation node (such as the target node to drop while dragging) | `NzTreeNode`                                                                                                                                                        | `null`  |
| `event`         | MouseEvent or DragEvent                                                     | `'MouseEvent' \| 'DragEvent'`                                                                                                                                       | `null`  |
| `dragNode?`     | Current drag node (existing if dragged)                                     | `NzTreeNode`                                                                                                                                                        | `null`  |
| `selectedKeys?` | Selected nodes list                                                         | `NzTreeNode[]`                                                                                                                                                      | `[]`    |
| `checkedKeys?`  | Checked nodes list                                                          | `NzTreeNode[]`                                                                                                                                                      | `[]`    |
| `matchedKeys?`  | Matched keys list while searching                                           | `NzTreeNode[]`                                                                                                                                                      | `[]`    |
| `keys?`         | All nodes' keys list related event(except drag events)                      | `string[]`                                                                                                                                                          | `[]`    |
| `nodes?`        | All nodes related event(except drag events)                                 | `NzTreeNode[]`                                                                                                                                                      | `[]`    |

#### NzFormatBeforeDropEvent props

| Property | Description                                                                                        | Type         | Default |
| -------- | -------------------------------------------------------------------------------------------------- | ------------ | ------- |
| dragNode | Current drag node (existing when dragged)                                                          | `NzTreeNode` | -       |
| node     | The current operation node (such as the target node to drop while dragging)                        | `NzTreeNode` | -       |
| pos      | position to drop(-1: before the target node, 0: inside the target node, 1: behind the target node) | `number`     | -       |

#### NzTreeNode props

| Property            | Description                                                                                                         | Type                                     | Default                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------- |
| `title`             | Title                                                                                                               | `string`                                 | `NzTreeNodeOptions.title` |
| `key`               | Key                                                                                                                 | `string`                                 | `NzTreeNodeOptions.key`   |
| `level`             | TreeNode's level relative to the root node                                                                          | `number`                                 | `number`                  |
| `children`          | Children                                                                                                            | `NzTreeNode[]`                           | `[]`                      |
| `origin`            | treeNode's raw data of NzTreeNodeOptions(user provided to show more data)                                           | `NzTreeNodeOptions`                      | -                         |
| `getParentNode`     | Get parentNode                                                                                                      | `function`                               | `null`                    |
| `isLeaf`            | Whether treeNode is a Leaf Node                                                                                     | `boolean`                                | `false`                   |
| `isExpanded`        | Whether treeNode is expanded                                                                                        | `boolean`                                | `false`                   |
| `isDisabled`        | Whether treeNode is disabled                                                                                        | `boolean`                                | `false`                   |
| `isDisableCheckbox` | Whether treeNode's checkbox can not be clicked                                                                      | `boolean`                                | `false`                   |
| `isSelectable`      | Set whether the treeNode can be selected                                                                            | `boolean`                                | `true`                    |
| `isChecked`         | Whether treeNode is checked                                                                                         | `boolean`                                | `false`                   |
| `isHalfChecked`     | Part of treeNode's children are checked                                                                             | `boolean`                                | `false`                   |
| `isSelected`        | Whether treeNode is selected                                                                                        | `boolean`                                | `false`                   |
| `isLoading`         | Whether treeNode is loading(when nzAsyncData is true)                                                               | `boolean`                                | `false`                   |
| `isMatched`         | Whether treeNode's title contains nzSearchValue                                                                     | `boolean`                                | `false`                   |
| `setSyncChecked`    | set isChecked value and sync other nodes' state of checkbox                                                         | `function`                               | -                         |
| `getChildren`       | Get all children                                                                                                    | `function`                               | -                         |
| `addChildren`       | Add child nodes, receive NzTreeNode or NzTreeNodeOptions array, the second parameter is the inserted index position | `(children: array, index?: number )=>{}` | -                         |
| `clearChildren`     | Clear the treeNode's children                                                                                       | `function`                               | -                         |
| `remove`            | Clear current node(not root node)                                                                                   | `function`                               | -                         |

## Note

- Please make sure `nzData` is set before the mentioned properties above:

```typescript
// Demo
this.nzExpandAll = false;
const nodes = []; // source data
this.nzData = [...nodes];
// Reset the above mentioned properties if you have used after setting of nzData
this.nzExpandedKeys = [...this.nzExpandedKeys];
// this.nzExpandAll = true;
this.nzCheckedKeys = [...this.nzCheckedKeys];
this.nzSelectedKeys = [...this.nzSelectedKeys];
```

- `NzTreeNodeOptions` accepts your custom properties，use `NzTreeNode.origin` to get them.
- If Tree Methods are used with ViewChild, should be used in ngAfterViewInit.
- Setting `nzData` with NzTreeNodeOptions[] is better，if you set nzData with NzTreeNode[], it will be deprecated in next major version(8.x).

---

## Examples

### basic controlled example

basic controlled example.

```typescript
import { Component } from '@angular/core';

import { NzFormatEmitEvent, NzTreeModule } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-basic-controlled',
  imports: [NzTreeModule],
  template: `
    <nz-tree
      [nzData]="nodes"
      nzCheckable
      nzMultiple
      [nzCheckedKeys]="defaultCheckedKeys"
      [nzExpandedKeys]="defaultExpandedKeys"
      [nzSelectedKeys]="defaultSelectedKeys"
      (nzClick)="nzEvent($event)"
      (nzExpandChange)="nzEvent($event)"
      (nzCheckboxChange)="nzEvent($event)"
    />
  `
})
export class NzDemoTreeBasicControlledComponent {
  defaultCheckedKeys = ['0-0-0'];
  defaultSelectedKeys = ['0-0-0'];
  defaultExpandedKeys = ['0-0', '0-0-0', '0-0-1'];

  readonly nodes = [
    {
      title: '0-0',
      key: '0-0',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
```

### basic

The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.

```typescript
import { Component, ViewChild } from '@angular/core';

import { NzFormatEmitEvent, NzTreeComponent, NzTreeModule, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-basic',
  imports: [NzTreeModule],
  template: `
    <nz-tree
      #nzTreeComponent
      [nzData]="nodes"
      nzCheckable
      [nzCheckedKeys]="defaultCheckedKeys"
      [nzExpandedKeys]="defaultExpandedKeys"
      [nzSelectedKeys]="defaultSelectedKeys"
      (nzClick)="nzClick($event)"
      (nzDblClick)="nzClick($event)"
      (nzContextMenu)="nzClick($event)"
      (nzCheckboxChange)="nzCheck($event)"
      (nzExpandChange)="nzCheck($event)"
    />
  `
})
export class NzDemoTreeBasicComponent {
  @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: NzTreeComponent;
  defaultCheckedKeys = ['10020'];
  defaultSelectedKeys = ['10010'];
  defaultExpandedKeys = ['100', '1001'];

  readonly nodes: NzTreeNodeOptions[] = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          disabled: true,
          children: [
            { title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [
            { title: 'leaf 1-1-0', key: '10020', isLeaf: true },
            { title: 'leaf 1-1-1', key: '10021', isLeaf: true }
          ]
        }
      ]
    }
  ];

  nzClick(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    console.log(keys, this.nzTreeComponent.getSelectedNodeList());
  }
}
```

### Customize Icon

You can customize icons for different nodes.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeModule } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-customized-icon',
  imports: [NzIconModule, NzTreeModule],
  template: `
    <nz-tree [nzData]="nodes" nzShowIcon />
    <nz-tree [nzData]="nodes" nzShowIcon [nzExpandedIcon]="multiExpandedIconTpl">
      <ng-template #multiExpandedIconTpl let-node let-origin="origin">
        @if (!origin.isLeaf) {
          <nz-icon [nzType]="node.isExpanded ? 'folder-open' : 'folder'" class="ant-tree-switcher-line-icon" />
        } @else {
          <nz-icon nzType="file" class="ant-tree-switcher-line-icon" />
        }
      </ng-template>
    </nz-tree>
  `
})
export class NzDemoTreeCustomizedIconComponent {
  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      icon: 'smile',
      children: [
        { title: 'leaf', key: '1001', icon: 'meh', isLeaf: true },
        { title: 'leaf', key: '1002', icon: 'frown', isLeaf: true }
      ]
    }
  ];
}
```

### directory

Customize directory tree with `nzTreeTemplate`, get data from `let-origin="origin"`, get node status from `let-node`.

```typescript
import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { NzContextMenuService, NzDropdownMenuComponent, NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormatEmitEvent, NzTreeModule, NzTreeNode } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-directory',
  imports: [NzDropdownModule, NzIconModule, NzTreeModule, LowerCasePipe],
  template: `
    <nz-tree
      nzBlockNode
      [nzData]="nodes"
      (nzClick)="activeNode($event)"
      (nzDblClick)="openFolder($event)"
      [nzTreeTemplate]="nzTreeTemplate"
    />
    <ng-template #nzTreeTemplate let-node let-origin="origin">
      <span class="custom-node">
        @if (!node.isLeaf) {
          <span (contextmenu)="contextMenu($event, menu)">
            <nz-icon [nzType]="node.isExpanded ? 'folder-open' : 'folder'" (click)="openFolder(node)" />
            <span class="folder-name">{{ node.title }}</span>
            <span class="folder-desc">created by {{ origin.author | lowercase }}</span>
          </span>
        } @else {
          <span (contextmenu)="contextMenu($event, menu)">
            <nz-icon nzType="file" />
            <span class="file-name">{{ node.title }}</span>
            <span class="file-desc">modified by {{ origin.author | lowercase }}</span>
          </span>
        }
      </span>
    </ng-template>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item (click)="selectDropdown()">Action 1</li>
        <li nz-menu-item (click)="selectDropdown()">Action 2</li>
      </ul>
    </nz-dropdown-menu>
  `,
  styles: `
    nz-tree {
      overflow: hidden;
      margin: 0 -24px;
      padding: 0 24px;
    }

    .custom-node {
      cursor: pointer;
      line-height: 24px;
      margin-left: 4px;
      display: inline-block;
    }

    .file-name,
    .folder-name {
      margin-left: 4px;
    }

    .file-desc,
    .folder-desc {
      padding: 0 8px;
      display: inline-block;
      background: #87ceff;
      color: #ffffff;
      position: relative;
      left: 12px;
    }
  `
})
export class NzDemoTreeDirectoryComponent {
  activatedNode?: NzTreeNode;
  readonly nodes = [
    {
      title: 'parent 0',
      key: '100',
      author: 'NG ZORRO',
      expanded: true,
      children: [
        { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO', isLeaf: true },
        { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true }
      ]
    },
    {
      title: 'parent 1',
      key: '101',
      author: 'NG ZORRO',
      children: [
        { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
        { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
      ]
    }
  ];

  constructor(private nzContextMenuService: NzContextMenuService) {}

  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    this.activatedNode = data.node!;
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  selectDropdown(): void {
    // do something
  }
}
```

### draggable-with-two-confirmation

nzBeforeDrop: Validate before drop event, for example: only allow to drag inside(delay 1s)、 validate using modal .etc.

```typescript
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { NzFormatBeforeDropEvent, NzTreeModule } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-draggable-confirm',
  imports: [NzTreeModule],
  template: `<nz-tree [nzData]="nodes" nzDraggable nzBlockNode [nzBeforeDrop]="beforeDrop" />`
})
export class NzDemoTreeDraggableConfirmComponent {
  readonly nodes = [
    {
      title: '0-0',
      key: '100',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '1001',
          children: [
            { title: '0-0-0-0', key: '10010', isLeaf: true },
            { title: '0-0-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '1002',
          children: [{ title: '0-0-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];

  beforeDrop(arg: NzFormatBeforeDropEvent): Observable<boolean> {
    // if insert node into another node, wait 1s
    if (arg.pos === 0) {
      return of(true).pipe(delay(1000));
    } else {
      return of(false);
    }
  }
}
```

### draggable

Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.

```typescript
import { Component } from '@angular/core';

import { NzFormatEmitEvent, NzTreeModule } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-draggable',
  imports: [NzTreeModule],
  template: `<nz-tree [nzData]="nodes" nzDraggable nzBlockNode (nzOnDrop)="nzEvent($event)" />`
})
export class NzDemoTreeDraggableComponent {
  readonly nodes = [
    {
      title: '0-0',
      key: '00',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '000',
          expanded: true,
          children: [
            { title: '0-0-0-0', key: '0000', isLeaf: true },
            { title: '0-0-0-1', key: '0001', isLeaf: true },
            { title: '0-0-0-2', key: '0002', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '001',
          children: [
            { title: '0-0-1-0', key: '0010', isLeaf: true },
            { title: '0-0-1-1', key: '0011', isLeaf: true },
            { title: '0-0-1-2', key: '0012', isLeaf: true }
          ]
        },
        {
          title: '0-0-2',
          key: '002'
        }
      ]
    },
    {
      title: '0-1',
      key: '01',
      children: [
        {
          title: '0-1-0',
          key: '010',
          children: [
            { title: '0-1-0-0', key: '0100', isLeaf: true },
            { title: '0-1-0-1', key: '0101', isLeaf: true },
            { title: '0-1-0-2', key: '0102', isLeaf: true }
          ]
        },
        {
          title: '0-1-1',
          key: '011',
          children: [
            { title: '0-1-1-0', key: '0110', isLeaf: true },
            { title: '0-1-1-1', key: '0111', isLeaf: true },
            { title: '0-1-1-2', key: '0112', isLeaf: true }
          ]
        }
      ]
    },
    {
      title: '0-2',
      key: '02',
      isLeaf: true
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
```

### load data asynchronously

To load data asynchronously when click to expand a treeNode.

```typescript
import { Component } from '@angular/core';

import { NzFormatEmitEvent, NzTreeModule, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-dynamic',
  imports: [NzTreeModule],
  template: ` <nz-tree [nzData]="nodes" nzAsyncData (nzClick)="nzEvent($event)" (nzExpandChange)="nzEvent($event)" /> `
})
export class NzDemoTreeDynamicComponent {
  readonly nodes = [
    { title: 'Expand to load', key: '0' },
    { title: 'Expand to load', key: '1' },
    { title: 'Tree Node', key: '2', isLeaf: true }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    // load child async
    if (event.eventName === 'expand') {
      const node = event.node;
      if (node?.getChildren().length === 0 && node?.isExpanded) {
        this.loadNode().then(data => {
          node.addChildren(data);
        });
      }
    }
  }

  loadNode(): Promise<NzTreeNodeOptions[]> {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            { title: 'Child Node', key: `${new Date().getTime()}-0` },
            { title: 'Child Node', key: `${new Date().getTime()}-1` }
          ]),
        1000
      );
    });
  }
}
```

### Tree With Line

Tree With Line.

```typescript
import { Component } from '@angular/core';

import { NzFormatEmitEvent, NzTreeModule } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-line',
  imports: [NzTreeModule],
  template: `<nz-tree [nzData]="nodes" nzShowLine (nzClick)="nzEvent($event)" />`
})
export class NzDemoTreeLineComponent {
  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          expanded: true,
          children: [
            { title: 'leaf', key: '10010', isLeaf: true },
            { title: 'leaf', key: '10011', isLeaf: true },
            { title: 'leaf', key: '10012', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        },
        {
          title: 'parent 1-2',
          key: '1003',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        }
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
```

### Searchable

Searchable Tree.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormatEmitEvent, NzTreeModule } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-search',
  imports: [FormsModule, NzIconModule, NzInputModule, NzTreeModule],
  template: `
    <nz-input-wrapper>
      <input type="text" nz-input placeholder="Search" [(ngModel)]="searchValue" />
      <nz-icon nzInputSuffix nzType="search" />
    </nz-input-wrapper>
    <br />
    <nz-tree
      [nzData]="nodes"
      [nzSearchValue]="searchValue"
      (nzClick)="nzEvent($event)"
      (nzExpandChange)="nzEvent($event)"
      (nzSearchValueChange)="nzEvent($event)"
    />
  `
})
export class NzDemoTreeSearchComponent {
  searchValue = '';

  readonly nodes = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
```

### Virtual Scroll

Set `nzVirtualHeight` to enable virtual scroll.

```typescript
import { Component } from '@angular/core';

import { NzTreeModule, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

function dig(path = '0', level = 3): NzTreeNodeOptions[] {
  const list: NzTreeNodeOptions[] = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode: NzTreeNodeOptions = {
      title: key,
      key,
      expanded: true,
      children: [],
      isLeaf: false
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    } else {
      treeNode.isLeaf = true;
    }

    list.push(treeNode);
  }
  return list;
}

@Component({
  selector: 'nz-demo-tree-virtual-scroll',
  imports: [NzTreeModule],
  template: `<nz-tree [nzData]="nodes" nzBlockNode nzVirtualHeight="300px" />`
})
export class NzDemoTreeVirtualScrollComponent {
  nodes: NzTreeNodeOptions[] = dig();
}
```
