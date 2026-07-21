---
category: Components
type: Navigation
title: Anchor
cover: 'https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg'
description: Hyperlinks to scroll on one page.
---

## When To Use

For displaying anchor hyperlinks on page and jumping between them.

## API

### nz-anchor

| Property             | Description                                                        | Type                                  | Default      | Global Config |
| -------------------- | ------------------------------------------------------------------ | ------------------------------------- | ------------ | ------------- |
| `[nzAffix]`          | Fixed mode of Anchor                                               | `boolean`                             | `true`       |
| `[nzBounds]`         | Bounding distance of anchor area, unit: px                         | `number`                              | `5`          | ✅            |
| `[nzOffsetTop]`      | Pixels to offset from top when calculating position of scroll      | `number`                              | `0`          | ✅            |
| `[nzShowInkInFixed]` | Whether show ink-balls in fixed mode                               | `boolean`                             | `false`      | ✅            |
| `[nzTargetOffset]`   | Anchor scroll offset, default as `offsetTop`                       | `number`                              | -            |               |
| `[nzContainer]`      | Scrolling container                                                | `string \| HTMLElement`               | `window`     |
| `[nzCurrentAnchor]`  | Customize the anchor highlight                                     | `string`                              | -            |               |
| `[nzDirection]`      | Set Anchor direction                                               | `'vertical' \| 'horizontal'`          | `'vertical'` |               |
| `(nzClick)`          | Click of Anchor item                                               | `EventEmitter<string>`                | -            |
| `(nzChange)`         | Listening for anchor link change                                   | `EventEmitter<string>`                | -            |               |
| `(nzScroll)`         | The scroll function that is triggered when scrolling to an anchor. | `EventEmitter<NzAnchorLinkComponent>` | -            |

### nz-link

| Property     | Description                               | Type                          |
| ------------ | ----------------------------------------- | ----------------------------- |
| `[nzHref]`   | target of hyperlink                       | `string`                      |
| `[nzTarget]` | Specifies where to display the linked URL | `string`                      |
| `[nzTitle]`  | content of hyperlink                      | `string \| TemplateRef<void>` |

---

## Examples

### Basic

The simplest usage.

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-basic',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor>
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorBasicComponent {}
```

### Customize the anchor highlight

Customize the anchor highlight.

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-customize-highlight',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor nzCurrentAnchor="#components-anchor-demo-static">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorCustomizeHighlightComponent {}
```

### Horizontal Anchor

Horizontally aligned anchors

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-horizontal-anchor',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor nzDirection="horizontal">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorHorizontalAnchorComponent {}
```

### Listening for anchor link change

Listening for anchor link change.

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-on-change',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor (nzChange)="handleChange($event)">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorOnChangeComponent {
  handleChange(link: string): void {
    console.log('Anchor:OnChange', link);
  }
}
```

### Customize the onClick event

Clicking on an anchor does not record history.

```typescript
import { Component } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-on-click',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor (nzClick)="handleClick($event)">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorOnClickComponent {
  handleClick(e: string): void {
    console.log(e);
  }
}
```

### Static Anchor

Do not change state when page is scrolling.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-static',
  imports: [NzAnchorModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-anchor [nzAffix]="false">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorStaticComponent {}
```

### Set Anchor scroll offset

Anchor target scroll to screen center.

```typescript
import { afterNextRender, Component, signal } from '@angular/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'nz-demo-anchor-target-offset',
  imports: [NzAnchorModule],
  template: `
    <nz-anchor [nzTargetOffset]="targetOffset()">
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo" />
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo" />
      <nz-link nzHref="#api" nzTitle="API">
        <nz-link nzHref="#nz-anchor" nzTitle="nz-anchor" />
        <nz-link nzHref="#nz-link" nzTitle="nz-link" />
      </nz-link>
    </nz-anchor>
  `
})
export class NzDemoAnchorTargetOffsetComponent {
  readonly targetOffset = signal(0);

  constructor() {
    afterNextRender(() => {
      this.targetOffset.set(window.innerHeight / 2);
    });
  }
}
```
