---
category: Components
type: Data Entry
title: Mention
cover: 'https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg'
description: Used to mention someone or something in an input.
---

## When To Use

When need to mention someone or something.

## API

```html
<nz-mention [nzSuggestions]="suggestions">
  <textarea nz-input [(ngModel)]="value" nzMentionTrigger> </textarea>
</nz-mention>
```

### nz-mention

| Property                | Description                                                                               | Type                                                     | Default                          | Version |
| ----------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------- | ------- |
| `[nzMentionTrigger]`    | Trigger element **(required)**                                                            | `HTMLTextAreaElement \| HTMLInputElement`                | -                                |
| `[nzMentionSuggestion]` | Customize the suggestion template                                                         | `TemplateRef<any>`                                       | -                                |
| `[nzLoading]`           | Loading mode                                                                              | `boolean`                                                | `false`                          |
| `[nzNotFoundContent]`   | Suggestion when suggestions empty                                                         | `string`                                                 | `'无匹配结果，轻敲空格完成输入'` |
| `[nzPlacement]`         | The position of the suggestion relative to the target, which can be one of top and bottom | `'button' \| 'top'`                                      | `'bottom'`                       |
| `[nzPrefix]`            | Character which will trigger Mention to show mention list                                 | `string \| string[]`                                     | `'@'`                            |
| `[nzSuggestions]`       | Suggestion content                                                                        | `any[]`                                                  | `[]`                             |
| `[nzStatus]`            | Set validation status                                                                     | `'error' \| 'warning'`                                   | -                                |
| `[nzAllowClear]`        | If allow to remove mentions content with clear icon                                       | `boolean`                                                | `false`                          | 20.3.0  |
| `[nzClearIcon]`         | The custom clear icon                                                                     | `TemplateRef<void>`                                      | -                                | 20.3.0  |
| `[nzVariant]`           | Variants of Input                                                                         | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'`                     | 20.3.0  |
| `[nzValueWith]`         | Function that maps an suggestion's value                                                  | `(any) => string \| (value: string) => string`           |
| `(nzOnSelect)`          | Callback function called when select from suggestions                                     | `EventEmitter<any>`                                      | -                                |
| `(nzOnSearchChange)`    | Callback function called when search content changes                                      | `EventEmitter<MentionOnSearchTypes>`                     | -                                |
| `(nzOnClear)`           | Callback function called when click on clear button                                       | `EventEmitter<void>`                                     | -                                |

#### Methods

| Name        | Description                                             |
| ----------- | ------------------------------------------------------- |
| getMentions | Get the mentions array in the `input[nzMentionTrigger]` |

### nzMentionTrigger

Trigger element

```html
<nz-mention>
  <textarea nzMentionTrigger></textarea>
</nz-mention>
```

```html
<nz-mention>
  <input nzMentionTrigger />
</nz-mention>
```

### nzMentionSuggestion

Customize the suggestion template

```html
<nz-mention [nzSuggestions]="items" [nzValueWith]="valueWith">
  <input nz-input nzMentionTrigger />
  <ng-container *nzMentionSuggestion="let item">
    <span>{{ item.label }} - {{ item.value }}</span>
  </ng-container>
</nz-mention>
```

### MentionOnSearchTypes

| Property | Description    | Type     | Default |
| -------- | -------------- | -------- | ------- |
| value    | Search keyword | `string` | -       |
| prefix   | prefix         | `string` | -       |

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Asynchronous loading

