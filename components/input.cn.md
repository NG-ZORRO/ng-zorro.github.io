---
category: Components
subtitle: 输入框
type: 数据录入
title: Input
tag: updated
cover: 'https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg'
description: 通过鼠标或键盘输入内容，是最基础的表单域的包装。
---

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## API

### [nz-input]

`[nz-input]` 可以使用所有的 W3C 标准下的所有 [使用方式](https://www.w3schools.com/tags/tag_input.asp) 和 Angular 对 input 的全部额外功能支持。

| 参数               | 说明                                                                                               | 类型                                                     | 默认值       | 版本   |
| ------------------ | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------ | ------ |
| `[nzSize]`         | 控件大小。注：标准表单内的输入框大小限制为 `large`                                                 | `'large' \| 'small' \| 'default'`                        | `'default'`  |
| ~~`[nzAutosize]`~~ | ~~只可以用于 `textarea`，自适应内容高度，可设置为 `boolean` 或对象：`{ minRows: 2, maxRows: 6 }`~~ | ~~`boolean \| { minRows: number, maxRows: number }`~~    | ~~`false`~~  |
| `[nzVariant]`      | 形态变体                                                                                           | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'` | `'outlined'` | 20.0.0 |
| `[nzStatus]`       | 设置校验状态                                                                                       | `'error' \| 'warning'`                                   | -            |

#### 方法

通过 `ViewChild` 等方法获得实例后调用

| 名称           | 描述     | 参数                                                                         |
| -------------- | -------- | ---------------------------------------------------------------------------- |
| focus(option?) | 获取焦点 | `(option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' })` |
| blur()         | 移除焦点 | -                                                                            |

### nz-input-wrapper

当需要为 `[nz-input]` 添加额外功能时使用。

| 参数              | 说明                         | 类型                     | 默认值  | 版本   |
| ----------------- | ---------------------------- | ------------------------ | ------- | ------ |
| `[nzAddonBefore]` | 带标签的 input，设置前置标签 | `string`                 | -       |
| `[nzAddonAfter]`  | 带标签的 input，设置后置标签 | `string`                 | -       |
| `[nzPrefix]`      | 带有前缀图标的 input         | `string`                 | -       |
| `[nzSuffix]`      | 带有后缀图标的 input         | `string`                 | -       |
| `[nzAllowClear]`  | 可以点击清除图标删除内容     | `boolean`                | `false` |
| `[nzShowCount]`   | 是否显示字符计数             | `boolean`                | `false` | 21.2.0 |
| `[nzCount]`       | 自定义字符计数配置           | `NzCountConfig`          | -       | 21.2.0 |
| `(nzClear)`       | 点击清除图标时触发           | `OutputEmitterRef<void>` | -       |

#### NzCountConfig

```ts
export interface NzCountConfig {
  // 最大字符数，超出后标红但不会截断
  max?: number;
  // 自定义字符计数策略
  strategy?: (value: string) => number;
  // 当字符数超出 `max` 时的裁剪逻辑
  exceedFormatter?: (value: string, config: { max: number }) => string;
}
```

### nz-input-password

可使用 `nz-input-wrapper` 的所有属性。

| 参数                   | 说明                       | 类型                        | 默认值  |
| ---------------------- | -------------------------- | --------------------------- | ------- |
| `[nzVisibilityToggle]` | 是否显示切换按钮           | `boolean`                   | `true`  |
| `[nzVisible]`          | 是否显示密码，支持双向绑定 | `boolean`                   | `false` |
| `(nzVisibleChange)`    | 是否显示密码变更事件       | `OutputEmitterRef<boolean>` | -       |

### nz-input-search

可使用 `nz-input-wrapper` 的所有属性。

| 参数              | 说明                                                             | 类型                                                          | 默认值  |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- | ------- |
| `[nzEnterButton]` | 是否有确认按钮，可设为按钮文字。该属性会与 `nzAddonAfter` 冲突。 | `boolean \| string`                                           | `false` |
| `[nzLoading]`     | 搜索 loading                                                     | `boolean`                                                     | `false` |
| `(nzSearch)`      | 点击搜索图标、清除图标，或按下回车键时的事件                     | `{ value: string, event: Event, source: 'clear' \| 'input' }` |         |

### nz-input-group

> ⚠️ `nz-input-group` 已在 `v20.0.0` 中废弃，将在 `v22.0.0` 中移除，请使用 `nz-input-wrapper` 组件。

| 参数              | 说明                                                          | 类型                              | 默认值      |
| ----------------- | ------------------------------------------------------------- | --------------------------------- | ----------- |
| `[nzAddOnAfter]`  | 带标签的 input，设置后置标签，可以与 `nzAddOnBefore` 配合使用 | `string \| TemplateRef<void>`     | -           |
| `[nzAddOnBefore]` | 带标签的 input，设置前置标签，可以与 `nzAddOnAfter` 配合使用  | `string \| TemplateRef<void>`     | -           |
| `[nzPrefix]`      | 带有前缀图标的 input，可以与 `nzSuffix` 配合使用              | `string \| TemplateRef<void>`     | -           |
| `[nzSuffix]`      | 带有后缀图标的 input，可以与 `nzPrefix` 配合使用              | `string \| TemplateRef<void>`     | -           |
| `[nzSearch]`      | 是否用搜索框                                                  | `boolean`                         | `false`     |
| `[nzSize]`        | `nz-input-group` 中所有的 `nz-input` 的大小                   | `'large' \| 'small' \| 'default'` | `'default'` |
| `[nzStatus]`      | 设置校验状态                                                  | `'error' \| 'warning'`            | -           |

### nz-textarea-count

| 参数                        | 说明                               | 类型                    | 默认值          |
| --------------------------- | ---------------------------------- | ----------------------- | --------------- |
| `[nzMaxCharacterCount]`     | `textarea` 数字提示显示的最大值    | `number`                | -               |
| `[nzComputeCharacterCount]` | 自定义计算 `characterCount` 的函数 | `(v: string) => number` | `v => v.length` |

### nz-input-otp

| Property        | Description                                       | Type                              | Default     |
| --------------- | ------------------------------------------------- | --------------------------------- | ----------- |
| `[disabled]`    | 是否禁用                                          | boolean                           | `false`     |
| `[nzFormatter]` | 格式化展示，留空字段会被 ` ` 填充                 | `(value: string) => string`       | -           |
| `[nzMask]`      | 自定义展示，和 `formatter` 的区别是不会修改原始值 | `boolean  \| null`                | `null`      |
| `[nzLength]`    | 输入元素数量                                      | `number`                          | `6`         |
| `[nzStatus]`    | 设置校验状态                                      | `'error' \| 'warning'`            | -           |
| `[nzSize]`      | 输入框大小                                        | `'large' \| 'small' \| 'default'` | `'default'` |

## Q&A

### 如何使用紧凑型输入框组合？

从 v20 版本开始，`nz-input-group` 不再直接支持紧凑模式，你可以使用 [nz-space-compact](/components/space/zh#components-space-demo-compact) 替代。

### NG0951 错误

若通过 `ngTemplateOutlet` 等方式将 `nz-input` 动态渲染到 `nz-input-wrapper` 内部，可能会触发 `NG0951` 错误。
这是由于 Angular 的内容投影（Content Projection）与子查询（Child Query）机制是静态的，无法识别动态渲染的组件（参考：[angular/angular#64504](https://github.com/angular/angular/issues/64504)）。

鉴于 `nz-input-wrapper` 依赖于内容子查询来定位 `nz-input`，建议将 `nz-input-wrapper` 与 `nz-input` 视为一个整体，避免拆分渲染。

```html
@if (need_affix_or_addon) {
<nz-input-wrapper nzAddonBefore="...">
  <input nz-input />
</nz-input-wrapper>
} @else {
<input nz-input />
}
```

---

## 代码示例

### 前置/后置标签

用于配置一些固定组合。

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-input-addon',
  imports: [NzInputModule, NzIconModule, NzSelectModule, NzCascaderModule, FormsModule],
  template: `
    <nz-input-wrapper nzAddonBefore="http://" nzAddonAfter=".com">
      <input nz-input [(ngModel)]="value" />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper>
      <nz-select nzInputAddonBefore ngModel="Http://">
        <nz-option nzLabel="Http://" nzValue="Http://" />
        <nz-option nzLabel="Https://" nzValue="Https://" />
      </nz-select>
      <input nz-input [(ngModel)]="value" />
      <nz-select nzInputAddonAfter ngModel=".com">
        <nz-option nzLabel=".com" nzValue=".com" />
        <nz-option nzLabel=".jp" nzValue=".jp" />
        <nz-option nzLabel=".cn" nzValue=".cn" />
        <nz-option nzLabel=".org" nzValue=".org" />
      </nz-select>
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper>
      <input nz-input [(ngModel)]="value" />
      <nz-icon nzInputAddonBefore nzType="setting" />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper nzAddonBefore="http://" nzSuffix=".com">
      <input nz-input [(ngModel)]="value" />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper>
      <nz-cascader nzInputAddonBefore [nzOptions]="[]" nzPlaceHolder="cascader" [style.width.px]="150" />
      <input nz-input [(ngModel)]="value" />
    </nz-input-wrapper>
  `
})
export class NzDemoInputAddonComponent {
  readonly value = signal('mysite');
}
```

### 定制计数能力

在某些场景下，需要定制计数能力（例如 emoji 长度以 1 计算），可以通过 `nzShowCount` 属性来实现。在该模式下，通过 `nzCount` 属性来超出原生 `maxLength` 的限制。

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-advance-count',
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="form" nzLayout="vertical">
      <nz-form-item>
        <nz-form-label><h4>ShowCount</h4></nz-form-label>
        <nz-form-control>
          <nz-input-wrapper nzAllowClear nzShowCount>
            <input nz-input formControlName="test_0" />
          </nz-input-wrapper>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label><h4>Exceed Max</h4></nz-form-label>
        <nz-form-control>
          <nz-input-wrapper nzShowCount [nzCount]="{ max: 10 }">
            <input nz-input formControlName="test_1" />
          </nz-input-wrapper>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label><h4>Emoji count as length 1</h4></nz-form-label>
        <nz-form-control>
          <nz-input-wrapper nzShowCount [nzCount]="{ max: 6, strategy: countStrategyFn }">
            <input nz-input formControlName="test_2" />
          </nz-input-wrapper>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label><h4>Not exceed max</h4></nz-form-label>
        <nz-form-control>
          <nz-input-wrapper
            nzShowCount
            [nzCount]="{ max: 10, strategy: countStrategyFn, exceedFormatter: exceedFormatterFn }"
          >
            <input nz-input formControlName="test_3" />
          </nz-input-wrapper>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label><h4>nz-input-password</h4></nz-form-label>
        <nz-form-control>
          <nz-input-password
            [nzVisibilityToggle]="false"
            nzShowCount
            [nzCount]="{ max: 20, strategy: countStrategyFn, exceedFormatter: exceedFormatterFn }"
          >
            <input nz-input formControlName="test_4" />
          </nz-input-password>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label><h4>nz-input-search</h4></nz-form-label>
        <nz-form-control>
          <nz-input-search nzShowCount [nzCount]="{ max: 20, strategy: countStrategyFn }">
            <input nz-input formControlName="test_5" />
          </nz-input-search>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoInputAdvanceCountComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    test_0: ['Angular & NG-ZORRO'],
    test_1: ['Angular & NG-ZORRO'],
    test_2: ['🔥🔥🔥'],
    test_3: ['AAA🔥🔥🔥'],
    test_4: ['BBB'],
    test_5: ['CCC']
  });

  countStrategyFn: (v: string) => number = v => runes(v).length;
  exceedFormatterFn: (cur: string, config: { max: number }) => string = (v, { max }) => {
    const result = runes(v).slice(0, max).join('');
    return result;
  };
}

function runes(str: string): string[] {
  return [...str];
}
```

### 带移除图标

带移除图标的输入框，点击图标删除所有内容。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-allow-clear',
  imports: [FormsModule, NzInputModule, NzIconModule],
  template: `
    <nz-input-wrapper nzAllowClear>
      <input nz-input [(ngModel)]="inputValue" placeholder="input with clear icon" />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper nzAllowClear>
      <input nz-input [(ngModel)]="inputValue" placeholder="input with custom clear icon" />
      <nz-icon nzInputClearIcon nzType="close" />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper nzAllowClear>
      <textarea nz-input [(ngModel)]="textValue" placeholder="textarea with clear icon"></textarea>
    </nz-input-wrapper>
  `
})
export class NzDemoInputAllowClearComponent {
  inputValue: string | null = null;
  textValue: string | null = null;
}
```

### 适应文本高度的文本域

使用 `@angular/cdk` 提供的 [`CdkTextareaAutosize`](https://material.angular.dev/cdk/text-field/overview#automatically-resizing-a-lesstextareagreater) 指令实现文本域高度自适应。

```typescript
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-autosize-textarea',
  imports: [NzInputModule, CdkTextareaAutosize],
  template: `
    <textarea nz-input placeholder="Autosize height based on content lines" cdkTextareaAutosize></textarea>
    <br />
    <br />
    <textarea
      nz-input
      placeholder="Autosize height with minimum and maximum number of lines"
      cdkTextareaAutosize
      cdkAutosizeMinRows="2"
      cdkAutosizeMaxRows="6"
    ></textarea>
    <br />
    <br />
    <textarea
      nz-input
      placeholder="Controlled autosize"
      cdkTextareaAutosize
      cdkAutosizeMinRows="3"
      cdkAutosizeMaxRows="5"
    ></textarea>
  `
})
export class NzDemoInputAutosizeTextareaComponent {}
```

### 基本使用

基本使用。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-basic',
  imports: [FormsModule, NzInputModule],
  template: ` <input nz-input placeholder="Basic usage" [(ngModel)]="value" /> `
})
export class NzDemoInputBasicComponent {
  value?: string;
}
```

