---
category: Components
type: Data Entry
title: Slider
cover: 'https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg'
description: A Slider component for displaying current value and intervals in range.
---

## When To Use

To input a value in a range.

## API

### nz-slider

| Property               | Description                                                                                                                                          | Type                                             | Default                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| `[nzDisabled]`         | If true, the slider will not be interactable.                                                                                                        | `boolean`                                        | `false`                                                                          |
| `[nzDots]`             | Whether the thumb can drag over tick only.                                                                                                           | `boolean`                                        | `false`                                                                          |
| `[nzIncluded]`         | Make effect when `marks` not null，`true` means containment and `false` means coordinative                                                           | `boolean`                                        | `true`                                                                           |
| `[nzMarks]`            | Tick mark of Slider, type of key must be `number`, and must in closed interval `[min, max]` ，each mark can declare its own style.                   | `object`                                         | `{ number: string/HTML }` or `{ number: { style: object, label: string/HTML } }` |
| `[nzMax]`              | The maximum value the slider can slide to                                                                                                            | `number`                                         | `100`                                                                            |
| `[nzMin]`              | The minimum value the slider can slide to.                                                                                                           | `number`                                         | `0`                                                                              |
| `[nzRange]`            | dual thumb mode                                                                                                                                      | `boolean`                                        | `false`                                                                          |
| `[nzStep]`             | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null`. | `number \| null`                                 | `1`                                                                              |
| `[nzTipFormatter]`     | Slider will pass its value to `tipFormatter`, and display its value in Tooltip, and hide Tooltip when return value is null.                          | `(value: number) => string \| TemplateRef<void>` | -                                                                                |
| `[ngModel]`            | The value of slider. When `range` is `false`, use `number`, otherwise, use `[number, number]`                                                        | `number \| number[]`                             | -                                                                                |
| `[nzVertical]`         | If true, the slider will be vertical.                                                                                                                | `boolean`                                        | `false`                                                                          |
| `[nzReverse]`          | Reverse the component                                                                                                                                | `boolean`                                        | `false`                                                                          |
| `[nzTooltipVisible]`   | When set to `always` tooltips are always displayed. When set to `never` they are never displayed                                                     | `'default' \| 'always' \| 'never'`               | `'default'`                                                                      |
| `[nzTooltipPlacement]` | Set the default placement of Tooltip                                                                                                                 | `string`                                         |                                                                                  |
| `(nzOnAfterChange)`    | Fire when `onmouseup` is fired.                                                                                                                      | `EventEmitter<number[] \| number>`               | -                                                                                |
| `(ngModelChange)`      | Callback function that is fired when the user changes the slider's value.                                                                            | `EventEmitter<number[] \| number>`               | -                                                                                |

---

## Examples

### Basic

Basic slider. When `nzRange` is `true`, display as dual thumb mode. When `nzDisabled` is `true`, the slider will not be interactive.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-slider-basic',
  imports: [FormsModule, NzSliderModule, NzSwitchModule],
  template: `
    <nz-slider [(ngModel)]="value1" [nzDisabled]="disabled" />
    <nz-slider nzRange [(ngModel)]="value2" [nzDisabled]="disabled" />
    Disabled:
    <nz-switch nzSize="small" [(ngModel)]="disabled" />
  `
})
export class NzDemoSliderBasicComponent {
  disabled = false;
  value1 = 30;
  value2 = [20, 50];
}
```

### Event

The `nzOnChange` callback function will fire when the user changes the slider's value. The `nzOnAfterChange` callback function will fire when `onmouseup` fired.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-event',
  imports: [FormsModule, NzSliderModule],
  template: `
    <nz-slider [(ngModel)]="singleValue" (ngModelChange)="onChange($event)" (nzOnAfterChange)="onAfterChange($event)" />
    <nz-slider
      nzRange
      [nzStep]="10"
      [(ngModel)]="rangeValue"
      (ngModelChange)="onChange($event)"
      (nzOnAfterChange)="onAfterChange($event)"
    />
  `
})
export class NzDemoSliderEventComponent {
  singleValue = 30;
  rangeValue = [20, 50];

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value: number[] | number): void {
    console.log(`onAfterChange: ${value}`);
  }
}
```

### Slider with icon

You can add an icon beside the slider to make it meaningful.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-icon-slider',
  imports: [FormsModule, NzIconModule, NzSliderModule],
  template: `
    <div class="icon-wrapper test-class">
      <nz-icon nzType="frown" [class.icon-highlight]="preHighLight" />
      <nz-slider [nzMin]="0" [nzMax]="20" [(ngModel)]="sliderValue" />
      <nz-icon nzType="smile" [class.icon-highlight]="nextHighLight" />
    </div>
  `,
  styles: `
    .icon-wrapper {
      position: relative;
      padding: 0 30px;
    }

    nz-icon {
      position: absolute;
      top: -2px;
      width: 16px;
      height: 16px;
      line-height: 1;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.25);
    }

    nz-icon:first-child {
      left: 0;
    }

    nz-icon:last-child {
      right: 0;
    }

    .icon-highlight {
      color: rgba(0, 0, 0, 0.45);
    }
  `
})
export class NzDemoSliderIconSliderComponent implements OnInit {
  min = 0;
  max = 20;
  mid = parseFloat(((this.max - this.min) / 2).toFixed(5));
  preHighLight = false;
  nextHighLight = false;
  _sliderValue = 0;

  set sliderValue(value: number) {
    this._sliderValue = value;
    this.highlightIcon();
  }

  get sliderValue(): number {
    return this._sliderValue;
  }

  ngOnInit(): void {
    this.sliderValue = 0;
  }

  highlightIcon(): void {
    const lower = this._sliderValue >= this.mid;
    this.preHighLight = !lower;
    this.nextHighLight = lower;
  }
}
```

