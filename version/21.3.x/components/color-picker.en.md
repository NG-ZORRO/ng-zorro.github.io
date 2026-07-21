---
category: Components
type: Data Entry
title: ColorPicker
tag: 16.2.0
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PpY4RYNM8UcAAAAAAAAAAAAADrJ8AQ/original'
description: Used for color selection.
---

## When To Use

Used when the user needs to customize the color selection.

## API

### nz-color-picker

| Parameter            | Description                           | Type                                               | Default     | Version |
| -------------------- | ------------------------------------- | -------------------------------------------------- | ----------- | ------- |
| `[nzFormat]`         | Format of color                       | `'rgb' \| 'hex' \| 'hsb'`                          | `'hex'`     |
| `[nzValue]`          | Value of color                        | `string \| NzColor`                                | -           |
| `[nzSize]`           | Setting the trigger size              | `'large' \| 'small' \| 'default'`                  | `'default'` |
| `[nzDefaultValue]`   | Default value of color                | `string \| NzColor`                                | `false`     |
| `[nzAllowClear]`     | Allow clearing color selected         | `boolean`                                          | `false`     |
| `[nzTrigger]`        | ColorPicker trigger mode              | `'hover' \| 'click'`                               | `'click'`   |
| `[nzShowText]`       | Show color text                       | `boolean`                                          | `false`     |
| `[nzOpen]`           | Whether to show popups                | `boolean`                                          | `false`     |
| `[nzDisabled]`       | Disable ColorPicker                   | `boolean`                                          | `false`     |
| `[nzDisabledAlpha]`  | Disable Alpha                         | `boolean`                                          | `false`     |
| `[nzTitle]`          | Setting the title of the color picker | `TemplateRef<void> \| string`                      | -           |
| `[nzPresets]`        | Preset colors                         | `NzColorPickerPresetsItem[]`                       | -           | 21.0.0  |
| `(nzOnChange)`       | Callback when value is changed        | `EventEmitter<{ color: NzColor; format: string }>` | -           |
| `(nzOnClear)`        | Called when clear                     | `EventEmitter<boolean>`                            | -           |
| `(nzOnFormatChange)` | Callback when `format` is changed     | `EventEmitter<'rgb'｜'hex'｜'hsb'>`                | -           |
| `(nzOnOpenChange)`   | Callback for opening the color panel  | `EventEmitter<boolean>`                            | -           |

### nz-color-block

| Parameter     | Description                            | Type                              | Default     |
| ------------- | -------------------------------------- | --------------------------------- | ----------- |
| `[nzColor]`   | Module colors                          | `string`                          | `'#1677ff'` |
| `[nzSize]`    | Color block size                       | `'large' \| 'small' \| 'default'` | `'default'` |
| `[nzOnClick]` | Callbacks for clicking on color blocks | `EventEmitter<void>`              | -           |

### NzColor

| Parameter     | Description                                                                       | Type                                                    | Default |
| ------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------- | ------- |
| `toHex`       | Convert to `hex` format characters, the return type like: `1677ff`                | `() => string`                                          | -       |
| `toHexString` | Convert to `hex` format color string, the return type like: `#1677ff`             | `() => string`                                          | -       |
| `toHsb`       | Convert to `hsb` object                                                           | `() => ({ h: number, s: number, b: number, a number })` | -       |
| `toHsbString` | Convert to `hsb` format color string, the return type like: `hsb(215, 91%, 100%)` | `() => string`                                          | -       |
| `toRgb`       | Convert to `rgb` object                                                           | `() => ({ r: number, g: number, b: number, a number })` | -       |
| `toRgbString` | Convert to `rgb` format color string, the return type like: `rgb(22, 119, 255)`   | `() => string`                                          | -       |

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add
the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll
container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Basic

The simplest usage.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-basic',
  imports: [NzColorPickerModule],
  template: `<nz-color-picker />`
})
export class NzDemoColorPickerBasicComponent {}
```

### Color Block

Color Block.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-block',
  imports: [NzColorPickerModule],
  template: `
    <nz-color-block nzSize="small" />
    <nz-color-block />
    <nz-color-block nzSize="large" />
  `,
  styles: `
    nz-color-block {
      margin-right: 12px;
    }
  `
})
export class NzDemoColorPickerBlockComponent {}
```

### Clear Color

Clear Color.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-clear',
  imports: [NzColorPickerModule],
  template: `<nz-color-picker nzAllowClear nzTitle="Allow Clear" />`
})
export class NzDemoColorPickerClearComponent {}
```

### Disabled Alpha

Disabled color alpha.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-disable-alpha',
  imports: [NzColorPickerModule],
  template: `<nz-color-picker nzDisabledAlpha />`
})
export class NzDemoColorPickerDisableAlphaComponent {}
```

### Disabled

Set to disabled state.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-disable',
  imports: [NzColorPickerModule],
  template: `<nz-color-picker nzDisabled nzShowText />`
})
export class NzDemoColorPickerDisableComponent {}
```

### Custom Trigger

Triggers for customizing color panels.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-flip-flop',
  imports: [FormsModule, NzButtonModule, NzColorPickerModule],
  template: `
    <nz-color-picker [nzFlipFlop]="flipFlop" [(ngModel)]="color" />
    <ng-template #flipFlop>
      <button nz-button nzType="primary" [style.background-color]="color">Color</button>
    </ng-template>
  `,
  styles: `
    button {
      border: none;
    }
  `
})
export class NzDemoColorPickerFlipFlopComponent {
  color = '#1677ff';
}
```

