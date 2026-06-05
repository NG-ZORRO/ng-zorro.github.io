---
category: Components
type: Data Entry
title: TreeSelect
cover: 'https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg'
description: Tree selection control.
---

## When To Use

`TreeSelect` is similar to `Select`, but the values are provided in a tree like structure.
Any data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on.

## API

### nz-tree-select

| Property                       | Description                                                                                                                                           | Type                                                       | Default                            | Global Config | Version |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------- | ------------- | ------- |
| `[nzId]`                       | input id attribute inside the component                                                                                                               | `string`                                                   | -                                  |
| `[nzOpen]`                     | dropdown expand state, double binding                                                                                                                 | `boolean`                                                  | `false`                            |
| `[nzAllowClear]`               | Whether allow clear                                                                                                                                   | `boolean`                                                  | `false`                            |
| `[nzPlaceHolder]`              | Placeholder of the select input                                                                                                                       | `string`                                                   | -                                  |
| `[nzPlacement]`                | The position where the selection box pops up                                                                                                          | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | `'bottomLeft'`                     |
| `[nzDisabled]`                 | Disabled or not                                                                                                                                       | `boolean`                                                  | `false`                            |
| `[nzShowIcon]`                 | Shows the icon before a TreeNode's title. There is no default style                                                                                   | `boolean`                                                  | `false`                            |
| `[nzShowSearch]`               | Whether to display a search input in the dropdown menu(valid only in the single mode)                                                                 | `boolean`                                                  | `false`                            | ✅            |
| `[nzNotFoundContent]`          | Specify content to show when no result matches.                                                                                                       | `'string' \| 'TemplateRef<void>'`                          | -                                  |
| `[nzDropdownMatchSelectWidth]` | Determine whether the dropdown menu and the select input are the same width                                                                           | `boolean`                                                  | `true`                             | ✅            |
| `[nzDropdownStyle]`            | To set the style of the dropdown menu                                                                                                                 | `object`                                                   | -                                  |
| `[nzDropdownClassName]`        | classname of dropdown menu                                                                                                                            | `string`                                                   | -                                  |
| `[nzMultiple]`                 | Support multiple or not, will be `true` when enable `nzCheckable`.                                                                                    | `boolean`                                                  | `false`                            |
| `[nzHideUnMatched]`            | Hide unmatched nodes while searching                                                                                                                  | `boolean`                                                  | `false`                            | ✅            |
| `[nzSize]`                     | To set the size of the select input                                                                                                                   | `'large' \| 'small' \| 'default'`                          | `'default'`                        | ✅            |
| `[nzStatus]`                   | Set validation status                                                                                                                                 | `'error' \| 'warning'`                                     | -                                  |               |
| `[nzCheckable]`                | Whether to show checkbox on the treeNodes                                                                                                             | `boolean`                                                  | `false`                            |
| `[nzCheckStrictly]`            | Check treeNode precisely; parent treeNode and children treeNodes are not associated                                                                   | `boolean`                                                  | `false`                            |
| `[nzShowExpand]`               | Show a Expand Icon before the treeNodes                                                                                                               | `boolean`                                                  | `true`                             |               |
| `[nzShowLine]`                 | Shows a connecting line                                                                                                                               | `boolean`                                                  | `false`                            |               |
| `[nzPrefix]`                   | The custom prefix                                                                                                                                     | `TemplateRef<any> \| string`                               | -                                  |               |
| `[nzSuffixIcon]`               | The custom suffix icon                                                                                                                                | `TemplateRef<any> \| string`                               | -                                  |               |
| `[nzAsyncData]`                | Load data asynchronously (should be used with NzTreeNode.addChildren(...))                                                                            | `boolean`                                                  | `false`                            |
| `[nzNodes]`                    | Data of the treeNodes                                                                                                                                 | `NzTreeNodeOptions[]`                                      | `[]`                               |
| `[nzDefaultExpandAll]`         | Whether to expand all treeNodes by default                                                                                                            | `boolean`                                                  | `false`                            |
| `[nzExpandedKeys]`             | Default expanded treeNodes                                                                                                                            | `string[]`                                                 | -                                  |
| `[nzDisplayWith]`              | How to display the selected node value in the trigger                                                                                                 | `(node: NzTreeNode) => string`                             | `(node: NzTreeNode) => node.title` |
| `[nzMaxTagCount]`              | Max tag count to show                                                                                                                                 | number                                                     | -                                  |
| `[nzMaxTagPlaceholder]`        | Placeholder for not showing tags                                                                                                                      | TemplateRef<{ $implicit: NzTreeNode[] }>                   | -                                  |
| `[nzTreeTemplate]`             | Custom Nodes                                                                                                                                          | `TemplateRef<{ $implicit: NzTreeNode }>`                   | -                                  |
| `[nzVariant]`                  | Variants of TreeSelect                                                                                                                                | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`   | `'outlined'`                       | ✅            | 20.0.0  |
| `[nzVirtualHeight]`            | The height of virtual scroll                                                                                                                          | `string`                                                   | `-`                                |
| `[nzVirtualItemSize]`          | The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api)                                              | `number`                                                   | `28`                               |
| `[nzVirtualMaxBufferPx]`       | The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) | `number`                                                   | `500`                              |
| `[nzVirtualMinBufferPx]`       | The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api)        | `number`                                                   | `28`                               |
| `[nzBackdrop]`                 | whether or not the overlay should attach a backdrop                                                                                                   | `boolean`                                                  | `false`                            |
| `(nzExpandChange)`             | Callback function for when a treeNode is expanded or collapsed                                                                                        | `EventEmitter<NzFormatEmitEvent>`                          | -                                  |
| `(nzOpenChange)`               | dropdown expand change callback                                                                                                                       | `EventEmitter<boolean>`                                    | `false`                            |

#### Methods

| Property                 | Description                                       | Type           |
| ------------------------ | ------------------------------------------------- | -------------- |
| `getTreeNodes`           | get all nodes(NzTreeNode)                         | `NzTreeNode[]` |
| `getTreeNodeByKey`       | get NzTreeNode with key                           | `NzTreeNode`   |
| `getCheckedNodeList`     | get checked nodes(merged)                         | `NzTreeNode[]` |
| `getSelectedNodeList`    | get selected nodes                                | `NzTreeNode[]` |
| `getHalfCheckedNodeList` | get half checked nodes                            | `NzTreeNode[]` |
| `getExpandedNodeList`    | get expanded nodes                                | `NzTreeNode[]` |
| `getMatchedNodeList`     | get matched nodes(if `nzSearchValue` is not null) | `NzTreeNode[]` |

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Load data asynchronously

To load data asynchronously when click to expand a treeNode, loading state keeps until excute addChildren().

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-async',
  imports: [FormsModule, NzTreeSelectModule],
  template: `
    <nz-tree-select
      style="width: 250px"
      nzPlaceHolder="Please select"
      [nzExpandedKeys]="expandKeys"
      [(ngModel)]="value"
      [nzDropdownMatchSelectWidth]="true"
      [nzDropdownStyle]="{ 'max-height': '300px' }"
      [nzNodes]="nodes"
      [nzAsyncData]="true"
      (nzExpandChange)="onExpandChange($event)"
    />
  `
})
export class NzDemoTreeSelectAsyncComponent {
  expandKeys = ['0-0'];
  value?: string;
  readonly nodes = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-1',
          key: '0-0-1'
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
          key: '0-0-2'
        }
      ]
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1'
    }
  ];

  onExpandChange(e: NzFormatEmitEvent): void {
    const node = e.node;
    if (node && node.getChildren().length === 0 && node.isExpanded) {
      this.loadNode().then(data => {
        node.addChildren(data);
      });
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

### Basic

The most basic usage.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-basic',
  imports: [FormsModule, NzTreeSelectModule],
  template: `
    <nz-tree-select
      style="width: 250px"
      [nzExpandedKeys]="expandKeys"
      [nzNodes]="nodes"
      nzShowSearch
      nzPlaceHolder="Please select"
      [(ngModel)]="value"
      (ngModelChange)="onChange($event)"
    />
  `
})
export class NzDemoTreeSelectBasicComponent implements OnInit {
  expandKeys = ['100', '1001'];
  value?: string;
  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];

  onChange($event: string): void {
    console.log($event);
  }

  ngOnInit(): void {
    // mock async
    setTimeout(() => {
      this.value = '1001';
    }, 1000);
  }
}
```

