---
category: Components
subtitle: 颜色选择器
type: 数据录入
title: ColorPicker
tag: 16.2.0
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PpY4RYNM8UcAAAAAAAAAAAAADrJ8AQ/original'
description: 用于颜色选择。
---

## 何时使用

当用户需要自定义颜色选择的时候使用。

## API

### nz-color-picker

| 参数                 | 说明                 | 类型                                               | 默认值      | 版本   |
| -------------------- | -------------------- | -------------------------------------------------- | ----------- | ------ |
| `[nzFormat]`         | 颜色格式             | `'rgb' \| 'hex' \| 'hsb'`                          | `'hex'`     |
| `[nzValue]`          | 颜色的值             | `string \| NzColor`                                | -           |
| `[nzSize]`           | 设置触发器大小       | `'large' \| 'small' \| 'default'`                  | `'default'` |
| `[nzDefaultValue]`   | 颜色默认的值         | `string \| NzColor`                                | -           |
| `[nzAllowClear]`     | 允许清除选择的颜色   | `boolean`                                          | `false`     |
| `[nzTrigger]`        | 颜色选择器的触发模式 | `'hover' \| 'click'`                               | `'click'`   |
| `[nzShowText]`       | 显示颜色文本         | `boolean`                                          | `false`     |
| `[nzOpen]`           | 是否显示弹出窗口     | `boolean`                                          | `false`     |
| `[nzDisabled]`       | 禁用颜色选择器       | `boolean`                                          | `false`     |
| `[nzDisabledAlpha]`  | 禁用透明度           | `boolean`                                          | `false`     |
| `[nzTitle]`          | 设置颜色选择器的标题 | `TemplateRef<void> \| string`                      | -           |
| `[nzPresets]`        | 预设的颜色           | `NzColorPickerPresetsItem[]`                       | -           | 21.0.0 |
| `(nzOnChange)`       | 颜色变化的回调       | `EventEmitter<{ color: NzColor; format: string }>` | -           |
| `(nzOnClear)`        | 清除的回调           | `EventEmitter<boolean>`                            | -           |
| `(nzOnFormatChange)` | 颜色格式变化的回调   | `EventEmitter<'rgb'｜'hex'｜'hsb'>`                | -           |
| `(nzOnOpenChange)`   | 打开颜色面板的回调   | `EventEmitter<boolean>`                            | -           |

### nz-color-block

| 参数          | 说明             | 类型                              | 默认值      |
| ------------- | ---------------- | --------------------------------- | ----------- |
| `[nzColor]`   | 模块的颜色       | `string`                          | `'#1677ff'` |
| `[nzSize]`    | 色彩块的大小     | `'large' \| 'small' \| 'default'` | `'default'` |
| `[nzOnClick]` | 点击色彩块的回调 | `EventEmitter<void>`              | -           |

### NzColor

| 参数          | 说明                                                           | 类型                                                    | 默认值 |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------------- | ------ |
| `toHex`       | 转换成 `hex` 格式字符，返回格式如：`1677ff`                    | `() => string`                                          | -      |
| `toHexString` | 转换成 `hex` 格式颜色字符串，返回格式如：`#1677ff`             | `() => string`                                          | -      |
| `toHsb`       | 转换成 `hsb` 对象                                              | `() => ({ h: number, s: number, b: number, a number })` | -      |
| `toHsbString` | 转换成 `hsb` 格式颜色字符串，返回格式如：`hsb(215, 91%, 100%)` | `() => string`                                          | -      |
| `toRgb`       | 转换成 `rgb` 对象                                              | `() => ({ r: number, g: number, b: number, a number })` | -      |
| `toRgbString` | 转换成 `rgb` 格式颜色字符串，返回格式如：`rgb(22, 119, 255)`   | `() => string`                                          | -      |

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 基本

最简单的用法。

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

### 色彩块

最简单的用法。

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

### 清除颜色

清除已选择的颜色。

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

### 禁用透明度

禁用颜色透明度。

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

### 禁用

设置为禁用状态。

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

### 自定义触发器

自定义颜色面板的触发器。

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

### 颜色编码

编码格式，支持 `HEX`、`HSB`、`RGB`。

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

### 预设颜色

使用 `nzPresets` 属性可以预设一些颜色，方便用户快速选择。每个预设组可以设置标签、颜色列表、默认展开状态和唯一键值。

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

### 显示颜色文本

渲染触发器的默认文本, `nzShowText` 为 `true` 时生效。

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

### 触发器尺寸大小

触发器有大、中、小三种尺寸

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

### 自定义触发事件

自定义颜色面板的触发事件，提供 `click` 和 `hover` 两个选项。

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

### 结合表单使用

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
