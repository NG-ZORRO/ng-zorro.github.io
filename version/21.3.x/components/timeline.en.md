---
category: Components
type: Data Display
title: Timeline
cover: 'https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg'
description: Vertical display timeline.
---

## When To Use

- When a series of information needs to be ordered by time (ascend or descend).
- When you need a timeline to make a visual connection.

## API

```html
<nz-timeline>
  <nz-timeline-item>step1 2015-09-01</nz-timeline-item>
  <nz-timeline-item>step2 2015-09-01</nz-timeline-item>
  <nz-timeline-item>step3 2015-09-01</nz-timeline-item>
  <nz-timeline-item>step4 2015-09-01</nz-timeline-item>
</nz-timeline>
```

### nz-timeline

Timeline

| Property         | Description                                                                         | Type                                           | Default                        |
| ---------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------ |
| `[nzPending]`    | Set the last ghost node's existence or its content                                  | `string \| boolean \| TemplateRef<void>`       | `false`                        |
| `[nzPendingDot]` | Set the dot of the last ghost node when pending is true                             | `string \| TemplateRef<void>`                  | `<nz-icon nzType="loading" />` |
| `[nzReverse]`    | Reverse nodes or not                                                                | `boolean`                                      | `false`                        |
| `[nzMode]`       | By sending `alternate` the timeline will distribute the nodes to the left and right | `'left' \| 'alternate' \| 'right' \| 'custom'` | -                              |

### nz-timeline-item

Node of timeline

| Property       | Description                                                                             | Type                          | Default |
| -------------- | --------------------------------------------------------------------------------------- | ----------------------------- | ------- |
| `[nzColor]`    | Set the circle's color to `'blue' \| 'red' \| 'green' \| 'gray'` or other custom colors | `string`                      | `blue`  |
| `[nzDot]`      | Customize timeline dot                                                                  | `string \| TemplateRef<void>` | -       |
| `[nzPosition]` | Customize position, only works when `nzMode` is `custom`                                | `'left' \| 'right'`           | -       |
| `[nzLabel]`    | Set the label                                                                           | `string \| TemplateRef<void>` | -       |

---

## Examples

### Alternate

Alternate timeline.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'nz-demo-timeline-alternate',
  imports: [NzIconModule, NzTimelineModule],
  template: `
    <nz-timeline nzMode="alternate">
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item nzColor="green">Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item [nzDot]="dotTemplate">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </nz-timeline-item>
      <nz-timeline-item nzColor="red">Network problems being solved 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item [nzDot]="dotTemplate">Technical testing 2015-09-01</nz-timeline-item>
    </nz-timeline>
    <ng-template #dotTemplate>
      <nz-icon nzType="clock-circle-o" style="font-size: 16px;" />
    </ng-template>
  `
})
export class NzDemoTimelineAlternateComponent {}
```

### Basic

Basic timeline.

```typescript
import { Component } from '@angular/core';

import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'nz-demo-timeline-basic',
  imports: [NzTimelineModule],
  template: `
    <nz-timeline>
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Technical testing 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Network problems being solved 2015-09-01</nz-timeline-item>
    </nz-timeline>
  `
})
export class NzDemoTimelineBasicComponent {}
```

### Color

Set the color of circles. `green` means completed or success status, `red` means warning or error, and `blue` means ongoing or other default status, `gray` for unfinished or disabled status.

```typescript
import { Component } from '@angular/core';

import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'nz-demo-timeline-color',
  imports: [NzTimelineModule],
  template: `
    <nz-timeline>
      <nz-timeline-item nzColor="green">Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item nzColor="green">Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item nzColor="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </nz-timeline-item>
      <nz-timeline-item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </nz-timeline-item>
      <nz-timeline-item nzColor="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </nz-timeline-item>
      <nz-timeline-item nzColor="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </nz-timeline-item>
    </nz-timeline>
  `
})
export class NzDemoTimelineColorComponent {}
```

### Custom

Set a node as an icon or other custom element.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'nz-demo-timeline-custom',
  imports: [NzIconModule, NzTimelineModule],
  template: `
    <nz-timeline>
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item nzColor="red" [nzDot]="dotTemplate">Technical testing 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Network problems being solved 2015-09-01</nz-timeline-item>
    </nz-timeline>
    <ng-template #dotTemplate>
      <nz-icon nzType="clock-circle-o" style="font-size: 16px;" />
    </ng-template>
  `
})
export class NzDemoTimelineCustomComponent {}
```

### Label

Use `nzLabel` show time alone.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTimelineMode, NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'nz-demo-timeline-label',
  imports: [FormsModule, NzRadioModule, NzTimelineModule],
  template: `
    <nz-radio-group [(ngModel)]="mode">
      <label nz-radio nzValue="left">Left</label>
      <label nz-radio nzValue="right">Right</label>
      <label nz-radio nzValue="alternate">Alternative</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-timeline [nzMode]="mode">
      <nz-timeline-item nzLabel="2015-09-01">Create a services</nz-timeline-item>
      <nz-timeline-item nzLabel="2015-09-01 09:12:11">Solve initial network problems</nz-timeline-item>
      <nz-timeline-item>Technical testing</nz-timeline-item>
      <nz-timeline-item nzLabel="2015-09-01 09:12:11">Network problems being solved</nz-timeline-item>
    </nz-timeline>
  `
})
export class NzDemoTimelineLabelComponent {
  mode: NzTimelineMode = 'left';
}
```

### Last node

When the timeline is incomplete and ongoing, put a ghost node at last. set `[nzPending]="true"` or `[nzPending]="a TemplateRef"`. Used in ascend chronological order.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'nz-demo-timeline-pending',
  imports: [NzButtonModule, NzTimelineModule],
  template: `
    <nz-timeline nzPending="Recording..." [nzReverse]="reverse">
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Technical testing 2015-09-01</nz-timeline-item>
    </nz-timeline>
    <br />
    <br />
    <button nz-button nzType="primary" (click)="toggleReverse()">Toggle Reverse</button>
  `
})
export class NzDemoTimelinePendingComponent {
  reverse = false;

  toggleReverse(): void {
    this.reverse = !this.reverse;
  }
}
```

### Custom Position

You can assign different positions to timeline items.

```typescript
import { Component } from '@angular/core';

import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'nz-demo-timeline-position',
  imports: [NzTimelineModule],
  template: `
    <nz-timeline nzMode="custom">
      <nz-timeline-item nzPosition="left" [nzDot]="soccerTemplate">Alice 20'</nz-timeline-item>
      <nz-timeline-item nzPosition="left" [nzDot]="soccerTemplate">Susan 28'</nz-timeline-item>
      <nz-timeline-item nzPosition="right" nzColor="red" [nzDot]="soccerTemplate">Tim 45'</nz-timeline-item>
      <nz-timeline-item nzPosition="left" [nzDot]="soccerTemplate">Bob 79'</nz-timeline-item>
    </nz-timeline>
    <ng-template #soccerTemplate>⚽</ng-template>
  `
})
export class NzDemoTimelinePositionComponent {}
```

### Right alternate

Right alternate timeline.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'nz-demo-timeline-right',
  imports: [NzIconModule, NzTimelineModule],
  template: `
    <nz-timeline nzMode="right">
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item [nzDot]="dotTemplate" nzColor="red">Technical testing 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Network problems being solved 2015-09-01</nz-timeline-item>
    </nz-timeline>
    <ng-template #dotTemplate>
      <nz-icon nzType="clock-circle-o" style="font-size: 16px;" />
    </ng-template>
  `
})
export class NzDemoTimelineRightComponent {}
```
