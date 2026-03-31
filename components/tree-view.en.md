---
category: Components
type: Data Display
title: TreeView
tag: updated
cover: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg'
description: Tree view component with better performance and customizability.
---

## When To Use

More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.

> ⚠️ `nzTreeControl` has been removed in `v21.0.0`. Please use either `nzLevelAccessor` or `nzChildrenAccessor` instead, one of them must exist.

## API

### nz-tree-view

| Property               | Description                                                                                                                       | Type                                                                                                               | Default                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| `[nzDataSource]`       | The data array to render                                                                                                          | `DataSource<T> \| Observable<T[]> \| T[]`, [DataSource](https://material.angular.io/cdk/tree/overview#data-source) | -                                   |
| `[nzLevelAccessor]`    | The level accessor of tree node ([levelAccessor](https://material.angular.io/cdk/tree/api#CdkTree)), used with flat data.         | `(dataNode: T) => number`                                                                                          | -                                   |
| `[nzChildrenAccessor]` | The children accessor of tree node ([childrenAccessor](https://material.angular.io/cdk/tree/api#CdkTree)), used with nested data. | `(dataNode: T) => T[]`                                                                                             | -                                   |
| `[nzTrackBy]`          | Tracking function that will be used to check the differences in data changes. Used similarly to ngFor trackBy function.           | `TrackByFunction`                                                                                                  | `(_index, dataNode: T) => dataNode` |
| `[nzDirectoryTree]`    | Whether nodes are displayed as directory style                                                                                    | `boolean`                                                                                                          | `false`                             |
| `[nzBlockNode]`        | Whether tree nodes fill remaining horizontal space                                                                                | `boolean`                                                                                                          | `false`                             |

### nz-tree-virtual-scroll-view

The virtual scroll tree view, which can be accessed from
the [CdkVirtualScrollViewport](https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport) instance through
the `virtualScrollViewport` member of the component instance.

| Property               | Description                                                                                                                       | Type                                                                                                               | Default                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| `[nzDataSource]`       | The data array to render                                                                                                          | `DataSource<T> \| Observable<T[]> \| T[]`, [DataSource](https://material.angular.io/cdk/tree/overview#data-source) | -                                   |
| `[nzLevelAccessor]`    | The level accessor of tree node ([levelAccessor](https://material.angular.io/cdk/tree/api#CdkTree)), used with flat data.         | `(dataNode: T) => number`                                                                                          | -                                   |
| `[nzChildrenAccessor]` | The children accessor of tree node ([childrenAccessor](https://material.angular.io/cdk/tree/api#CdkTree)), used with nested data. | `(dataNode: T) => T[]`                                                                                             | -                                   |
| `[nzTrackBy]`          | Tracking function that will be used to check the differences in data changes. Used similarly to ngFor trackBy function.           | `TrackByFunction`                                                                                                  | `(_index, dataNode: T) => dataNode` |
| `[nzDirectoryTree]`    | Whether nodes are displayed as directory style                                                                                    | `boolean`                                                                                                          | `false`                             |
| `[nzBlockNode]`        | Whether tree nodes fill remaining horizontal space                                                                                | `boolean`                                                                                                          | `false`                             |
| `[nzItemSize]`         | The size of nodes in the tree (in pixels)                                                                                         | `number`                                                                                                           | `28`                                |
| `[nzMinBufferPx]`      | The minimum amount of buffer rendered allowed outside the viewport (in pixels)                                                    | `number`                                                                                                           | `28 * 5`                            |
| `[nzMaxBufferPx]`      | The amount of buffer required for rendering new nodes (in pixels)                                                                 | `number`                                                                                                           | `28 * 10`                           |

### [nzTreeNodeDef]

Directive to define `nz-tree-node`.

| Property              | Description                                                                                                                                                                                                                                                                 | Type                                      | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------- |
| `[nzTreeNodeDefWhen]` | A matching function which indicates whether inputted node should be used. It matches the very first node that makes this function return `true`. If no nodes that makes this function return `true`, the node which does not define this function would be matched instead. | `(index: number, nodeData: T) => boolean` | -       |

### nz-tree-node

The tree node container component, which needs to be defined by the `nzTreeNodeDef` directive.

| Property         | Description                                                                                                                                                                                | Type      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------- |
| `[nzExpandable]` | [Whether or not this tree node is expandable](https://material.angular.io/cdk/tree/api#CdkTreeNode). Please set this parameter value when using `nzLevelAccessor` or `nzChildrenAccessor`. | `boolean` | `false` |

### [nzTreeNodePadding]

Show node indentation by adding `padding` **Best Performance**.

```html
<nz-tree-node nzTreeNodePadding></nz-tree-node>
```

### nzTreeNodeIndentLine

Show node indentation by adding indent lines.

```html
<nz-tree-node nzTreeNodeIndentLine></nz-tree-node>
```

### nz-tree-node-toggle

A toggle which is used to expand / collapse the node.

| Property                      | Description                         | Type      | Default |
| ----------------------------- | ----------------------------------- | --------- | ------- |
| `[nzTreeNodeToggleRecursive]` | Is it recursively expand / collapse | `boolean` | `false` |

### nz-tree-node-toggle[nzTreeNodeNoopToggle]

A toggle that does no actions. This can be used for placeholders or displays icons.

### [nzTreeNodeToggleRotateIcon]

Define an icon in the toggle, which it will automatically rotate depending on the collapse/expand state.

### [nzTreeNodeToggleActiveIcon]

Define an icon in the toggle for an active style, which it can be used for the loading state.

### nz-tree-node-option

Define the selectable feature of a node.

| Property       | Description                     | Type                       | Default |
| -------------- | ------------------------------- | -------------------------- | ------- |
| `[nzSelected]` | Whether the option is selected. | `boolean`                  | `false` |
| `[nzDisabled]` | Whether the option is disabled. | `boolean`                  | `false` |
| `(nzClick)`    | Event on click.                 | `EventEmitter<MouseEvent>` | -       |

### nz-tree-node-checkbox

Define the checkbox feature of a node.

| Property            | Description                            | Type                       | Default |
| ------------------- | -------------------------------------- | -------------------------- | ------- |
| `[nzChecked]`       | Whether the checkbox is checked.       | `boolean`                  | `false` |
| `[nzDisabled]`      | Whether the checkbox is disabled.      | `boolean`                  | `false` |
| `[nzIndeterminate]` | Whether the checkbox is indeterminate. | `boolean`                  | `false` |
| `(nzClick)`         | Event on click.                        | `EventEmitter<MouseEvent>` | -       |

## Classes

### NzTreeViewFlatDataSource extends DataSource

The `dataSource` for flat data that automatically responds to view and data changes, used with `nzLevelAccessor`.

**Construction Parameters**

| Name                                   | Description                                                          |
| -------------------------------------- | -------------------------------------------------------------------- |
| `tree: NzTreeView<T, F>`               | Tree View component instance.                                        |
| `treeFlattener: NzTreeFlattener<T, F>` | Flattener for convert nested nodes `<T>` into flattened nodes `<F>`. |
| `initialData: T[] = []`                | Initialized data `<T>`.                                              |

**Methods**

| Name                                                           | Description                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------------ |
| `connect(collectionViewer: CollectionViewer): Observable<F[]>` | Called in the TreeView component, emit flattenData to the TreeView |
| `disconnect(): void`                                           | Call when TreeView component is destroyed.                         |
| `setData(value: T[]): void`                                    | Set the origin data `<T>`.                                         |
| `getData(): T[]`                                               | Get the origin data `<T>`.                                         |
| `setFlattenedData(nodes: F[]): void`                           | Set the flattened data `<F>`.                                      |
| `getFlattenData(): F[]`                                        | Get the flattened data `<F>`.                                      |

### NzTreeViewNestedDataSource extends DataSource

The `dataSource` for nested data that automatically responds to view and data changes, used with `nzChildrenAccessor`.

**Construction Parameters**

| Name                    | Description                   |
| ----------------------- | ----------------------------- |
| `tree: NzTreeView<T>`   | Tree View component instance. |
| `initialData: T[] = []` | Initialized data `<T>`.       |

**Methods**

| Name                                                           | Description                                                 |
| -------------------------------------------------------------- | ----------------------------------------------------------- |
| `connect(collectionViewer: CollectionViewer): Observable<T[]>` | Called in the TreeView component, emit data to the TreeView |
| `disconnect(): void`                                           | Call when TreeView component is destroyed.                  |
| `setData(value: T[]): void`                                    | Set the origin data `<T>`                                   |
| `getData(): T[]`                                               | Get the origin data `<T>`                                   |

### NzTreeFlattener

Convert nested data with child nodes into node data with level information.

**Construction Parameters**

| Name                                                                    | Description                                                    |
| ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| `transformFunction: (node: T, level: number) => F`                      | Receive a nested node `<T>` and return a flattened node `<F>`. |
| `getLevel: (node: F) => number`                                         | Define the method to get the `level` property.                 |
| `isExpandable: (node: F) => boolean`                                    | Methods for defining whether a node is expandable.             |
| `getChildren: (node: T) => Observable<T[]> \| T[] \| undefined \| null` | Define methods to get children nodes from nested node `<T>`.   |

**Methods**

| Name                                     | Description                                                |
| ---------------------------------------- | ---------------------------------------------------------- |
| `flattenNodes(structuredData: T[]): F[]` | Receive nested data `<T>` and return flattened data `<F>`. |

## utils

Common utility classes in the Tree View component. Provides methods for getting the father, brother, and descendant nodes of the current tree node, including two sets of methods for **flat** and **nested** data structures respectively.

**Flat Data**

| Name                                                                                                   | Description                                                                                    |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `getParent: (nodes: F[], node: F, getLevel: (dataNode: F) => number): F \| null`                       | Return parent of the node.                                                                     |
| `getDescendants: (nodes: F[], node: F, getLevel: (dataNode: F) => number): F[]`                        | Return descendants of the node.                                                                |
| `getNextSibling: (nodes: F[], node: F, getLevel: (dataNode: F) => number, _index?: number): F \| null` | Return the next sibling of the node, or the first sibling of the node after `_index` position. |

**Nested Data**

| Name                                                                                               | Description                                                                                  |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `getParentForNestedData: (nodes: T[], node: T, getChildren: (dataNode: T) => T[]): T \| null`      | Return parent of the node.                                                                   |
| `getDescendantsForNestedData: (node: T, getChildren: (dataNode: T) => T[]): T[]`                   | Return descendants of the node.                                                              |
| `getNextSiblingForNestedData: (nodes: T[], node: T, getChildren: (dataNode: T) => T[]): T \| null` | Return the next sibling of the node.                                                         |
| `flattenNestedNodes: (nodes: T[], getChildren: (dataNode: T) => T[]): T[]`                         | Flatten nested data and returns flat arrays, but does not change the nested node properties. |

---

## Examples

### nzChildrenAccessor basic usage

Use `nzChildrenAccessor` for tree view basic usage, including select, disable and expand features.

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

### nzLevelAccessor basic usage

Use `nzLevelAccessor` for tree view basic usage, including select, disable and expand features.

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

### checkbox

Tree with checkboxes.

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

### Directory

Directory tree.

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

### Load data asynchronously

To load data asynchronously when click to expand a treeNode.

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

### editable

Tree with add and delete actions.

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

### Tree with line

Tree with connected line between nodes.

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

### search

Searchable Tree.

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

### Virtual Scroll

Use virtual scroll.

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
