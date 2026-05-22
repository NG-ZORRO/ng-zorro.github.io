---
category: Components
type: Data Entry
title: Cascader
cover: 'https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg'
description: Cascade selection box.
---

## When To Use

- When you need to select from a set of a hierarchical structure. Such as province/city/district, company level, and classification.
- When selecting from a large data set, with multi-stage classification separated for easy selection.
- Chooses cascade items in one float layer for a better user experience.

## API

### nz-cascader

| Property                | Description                                                                                                                            | Type                                                                     | Default           | Global Config | Version |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------- | ------------- | ------- |
| `[ngModel]`             | selected value                                                                                                                         | `any[]`                                                                  | -                 |
| `[nzAllowClear]`        | whether allow clear                                                                                                                    | `boolean`                                                                | `true`            |
| `[nzAutoFocus]`         | whether auto focus the input box                                                                                                       | `boolean`                                                                | `false`           |
| `[nzBackdrop]`          | whether or not the overlay should attach a backdrop                                                                                    | `boolean`                                                                | `false`           |
| `[nzChangeOn]`          | change value on each selection if this function returns `true`                                                                         | `(option: any, index: number) => boolean`                                | -                 |
| `[nzChangeOnSelect]`    | change value on each selection if set to true, see above demo for details                                                              | `boolean`                                                                | `false`           |
| `[nzColumnClassName]`   | additional className of column in the popup overlay                                                                                    | `string`                                                                 | -                 |
| `[nzDisabled]`          | whether select should be disabled                                                                                                      | `boolean`                                                                | `false`           |
| `[nzExpandIcon]`        | customize the current item expand icon                                                                                                 | `string \| TemplateRef<void>`                                            | -                 |
| `[nzExpandTrigger]`     | expand current item when clicked or hovered, one of 'click' 'hover'                                                                    | `'click' \| 'hover'`                                                     | `'click'`         |
| `[nzLabelProperty]`     | the label property name of options                                                                                                     | `string`                                                                 | `'label'`         |
| `[nzLabelRender]`       | render template of displaying selected options                                                                                         | `TemplateRef<{ labels: string[], selectedOptions: NzCascaderOption[] }>` | -                 |
| `[nzLoadData]`          | to load option lazily. Lazy load will be called immediately if the setting is `ngModel` with an array value and `nzOptions` is not set | `(option: any, index?: index) => PromiseLike<any> \| Observable<any>`    | -                 |
| `[nzMenuClassName]`     | additional className of popup overlay                                                                                                  | `string`                                                                 | -                 |
| `[nzMouseEnterDelay]`   | duration in milliseconds before opening the popup overlay when the mouse enters the trigger                                            | `number`                                                                 | `150`             |
| `[nzMouseLeaveDelay]`   | duration in milliseconds before closing the popup overlay when the mouse leaves the trigger                                            | `number`                                                                 | `150`             |
| `[nzMenuStyle]`         | additional css style of popup overlay                                                                                                  | `object`                                                                 | -                 |
| `[nzMultiple]`          | support multiple or not                                                                                                                | `boolean`                                                                | `false`           |
| `[nzNotFoundContent]`   | specify content to show when no result matches                                                                                         | `string \| TemplateRef<void>`                                            | -                 |
| `[nzOptionRender]`      | render template of cascader options                                                                                                    | `TemplateRef<{ $implicit: NzCascaderOption, index: number }>`            |                   |
| `[nzOptions]`           | data options of cascade                                                                                                                | `object[]`                                                               | -                 |
| `[nzOpen]`              | Set visible of cascader popup                                                                                                          | `boolean`                                                                | -                 | -             | 20.2.0  |
| `[nzPlaceHolder]`       | input placeholder                                                                                                                      | `string`                                                                 | `'Please select'` |
| `[nzPlacement]`         | popup placement                                                                                                                        | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'`               | `'bottomLeft'`    |
| `[nzPopupRender]`       | customize dropdown content                                                                                                             | `TemplateRef<{ $implicit: TemplateRef<void> }>`                          | -                 |
| `[nzShowArrow]`         | whether show arrow                                                                                                                     | `boolean`                                                                | `true`            |
| `[nzShowInput]`         | whether show input                                                                                                                     | `boolean`                                                                | `true`            |
| `[nzShowSearch]`        | whether support search. Cannot be used with `[nzLoadData]` at the same time                                                            | `boolean \| NzShowSearchOptions`                                         | `false`           |
| `[nzSize]`              | input size, one of `large` `default` `small`                                                                                           | `'large' \| 'small' \| 'default'`                                        | `'default'`       | ✅            |
| `[nzStatus]`            | set validation status                                                                                                                  | `'error' \| 'warning'`                                                   | -                 |
| `[nzPrefix]`            | custom prefix                                                                                                                          | `string\|TemplateRef<void>`                                              | -                 | -             | 20.2.0  |
| `[nzSuffixIcon]`        | custom suffix icon                                                                                                                     | `string\|TemplateRef<void>`                                              | -                 |
| `[nzValueProperty]`     | value property name of options                                                                                                         | `string`                                                                 | `'value'`         |
| `[nzVariant]`           | Variants of Cascader                                                                                                                   | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`                 | `'outlined'`      | ✅            | 20.0.0  |
| `(ngModelChange)`       | emit on values change                                                                                                                  | `EventEmitter<any[]>`                                                    | -                 |
| `(nzClear)`             | emit on clear values                                                                                                                   | `EventEmitter<void>`                                                     | -                 |
| `(nzRemoved)`           | emit on selected item removed when `nzMultiple` is `true`                                                                              | `EventEmitter<NzCascaderOption>`                                         | -                 |
| `(nzSelectionChange)`   | emit on values change                                                                                                                  | `EventEmitter<NzCascaderOption[]>`                                       | -                 |
| `(nzOpenChange)`        | emit on popup menu open or close                                                                                                       | `EventEmitter<boolean>`                                                  | -                 |
| ~~`(nzVisibleChange)`~~ | emit on popup menu visible or hide, deprecated, use `(nzOpenChange)` instead                                                           | `EventEmitter<boolean>`                                                  | -                 |

### Interfaces

#### NzCascaderOption

```ts
export interface NzCascaderOption {
  value?: any;
  label?: string;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  isLeaf?: boolean;
  children?: NzCascaderOption[];
  disableCheckbox?: boolean;

