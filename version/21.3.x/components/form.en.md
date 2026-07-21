---
category: Components
type: Data Entry
cols: 1
title: Form
cover: 'https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg'
description: High-performance form component with data domain management. Includes data entry, validation, and corresponding styles.
---

## When To Use

- When you need to create an instance or collect information.
- When you need to validate fields in certain rules.

> Form is totally based on [Angular Forms](https://angular.dev/guide/forms), you can
> use [reactive forms](https://angular.dev/guide/forms/reactive-forms)
> or [template-driven-forms](https://angular.dev/guide/forms/template-driven-forms).
> Please make sure you have read the official form document before using the component.

## Form

You can align the controls of a `form` using the `layout` prop:

- `horizontal`: to horizontally align the `label`s and controls of the fields. (Default)
- `vertical`: to vertically align the `label`s and controls of the fields.
- `inline`: to render form fields in one line.

### nz-form-item

Used to separate the item in forms, contains label(optional) and control field.

### nz-form-label

The label of the form item, optional.

### nz-form-control

A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.

```html
<form nz-form>
  <nz-form-item>
    <nz-form-label [nzSpan]="6" nzFor="email">E-mail</nz-form-label>
    <nz-form-control [nzSpan]="14">
      <input nz-input name="email" type="email" id="email" />
    </nz-form-control>
  </nz-form-item>
</form>
```

## API

### [nz-form]

| Property              | Description                                                                                             | Type                                                     | Default Value                                   | Global Config | Version |
| --------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------- | ------------- | ------- |
| `[nzLayout]`          | Form layout                                                                                             | `'horizontal' \| 'vertical' \| 'inline'`                 | `'horizontal'`                                  |               |         |
| `[nzAutoTips]`        | Set default props `[nzAutoTips]` value of `nz-form-control`, please refer to the example: **Auto tips** | `Record<string, Record<string, string>>`                 | `{}`                                            | ✅            |         |
| `[nzDisableAutoTips]` | Set default props `[nzDisableAutoTip]` value of `nz-form-control`                                       | `boolean`                                                | `false`                                         | ✅            |         |
| `[nzNoColon]`         | Set default props `[nzNoColon]` value of `nz-form-label`                                                | `boolean`                                                | `false`                                         | ✅            |         |
| `[nzTooltipIcon]`     | Set default props `[nzTooltipIcon]` value of `nz-form-label`                                            | `string \| { type: string; theme: ThemeType }`           | `{ type: 'question-circle', theme: 'outline' }` | ✅            |         |
| `[nzLabelAlign]`      | Set default props `[nzLabelAlign]` value of `nz-form-label`                                             | `'left' \| 'right'`                                      | `'right'`                                       |               |         |
| `[nzLabelWrap]`       | Set default props `[nzLabelWrap]` value of `nz-form-label`                                              | `boolean`                                                | `false`                                         |               |         |
| `[nzRequiredMark]`    | Required mark style. Can use required mark or optional mark.                                            | `NzRequiredMark`                                         | `true`                                          |               | 20.4.0  |
| `[nzSize]`            | Set field component size                                                                                | `small` \| `default` \| `large`                          |                                                 | -             | 21.1.0  |
| `[nzVariant]`         | Set form variant                                                                                        | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'`                                    |               | 21.2.0  |

### nz-form-item

Used to separate the item in forms, contains label(optional) and control field.

| Property     | Description      | Type                         | Default Value | Version |
| ------------ | ---------------- | ---------------------------- | ------------- | ------- |
| `[nzLayout]` | Form item layout | `'horizontal' \| 'vertical'` | -             | 21.3.0  |

> All api in [nz-row](/components/grid/en) can be used in `nz-form-item`.

### nz-form-label

The label of the form item, optional.

> All api in [nz-col](/components/grid/en) can be used in `nz-form-label`.

| Property           | Description                                  | Type                          | Default Value |
| ------------------ | -------------------------------------------- | ----------------------------- | ------------- |
| `[nzRequired]`     | add required style to current item           | `boolean`                     | `false`       |
| `[nzNoColon]`      | whether to not display `:` after label text. | `boolean`                     | `false`       |
| `[nzFor]`          | The `for` property of `label`                | `string`                      | -             |
| `[nzTooltipTitle]` | Set tooltip info                             | `string \| TemplateRef<void>` | -             |
| `[nzTooltipIcon]`  | Set icon of tooltip info                     | `string \| NzFormTooltipIcon` | -             |
| `[nzLabelAlign]`   | The text align of label                      | `'left' \| 'right'`           | `'right'`     |
| `[nzLabelWrap]`    | whether label can be wrap                    | `boolean`                     | `false`       |

### nz-form-control

> Note: Due to the lack of partial Observable in [Angular Form](https://github.com/angular/angular/issues/10887), you
> have to notify `nz-form-control` to update its status with `updateValueAndValidity` when you update form status using
> methods like `markAsDirty`.

A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.

> All api in [nz-col](/components/grid/en) can be used in `nz-form-control`.

| Property              | Description                                                                                                                                                | Type                                                                          | Default Value                                         |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------- |
| `[nzValidateStatus]`  | Will generate status based on the input `FormControl`, `NgModel` or string, the default value is the first `FormControl` or `NgModel` in `nz-form-control` | `'success' \| 'warning' \| 'error' \| 'validating' \| FormControl \| NgModel` | first `FormControl` or `NgModel` in `nz-form-control` |
| `[nzHasFeedback]`     | Used with `nzValidateStatus`, this option specifies the validation status icon. Recommended to be used only with `Input`.                                  | `boolean`                                                                     | `false`                                               |
| `[nzExtra]`           | The extra prompt message                                                                                                                                   | `string \| TemplateRef<void>`                                                 | -                                                     |
| `[nzSuccessTip]`      | Tip display when validate success                                                                                                                          | `string \| TemplateRef<{ $implicit: FormControl \| NgModel }>`                | -                                                     |
| `[nzWarningTip]`      | Tip display when validate warning                                                                                                                          | `string \| TemplateRef<{ $implicit: FormControl \| NgModel }>`                | -                                                     |
| `[nzErrorTip]`        | Tip display when validate error                                                                                                                            | `string \| TemplateRef<{ $implicit: FormControl \| NgModel }>`                | -                                                     |
| `[nzValidatingTip]`   | Tip display when validating                                                                                                                                | `string \| TemplateRef<{ $implicit: FormControl \| NgModel }>`                | -                                                     |
| `[nzAutoTips]`        | The object of the tips, please refer to the example: **Auto tips**                                                                                         | `Record<string, string \| Record<string, string>>`                            | -                                                     |
| `[nzDisableAutoTips]` | Disable Auto Tips                                                                                                                                          | `boolean`                                                                     | -                                                     |

### nz-form-split

The split icon of `-`

### nz-form-text

Text in `nz-form-control`

---

## Examples

### Advanced search

Three columns layout is often used for advanced searching of data table.

Because the width of label is not fixed, you may need to adjust it by customizing its style.

```typescript
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormRecord, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-advanced-search',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzIconModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" class="ant-advanced-search-form">
      <div nz-row [nzGutter]="24">
        @for (control of controlArray; track control) {
          <div nz-col [nzSpan]="8" [hidden]="!control.show">
            <nz-form-item>
              <nz-form-label [nzFor]="'field' + control.index">Field {{ control.index }}</nz-form-label>
              <nz-form-control>
                <input
                  nz-input
                  placeholder="placeholder"
                  [formControlName]="'field' + control.index"
                  [attr.id]="'field' + control.index"
                />
              </nz-form-control>
            </nz-form-item>
          </div>
        }
      </div>
      <div nz-row>
        <div nz-col [nzSpan]="24" class="search-area">
          <button nz-button nzType="primary">Search</button>
          <button nz-button (click)="resetForm()">Clear</button>
          <a class="collapse" (click)="toggleCollapse()">
            Collapse
            <nz-icon [nzType]="isCollapse ? 'down' : 'up'" />
          </a>
        </div>
      </div>
    </form>
    <div class="search-result-list">Search Result List</div>
  `,
  styles: `
    .ant-advanced-search-form {
      padding: 24px;
      background: #fbfbfb;
      border: 1px solid #d9d9d9;
      border-radius: 6px;
    }

    .search-result-list {
      margin-top: 16px;
      border: 1px dashed #e9e9e9;
      border-radius: 6px;
      background-color: #fafafa;
      min-height: 200px;
      text-align: center;
      padding-top: 80px;
    }

    [nz-form-label] {
      overflow: visible;
    }

    button {
      margin-left: 8px;
    }

    .collapse {
      margin-left: 8px;
      font-size: 12px;
    }

    .search-area {
      text-align: right;
    }
  `
})
export class NzDemoFormAdvancedSearchComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  validateForm: FormRecord<FormControl<string>> = this.fb.record({});
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 6 });
      this.validateForm.addControl(`field${i}`, this.fb.control(''));
    }
  }
}
```

### Auto tips

Make tips to be easy.  
Need to customize `Validators` and provide `nzAutoTips` in advance, the priority is as follows:

- `Validators` > `nzAutoTips`
- Via `@Input` set `nzAutoTips`
- Via global config set `nzAutoTips`

In addition, you can use `nzDisableAutoTips` to disable it.

> Via the current locale (`zh-cn`, `en`...) is used as the `key` of `nzAutoTips` to search for tips. If it is not found, it will be searched again with `default`.

```typescript
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Observable, Observer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-auto-tips',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [nzAutoTips]="autoTips" [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Username</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidatingTip="Validating...">
          <input nz-input formControlName="username" placeholder="async validate try to write JasonWood" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Mobile</nz-form-label>
        <nz-form-control [nzSpan]="12">
          <input nz-input formControlName="mobile" placeholder="mobile" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>E-mail</nz-form-label>
        <nz-form-control [nzSpan]="12">
          <input nz-input formControlName="email" placeholder="email" type="email" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Password</nz-form-label>
        <nz-form-control [nzSpan]="12" nzDisableAutoTips nzErrorTip="Please input your password!">
          <input nz-input type="password" formControlName="password" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Confirm Password</nz-form-label>
        <nz-form-control [nzSpan]="12" nzDisableAutoTips [nzErrorTip]="passwordErrorTpl">
          <input nz-input type="password" formControlName="confirm" placeholder="confirm your password" />
          <ng-template #passwordErrorTpl let-control>
            @if (control.errors?.['required']) {
              Please confirm your password!
            }
            @if (control.errors?.['confirm']) {
              Password is inconsistent!
            }
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzOffset]="7" [nzSpan]="12">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    [nz-form] {
      max-width: 600px;
    }
  `
})
export class NzDemoFormAutoTipsComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    username: this.fb.control(
      '',
      [MyValidators.required, MyValidators.maxLength(12), MyValidators.minLength(6)],
      [this.usernameAsyncValidator]
    ),
    mobile: this.fb.control('', [MyValidators.required, MyValidators.mobile]),
    email: this.fb.control('', [MyValidators.required, MyValidators.email]),
    password: this.fb.control('', [MyValidators.required]),
    confirm: this.fb.control('', [this.confirmValidator])
  });

  // current locale is key of the nzAutoTips
  // if it is not found, it will be searched again with `default`
  autoTips: Record<string, Record<string, string>> = {
    'zh-cn': {
      required: '必填项'
    },
    en: {
      required: 'Input is required'
    },
    default: {
      email: '邮箱格式不正确/The input is not valid email'
    }
  };

  ngOnInit(): void {
    this.validateForm.controls.password.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.validateForm.controls.confirm.updateValueAndValidity();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  usernameAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return new Observable((observer: Observer<MyValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({
            duplicated: { 'zh-cn': `用户名已存在`, en: `The username is redundant!` }
          });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  }

  confirmValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }
}

// current locale is key of the MyErrorsOptions
export type MyErrorsOptions = { 'zh-cn': string; en: string } & Record<string, NzSafeAny>;
export type MyValidationErrors = Record<string, MyErrorsOptions>;

export class MyValidators extends Validators {
  static override minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.minLength(minLength)(control) === null) {
        return null;
      }
      return { minlength: { 'zh-cn': `最小长度为 ${minLength}`, en: `MinLength is ${minLength}` } };
    };
  }

  static override maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.maxLength(maxLength)(control) === null) {
        return null;
      }
      return { maxlength: { 'zh-cn': `最大长度为 ${maxLength}`, en: `MaxLength is ${maxLength}` } };
    };
  }

  static mobile(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isMobile(value)
      ? null
      : { mobile: { 'zh-cn': `手机号码格式不正确`, en: `Mobile phone number is not valid` } };
  }
}

function isEmptyInputValue(value: NzSafeAny): boolean {
  return value == null || value.length === 0;
}

function isMobile(value: string): boolean {
  return typeof value === 'string' && /(^1\d{10}$)/.test(value);
}
```