async

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { MentionOnSearchTypes, NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-async',
  imports: [FormsModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention [nzSuggestions]="suggestions" [nzLoading]="loading" (nzOnSearchChange)="onSearchChange($event)">
      <textarea rows="1" nzMentionTrigger nz-input [(ngModel)]="inputValue"></textarea>
    </nz-mention>
  `
})
export class NzDemoMentionAsyncComponent {
  inputValue?: string;
  loading = false;
  suggestions: string[] = [];

  onSearchChange({ value }: MentionOnSearchTypes): void {
    console.log(`search: ${value}`);
    this.loading = true;
    this.fetchSuggestions(value, suggestions => {
      console.log(suggestions);
      this.suggestions = suggestions;
      this.loading = false;
    });
  }

  fetchSuggestions(value: string, callback: (suggestions: string[]) => void): void {
    const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
    setTimeout(() => callback(users.filter(item => item.indexOf(value) !== -1)), 500);
  }
}
```

### autoSize

Height autoSize.

```typescript
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-auto-size',
  imports: [FormsModule, NzMentionModule, NzInputModule, CdkTextareaAutosize],
  template: `
    <nz-mention [nzSuggestions]="suggestions" (nzOnSelect)="onSelect($event)">
      <textarea
        nz-input
        placeholder="input here"
        nzMentionTrigger
        [(ngModel)]="inputValue"
        cdkTextareaAutosize
      ></textarea>
    </nz-mention>
  `
})
export class NzDemoMentionAutoSizeComponent {
  readonly inputValue = model('@afc163');
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }
}
```

### Icon Image

Customize suggestions.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-avatar',
  imports: [FormsModule, NzAvatarModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention [nzSuggestions]="webFrameworks" [nzValueWith]="valueWith" (nzOnSelect)="onSelect($event)">
      <textarea rows="1" nz-input nzMentionTrigger [(ngModel)]="inputValue"></textarea>
      <ng-container *nzMentionSuggestion="let framework">
        <nz-avatar nzSize="small" [nzText]="framework.name" [nzSrc]="framework.icon" />
        <span>{{ framework.name }} - {{ framework.type }}</span>
      </ng-container>
    </nz-mention>
  `,
  styles: `
    .ant-avatar.ant-avatar-sm {
      width: 14px;
      height: 14px;
      margin-right: 8px;
      position: relative;
    }
  `
})
export class NzDemoMentionAvatarComponent {
  inputValue?: string;
  webFrameworks = [
    { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
    { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
    { name: 'Dva', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
    { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' }
  ];

  valueWith = (data: { name: string; type: string; icon: string }): string => data.name;

  onSelect(value: string): void {
    console.log(value);
  }
}
```

### Basic

Basic usage.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-basic',
  imports: [FormsModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention [nzSuggestions]="suggestions" (nzOnSelect)="onSelect($event)">
      <textarea
        rows="1"
        placeholder="input here"
        nzMentionTrigger
        nz-input
        [(ngModel)]="inputValue"
        (ngModelChange)="onChange($event)"
      ></textarea>
    </nz-mention>
  `
})
export class NzDemoMentionBasicComponent {
  inputValue: string = '@afc163';
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  onChange(value: string): void {
    console.log(value);
  }

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }
}
```

### With clear icon

Customize clear button.

```typescript
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-clear',
  imports: [FormsModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention [nzSuggestions]="suggestions" (nzOnSelect)="onSelect($event)" nzAllowClear (nzOnClear)="onClear()">
      <textarea rows="1" placeholder="input here" nzMentionTrigger nz-input [(ngModel)]="inputValue"></textarea>
    </nz-mention>
    <br />
    <br />
    <nz-mention [nzSuggestions]="suggestions" (nzOnSelect)="onSelect($event)" nzAllowClear (nzOnClear)="onClear()">
      <textarea rows="3" placeholder="input here" nzMentionTrigger nz-input [(ngModel)]="inputValue"></textarea>
    </nz-mention>
  `
})
export class NzDemoMentionClearComponent {
  inputValue = model('@afc163');
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  onSelect(e: string): void {
    console.log(e);
  }

  onClear(): void {
    console.log('onClear');
  }
}
```

### Customize Suggestion

Customize suggestions.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-custom-tag',
  imports: [FormsModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention [nzSuggestions]="webFrameworks" [nzValueWith]="valueWith" (nzOnSelect)="onSelect($event)">
      <textarea rows="1" placeholder="@someone" nz-input nzMentionTrigger [(ngModel)]="inputValue"></textarea>
      <ng-container *nzMentionSuggestion="let framework">
        <span>{{ framework.name }} - {{ framework.type }}</span>
      </ng-container>
    </nz-mention>
  `
})
export class NzDemoMentionCustomTagComponent {
  inputValue?: string;
  webFrameworks = [
    { name: 'React', type: 'JavaScript' },
    { name: 'Angular', type: 'JavaScript' },
    { name: 'Laravel', type: 'PHP' },
    { name: 'Flask', type: 'Python' },
    { name: 'Django', type: 'Python' }
  ];