  [key: string]: any;
}
```

#### NzShowSearchOptions

When `nzShowSearch` is an object it should implement `NzShowSearchOptions`:

| Params   | Explanation                                                            | Type                                                                         | Default |
| -------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------- |
| `filter` | Optional. Be aware that all non-leaf CascaderOptions would be filtered | `(inputValue: string, path: NzCascaderOption[]): boolean`                    | -       |
| `sorter` | Optional                                                               | `(a: NzCascaderOption[], b: NzCascaderOption[], inputValue: string): number` | -       |

The default filter looks as follows:

```ts
const defaultFilter: NzCascaderFilter = (i, p) => {
  return p.some(o => {
    const label = o.label;
    return !!label && label.indexOf(i) !== -1;
  });
};
```

For example, if you would like to ignore lower or upper case, you could use a filter function like this:

```ts
const filter: NzCascaderFilter = (i, p) => {
  return p.some(o => {
    const label = o.label;
    return !!label && label.toLowerCase().indexOf(i.toLowerCase()) !== -1;
  });
};
```

#### Methods

| Name          | Description   |
| ------------- | ------------- |
| `blur()`      | remove focus  |
| `focus()`     | get focus     |
| `closeMenu()` | hide the menu |

## FAQ

### Q: An error is thrown when `nzLoadData` is used.

When you pass a function to `nzLoadData`, the function becomes a `NzCascaderComponent` property.
When the component calls the `nzLoadData` function, `this` is bound to nothing. You have to pass an arrow function or use `Function.bind` to bind `this` to the parent component.
[see example](https://stackoverflow.com/questions/60320913/ng-zorro-cascader-lazy-load-data-nzloaddata-function-got-this-undefined/60928983#60928983).

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Basic

Cascade selection box for selecting province/city/district.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-basic',
  imports: [FormsModule, NzCascaderModule],
  template: `<nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)" />`
})
export class NzDemoCascaderBasicComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string): void {
    console.log(values, this.values);
  }
}
```

### Select specified

Allow select option only on `nzChangeOn` return true.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        children: [
          {
            value: 'dongqianlake',
            label: 'Dongqian Lake',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-change-on-function',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader
      [nzChangeOn]="validate"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    />
  `
})
export class NzDemoCascaderChangeOnFunctionComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  validate(option: NzCascaderOption, _index: number): boolean {
    const value = option.value as string;
    return ['hangzhou', 'xihu', 'nanjing', 'zhonghuamen'].indexOf(value) >= 0;
  }
}
```

### Change on select

Allow only select parent options.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-change-on-select',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader nzChangeOnSelect [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)" />
  `
})
export class NzDemoCascaderChangeOnSelectComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}
```

### Custom Field Names

Custom field names.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    children: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        children: [
          {
            code: 'xihu',
            name: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        code: 'ningbo',
        name: 'Ningbo',
        children: [
          {
            code: 'dongqianlake',
            name: 'Dongqian Lake',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    children: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        children: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-custom-field-names',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader
      [nzChangeOn]="validate"
      [nzOptions]="nzOptions"
      nzLabelProperty="name"
      nzValueProperty="code"
      [nzShowSearch]="true"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    />
  `
})
export class NzDemoCascaderCustomFieldNamesComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  validate(option: NzCascaderOption, _index: number): boolean {
    const value = option.value as string;
    return ['hangzhou', 'xihu', 'nanjing', 'zhonghuamen'].indexOf(value) >= 0;
  }
}
```

### Custom render

For instance, add an external link after the selected value.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            code: 752100,
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        code: '315000',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400,
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-custom-render',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader
      style="width: 100%;"
      [nzLabelRender]="renderTpl"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    />

    <ng-template #renderTpl let-labels="labels" let-selectedOptions="selectedOptions">
      @for (label of labels; track label) {
        @if (!$last) {
          <span>{{ label }} /</span>
        } @else {
          <span>
            {{ label }} (
            <a href="javascript:;" (click)="handleAreaClick($event, label, selectedOptions[$index])">
              {{ selectedOptions[$index].code }}
            </a>
            )
          </span>
        }
      }
    </ng-template>
  `
})
export class NzDemoCascaderCustomRenderComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  handleAreaClick(e: Event, label: string, option: NzCascaderOption): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('clicked "', label, '"', option);
  }
}
```

### Custom option template

Custom cascader option template.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    label: 'Ant Design',
    value: 'antd',
    children: [
      {
        label: 'ng-zorro-antd',
        value: 'ng-zorro-antd',
        isLeaf: true
      }
    ]
  },
  {
    label: 'Angular',
    value: 'angular',
    children: [
      {
        label: 'CDK',
        value: 'cdk',
        isLeaf: true
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-custom-template',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader
      [nzOptionRender]="renderTpl"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    />
    <ng-template #renderTpl let-option let-index="index">{{ index + 1 }}. {{ option.label }}</ng-template>
  `
})
export class NzDemoCascaderCustomTemplateComponent {
  readonly nzOptions = options;
  values: string[] | null = null;

