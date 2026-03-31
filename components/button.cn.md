---
category: Components
type: 通用
title: Button
subtitle: 按钮
cover: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg'
description: 按钮用于开始一个即时操作。
---

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Ant Design 中，我们有五种按钮。

- 🔵 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- ⚪️ 默认按钮：用于没有主次之分的一组行动点。
- 🫥 虚线按钮：常用于添加操作。
- 🔤 文本按钮：用于最次级的行动点。
- 🔗 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- ⚠️ 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 👻 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 🚫 禁用：行动点不可用的时候，一般需要文案解释。
- 🔃 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## API

### [nz-button]

> 注意：nz-button 是一个 Directive，除以下表格之外还支持例如 disabled 等原生 button 的[所有属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button)。

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`nzType` -> `nzShape` -> `nzSize` -> `nzLoading` -> `disabled`

按钮的属性说明如下：

| 属性          | 说明                                                             | 类型                                  | 默认值      | 支持全局配置 |
| ------------- | ---------------------------------------------------------------- | ------------------------------------- | ----------- | ------------ |
| `[disabled]`  | 禁止与 button 交互                                               | `boolean`                             | `false`     |
| `[nzGhost]`   | 幽灵属性，使按钮背景透明                                         | `boolean`                             | `false`     |
| `[nzLoading]` | 设置按钮载入状态                                                 | `boolean`                             | `false`     |
| `[nzShape]`   | 设置按钮形状，可选值为 `circle` `round` 或者不设                 | `'circle'\|'round'`                   | -           |              |
| `[nzSize]`    | 设置按钮大小，可选值为 `small` `large` 或者不设                  | `'large'\|'small'\|'default'`         | `'default'` | ✅           |
| `[nzType]`    | 设置按钮类型，可选值为 `primary` `dashed` `text` `link` 或者不设 | `'primary'\|'dashed'\|'link'\|'text'` | -           |
| `[nzBlock]`   | 将按钮宽度调整为其父宽度的选项                                   | `boolean`                             | `false`     |
| `[nzDanger]`  | 设置危险按钮                                                     | boolean                               | `false`     |              |

---

## 代码示例

### 按钮类型

按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-button-basic',
  imports: [NzButtonModule],
  template: `
    <button nz-button nzType="primary">Primary Button</button>
    <button nz-button nzType="default">Default Button</button>
    <button nz-button nzType="dashed">Dashed Button</button>
    <button nz-button nzType="text">Text Button</button>
    <a nz-button nzType="link">Link Button</a>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `
})
export class NzDemoButtonBasicComponent {}
```

### Block 按钮

`nzBlock` 属性将使按钮适合其父宽度。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-button-block',
  imports: [NzButtonModule],
  template: `
    <button nz-button nzType="primary" nzBlock>Primary</button>
    <button nz-button nzType="default" nzBlock>Default</button>
    <button nz-button nzType="dashed" nzBlock>Dashed</button>
    <button nz-button nzType="text" nzBlock>Text</button>
    <a nz-button nzType="link" nzBlock>Link</a>
  `,
  styles: `
    [nz-button] {
      margin-bottom: 12px;
    }
  `
})
export class NzDemoButtonBlockComponent {}
```

### 危险按钮

使用 `nzDanger` 将按钮标识为危险状态。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-button-danger',
  imports: [NzButtonModule],
  template: `
    <button nz-button nzType="primary" nzDanger>Primary</button>
    <button nz-button nzType="default" nzDanger>Default</button>
    <button nz-button nzType="dashed" nzDanger>Dashed</button>
    <button nz-button nzType="text" nzDanger>Text</button>
    <a nz-button nzType="link" nzDanger>Link</a>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `
})
export class NzDemoButtonDangerComponent {}
```

### 不可用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-button-disabled',
  imports: [NzButtonModule],
  template: `
    <button nz-button nzType="primary">Primary</button>
    <button nz-button nzType="primary" disabled>Primary(disabled)</button>
    <br />
    <button nz-button nzType="default">Default</button>
    <button nz-button nzType="default" disabled>Default(disabled)</button>
    <br />
    <button nz-button nzType="dashed">Dashed</button>
    <button nz-button nzType="dashed" disabled>Dashed(disabled)</button>
    <br />
    <a nz-button nzType="text">Text</a>
    <a nz-button nzType="text" disabled>Text(disabled)</a>
    <br />
    <a nz-button nzType="link">Link</a>
    <a nz-button nzType="link" disabled>Link(disabled)</a>
    <br />
    <a nz-button nzType="text" nzDanger>Danger Text</a>
    <a nz-button nzType="text" disabled nzDanger>Danger Text(disabled)</a>
    <br />
    <a nz-button nzType="link" nzDanger>Danger Link</a>
    <a nz-button nzType="link" disabled nzDanger>Danger Link(disabled)</a>
    <br />
    <button nz-button nzType="default" nzDanger>Danger Default</button>
    <button nz-button nzType="default" disabled nzDanger>Danger Default(disabled)</button>
    <div class="ghost-background">
      <button nz-button nzGhost>Ghost</button>
      <button nz-button nzGhost disabled>Ghost(disabled)</button>
    </div>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
      margin-bottom: 12px;
    }

    .ghost-background {
      padding: 8px;
      background: rgb(190, 200, 200);
    }

    .ghost-background [nz-button] {
      margin-right: 8px;
      margin-bottom: 0;
    }
  `
})
export class NzDemoButtonDisabledComponent {}
```