### 紧凑模式

使用 `<nz-space-compact>` 创建紧凑模式，更多请查看[文档](/components/space/zh#nz-space-compact)。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule, NzSelectOptionInterface } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-input-compact',
  imports: [NzInputModule, NzIconModule, NzSelectModule, NzSpaceModule, NzButtonModule, FormsModule],
  template: `
    <nz-space-compact>
      <input nz-input value="26888888" />
    </nz-space-compact>
    <br />
    <br />
    <nz-space-compact>
      <input nz-input value="0571" [style.width.%]="20" />
      <input nz-input value="26888888" [style.width.%]="80" />
    </nz-space-compact>
    <br />
    <br />
    <nz-space-compact>
      <nz-input-search>
        <span nzInputAddonBefore>https://</span>
        <input nz-input placeholder="input search text" />
      </nz-input-search>
    </nz-space-compact>
    <br />
    <br />
    <nz-space-compact [style.width.%]="100">
      <input nz-input placeholder="Combine input and button" />
      <button nz-button nzType="primary">Submit</button>
    </nz-space-compact>
    <br />
    <br />
    <nz-space-compact>
      <nz-select ngModel="zhejiang" [nzOptions]="options" />
      <input nz-input placeholder="Xihu District, Hangzhou" />
    </nz-space-compact>
    <br />
    <br />
    <nz-space-compact nzSize="large">
      <nz-input-wrapper>
        <nz-icon nzInputAddonBefore nzType="search" />
        <input nz-input placeholder="large size" />
      </nz-input-wrapper>
      <input nz-input placeholder="another input" />
    </nz-space-compact>
  `
})
export class NzDemoInputCompactComponent {
  options: NzSelectOptionInterface[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang'
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu'
    }
  ];
}
```

### Focus 额外配置属性

Focus 提供额外配置属性

```typescript
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-input-focus',
  imports: [FormsModule, NzInputModule, NzButtonModule, NzSwitchModule],
  template: `
    <button nz-button (click)="input.focus({ cursor: 'start' })">Focus at first</button>
    <button nz-button (click)="input.focus({ cursor: 'end' })">Focus at last</button>
    <button nz-button (click)="input.focus({ cursor: 'all' })">Focus to select all</button>
    <button nz-button (click)="input.focus({ preventScroll: true })"> Focus prevent scroll </button>

    <br />
    <nz-switch [(ngModel)]="inputElem" nzCheckedChildren="input" nzUnCheckedChildren="textarea" />
    <br />
    <br />

    @if (inputElem) {
      <input #input="nzInput" nz-input [(ngModel)]="value" />
    } @else {
      <textarea #input="nzInput" nz-input rows="2" [(ngModel)]="value"> </textarea>
    }
  `
})
export class NzDemoInputFocusComponent {
  value = 'NG-ZORRO love you!';
  inputElem = true;