  onChanges(values: string): void {
    console.log(values, this.values);
  }
}
```

### Default value and async options

Specifies default value by an array, and setting `nzOptions` in a asynchronous way.

```typescript
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-default-value-and-async-options',
  imports: [FormsModule, NzCascaderModule],
  template: `<nz-cascader [(ngModel)]="values" [nzOptions]="nzOptions()" (ngModelChange)="onChanges($event)" />`
})
export class NzDemoCascaderDefaultValueAndAsyncOptionsComponent implements OnInit {
  readonly nzOptions = signal<NzCascaderOption[] | null>(null);
  values: string[] = ['zhejiang', 'hangzhou', 'xihu'];

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  ngOnInit(): void {
    setTimeout(() => this.nzOptions.set(options), 500);
  }
}
```

### Default value and Lazy load

Specifies default value by an array, but `nzOptions` is `null`/empty, data are loaded by `nzLoadData` function.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const provinces = [
  {
    value: 'zhejiang',
    label: 'Zhejiang'
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu'
  }
];

const cities: { [key: string]: Array<{ value: string; label: string; isLeaf?: boolean }> } = {
  zhejiang: [
    {
      value: 'hangzhou',
      label: 'Hangzhou'
    },
    {
      value: 'ningbo',
      label: 'Ningbo',
      isLeaf: true
    }
  ],
  jiangsu: [
    {
      value: 'nanjing',
      label: 'Nanjing'
    }
  ]
};

const scenicspots: { [key: string]: Array<{ value: string; label: string; isLeaf?: boolean }> } = {
  hangzhou: [
    {
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }
  ],
  nanjing: [
    {
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }
  ]
};

@Component({
  selector: 'nz-demo-cascader-default-value-and-lazy-load',
  imports: [FormsModule, NzCascaderModule],
  template: `<nz-cascader [(ngModel)]="values" [nzLoadData]="loadData" (ngModelChange)="onChanges($event)" />`
})
export class NzDemoCascaderDefaultValueAndLazyLoadComponent {
  values: string[] = ['zhejiang', 'hangzhou', 'xihu'];

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  /** load data async execute by `nzLoadData` method */
  loadData(node: NzCascaderOption, index: number): PromiseLike<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (index < 0) {
          // if index less than 0 it is root node
          node.children = provinces;
        } else if (index === 0) {
          node.children = cities[node.value];
        } else {
          node.children = scenicspots[node.value];
        }
        resolve();
      }, 1000);
    });
  }
}
```