### Checkable

Multiple and checkable.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-checkable',
  imports: [FormsModule, NzTreeSelectModule],
  template: `
    <nz-tree-select
      style="width: 250px"
      [(ngModel)]="value"
      [nzNodes]="nodes"
      (ngModelChange)="onChange($event)"
      nzShowSearch
      nzCheckable
      nzPlaceHolder="Please select"
    />
  `
})
export class NzDemoTreeSelectCheckableComponent {
  value: string[] = ['0-0-0'];
  readonly nodes = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
          isLeaf: true
        }
      ]
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          isLeaf: true
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
          isLeaf: true
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
          isLeaf: true
        }
      ]
    }
  ];

  onChange($event: string[]): void {
    console.log($event);
  }
}
```

### Customize Icon

You can customize icons for different nodes.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-customized-icon',
  imports: [FormsModule, NzIconModule, NzTreeSelectModule],
  template: `
    <nz-tree-select
      style="width: 250px"
      [(ngModel)]="value"
      [nzNodes]="nodes"
      nzPlaceHolder="Please select"
      nzShowIcon
    />
    <br />
    <nz-tree-select
      style="width: 250px; margin-top: 20px;"
      [(ngModel)]="value"
      [nzNodes]="nodes"
      nzPlaceHolder="Please select"
    >
      <ng-template #nzTreeTemplate let-node>
        <span class="ant-tree-node-content-wrapper" [class.ant-tree-node-selected]="node.isSelected">
          <span>
            <nz-icon [nzType]="node.isExpanded ? 'folder-open' : 'folder'" />
            {{ node.title }}
          </span>
        </span>
      </ng-template>
    </nz-tree-select>
  `
})
export class NzDemoTreeSelectCustomizedIconComponent {
  value?: string;
  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      icon: 'smile',
      children: [
        { title: 'leaf 1-0-0', key: '10010', icon: 'meh', isLeaf: true },
        { title: 'leaf 1-0-1', key: '10011', icon: 'frown', isLeaf: true }
      ]
    }
  ];
}
```