### Coordinated Controls

Use `setValue` to set other control's value programmaticly.

```typescript
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

type Gender = 'male' | 'female';

@Component({
  selector: 'nz-demo-form-coordinated',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzSelectModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="5" nzRequired nzFor="note">Note</nz-form-label>
        <nz-form-control [nzSpan]="12" nzErrorTip="Please input your username!">
          <input id="note" type="text" nz-input formControlName="note" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5" nzFor="gender" nzRequired>Gender</nz-form-label>
        <nz-form-control [nzSpan]="12" nzErrorTip="Please select your gender!">
          <nz-select id="gender" formControlName="gender" nzPlaceHolder="Select a option and change input text above">
            <nz-option nzValue="male" nzLabel="male" />
            <nz-option nzValue="female" nzLabel="female" />
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="12" [nzOffset]="5">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    [nz-form] {
      max-width: 600px;
    }
  `
})
export class NzDemoFormCoordinatedComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    note: this.fb.control<string | null>(null, Validators.required),
    gender: this.fb.control<Gender | null>(null, Validators.required)
  });

  ngOnInit(): void {
    this.validateForm.controls.gender.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.genderChange(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  genderChange(value: Gender | null): void {
    this.validateForm.controls.note.setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }
}
```

### Dynamic Form Item

Add or remove form items dynamically.

```typescript
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-dynamic-form-item',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzIconModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <ng-container formArrayName="names">
        @for (control of listOfControl.controls; track control) {
          <nz-form-item>
            @if ($first) {
              <nz-form-label [nzXs]="24" [nzSm]="4" [nzFor]="'passenger' + $index"> Passengers </nz-form-label>
            }
            <nz-form-control
              [nzXs]="24"
              [nzSm]="20"
              [nzOffset]="$first ? 0 : 4"
              nzErrorTip="Please input passenger's name or delete this field."
            >
              <input
                class="passenger-input"
                nz-input
                placeholder="placeholder"
                [attr.id]="'passenger' + $index"
                [formControlName]="$index"
              />
              @if ($count > 1) {
                <nz-icon nzType="minus-circle-o" class="dynamic-delete-button" (click)="removeField($index, $event)" />
              }
            </nz-form-control>
          </nz-form-item>
        }

        <nz-form-item>
          <nz-form-control [nzXs]="{ span: 24, offset: 0 }" [nzSm]="{ span: 20, offset: 4 }">
            <button nz-button nzType="dashed" class="add-button" (click)="addField($event)">
              <nz-icon nzType="plus" />
              Add field
            </button>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-control [nzXs]="{ span: 24, offset: 0 }" [nzSm]="{ span: 20, offset: 4 }">
            <button nz-button nzType="dashed" class="add-button" (click)="addHeadField($event)">
              <nz-icon nzType="plus" />
              Add field at head
            </button>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-control [nzXs]="{ span: 24, offset: 0 }" [nzSm]="{ span: 20, offset: 4 }">
            <button nz-button nzType="primary">Submit</button>
          </nz-form-control>
        </nz-form-item>
      </ng-container>
    </form>
  `,
  styles: `
    .dynamic-delete-button {
      cursor: pointer;
      position: relative;
      top: 4px;
      font-size: 24px;
      color: #999;
      transition: all 0.3s;
    }

    .dynamic-delete-button:hover {
      color: #777;
    }

    .passenger-input {
      width: 60%;
      margin-right: 8px;
    }

    [nz-form] {
      max-width: 600px;
    }

    .add-button {
      width: 60%;
    }
  `
})
export class NzDemoFormDynamicFormItemComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    names: this.fb.array([])
  });
  listOfControl = this.validateForm.get('names') as FormArray;

  addField(e?: MouseEvent): void {
    e?.preventDefault();
    this.listOfControl.push(this.fb.control('', Validators.required));
  }

  addHeadField(e?: MouseEvent): void {
    e?.preventDefault();
    this.listOfControl.insert(0, this.fb.control('The head item', Validators.required));
  }

  removeField(index: number, e: MouseEvent): void {
    e.preventDefault();
    this.listOfControl.removeAt(index);
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.listOfControl.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.addField();
  }
}
```

### Dynamic Rules

Perform different check rules according to different situations.

```typescript
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-dynamic-rule',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="name">Name</nz-form-label>
        <nz-form-control [nzSpan]="8" nzErrorTip="Please input your name">
          <input type="text" nz-input formControlName="name" placeholder="Please input your name" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzFor="nickname" [nzRequired]="validateForm.controls.required.value">
          Nickname
        </nz-form-label>
        <nz-form-control [nzSpan]="8" nzErrorTip="Please input your nickname">
          <input type="text" nz-input formControlName="nickname" placeholder="Please input your nickname" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="8" [nzOffset]="4">
          <label nz-checkbox formControlName="required">Nickname is required</label>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="8" [nzOffset]="4">
          <button nz-button nzType="primary">Check</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoFormDynamicRuleComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    nickname: this.fb.control(''),
    required: this.fb.control(false)
  });

  ngOnInit(): void {
    this.validateForm.controls.required.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.requiredChange(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.controls.nickname.clearValidators();
      this.validateForm.controls.nickname.markAsPristine();
    } else {
      this.validateForm.controls.nickname.setValidators(Validators.required);
      this.validateForm.controls.nickname.markAsDirty();
    }
    this.validateForm.controls.nickname.updateValueAndValidity();
  }
}
```

### Inline Login Form

Inline login form is often used in navigation bar.

```typescript
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-horizontal-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form nzLayout="inline" [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-wrapper>
            <nz-icon nzInputPrefix nzType="user" />
            <input formControlName="username" nz-input placeholder="username" />
          </nz-input-wrapper>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-password>
            <nz-icon nzInputPrefix nzType="lock" />
            <input formControlName="password" nz-input placeholder="Password" />
          </nz-input-password>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoFormHorizontalLoginComponent {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
}
```

### Text align of form label

text align of form label.

```typescript
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-label-align',
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label nzRequired nzLabelAlign="left" nzSpan="4">Left-aligned text label</nz-form-label>
        <nz-form-control nzErrorTip="Please input your username!" nzSpan="8">
          <input formControlName="username" nz-input placeholder="username" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label nzRequired nzLabelAlign="right" nzSpan="4">Right-aligned text label</nz-form-label>
        <nz-form-control nzErrorTip="Please input your Password!" nzSpan="8">
          <input formControlName="password" nz-input type="password" placeholder="Password" />
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoFormLabelAlignComponent {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
}
```

### Label can wrap

Turn on `nzLabelWrap` to wrap label if text is long.

```typescript
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-label-wrap',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" nzNoColon nzLabelAlign="left" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label nzRequired nzFor="user" nzSpan="3"> Normal text label </nz-form-label>
        <nz-form-control nzErrorTip="Please input your username!" nzSpan="8">
          <input formControlName="username" nz-input id="user" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label nzRequired nzFor="label-wrap-password" nzSpan="3" nzLabelWrap>
          Long text label Long text label
        </nz-form-label>
        <nz-form-control nzErrorTip="Please input your Password!" nzSpan="8">
          <input formControlName="password" nz-input type="password" id="label-wrap-password" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzSpan="12" style="text-align: center">
          <button nz-button nzType="primary">Log in</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoFormLabelWrapComponent {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
}
```

### Form Layout

There are three layout for form: `horizontal`, `vertical`, `inline`.

```typescript
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-form-layout',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzRadioModule],
  template: `
    <form
      nz-form
      [nzLayout]="validateForm.controls.formLayout.value"
      [formGroup]="validateForm"
      (ngSubmit)="submitForm()"
    >
      <nz-form-item>
        <nz-form-label [nzSpan]="isHorizontal ? 4 : null">Form Layout</nz-form-label>
        <nz-form-control [nzSpan]="isHorizontal ? 14 : null">
          <nz-radio-group formControlName="formLayout">
            <label nz-radio-button nzValue="horizontal">Horizontal</label>
            <label nz-radio-button nzValue="vertical">Vertical</label>
            <label nz-radio-button nzValue="inline">Inline</label>
          </nz-radio-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="isHorizontal ? 4 : null">Field A</nz-form-label>
        <nz-form-control [nzSpan]="isHorizontal ? 14 : null" nzErrorTip="Please input your username!">
          <input nz-input formControlName="fieldA" placeholder="input placeholder" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="isHorizontal ? 4 : null">Field B</nz-form-label>
        <nz-form-control [nzSpan]="isHorizontal ? 14 : null" nzErrorTip="Please input your Password!">
          <input nz-input formControlName="filedB" placeholder="input placeholder" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="isHorizontal ? 14 : null" [nzOffset]="isHorizontal ? 4 : null">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
      max-width: 600px;
    }
  `
})
export class NzDemoFormLayoutComponent {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    formLayout: this.fb.control<NzFormLayoutType>('horizontal'),
    fieldA: this.fb.control('', [Validators.required]),
    filedB: this.fb.control('', [Validators.required])
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout.value === 'horizontal';
  }
}
```

