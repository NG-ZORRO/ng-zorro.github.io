---
category: Components
type: General
title: Button
cover: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg'
description: To trigger an operation.
---

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

In Ant Design, we provide 5 types of buttons.

- 🔵 Primary button: indicate the main action, one primary button at most in one section.
- ⚪️ Default button: indicate a series of actions without priority.
- 🫥 Dashed button: used for adding action commonly.
- 🔤 Text button: used for the most secondary action.
- 🔗 Link button: used for external links.

And 4 other properties additionally.

- ⚠️ `danger`: used for risk actions, like deletion or authorization.
- 👻 `ghost`: usually used in situations with a complex background, home pages.
- 🚫 `disabled`: when actions are not available.
- 🔃 `loading`: add loading spinner in button, avoiding multiple submit.

## API

### [nz-button]

> Note: nz-button is a Directive, it accepts all props which are supported by [native button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

To get a customized button, just set `nzType`/`nzShape`/`nzSize`/`nzLoading`/`disabled`.

| Property      | Description                                                                   | Type                                  | Default     | Global Config |
| ------------- | ----------------------------------------------------------------------------- | ------------------------------------- | ----------- | ------------- |
| `[disabled]`  | prevents a user from interacting with the button                              | `boolean`                             | `false`     |
| `[nzGhost]`   | make background transparent and invert text and border colors                 | `boolean`                             | `false`     |
| `[nzLoading]` | set the loading status of button                                              | `boolean`                             | `false`     |
| `[nzShape]`   | can be set to `circle` `round` or omitted                                     | `'circle'\|'round'`                   | -           |               |
| `[nzSize]`    | can be set to `small` `large` or omitted                                      | `'large'\|'small'\|'default'`         | `'default'` | ✅            |
| `[nzType]`    | can be set to `primary` `dashed` `text` `link` or omitted (meaning `default`) | `'primary'\|'dashed'\|'link'\|'text'` | -           |
| `[nzBlock]`   | option to fit button width to its parent width                                | `boolean`                             | `false`     |
| `[nzDanger]`  | set the danger status of button                                               | boolean                               | `false`     |               |

---

## Examples

### Type

There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in antd.

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

### Block Button

`nzBlock` property will make the button fit to its parent width.

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

### Danger Buttons

You can use `nzDanger` to mark button as danger status.

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

### Disabled

To mark a button as disabled, add the `disabled` property to the `Button`.

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

### Ghost Button

`nzGhost` property will make button's background transparent, it is common used in colored background.

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

### Icon

`nz-button` components can contain an `icon`. Just placing an `icon` within the `nz-button`

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

### Loading

A loading indicator can be added to a button by setting the `nzLoading` property on the `nz-button`.

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

### Multiple Buttons

If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into `nz-dropdown`.

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

### Size

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `nzSize` property to either `large` or `small` respectively. Omit the `nzSize` property for a button with the default size.

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
