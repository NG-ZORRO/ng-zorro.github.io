---
category: Components
type: Data Entry
title: Input
tag: updated
cover: 'https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg'
description: Through mouse or keyboard input content, it is the most basic form field wrapper.
---

## When To Use

- A user input in a form field is needed.
- A search input is required.

## API

### [nz-input]

All props of input supported by [w3c standards](https://www.w3schools.com/tags/tag_input.asp) and Angular can used in `[nz-input]`.

| Property              | Description                                                                                                              | Type                                                     | Default      | Version |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------ | ------- |
| `[nzSize]`            | The size of the input box. Note: in the context of a form, the `large` size is used.                                     | `'large' \| 'small' \| 'default'`                        | `'default'`  |
| ~~`[nzAutosize]`~~    | ~~Only used for `textarea`, height autosize feature, can be set to `boolean` or an object `{ minRows: 2, maxRows: 6 }`~~ | ~~`boolean \| { minRows: number, maxRows: number }`~~    | ~~`false`~~  |
| `[nzVariant]`         | Variants of Input                                                                                                        | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'` | `'outlined'` | 20.0.0  |
| `[nzStatus]`          | Set validation status                                                                                                    | `'error' \| 'warning'`                                   | -            |
| ~~`[nzStepperless]`~~ | ~~Whether hide stepper when input type is number~~                                                                       | ~~`boolean`~~                                            | ~~`true`~~   |

#### Methods

You can get instance by `ViewChild`

| Name           | Description  | Parameters                                                                   |
| -------------- | ------------ | ---------------------------------------------------------------------------- |
| focus(option?) | get focus    | `(option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' })` |
| blur()         | remove focus | -                                                                            |

### nz-input-wrapper

Use when you need to add extra functionality to `[nz-input]`.

| Property          | Description                                                           | Type                     | Default | Version |
| ----------------- | --------------------------------------------------------------------- | ------------------------ | ------- | ------- |
| `[nzAddonBefore]` | The label text displayed before (on the left side of) the input field | `string`                 | -       |
| `[nzAddonAfter]`  | The label text displayed after (on the right side of) the input field | `string`                 | -       |
| `[nzPrefix]`      | The prefix icon for the Input                                         | `string`                 | -       |
| `[nzSuffix]`      | The suffix icon for the Input                                         | `string`                 | -       |
| `[nzAllowClear]`  | If allow to remove input content with clear icon                      | `boolean`                | `false` |
| `[nzShowCount]`   | Should the character count be displayed                               | `boolean`                | `false` | 21.2.0  |
| `[nzCount]`       | Custom character counting config                                      | `NzCountConfig`          | -       | 21.2.0  |
| `(nzClear)`       | Event emitted when the clear icon is clicked                          | `OutputEmitterRef<void>` | -       |

#### NzCountConfig

```ts
export interface NzCountConfig {
  // Maximum character limit: exceeding will be highlighted in red but will not be truncated.
  max?: number;
  // Custom character counting strategy
  strategy?: (value: string) => number;
  // Trimming logic when the number of characters exceeds `max`
  exceedFormatter?: (value: string, config: { max: number }) => string;
}
```

### nz-input-password

All properties of `nz-input-wrapper` can be used.

| Property               | Description                                               | Type                        | Default |
| ---------------------- | --------------------------------------------------------- | --------------------------- | ------- |
| `[nzVisibilityToggle]` | Whether to show the toggle button                         | `boolean`                   | `true`  |
| `[nzVisible]`          | Whether the password is visible, supports two-way binding | `boolean`                   | `false` |
| `(nzVisibleChange)`    | Event emitted when the visibility of the password changes | `OutputEmitterRef<boolean>` | -       |

### nz-input-search

All properties of `nz-input-wrapper` can be used.

| Property          | Description                                                                                                                              | Type                                                          | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------- |
| `[nzEnterButton]` | false displays the default button color, true uses the primary color, or you can provide a custom button. Conflicts with `nzAddonAfter`. | `boolean \| string`                                           | `false` |
| `[nzLoading]`     | Search box with loading                                                                                                                  | `boolean`                                                     | `false` |
| `(nzSearch)`      | The event triggered when you click on the search-icon, the clear-icon or press the Enter key                                             | `{ value: string, event: Event, source: 'clear' \| 'input' }` |         |

### nz-input-group

> ⚠️ `nz-input-group` has been deprecated in `v20.0.0` and will be removed in `v22.0.0`. Please use the `nz-input-wrapper` component instead.

| Property          | Description                                                                                          | Type                              | Default     |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `[nzAddOnAfter]`  | The label text displayed after (on the right side of) the input field, can work with `nzAddOnBefore` | `string \| TemplateRef<void>`     | -           |
| `[nzAddOnBefore]` | The label text displayed before (on the left side of) the input field, can work with `nzAddOnAfter`  | `string \| TemplateRef<void>`     | -           |
| `[nzPrefix]`      | The prefix icon for the Input, can work with `nzSuffix`                                              | `string \| TemplateRef<void>`     | -           |
| `[nzSuffix]`      | The suffix icon for the Input, can work with `nzPrefix`                                              | `string \| TemplateRef<void>`     | -           |
| `[nzSize]`        | The size of `nz-input-group` specifies the size of the included `nz-input` fields                    | `'large' \| 'small' \| 'default'` | `'default'` |
| `[nzStatus]`      | Set validation status                                                                                | `'error' \| 'warning'`            | -           |

### nz-textarea-count

| Property                    | Description                                      | Type                    | Default         |
| --------------------------- | ------------------------------------------------ | ----------------------- | --------------- |
| `[nzMaxCharacterCount]`     | `textarea` maximum character count displayed     | `number`                | -               |
| `[nzComputeCharacterCount]` | customized `characterCount` computation function | `(v: string) => number` | `v => v.length` |

### nz-input-otp

| Property        | Description                                             | Type                              | Default     |
| --------------- | ------------------------------------------------------- | --------------------------------- | ----------- |
| `[disabled]`    | Whether the input is disabled                           | `boolean`                         | `false`     |
| `[nzFormatter]` | Format display, blank fields will be filled with ` `    | `(value: string) => string`       | -           |
| `[nzMask]`      | Custom display, the original value will not be modified | `boolean  \| null`                | `null`      |
| `[nzLength]`    | The number of input elements                            | `number`                          | `6`         |
| `[nzStatus]`    | Set validation status                                   | `'error' \| 'warning'`            | -           |
| `[nzSize]`      | The size of the input box                               | `'large' \| 'small' \| 'default'` | `'default'` |

## Q&A

### How to use compact input group?

`nz-input-group` is no longer support compact mode directly in v20, you can use [nz-space-compact](/components/space/en#components-space-demo-compact) instead.

### NG0951 Error

If you attempt to dynamically render `nz-input` inside `nz-input-wrapper` using `ngTemplateOutlet` or similar methods, you may encounter the `NG0951` error.
This is because Angular's Content Projection and Child Query mechanisms are static and cannot recognize dynamically rendered components (Reference: [angular/angular#64504](https://github.com/angular/angular/issues/64504)).

Since `nz-input-wrapper` relies on content child queries to locate `nz-input`, it is recommended to treat `nz-input-wrapper` and `nz-input` as a single unit and avoid rendering them separately.

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

## Examples

### Pre / Post tab

Using pre & post tabs example.

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

### Custom count logic

It is necessary to customize the counting ability in some scenarios (such as emoji length is counted as 1), which can be achieved through the `nzShowCount` attribute. Use `nzCount` attribute exceeds the limit of the native `maxLength`.

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

### With clear icon

Input with clear icon.

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

### Autosizing the height to fit the content

Use [`CdkTextareaAutosize`](https://material.angular.dev/cdk/text-field/overview#automatically-resizing-a-lesstextareagreater) directive provided by `@angular/cdk` to achieve textarea height adaptation.

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

### Basic usage

Basic usage example.

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

### Compact Style

Use `<nz-space-compact>` create compact style, See the [documentation](/components/space/en#nz-space-compact) for more.

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

### Focus with additional option

Focus with additional option.
`

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

### OTP

One time password input.

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

### Password box

Input type of password.

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

### prefix and suffix

Add prefix or suffix icons inside input.

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

### Search box with loading

Search loading when onSearch.

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

### Search box

Example of creating a search box by grouping a standard input with a search button.

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

### Three sizes of Input

There are three sizes of an Input box: `large` (40px)、`default` (32px) and `small` (24px).

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

### Status

Add status to Input with `nzStatus`, which could be `error` or `warning`.

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

### Textarea with character count

Show character count.

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

### TextArea

For multi-line input.

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

### Format Tooltip Input

You can use the Input in conjunction with [Tooltip](/components/tooltip/en) component to create a Numeric Input, which can provide a good experience for extra-long content display.

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

### Variants

Variants of Input, there are four variants: `outlined`, `filled`, `borderless` and `underlined`.

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