### Form mix layout

Defining a separate layout on `nz-form-item` can achieve multiple layouts for a single form.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-mix-layout',
  imports: [NzDividerModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form nzLayout="horizontal">
      <nz-form-item>
        <nz-form-label [nzSpan]="4">horizontal</nz-form-label>
        <nz-form-control [nzSpan]="20">
          <input nz-input />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nzLayout="vertical">
        <nz-form-label>vertical</nz-form-label>
        <nz-form-control>
          <input nz-input />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nzLayout="vertical">
        <nz-form-label>vertical2</nz-form-label>
        <nz-form-control>
          <input nz-input />
        </nz-form-control>
      </nz-form-item>
    </form>

    <nz-divider />

    <form nz-form nzLayout="vertical">
      <nz-form-item>
        <nz-form-label>vertical</nz-form-label>
        <nz-form-control>
          <input nz-input />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>vertical2</nz-form-label>
        <nz-form-control>
          <input nz-input />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nzLayout="horizontal">
        <nz-form-label [nzSpan]="4">horizontal</nz-form-label>
        <nz-form-control [nzSpan]="20">
          <input nz-input />
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    form {
      max-width: 600px;
    }
  `
})
export class NzDemoFormMixLayoutComponent {}
```

### Login Form

Normal login form which can contain more elements.

```typescript
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-normal-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-wrapper>
            <nz-icon nzInputPrefix nzType="user" />
            <input type="text" nz-input formControlName="username" placeholder="Username" />
          </nz-input-wrapper>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-password>
            <nz-icon nzInputPrefix nzType="lock" />
            <input nz-input formControlName="password" placeholder="Password" />
          </nz-input-password>
        </nz-form-control>
      </nz-form-item>
      <div nz-row class="login-form-margin">
        <div nz-col [nzSpan]="12">
          <label nz-checkbox formControlName="remember">
            <span>Remember me</span>
          </label>
        </div>
        <div nz-col [nzSpan]="12">
          <a class="login-form-forgot">Forgot password</a>
        </div>
      </div>
      <button nz-button class="login-form-button login-form-margin" nzType="primary">Log in</button>
      Or
      <a>register now!</a>
    </form>
  `,
  styles: `
    .login-form {
      max-width: 300px;
    }

    .login-form-margin {
      margin-bottom: 16px;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
  `
})
export class NzDemoFormNormalLoginComponent {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
```

### Registration

Fill in this form to create a new account for you.

```typescript
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule, NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-form-register',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule, NzSelectModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzRequired nzFor="email">E-mail</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid E-mail!">
          <input nz-input formControlName="email" id="email" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="password" nzRequired>Password</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your password!">
          <input nz-input type="password" id="password" formControlName="password" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="checkPassword" nzRequired>Confirm Password</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" [nzErrorTip]="errorTpl">
          <input nz-input type="password" formControlName="checkPassword" id="checkPassword" />
          <ng-template #errorTpl let-control>
            @if (control.errors?.['required']) {
              Please confirm your password!
            }
            @if (control.errors?.['confirm']) {
              Two passwords that you enter is inconsistent!
            }
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label
          [nzSm]="6"
          [nzXs]="24"
          nzFor="nickname"
          nzRequired
          nzTooltipTitle="What do you want other to call you"
        >
          <span>Nickname</span>
        </nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your nickname!">
          <input nz-input id="nickname" formControlName="nickname" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="phoneNumber" nzRequired>Phone Number</nz-form-label>
        <nz-form-control
          [nzSm]="14"
          [nzXs]="24"
          [nzValidateStatus]="validateForm.controls['phoneNumber']"
          nzErrorTip="Please input your phone number!"
        >
          <nz-input-wrapper>
            <nz-select nzInputAddonBefore formControlName="phoneNumberPrefix" class="phone-select">
              <nz-option nzLabel="+86" nzValue="+86" />
              <nz-option nzLabel="+87" nzValue="+87" />
            </nz-select>
            <input formControlName="phoneNumber" id="'phoneNumber'" nz-input />
          </nz-input-wrapper>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="website" nzRequired>Website</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input website!">
          <input nz-input id="website" formControlName="website" placeholder="website" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label
          [nzSm]="6"
          [nzXs]="24"
          nzFor="captcha"
          nzRequired
          nzTooltipTitle="Please click 'Get captcha'"
          [nzTooltipIcon]="captchaTooltipIcon"
        >
          Captcha
        </nz-form-label>
        <nz-form-control
          [nzSm]="14"
          [nzXs]="24"
          nzErrorTip="Please input the captcha you got!"
          nzExtra="We must make sure that your are a human."
        >
          <div nz-row [nzGutter]="8">
            <div nz-col [nzSpan]="12">
              <input nz-input formControlName="captcha" id="captcha" />
            </div>
            <div nz-col [nzSpan]="12">
              <button nz-button (click)="getCaptcha($event)">Get captcha</button>
            </div>
          </div>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row class="register-area">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <label nz-checkbox formControlName="agree">
            <span>
              I have read the
              <a>agreement</a>
            </span>
          </label>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row class="register-area">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <button nz-button nzType="primary">Register</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    [nz-form] {
      max-width: 600px;
    }

