---
category: Components
type: 数据展示
title: Tree
subtitle: 树形控件
cover: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg'
description: 多层次的结构列表。
---

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## API

### nz-tree

> 说明: 根据目前的数据结构设计，需要保证优先设置 `nzData`，否则各属性不会生效。异步操作待数据返回后，重新赋值其他各属性触发渲染(`nzExpandAll` `nzExpandedKeys` `nzCheckedKeys` `nzSelectedKeys` `nzSearchValue`)。重构优化工作请追踪 [#5152](https://github.com/NG-ZORRO/ng-zorro-antd/issues/5152)。

| 参数                     | 说明                                                                                                                 | 类型                                                        | 默认值  | 全局配置 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------- | -------- |
| `[nzData]`               | 元数据                                                                                                               | `NzTreeNodeOptions[] \| NzTreeNode[]`                       | `[]`    |
| `[nzBlockNode]`          | 是否节点占据一行                                                                                                     | `boolean`                                                   | `false` | ✅       |
| `[nzCheckable]`          | 节点前添加 checkbox 复选框                                                                                           | `boolean`                                                   | `false` |
| `[nzShowExpand]`         | 节点前添加展开图标                                                                                                   | `boolean`                                                   | `true`  |          |
| `[nzShowLine]`           | 是否展示连接线                                                                                                       | `boolean`                                                   | `false` |          |
| `[nzExpandedIcon]`       | 自定义展开图标                                                                                                       | `TemplateRef<{ $implicit: NzTreeNode }>`                    | -       |
| `[nzShowIcon]`           | 是否展示 TreeNode title 前的图标，没有默认样式                                                                       | `boolean`                                                   | `false` | ✅       |
| `[nzAsyncData]`          | 是否异步加载(显示加载状态)                                                                                           | `boolean`                                                   | `false` |
| `[nzDraggable]`          | 设置节点可拖拽                                                                                                       | `boolean`                                                   | `false` |
| `[nzMultiple]`           | 支持点选多个节点（节点本身）                                                                                         | `boolean`                                                   | `false` |
| `[nzHideUnMatched]`      | 搜索隐藏未匹配的节点                                                                                                 | `boolean`                                                   | `false` | ✅       |
| `[nzCheckStrictly]`      | checkable 状态下节点选择完全受控（父子节点选中状态不再关联）                                                         | `boolean`                                                   | `false` |
| `[nzTreeTemplate]`       | 自定义节点                                                                                                           | `TemplateRef<{ $implicit: NzTreeNode }>`                    | -       |
| `[nzExpandAll]`          | 默认展开所有树节点                                                                                                   | `boolean`                                                   | `false` |
| `[nzExpandedKeys]`       | 展开指定的树节点                                                                                                     | `string[]`                                                  | `[]`    |
| `[nzCheckedKeys]`        | 指定选中复选框的树节点                                                                                               | `string[]`                                                  | `[]`    |
| `[nzSelectedKeys]`       | 指定选中的树节点                                                                                                     | `string[]`                                                  | `[]`    |
| `[nzSearchValue]`        | 按需筛选树高亮节点(参考可搜索的树),双向绑定                                                                          | `string`                                                    | `null`  |
| `[nzSearchFunc]`         | 自定义匹配方法，配合 `nzSearchValue` 使用                                                                            | `(node: NzTreeNodeOptions) => boolean`                      | `null`  |
| `[nzBeforeDrop]`         | drop 前二次校验,允许用户自行决定是否允许放置                                                                         | `(confirm: NzFormatBeforeDropEvent) => Observable<boolean>` | -       |
| `[nzVirtualHeight]`      | 虚拟滚动的总高度                                                                                                     | `string`                                                    | `-`     |
| `[nzVirtualItemSize]`    | 虚拟滚动时每一列的高度，与 [cdk itemSize](https://material.angular.io/cdk/scrolling/api) 相同                        | `number`                                                    | `28`    |
| `[nzVirtualMaxBufferPx]` | 缓冲区最大像素高度，与 [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) 相同                         | `number`                                                    | `500`   |
| `[nzVirtualMinBufferPx]` | 缓冲区最小像素高度，低于该值时将加载新结构，与 [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) 相同 | `number`                                                    | `28`    |
| `(nzClick)`              | 点击树节点触发                                                                                                       | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzDblClick)`           | 双击树节点触发                                                                                                       | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzContextMenu)`        | 右键树节点触发                                                                                                       | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzCheckboxChange)`     | 点击树节点 checkbox 触发                                                                                             | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzExpandChange)`       | 点击展开树节点图标触发                                                                                               | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzSearchValueChange)`  | 搜索节点时调用(`nzSearchValue` 配合使用)                                                                             | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragStart)`        | 开始拖拽时调用                                                                                                       | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragEnter)`        | dragenter 触发时调用                                                                                                 | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragOver)`         | dragover 触发时调用                                                                                                  | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragLeave)`        | dragleave 触发时调用                                                                                                 | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDrop)`             | drop 触发时调用                                                                                                      | `EventEmitter<NzFormatEmitEvent>`                           | -       |
| `(nzOnDragEnd)`          | dragend 触发时调用                                                                                                   | `EventEmitter<NzFormatEmitEvent>`                           | -       |

