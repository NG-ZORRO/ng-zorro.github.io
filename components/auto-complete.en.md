---
category: Components
type: Data Entry
title: AutoComplete
cover: 'https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg'
description: AutoComplete function of input field.
---

## When To Use

When there is a need for autocomplete functionality.

## API

```html
<input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" />
<nz-autocomplete [nzDataSource]="['12345', '23456', '34567']" #auto></nz-autocomplete>
```

```html
<input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" />
<nz-autocomplete #auto>
  <nz-auto-option [nzValue]="'12345'">12345</nz-auto-option>
  <nz-auto-option [nzValue]="'23456'">23456</nz-auto-option>
  <nz-auto-option [nzValue]="'34567'">34567</nz-auto-option>
</nz-autocomplete>
```

### [nzAutocomplete]

| Property           | Description                              | Type                      | Default |
| ------------------ | ---------------------------------------- | ------------------------- | ------- |
| `[nzAutocomplete]` | used to bind `nzAutocomplete` components | `NzAutocompleteComponent` | -       |

### nz-autocomplete

| Property                       | Description                                                                                    | Type                            | Default                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------- |
| `[nzBackfill]`                 | backfill selected item the input when using keyboard                                           | `boolean`                       | `false`                         |
| `[nzDataSource]`               | Data source for autocomplete                                                                   | `AutocompleteDataSource`        | -                               |
| `[nzDefaultActiveFirstOption]` | Whether active first option by default                                                         | `boolean`                       | `true`                          |
| `[nzWidth]`                    | Custom width, unit px                                                                          | `number`                        | trigger element width           |
| `[nzOverlayClassName]`         | Class name of the dropdown root element                                                        | `string`                        | -                               |
| `[nzOverlayStyle]`             | Style of the dropdown root element                                                             | `object`                        | -                               |
| `[compareWith]`                | Same as [SelectControlValueAccessor](https://angular.dev/api/forms/SelectControlValueAccessor) | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |

### nz-auto-option

| Property       | Description                          | Type      | Default |
| -------------- | ------------------------------------ | --------- | ------- |
| `[nzValue]`    | bind ngModel of the trigger element  | `any`     | -       |
| `[nzLabel]`    | display value of the trigger element | `string`  | -       |
| `[nzDisabled]` | disabled option                      | `boolean` | `false` |

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Basic Usage

Basic Usage, set `nzDataSource` of `nz-autocomplete` with dataSource property.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-basic',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <input
      placeholder="input here"
      nz-input
      [(ngModel)]="inputValue"
      (input)="onInput($event)"
      [nzAutocomplete]="auto"
    />
    <nz-autocomplete [nzDataSource]="option()" nzBackfill #auto />
  `
})
export class NzDemoAutoCompleteBasicComponent {
  inputValue?: string;
  readonly option = signal<string[]>([]);

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.option.set(value ? [value, value + value, value + value + value] : []);
  }
}
```

### Lookup-Patterns - Certain Category

Demonstration of [Lookup Patterns: Certain Category](https://ant.design/docs/spec/reaction#Lookup-Patterns).

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-certain-category',
  imports: [FormsModule, NzAutocompleteModule, NzFlexModule, NzIconModule, NzInputModule],
  template: `
    <nz-input-search>
      <input placeholder="input here" nz-input nzSize="large" [(ngModel)]="value" [nzAutocomplete]="auto" />
    </nz-input-search>
    <nz-autocomplete #auto>
      @for (group of options; track group.title) {
        <nz-auto-optgroup [nzLabel]="groupTitle">
          <ng-template #groupTitle>
            <nz-flex nzJustify="space-between">
              {{ group.title }}
              <a href="https://www.google.com/search?q=ng+zorro" rel="noopener noreferrer" target="_blank">More</a>
            </nz-flex>
          </ng-template>
          @for (option of group.children; track option.title) {
            <nz-auto-option [nzLabel]="option.title" [nzValue]="option.title">
              <nz-flex nzJustify="space-between">
                {{ option.title }}
                <span>
                  <nz-icon nzType="user" />
                  {{ option.count }}
                </span>
              </nz-flex>
            </nz-auto-option>
          }
        </nz-auto-optgroup>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteCertainCategoryComponent {
  value?: string;
  readonly options = [
    {
      title: 'Libraries',
      children: [
        {
          title: 'AntDesign',
          count: 10000
        },
        {
          title: 'AntDesign UI',
          count: 10600
        }
      ]
    },
    {
      title: 'Solutions',
      children: [
        {
          title: 'AntDesign UI FAQ',
          count: 60100
        },
        {
          title: 'AntDesign FAQ',
          count: 30010
        }
      ]
    },
    {
      title: 'Articles',
      children: [
        {
          title: 'AntDesign design language',
          count: 100000
        }
      ]
    }
  ];
}
```

### Customize Input Component

Customize Input Component

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-custom',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <textarea
      placeholder="input here"
      nz-input
      rows="4"
      [(ngModel)]="inputValue"
      (input)="onInput($event)"
      [nzAutocomplete]="auto"
    ></textarea>
    <nz-autocomplete #auto>
      @for (option of options(); track $index) {
        <nz-auto-option [nzValue]="option">{{ option }}</nz-auto-option>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteCustomComponent {
  inputValue?: string;
  readonly options = signal<string[]>([]);

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options.set(value ? [value, value + value, value + value + value] : []);
  }
}
```

### Non-case-sensitive AutoComplete

A non-case-sensitive AutoComplete

```typescript
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-non-case-sensitive',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <input placeholder='try to type "b"' nz-input [(ngModel)]="value" [nzAutocomplete]="auto" />
    <nz-autocomplete [nzDataSource]="filteredOptions()" #auto />
  `
})
export class NzDemoAutoCompleteNonCaseSensitiveComponent {
  readonly value = signal<string>('');
  readonly options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  readonly filteredOptions = computed(() =>
    this.options.filter(option => option.toLowerCase().indexOf(this.value().toLowerCase()) !== -1)
  );
}
```

### Use option with object type

Use `compareWith`([SelectControlValueAccessor](https://angular.dev/api/forms/SelectControlValueAccessor)) when the `nzValue` and `ngModel` type is `object`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

interface Option {
  label: string;
  value: string;
  age: number;
}

@Component({
  selector: 'nz-demo-auto-complete-object-value',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <input placeholder="input here" nz-input [(ngModel)]="inputValue" [nzAutocomplete]="auto" />
    <nz-autocomplete #auto [compareWith]="compareFn">
      @for (option of options; track $index) {
        <nz-auto-option [nzValue]="option" [nzLabel]="option.label">
          {{ option.label }}
        </nz-auto-option>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteObjectValueComponent {
  inputValue: Option = { label: 'Lucy', value: 'lucy', age: 20 };
  readonly options: Option[] = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];
  readonly compareFn = (o1: Option | string, o2: Option): boolean => {
    if (o1) {
      return typeof o1 === 'string' ? o1 === o2.label : o1.value === o2.value;
    } else {
      return false;
    }
  };
}
```

### Customized

You could pass `nz-auto-option` as Content of `nz-autocomplete`, instead of using nzDataSource`.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-options',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <input placeholder="input here" nz-input [(ngModel)]="value" (input)="onInput($event)" [nzAutocomplete]="auto" />
    <nz-autocomplete #auto>
      @for (option of options(); track $index) {
        <nz-auto-option [nzValue]="option">{{ option }}</nz-auto-option>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteOptionsComponent {
  value?: string;
  readonly options = signal<string[]>([]);

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.options.set([]);
    } else {
      this.options.set(['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`));
    }
  }
}
```

### Status

Add status to AutoComplete with `nzStatus`, which could be `error` or `warning`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-status',
  imports: [FormsModule, NzAutocompleteModule, NzFlexModule, NzInputModule],
  template: `
    <nz-flex nzVertical nzGap="1rem">
      <input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" nzStatus="error" />
      <input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" nzStatus="warning" />
    </nz-flex>
    <nz-autocomplete [nzDataSource]="['12345', '23456', '34567']" #auto />
  `
})
export class NzDemoAutoCompleteStatusComponent {
  value?: string;
}
```

### Lookup-Patterns - Uncertain Category

Demonstration of [Lookup Patterns: Uncertain Category](https://ant.design/docs/spec/reaction#Lookup-Patterns).

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-uncertain-category',
  imports: [FormsModule, NzAutocompleteModule, NzFlexModule, NzInputModule],
  template: `
    <nz-input-search nzEnterButton>
      <input
        nz-input
        placeholder="input here"
        nzSize="large"
        [(ngModel)]="value"
        (input)="onChange($event)"
        [nzAutocomplete]="auto"
      />
    </nz-input-search>
    <nz-autocomplete #auto>
      @for (option of options(); track option.category) {
        <nz-auto-option [nzValue]="option.category">
          <nz-flex nzJustify="space-between">
            <span>
              Found {{ option.value }} on
              <a href="https://s.taobao.com/search?q={{ option.value }}" target="_blank" rel="noopener noreferrer">
                {{ option.category }}
              </a>
            </span>
            <span>{{ option.count }} results</span>
          </nz-flex>
        </nz-auto-option>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteUncertainCategoryComponent {
  value?: string;
  readonly options = signal<Array<{ value: string; category: string; count: number }>>([]);

  onChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.options.set(
      new Array(this.getRandomInt(5, 15))
        .join('.')
        .split('.')
        .map((_item, idx) => ({
          value,
          category: `${value}${idx}`,
          count: this.getRandomInt(200, 100)
        }))
    );
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
```

### Variants

Variant is supported out of the box by using `nz-input` and setting `nzVariant` to `outlined`, `underlined`, `filled` and `borderless`

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzVariant } from 'ng-zorro-antd/core/types';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-variant',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule, NzFlexModule],
  template: `
    <nz-flex nzVertical nzGap="1rem">
      @for (variant of variants; track variant) {
        <input
          placeholder="input here"
          nz-input
          [(ngModel)]="value"
          (input)="onInput($event)"
          [nzAutocomplete]="auto"
          [nzVariant]="variant"
        />
        <nz-autocomplete [nzDataSource]="options()" nzBackfill #auto />
      }
    </nz-flex>
  `
})
export class NzDemoAutoCompleteVariantComponent {
  value?: string;
  readonly variants: NzVariant[] = ['outlined', 'filled', 'borderless', 'underlined'];
  readonly options = signal<string[]>([]);

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options.set(value ? [value, value + value, value + value + value] : []);
  }
}
```
