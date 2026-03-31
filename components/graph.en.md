---
category: Components
type: Data Display
title: Graph
cols: 1
experimental: true
description: Render graph.
---

## When To Use

When you want to use graph in Angular.

### Install Dependencies

> The graph depends on d3-drag d3-zoom d3-selection d3-transition d3-shape (may be removed in next major version)

```sh
npm install dagre-compound dagre d3-transition d3-zoom d3-selection d3-shape d3-drag @types/d3
```

### Import Style

```less
@import 'node_modules/ng-zorro-antd/graph/style/entry.less';
```

## API

### nz-graph

| Parameter               | Description                                                                      | Type                                 | Default |
| ----------------------- | -------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| `[nzGraphData]`         | Data source                                                                      | `NzGraphData(data: NzGraphDataDef?)` | ``      |
| `[nzRankDirection]`     | Graph Direction                                                                  | `TB` \| `BT` \| `LR` \| `RL`         | `LR`    |
| `[nzAutoSize]`          | Whether to automatically adjust the height of the node, the default equal height | `boolean`                            | `false` |
| `[nzGraphLayoutConfig]` | Global config of graph                                                           | `NzGraphLayoutConfig`                | ``      |

#### Methods

| Method        | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| `fitCenter()` | Move graph to center(use `nz-graph-zoom` instead if zooming is enabled) |

### [nz-graph-zoom]

| Parameter            | Description                | Type                                         | Default |
| -------------------- | -------------------------- | -------------------------------------------- | ------- |
| `[(nzZoom)]`         | Default zoom scale         | `number`                                     | `1`     |
| `[nzMinZoom]`        | Minimum zoom scale         | `number`                                     | `0.1`   |
| `[nzMaxZoom]`        | Maximum zoom scale         | `number`                                     | `10`    |
| `(nzTransformEvent)` | Event of zooming           | `() => NzZoomTransform`                      | -       |
| `(fitCenter)`        | Move graph to center       | `() => void`                                 | `void`  |
| `(focus)`            | Move target node to center | `(e: SVGGElement, duration: number) => void` | `void`  |

#### NzGraphData

| Method           | Description                   | Type                             |
| ---------------- | ----------------------------- | -------------------------------- |
| `setData`        | set data source               | `(data: NzGraphDataDef) => void` |
| `toggle`         | toggle group node             | `(nodeName: string) => void`     |
| `expand`         | expand group node             | `(nodeName: string) => void`     |
| `expandAll`      | expand all group nodes        | `(nodeName: string) => void`     |
| `collapse`       | collapse group node           | `(nodeName: string) => void`     |
| `isExpand`       | get if expanded of node       | `(nodeName: string) => boolean`  |
| `expansionModel` | model of expanded nodes' info | `SelectionModel<string>`         |

### NzGraphLayoutConfig

| Method                | Description         | Type                                                                                                             |
| --------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `layout`              | graph layout config | `{ nodeSep: number; rankSep: number; edgeSep: number; }`                                                         |
| `subScene`            | group node config   | `{ paddingTop: number; paddingBottom: number; paddingLeft: number; paddingRight: number; labelHeight: number; }` |
| `defaultCompoundNode` | group node size     | `{ width: number; height: number; maxLabelWidth: number; }`                                                      |
| `defaultNode`         | default node size   | `{ width: number; height: number; labelOffset: number; maxLabelWidth: number; }`                                 |

#### NzGraphDataDef

| Parameter  | Description | Type                                                                                                  | Default |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------- | ------- |
| `nodes`    | nodes       | `Array<{ id: number\|string; label?: string; width?: number; height?: number; [key: string]: any; }>` | `[]`    |
| `edges`    | edges       | `Array<{ v: number\|string; w: number\|string; [key: string]: any; }>`                                | `[]`    |
| `compound` | group       | `{ [parent: string]: string[]; }`                                                                     | `null`  |

#### NzGraphNode

| Parameter        | Description                  | Type                                 |
| ---------------- | ---------------------------- | ------------------------------------ |
| `id`             | id                           | `number\|string`                     |
| `label?`         | node content                 | `string`                             |
| `name`           | node name                    | `number\|string`                     |
| `type`           | node type(group: 0, node: 1) | `number`                             |
| `parentNodeName` | parentNode name              | `string`                             |
| `coreBox`        | coreBox                      | `{ width: number; height: number; }` |
| `xOffset`        | x-offset                     | `number`                             |
| `yOffset`        | y-offset                     | `number`                             |
| `width`          | width                        | `number`                             |
| `height`         | height                       | `number`                             |
| `[key: string]`  | user inputs                  | `any`                                |

#### NzGraphEdge

| Parameter | Description  | Type                               |
| --------- | ------------ | ---------------------------------- |
| `id`      | id           | `string`                           |
| `v`       | source node  | `number\|string`                   |
| `w`       | target node  | `number\|string`                   |
| `label?`  | edge content | `string`                           |
| `points`  | points       | `Array<{ x: number; y: number; }>` |

#### NzGraphGroupNode

| Parameter  | Type                                   |
| ---------- | -------------------------------------- |
| `expanded` | `boolean`                              |
| `nodes`    | `Array<NzGraphNode\|NzGraphGroupNode>` |
| `edges`    | `NzGraphEdge[]`                        |

### [nzGraphNode]

Customize the graph node template

```html
<nz-graph [nzGraphData]="data">
  <ng-container *nzGraphNode="let node">
    <span>{{ node.name }} - {{ node.label }}</span>
  </ng-container>
</nz-graph>
```

### [nzGraphGroupNode]

Customize the graph group-node template

```html
<nz-graph [nzGraphData]="data">
  <ng-container *nzGraphGroupNode="let node">
    <span>{{ node.name }} - {{ node.label }}</span>
  </ng-container>
</nz-graph>
```

### [nzGraphEdge]

Customize the graph edge template

```html
<nz-graph [nzGraphData]="data">
  <ng-container *nzGraphEdge="let edge">
    <svg:g>
      <path></path>
    </svg:g>
  </ng-container>
</nz-graph>
```

### Styling

The Component styles only contain the necessary positional properties and simple styles, you can customize the style by overriding the following class.

- `.nz-graph` `nz-graph` The `nz-graph` component namespace
- `.nz-graph-nodes` The class name of container covered all nodes
  - `.nz-graph-node` The class name of `nz-graph-node`
  - `.nz-graph-node-expanded` The class name of expanded node
  - `.nz-graph-group-node` The class name of group node
  - `.nz-graph-base-node` The class name of leaf(OP) node
- `.nz-graph-edges` The class name of container covered edges in the target node
  - `.nz-graph-edge` The class name of edge
    - `path.nz-graph-edge-line` The class name of svg:path element
    - `.nz-graph-edge-text` The class name of svg:text element

## More

- [dagre-compound](https://www.npmjs.com/package/dagre-compound): Dagre-based nested layout calculation library
- [SelectionModel](https://github.com/angular/components/blob/master/src/cdk/collections/selection-model.ts)

---

## Examples

### Custom graph node

Custom node style of graph.

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