    .ant-select.ant-select-in-form-item.phone-select {
      width: 80px;
    }

    .register-area {
      margin-bottom: 8px;
    }
  `
})
export class NzDemoFormRegisterComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [Validators.required]),
    checkPassword: this.fb.control('', [Validators.required, this.confirmationValidator]),
    nickname: this.fb.control('', [Validators.required]),
    phoneNumberPrefix: this.fb.control<'+86' | '+87'>('+86'),
    phoneNumber: this.fb.control('', [Validators.required]),
    website: this.fb.control('', [Validators.required]),
    captcha: this.fb.control('', [Validators.required]),
    agree: this.fb.control(false)
  });
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  ngOnInit(): void {
    this.validateForm.controls.password.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.validateForm.controls.checkPassword.updateValueAndValidity();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  confirmationValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== control.parent!.value.password) {
      return { confirm: true, error: true };
    }
    return {};
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
}
```

### Required style

Switch required or optional style with `nzRequiredMark`.

```typescript
import { NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFormModule, type NzRequiredMark } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-form-required-style',
  imports: [FormsModule, NzFormModule, NzRadioModule, NzInputModule, NgTemplateOutlet, NzTagModule],
  template: `
    <form nz-form [nzRequiredMark]="requiredMarkStyle()">
      <nz-radio-group [(ngModel)]="requiredMarkStyle" name="requiredMarkStyle">
        <label nz-radio-button [nzValue]="true">Default</label>
        <label nz-radio-button nzValue="optional">Optional</label>
        <label nz-radio-button [nzValue]="false">Hidden</label>
        <label nz-radio-button [nzValue]="customRequiredMark">Custom</label>
      </nz-radio-group>
      <nz-form-item>
        <nz-form-label nzFor="fieldA" nzRequired>Field A</nz-form-label>
        <nz-form-control>
          <input type="text" nz-input id="fieldA" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label nzFor="fieldB">Field B</nz-form-label>
        <nz-form-control>
          <input type="text" nz-input id="fieldB" />
        </nz-form-control>
      </nz-form-item>
    </form>

