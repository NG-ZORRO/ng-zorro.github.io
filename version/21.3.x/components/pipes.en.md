---
category: Components
type: General
title: Pipes
cols: 1
experimental: true
description: Common Pipe Collections.
---

## When To Use

After importing Pipe, use it like Angular's built-in Pipe

## API

### nzBytes

| Property  | Description                     | Type     | Default |
| --------- | ------------------------------- | -------- | ------- |
| `decimal` | Decimal                         | `number` | '0'     |
| `from`    | Unit of current value           | `string` | 'B'     |
| `to`      | Units converted to target value | `string` | ''      |

### nzToCssUnit

| Property      | Description  | Type     | Default |
| ------------- | ------------ | -------- | ------- |
| `defaultUnit` | Default Unit | `string` | 'px'    |

### nzEllipsis

| Property | Description       | Type     | Default |
| -------- | ----------------- | -------- | ------- |
| `length` | Truncate length   | `number` | ''      |
| `suffix` | Replace character | `string` | ''      |

### nzAggregate

| Property | Description | Type                               | Default |
| -------- | ----------- | ---------------------------------- | ------- |
| `method` | Aggregation | `'sum' \| 'max' \| 'min' \| 'avg'` | ''      |

### nzSanitizer

| Property | Description    | Type     | Default |
| -------- | -------------- | -------- | ------- |
| `type`   | sanitizer type | `string` | 'html'  |

---

## Examples

### nzAggregate

Sum, Min, Max, Average and other operations on arrays

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAggregatePipe } from 'ng-zorro-antd/pipes';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@Component({
  selector: 'nz-demo-pipes-aggregate',
  imports: [NzGridModule, NzStatisticModule, NzAggregatePipe],
  template: `
    <nz-row [nzGutter]="16">
      <nz-col [nzSpan]="6">
        <nz-statistic [nzValue]="[7, 8, 2, 3] | nzAggregate: 'max'" nzTitle="Max [7, 8, 2, 3]" />
      </nz-col>
      <nz-col [nzSpan]="6">
        <nz-statistic [nzValue]="[7, 8, 2, 3] | nzAggregate: 'min'" nzTitle="Min [7, 8, 2, 3]" />
      </nz-col>
      <nz-col [nzSpan]="6">
        <nz-statistic [nzValue]="[7, 8, 2, 3] | nzAggregate: 'sum'" nzTitle="Sum [7, 8, 2, 3]" />
      </nz-col>
      <nz-col [nzSpan]="6">
        <nz-statistic [nzValue]="[7, 8, 2, 3] | nzAggregate: 'avg'" nzTitle="Avg [7, 8, 2, 3]" />
      </nz-col>
    </nz-row>
  `
})
export class NzDemoPipesAggregateComponent {}
```

### nzBytes

Conversion of storage units to increase readability

```typescript
import { Component } from '@angular/core';

import { NzBytesPipe } from 'ng-zorro-antd/pipes';

@Component({
  selector: 'nz-demo-pipes-bytes',
  imports: [NzBytesPipe],
  template: `
    <ul>
      <li>{{ 200 | nzBytes }}</li>
      <li>{{ 1024 | nzBytes }}</li>
      <li>{{ 1048576 | nzBytes }}</li>
      <li>{{ 1024 | nzBytes: 0 : 'KB' }}</li>
      <li>{{ 1073741824 | nzBytes }}</li>
      <li>{{ 1099511627776 | nzBytes }}</li>
      <li>{{ 1073741824 | nzBytes: 0 : 'B' : 'MB' }}</li>
    </ul>
  `
})
export class NzDemoPipesBytesComponent {}
```

### nzToCssUnit

Css unit

Tip: If possible, we prefer to use Angular's built-in syntax, for example:

```html
<div [style.border-radius.px]="1">px</div>
<div [style.border-radius.%]="1">%</div>
<div [style.border-radius.rem]="1">rem</div>
```

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzToCssUnitPipe } from 'ng-zorro-antd/pipes';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-pipes-css-unit',
  imports: [FormsModule, NzSliderModule, NzToCssUnitPipe],
  template: `
    <nz-slider [(ngModel)]="radiusValue" [nzMax]="100" [nzMin]="0" />

    <div class="wrap">
      <div class="box" [style.border-radius]="radiusValue | nzToCssUnit">Default</div>
      <div class="box" [style.border-radius]="radiusValue | nzToCssUnit: '%'">%</div>
      <div class="box" [style.border-radius]="radiusValue | nzToCssUnit: 'rem'">rem</div>
    </div>
  `,
  styles: `
    .wrap {
      display: flex;
    }
    .box {
      margin-top: 20px;
      margin-right: 20px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      width: 50px;
      height: 50px;
      background: #4183c4;
    }
  `
})
export class NzDemoPipesCssUnitComponent {
  radiusValue = 0;
}
```

### nzEllipsis

Truncate the string, ending with the specified string

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzEllipsisPipe } from 'ng-zorro-antd/pipes';

@Component({
  selector: 'nz-demo-pipes-ellipsis',
  imports: [FormsModule, NzInputModule, NzEllipsisPipe],
  template: `
    <input type="text" nz-input [(ngModel)]="str" />
    <br />
    <p>{{ str | nzEllipsis: 36 : '...' }}</p>
  `,
  styles: `
    p {
      padding: 8px 12px;
    }
  `
})
export class NzDemoPipesEllipsisComponent {
  str = 'Ant Design, a design language for background applications';
}
```

### nzSanitizer

Pipe implementation of DomSanitizer

```html
<div [innerHTML]="html | nzSanitizer: 'html'"></div>
<div [style]="style | nzSanitizer: 'style'"></div>
<img [src]="url | nzSanitizer: 'url'" />
<iframe [src]="resourceUrl | nzSanitizer: 'resourceUrl'"></iframe>
```

```typescript
import { Component } from '@angular/core';

import { NzSanitizerPipe } from 'ng-zorro-antd/pipes';

@Component({
  selector: 'nz-demo-pipes-sanitizer',
  imports: [NzSanitizerPipe],
  template: `<div [innerHTML]="html | nzSanitizer: 'html'"></div>`
})
export class NzDemoPipesSanitizerComponent {
  html = `<span>I am <code>innerHTML</code></span>`;
}
```

### nzTrim

Strip left and right empty string

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTrimPipe } from 'ng-zorro-antd/pipes';

@Component({
  selector: 'nz-demo-pipes-trim',
  imports: [FormsModule, NzInputModule, NzTrimPipe],
  template: `
    <input type="text" nz-input [(ngModel)]="str" />
    <br />
    <div>
      <pre>{{ str }}</pre>
    </div>
    <div>
      <pre>{{ str | nzTrim }}</pre>
    </div>
  `,
  styles: `
    div {
      padding: 8px 12px;
    }
    pre {
      display: inline-block;
      background: #eee;
    }
  `
})
export class NzDemoPipesTrimComponent {
  str = ' Ant Design ';
}
```