  valueWith = (data: { name: string; type: string }): string => data.name;

  onSelect(value: string): void {
    console.log(value);
  }
}
```

### With Form

Controlled mode, for example, to work with `Form`.

```typescript
import { Component, inject, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionComponent, NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-form',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzMentionModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSm]="6" nzFor="mention">Top coders</nz-form-label>
        <nz-form-control [nzSm]="16" nzErrorTip="More than one must be selected!">
          <nz-mention #mentions [nzSuggestions]="suggestions">
            <textarea
              nz-input
              nzMentionTrigger
              formControlName="mention"
              rows="3"
              id="mention"
              placeholder="input here"
            ></textarea>
          </nz-mention>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row style="margin-bottom:8px;">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <div class="cta-wrapper">
            <button type="button" nz-button nzType="primary" (click)="submitForm()">Submit</button>
            <button type="button" nz-button (click)="resetForm()">Reset</button>
          </div>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: `
    .cta-wrapper {
      display: flex;
      gap: 1rem;
    }
  `
})
export class NzDemoMentionFormComponent {
  readonly suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご', 'ParsaArvaneh'];
  @ViewChild('mentions', { static: true }) mentionChild!: NzMentionComponent;

  mentionValidator: ValidatorFn = (control: AbstractControl): ValidationErrors => {
    if (!control.value) {
      return { required: true };
    } else if (this.mentionChild?.getMentions().length < 2) {
      return { confirm: true, error: true };
    }
    return {};
  };

  private fb = inject(FormBuilder);
  validateForm = this.fb.group(
    {
      mention: ['Hello @afc163 ', [Validators.required, this.mentionValidator]]
    },
    { updateOn: 'blur' }
  );

  get mention(): FormControl<string | null> {
    return this.validateForm.controls.mention;
  }

  submitForm(): void {
    this.mention.markAsDirty();
    this.mention.updateValueAndValidity();

    console.log('form value: ', this.validateForm.value);
    if (this.mention.valid) {
      console.log('Submit:', this.mention.value);
      console.log('Mentions:', this.mentionChild.getMentions());
    } else {
      console.log('Errors in form!!!');
    }
  }

  resetForm(): void {
    this.validateForm.reset({
      mention: 'Hello @afc163 '
    });
  }
}
```

### Placement

Change the suggestions placement.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-placement',
  imports: [FormsModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention nzPlacement="top" [nzSuggestions]="suggestions" (nzOnSelect)="onSelect($event)">
      <textarea
        rows="1"
        nzMentionTrigger
        nz-input
        [(ngModel)]="inputValue"
        (ngModelChange)="onChange($event)"
      ></textarea>
    </nz-mention>
  `
})
export class NzDemoMentionPlacementComponent {
  inputValue?: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  onChange(value: string): void {
    console.log(value);
  }

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }
}
```

### Customize Trigger Token

Customize Trigger Token by `nzPrefix` props. Default to `@`, `Array<string>` also supported.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { MentionOnSearchTypes, NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-prefix',
  imports: [FormsModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention [nzSuggestions]="suggestions" (nzOnSearchChange)="onSearchChange($event)" [nzPrefix]="['#', '@']">
      <textarea
        rows="1"
        placeholder="input @ to mention people, # to mention tag"
        nzMentionTrigger
        nz-input
        [(ngModel)]="inputValue"
      ></textarea>
    </nz-mention>
  `
})
export class NzDemoMentionPrefixComponent {
  inputValue?: string;
  suggestions: string[] = [];
  users = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  tags = ['1.0', '2.0', '3.0'];

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    console.log('nzOnSearchChange', value, prefix);
    this.suggestions = prefix === '@' ? this.users : this.tags;
  }
}
```

### Preview

Rendering the mentions.

```typescript
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-mention-preview',
  imports: [FormsModule, NzInputModule, NzMentionModule, NzTabsModule, CdkTextareaAutosize],
  template: `
    <nz-tabs>
      <nz-tab nzTitle="Write">
        <nz-mention [nzSuggestions]="suggestions">
          <textarea
            nz-input
            cdkTextareaAutosize
            cdkAutosizeMinRows="4"
            cdkAutosizeMaxRows="4"
            [(ngModel)]="inputValue"
            (ngModelChange)="renderPreView()"
            nzMentionTrigger
          ></textarea>
        </nz-mention>
      </nz-tab>
      <nz-tab nzTitle="Preview">
        <pre [innerHTML]="preview"></pre>
      </nz-tab>
    </nz-tabs>
  `
})
export class NzDemoMentionPreviewComponent {
  inputValue: string = 'Switch tab view preview @NG-ZORRO ';
  preview?: SafeHtml;
  suggestions = ['NG-ZORRO', 'angular', 'Reactive-Extensions'];