### Slider with InputNumber

Synchronize with [InptNumber](/components/input-number/) component.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-input-number',
  imports: [FormsModule, NzGridModule, NzInputNumberModule, NzSliderModule],
  template: `
    <nz-row nzGutter="8">
      <nz-col nzSpan="12">
        <nz-slider [nzMin]="1" [nzMax]="20" [(ngModel)]="value1" />
      </nz-col>
      <div nz-col nzSpan="4">
        <nz-input-number [nzMin]="1" [nzMax]="20" [(ngModel)]="value1" />
      </div>
    </nz-row>

    <nz-row nzGutter="8">
      <nz-col nzSpan="12">
        <nz-slider [nzMin]="0" [nzMax]="1" [nzStep]="0.01" [(ngModel)]="value2" />
      </nz-col>
      <nz-col nzSpan="4">
        <nz-input-number [nzMin]="0" [nzMax]="1" [nzStep]="0.01" [(ngModel)]="value2" />
      </nz-col>
    </nz-row>
  `
})
export class NzDemoSliderInputNumberComponent {
  value1 = 1;
  value2 = 0;
}
```

### Graduated slider

Using `nzMarks` property to mark a graduated slider, use `ngModel` to specify the position of thumb. When `nzIncluded` is false, means that different thumbs are coordinated. When `nzStep` is null, users can only slide the thumbs onto marks.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMarks, NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-mark',
  imports: [FormsModule, NzButtonModule, NzSliderModule],
  template: `
    <h4>included=true</h4>
    <nz-slider [nzMarks]="marks" [ngModel]="37" />
    <nz-slider [nzMarks]="marks" nzIncluded nzRange [ngModel]="[26, 37]" />
    <h4>included=false</h4>
    <nz-slider [nzMarks]="marks" [nzIncluded]="false" [ngModel]="37" />
    <h4>marks & step</h4>
    <nz-slider [nzMarks]="marks" [nzStep]="10" [ngModel]="37" />
    <h4>step=null || dots=true</h4>
    <nz-slider [nzMarks]="marks" [nzStep]="null" [ngModel]="37" />
    <nz-slider [nzMarks]="marks" nzDots [ngModel]="37" />
    Change nzMarks dynamically:
    <button nz-button (click)="changeMarks()">Change nzMarks</button>
  `,
  styles: `
    h4 {
      margin: 0 0 16px;
    }

    .ant-slider-with-marks {
      margin-bottom: 44px;
    }
  `
})
export class NzDemoSliderMarkComponent {
  marks: NzMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };

  changeMarks(): void {
    this.marks = {
      20: '20%',
      99: '99%'
    };
  }
}
```

### Reverse

Using `nzReverse` to render slider reversely.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzMarks, NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-slider-reverse',
  imports: [FormsModule, NzSliderModule, NzSwitchModule],
  template: `
    <nz-slider [ngModel]="30" [nzReverse]="reverse" />
    <nz-slider nzRange [ngModel]="[20, 50]" [nzReverse]="reverse" />
    <nz-slider [nzMarks]="marks" [ngModel]="30" [nzReverse]="reverse" />
    Reversed:
    <nz-switch nzSize="small" [(ngModel)]="reverse" />
  `,
  styles: `
    .ant-slider-with-marks {
      margin-bottom: 44px;
    }
  `
})
export class NzDemoSliderReverseComponent {
  reverse = true;

  marks: NzMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };
}
```

### Customerize tooltip

Use `nzTipFormatter` to format content of `Toolip`. If `nzTipFormatter` is null, hide it.

```typescript
import { Component } from '@angular/core';

import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-tip-formatter',
  imports: [NzSliderModule],
  template: `
    <nz-slider [nzTipFormatter]="formatter" />
    <nz-slider [nzTipFormatter]="null" />
    <nz-slider [nzTipFormatter]="titleTemplate" />
    <ng-template #titleTemplate let-value>
      <span>Slider value: {{ value }}</span>
    </ng-template>
  `
})
export class NzDemoSliderTipFormatterComponent {
  formatter(value: number): string {
    return `${value}%`;
  }
}
```

### Control visibility of Tooltip

When `nzTooltipVisible` is `always`, Tooltip will show always. And set to `never`, tooltip would never show, even when user is dragging or hovering.

```typescript
import { Component } from '@angular/core';

import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-tooltip',
  imports: [NzSliderModule],
  template: `
    <nz-slider nzTooltipVisible="always" />
    <nz-slider nzTooltipVisible="never" />
  `
})
export class NzDemoSliderTooltipComponent {}
```

### Vertical

The vertical Slider.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-vertical',
  imports: [FormsModule, NzSliderModule],
  template: `
    <div [style]="{ height: '300px' }">
      <div [style]="style">
        <nz-slider nzVertical [ngModel]="30" />
      </div>
      <div [style]="style">
        <nz-slider nzVertical nzRange [nzStep]="10" [ngModel]="[20, 50]" />
      </div>
      <div [style]="style">
        <nz-slider nzVertical nzRange [nzMarks]="marks" [ngModel]="[26, 37]" />
      </div>
    </div>
  `
})
export class NzDemoSliderVerticalComponent {
  style = {
    float: 'left',
    height: '300px',
    marginLeft: '70px'
  };

  marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };
}
```
