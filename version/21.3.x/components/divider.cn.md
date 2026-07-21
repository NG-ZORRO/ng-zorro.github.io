---
category: Components
type: 布局
title: Divider
subtitle: 分割线
cover: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg'
description: 区隔内容的分割线。
---

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## API

### nz-divider

| 参数              | 说明                       | 类型                              | 默认值         | 版本   |
| ----------------- | -------------------------- | --------------------------------- | -------------- | ------ |
| `[nzDashed]`      | 是否虚线                   | `boolean`                         | `false`        |
| `[nzType]`        | 水平还是垂直类型           | `'horizontal' \| 'vertical'`      | `'horizontal'` |
| `[nzText]`        | 中间文字                   | `string \| TemplateRef<void>`     | -              |
| `[nzPlain]`       | 文字是否显示为普通正文样式 | `boolean`                         | `false`        |
| `[nzOrientation]` | 中间文字方向               | `'center' \| 'left' \| 'right'`   | `'center'`     |
| `[nzVariant]`     | 分割线是虚线、点线还是实线 | `'dashed' \| 'dotted' \| 'solid'` | `'solid'`      |
| `[nzSize]`        | 分割线大小                 | `'small' \| 'middle' \| 'large'`  | -              | 20.2.0 |

---

## 代码示例

### 水平分割线

默认为水平分割线，可在中间加入文字。

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

### 标题位置

修改分割线标题的位置。

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

### 分割文字使用正文样式

使用 `nzPlain` 可以设置为更轻量的分割文字样式。

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

### 分割线大小

通过 `nzSize` 设置分割线的大小。

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

### 变体

分隔线默认为 `solid`（实线）变体。您可以将其更改为 `dashed`（虚线）或 `dotted`（点线）。

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

### 垂直分割线

使用 `nzType="vertical"` 设置为行内的垂直分割线。

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
