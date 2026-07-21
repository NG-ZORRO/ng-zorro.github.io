---
category: Components
subtitle: 时间轴
type: 数据展示
title: Timeline
cover: 'https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg'
description: 垂直展示的时间流信息。
---

## 何时使用

- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。

## API

```html
<nz-timeline>
  <nz-timeline-item>创建服务现场 2015-09-01</nz-timeline-item>
  <nz-timeline-item>初步排除网络异常 2015-09-01</nz-timeline-item>
  <nz-timeline-item>技术测试异常 2015-09-01</nz-timeline-item>
  <nz-timeline-item>网络异常正在修复 2015-09-01</nz-timeline-item>
</nz-timeline>
```

### nz-timeline

时间轴。

| 参数             | 说明                                     | 类型                                           | 默认值                         |
| ---------------- | ---------------------------------------- | ---------------------------------------------- | ------------------------------ |
| `[nzPending]`    | 指定最后一个幽灵节点是否存在或内容       | `string \| boolean \| TemplateRef<void>`       | `false`                        |
| `[nzPendingDot]` | 当最后一个幽灵节点存在時，指定其时间图点 | `string \| TemplateRef<void>`                  | `<nz-icon nzType="loading" />` |
| `[nzReverse]`    | 节点排序                                 | `boolean`                                      | `false`                        |
| `[nzMode]`       | 可以改变时间轴和内容的相对位置           | `'left' \| 'alternate' \| 'right' \| 'custom'` | -                              |

### nz-timeline-item

时间轴的每一个节点。

| 参数           | 说明                                                               | 类型                          | 默认值   |
| -------------- | ------------------------------------------------------------------ | ----------------------------- | -------- |
| `[nzColor]`    | 指定圆圈颜色 `'blue' \| 'red' \| 'green' \| 'gray'` 或自定义的色值 | `string`                      | `'blue'` |
| `[nzDot]`      | 自定义时间轴点                                                     | `string \| TemplateRef<void>` | -        |
| `[nzPosition]` | 自定义节点位置，仅当 `nzMode` 为 `custom` 时有效                   | `'left' \| 'right'`           | -        |
| `[nzLabel]`    | 设置标签                                                           | `string \| TemplateRef<void>` | -        |

---

## 代码示例

### 交替展现

内容在时间轴两侧交替出现。

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

### 基本用法

基本的时间轴。

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

### 圆圈颜色

圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态，灰色表示未完成或失效状态。

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

### 自定义时间轴点

可以设置为图标或其他自定义元素。

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

### 标签

使用 `nzLabel` 标签单独展示时间。

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

### 最后一个及排序

当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 `nzPending` 为真值时展示幽灵节点，如果 `nzPending` 是 Template 可用于定制该节点内容，同时 `nzPendingDot` 将可以用于定制其轴点。`nzReverse` 属性用于控制节点排序，为 `false` 时按正序排列，为 `true` 时按倒序排列。

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

### 自定义位置

可以为每一项指定位置。

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

### 右侧时间轴点

时间轴可以在内容的右边。

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
