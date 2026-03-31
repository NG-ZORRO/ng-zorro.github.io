---
category: Components
type: Data Display
title: Carousel
cover: 'https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg'
description: A carousel component. Scales with its container.
---

## When To Use

- When there is a group of content on the same level.
- When there is insufficient content space, it can be used to save space in the form of a revolving door.
- Commonly used for a group of pictures/cards.

## API

### nz-carousel

| Property            | Description                                                                 | Type                                        | Default     | Global Config | Version |
| ------------------- | --------------------------------------------------------------------------- | ------------------------------------------- | ----------- | ------------- | ------- |
| `[nzAutoPlay]`      | Whether to scroll automatically                                             | `boolean`                                   | `false`     | ✅            |
| `[nzAutoPlaySpeed]` | Duration (milliseconds), does not scroll when set to 0                      | `number`                                    | `3000`      | ✅            |
| `[nzDotRender]`     | Dot render template                                                         | `TemplateRef<{ $implicit: number }>`        | -           |
| `[nzDotPosition]`   | The position of the dots, which can be one of `top` `bottom` `left` `right` | `'top' \| 'right' \| 'bottom' \| 'left'`    | `'bottom'`  | ✅            |
| `[nzDots]`          | Whether to show the dots at the bottom of the gallery                       | `boolean`                                   | `true`      | ✅            |
| `[nzEffect]`        | Transition effect                                                           | `'scrollx' \| 'fade'`                       | `'scrollx'` | ✅            |
| `[nzEnableSwipe]`   | Whether to support swipe gesture                                            | `boolean`                                   | `true`      | ✅            |
| `[nzLoop]`          | Whether to enable the carousel to go in a loop                              | `boolean`                                   | `true`      | ✅            |
| `[nzArrows]`        | Whether to show the arrow buttons                                           | `boolean`                                   | `false`     | -             | 20.3.0  |
| `(nzAfterChange)`   | Callback function called after the current index changes                    | `EventEmitter<number>`                      | -           |
| `(nzBeforeChange)`  | Callback function called before the current index changes                   | `EventEmitter{ from: number; to: number }>` | -           |

#### Methods

| Name                | Description                                |
| ------------------- | ------------------------------------------ |
| `goTo(slideNumber)` | Change current slide to given slide number |
| `next()`            | Change current slide to next slide         |
| `pre()`             | Change current slide to previous slide     |

### InjectionToken

| Token                           | Description                             | Parameters                       | Default Value |
| ------------------------------- | --------------------------------------- | -------------------------------- | ------------- |
| `NZ_CAROUSEL_CUSTOM_STRATEGIES` | Provide custom transitioning strategies | `CarouselStrategyRegistryItem[]` | -             |

### Customizing transition effects

You can provide strategies that extends `NzCarouselBaseStrategy` to implement custom transition effects.

---

## Examples

### Arrows for switching

Show the arrows for switching.

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-arrow',
  imports: [NzCarouselModule],
  template: ` <nz-carousel [nzEffect]="effect" nzArrows>
    @for (index of array; track index) {
      <div nz-carousel-content>
        <h3>{{ index }}</h3>
      </div>
    }
  </nz-carousel>`,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselArrowComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
```

### Scroll automatically

Timing of scrolling to the next card/picture.

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-autoplay',
  imports: [NzCarouselModule],
  template: `
    <nz-carousel nzAutoPlay>
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselAutoplayComponent {
  array = [1, 2, 3, 4];
}
```

### Basic

Basic usage.

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-basic',
  imports: [NzCarouselModule],
  template: `
    <nz-carousel [nzEffect]="effect">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselBasicComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
```

### Custom transition effect

Customize carousel transition effect by providing a class that extends `NzCarouselBaseStrategy`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  NZ_CAROUSEL_CUSTOM_STRATEGIES,
  NzCarouselFlipStrategy,
  NzCarouselModule,
  NzCarouselTransformNoLoopStrategy
} from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-carousel-custom',
  imports: [FormsModule, NzCarouselModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="strategy">
      <label nz-radio-button nzValue="transform-no-loop">Transform No Loop</label>
      <label nz-radio-button nzValue="flip">Flip</label>
      <label nz-radio-button nzValue="fade">Fade (built-in)</label>
    </nz-radio-group>
    <nz-carousel [nzEffect]="strategy">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    nz-radio-group {
      margin-bottom: 8px;
    }

    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `,
  providers: [
    {
      provide: NZ_CAROUSEL_CUSTOM_STRATEGIES,
      useValue: [
        { name: 'transform-no-loop', strategy: NzCarouselTransformNoLoopStrategy },
        { name: 'flip', strategy: NzCarouselFlipStrategy }
      ]
    }
  ]
})
export class NzDemoCarouselCustomComponent {
  strategy = 'transform-no-loop';
  array = [1, 2, 3, 4];
}
```

### Fade in

Slides use fade for transition.

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-fade',
  imports: [NzCarouselModule],
  template: `
    <nz-carousel nzEffect="fade">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselFadeComponent {
  array = [1, 2, 3, 4];
}
```

### Loop

Prevent the carousel to go in a loop

```typescript
import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'nz-demo-carousel-loop',
  imports: [NzCarouselModule],
  template: `
    <nz-carousel nzAutoPlay [nzEffect]="effect" [nzLoop]="false">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselLoopComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
```

### Position

There are four positions available.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-carousel-position',
  imports: [FormsModule, NzCarouselModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="dotPosition">
      <label nz-radio-button nzValue="bottom">Bottom</label>
      <label nz-radio-button nzValue="top">Top</label>
      <label nz-radio-button nzValue="left">Left</label>
      <label nz-radio-button nzValue="right">Right</label>
    </nz-radio-group>
    <nz-carousel [nzDotPosition]="dotPosition">
      @for (index of array; track index) {
        <div nz-carousel-content>
          <h3>{{ index }}</h3>
        </div>
      }
    </nz-carousel>
  `,
  styles: `
    nz-radio-group {
      margin-bottom: 8px;
    }

    [nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
      margin-bottom: 0;
      user-select: none;
    }
  `
})
export class NzDemoCarouselPositionComponent {
  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
}
```