#### 方法

| 方法名                   | 说明                               | 返回值         |
| ------------------------ | ---------------------------------- | -------------- |
| `getTreeNodes`           | 获取组件 NzTreeNode 节点           | `NzTreeNode[]` |
| `getTreeNodeByKey`       | 按 key 获取 NzTreeNode 节点        | `NzTreeNode`   |
| `getCheckedNodeList`     | 获取组件 checkbox 被点击选中的节点 | `NzTreeNode[]` |
| `getSelectedNodeList`    | 获取组件被选中的节点               | `NzTreeNode[]` |
| `getHalfCheckedNodeList` | 获取组件半选状态节点               | `NzTreeNode[]` |
| `getExpandedNodeList`    | 获取组件展开状态节点               | `NzTreeNode[]` |
| `getMatchedNodeList`     | 获取组搜索匹配到的节点             | `NzTreeNode[]` |

#### NzTreeNodeOptions props

| 参数              | 说明                                              | 类型                  | 默认值  |
| ----------------- | ------------------------------------------------- | --------------------- | ------- |
| `title`           | 标题                                              | `string`              | -       |
| `key`             | 整个树范围内的所有节点的 key 值不能重复且不为空！ | `string`              | -       |
| `icon`            | 节点前的图标，与 `nzShowIcon` 组合使用            | `string`              | -       |
| `children`        | 子节点                                            | `NzTreeNodeOptions[]` | -       |
| `isLeaf`          | 设置为叶子节点(叶子节点不可被拖拽模式放置)        | `boolean`             | `false` |
| `checked`         | 设置节点 checkbox 是否选中                        | `boolean`             | `false` |
| `selected`        | 设置节点本身是否选中                              | `boolean`             | `false` |
| `expanded`        | 设置节点是否展开(叶子节点无效)                    | `boolean`             | `false` |
| `selectable`      | 设置节点是否可被选中                              | `boolean`             | `true`  |
| `disabled`        | 设置是否禁用节点(不可进行任何操作)                | `boolean`             | `false` |
| `disableCheckbox` | 设置节点禁用 checkbox                             | `boolean`             | `false` |
| `[key: string]`   | 自定义数据,可通过 NzTreeNode 的 origin 字段获取   | `any `                | -       |

#### NzFormatEmitEvent props

| 属性            | 说明                                          | 类型                                                                                                                                                                | 默认值 |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `eventName`     | 事件名                                        | enum: `'click' \| 'dblclick' \| 'contextmenu' \| 'check' \| 'expand' \| 'search' \| 'dragstart' \| 'dragenter' \| 'dragover' \| 'dragleave' \| 'drop' \| 'dragend'` | -      |
| `node`          | 当前操作节点(拖拽时表示目标节点)              | `NzTreeNode`                                                                                                                                                        | `null` |
| `event`         | 原生事件                                      | `'MouseEvent' \| 'DragEvent'`                                                                                                                                       | `null` |
| `dragNode?`     | 当前拖拽节点(拖拽时存在)                      | `NzTreeNode`                                                                                                                                                        | `null` |
| `selectedKeys?` | 已选中的节点 key(单击时存在)                  | `NzTreeNode[]`                                                                                                                                                      | `[]`   |
| `checkedKeys?`  | checkbox 已选中的节点 key(点击 checkbox 存在) | `NzTreeNode[]`                                                                                                                                                      | `[]`   |
| `matchedKeys?`  | 搜索时匹配到的节点 key                        | `NzTreeNode[]`                                                                                                                                                      | `[]`   |
| `keys?`         | 非拖拽事件相关的全部节点的 key 数组           | `string[]`                                                                                                                                                          | `[]`   |
| `nodes?`        | 非拖拽事件相关的全部节点                      | `NzTreeNode[]`                                                                                                                                                      | `[]`   |

#### NzFormatBeforeDropEvent props