  constructor(private sanitizer: DomSanitizer) {
    this.renderPreView();
  }

  getRegExp(prefix: string | string[]): RegExp {
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');

    if (prefixArray.length > 1) {
      prefixToken = `[${prefixToken}]`;
    }

    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
  }

  renderPreView(): void {
    if (this.inputValue) {
      const regex = this.getRegExp('@');
      const previewValue = this.inputValue.replace(
        regex,
        match => `<a target="_blank" href="https://github.com/${match.trim().substring(1)}">${match}</a>`
      );
      this.preview = this.sanitizer.bypassSecurityTrustHtml(previewValue);
    }
  }
}
```

### disabled or readOnly

Configurate `disabled` and `readOnly`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-readonly',
  imports: [FormsModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention [nzSuggestions]="suggestions" style="margin-bottom: 8px">
      <textarea
        rows="1"
        placeholder="this is disabled Mention"
        nzMentionTrigger
        nz-input
        disabled
        [(ngModel)]="inputValue"
      ></textarea>
    </nz-mention>
    <nz-mention [nzSuggestions]="suggestions">
      <textarea
        rows="1"
        placeholder="this is readOnly Mention"
        nzMentionTrigger
        nz-input
        readOnly
        [(ngModel)]="inputValue"
      ></textarea>
    </nz-mention>
  `
})
export class NzDemoMentionReadonlyComponent {
  inputValue?: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
}
```

### Status

Add status to Mentions with `nzStatus`, which could be `error` or `warning`。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@Component({
  selector: 'nz-demo-mention-status',
  imports: [FormsModule, NzInputModule, NzMentionModule],
  template: `
    <nz-mention [nzSuggestions]="suggestions" nzStatus="error" style="margin-bottom: 8px;">
      <textarea rows="1" nz-input placeholder="input here" [(ngModel)]="inputValue" nzMentionTrigger></textarea>
    </nz-mention>
    <nz-mention [nzSuggestions]="suggestions" nzStatus="warning">
      <textarea rows="1" nz-input placeholder="input here" [(ngModel)]="inputValue" nzMentionTrigger></textarea>
    </nz-mention>
  `
})
export class NzDemoMentionStatusComponent {
  inputValue: string = '@afc163';
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
}
```

### Variants

Variants of Mentions, there are four variants: `outlined` `filled` `borderless` and `underlined`.

```typescript
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzVariant } from 'ng-zorro-antd/core/types';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-mention-variant',
  imports: [FormsModule, NzInputModule, NzMentionModule, NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="variants" [(ngModel)]="variant" />
    <nz-mention [nzSuggestions]="suggestions" (nzOnSelect)="onSelect($event)" [nzVariant]="variant()">
      <textarea rows="1" placeholder="input here" nzMentionTrigger nz-input [(ngModel)]="inputValue"></textarea>
    </nz-mention>
  `,
  styles: `
    nz-segmented {
      margin-bottom: 1rem;
    }
  `
})
export class NzDemoMentionVariantComponent {
  inputValue = model('@afc163');
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  variant = model<NzVariant>('outlined');
  variants = [
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Borderless', value: 'borderless' },
    { label: 'Underlined', value: 'underlined' }
  ];

  onSelect(value: string): void {
    console.log(value);
  }
}
```
