---
category: Components
type: 其他
subtitle: 水印
title: Watermark
cols: 1
tag: 15.1.0
cover: 'https://img.alicdn.com/imgextra/i2/O1CN01ozPPZp1wj9CwsVvDL_!!6000000006343-0-tps-1232-820.jpg'
description: 给页面的某个区域加上水印。
---

## 何时使用

- 页面需要添加水印标识版权时使用。
- 适用于防止信息盗用。

## API

### nz-watermark

| 参数        | 说明                                                        | 类型                 | 默认值                     |
| ----------- | ----------------------------------------------------------- | -------------------- | -------------------------- |
| `nzContent` | 水印文字内容                                                | `string \| string[]` | -                          |
| `nzWidth`   | 水印的宽度，`nzContent` 的默认值为自身的宽度                | `number`             | `120`                      |
| `nzHeight`  | 水印的高度，`nzContent` 的默认值为自身的高度                | `number`             | `64`                       |
| `nzRotate`  | 水印绘制时，旋转的角度，单位 `°`                            | `number`             | `-22`                      |
| `nzZIndex`  | 追加的水印元素的 z-index                                    | `number`             | `9`                        |
| `nzImage`   | 图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式) | `string`             | -                          |
| `nzFont`    | 文字样式                                                    | `FontType`           | FontType                   |
| `nzGap`     | 水印之间的间距                                              | `[number, number]`   | `[100, 100]`               |
| `nzOffset`  | 水印距离容器左上角的偏移量，默认为 `nzGap/2`                | `[number, number]`   | `[nzGap[0]/2, nzGap[1]/2]` |

### FontType

| 参数         | 说明     | 类型                                          | 默认值            |
| ------------ | -------- | --------------------------------------------- | ----------------- |
| `color`      | 字体颜色 | `string`                                      | `rgba(0,0,0,.15)` |
| `fontSize`   | 字体大小 | `number`                                      | `16`              |
| `fontWeight` | 字体粗细 | `'normal' \| 'light' \| 'weight' \| number`   | `'normal'`        |
| `fontFamily` | 字体类型 | `string`                                      | `'sans-serif'`    |
| `fontStyle`  | 字体样式 | `'none' \| 'normal' \| 'italic' \| 'oblique'` | `'normal'`        |

## FAQ

### 处理异常图片水印

当使用图片水印且图片加载异常时，可以同时添加 `nzContent` 防止水印失效。

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

## 代码示例

### 基本

最简单的用法。

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

### 自定义配置

通过自定义参数配置预览水印效果。

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

### 图片水印

通过 `nzImage` 指定图片地址。为保证图片高清且不被拉伸，请设置 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。

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

### 多行水印

通过 `nzContent` 设置 字符串数组 指定多行文字水印内容。

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
