---
category: Components
subtitle: 流程图
type: 数据展示
title: Graph
cols: 1
experimental: true
description: 渲染流程图。
---

## 何时使用

需要在网页上渲染 Graph 图时使用。

### 安装依赖

> 目前组件依赖 d3-drag d3-zoom d3-selection d3-transition d3-shape 用于绘制相关属性（可能会在之后的版本中逐步替换）

```sh
npm install dagre-compound dagre d3-transition d3-zoom d3-selection d3-shape d3-drag @types/d3
```

### 引入样式

```less
@import 'node_modules/ng-zorro-antd/graph/style/entry.less';
```

## API

### nz-graph

| 参数                    | 说明                                 | 类型                                 | 默认值  |
| ----------------------- | ------------------------------------ | ------------------------------------ | ------- |
| `[nzGraphData]`         | 数据源                               | `NzGraphData(data: NzGraphDataDef?)` | ``      |
| `[nzRankDirection]`     | 图方向                               | `TB` \| `BT` \| `LR` \| `RL`         | `LR`    |
| `[nzAutoSize]`          | 是否根据节点内容自适应高度(默认等高) | `boolean`                            | `false` |
| `[nzGraphLayoutConfig]` | 全局配置                             | `NzGraphLayoutConfig`                | ``      |

#### 组件方法

| 名称          | 描述                                                       |
| ------------- | ---------------------------------------------------------- |
| `fitCenter()` | 居中图并自适应缩放（如使用缩放功能请使用 `nz-graph-zoom`） |

### [nz-graph-zoom]

| 参数                 | 说明               | 类型                                         | 默认值 |
| -------------------- | ------------------ | -------------------------------------------- | ------ |
| `[(nzZoom)]`         | 缩放比例           | `number`                                     | `1`    |
| `[nzMinZoom]`        | 最小缩放           | `number`                                     | `0.1`  |
| `[nzMaxZoom]`        | 最大缩放           | `number`                                     | `10`   |
| `(nzTransformEvent)` | 缩放事件           | `() => NzZoomTransform`                      | -      |
| `(fitCenter)`        | 居中图并自适应缩放 | `() => void`                                 | `void` |
| `(focus)`            | 居中单个节点       | `(e: SVGGElement, duration: number) => void` | `void` |

#### NzGraphData

| 属性/方法        | 说明                    | 类型                             |
| ---------------- | ----------------------- | -------------------------------- |
| `setData`        | 设置数据源              | `(data: NzGraphDataDef) => void` |
| `toggle`         | 收起/展开 group 节点    | `(nodeName: string) => void`     |
| `expand`         | 展开 group 节点         | `(nodeName: string) => void`     |
| `expandAll`      | 展开全部 group 节点     | `(nodeName: string) => void`     |
| `collapse`       | 收起全部 group 节点     | `(nodeName: string) => void`     |
| `isExpand`       | 获取 group 节点展开状态 | `(nodeName: string) => boolean`  |
| `expansionModel` | 展开节点存储对象        | `SelectionModel<string>`         |

### NzGraphLayoutConfig

| 属性                  | 说明            | 类型                                                                                                             |
| --------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| `layout`              | 布局参数        | `{ nodeSep: number; rankSep: number; edgeSep: number; }`                                                         |
| `subScene`            | group 节点      | `{ paddingTop: number; paddingBottom: number; paddingLeft: number; paddingRight: number; labelHeight: number; }` |
| `defaultCompoundNode` | group 节点 size | `{ width: number; height: number; maxLabelWidth: number; }`                                                      |
| `defaultNode`         | 默认节点 size   | `{ width: number; height: number; labelOffset: number; maxLabelWidth: number; }`                                 |

#### NzGraphDataDef

| 属性       | 说明 | 类型                                                                                                  | 默认值 |
| ---------- | ---- | ----------------------------------------------------------------------------------------------------- | ------ |
| `nodes`    | 节点 | `Array<{ id: number\|string; label?: string; width?: number; height?: number; [key: string]: any; }>` | `[]`   |
| `edges`    | 线   | `Array<{ v: number\|string; w: number\|string; [key: string]: any; }>`                                | `[]`   |
| `compound` | 分组 | `{ [parent: string]: string[]; }`                                                                     | `null` |

#### NzGraphNode