    <ng-template #customRequiredMark let-label let-required="required">
      @if (required) {
        <nz-tag nzColor="red">Required</nz-tag>
      } @else {
        <nz-tag nzColor="orange">Optional</nz-tag>
      }
      <ng-container *ngTemplateOutlet="label" />
    </ng-template>
  `,
  styles: `
    nz-radio-group {
      margin-bottom: 16px;
    }
    [nz-form] {
      max-width: 600px;
    }
  `
})
export class NzDemoFormRequiredStyleComponent {
  readonly requiredMarkStyle = signal<NzRequiredMark>('optional');
}
```

### Form size

Set component size, only works for antd components.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import type { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-form-size',
  imports: [
    FormsModule,
    NzFormModule,
    NzRadioModule,
    NzInputModule,
    NzInputNumberModule,
    NzCascaderModule,
    NzSelectModule,
    NzTreeSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzTimePickerModule,
    NzSwitchModule,
    NzColorPickerModule
  ],
  template: `
    <form nz-form [nzSize]="size()">
      <nz-form-item>
        <nz-form-label>Size</nz-form-label>
        <nz-form-control>
          <nz-radio-group name="size" [(ngModel)]="size">
            <label nz-radio-button nzValue="small">Small</label>
            <label nz-radio-button nzValue="default">Default</label>
            <label nz-radio-button nzValue="large">Large</label>
          </nz-radio-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Input</nz-form-label>
        <nz-form-control>
          <input nz-input />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Input Number</nz-form-label>
        <nz-form-control>
          <nz-input-number />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Cascader</nz-form-label>
        <nz-form-control>
          <nz-cascader [nzOptions]="[]" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Select</nz-form-label>
        <nz-form-control>
          <nz-select [nzOptions]="[]" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Tree Select</nz-form-label>
        <nz-form-control>
          <nz-tree-select [nzExpandedKeys]="expandKeys" nzShowSearch nzPlaceHolder="Please select" [nzNodes]="nodes" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Date Picker</nz-form-label>
        <nz-form-control>
          <nz-date-picker />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Time Picker</nz-form-label>
        <nz-form-control>
          <nz-time-picker />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Switch</nz-form-label>
        <nz-form-control>
          <nz-switch />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Color Picker</nz-form-label>
        <nz-color-picker />
      </nz-form-item>
      <button nz-button nzType="primary">Button</button>
    </form>
  `
})
export class NzDemoFormSizeComponent {
  readonly size = signal<NzSizeLDSType>('default');