### Default value

Specifies default value by an array.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-default-value',
  imports: [FormsModule, NzCascaderModule],
  template: `<nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)" />`
})
export class NzDemoCascaderDefaultValueComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] = ['zhejiang', 'hangzhou', 'xihu'];

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}
```

### Disabled option

Disable option by specifying the `disabled` property in `options`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-disabled',
  imports: [FormsModule, NzCascaderModule],
  template: `<nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)" />`
})
export class NzDemoCascaderDisabledComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}
```

### Hover

Hover to expand sub menu, click to select option.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-hover',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader
      nzExpandTrigger="hover"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    />
  `
})
export class NzDemoCascaderHoverComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}
```

### Load Options Lazily

Load options lazily with `nzLoadData`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const provinces = [
  {
    value: 'zhejiang',
    label: 'Zhejiang'
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu'
  }
];

const cities: { [key: string]: Array<{ value: string; label: string; isLeaf?: boolean }> } = {
  zhejiang: [
    {
      value: 'hangzhou',
      label: 'Hangzhou'
    },
    {
      value: 'ningbo',
      label: 'Ningbo',
      isLeaf: true
    }
  ],
  jiangsu: [
    {
      value: 'nanjing',
      label: 'Nanjing'
    }
  ]
};

const scenicspots: { [key: string]: Array<{ value: string; label: string; isLeaf?: boolean }> } = {
  hangzhou: [
    {
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }
  ],
  nanjing: [
    {
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }
  ]
};

@Component({
  selector: 'nz-demo-cascader-lazy',
  imports: [FormsModule, NzCascaderModule],
  template: `<nz-cascader [(ngModel)]="values" [nzLoadData]="loadData" (ngModelChange)="onChanges($event)" />`
})
export class NzDemoCascaderLazyComponent {
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values);
  }

  /** load data async execute by `nzLoadData` method */
  loadData(node: NzCascaderOption, index: number): PromiseLike<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (index < 0) {
          // if index less than 0 it is root node
          node.children = provinces;
        } else if (index === 0) {
          node.children = cities[node.value];
        } else {
          node.children = scenicspots[node.value];
        }
        resolve();
      }, 1000);
    });
  }
}
```

### Modal Dialog

Show Cascade selection box in a modal dialog.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzModalModule } from 'ng-zorro-antd/modal';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-modal',
  imports: [FormsModule, NzButtonModule, NzModalModule, NzCascaderModule],
  template: `
    <nz-modal
      [(nzVisible)]="isVisible"
      nzTitle="Please select"
      (nzOnCancel)="handleCancel($event)"
      (nzOnOk)="handleOk($event)"
    >
      <nz-cascader *nzModalContent [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)" />
    </nz-modal>

    <button nz-button (click)="open()">Open Dialog</button>
  `
})
export class NzDemoCascaderModalComponent {
  nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;
  isVisible = false;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  open(): void {
    this.isVisible = true;
  }

  handleOk($event: MouseEvent): void {
    console.log('Button ok clicked!', this.values, $event);
    this.isVisible = false;
  }