| 属性             | 说明                     | 类型                                 |
| ---------------- | ------------------------ | ------------------------------------ |
| `id`             | id                       | `number\|string`                     |
| `label?`         | 节点内容                 | `string`                             |
| `name`           | 节点名称                 | `number\|string`                     |
| `type`           | 节点类型(组: 0, 节点: 1) | `number`                             |
| `parentNodeName` | 父节点名称               | `string`                             |
| `coreBox`        | 布局高宽                 | `{ width: number; height: number; }` |
| `xOffset`        | x 偏移                   | `number`                             |
| `yOffset`        | y 偏移                   | `number`                             |
| `width`          | 宽度                     | `number`                             |
| `height`         | 高度                     | `number`                             |
| `[key: string]`  | 用户输入                 | `any`                                |

#### NzGraphEdge

| 属性     | 说明     | 类型                               |
| -------- | -------- | ---------------------------------- |
| `id`     | id       | `string`                           |
| `v`      | 起始节点 | `number\|string`                   |
| `w`      | 目标节点 | `number\|string`                   |
| `label?` | 线内容   | `string`                           |
| `points` | points   | `Array<{ x: number; y: number; }>` |

#### NzGraphGroupNode

| 属性       | 类型                                   |
| ---------- | -------------------------------------- |
| `expanded` | `boolean`                              |
| `nodes`    | `Array<NzGraphNode\|NzGraphGroupNode>` |
| `edges`    | `NzGraphEdge[]`                        |

### [nzGraphNode]

自定义叶子节点渲染模板

```html
<nz-graph [nzGraphData]="data">
  <ng-container *nzGraphNode="let node">
    <span>{{ node.name }} - {{ node.label }}</span>
  </ng-container>
</nz-graph>
```

### [nzGraphGroupNode]

自定义组节点渲染模板

```html
<nz-graph [nzGraphData]="data">
  <ng-container *nzGraphGroupNode="let node">
    <span>{{ node.name }} - {{ node.label }}</span>
  </ng-container>
</nz-graph>
```

### [nzGraphEdge]

自定义边渲染模板

```html
<nz-graph [nzGraphData]="data">
  <ng-container *nzGraphEdge="let edge">
    <svg:g>
      <path></path>
    </svg:g>
  </ng-container>
</nz-graph>
```

### 样式

组件样式包含了必要的属性和简单的样式，你可以通过覆写下列类名自定义样式。

- `.nz-graph` `nz-graph` 组件命名空间
- `.nz-graph-nodes` 节点
  - `.nz-graph-node` 单个节点
  - `.nz-graph-node-expanded` 展开节点
  - `.nz-graph-group-node` 组节点
  - `.nz-graph-base-node` 叶子节点
- `.nz-graph-edges` 连接线
  - `.nz-graph-edge` 单条线
    - `path.nz-graph-edge-line` 线 path 元素
    - `.nz-graph-edge-text` 线文本元素

## 说明