  expandKeys = ['100', '1001'];

  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];
}
```

### Time-related Controls

All the types of input and output in time-related components are `Date`. You can use [date-fns](https://date-fns.org/) to handle it.

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-form-time-related-controls',
  imports: [ReactiveFormsModule, NzButtonModule, NzDatePickerModule, NzFormModule, NzTimePickerModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSm]="8" [nzXs]="24" nzRequired>DatePicker</nz-form-label>
        <nz-form-control [nzSm]="16" [nzXs]="24">
          <nz-date-picker formControlName="datePicker" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="8" [nzXs]="24" nzRequired>DatePicker[ShowTime]</nz-form-label>
        <nz-form-control [nzSm]="16" [nzXs]="24">
          <nz-date-picker nzShowTime formControlName="datePickerTime" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="8" [nzXs]="24" nzRequired>MonthPicker</nz-form-label>
        <nz-form-control [nzSm]="16" [nzXs]="24">
          <nz-date-picker nzMode="month" formControlName="monthPicker" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="8" [nzXs]="24" nzRequired>RangePicker</nz-form-label>
        <nz-form-control [nzSm]="16" [nzXs]="24">
          <nz-range-picker formControlName="rangePicker" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="8" [nzXs]="24" nzRequired>RangePicker[showTime]</nz-form-label>
        <nz-form-control [nzSm]="16" [nzXs]="24">
          <nz-range-picker nzShowTime formControlName="rangePickerTime" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="8" [nzXs]="24" nzRequired>TimePicker</nz-form-label>
        <nz-form-control [nzSm]="16" [nzXs]="24">
          <nz-time-picker formControlName="timePicker" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzXs]="{ span: 24, offset: 0 }" [nzSm]="{ span: 16, offset: 8 }">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    form {
      max-width: 600px;
    }
  `
})
export class NzDemoFormTimeRelatedControlsComponent {
  private fb = inject(FormBuilder);
  validateForm = this.fb.group({
    datePicker: this.fb.control<Date | null>(null),
    datePickerTime: this.fb.control<Date | null>(null),
    monthPicker: this.fb.control<Date | null>(null),
    rangePicker: this.fb.control<[Date, Date] | null>(null),
    rangePickerTime: this.fb.control<[Date, Date] | null>(null),
    timePicker: this.fb.control<Date | null>(null)
  });