  handleCancel($event: MouseEvent): void {
    console.log('Button cancel clicked!', $event);
    this.isVisible = false;
  }
}
```

### Multiple

Select multiple options. Disable the `checkbox` by adding the `disableCheckbox` property and selecting a specific item.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

const getOptions = (): NzCascaderOption[] => [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({ label: `Number ${index}`, value: index, isLeaf: true }))
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            isLeaf: true,
            disableCheckbox: true
          },
          {
            label: 'Toy Cards',
            value: 'cards',
            isLeaf: true
          },
          {
            label: 'Toy Bird',
            value: 'bird',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-multiple',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader
      style="width: 100%;"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
      nzMultiple
      [nzMaxTagCount]="3"
    />
  `
})
export class NzDemoCascaderMultipleComponent {
  readonly nzOptions: NzCascaderOption[] = getOptions();
  values: NzSafeAny[][] | null = null;

  onChanges(values: NzSafeAny[][]): void {
    console.log(values, this.values);
  }
}
```

### Controlled Opening

Use `nzOpen` to control whether the menu overlay is displayed.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-open',
  imports: [FormsModule, NzCascaderModule, NzFlexModule, NzSwitchModule],
  template: `
    <div nz-flex nzVertical nzGap="small">
      <nz-switch [(ngModel)]="open" nzCheckedChildren="open" nzUnCheckedChildren="close" />
      <nz-cascader
        [nzOptions]="nzOptions"
        [ngModel]="values"
        [nzOpen]="open"
        (nzSelectionChange)="onSelectionChange($event)"
        (nzOpenChange)="onOpenChange($event)"
      />
    </div>
  `
})
export class NzDemoCascaderOpenComponent {
  readonly nzOptions = options;
  values = ['zhejiang', 'hangzhou', 'xihu'];
  open = false;

  onSelectionChange(selectedOptions: NzCascaderOption[]): void {
    console.log(selectedOptions);
  }

  onOpenChange(open: boolean): void {
    console.log(open);
    // You can set the `open` variable in `(nzOpenChange)` to control the open state.
    // this.open = open;
  }
}
```

### Placement

You can manually specify the position of the popup via `nzPlacement`.

```typescript
import { Component } from '@angular/core';

import { NzCascaderModule, NzCascaderOption, NzCascaderPlacement } from 'ng-zorro-antd/cascader';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-placement',
  imports: [NzCascaderModule, NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="placements" (nzValueChange)="setPlacement($event)" />
    <br />
    <br />
    <nz-cascader [nzOptions]="nzOptions" [nzPlacement]="placement" />
  `
})
export class NzDemoCascaderPlacementComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  placement: NzCascaderPlacement = 'topLeft';
  readonly placements: NzCascaderPlacement[] = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

  setPlacement(placement: string | number): void {
    this.placement = placement as NzCascaderPlacement;
  }
}
```

### Custom dropdown menu

Customize the dropdown menu via `nzPopupRender`.

```typescript
import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-popup-render',
  imports: [FormsModule, NgTemplateOutlet, NzCascaderModule, NzDividerModule],
  template: `
    <nz-cascader [nzOptions]="nzOptions" [nzPopupRender]="popupRenderTpl" [(ngModel)]="values" />

    <ng-template #popupRenderTpl let-menu>
      <div style="padding: 8px; color: #1890ff">This is header.</div>
      <nz-divider style="margin: 0" />
      <ng-container [ngTemplateOutlet]="menu" />
      <nz-divider style="margin: 0" />
      <div style="padding: 8px">The footer is not very short.</div>
    </ng-template>
  `
})
export class NzDemoCascaderPopupRenderComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;
}
```

### Prefix and Suffix

Use `nzPrefix` to customize the prefix content, use `nzSuffixIcon` to customize the selection box suffix icon, and use `nzExpandIcon` to customize the current item expand icon.

```typescript
import { Component } from '@angular/core';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-prefix-and-suffix',
  imports: [NzCascaderModule, NzFlexModule, NzIconModule],
  template: `
    <nz-flex nzVertical nzGap="small">
      <nz-cascader [nzOptions]="nzOptions" nzSuffixIcon="smile" />
      <nz-cascader [nzOptions]="nzOptions" nzExpandIcon="smile" />
      <nz-cascader [nzOptions]="nzOptions" [nzPrefix]="smile" />
    </nz-flex>
    <ng-template #smile><nz-icon nzType="smile" /></ng-template>
  `
})
export class NzDemoCascaderPrefixAndSuffixComponent {
  readonly nzOptions: NzCascaderOption[] = options;
}
```

### ReactiveForm

Reset control value by Ng Reactive Form.

```typescript
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-reactive-form',
  imports: [ReactiveFormsModule, NzButtonModule, NzCascaderModule],
  template: `
    <form [formGroup]="form" novalidate>
      <nz-cascader [nzOptions]="nzOptions" formControlName="name" />
    </form>
    <br />
    <button nz-button (click)="reset()">Reset</button>
    <button nz-button (click)="submit()">Submit</button>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoCascaderReactiveFormComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: this.fb.control<string[] | null>(null, Validators.required)
  });
  readonly nzOptions: NzCascaderOption[] = options;

  constructor() {
    this.form.controls.name.valueChanges.pipe(takeUntilDestroyed()).subscribe(data => {
      this.onChanges(data);
    });
  }

  reset(): void {
    this.form.reset();
    console.log(this.form.value);
  }

  submit(): void {
    console.log(this.form.value);
  }

  onChanges(values: string[] | null): void {
    console.log(values);
  }
}
```