### Color Format

Encoding formats, support `HEX`, `HSB`, `RGB`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-format',
  imports: [FormsModule, NzColorPickerModule],
  template: `
    <div class="format"> <nz-color-picker nzFormat="hex" [(ngModel)]="hex" /> HEX: {{ hex }} </div>
    <div class="format"> <nz-color-picker nzFormat="hsb" [(ngModel)]="hsb" /> HSB: {{ hsb }} </div>
    <div class="format"> <nz-color-picker nzFormat="rgb" [(ngModel)]="rgb" /> RGB: {{ rgb }} </div>
  `,
  styles: `
    .format {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }

    nz-color-picker {
      margin-right: 8px;
    }
  `
})
export class NzDemoColorPickerFormatComponent {
  hex: string = '#1677ff';
  hsb: string = 'hsb(215, 91%, 100%)';
  rgb: string = 'rgb(22, 119, 255)';
}
```

### Presets

Use `nzPresets` property to preset some colors for users to choose from quickly. Each preset group can have a label, color list, default open state, and unique key.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule, NzPresetColor } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-presets',
  imports: [NzColorPickerModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <h4>Basic Presets</h4>
        <nz-color-picker [nzPresets]="basicPresets" nzValue="#1677ff" />
      </div>

      <div>
        <h4>Multiple Preset Groups</h4>
        <nz-color-picker [nzPresets]="multiplePresets" nzValue="#52c41a" />
      </div>

      <div>
        <h4>Custom Preset with Collapsed State</h4>
        <nz-color-picker [nzPresets]="customPresets" nzValue="#722ed1" />
      </div>
    </div>
  `
})
export class NzDemoColorPickerPresetsComponent {
  basicPresets: NzPresetColor[] = [
    {
      label: 'Recommended',
      colors: [
        '#000000',
        '#000000E0',
        '#000000A6',
        '#00000073',
        '#00000040',
        '#00000026',
        '#0000001A',
        '#00000012',
        '#0000000A',
        '#00000005'
      ]
    },
    {
      label: 'Recent',
      colors: [
        '#F5222D',
        '#FA8C16',
        '#FADB14',
        '#8BBB11',
        '#52C41A',
        '#13A8A8',
        '#1677FF',
        '#2F54EB',
        '#722ED1',
        '#EB2F96'
      ]
    }
  ];

  multiplePresets: NzPresetColor[] = [
    {
      label: 'Primary Colors',
      colors: ['#1677ff', '#52c41a', '#faad14', '#f5222d', '#722ed1'],
      key: 'primary'
    },
    {
      label: 'Secondary Colors',
      colors: ['#13c2c2', '#eb2f96', '#fa541c', '#a0d911', '#2f54eb'],
      key: 'secondary'
    },
    {
      label: 'Neutral Colors',
      colors: ['#000000', '#434343', '#666666', '#999999', '#cccccc'],
      key: 'neutral'
    }
  ];

  customPresets: NzPresetColor[] = [
    {
      label: 'Brand Colors',
      colors: ['#1677ff', '#69c0ff', '#bae7ff', '#e6f7ff'],
      defaultOpen: true,
      key: 'brand'
    },
    {
      label: 'Success Colors',
      colors: ['#52c41a', '#95de64', '#b7eb8f', '#d9f7be'],
      defaultOpen: false,
      key: 'success'
    },
    {
      label: 'Warning Colors',
      colors: ['#faad14', '#ffc53d', '#ffd666', '#ffe58f'],
      defaultOpen: false,
      key: 'warning'
    },
    {
      label: 'Error Colors',
      colors: ['#f5222d', '#ff4d4f', '#ff7875', '#ffa39e'],
      defaultOpen: false,
      key: 'error'
    }
  ];
}
```

### Show Color Text

The default text of the rendering trigger, effective when `nzShowText` is `true`.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-show-text',
  imports: [NzColorPickerModule],
  template: `<nz-color-picker nzShowText />`
})
export class NzDemoColorPickerShowTextComponent {}
```

### Trigger size

The trigger has three sizes: large, medium and small.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-size',
  imports: [NzColorPickerModule],
  template: `
    <nz-color-picker nzSize="large" />
    <br />
    <br />
    <nz-color-picker />
    <br />
    <br />
    <nz-color-picker nzSize="small" />
  `
})
export class NzDemoColorPickerSizeComponent {}
```

### Custom Trigger Event

Triggers event for customizing color panels, provide options `click` and `hover`.

```typescript
import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'nz-demo-color-picker-trigger',
  imports: [NzColorPickerModule],
  template: `<nz-color-picker nzTrigger="hover" />`
})
export class NzDemoColorPickerTriggerComponent {}
```

### Use with forms

`<nz-color-picker formControlName="color"></nz-color-picker>`

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-color-picker-use',
  imports: [ReactiveFormsModule, NzButtonModule, NzColorPickerModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="4">name</nz-form-label>
        <nz-form-control [nzSpan]="16">
          <input nz-input formControlName="username" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4">color</nz-form-label>
        <nz-form-control [nzSpan]="16">
          <nz-color-picker formControlName="colorPicker" nzShowText />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button nz-button nzType="primary">submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoColorPickerUseComponent {
  private formBuilder = inject(FormBuilder);
  validateForm = this.formBuilder.group({
    username: ['color-picker', [Validators.required]],
    colorPicker: ['#1677ff']
  });

  submitForm(): void {
    console.log(this.validateForm.value);
  }
}
```