- [dagre-compound](https://www.npmjs.com/package/dagre-compound): 基于 Dagre 的 嵌套布局计算库
- [SelectionModel](https://github.com/angular/components/blob/master/src/cdk/collections/selection-model.ts)

---

## 代码示例

### 自定义

自定义 node 样式。

```typescript
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  NzGraphComponent,
  NzGraphData,
  NzGraphDataDef,
  NzGraphModule,
  NzGraphZoomDirective,
  NzRankDirection
} from 'ng-zorro-antd/graph';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-graph-customized',
  imports: [FormsModule, NzButtonModule, NzGraphModule, NzRadioModule],
  template: `
    <button nz-button nzType="default" (click)="expandAll()">ExpandAll</button>
    <button nz-button nzType="default" (click)="collapseAll()">CollapseAll</button>
    <button nz-button nzType="primary" (click)="fit()">Fit</button>
    <nz-radio-group [(ngModel)]="rankDirection">
      <label nz-radio-button nzValue="LR">LR</label>
      <label nz-radio-button nzValue="RL">RL</label>
      <label nz-radio-button nzValue="TB">TB</label>
      <label nz-radio-button nzValue="BT">BT</label>
    </nz-radio-group>
    <nz-graph
      nz-graph-zoom
      [nzGraphData]="graphData"
      [nzAutoSize]="true"
      [nzRankDirection]="rankDirection"
      (nzGraphInitialized)="graphInitialized($event)"
    >
      <ng-container *nzGraphNode="let node">
        <foreignObject x="0" y="0" [attr.width]="node.width" [attr.height]="node.height">
          <xhtml:div class="graph-node leaf-node" (click)="focusNode(node.id || node.name)">
            <div class="title">
              {{ node.name }}
            </div>
          </xhtml:div>
        </foreignObject>
      </ng-container>

      <ng-container *nzGraphGroupNode="let node">
        <foreignObject x="0" y="0" [attr.width]="node.width" [attr.height]="node.height">
          <xhtml:div class="graph-node group-node" (click)="focusNode(node.id || node.name)">
            <div class="title">
              {{ node.name }}
            </div>
          </xhtml:div>
        </foreignObject>
      </ng-container>
    </nz-graph>
  `,
  styles: `
    nz-radio-group {
      float: right;
    }

    button {
      margin-right: 12px;
    }

    nz-graph {
      height: 400px;
    }

    .graph-node {
      border: 1px solid #8cc8ff;
      cursor: pointer;
      font-size: 12px;
      height: 100%;
      line-height: 1.2;
      border-radius: 0;
      text-align: center;
      word-break: break-all;
      display: block;
    }

    .group-node {
      border-width: 4px;
    }

    .leaf-node {
      color: #1a90ff;
      background: rgba(26, 144, 255, 0.15);
      min-height: 30px;
      height: fit-content;
    }

    .title {
      padding: 4px;
      word-break: keep-all;
    }
  `
})
export class NzDemoGraphCustomizedComponent {
  @ViewChild(NzGraphComponent, { static: true }) nzGraphComponent!: NzGraphComponent;
  @ViewChild(NzGraphZoomDirective, { static: true }) zoomController!: NzGraphZoomDirective;
  zoom = 0.5;
  testDef: NzGraphDataDef = {
    nodes: [
      {
        id: '0',
        label: '0'
      },
      {
        id: '1',
        label: '1'
      },
      {
        id: '2',
        label: '2'
      },
      {
        id: '3',
        label: '3'
      },
      {
        id: '4',
        label: '4'
      },
      {
        id: '5',
        label: '5'
      },
      {
        id: '6',
        label: '6'
      },
      {
        id: '7',
        label: '7'
      },
      {
        id: '8',
        label: '8'
      },
      {
        id: '9',
        label: '9'
      },
      {
        id: '10',
        label: '10'
      },
      {
        id: '11',
        label: '11'
      },
      {
        id: '12',
        label: '12'
      },
      {
        id: '13',
        label: '13'
      },
      {
        id: '14',
        label: '14'
      },
      {
        id: '15',
        label: '15'
      }
    ],
    edges: [
      {
        v: '0',
        w: '1'
      },
      {
        v: '0',
        w: '2'
      },
      {
        v: '0',
        w: '3'
      },
      {
        v: '0',
        w: '4'
      },
      {
        v: '0',
        w: '5'
      },
      {
        v: '0',
        w: '7'
      },
      {
        v: '0',
        w: '8'
      },
      {
        v: '0',
        w: '9'
      },
      {
        v: '0',
        w: '10'
      },
      {
        v: '0',
        w: '11'
      },
      {
        v: '0',
        w: '13'
      },
      {
        v: '0',
        w: '14'
      },
      {
        v: '0',
        w: '15'
      },
      {
        v: '2',
        w: '3'
      },
      {
        v: '4',
        w: '5'
      },
      {
        v: '4',
        w: '6'
      },
      {
        v: '5',
        w: '6'
      },
      {
        v: '7',
        w: '13'
      },
      {
        v: '8',
        w: '14'
      },
      {
        v: '9',
        w: '10'
      },
      {
        v: '10',
        w: '14'
      },
      {
        v: '10',
        w: '12'
      },
      {
        v: '11',
        w: '14'
      },
      {
        v: '12',
        w: '13'
      }
    ],
    compound: {
      G0: ['4', '5', '15']
    }
  };
  rankDirection: NzRankDirection = 'TB';
  graphData = new NzGraphData(this.testDef);

  expand(name: string): void {
    this.graphData.expand(name);
  }

  collapse(name: string): void {
    this.graphData.collapse(name);
  }

  expandAll(): void {
    this.graphData.expandAll();
  }

  collapseAll(): void {
    this.graphData.collapseAll();
  }

  fit(): void {
    this.zoomController?.fitCenter();
  }

  focusNode(e: string | number): void {
    this.zoomController?.focus(e);
  }

  graphInitialized(_ele: NzGraphComponent): void {
    // Only nz-graph-zoom enabled, you should run `fitCenter` manually
    this.zoomController?.fitCenter();
  }
}
```