### Multiple Selection

Multiple selection usage, max 3 option will display at the same time by `nzMaxTagCount`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-multiple',
  imports: [FormsModule, NzTreeSelectModule],
  template: `
    <nz-tree-select
      style="width: 250px"
      nzPlaceHolder="Please select"
      [(ngModel)]="value"
      [nzMaxTagCount]="3"
      [nzMaxTagPlaceholder]="omittedPlaceHolder"
      [nzNodes]="nodes"
      nzDefaultExpandAll
      nzMultiple
      (ngModelChange)="onChange($event)"
    />
    <ng-template #omittedPlaceHolder let-omittedValues>and {{ omittedValues.length }} more...</ng-template>
  `
})
export class NzDemoTreeSelectMultipleComponent {
  value: string[] = [];
  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];

  onChange($event: string[]): void {
    console.log($event);
  }
}
```

### Custom empty state

Use `nzNotFoundContent` to customize empty data style

```typescript
import { Component } from '@angular/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-no-data',
  imports: [NzSpinModule, NzTreeSelectModule],
  template: `
    <nz-tree-select style="width: 250px" [nzNodes]="[]" nzPlaceHolder="Please select" [nzNotFoundContent]="noData" />
    <ng-template #noData>
      <div style="height: 200px; display: flex; justify-content: center; align-items: center">
        <nz-spin nzSimple />
      </div>
    </ng-template>
  `
})
export class NzDemoTreeSelectNoDataComponent {}
```

### Placement

You can manually specify the position of the popup via `nzPlacement`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPlacementType, NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-placement',
  imports: [FormsModule, NzRadioModule, NzTreeSelectModule],
  template: `
    <nz-radio-group [(ngModel)]="placement">
      @for (item of list; track item) {
        <label nz-radio-button [nzValue]="item">{{ item }}</label>
      }
    </nz-radio-group>
    <br />
    <br />
    <nz-tree-select
      nzPlaceHolder="Please select"
      [nzPlacement]="placement"
      [(ngModel)]="value"
      [nzNodes]="nodes"
      [nzDropdownStyle]="{ width: '300px' }"
      nzDefaultExpandAll
      [nzDropdownMatchSelectWidth]="false"
      (ngModelChange)="onChange($event)"
    />
  `
})
export class NzDemoTreeSelectPlacementComponent {
  list: NzPlacementType[] = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
  placement: NzPlacementType = 'topLeft';
  value: string[] = [];
  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];

  onChange($event: string[]): void {
    console.log($event);
  }
}
```

### Prefix and Suffix

Custom `nzPrefix` and `nzSuffixIcon`.

