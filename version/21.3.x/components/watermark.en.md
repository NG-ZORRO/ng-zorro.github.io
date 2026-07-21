---
category: Components
type: Other
cols: 1
title: Watermark
tag: 15.1.0
cover: 'https://img.alicdn.com/imgextra/i2/O1CN01ozPPZp1wj9CwsVvDL_!!6000000006343-0-tps-1232-820.jpg'
description: Add specific text or patterns to the page.
---

## When To Use

- Use when the page needs to be watermarked to identify the copyright.
- Suitable for preventing information theft.

## API

### nz-watermark

| Property    | Description                                                                                       | Type                 | Default                    |
| ----------- | ------------------------------------------------------------------------------------------------- | -------------------- | -------------------------- |
| `nzContent` | Watermark text content                                                                            | `string \| string[]` | -                          |
| `nzWidth`   | The width of the watermark, the default value of `nzContent` is its own width                     | `number`             | `120`                      |
| `nzHeight`  | The height of the watermark, the default value of `nzContent` is its own height                   | `number`             | `64`                       |
| `nzRotate`  | When the watermark is drawn, the rotation Angle, unit `°`                                         | `number`             | `-22`                      |
| `nzZIndex`  | The z-index of the appended watermark element                                                     | `number`             | `9`                        |
| `nzImage`   | Image source, it is recommended to export 2x or 3x image, high priority (support base64 format)   | `string`             | -                          |
| `nzFont`    | Text style                                                                                        | `FontType`           | FontType                   |
| `nzGap`     | The spacing between watermarks                                                                    | `[number, number]`   | `[100, 100]`               |
| `nzOffset`  | The offset of the watermark from the upper left corner of the container. The default is `nzGap/2` | `[number, number]`   | `[nzGap[0]/2, nzGap[1]/2]` |

### FontType

| Property     | Description | Type                                          | Default           |
| ------------ | ----------- | --------------------------------------------- | ----------------- |
| `color`      | font color  | `string`                                      | `rgba(0,0,0,.15)` |
| `fontSize`   | font size   | `number`                                      | `16`              |
| `fontWeight` | font weight | `'normal' \| 'light' \| 'weight' \| number`   | `'normal'`        |
| `fontFamily` | font family | `string`                                      | `'sans-serif'`    |
| `fontStyle`  | font style  | `'none' \| 'normal' \| 'italic' \| 'oblique'` | `'normal'`        |

## FAQ

### Handle abnormal image watermarks

When using an image watermark and the image loads abnormally, you can add `nzContent` at the same time to prevent the watermark from becoming invalid.

```html
<nz-watermark
  [nzWidth]="212"
  [nzHeight]="32"
  nzContent="NG Ant Design"
  nzImage="https://img.alicdn.com/imgextra/i3/O1CN01UR3Zkq1va9fnZsZcr_!!6000000006188-55-tps-424-64.svg"
>
  <div style="height: 500px"></div>
</nz-watermark>
```

---

## Examples

### Basic

The most basic usage.

```typescript
import { Component } from '@angular/core';

import { NzWatermarkModule } from 'ng-zorro-antd/watermark';

@Component({
  selector: 'nz-demo-watermark-basic',
  imports: [NzWatermarkModule],
  template: `
    <nz-watermark nzContent="NG Ant Design">
      <div style="height: 500px"></div>
    </nz-watermark>
  `
})
export class NzDemoWatermarkBasicComponent {}
```

### Custom configuration

Preview the watermark effect by configuring custom parameters.

