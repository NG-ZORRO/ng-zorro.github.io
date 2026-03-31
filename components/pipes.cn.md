---
category: Components
type: 通用
title: Pipes
cols: 1
experimental: true
description: 常用 Pipes 集合。
---

## 何时使用

引入 Pipe 后，像 angular 的默认 Pipe 一样使用

## API

### nzBytes

| 参数      | 说明               | 类型     | 默认值 |
| --------- | ------------------ | -------- | ------ |
| `decimal` | 保留小数位         | `number` | '0'    |
| `from`    | 当前值的单位       | `string` | 'B'    |
| `to`      | 转换到目标值的单位 | `string` | ''     |

### nzToCssUnit

| 参数          | 说明     | 类型     | 默认值 |
| ------------- | -------- | -------- | ------ |
| `defaultUnit` | 默认单位 | `string` | 'px'   |

### nzEllipsis

| 参数     | 说明     | 类型     | 默认值 |
| -------- | -------- | -------- | ------ |
| `length` | 截取长度 | `number` | ''     |
| `suffix` | 替换字符 | `string` | ''     |

### nzAggregate

| 参数     | 说明     | 类型                               | 默认值 |
| -------- | -------- | ---------------------------------- | ------ |
| `method` | 聚合方式 | `'sum' \| 'max' \| 'min' \| 'avg'` | ''     |

### nzSanitizer

| 参数   | 说明           | 类型     | 默认值 |
| ------ | -------------- | -------- | ------ |
| `type` | sanitizer 类型 | `string` | 'html' |

---

## 代码示例

### nzAggregate

数组的Sum、Min、Max、Average等聚合操作

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

存储单位的换算，增加可读性

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

Css 单位

提示：如果条件允许，我们更推荐使用 Angular 内置语法，例如：

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

截断字符串，用指定的字符串结尾

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

DomSanitizer 的 Pipe 实现

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

去除字符串左右空字符串

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
