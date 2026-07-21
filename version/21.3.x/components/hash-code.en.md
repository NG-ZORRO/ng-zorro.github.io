---
category: Components
type: Featured Components
title: HashCode
tag: 17.0.0
cover: 'https://img.alicdn.com/imgextra/i3/O1CN01jn3OGS1qq7Xkq6O6b_!!6000000005546-2-tps-1074-374.png'
description: Display the hash value of blockchain data.
---

## When To Use

The hash code component is styled for 64-bit design, and if the data given is less than or more than 64-bit, it may
bring some differences in presentation.

## API

### nz-hash-code

| Property     | Description                                         | Type                                        | Default      |
| ------------ | --------------------------------------------------- | ------------------------------------------- | ------------ |
| `[nzValue]`  | The value of the hash code                          | `string`                                    | -            |
| `[nzTitle]`  | Description of the content in the upper left corner | `string`                                    | `'HashCode'` |
| `[nzLogo]`   | Display in the upper right corner                   | `TemplateRef<void> \| string`               | -            |
| `[nzMode]`   | Demonstration Mode                                  | `'single' \| 'double' \| 'strip' \| 'rect'` | `'double'`   |
| `[nzType]`   | style                                               | `'default' \| 'primary'`                    | `'primary'`  |
| `(nzOnCopy)` | Clicking the Copy callback                          | `EventEmitter<string>`                      | -            |

---

## Examples

### Basic

The simplest usage.

```typescript
import { Component } from '@angular/core';

import { NzHashCodeModule } from 'ng-zorro-antd/hash-code';

@Component({
  selector: 'nz-demo-hash-code-basic',
  imports: [NzHashCodeModule],
  template: `<nz-hash-code [nzValue]="value" />`
})
export class NzDemoHashCodeBasicComponent {
  value = 'dfb5fe9ef7b99b2b1db102114a6d7d445d992f40a5d575f801c148990199a068';
}
```

### Copy

Click on the copied icon.

```typescript
import { Component } from '@angular/core';

import { NzHashCodeModule } from 'ng-zorro-antd/hash-code';

@Component({
  selector: 'nz-demo-hash-code-copy',
  imports: [NzHashCodeModule],
  template: `<nz-hash-code [nzValue]="value" (nzOnCopy)="getCopy($event)" />`
})
export class NzDemoHashCodeCopyComponent {
  value = 'dfb5fe9ef7b99b2b1db102114a6d7d445d992f40a5d575f801c148990199a068';

  getCopy(value: string): void {
    console.log(`hashCode:${value}`);
  }
}
```

### Logo

Possibility to set the logo in the upper right corner.

```typescript
import { Component } from '@angular/core';

import { NzHashCodeModule } from 'ng-zorro-antd/hash-code';

@Component({
  selector: 'nz-demo-hash-code-logo',
  imports: [NzHashCodeModule],
  template: `<nz-hash-code [nzValue]="value" nzLogo="Antd" />`
})
export class NzDemoHashCodeLogoComponent {
  value = 'dfb5fe9ef7b99b2b1db102114a6d7d445d992f40a5d575f801c148990199a068';
}
```

### Style

Replacement of styles.

```typescript
import { Component } from '@angular/core';

import { NzHashCodeModule } from 'ng-zorro-antd/hash-code';

@Component({
  selector: 'nz-demo-hash-code-primary',
  imports: [NzHashCodeModule],
  template: `<nz-hash-code [nzValue]="value" nzType="primary" />`
})
export class NzDemoHashCodePrimaryComponent {
  value = 'dfb5fe9ef7b99b2b1db102114a6d7d445d992f40a5d575f801c148990199a068';
}
```

### Rect

As in one-line mode, the original `icon` and top description will not be displayed.

```typescript
import { Component } from '@angular/core';

import { NzHashCodeModule } from 'ng-zorro-antd/hash-code';

@Component({
  selector: 'nz-demo-hash-code-rect',
  imports: [NzHashCodeModule],
  template: `
    <nz-hash-code [nzValue]="value" nzMode="rect" />
    <br />
    <nz-hash-code [nzValue]="value" nzMode="rect" nzType="primary" />
  `
})
export class NzDemoHashCodeRectComponent {
  value = 'dfb5fe9ef7b99b2b1db102114a6d7d445d992f40a5d575f801c148990199a068';
}
```

### Single

In single-line mode, the original `icon` and top description are not displayed.

```typescript
import { Component } from '@angular/core';

import { NzHashCodeModule } from 'ng-zorro-antd/hash-code';

@Component({
  selector: 'nz-demo-hash-code-single',
  imports: [NzHashCodeModule],
  template: `
    <nz-hash-code [nzValue]="value" nzMode="single" />
    <br />
    <nz-hash-code [nzValue]="value" nzMode="single" nzType="primary" />
  `
})
export class NzDemoHashCodeSingleComponent {
  value = 'dfb5fe9ef7b99b2b1db102114a6d7d445d992f40a5d575f801c148990199a068';
}
```

### Strip

Show only one row of data.

```typescript
import { Component } from '@angular/core';

import { NzHashCodeModule } from 'ng-zorro-antd/hash-code';

@Component({
  selector: 'nz-demo-hash-code-strip',
  imports: [NzHashCodeModule],
  template: `
    <nz-hash-code [nzValue]="value" nzMode="strip" />
    <br />
    <nz-hash-code [nzValue]="value" nzMode="strip" nzType="primary" />
  `
})
export class NzDemoHashCodeStripComponent {
  value = 'dfb5fe9ef7b99b2b1db102114a6d7d445d992f40a5d575f801c148990199a068';
}
```