  submitForm(): void {
    console.log(this.validateForm.value);
  }
}
```

### Reactive Forms Validation

We provide properties like `nzValidateStatus` `nzHasFeedback` in `nz-form-control` to customize your own validate status and message, when using [reactive forms](https://angular.dev/guide/forms/reactive-forms).

1. `nzValidateStatus`: validate status of form components, the default status comes from the `NgControl` in `nz-form-control`, you can set other `NgControl` to it.
2. `nzHasFeedback`: display feed icon of input control
3. `nzSuccessTip` `nzWarningTip` `nzErrorTip` `nzValidatingTip`：display validate message。
   > When there are multiple tips in the same state, `nzSuccessTip` `nzWarningTip` `nzErrorTip` `nzValidatingTip` supports the passing `TemplateRef<{ $implicit: FormControl }` type, which can be used to switch tips after exporting `FormControl` via the [template syntax](https://angular.dev/guide/templates).
   > When the FormControl.status is `INVALID`, and the errors contains `{warning:true}` , the `nz-form-control` display with warning status.

```typescript
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-validate-reactive',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Username</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
          <input nz-input formControlName="userName" placeholder="async validate try to write JasonWood" />
          <ng-template #userErrorTpl let-control>
            @if (control.errors?.['required']) {
              Please input your username!
            }
            @if (control.errors?.['duplicated']) {
              The username is redundant!
            }
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>E-mail</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="emailErrorTpl">
          <input nz-input formControlName="email" placeholder="email" type="email" />
          <ng-template #emailErrorTpl let-control>
            @if (control.errors?.['email']) {
              The input is not valid E-mail!
            }
            @if (control.errors?.['required']) {
              Please input your E-mail!
            }
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Password</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback nzErrorTip="Please input your password!">
          <input nz-input type="password" formControlName="password" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Confirm Password</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="passwordErrorTpl">
          <input nz-input type="password" formControlName="confirm" placeholder="confirm your password" />
          <ng-template #passwordErrorTpl let-control>
            @if (control.errors?.['required']) {
              Please confirm your password!
            }
            @if (control.errors?.['confirm']) {
              Password is inconsistent!
            }
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Comment</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback nzErrorTip="Please write something here!">
          <nz-textarea-count [nzMaxCharacterCount]="2000">
            <textarea formControlName="comment" nz-input rows="2" placeholder="write any thing"></textarea>
          </nz-textarea-count>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzOffset]="7" [nzSpan]="12">
          <button nz-button nzType="primary" [disabled]="!validateForm.valid">Submit</button>
          <button nz-button (click)="resetForm($event)">Reset</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    [nz-form] {
      max-width: 600px;
    }

    button {
      margin-left: 8px;
    }
  `
})
export class NzDemoFormValidateReactiveComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    userName: this.fb.control('', [Validators.required], [this.userNameAsyncValidator]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [Validators.required]),
    confirm: this.fb.control('', [this.confirmValidator]),
    comment: this.fb.control('', [Validators.required])
  });

  ngOnInit(): void {
    this.validateForm.controls.password.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.validateForm.controls.confirm.updateValueAndValidity();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }

  userNameAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  }

  confirmValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== control.parent!.value.password) {
      return { confirm: true, error: true };
    }
    return {};
  }
}
```

### Manual Set Validation Status

You can set the form status directly via the `nzValidateStatus` on `nz-form-control`.

