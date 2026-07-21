---
category: Components
subtitle: 提及
type: 数据录入
title: Mention
cover: 'https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg'
description: 用于在输入中提及某人或某事。
---

## 何时使用

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## API

```html
<nz-mention [nzSuggestions]="suggestions">
  <textarea nz-input [(ngModel)]="value" nzMentionTrigger> </textarea>
</nz-mention>
```

### nz-mention

| 参数                    | 说明                              | 类型                                                     | 默认值                           | 版本   |
| ----------------------- | --------------------------------- | -------------------------------------------------------- | -------------------------------- | ------ |
| `[nzMentionTrigger]`    | 用于指定提及的触发元素 **(必须)** | `HTMLTextAreaElement \| HTMLInputElement`                | -                                |
| `[nzMentionSuggestion]` | 自定义建议渲染模板                | `TemplateRef<any>`                                       | -                                |
| `[nzLoading]`           | 加载中                            | `boolean`                                                | `false`                          |
| `[nzNotFoundContent]`   | 未找到时的内容                    | `string`                                                 | `'无匹配结果，轻敲空格完成输入'` |
| `[nzPlacement]`         | 建议框位置                        | `'bottom' \| 'top'`                                      | `'bottom'`                       |
| `[nzPrefix]`            | 触发弹出下拉框的字符              | `string \| string[]`                                     | `'@'`                            |
| `[nzSuggestions]`       | 建议内容                          | `any[]`                                                  | `[]`                             |
| `[nzStatus]`            | 设置校验状态                      | `'error' \| 'warning'`                                   | -                                |
| `[nzAllowClear]`        | 支持清除                          | `boolean`                                                | `false`                          | 20.3.0 |
| `[nzClearIcon]`         | 自定义的多选框清空图标            | `TemplateRef<void>`                                      | -                                | 20.3.0 |
| `[nzVariant]`           | 形态变体                          | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'`                     | 20.3.0 |
| `[nzValueWith]`         | 建议选项的取值方法                | `(any) => string \| (value: string) => string`           | -                                |
| `(nzOnSelect)`          | 下拉框选择建议时回调              | `EventEmitter<any>`                                      | -                                |
| `(nzOnSearchChange)`    | 输入框中 @ 变化时回调             | `EventEmitter<MentionOnSearchTypes>`                     | -                                |
| `(nzOnClear)`           | 清空已选项时触发的回调函数        | `EventEmitter<void>`                                     | -                                |

#### 方法

| 方法名      | 说明                                        |
| ----------- | ------------------------------------------- |
| getMentions | 获取 `input[nzMentionTrigger]` 中的提及数组 |

### nzMentionTrigger

用于指定提及的触发元素

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

自定义建议渲染模板

```html
<nz-mention [nzSuggestions]="items" [nzValueWith]="valueWith">
  <input nz-input nzMentionTrigger />
  <ng-container *nzMentionSuggestion="let item">
    <span>{{ item.label }} - {{ item.value }}</span>
  </ng-container>
</nz-mention>
```

### MentionOnSearchTypes

| 参数   | 说明       | 类型     | 默认值 |
| ------ | ---------- | -------- | ------ |
| value  | 搜索关键词 | `string` | -      |
| prefix | 触发前缀   | `string` | -      |

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 异步加载

匹配内容列表为异步返回时。

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

### 自动大小

自适应内容高度。

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

### 头像

自定义建议（含头像）

注意，`nzSuggestions` 不为 `string[]` 时，需要提供 `nzValueWith`。

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

### 基本使用

基本使用

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

### 带移除图标

自定义清除按钮。

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

### 自定义建议

自定义建议

注意，`nzSuggestions` 不为 `string[]` 时，需要提供 `nzValueWith`。

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

### 配合 Form 使用

受控模式，例如配合 Form 使用。

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

### 向上展开

向上展开建议。

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

### 自定义触发字符

通过 `nzPrefix` 属性自定义触发字符。默认为 `@`, 可以定义为数组。

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

### 预览

渲染提及

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

### 无效或只读

通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。

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

### 自定义状态

使用 `nzStatus` 为 Mentions 添加状态。可选 `error` 或者 `warning`。

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

### 形态变体

Mentions 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

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
