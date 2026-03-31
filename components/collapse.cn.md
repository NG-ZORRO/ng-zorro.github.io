---
category: Components
type: 数据展示
title: Collapse
subtitle: 折叠面板
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg'
description: 可以折叠/展开的内容区域。
---

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## API

### nz-collapse

| 参数                     | 说明                   | 类型                 | 默认值     | 全局配置 | 版本   |
| ------------------------ | ---------------------- | -------------------- | ---------- | -------- | ------ |
| `[nzAccordion]`          | 是否每次只打开一个 tab | `boolean`            | `false`    | ✅       |
| `[nzBordered]`           | 是否有边框             | `boolean`            | `true`     | ✅       |
| `[nzGhost]`              | 使折叠面板透明且无边框 | `boolean`            | `false`    | ✅       |
| `[nzExpandIconPosition]` | 设置图标位置           | `'start' \| 'end'`   | `'start'`  | -        |
| `[nzSize]`               | 设置折叠面板大小       | `'small' \| 'large'` | `'middle'` | -        | 20.2.0 |

### nz-collapse-panel

| 参数               | 说明                                       | 类型                               | 默认值  | 全局配置 | 版本   |
| ------------------ | ------------------------------------------ | ---------------------------------- | ------- | -------- | ------ |
| `[nzDisabled]`     | 禁用后的面板展开与否将无法通过用户交互改变 | `boolean`                          | `false` | -        |
| `[nzHeader]`       | 面板头内容                                 | `string \| TemplateRef<void>`      | -       | -        |
| `[nzExpandedIcon]` | 自定义切换图标                             | `string \| TemplateRef<void>`      | -       | -        |
| `[nzExtra]`        | 自定义渲染每个面板右上角的内容             | `string \| TemplateRef<void>`      | -       | -        |
| `[nzShowArrow]`    | 是否展示箭头                               | `boolean`                          | `true`  | ✅       |
| `[nzActive]`       | 面板是否展开，可双向绑定                   | `boolean`                          | -       | -        |
| `[nzCollapsible]`  | 设置可折叠触发区域                         | `'header' \| 'icon' \| 'disabled'` | -       | -        | 20.2.0 |
| `(nzActiveChange)` | 面板展开回调                               | `EventEmitter<boolean>`            | -       | -        |

---

## 代码示例

### 手风琴

手风琴，每次只打开一个tab。默认打开第一个。

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'nz-demo-collapse-accordion',
  imports: [NzCollapseModule],
  template: `
    <nz-collapse nzAccordion>
      @for (panel of panels; track panel) {
        <nz-collapse-panel [nzHeader]="panel.name" [nzActive]="panel.active">
          <p>{{ panel.name }} content</p>
        </nz-collapse-panel>
      }
    </nz-collapse>
  `
})
export class NzDemoCollapseAccordionComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: false,
          name: 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      name: 'This is panel header 3'
    }
  ];
}
```

### 折叠面板

可以同时展开多个面板，这个例子默认展开了第一个。

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'nz-demo-collapse-basic',
  imports: [NzCollapseModule],
  template: `
    <nz-collapse>
      @for (panel of panels; track panel) {
        <nz-collapse-panel [nzHeader]="panel.name" [nzActive]="panel.active" [nzDisabled]="panel.disabled">
          <p style="margin:0;">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.
          </p>
        </nz-collapse-panel>
      }
    </nz-collapse>
  `
})
export class NzDemoCollapseBasicComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];
}
```

### 简洁风格

一套没有边框的简洁样式。

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'nz-demo-collapse-borderless',
  imports: [NzCollapseModule],
  template: `
    <nz-collapse [nzBordered]="false">
      @for (panel of panels; track panel) {
        <nz-collapse-panel [nzHeader]="panel.name" [nzActive]="panel.active">
          <p>{{ panel.name }} content</p>
        </nz-collapse-panel>
      }
    </nz-collapse>
  `
})
export class NzDemoCollapseBorderlessComponent {
  panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1',
      childPannel: [
        {
          active: false,
          disabled: true,
          name: 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
}
```

### 可折叠

通过 `nzCollapsible` 属性，可以设置面板的可折叠触发区域

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'nz-demo-collapse-collapsible',
  imports: [NzCollapseModule, NzFlexModule],
  template: `
    <div nz-flex nzVertical nzWrap="wrap" [nzGap]="16">
      <nz-collapse>
        <nz-collapse-panel nzHeader="This is panel with header collapsible" nzCollapsible="header">
          <p style="margin:0;">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.
          </p>
        </nz-collapse-panel>
      </nz-collapse>
      <nz-collapse>
        <nz-collapse-panel nzHeader="This is panel with icon collapsible" nzCollapsible="icon">
          <p style="margin:0;">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.
          </p>
        </nz-collapse-panel>
      </nz-collapse>
      <nz-collapse>
        <nz-collapse-panel nzHeader="This is panel with disabled collapsible" nzCollapsible="disabled">
          <p style="margin:0;">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.
          </p>
        </nz-collapse-panel>
      </nz-collapse>
    </div>
  `
})
export class NzDemoCollapseCollapsibleComponent {}
```

### 自定义面板

自定义各个面板的背景色、圆角、边距和图标。

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-collapse-custom',
  imports: [NzIconModule, NzCollapseModule],
  template: `
    <nz-collapse [nzBordered]="false">
      @for (panel of panels; track panel) {
        <nz-collapse-panel
          #p
          [nzHeader]="panel.name"
          [nzActive]="panel.active"
          [nzExpandedIcon]="!$first ? panel.icon || expandedIcon : undefined"
        >
          <p>{{ panel.name }} content</p>
          <ng-template #expandedIcon let-active>
            {{ active }}
            <nz-icon nzType="caret-right" class="ant-collapse-arrow" [nzRotate]="p.active() ? 90 : -90" />
          </ng-template>
        </nz-collapse-panel>
      }
    </nz-collapse>
  `,
  styles: `
    nz-collapse {
      background: transparent;
    }

    nz-collapse-panel {
      margin-bottom: 24px;
      background: rgba(0, 0, 0, 0.02);
      border-radius: 8px !important;
      border: none !important;
    }
  `
})
export class NzDemoCollapseCustomComponent {
  readonly panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2',
      icon: 'double-right'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
}
```

### 额外节点

你可以通过 `nzExtra` 来指定面板右上角的额外内容。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-collapse-extra',
  imports: [FormsModule, NzCollapseModule, NzIconModule, NzSelectModule],
  template: `
    <nz-collapse [nzExpandIconPosition]="expandIconPosition">
      @for (panel of panels; track panel) {
        <nz-collapse-panel
          [nzHeader]="panel.name"
          [nzActive]="panel.active"
          [nzExtra]="extraTpl"
          [nzDisabled]="panel.disabled"
        >
          <p style="margin:0;">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.
          </p>
        </nz-collapse-panel>
      }
    </nz-collapse>
    <ng-template #extraTpl>
      <!-- You can use stopPropagation if you don't want the panel to toggle -->
      <nz-icon nzType="setting" (click)="$event.stopPropagation()" />
    </ng-template>
    <br />
    <span>Expand Icon Position: </span>
    <nz-select [(ngModel)]="expandIconPosition">
      <nz-option nzValue="start" nzLabel="start" />
      <nz-option nzValue="end" nzLabel="end" />
    </nz-select>
  `
})
export class NzDemoCollapseExtraComponent {
  expandIconPosition: 'start' | 'end' = 'start';

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];
}
```