  @ViewChild(NzInputDirective) input!: NzInputDirective;
}
```

### 一次性密码框

一次性密码输入框。

```typescript
import { Component } from '@angular/core';

import { NzFlexDirective } from 'ng-zorro-antd/flex';
import { NzInputOtpComponent } from 'ng-zorro-antd/input';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-input-otp',
  template: `
    <nz-flex nzVertical [nzGap]="16">
      <nz-flex nzVertical>
        <h5 nz-typography>With Formatter (Uppercase)</h5>
        <nz-input-otp [nzFormatter]="formatter" />
      </nz-flex>

      <nz-flex nzVertical>
        <h5 nz-typography>With Disabled</h5>
        <nz-input-otp [disabled]="true" />
      </nz-flex>

      <nz-flex nzVertical>
        <h5 nz-typography>With Length (8)</h5>
        <nz-input-otp [nzLength]="8" />
      </nz-flex>

      <nz-flex nzVertical>
        <h5 nz-typography>With custom display character</h5>
        <nz-input-otp nzMask="🔒" />
      </nz-flex>
    </nz-flex>
  `,
  imports: [NzFlexDirective, NzTypographyComponent, NzInputOtpComponent]
})
export class NzDemoInputOtpComponent {
  formatter: (value: string) => string = value => value.toUpperCase();
}
```

### 密码框

密码框。

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-password-input',
  imports: [FormsModule, NzInputModule, NzIconModule, NzFlexModule, NzButtonModule],
  template: `
    <nz-input-password>
      <input nz-input placeholder="input password" [(ngModel)]="password" />
    </nz-input-password>
    <br />
    <br />
    <nz-input-password>
      <input nz-input placeholder="input password" [(ngModel)]="password" />
      <ng-template nzInputPasswordIcon let-visible>
        @if (visible) {
          <nz-icon nzType="eye" nzTheme="twotone" />
        } @else {
          <nz-icon nzType="eye-invisible" nzTheme="outline" />
        }
      </ng-template>
    </nz-input-password>
    <br />
    <br />
    <nz-flex nzGap="8px">
      <nz-input-password [(nzVisible)]="passwordVisible" [style.flex]="1">
        <input nz-input placeholder="input password" [(ngModel)]="password" />
      </nz-input-password>
      <button nz-button (click)="passwordVisible.set(!passwordVisible())">
        {{ passwordVisible() ? 'Hide' : 'Show' }}
      </button>
    </nz-flex>
    <br />
    <nz-input-password>
      <input nz-input placeholder="input password" [(ngModel)]="password" disabled />
    </nz-input-password>
  `
})
export class NzDemoInputPasswordInputComponent {
  readonly passwordVisible = signal(false);
  readonly password = signal('');
}
```

