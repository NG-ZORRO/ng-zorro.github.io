---
category: Components
type: Other
title: Affix
cover: 'https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg'
description: Make an element stick to viewport.
---

## When To Use

When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.

Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.

## API

### nz-affix

| Property           | Description                                                      | Type                    | Default  | Global Config |
| ------------------ | ---------------------------------------------------------------- | ----------------------- | -------- | ------------- |
| `[nzOffsetBottom]` | Pixels to offset from bottom when calculating position of scroll | `number`                | -        | ✅            |
| `[nzOffsetTop]`    | Pixels to offset from top when calculating position of scroll    | `number`                | `0`      | ✅            |
| `[nzTarget]`       | specifies the scrollable area dom node                           | `string \| HTMLElement` | `window` |
| `(nzChange)`       | Callback for when affix state is changed                         | `EventEmitter<boolean>` | -        |

**Note:** Children of `nz-affix` can not be `position: absolute`, but you can set `nz-affix` as `position: absolute`:

```html
<nz-affix style="position: absolute; top: 10px, left: 10px"> ... </nz-affix>
```

---

## Examples

### Basic

The simplest usage.

```typescript
import { Component } from '@angular/core';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-affix-basic',
  imports: [NzAffixModule, NzButtonModule],
  template: `
    <nz-affix [nzOffsetTop]="offsetTop">
      <button nz-button nzType="primary" (click)="setOffsetTop()">
        <span>Affix top</span>
      </button>
    </nz-affix>
    <br />
    <nz-affix [nzOffsetBottom]="nzOffsetBottom" (click)="setOffsetBottom()">
      <button nz-button nzType="primary">
        <span>Affix bottom</span>
      </button>
    </nz-affix>
  `
})
export class NzDemoAffixBasicComponent {
  offsetTop = 10;
  nzOffsetBottom = 10;

  setOffsetTop(): void {
    this.offsetTop += 10;
  }

  setOffsetBottom(): void {
    this.nzOffsetBottom += 10;
  }
}
```

### Callback

Callback with affixed state.

```typescript
import { Component } from '@angular/core';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-affix-on-change',
  imports: [NzAffixModule, NzButtonModule],
  template: `
    <nz-affix [nzOffsetTop]="120" (nzChange)="onChange($event)">
      <button nz-button>
        <span>120px to affix top</span>
      </button>
    </nz-affix>
  `
})
export class NzDemoAffixOnChangeComponent {
  onChange(status: boolean): void {
    console.log(status);
  }
}
```

### Container to scroll.

Set a `nzTarget` for 'nz-affix', which is listen to scroll event of target element (default is `window`).

```typescript
import { Component } from '@angular/core';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-affix-target',
  imports: [NzAffixModule, NzButtonModule],
  template: `
    <div class="scrollable-container" #target>
      <div class="background">
        <nz-affix [nzTarget]="target" id="affix-container-target">
          <button nz-button nzType="primary">
            <span>Fixed at the top of container</span>
          </button>
        </nz-affix>
      </div>
    </div>
  `,
  styles: `
    .scrollable-container {
      height: 100px;
      overflow-y: scroll;
    }

    .background {
      padding-top: 60px;
      height: 300px;
      background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);
    }
  `
})
export class NzDemoAffixTargetComponent {}
```