| 属性     | 说明                                                        | 类型         | 默认值 |
| -------- | ----------------------------------------------------------- | ------------ | ------ |
| dragNode | 当前拖拽节点(拖拽时存在)                                    | `NzTreeNode` | -      |
| node     | 当前操作节点(拖拽时表示目标节点)                            | `NzTreeNode` | -      |
| pos      | 放置位置(-1:目标节点前面, 0: 目标节点内部, 1: 目标节点后面) | `number`     | -      |

#### NzTreeNode props

| 属性                | 说明                                                                                          | 类型                                     | 默认值                    |
| ------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------- |
| `title`             | 标题                                                                                          | `string`                                 | `NzTreeNodeOptions.title` |
| `key`               | key 值                                                                                        | `string`                                 | `NzTreeNodeOptions.key`   |
| `level`             | 层级(最顶层为 0，子节点逐层加 1)                                                              | `number`                                 | `number`                  |
| `children`          | 子节点                                                                                        | `NzTreeNode[]`                           | `[]`                      |
| `origin`            | 原始节点树结构(用户提供,用于展示额外信息)                                                     | `NzTreeNodeOptions`                      | -                         |
| `getParentNode`     | 获取父节点                                                                                    | `function`                               | `null`                    |
| `isLeaf`            | 是否为叶子节点                                                                                | `boolean`                                | `false`                   |
| `isExpanded`        | 是否已展开                                                                                    | `boolean`                                | `false`                   |
| `isDisabled`        | 是否禁用                                                                                      | `boolean`                                | `false`                   |
| `isDisableCheckbox` | 是否禁用 checkbox                                                                             | `boolean`                                | `false`                   |
| `isSelectable`      | 是否可选中                                                                                    | `boolean`                                | `true`                    |
| `isChecked`         | 是否选中 checkbox                                                                             | `boolean`                                | `false`                   |
| `isHalfChecked`     | 子节点有选中但未全选                                                                          | `boolean`                                | `false`                   |
| `isSelected`        | 是否已选中                                                                                    | `boolean`                                | `false`                   |
| `isLoading`         | 是否异步加载状态(影响展开图标展示)                                                            | `boolean`                                | `false`                   |
| `isMatched`         | title 是否包含 nzSearchValue(搜索使用)                                                        | `boolean`                                | `false`                   |
| `setSyncChecked`    | 设置 checked 状态并同步其他节点状态                                                           | `function`                               | -                         |
| `getChildren`       | 获取子节点,返回 NzTreeNode 数组                                                               | `function`                               | -                         |
| `addChildren`       | 添加子节点,接收 NzTreeNode 或 NzTreeNodeOptions 数组,第二个参数为插入的索引位置，默认插入末尾 | `(children: array, index?: number )=>{}` | -                         |
| `clearChildren`     | 清除子节点                                                                                    | `function`                               | -                         |
| `remove`            | 清除当前节点(非根节点)                                                                        | `function`                               | -                         |

## 注意

- 当前请确保 `nzData` 在其他数据相关的属性之前被初始化:

```typescript
// 示例
this.nzExpandAll = false;
const nodes = []; // 源数据
this.nzData = [...nodes];
// nzData 值异步获取变化后重新渲染一下属性
this.nzExpandedKeys = [...this.nzExpandedKeys];
// this.nzExpandAll = true;
this.nzCheckedKeys = [...this.nzCheckedKeys];
this.nzSelectedKeys = [...this.nzSelectedKeys];
```

- `NzTreeNodeOptions` 可以接受用户自定义属性，可通过 `NzTreeNode.origin` 属性取得。
- 使用 ViewChild 时，Tree 方法需要在 ngAfterViewInit 中调用。
- `nzData` 属性请传递 NzTreeNodeOptions 数组。

---

## 代码示例

### 受控操作示例

受控操作示例(默认)。

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

### 基本

最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。

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

### 自定义图标

可以针对不同的节点定制图标。

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

### 目录

使用 `nzTreeTemplate` 实现自定义目录结构，通过 `let-origin="origin"` 获得原始数据，`let-node` 获取当前节点状态。

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

### 拖动示例-二次校验

nzBeforeDrop: 在拖拽放置事件(drop事件)之前做校验, 例如仅允许拖拽到内部(延时一秒)、放置前结合modal验证等。

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

### 拖动示例

将节点拖拽到其他节点内部或前后。

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

### 异步数据加载

点击展开节点，动态加载数据。

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

### 连接线

带连接线的树。

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

### 可搜索

可搜索的树。

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

### 虚拟滚动

设定 `nzVirtualHeight` 开启虚拟滚动。

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