### 前缀和后缀

在输入框上添加前缀或后缀图标。

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-input-presuffix',
  imports: [NzInputModule, NzIconModule, NzSelectModule, NzCascaderModule, FormsModule],
  template: `
    <nz-input-wrapper>
      <nz-icon nzInputPrefix nzType="user" />
      <input nz-input placeholder="Enter your username" />
      <nz-icon nzInputSuffix nzType="info-circle" />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper nzPrefix="¥" nzSuffix="RMB">
      <input nz-input />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper nzPrefix="¥" nzSuffix="RMB">
      <input nz-input disabled />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper>
      <input nz-input placeholder="input password support suffix" />
      <nz-icon nzInputSuffix class="ant-input-password-icon" nzType="eye-invisible" />
      <nz-icon nzInputSuffix nzType="lock" />
    </nz-input-wrapper>
  `
})
export class NzDemoInputPresuffixComponent {
  readonly value = signal('mysite');
}
```

### 搜索框 loading

用于 `nzSearch` 的时候展示 `loading`。

```typescript
import { Component } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-search-input-loading',
  imports: [NzInputModule],
  template: `
    <nz-input-search nzLoading>
      <input nz-input placeholder="input search loading default" />
    </nz-input-search>
    <br />
    <br />
    <nz-input-search nzLoading nzEnterButton>
      <input nz-input placeholder="input search loading with enterButton" />
    </nz-input-search>
    <br />
    <br />
    <nz-input-search nzLoading nzEnterButton="Search">
      <input nz-input placeholder="input search text" nzSize="large" />
    </nz-input-search>
  `
})
export class NzDemoInputSearchInputLoadingComponent {}
```

### 搜索框

带有搜索按钮的输入框。

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule, NzInputSearchEvent } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-search-input',
  imports: [FormsModule, NzInputModule, NzIconModule],
  template: `
    <nz-input-search (nzSearch)="onSearch($event)">
      <input nz-input [(ngModel)]="value" placeholder="input search text" />
    </nz-input-search>
    <br />
    <br />
    <nz-input-search nzAllowClear (nzSearch)="onSearch($event)">
      <input nz-input [(ngModel)]="value" placeholder="input search text" />
    </nz-input-search>
    <br />
    <br />
    <nz-input-search (nzSearch)="onSearch($event)">
      <span nzInputAddonBefore>https://</span>
      <input nz-input [(ngModel)]="value" placeholder="input search text" />
    </nz-input-search>
    <br />
    <br />
    <nz-input-search nzEnterButton="Submit" (nzSearch)="onSearch($event)">
      <input nz-input [(ngModel)]="value" placeholder="input search text" />
    </nz-input-search>
    <br />
    <br />
    <nz-input-search nzEnterButton="Submit" (nzSearch)="onSearch($event)">
      <input nz-input [(ngModel)]="value" placeholder="input search text" nzSize="large" />
    </nz-input-search>
    <br />
    <br />
    <nz-input-search (nzSearch)="onSearch($event)">
      <input nz-input [(ngModel)]="value" placeholder="input search text" nzSize="large" />
      <nz-icon nzInputSuffix nzType="audio" [style.font-size.px]="16" [style.color]="'#1677ff'" />
      <span nzInputSearchEnterButton>Custom</span>
    </nz-input-search>
  `
})
export class NzDemoInputSearchInputComponent {
  readonly value = signal('');

  onSearch(event: NzInputSearchEvent): void {
    console.log(event);
  }
}
```