1. `nzValidateStatus`: validate status of form components which could be 'success', 'warning', 'error', 'validating'.
2. `nzHasFeedback`: display feed icon of input control
3. `nzSuccessTip` `nzWarningTip` `nzErrorTip` `nzValidatingTip`：display validate message。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-form-validate-static',
  imports: [
    FormsModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzTimePickerModule
  ],
  template: `
    <form nz-form>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Fail</nz-form-label>
        <nz-form-control
          nzValidateStatus="error"
          [nzSpan]="12"
          nzErrorTip="Should be combination of numbers & alphabets"
        >
          <input nz-input ngModel="unavailable choice" name="errorValid" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Warning</nz-form-label>
        <nz-form-control nzValidateStatus="warning" [nzSpan]="12">
          <input nz-input ngModel="Warning" name="warningValid" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Validating</nz-form-label>
        <nz-form-control
          [nzSpan]="12"
          nzValidateStatus="validating"
          nzHasFeedback
          nzValidatingTip="I'm validating the content"
        >
          <input nz-input ngModel="The content is being validated" name="validating" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Success</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="success" nzHasFeedback>
          <input nz-input ngModel="The content" name="successValid" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Warning</nz-form-label>
        <nz-form-control
          [nzSpan]="12"
          nzValidateStatus="warning"
          nzHasFeedback
          nzWarningTip="Should be combination of numbers & alphabets"
        >
          <input nz-input ngModel="Warning" name="warningHighValid" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Fail</nz-form-label>
        <nz-form-control
          [nzSpan]="12"
          nzValidateStatus="error"
          nzHasFeedback
          nzErrorTip="Should be combination of numbers & alphabets"
        >
          <input nz-input ngModel="unavailable choice" name="invalidValid" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Success</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="success" nzHasFeedback>
          <nz-date-picker name="date-picker-success" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Warning</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="warning" nzHasFeedback>
          <nz-time-picker name="time-picker-warning" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Error</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="error" nzHasFeedback>
          <nz-select name="select-error" ngModel="Option 1">
            <nz-option nzValue="Option 1" nzLabel="Option 1" />
            <nz-option nzValue="Option 2" nzLabel="Option 2" />
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Validating</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="validating" nzHasFeedback>
          <nz-select name="select-validate" ngModel="Option 2">
            <nz-option nzValue="Option 1" nzLabel="Option 1" />
            <nz-option nzValue="Option 2" nzLabel="Option 2" />
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Success</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="success" nzHasFeedback>
          <nz-input-number name="inputnumber-success" style="width:100%" />
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    [nz-form] {
      max-width: 600px;
    }

    nz-date-picker ::ng-deep .ant-calendar-picker {
      width: 100%;
    }

    nz-date-picker,
    nz-time-picker {
      width: 100%;
    }
  `
})
export class NzDemoFormValidateStaticComponent {}
```

### Template-driven Forms Validation

When using [template-driven forms](https://angular.dev/guide/forms/template-driven-forms), the form could change its status via the template setting.

1. `nzHasFeedback`: display feed icon of input control
2. `nzSuccessTip` `nzWarningTip` `nzErrorTip` `nzValidatingTip`: display validate message。
   > When there are multiple tips in the same state, `nzSuccessTip` `nzWarningTip` `nzErrorTip` `nzValidatingTip` supports the passing `TemplateRef<{ $implicit: NgModel }` type, which can be used to switch tips after exporting `NgModel` via the [template syntax](https://angular.dev/guide/templates).

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-validate-template',
  imports: [FormsModule, NzFormModule, NzInputModule, NzInputModule],
  template: `
    <form nz-form>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Required</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" nzErrorTip="Input is required">
          <input nz-input ngModel="Required Input" name="required" required />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">MaxLength</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" nzErrorTip="MaxLength is 6">
          <input nz-input ngModel="MaxLength is 6" name="maxlength" maxlength="6" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">MinLength</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" nzErrorTip="MinLength is 6">
          <input nz-input ngModel="MinLength is 6" name="minlength" minlength="6" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Email</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" nzErrorTip="Email is not valid">
          <input nz-input ngModel="Input Email" name="email" email />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Pattern</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" nzErrorTip="Pattern not match">
          <input nz-input ngModel="Match pattern" name="pattern" pattern=".{3,}" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Mix</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" [nzErrorTip]="combineTpl">
          <input
            nz-input
            ngModel="MaxLength is 12 and MinLength is 6"
            name="mix"
            minlength="6"
            maxlength="12"
            required
          />
          <ng-template #combineTpl let-control>
            @if (control.errors?.['maxlength']) {
              MaxLength is 12
            }
            @if (control.errors?.['minlength']) {
              MinLength is 6
            }
            @if (control.errors?.['required']) {
              Input is required
            }
          </ng-template>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    [nz-form] {
      max-width: 600px;
    }
  `
})
export class NzDemoFormValidateTemplateComponent {}
```

### Form variants

Change the variant of all components in the form, options include: `outlined` `filled` `borderless` and `underlined`.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import type { NzVariant } from 'ng-zorro-antd/core/types';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-form-variant',
  imports: [
    NzFormModule,
    NzRadioModule,
    FormsModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzCascaderModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzTreeSelectModule,
    NzMentionModule
  ],
  template: `
    <form nz-form [nzVariant]="variant()">
      <nz-form-item>
        <nz-form-label>Form variant</nz-form-label>
        <nz-radio-group [(ngModel)]="variant" name="variant">
          <label nz-radio-button nzValue="outlined">Outlined</label>
          <label nz-radio-button nzValue="filled">Filled</label>
          <label nz-radio-button nzValue="borderless">Borderless</label>
          <label nz-radio-button nzValue="underlined">Underlined</label>
        </nz-radio-group>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Input</nz-form-label>
        <nz-form-control>
          <input placeholder="Please type something" nz-input />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>InputNumber</nz-form-label>
        <nz-form-control>
          <nz-input-number nzPlaceHolder="Please enter a number" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Select</nz-form-label>
        <nz-form-control>
          <nz-select nzPlaceHolder="Please select">
            <nz-option nzValue="Marie" nzLabel="Marie" />
            <nz-option nzValue="John" nzLabel="John" />
            <nz-option nzValue="Jill" nzLabel="Jill" />
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Cascader</nz-form-label>
        <nz-form-control>
          <nz-cascader />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>DatePicker</nz-form-label>
        <nz-form-control>
          <nz-date-picker />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item
        ><nz-form-label>TimePicker</nz-form-label>
        <nz-form-control>
          <nz-time-picker />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Tree Select</nz-form-label>
        <nz-form-control>
          <nz-tree-select [nzExpandedKeys]="expandKeys" [nzNodes]="nodes" nzPlaceHolder="Please select" />
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label>Mention</nz-form-label>
        <nz-form-control>
          <nz-mention [nzSuggestions]="suggestions">
            <textarea rows="1" placeholder="Input here" nzMentionTrigger nz-input></textarea>
          </nz-mention>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoFormVariantComponent {
  readonly variant = signal<NzVariant>('outlined');

  expandKeys = ['100', '1001'];
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  readonly nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];
}
```