### Search

Search and select an option directly.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true,
        disabled: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-search',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      [nzShowSearch]="true"
      (ngModelChange)="onChanges($event)"
    />
  `
})
export class NzDemoCascaderSearchComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}
```

### Size

Cascade selection box of different sizes.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzFlexModule } from 'ng-zorro-antd/flex';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-size',
  imports: [FormsModule, NzCascaderModule, NzFlexModule],
  template: `
    <nz-flex nzVertical nzGap="middle">
      <nz-cascader nzSize="large" [nzOptions]="nzOptions" [(ngModel)]="value1" (ngModelChange)="onChanges($event)" />
      <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="value2" (ngModelChange)="onChanges($event)" />
      <nz-cascader nzSize="small" [nzOptions]="nzOptions" [(ngModel)]="value3" (ngModelChange)="onChanges($event)" />
    </nz-flex>
  `
})
export class NzDemoCascaderSizeComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  value1: string[] | null = null;
  value2: string[] | null = null;
  value3: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values);
  }
}
```

### Status

Add status to Cascader with `nzStatus`, which could be `error` or `warning`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'nz-demo-cascader-status',
  imports: [FormsModule, NzCascaderModule, NzFlexModule],
  template: `
    <nz-flex nzVertical nzGap="middle">
      <nz-cascader [nzOptions]="nzOptions" nzStatus="error" />
      <nz-cascader [nzOptions]="nzOptions" nzStatus="warning" />
    </nz-flex>
  `
})
export class NzDemoCascaderStatusComponent {
  readonly nzOptions: NzCascaderOption[] = [];
}
```

### Trigger Action

Show menu on mouse enter and hide on mouse leave.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-trigger-action',
  imports: [FormsModule, NzCascaderModule],
  template: `
    <nz-cascader
      nzTriggerAction="hover"
      nzExpandTrigger="hover"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    />
  `
})
export class NzDemoCascaderTriggerActionComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}
```

### Custom trigger

Separate trigger button and result.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-trigger',
  imports: [FormsModule, NzCascaderModule],
  template: `
    {{ text }}
    <nz-cascader
      [nzShowInput]="false"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
      (nzSelectionChange)="onSelectionChange($event)"
    >
      <a href="javascript: void(0)">Change city</a>
    </nz-cascader>
  `
})
export class NzDemoCascaderTriggerComponent {
  readonly nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;
  text = 'Unselect';

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  onSelectionChange(selectedOptions: NzCascaderOption[]): void {
    this.text = selectedOptions.map(o => o.label).join(', ');
  }
}
```

### Variants

Variants of Cascader, there are four variants: `outlined`, `filled`, `borderless` and `underlined`.

```typescript
import { Component } from '@angular/core';

import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzFlexModule } from 'ng-zorro-antd/flex';

const options: NzCascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'nz-demo-cascader-variant',
  imports: [NzCascaderModule, NzFlexModule],
  template: `
    <nz-flex nzVertical nzGap="middle">
      <nz-cascader [nzOptions]="options" nzVariant="outlined" />
      <nz-cascader [nzOptions]="options" nzVariant="filled" />
      <nz-cascader [nzOptions]="options" nzVariant="borderless" />
      <nz-cascader [nzOptions]="options" nzVariant="underlined" />
    </nz-flex>
  `
})
export class NzDemoCascaderVariantComponent {
  readonly options = options;
}
```