### 三种大小

我们为 `nz-input` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-size',
  imports: [NzInputModule, NzIconModule],
  template: `
    <nz-input-wrapper>
      <nz-icon nzInputPrefix nzType="user" />
      <input nz-input placeholder="large size" nzSize="large" />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper>
      <nz-icon nzInputPrefix nzType="user" />
      <input nz-input placeholder="default size" nzSize="default" />
    </nz-input-wrapper>
    <br />
    <br />
    <nz-input-wrapper>
      <nz-icon nzInputPrefix nzType="user" />
      <input nz-input placeholder="small size" nzSize="small" />
    </nz-input-wrapper>
  `
})
export class NzDemoInputSizeComponent {}
```

### 自定义状态

使用 `nzStatus` 为 Input 添加状态，可选 `error` 或者 `warning`。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-input-status',
  imports: [FormsModule, NzIconModule, NzInputModule, NzSpaceModule],
  template: `
    <nz-space nzDirection="vertical" style="width: 100%">
      <input *nzSpaceItem nz-input placeholder="Error" [(ngModel)]="value" nzStatus="error" />
      <input *nzSpaceItem nz-input placeholder="Warning" [(ngModel)]="value" nzStatus="warning" />
      <nz-input-wrapper *nzSpaceItem>
        <nz-icon nzInputPrefix nzType="clock-circle" nzTheme="outline" />
        <input type="text" nz-input placeholder="Error with prefix" nzStatus="error" />
      </nz-input-wrapper>
      <nz-input-wrapper *nzSpaceItem>
        <nz-icon nzInputPrefix nzType="clock-circle" nzTheme="outline" />
        <input type="text" nz-input placeholder="Warning with prefix" nzStatus="warning" />
      </nz-input-wrapper>
    </nz-space>
  `
})
export class NzDemoInputStatusComponent {
  value?: string;
}
```

