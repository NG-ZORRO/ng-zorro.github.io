---
category: Components
type: Layout
title: Divider
cover: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg'
description: A divider line separates different content.
---

## When To Use

- Divide sections of article.
- Divide inline text and links such as the operation column of table.

## API

### nz-divider

| Property          | Description                             | Type                              | Default        | Version |
| ----------------- | --------------------------------------- | --------------------------------- | -------------- | ------- |
| `[nzDashed]`      | whether line is dashed                  | `boolean`                         | `false`        |
| `[nzType]`        | direction type of divider               | `'horizontal' \| 'vertical'`      | `'horizontal'` |
| `[nzText]`        | inner text of divider                   | `string \| TemplateRef<void>`     | -              |
| `[nzPlain]`       | Divider text show as plain style        | `boolean`                         | `false`        |
| `[nzOrientation]` | inner text orientation                  | `'center' \| 'left' \| 'right'`   | `'center'`     |
| `[nzVariant]`     | Whether line is dashed, dotted or solid | `'dashed' \| 'dotted' \| 'solid'` | `'solid'`      |
| `[nzSize]`        | Divider size                            | `'small' \| 'middle' \| 'large'`  | -              | 20.2.0  |

---

## Examples

### Horizontal

Divider default type is `horizontal`. Support inner text inside Divider.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-divider-horizontal',
  imports: [NzDividerModule, NzIconModule],
  template: `
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzText="With Text" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzDashed [nzText]="text">
        <ng-template #text>
          <nz-icon nzType="plus" />
          Add
        </ng-template>
      </nz-divider>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  `
})
export class NzDemoDividerHorizontalComponent {}
```

### Orientation of title

Set orientation of divider to left or right.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-divider-orientation',
  imports: [NzDividerModule],
  template: `
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzText="Text" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzText="Left Text" nzOrientation="left" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzText="Right Text" nzOrientation="right" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  `
})
export class NzDemoDividerOrientationComponent {}
```

### Text without heading style

You can use non-heading style of divider text by setting `nzPlain`.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-divider-plain',
  imports: [NzDividerModule],
  template: `
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzPlain nzText="Text" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzPlain nzText="Left Text" nzOrientation="left" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzPlain nzText="Right Text" nzOrientation="right" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  `
})
export class NzDemoDividerPlainComponent {}
```

### Size

Divider support `nzSize` to set the size of Divider.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-divider-size',
  imports: [NzDividerModule, NzIconModule],
  template: `
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzSize="small" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzSize="middle" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzSize="large" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  `
})
export class NzDemoDividerSizeComponent {}
```

### Variant

Divider is of `solid` variant by default. You can change that to either `dashed` or `dotted`.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-divider-variant',
  imports: [NzDividerModule],
  template: `
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzPlain nzText="Solid" nzVariant="solid" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzPlain nzText="Dotted" nzVariant="dotted" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <nz-divider nzPlain nzText="Dashed" nzVariant="dashed" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  `,
  styles: `
    nz-divider::after,
    nz-divider::before {
      border-color: #7cb305 !important;
    }
  `
})
export class NzDemoDividerVariantComponent {}
```

### Vertical

Use `nzType="vertical"` make it vertical.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-divider-vertical',
  imports: [NzDividerModule],
  template: `
    <div>
      Text
      <nz-divider nzType="vertical" />
      <a href="#">Link</a>
      <nz-divider nzType="vertical" />
      <a href="#">Link</a>
    </div>
  `
})
export class NzDemoDividerVerticalComponent {}
```
