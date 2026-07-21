---
category: Components
subtitle: 树选择
type: 数据录入
title: TreeSelect
cover: 'https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg'
description: 树型选择控件。
---

## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## API

### nz-tree-select

| 参数                           | 说明                                                                                         | 类型                                                       | 默认值                             | 全局配置 | 版本   |
| ------------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------- | -------- | ------ |
| `[nzId]`                       | 组件内部 input 的 id 值                                                                      | `string`                                                   | -                                  |
| `[nzOpen]`                     | 下拉菜单是否打开，可双向绑定                                                                 | `boolean`                                                  | `false`                            |          |
| `[nzAllowClear]`               | 显示清除按钮                                                                                 | `boolean`                                                  | `false`                            |          |
| `[nzPlaceHolder]`              | 选择框默认文字                                                                               | `string`                                                   | -                                  |          |
| `[nzPlacement]`                | 选择框弹出的位置                                                                             | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | `'bottomLeft'`                     |          |
| `[nzDisabled]`                 | 禁用选择器                                                                                   | `boolean`                                                  | `false`                            |
| `[nzShowIcon]`                 | 是否展示 TreeNode title 前的图标，没有默认样式                                               | `boolean`                                                  | `false`                            | ✅       |
| `[nzShowSearch]`               | 显示搜索框                                                                                   | `boolean`                                                  | `false`                            |
| `[nzNotFoundContent]`          | 当下拉列表为空时显示的内容                                                                   | `'string' \| 'TemplateRef<void>'`                          | -                                  |
| `[nzDropdownMatchSelectWidth]` | 下拉菜单和选择器同宽                                                                         | `boolean`                                                  | `true`                             | ✅       |
| `[nzDropdownStyle]`            | 下拉菜单的样式                                                                               | `{ [key: string]: string; }`                               | -                                  |
| `[nzDropdownClassName]`        | 下拉菜单的 className 属性                                                                    | `string`                                                   | -                                  |
| `[nzMultiple]`                 | 支持多选（当设置 nzCheckable 时自动变为 true）                                               | `boolean`                                                  | `false`                            |
| `[nzHideUnMatched]`            | 搜索隐藏未匹配的节点                                                                         | `boolean`                                                  | `false`                            | ✅       |
| `[nzSize]`                     | 选择框大小                                                                                   | `'large' \| 'small' \| 'default'`                          | `'default'`                        | ✅       |
| `[nzStatus]`                   | 设置校验状态                                                                                 | `'error' \| 'warning'`                                     | -                                  |          |
| `[nzCheckable]`                | 节点前添加 Checkbox 复选框                                                                   | `boolean`                                                  | `false`                            |
| `[nzCheckStrictly]`            | checkable 状态下节点选择完全受控（父子节点选中状态不再关联）                                 | `boolean`                                                  | `false`                            |
| `[nzShowExpand]`               | 节点前添加展开图标                                                                           | `boolean`                                                  | `true`                             |          |
| `[nzShowLine]`                 | 是否展示连接线                                                                               | `boolean`                                                  | `false`                            |          |
| `[nzPrefix]`                   | 自定义的选择框前缀                                                                           | `TemplateRef<any> \| string`                               | -                                  |          |
| `[nzSuffixIcon]`               | 自定义的选择框后缀图标                                                                       | `TemplateRef<any> \| string`                               | -                                  |          |
| `[nzAsyncData]`                | 是否异步加载(显示加载状态)                                                                   | `boolean`                                                  | `false`                            |
| `[nzNodes]`                    | treeNodes 数据                                                                               | `NzTreeNodeOptions[]`                                      | `[]`                               |
| `[nzDefaultExpandAll]`         | 默认展开所有树节点                                                                           | `boolean`                                                  | `false`                            |
| `[nzExpandedKeys]`             | 默认展开指定的树节点                                                                         | `string[]`                                                 | -                                  |
| `[nzDisplayWith]`              | 如何在输入框显示所选的节点值的方法                                                           | `(node: NzTreeNode) => string`                             | `(node: NzTreeNode) => node.title` |
| `[nzMaxTagCount]`              | 最多显示多少个 tag                                                                           | `number`                                                   | -                                  |
| `[nzMaxTagPlaceholder]`        | 隐藏 tag 时显示的内容                                                                        | `TemplateRef<{ $implicit: NzTreeNode[] }>`                 | -                                  |
| `[nzTreeTemplate]`             | 自定义节点                                                                                   | `TemplateRef<{ $implicit: NzTreeNode }>`                   | -                                  |
| `[nzVariant]`                  | 形态变体                                                                                     | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`   | `'outlined'`                       | ✅       | 20.0.0 |
| `[nzVirtualHeight]`            | 虚拟滚动的总高度                                                                             | `string`                                                   | `-`                                |
| `[nzVirtualItemSize]`          | 虚拟滚动时每列的高度，与 [cdk itemSize](https://material.angular.io/cdk/scrolling/api) 相同  | `number`                                                   | `28`                               |
| `[nzVirtualMaxBufferPx]`       | 缓冲区最大像素高度，与 [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) 相同 | `number`                                                   | `500`                              |
| `[nzVirtualMinBufferPx]`       | 缓冲区最小像素高度，与 [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) 相同 | `number`                                                   | `28`                               |
| `[nzBackdrop]`                 | 浮层是否应带有背景板                                                                         | `boolean`                                                  | `false`                            |
| `(nzExpandChange)`             | 点击展开树节点图标调用                                                                       | `EventEmitter<NzFormatEmitEvent>`                          | -                                  |
| `(nzOpenChange)`               | 下拉菜单打开状态变化回调                                                                     | `EventEmitter<boolean>`                                    | -                                  |

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

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 异步数据加载

点击展开节点，动态加载数据，直到执行 addChildren() 方法取消加载状态。

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

### 基本

最简单的用法。

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

### 可勾选

使用勾选框实现多选功能。

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

### 自定义图标

可以针对不同节点采用样式覆盖的方式定制图标。

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

### 多选

多选的树选择，例子中通过 `nzMaxTagCount` 限制最多显示3个选项。

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

### 自定义空状态

使用 `nzNotFoundContent` 自定义空数据状态

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

### 位置

可以通过 `nzPlacement` 手动指定弹出的位置。

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

### 前后缀

自定义前缀 `nzPrefix` 和后缀图标 `nzSuffixIcon`。

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

### 自定义状态

使用 `nzStatus` 为 `TreeSelect` 添加状态，可选 `error` 或者 `warning`。

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

### 形态变体

TreeSelect 形态变体，可选 `outlined`、`filled`、`borderless`、`underlined` 四种形态。

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

### 虚拟滚动

设定 `nzVirtualHeight` 开启虚拟滚动。

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