### 带数字提示的文本域

展示数字提示。

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-textarea-with-character-count',
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="form" nzLayout="vertical">
      <nz-form-item>
        <nz-form-control>
          <nz-textarea-count [nzMaxCharacterCount]="100">
            <textarea rows="4" formControlName="comment" nz-input></textarea>
          </nz-textarea-count>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoInputTextareaWithCharacterCountComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({ comment: this.fb.control('', [Validators.maxLength(100)]) });
}
```

### 文本域

用于多行输入。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-input-textarea',
  imports: [FormsModule, NzInputModule],
  template: `<textarea rows="4" nz-input [(ngModel)]="inputValue"></textarea>`
})
export class NzDemoInputTextareaComponent {
  inputValue?: string;
}
```

### 输入时格式化展示

结合 [Tooltip](/components/tooltip/zh) 组件，实现一个数值输入框，方便内容超长时的全量展现。

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-input-tooltip',
  imports: [FormsModule, NzInputModule, NzTooltipModule],
  template: `
    <input
      #inputElement
      style="width: 120px"
      nz-input
      nz-tooltip
      nzTooltipTrigger="focus"
      nzTooltipPlacement="topLeft"
      nzTooltipOverlayClassName="numeric-input"
      [ngModel]="value"
      [nzTooltipTitle]="title"
      placeholder="Input a number"
      (ngModelChange)="onChange($event)"
      (blur)="onBlur()"
    />
  `,
  styles: `
    .numeric-input .ant-tooltip-inner {
      min-width: 32px;
      min-height: 37px;
    }

    .numeric-input .numeric-input-title {
      font-size: 14px;
    }
  `
})
export class NzDemoInputTooltipComponent {
  value = '';
  title = 'Input a number';

  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  onChange(value: string): void {
    this.updateValue(value);
  }