```typescript
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NzColor, NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FontType, NzWatermarkModule } from 'ng-zorro-antd/watermark';

@Component({
  selector: 'nz-demo-watermark-custom',
  imports: [
    ReactiveFormsModule,
    NzColorPickerModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSliderModule,
    NzTypographyModule,
    NzWatermarkModule
  ],
  template: `
    <div style="display: flex;">
      <nz-watermark
        [nzContent]="form.value.content!"
        [nzRotate]="form.value.rotate!"
        [nzZIndex]="form.value.zIndex!"
        [nzGap]="gap"
        [nzOffset]="offset"
        [nzFont]="font"
      >
        <p nz-typography style="z-index: 10; position:relative;">
          The light-speed iteration of the digital world makes products more complex. However, human consciousness and
          attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be
          the consistent direction of Ant Design.
        </p>
        <p nz-typography style="z-index: 10; position:relative;">
          Natural user cognition: According to cognitive psychology, about 80% of external information is obtained
          through visual channels. The most important visual elements in the interface design, including layout, colors,
          illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user&apos;s cognitive
          cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels
          such as hearing, touch can create a richer and more natural product experience.
        </p>
        <p nz-typography style="z-index: 10; position:relative;">
          Natural user behavior: In the interaction with the system, the designer should fully understand the
          relationship between users, system roles, and task objectives, and also contextually organize system functions
          and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and
          sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to
          save users&apos; mental and physical resources and make human-computer interaction more natural.
        </p>
        <img
          style="z-index: 30; position:relative; width: 100%; max-width: 800px;"
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
          alt="示例图片"
        />
      </nz-watermark>
      <nz-divider nzType="vertical" />
      <form nz-form nzLayout="vertical" [formGroup]="form">
        <nz-form-item>
          <nz-form-label>Content</nz-form-label>
          <nz-form-control>
            <input nz-input type="text" formControlName="content" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>Color</nz-form-label>
          <nz-form-control>
            <nz-color-picker [nzValue]="color" (nzOnChange)="changeColor($event)" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>FontSize</nz-form-label>
          <nz-form-control>
            <nz-slider formControlName="fontSize" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>zIndex</nz-form-label>
          <nz-form-control>
            <nz-slider formControlName="zIndex" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>Rotate</nz-form-label>
          <nz-form-control>
            <nz-slider [nzMin]="-180" [nzMax]="180" formControlName="rotate" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>Gap</nz-form-label>
          <nz-form-control>
            <nz-input-number formControlName="gapX" />
            <nz-input-number formControlName="gapY" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>Offset</nz-form-label>
          <nz-form-control>
            <nz-input-number formControlName="offsetX" />
            <nz-input-number formControlName="offsetY" />
          </nz-form-control>
        </nz-form-item>
      </form>
    </div>
  `,
  styles: `
    nz-watermark {
      flex: 1 1 auto;
    }

    nz-divider {
      height: auto;
      margin: 0 20px;
    }

    form {
      flex: 0 0 280px;
    }

    nz-input-number {
      margin-right: 12px;
      width: 40%;
    }
  `
})
export class NzDemoWatermarkCustomComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    content: 'NG Ant Design',
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gapX: 100,
    gapY: 100,
    offsetX: 50,
    offsetY: 50
  });
  color: string = 'rgba(0,0,0,.15)';
  font: FontType = {
    color: 'rgba(0,0,0,.15)',
    fontSize: 16
  };
  gap: [number, number] = [100, 100];
  offset: [number, number] = [50, 50];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe(item => {
      this.font = {
        fontSize: item.fontSize,
        color: this.color
      };
      this.gap = [item.gapX!, item.gapY!];
      this.offset = [item.offsetX!, item.offsetY!];
      this.cdr.markForCheck();
    });
  }

  changeColor(value: { color: NzColor; format: string }): void {
    this.color = value.color.toRgbString();
    this.font = {
      fontSize: this.form.value.fontSize,
      color: value.color.toRgbString()
    };
    this.cdr.markForCheck();
  }
}
```

### Image watermark

Specify the image address via `nzImage`. To ensure that the image is high definition and not stretched, set the width and height, and upload at least twice the width and height of the logo image address.

```typescript
import { Component } from '@angular/core';

import { NzWatermarkModule } from 'ng-zorro-antd/watermark';

@Component({
  selector: 'nz-demo-watermark-image',
  imports: [NzWatermarkModule],
  template: `
    <nz-watermark
      [nzWidth]="212"
      [nzHeight]="32"
      nzImage="https://img.alicdn.com/imgextra/i3/O1CN01UR3Zkq1va9fnZsZcr_!!6000000006188-55-tps-424-64.svg"
    >
      <div style="height: 500px"></div>
    </nz-watermark>
  `
})
export class NzDemoWatermarkImageComponent {}
```

### Multi-line watermark

Use `nzContent` to set a string array to specify multi-line text watermark content.

```typescript
import { Component } from '@angular/core';

import { NzWatermarkModule } from 'ng-zorro-antd/watermark';

@Component({
  selector: 'nz-demo-watermark-multi-line',
  imports: [NzWatermarkModule],
  template: `
    <nz-watermark [nzContent]="['Angular', 'NG Ant Design']">
      <div style="height: 500px"></div>
    </nz-watermark>
  `
})
export class NzDemoWatermarkMultiLineComponent {}
```