```typescript
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-prefix-and-suffix',
  imports: [FormsModule, NzTreeSelectModule],
  template: `
    <nz-tree-select [nzNodes]="nodes" nzSuffixIcon="smile" [(ngModel)]="value" nzDefaultExpandAll />
    <br />
    <br />
    <nz-tree-select [nzNodes]="nodes" nzPrefix="Prefix" [(ngModel)]="value" nzDefaultExpandAll />
  `,
  styles: `
    nz-tree-select {
      width: 100%;
    }
  `
})
export class NzDemoTreeSelectPrefixAndSuffixComponent {
  readonly value = model();
  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];
}
```

### Status

Add status to TreeSelect with `nzStatus`, which could be `error` or `warning`.

```typescript
import { Component } from '@angular/core';

import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-status',
  imports: [NzTreeSelectModule],
  template: `
    <nz-tree-select [nzNodes]="[]" nzStatus="error" nzPlaceHolder="Error" style="width:100%;" />
    <br />
    <br />
    <nz-tree-select
      nzMultiple
      [nzNodes]="[]"
      nzShowSearch
      nzStatus="warning"
      nzPlaceHolder="Warning multiple"
      style="width:100%;"
    />
  `
})
export class NzDemoTreeSelectStatusComponent {}
```

### Variants

Variants of TreeSelect, there are four variants: `outlined`, `filled`, `borderless` and `underlined`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFlexDirective } from 'ng-zorro-antd/flex';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-tree-select-variant',
  imports: [FormsModule, NzTreeSelectModule, NzFlexDirective, NzSpaceModule],
  template: `
    <div nz-flex nzGap="large">
      <nz-space nzDirection="vertical" style="flex: 1">
        <nz-tree-select
          *nzSpaceItem
          style="width: 100%"
          [nzNodes]="nodes"
          nzVariant="outlined"
          [ngModel]="defaultValue"
          nzDefaultExpandAll
        />
        <nz-tree-select
          *nzSpaceItem
          style="width: 100%"
          [nzNodes]="nodes"
          nzVariant="filled"
          [ngModel]="defaultValue"
          nzDefaultExpandAll
        />
        <nz-tree-select
          *nzSpaceItem
          style="width: 100%"
          [nzNodes]="nodes"
          nzVariant="borderless"
          [ngModel]="defaultValue"
          nzDefaultExpandAll
        />
        <nz-tree-select
          *nzSpaceItem
          style="width: 100%"
          [nzNodes]="nodes"
          nzVariant="underlined"
          [ngModel]="defaultValue"
          nzDefaultExpandAll
        />
      </nz-space>
      <nz-space nzDirection="vertical" style="flex: 1">
        <nz-tree-select
          *nzSpaceItem
          style="width: 100%"
          nzVariant="outlined"
          [nzNodes]="nodes"
          [nzMaxTagCount]="3"
          nzMultiple
          [ngModel]="defaultValue"
          nzDefaultExpandAll
        />
        <nz-tree-select
          *nzSpaceItem
          style="width: 100%"
          nzVariant="filled"
          [nzNodes]="nodes"
          [nzMaxTagCount]="3"
          nzMultiple
          [ngModel]="defaultValue"
          nzDefaultExpandAll
        />
        <nz-tree-select
          *nzSpaceItem
          style="width: 100%"
          nzVariant="borderless"
          [nzNodes]="nodes"
          [nzMaxTagCount]="3"
          nzMultiple
          [ngModel]="defaultValue"
          nzDefaultExpandAll
        />
        <nz-tree-select
          *nzSpaceItem
          style="width: 100%"
          nzVariant="underlined"
          [nzNodes]="nodes"
          [nzMaxTagCount]="3"
          nzMultiple
          [ngModel]="defaultValue"
          nzDefaultExpandAll
        />
      </nz-space>
    </div>
  `
})
export class NzDemoTreeSelectVariantComponent {
  readonly defaultValue = '100';
  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];
}
```

### Virtual Scroll

Set `nzVirtualHeight` to enable virtual scroll.

```typescript
import { Component } from '@angular/core';

import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

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
  selector: 'nz-demo-tree-select-virtual-scroll',
  imports: [NzTreeSelectModule],
  template: `
    <nz-tree-select
      style="width: 250px"
      [nzNodes]="nodes"
      nzShowSearch
      nzPlaceHolder="Please select"
      nzVirtualHeight="300px"
      nzHideUnMatched="true"
    />
  `
})
export class NzDemoTreeSelectVirtualScrollComponent {
  nodes: NzTreeNodeOptions[] = dig();
}
```