  // '.' at the end or only '-' in the input box.
  onBlur(): void {
    if (this.value.charAt(this.value.length - 1) === '.' || this.value === '-') {
      this.updateValue(this.value.slice(0, -1));
    }
  }

  updateValue(value: string): void {
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(+value) && reg.test(value)) || value === '' || value === '-') {
      this.value = value;
    }
    this.inputElement!.nativeElement.value = this.value;
    this.updateTitle();
  }

  updateTitle(): void {
    this.title = (this.value !== '-' ? this.formatNumber(this.value) : '-') || 'Input a number';
  }

  formatNumber(value: string): string {
    const stringValue = `${value}`;
    const list = stringValue.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
  }
}
```

### 形态变体

Input 形态变体，可选 `outlined`、`filled`、`borderless`、`underlined` 四种形态。

```typescript
import { Component } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-input-variant',
  imports: [NzInputModule, NzSpaceModule],
  template: `
    <nz-space nzDirection="vertical" style="width: 100%">
      <input *nzSpaceItem nz-input placeholder="outlined" nzVariant="outlined" />
      <input *nzSpaceItem nz-input placeholder="filled" nzVariant="filled" />
      <input *nzSpaceItem nz-input placeholder="borderless" nzVariant="borderless" />
      <input *nzSpaceItem nz-input placeholder="underlined" nzVariant="underlined" />
    </nz-space>
  `
})
export class NzDemoInputVariantComponent {}
```
