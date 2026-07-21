---
category: Components
type: Data Display
title: Collapse
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg'
description: A content area which can be collapsed and expanded.
---

## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.

## API

### nz-collapse

| Property                 | Description                                                 | Type                 | Default    | Global Config | Version |
| ------------------------ | ----------------------------------------------------------- | -------------------- | ---------- | ------------- | ------- |
| `[nzAccordion]`          | Accordion mode                                              | `boolean`            | `false`    | ✅            |
| `[nzBordered]`           | Set border style                                            | `boolean`            | `true`     | ✅            |
| `[nzGhost]`              | Make the collapse borderless and its background transparent | `boolean`            | `false`    | ✅            |
| `[nzExpandIconPosition]` | Set expand icon position                                    | `'start' \| 'end'`   | `'start'`  | -             |
| `[nzSize]`               | Set size of collapse                                        | `'small' \| 'large'` | `'middle'` | -             | 20.2.0  |

### nz-collapse-panel

| Property           | Description                                 | Type                               | Default | Global Config | Version |
| ------------------ | ------------------------------------------- | ---------------------------------- | ------- | ------------- | ------- |
| `[nzDisabled]`     | If `true`, panel cannot be opened or closed | `boolean`                          | `false` | -             |
| `[nzHeader]`       | Title of the panel                          | `string \| TemplateRef<void>`      | -       | -             |
| `[nzExpandedIcon]` | Customize an icon for toggle                | `string \| TemplateRef<void>`      | -       | -             |
| `[nzExtra]`        | Extra element in the corner                 | `string \| TemplateRef<void>`      | -       | -             |
| `[nzShowArrow]`    | Display arrow or not                        | `boolean`                          | `true`  | ✅            |
| `[nzActive]`       | Active status of panel, double binding      | `boolean`                          | -       | -             |
| `[nzCollapsible]`  | Set collapsible trigger area                | `'header' \| 'icon' \| 'disabled'` | -       | -             | 20.2.0  |
| `(nzActiveChange)` | Callback function of the active status      | `EventEmitter<boolean>`            | -       | -             |

---

## Examples

### Accordion

Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default.

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

### Collapse

More than one panel can be expanded at a time, the first panel is initialized to be active in this case.

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

### Borderless

A borderless style of Collapse.

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

### Collapsible

Specify the trigger area of collapsible by `nzCollapsible`.

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

### Custom Panel

Customize the background, border, margin and icon styles for each panel.

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

### Extra Node

You can use `nzExtra` to put extra elements in the top right corner.

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

### Ghost Collapse

Making collapse's background to transparent.

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

### Nested panel

`Collapse` is nested inside the `Collapse`.

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

### No arrow

You can disable showing arrow icon by passing `[nzShowArrow]="false"` to `nz-collapse-panel` component.

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

### Size

Set the size of the collapse.
If a large or small collapse is desired, set the `nzSize` property to either `large` or `small` respectively. Omit the `nzSize` property for a collapse with the default size.

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
