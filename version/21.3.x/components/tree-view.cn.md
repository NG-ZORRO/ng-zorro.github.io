---
category: Components
type: 数据展示
title: TreeView
subtitle: 树视图
tag: updated
cover: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg'
description: 树视图组件，相比封装好的 Tree 组件具有更高的定制度和更好的性能。
---

## 何时使用

更基础的 Tree 组件，允许在模版中定义每个组成部分，并手动管理状态。

> ⚠️ `nzTreeControl` 在 `v21.0.0` 中被移除，请使用 `nzLevelAccessor` 或 `nzChildrenAccessor` 替代。二者必须存在其一，否则无法正确构建视图。

## API

### nz-tree-view

| 参数                   | 说明                                                                                                       | 类型                                                                                                               | 默认值                              |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| `[nzDataSource]`       | 用于渲染树的数组数据                                                                                       | `DataSource<T> \| Observable<T[]> \| T[]`, [DataSource](https://material.angular.io/cdk/tree/overview#data-source) | -                                   |
| `[nzLevelAccessor]`    | 树层级访问方法（[levelAccessor](https://material.angular.io/cdk/tree/api#CdkTree)），结合扁平数据使用      | `(dataNode: T) => number`                                                                                          | -                                   |
| `[nzChildrenAccessor]` | 树子节点访问方法（[childrenAccessor](https://material.angular.io/cdk/tree/api#CdkTree)），结合嵌套数据使用 | `(dataNode: T) => T[]`                                                                                             | -                                   |
| `[nzTrackBy]`          | 用于检查数据变化的差异，使用方式类似于 ngFor 的 trackBy 函数                                               | `TrackByFunction`                                                                                                  | `(_index, dataNode: T) => dataNode` |
| `[nzDirectoryTree]`    | 节点是否以文件夹样式显示                                                                                   | `boolean`                                                                                                          | `false`                             |
| `[nzBlockNode]`        | 节点是否占据整行                                                                                           | `boolean`                                                                                                          | `false`                             |

### nz-tree-virtual-scroll-view

虚拟滚动的树视图，可以通过组件实例上的 `virtualScrollViewport` 成员访问 [CdkVirtualScrollViewport](https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport) 实例。

| 参数                   | 说明                                                                                                       | 类型                                                                                                               | 默认值                              |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| `[nzDataSource]`       | 用于渲染树的数组数据                                                                                       | `DataSource<T> \| Observable<T[]> \| T[]`, [DataSource](https://material.angular.io/cdk/tree/overview#data-source) | -                                   |
| `[nzLevelAccessor]`    | 树层级访问方法（[levelAccessor](https://material.angular.io/cdk/tree/api#CdkTree)），结合扁平数据使用      | `(dataNode: T) => number`                                                                                          | -                                   |
| `[nzChildrenAccessor]` | 树子节点访问方法（[childrenAccessor](https://material.angular.io/cdk/tree/api#CdkTree)），结合嵌套数据使用 | `(dataNode: T) => T[]`                                                                                             | -                                   |
| `[nzTrackBy]`          | 用于检查数据变化的差异，使用方式类似于 ngFor 的 trackBy 函数                                               | `TrackByFunction`                                                                                                  | `(_index, dataNode: T) => dataNode` |
| `[nzDirectoryTree]`    | 节点是否以文件夹样式显示                                                                                   | `boolean`                                                                                                          | `false`                             |
| `[nzBlockNode]`        | 节点是否占据整行                                                                                           | `boolean`                                                                                                          | `false`                             |
| `[nzItemSize]`         | 节点的尺寸(px)                                                                                             | `number`                                                                                                           | `28`                                |
| `[nzMinBufferPx]`      | 超出渲染区的最小缓存区大小(px)                                                                             | `number`                                                                                                           | `28 * 5`                            |
| `[nzMaxBufferPx]`      | 需要渲染新节点时的缓冲区大小(px)                                                                           | `number`                                                                                                           | `28 * 10`                           |

### [nzTreeNodeDef]

用于定义 `nz-tree-node` 的指令。

| 参数                  | 说明                                                                                                                   | 类型                                      | 默认值 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------ |
| `[nzTreeNodeDefWhen]` | 用于定义是否使用此节点的方法，优先匹配第一个返回 `true` 的节点。如果没有返回 `true` 的节点，则匹配未定义此方法的节点。 | `(index: number, nodeData: T) => boolean` | -      |

### nz-tree-node

树节点容器组件，需要通过 `nzTreeNodeDef` 指令定义。

| 参数             | 说明                                                                                                                                            | 类型      | 默认值  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `[nzExpandable]` | [节点是否可展开](https://material.angular.io/cdk/tree/api#CdkTreeNode)，使用 `nzLevelAccessor` 或 `nzChildrenAccessor` 时需要明确指定该参数值。 | `boolean` | `false` |

### [nzTreeNodePadding]

以添加 `padding` 的方式显示节点缩进 **性能最好**。

```html
<nz-tree-node nzTreeNodePadding></nz-tree-node>
```

### nzTreeNodeIndentLine

以添加缩进线的方式显示节点缩进。

```html
<nz-tree-node nzTreeNodeIndentLine></nz-tree-node>
```

### nz-tree-node-toggle

切换部分，用于节点的展开/收起。

| 参数                          | 说明                | 类型      | 默认值  |
| ----------------------------- | ------------------- | --------- | ------- |
| `[nzTreeNodeToggleRecursive]` | 是否为递归展开/收起 | `boolean` | `false` |

### nz-tree-node-toggle[nzTreeNodeNoopToggle]

不做任何操作的切换部分，可用于占位或者显示图标。

### [nzTreeNodeToggleRotateIcon]

定义切换部分中的图标，会随着展开收起状态自动旋转。

### [nzTreeNodeToggleActiveIcon]

定义切换部分中的图标，使其具有激活状态的样式，可用于 loading 图标。

### nz-tree-node-option

定义节点中的可选择部分。

| 参数           | 说明         | 类型                       | 默认值  |
| -------------- | ------------ | -------------------------- | ------- |
| `[nzSelected]` | 是否选中     | `boolean`                  | `false` |
| `[nzDisabled]` | 是否禁用     | `boolean`                  | `false` |
| `(nzClick)`    | 点击时的事件 | `EventEmitter<MouseEvent>` | -       |

### nz-tree-node-checkbox

定义节点中的可勾选的部分。

| 参数                | 说明         | 类型                       | 默认值  |
| ------------------- | ------------ | -------------------------- | ------- |
| `[nzChecked]`       | 是否勾选     | `boolean`                  | `false` |
| `[nzIndeterminate]` | 是否为半选   | `boolean`                  | `false` |
| `[nzDisabled] `     | 是否禁用     | `boolean`                  | `false` |
| `(nzClick)`         | 点击时的事件 | `EventEmitter<MouseEvent>` | -       |

## Classes

### NzTreeViewFlatDataSource extends DataSource

用于扁平数据的 `dataSource`，能够自动响应视图、数据变化，结合 `nzLevelAccessor` 使用。

**构造参数**

| 名称                                   | 说明                                               |
| -------------------------------------- | -------------------------------------------------- |
| `tree: NzTreeView<T, F>`               | Tree View 组件实例                                 |
| `treeFlattener: NzTreeFlattener<T, F>` | 用于将嵌套节点 `<T>` 转化为扁平节点 `<F>` 的展平器 |
| `initialData: T[] = []`                | 初始数据 `<T>`                                     |

**方法**

| 名称                                                           | 说明                                              |
| -------------------------------------------------------------- | ------------------------------------------------- |
| `connect(collectionViewer: CollectionViewer): Observable<F[]>` | TreeView 组件中调用，发射 flattenData 给 TreeView |
| `disconnect(): void`                                           | TreeView 组件销毁时调用                           |
| `setData(value: T[]): void`                                    | 设置初始数据 `<T>`                                |
| `getData(): T[]`                                               | 获取初始数据 `<T>`                                |
| `setFlattenedData(nodes: F[]): void`                           | 设置扁平数据 `<F>`                                |
| `getFlattenData(): F[]`                                        | 获取扁平数据 `<F>`                                |

### NzTreeViewNestedDataSource extends DataSource

用于嵌套数据的 `dataSource`，能够自动响应视图、数据变化，结合 `nzChidrenAccessor` 使用。

**构造参数**

| 名称                    | 说明               |
| ----------------------- | ------------------ |
| `tree: NzTreeView<T>`   | Tree View 组件实例 |
| `initialData: T[] = []` | 初始数据 `<T>`     |

**方法**

| 名称                                                           | 说明                                       |
| -------------------------------------------------------------- | ------------------------------------------ |
| `connect(collectionViewer: CollectionViewer): Observable<T[]>` | TreeView 组件中调用，发射 data 给 TreeView |
| `disconnect(): void`                                           | TreeView 组件销毁时调用                    |
| `setData(value: T[]): void`                                    | 设置初始数据 `<T>`                         |
| `getData(): T[]`                                               | 获取初始数据 `<T>`                         |

### NzTreeFlattener

将具有子节点的嵌套数据转换为具有级别（level）信息的转换器类。

**构造参数**

| 名称                                                                    | 说明                                        |
| ----------------------------------------------------------------------- | ------------------------------------------- |
| `transformFunction: (node: T, level: number) => F`                      | 接收一个嵌套节点 `<T>`，返回扁平节点 `<F>`  |
| `getLevel: (node: F) => number`                                         | 定义从扁平节点数据中获取 `level` 属性的方法 |
| `isExpandable: (node: F) => boolean`                                    | 定义是否为可展开节点的方法                  |
| `getChildren: (node: T) => Observable<T[]> \| T[] \| undefined \| null` | 定义从嵌套数据 `<T>` 中获取子节点的方法     |

**方法**

| 名称                                     | 说明                                   |
| ---------------------------------------- | -------------------------------------- |
| `flattenNodes(structuredData: T[]): F[]` | 接收嵌套数据 `<T>`，返回扁平数据 `<F>` |

## utils

Tree View 中常用的工具类。提供获取当前树节点的父亲、兄弟、子孙节点等方法，包含两套方法以分别用于**扁平**和**嵌套**数据结构。

**扁平数据**

| 名称                                                                                                   | 说明                                                           |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| `getParent: (nodes: F[], node: F, getLevel: (dataNode: F) => number): F \| null`                       | 返回当前节点的父节点                                           |
| `getDescendants: (nodes: F[], node: F, getLevel: (dataNode: F) => number): F[]`                        | 返回当前节点的所有子孙节点                                     |
| `getNextSibling: (nodes: F[], node: F, getLevel: (dataNode: F) => number, _index?: number): F \| null` | 返回当前节点的下一个兄弟节点（或 `_index` 后的第一个兄弟节点） |

**嵌套数据**

| 名称                                                                                               | 说明                                             |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `getParentForNestedData: (nodes: T[], node: T, getChildren: (dataNode: T) => T[]): T \| null`      | 返回当前节点的父节点                             |
| `getDescendantsForNestedData: (node: T, getChildren: (dataNode: T) => T[]): T[]`                   | 返回当前节点的所有子孙节点                       |
| `getNextSiblingForNestedData: (nodes: T[], node: T, getChildren: (dataNode: T) => T[]): T \| null` | 返回当前节点的下一个兄弟节点                     |
| `flattenNestedNodes: (nodes: T[], getChildren: (dataNode: T) => T[]): T[]`                         | 铺平嵌套数据，返回扁平数组，但不会改变节点属性。 |

---

## 代码示例

### nzChildrenAccessor 基本用法

使用 `nzChildrenAccessor` 实现树视图的基本功能，包括选中，禁用，展开等功能。

```typescript
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeViewComponent, NzTreeViewModule, NzTreeViewNestedDataSource } from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  disabled?: boolean;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'parent 1',
    children: [
      {
        name: 'parent 1-0',
        disabled: true,
        children: [{ name: 'leaf' }, { name: 'leaf' }]
      },
      {
        name: 'parent 1-1',
        children: [{ name: 'leaf' }]
      }
    ]
  }
];

@Component({
  imports: [NzIconModule, NzTreeViewModule],
  selector: 'nz-demo-tree-view-basic-children-accessor',
  template: `
    <nz-tree-view [nzDataSource]="dataSource" [nzChildrenAccessor]="childrenAccessor">
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodePadding [nzExpandable]="false">
        <nz-tree-node-toggle nzTreeNodeNoopToggle />
        <nz-tree-node-option
          [nzDisabled]="node.disabled"
          [nzSelected]="selectListSelection.isSelected(node)"
          (nzClick)="selectListSelection.toggle(node)"
        >
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodePadding [nzExpandable]="true">
        <nz-tree-node-toggle>
          <nz-icon nzType="caret-down" nzTreeNodeToggleRotateIcon />
        </nz-tree-node-toggle>
        <nz-tree-node-option
          [nzDisabled]="node.disabled"
          [nzSelected]="selectListSelection.isSelected(node)"
          (nzClick)="selectListSelection.toggle(node)"
        >
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>
    </nz-tree-view>
  `
})
export class NzDemoTreeViewBasicChildrenAccessorComponent implements OnInit, AfterViewInit {
  @ViewChild(NzTreeViewComponent, { static: true }) tree!: NzTreeViewComponent<TreeNode>;

  readonly childrenAccessor = (dataNode: TreeNode): TreeNode[] => dataNode.children ?? [];

  readonly hasChild = (_: number, node: TreeNode): boolean => !!node.children?.length;

  selectListSelection = new SelectionModel<TreeNode>(true);

  dataSource!: NzTreeViewNestedDataSource<TreeNode>;

  ngOnInit(): void {
    this.dataSource = new NzTreeViewNestedDataSource<TreeNode>(this.tree, TREE_DATA);
  }

  ngAfterViewInit(): void {
    this.tree.expandAll();
  }
}
```

### nzLevelAccessor 基本用法

使用 `nzLevelAccessor` 实现树视图的基本功能，包括选中，禁用，展开等功能。

```typescript
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  NzTreeFlattener,
  NzTreeViewComponent,
  NzTreeViewFlatDataSource,
  NzTreeViewModule
} from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  disabled?: boolean;
  children?: TreeNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'parent 1',
    children: [
      {
        name: 'parent 1-0',
        disabled: true,
        children: [{ name: 'leaf' }, { name: 'leaf' }]
      },
      {
        name: 'parent 1-1',
        children: [{ name: 'leaf' }]
      }
    ]
  }
];

@Component({
  imports: [NzIconModule, NzTreeViewModule],
  selector: 'nz-demo-tree-view-basic-level-accessor',
  template: `
    <nz-tree-view [nzDataSource]="dataSource" [nzLevelAccessor]="levelAccessor">
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodePadding [nzExpandable]="false">
        <nz-tree-node-toggle nzTreeNodeNoopToggle />
        <nz-tree-node-option
          [nzDisabled]="node.disabled"
          [nzSelected]="selectListSelection.isSelected(node)"
          (nzClick)="selectListSelection.toggle(node)"
        >
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodePadding [nzExpandable]="true">
        <nz-tree-node-toggle>
          <nz-icon nzType="caret-down" nzTreeNodeToggleRotateIcon />
        </nz-tree-node-toggle>
        <nz-tree-node-option
          [nzDisabled]="node.disabled"
          [nzSelected]="selectListSelection.isSelected(node)"
          (nzClick)="selectListSelection.toggle(node)"
        >
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>
    </nz-tree-view>
  `
})
export class NzDemoTreeViewBasicLevelAccessorComponent implements OnInit, AfterViewInit {
  @ViewChild(NzTreeViewComponent, { static: true }) tree!: NzTreeViewComponent<FlatNode>;

  readonly levelAccessor = (dataNode: FlatNode): number => dataNode.level;

  readonly hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  private transformer = (node: TreeNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: !!node.disabled
  });

  private treeFlattener = new NzTreeFlattener<TreeNode, FlatNode>(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  selectListSelection = new SelectionModel<FlatNode>(true);

  dataSource!: NzTreeViewFlatDataSource<TreeNode, FlatNode>;

  ngOnInit(): void {
    this.dataSource = new NzTreeViewFlatDataSource(this.tree, this.treeFlattener, TREE_DATA);
  }

  ngAfterViewInit(): void {
    this.tree.expandAll();
  }
}
```

### 选择框

带选择框的树。

```typescript
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  getDescendantsForNestedData,
  getParentForNestedData,
  NzTreeViewComponent,
  NzTreeViewModule,
  NzTreeViewNestedDataSource
} from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  disabled?: boolean;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: '0-0',
    disabled: true,
    children: [{ name: '0-0-0' }, { name: '0-0-1' }, { name: '0-0-2' }]
  },
  {
    name: '0-1',
    children: [
      {
        name: '0-1-0',
        children: [{ name: '0-1-0-0' }, { name: '0-1-0-1' }]
      },
      {
        name: '0-1-1',
        children: [{ name: '0-1-1-0' }, { name: '0-1-1-1' }]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-tree-view-checkbox',
  imports: [NzIconModule, NzTreeViewModule],
  template: `
    <nz-tree-view [nzDataSource]="dataSource" [nzChildrenAccessor]="childrenAccessor">
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodePadding [nzExpandable]="false">
        <nz-tree-node-toggle nzTreeNodeNoopToggle />
        <nz-tree-node-checkbox
          [nzDisabled]="node.disabled"
          [nzChecked]="checklistSelection.isSelected(node)"
          (nzClick)="leafItemSelectionToggle(node)"
        />
        <nz-tree-node-option [nzDisabled]="node.disabled" (nzClick)="leafItemSelectionToggle(node)">
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodePadding [nzExpandable]="true">
        <nz-tree-node-toggle>
          <nz-icon nzType="caret-down" nzTreeNodeToggleRotateIcon />
        </nz-tree-node-toggle>
        <nz-tree-node-checkbox
          [nzDisabled]="node.disabled"
          [nzChecked]="descendantsAllSelected(node)"
          [nzIndeterminate]="descendantsPartiallySelected(node)"
          (nzClick)="itemSelectionToggle(node)"
        />
        <nz-tree-node-option [nzDisabled]="node.disabled" (nzClick)="itemSelectionToggle(node)">
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>
    </nz-tree-view>
  `
})
export class NzDemoTreeViewCheckboxComponent implements OnInit {
  @ViewChild(NzTreeViewComponent, { static: true }) tree!: NzTreeViewComponent<TreeNode>;

  readonly childrenAccessor = (dataNode: TreeNode): TreeNode[] => dataNode.children ?? [];

  readonly hasChild = (_: number, node: TreeNode): boolean => !!node.children?.length;

  checklistSelection = new SelectionModel<TreeNode>(true);

  dataSource!: NzTreeViewNestedDataSource<TreeNode>;

  ngOnInit(): void {
    this.dataSource = new NzTreeViewNestedDataSource<TreeNode>(this.tree, TREE_DATA);
  }

  private getDescendants(node: TreeNode): TreeNode[] {
    return getDescendantsForNestedData(node, this.childrenAccessor);
  }

  private getParentNode(node: TreeNode): TreeNode | null {
    return getParentForNestedData(this.tree.dataNodes, node, this.childrenAccessor);
  }

  descendantsAllSelected(node: TreeNode): boolean {
    const descendants = this.getDescendants(node);
    return descendants.length > 0 && descendants.every(child => this.checklistSelection.isSelected(child));
  }

  descendantsPartiallySelected(node: TreeNode): boolean {
    const descendants = this.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  leafItemSelectionToggle(node: TreeNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  itemSelectionToggle(node: TreeNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: TreeNode): void {
    let parent: TreeNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkRootNodeSelection(node: TreeNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 && descendants.every(child => this.checklistSelection.isSelected(child));
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }
}
```

### 目录

目录树

```typescript
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  NzTreeFlattener,
  NzTreeViewComponent,
  NzTreeViewFlatDataSource,
  NzTreeViewModule
} from 'ng-zorro-antd/tree-view';

interface FoodNode {
  name: string;
  disabled?: boolean;
  children?: FoodNode[];
}

interface FlatFoodNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana', disabled: true }, { name: 'Fruit loops' }]
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }]
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-tree-view-directory',
  imports: [NzIconModule, NzTreeViewModule],
  template: `
    <nz-tree-view [nzDataSource]="dataSource" [nzLevelAccessor]="levelAccessor" [nzDirectoryTree]="true">
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodePadding [nzExpandable]="false">
        <nz-tree-node-toggle nzTreeNodeNoopToggle />
        <nz-tree-node-option
          [nzDisabled]="node.disabled"
          [nzSelected]="selectListSelection.isSelected(node)"
          (nzClick)="selectListSelection.toggle(node)"
        >
          <nz-icon nzType="file" nzTheme="outline" />
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodePadding [nzExpandable]="true">
        <nz-tree-node-toggle>
          <nz-icon nzType="caret-down" nzTreeNodeToggleRotateIcon />
        </nz-tree-node-toggle>
        <nz-tree-node-option
          [nzDisabled]="node.disabled"
          [nzSelected]="selectListSelection.isSelected(node)"
          (nzClick)="selectListSelection.toggle(node)"
        >
          <nz-icon [nzType]="tree.isExpanded(node) ? 'folder-open' : 'folder'" nzTheme="outline" />
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>
    </nz-tree-view>
  `
})
export class NzDemoTreeViewDirectoryComponent implements OnInit, AfterViewInit {
  @ViewChild(NzTreeViewComponent, { static: true }) tree!: NzTreeViewComponent<FlatFoodNode>;

  readonly levelAccessor = (dataNode: FlatFoodNode): number => dataNode.level;

  readonly hasChild = (_: number, node: FlatFoodNode): boolean => node.expandable;

  private transformer = (node: FoodNode, level: number): FlatFoodNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: !!node.disabled
  });

  private treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  selectListSelection = new SelectionModel<FlatFoodNode>(true);

  dataSource!: NzTreeViewFlatDataSource<FoodNode, FlatFoodNode>;

  ngOnInit(): void {
    this.dataSource = new NzTreeViewFlatDataSource(this.tree, this.treeFlattener, TREE_DATA);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tree.expand(this.getNode('Vegetables')!);
    }, 300);
  }

  getNode(name: string): FlatFoodNode | null {
    return this.tree.dataNodes.find(n => n.name === name) || null;
  }
}
```

### 异步加载数据

点击展开节点，动态加载数据。

```typescript
import { CollectionViewer, DataSource, SelectionChange } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, merge, Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeView, NzTreeViewComponent, NzTreeViewModule } from 'ng-zorro-antd/tree-view';

interface FlatNode {
  expandable: boolean;
  id: number;
  label: string;
  level: number;
  loading?: boolean;
}

const TREE_DATA: FlatNode[] = [
  {
    id: 0,
    label: 'Expand to load',
    level: 0,
    expandable: true
  },
  {
    id: 1,
    label: 'Expand to load',
    level: 0,
    expandable: true
  }
];

function getChildren(node: FlatNode): Observable<FlatNode[]> {
  return of([
    {
      id: Date.now(),
      label: `Child Node (level-${node.level + 1})`,
      level: node.level + 1,
      expandable: true
    },
    {
      id: Date.now(),
      label: `Child Node (level-${node.level + 1})`,
      level: node.level + 1,
      expandable: true
    },
    {
      id: Date.now(),
      label: `Leaf Node (level-${node.level + 1})`,
      level: node.level + 1,
      expandable: false
    }
  ]).pipe(delay(500));
}

class DynamicDatasource implements DataSource<FlatNode> {
  private flattenedData: BehaviorSubject<FlatNode[]>;
  private childrenLoadedSet = new Set<FlatNode>();

  constructor(
    private tree: NzTreeView<FlatNode>,
    initData: FlatNode[]
  ) {
    this.flattenedData = new BehaviorSubject<FlatNode[]>(initData);
    tree.dataNodes = initData;
  }

  connect(collectionViewer: CollectionViewer): Observable<FlatNode[]> {
    const changes = [
      collectionViewer.viewChange,
      this.tree._getExpansionModel().changed.pipe(tap(change => this.handleExpansionChange(change))),
      this.flattenedData.asObservable()
    ];
    return merge(...changes).pipe(map(() => this.flattenedData.value));
  }

  handleExpansionChange(change: SelectionChange<FlatNode>): void {
    if (change.added) {
      change.added.forEach(node => this.loadChildren(node));
    }
  }

  loadChildren(node: FlatNode): void {
    if (this.childrenLoadedSet.has(node)) {
      return;
    }
    node.loading = true;
    getChildren(node).subscribe(children => {
      node.loading = false;
      const flattenedData = this.flattenedData.getValue();
      const index = flattenedData.indexOf(node);
      if (index !== -1) {
        flattenedData.splice(index + 1, 0, ...children);
        this.childrenLoadedSet.add(node);
      }
      this.flattenedData.next(flattenedData);
      // save flattened data into tree instance
      this.tree.dataNodes = flattenedData;
    });
  }

  disconnect(): void {
    this.flattenedData.complete();
  }
}

@Component({
  selector: 'nz-demo-tree-view-dynamic',
  imports: [NzIconModule, NzTreeViewModule],
  template: `
    <nz-tree-view [nzDataSource]="dataSource" [nzLevelAccessor]="levelAccessor">
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodePadding [nzExpandable]="false">
        {{ node.label }}
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodePadding [nzExpandable]="true">
        @if (!node.loading) {
          <nz-tree-node-toggle>
            <nz-icon nzType="caret-down" nzTreeNodeToggleRotateIcon />
          </nz-tree-node-toggle>
        } @else {
          <nz-tree-node-toggle nzTreeNodeNoopToggle>
            <nz-icon nzType="loading" nzTreeNodeToggleActiveIcon />
          </nz-tree-node-toggle>
        }
        {{ node.label }}
      </nz-tree-node>
    </nz-tree-view>
  `
})
export class NzDemoTreeViewDynamicComponent implements OnInit {
  @ViewChild(NzTreeViewComponent, { static: true }) tree!: NzTreeViewComponent<FlatNode>;

  readonly levelAccessor = (dataNode: FlatNode): number => dataNode.level;

  readonly hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  dataSource!: DynamicDatasource;

  ngOnInit(): void {
    this.dataSource = new DynamicDatasource(this.tree, TREE_DATA);
  }
}
```

### 可编辑

带添加和删除功能的树。

```typescript
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  getParentForNestedData,
  NzTreeViewComponent,
  NzTreeViewModule,
  NzTreeViewNestedDataSource
} from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  key: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'parent 1',
    key: '1',
    children: [
      {
        name: 'parent 1-0',
        key: '1-0',
        children: [
          { name: 'leaf', key: '1-0-0' },
          { name: 'leaf', key: '1-0-1' }
        ]
      },
      {
        name: 'parent 1-1',
        key: '1-1',
        children: [{ name: 'leaf', key: '1-1-0' }]
      }
    ]
  },
  {
    key: '2',
    name: 'parent 2',
    children: [{ name: 'leaf', key: '2-0' }]
  }
];

@Component({
  selector: 'nz-demo-tree-view-editable',
  imports: [NzButtonModule, NzInputModule, NzIconModule, NzTreeViewModule],
  template: `
    <nz-tree-view [nzDataSource]="dataSource" [nzChildrenAccessor]="childrenAccessor" [nzTrackBy]="trackBy">
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodeIndentLine [nzExpandable]="false">
        <nz-tree-node-option
          [nzDisabled]="node.disabled"
          [nzSelected]="selectListSelection.isSelected(node)"
          (nzClick)="selectListSelection.toggle(node)"
        >
          {{ node.name }}
        </nz-tree-node-option>
        <button nz-button nzType="text" nzSize="small" (click)="delete(node)">
          <nz-icon nzType="minus" nzTheme="outline" />
        </button>
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasNoContent" nzTreeNodeIndentLine [nzExpandable]="false">
        <input nz-input placeholder="Input node name" nzSize="small" #inputElement />
        &nbsp;
        <button nz-button nzSize="small" (click)="saveNode(node, inputElement.value)">Add</button>
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodeIndentLine [nzExpandable]="true">
        <nz-tree-node-toggle>
          <nz-icon nzType="caret-down" nzTreeNodeToggleRotateIcon />
        </nz-tree-node-toggle>
        {{ node.name }}
        <button nz-button nzType="text" nzSize="small" (click)="addNewNode(node)">
          <nz-icon nzType="plus" nzTheme="outline" />
        </button>
      </nz-tree-node>
    </nz-tree-view>
  `
})
export class NzDemoTreeViewEditableComponent implements OnInit, AfterViewInit {
  @ViewChild(NzTreeViewComponent, { static: true }) tree!: NzTreeViewComponent<TreeNode>;

  readonly childrenAccessor = (dataNode: TreeNode): TreeNode[] => dataNode.children ?? [];

  readonly hasChild = (_: number, node: TreeNode): boolean => !!node.children?.length;

  readonly hasNoContent = (_: number, node: TreeNode): boolean => node.name === '';

  readonly trackBy = (_: number, node: TreeNode): string => `${node.key}-${node.name}`;

  selectListSelection = new SelectionModel<TreeNode>(true);

  treeData = TREE_DATA;

  dataSource!: NzTreeViewNestedDataSource<TreeNode>;

  ngOnInit(): void {
    this.dataSource = new NzTreeViewNestedDataSource<TreeNode>(this.tree, this.treeData);
  }

  ngAfterViewInit(): void {
    this.tree.expandAll();
  }

  delete(node: TreeNode): void {
    const parentNode = getParentForNestedData(this.treeData, node, this.childrenAccessor);
    if (parentNode && parentNode.children) {
      parentNode.children = parentNode.children.filter(e => e !== node);
    }

    this.dataSource.setData(this.treeData);
  }
  addNewNode(node: TreeNode): void {
    node.children = node.children || [];
    node.children.push({
      name: '',
      key: `${node.key}-${node.children.length}`
    });
    this.dataSource.setData(this.treeData);
    this.tree.expand(node);
  }

  saveNode(node: TreeNode, value: string): void {
    if (node) {
      node.name = value;
      this.dataSource.setData(this.treeData);
    }
  }
}
```

### 带连接线的树

节点之间带连接线的树，常用于文件目录结构展示。

```typescript
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTreeViewComponent, NzTreeViewModule, NzTreeViewNestedDataSource } from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'parent 1',
    children: [
      {
        name: 'parent 1-0',
        children: [{ name: 'leaf' }, { name: 'leaf' }]
      },
      {
        name: 'parent 1-1',
        children: [
          { name: 'leaf' },
          {
            name: 'parent 1-1-0',
            children: [{ name: 'leaf' }, { name: 'leaf' }]
          },
          { name: 'leaf' }
        ]
      }
    ]
  },
  {
    name: 'parent 2',
    children: [{ name: 'leaf' }, { name: 'leaf' }]
  }
];

@Component({
  selector: 'nz-demo-tree-view-line',
  imports: [FormsModule, NzIconModule, NzSwitchModule, NzTreeViewModule],
  template: `
    Show Leaf Icon:
    <nz-switch [(ngModel)]="showLeafIcon" />

    <nz-tree-view [nzDataSource]="dataSource" [nzChildrenAccessor]="childrenAccessor">
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodeIndentLine [nzExpandable]="false">
        @if (showLeafIcon) {
          <nz-tree-node-toggle nzTreeNodeNoopToggle>
            <nz-icon nzType="file" nzTheme="outline" />
          </nz-tree-node-toggle>
        }
        <nz-tree-node-option>
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodeIndentLine [nzExpandable]="true">
        <nz-tree-node-toggle>
          <nz-icon [nzType]="tree.isExpanded(node) ? 'minus-square' : 'plus-square'" nzTheme="outline" />
        </nz-tree-node-toggle>
        <nz-tree-node-option>
          {{ node.name }}
        </nz-tree-node-option>
      </nz-tree-node>
    </nz-tree-view>
  `
})
export class NzDemoTreeViewLineComponent implements AfterViewInit, OnInit {
  @ViewChild(NzTreeViewComponent, { static: true }) tree!: NzTreeViewComponent<TreeNode>;

  readonly childrenAccessor = (dataNode: TreeNode): TreeNode[] => dataNode.children ?? [];

  readonly hasChild = (_: number, node: TreeNode): boolean => !!node.children?.length;

  showLeafIcon = false;

  dataSource!: NzTreeViewNestedDataSource<TreeNode>;

  ngOnInit(): void {
    this.dataSource = new NzTreeViewNestedDataSource<TreeNode>(this.tree, TREE_DATA);
  }

  ngAfterViewInit(): void {
    this.tree.expandAll();
  }
}
```

### 搜索

可搜索的树。

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

import { NzHighlightPipe } from 'ng-zorro-antd/core/highlight';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  NzTreeFlattener,
  NzTreeViewComponent,
  NzTreeViewFlatDataSource,
  NzTreeViewModule
} from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: '0-0',
    children: [{ name: '0-0-0' }, { name: '0-0-1' }, { name: '0-0-2' }]
  },
  {
    name: '0-1',
    children: [
      {
        name: '0-1-0',
        children: [{ name: '0-1-0-0' }, { name: '0-1-0-1' }]
      },
      {
        name: '0-1-1',
        children: [{ name: '0-1-1-0' }, { name: '0-1-1-1' }]
      }
    ]
  }
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

class FilteredTreeResult {
  constructor(
    public treeData: TreeNode[],
    public needsToExpanded: TreeNode[] = []
  ) {}
}

/**
 * From https://stackoverflow.com/a/45290208/6851836
 */
function filterTreeData(data: TreeNode[], value: string): FilteredTreeResult {
  const needsToExpanded = new Set<TreeNode>();
  const _filter = (node: TreeNode, result: TreeNode[]): TreeNode[] => {
    if (node.name.search(value) !== -1) {
      result.push(node);
      return result;
    }
    if (Array.isArray(node.children)) {
      const nodes = node.children.reduce((a, b) => _filter(b, a), [] as TreeNode[]);
      if (nodes.length) {
        const parentNode = { ...node, children: nodes };
        needsToExpanded.add(parentNode);
        result.push(parentNode);
      }
    }
    return result;
  };
  const treeData = data.reduce((a, b) => _filter(b, a), [] as TreeNode[]);
  return new FilteredTreeResult(treeData, [...needsToExpanded]);
}

@Component({
  selector: 'nz-demo-tree-view-search',
  imports: [FormsModule, NzInputModule, NzIconModule, NzTreeViewModule, NzHighlightPipe],
  template: `
    <nz-input-wrapper>
      <input type="text" nz-input placeholder="Search" ngModel (ngModelChange)="searchValue$.next($event)" />
      <nz-icon nzInputSuffix nzType="search" />
    </nz-input-wrapper>

    <nz-tree-view [nzDataSource]="dataSource" [nzLevelAccessor]="levelAccessor">
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodePadding [nzExpandable]="false">
        <nz-tree-node-toggle nzTreeNodeNoopToggle />
        <span [innerHTML]="node.name | nzHighlight: searchValue : 'i' : 'highlight'"></span>
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodePadding [nzExpandable]="true">
        <nz-tree-node-toggle>
          <nz-icon nzType="caret-down" nzTreeNodeToggleRotateIcon />
        </nz-tree-node-toggle>
        <span [innerHTML]="node.name | nzHighlight: searchValue : 'i' : 'highlight'"></span>
      </nz-tree-node>
    </nz-tree-view>
  `,
  styles: `
    nz-input-wrapper {
      margin-bottom: 8px;
    }

    ::ng-deep .highlight {
      color: #f50;
    }
  `
})
export class NzDemoTreeViewSearchComponent implements OnInit {
  @ViewChild(NzTreeViewComponent, { static: true }) tree!: NzTreeViewComponent<FlatNode>;

  readonly levelAccessor = (dataNode: FlatNode): number => dataNode.level;

  readonly hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  flatNodeMap = new Map<FlatNode, TreeNode>();
  nestedNodeMap = new Map<TreeNode, FlatNode>();
  expandedNodes: TreeNode[] = [];
  searchValue = '';
  originData$ = new BehaviorSubject(TREE_DATA);
  searchValue$ = new BehaviorSubject<string>('');

  transformer = (node: TreeNode, level: number): FlatNode => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.name === node.name
        ? existingNode
        : {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level
          };
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  treeFlattener = new NzTreeFlattener<TreeNode, FlatNode>(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  filteredData$ = combineLatest([
    this.originData$,
    this.searchValue$.pipe(
      auditTime(300),
      map(value => (this.searchValue = value))
    )
  ]).pipe(map(([data, value]) => (value ? filterTreeData(data, value) : new FilteredTreeResult(data))));

  dataSource!: NzTreeViewFlatDataSource<TreeNode, FlatNode>;

  ngOnInit(): void {
    this.dataSource = new NzTreeViewFlatDataSource(this.tree, this.treeFlattener);

    this.filteredData$.subscribe(result => {
      this.dataSource.setData(result.treeData);

      const hasSearchValue = !!this.searchValue;
      // trans nested nodes to flat nodes
      const needsToExpanded = result.needsToExpanded.map(node => this.nestedNodeMap.get(node)!);
      const expandedNodes = this.expandedNodes.map(node => this.nestedNodeMap.get(node)!);
      // expand nodes
      if (hasSearchValue) {
        if (this.expandedNodes.length === 0) {
          this.expandedNodes = this.tree._getExpansionModel().selected;
          this.tree._getExpansionModel().clear();
        }
        this.tree._getExpansionModel().select(...needsToExpanded);
      } else {
        if (this.expandedNodes.length) {
          this.tree._getExpansionModel().clear();
          this.tree._getExpansionModel().select(...expandedNodes);
          this.expandedNodes = [];
        }
      }
    });
  }
}
```

### 虚拟滚动

使用虚拟滚动。

```typescript
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  NzTreeFlattener,
  NzTreeViewFlatDataSource,
  NzTreeViewModule,
  NzTreeVirtualScrollViewComponent
} from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

function dig(path: string = '0', level: number = 3): TreeNode[] {
  const list: TreeNode[] = [];
  for (let i = 0; i < 10; i += 1) {
    const name = `${path}-${i}`;
    const treeNode: TreeNode = {
      name
    };

    if (level > 0) {
      treeNode.children = dig(name, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const TREE_DATA: TreeNode[] = dig();

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'nz-demo-tree-view-virtual-scroll',
  imports: [NzIconModule, NzTreeViewModule],
  template: `
    <nz-tree-virtual-scroll-view
      class="virtual-scroll-tree"
      [nzDataSource]="dataSource"
      [nzLevelAccessor]="levelAccessor"
    >
      <nz-tree-node *nzTreeNodeDef="let node" nzTreeNodePadding [nzExpandable]="false">
        <nz-tree-node-toggle nzTreeNodeNoopToggle />
        {{ node.name }}
      </nz-tree-node>

      <nz-tree-node *nzTreeNodeDef="let node; when: hasChild" nzTreeNodePadding [nzExpandable]="true">
        <nz-tree-node-toggle>
          <nz-icon nzType="caret-down" nzTreeNodeToggleRotateIcon />
        </nz-tree-node-toggle>
        {{ node.name }}
      </nz-tree-node>
    </nz-tree-virtual-scroll-view>
  `,
  styles: `
    .virtual-scroll-tree {
      height: 200px;
    }
  `
})
export class NzDemoTreeViewVirtualScrollComponent implements OnInit, AfterViewInit {
  @ViewChild(NzTreeVirtualScrollViewComponent, { static: true }) tree!: NzTreeVirtualScrollViewComponent<FlatNode>;

  readonly levelAccessor = (dataNode: FlatNode): number => dataNode.level;

  readonly hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  private transformer = (node: TreeNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level
  });

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource!: NzTreeViewFlatDataSource<TreeNode, FlatNode>;

  ngOnInit(): void {
    this.dataSource = new NzTreeViewFlatDataSource(this.tree, this.treeFlattener, TREE_DATA);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tree.expandAll();
    });
  }
}
```