### 幽灵按钮

添加 `nzGhost` 属性后，幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-button-ghost',
  imports: [NzButtonModule],
  template: `
    <div class="ghost-background">
      <button nz-button nzType="primary" nzGhost>Primary</button>
      <button nz-button nzType="default" nzGhost>Default</button>
      <button nz-button nzType="dashed" nzGhost>Dashed</button>
      <a nz-button nzType="link" nzGhost>Link</a>
    </div>
  `,
  styles: `
    .ghost-background {
      padding: 8px;
      background: rgb(190, 200, 200);
    }

    [nz-button] {
      margin-right: 8px;
    }
  `
})
export class NzDemoButtonGhostComponent {}
```

### 图标按钮

当需要在 `nz-button` 内嵌入图标时，可以直接在 `nz-button` 内嵌入对应的 `icon`。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-button-icon',
  imports: [NzButtonModule, NzIconModule],
  template: `
    <button nz-button nzType="primary" nzShape="circle">
      <nz-icon nzType="search" />
    </button>
    <button nz-button nzType="primary" nzShape="circle">A</button>
    <button nz-button nzType="primary">
      <nz-icon nzType="search" />
      Search
    </button>
    <button nz-button nzType="default" nzShape="circle">
      <nz-icon nzType="search" />
    </button>
    <button nz-button nzType="default">
      <nz-icon nzType="search" />
      Search
    </button>
    <br />
    <button nz-button nzType="default" nzShape="circle"><nz-icon nzType="search" /></button>
    <button nz-button nzType="default">
      <nz-icon nzType="search" />
      Search
    </button>
    <button nz-button nzType="dashed" nzShape="circle"><nz-icon nzType="search" /></button>
    <button nz-button nzType="dashed">
      <nz-icon nzType="search" />
      Search
    </button>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `
})
export class NzDemoButtonIconComponent {}
```

### 加载中状态

添加 `nzLoading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-button-loading',
  imports: [NzButtonModule, NzIconModule],
  template: `
    <button nz-button nzType="primary" nzLoading>
      <nz-icon nzType="poweroff" />
      Loading
    </button>
    <button nz-button nzType="primary" nzSize="small" nzLoading>Loading</button>
    <br />
    <button nz-button nzType="primary" (click)="loadOne()" [nzLoading]="isLoadingOne">Click me!</button>
    <button nz-button nzType="primary" (click)="loadTwo()" [nzLoading]="isLoadingTwo">
      <nz-icon nzType="poweroff" />
      Click me!
    </button>
    <br />
    <button nz-button nzLoading nzShape="circle"></button>
    <button nz-button nzLoading nzType="primary" nzShape="circle"></button>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `
})
export class NzDemoButtonLoadingComponent {
  isLoadingOne = false;
  isLoadingTwo = false;

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }
}
```

### 多个按钮组合

按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 `nz-dropdown` 中组合使用。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-button-multiple',
  imports: [NzButtonModule, NzDropdownModule, NzIconModule],
  template: `
    <button nz-button nzType="primary">primary</button>
    <button nz-button nzType="default">secondary</button>
    <button nz-button nz-dropdown [nzDropdownMenu]="menu">
      Actions
      <nz-icon nzType="down" />
    </button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>
          <a>1st item</a>
        </li>
        <li nz-menu-item>
          <a>2nd item</a>
        </li>
        <li nz-menu-item>
          <a>3rd item</a>
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `
})
export class NzDemoButtonMultipleComponent {}
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `nzSize` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `nzSize`，则尺寸为中。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-button-size',
  imports: [FormsModule, NzButtonModule, NzIconModule, NzRadioModule, NzSpaceModule],
  template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large">Large</label>
      <label nz-radio-button nzValue="default">Default</label>
      <label nz-radio-button nzValue="small">Small</label>
    </nz-radio-group>
    <br />
    <br />
    <button nz-button [nzSize]="size" nzType="primary">Primary</button>
    <button nz-button [nzSize]="size" nzType="default">Default</button>
    <button nz-button [nzSize]="size" nzType="dashed">Dashed</button>
    <a nz-button [nzSize]="size" nzType="link">Link</a>
    <br />
    <button nz-button nzType="primary" [nzSize]="size">
      <nz-icon nzType="download" />
    </button>
    <button nz-button nzType="primary" [nzSize]="size" nzShape="circle">
      <nz-icon nzType="download" />
    </button>
    <button nz-button nzType="primary" [nzSize]="size" nzShape="round">
      <nz-icon nzType="download" />
    </button>
    <button nz-button nzType="primary" [nzSize]="size" nzShape="round">
      <nz-icon nzType="download" />
      Download
    </button>
    <button nz-button nzType="primary" [nzSize]="size">
      <nz-icon nzType="download" />
      Download
    </button>
    <br />
    <nz-space-compact [nzSize]="size">
      <button nz-button nzType="primary">
        <nz-icon nzType="left" />
        Backward
      </button>
      <button nz-button nzType="primary">
        Forward
        <nz-icon nzType="right" />
      </button>
    </nz-space-compact>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `
})
export class NzDemoButtonSizeComponent {
  size: NzButtonSize = 'large';
}
```