### 幽灵折叠面板

将折叠面板的背景变成透明。

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'nz-demo-collapse-ghost',
  imports: [NzCollapseModule],
  template: `
    <nz-collapse nzGhost>
      @for (panel of panels; track panel) {
        <nz-collapse-panel [nzHeader]="panel.name" [nzActive]="panel.active" [nzDisabled]="panel.disabled">
          <p style="margin:0;">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.
          </p>
        </nz-collapse-panel>
      }
    </nz-collapse>
  `
})
export class NzDemoCollapseGhostComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];
}
```

### 面板嵌套

嵌套折叠面板。

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'nz-demo-collapse-mix',
  imports: [NzCollapseModule],
  template: `
    <nz-collapse>
      @for (panel of panels; track panel) {
        <nz-collapse-panel [nzHeader]="panel.name" [nzActive]="panel.active">
          <p>{{ panel.name }}</p>
          @if (panel.childPanel && panel.childPanel.length > 0) {
            <div>
              <nz-collapse>
                @for (childPanel of panel.childPanel; track childPanel) {
                  <nz-collapse-panel [nzHeader]="childPanel.name" [nzActive]="childPanel.active">
                    <p>
                      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as
                      a welcome guest in many households across the world.
                    </p>
                  </nz-collapse-panel>
                }
              </nz-collapse>
            </div>
          }
        </nz-collapse-panel>
      }
    </nz-collapse>
  `
})
export class NzDemoCollapseMixComponent {
  panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: true,
          name: 'This is panel header 1-1'
        },
        {
          active: false,
          name: 'This is panel header 1-2'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
}
```

### 隐藏箭头

你可以通过 `[nzShowArrow]="false"` 隐藏 `nz-collapse-panel` 组件的箭头图标。

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'nz-demo-collapse-noarrow',
  imports: [NzCollapseModule],
  template: `
    <nz-collapse>
      @for (panel of panels; track panel) {
        <nz-collapse-panel [nzHeader]="panel.name" [nzActive]="panel.active" [nzShowArrow]="panel.arrow">
          <p style="margin:0;">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.
          </p>
        </nz-collapse-panel>
      }
    </nz-collapse>
  `
})
export class NzDemoCollapseNoarrowComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      arrow: true
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 2'
    }
  ];
}
```

### 大小

设置折叠面板的大小。
通过设置 `nzSize` 为 `large` 或 `small` 分别把折叠面板设为大、小尺寸。若不设置则尺寸默认为中。

```typescript
import { Component } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-collapse-size',
  imports: [NzCollapseModule, NzDividerModule],
  template: `
    <nz-divider nzText="Default Size" nzOrientation="left" />
    <nz-collapse>
      <nz-collapse-panel nzHeader="This is default size panel header" nzActive>
        <p style="margin:0;">
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
          guest in many households across the world.
        </p>
      </nz-collapse-panel>
    </nz-collapse>
    <nz-divider nzText="Small Size" nzOrientation="left" />
    <nz-collapse nzSize="small">
      <nz-collapse-panel nzHeader="This is small size panel header" nzActive>
        <p style="margin:0;">
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
          guest in many households across the world.
        </p>
      </nz-collapse-panel>
    </nz-collapse>
    <nz-divider nzText="Large Size" nzOrientation="left" />
    <nz-collapse nzSize="large">
      <nz-collapse-panel nzHeader="This is large size panel header" nzActive>
        <p style="margin:0;">
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
          guest in many households across the world.
        </p>
      </nz-collapse-panel>
    </nz-collapse>
  `
})
export class NzDemoCollapseSizeComponent {}
```
