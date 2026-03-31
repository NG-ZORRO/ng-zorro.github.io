---
category: Components
subtitle: 哈希码
type: 特色组件
title: HashCode
tag: 17.0.0
cover: 'https://img.alicdn.com/imgextra/i3/O1CN01jn3OGS1qq7Xkq6O6b_!!6000000005546-2-tps-1074-374.png'
description: 展示区块链数据的哈希值。
---

## 何时使用

哈希码组件是以 64 位设计的样式，如果给出的数据不足或者高于 64 位，可能会带来一些展示上的差异。

## API

### nz-hash-code

| 参数         | 说明             | 类型                                        | 默认值       |
| ------------ | ---------------- | ------------------------------------------- | ------------ |
| `[nzValue]`  | 哈希码的值       | `string`                                    | -            |
| `[nzTitle]`  | 左上角的描述内容 | `string`                                    | `'HashCode'` |
| `[nzLogo]`   | 右上角的展示     | `TemplateRef<void> \| string`               | -            |
| `[nzMode]`   | 展示模式         | `'single' \| 'double' \| 'strip' \| 'rect'` | `'double'`   |
| `[nzType]`   | 样式             | `'default' \| 'primary'`                    | `'primary'`  |
| `(nzOnCopy)` | 点击"复制"的回调 | `EventEmitter<string>`                      | -            |

---

## 代码示例

### 基本

最简单的用法。

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

### 复制

点击复制的 icon

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

### 添加 Logo

可设置右上角的标志

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

### 更换样式

更换样式。

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

### 矩形模式

同单行模式一样，不会展示原有的 `icon` 和顶部描述内容

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

### 单行模式

在单行模式下，不会展示原有的 `icon` 和顶部描述内容。

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

### 长条模式

仅展示一行数据。

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
