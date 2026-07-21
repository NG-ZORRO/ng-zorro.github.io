---
category: Components
type: 数据录入
title: Cascader
subtitle: 级联选择
cover: 'https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg'
description: 级联选择框。
---

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## API

### nz-cascader

| 参数                    | 说明                                                                                       | 类型                                                                     | 默认值         | 支持全局配置 | 版本   |
| ----------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | -------------- | ------------ | ------ |
| `[ngModel]`             | 指定选中项                                                                                 | `any[]`                                                                  | -              |
| `[nzAllowClear]`        | 是否支持清除                                                                               | `boolean`                                                                | `true`         |
| `[nzAutoFocus]`         | 是否自动聚焦，当存在输入框时                                                               | `boolean`                                                                | `false`        |
| `[nzBackdrop]`          | 浮层是否应带有背景板                                                                       | `boolean`                                                                | `false`        |
| `[nzChangeOn]`          | 点击父级菜单选项时，可通过该函数判断是否允许值的变化                                       | `(option: any, index: number) => boolean`                                | -              |
| `[nzChangeOnSelect]`    | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示                         | `boolean`                                                                | `false`        |
| `[nzColumnClassName]`   | 自定义浮层列类名                                                                           | `string`                                                                 | -              |
| `[nzDisabled]`          | 禁用                                                                                       | `boolean`                                                                | `false`        |
| `[nzExpandIcon]`        | 自定义次级菜单展开图标                                                                     | `string \| TemplateRef<void>`                                            | -              |
| `[nzExpandTrigger]`     | 次级菜单的展开方式，可选 `'click'` 和 `'hover'`                                            | `'click' \| 'hover'`                                                     | `'click'`      |
| `[nzLabelProperty]`     | 选项的显示值的属性名                                                                       | `string`                                                                 | `'label'`      |
| `[nzLabelRender]`       | 选择后展示的渲染模板                                                                       | `TemplateRef<{ labels: string[], selectedOptions: NzCascaderOption[] }>` | -              |
| `[nzLoadData]`          | 用于动态加载选项。如果提供了`ngModel`初始值，且未提供`nzOptions`值，则会立即触发动态加载。 | `(option: any, index?: index) => PromiseLike<any> \| Observable<any>`    | -              |
| `[nzMenuClassName]`     | 自定义浮层类名                                                                             | `string`                                                                 | -              |
| `[nzMenuStyle]`         | 自定义浮层样式                                                                             | `object`                                                                 | -              |
| `[nzMouseEnterDelay]`   | 鼠标进入触发器后打开浮层的延迟时间（毫秒）                                                 | `number`                                                                 | `150`          |
| `[nzMouseLeaveDelay]`   | 鼠标离开触发器后关闭浮层的延迟时间（毫秒）                                                 | `number`                                                                 | `150`          |
| `[nzMultiple]`          | 是否支持多选                                                                               | `boolean`                                                                | `false`        |
| `[nzNotFoundContent]`   | 当下拉列表为空时显示的内容                                                                 | `string \| TemplateRef<void>`                                            | -              |
| `[nzOptionRender]`      | 选项的渲染模板                                                                             | `TemplateRef<{ $implicit: NzCascaderOption, index: number }>`            |                |
| `[nzOptions]`           | 可选项数据源                                                                               | `object[]`                                                               | -              |
| `[nzOpen]`              | 控制浮层显隐                                                                               | `boolean`                                                                | -              | -            | 20.2.0 |
| `[nzPlaceHolder]`       | 输入框占位文本                                                                             | `string`                                                                 | `'请选择'`     |
| `[nzPlacement]`         | 浮层弹出位置                                                                               | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'`               | `'bottomLeft'` |
| `[nzPopupRender]`       | 自定义下拉框内容                                                                           | `TemplateRef<{ $implicit: TemplateRef<void> }>`                          | -              |
| `[nzShowArrow]`         | 是否显示箭头                                                                               | `boolean`                                                                | `true`         |
| `[nzShowInput]`         | 显示输入框                                                                                 | `boolean`                                                                | `true`         |
| `[nzShowSearch]`        | 是否支持搜索，默认情况下对 `label` 进行全匹配搜索，不能和 `[nzLoadData]` 同时使用          | `boolean \| NzShowSearchOptions`                                         | `false`        |
| `[nzSize]`              | 输入框大小，可选 `large` `default` `small`                                                 | `'large' \| 'small' \| 'default'`                                        | `'default'`    | ✅           |
| `[nzStatus]`            | 设置校验状态                                                                               | `'error' \| 'warning'`                                                   | -              |
| `[nzPrefix]`            | 自定义的选择框前缀                                                                         | `string \| TemplateRef<void>`                                            | -              | -            | 20.2.0 |
| `[nzSuffixIcon]`        | 自定义的选择框后缀图标                                                                     | `string \| TemplateRef<void>`                                            | -              |
| `[nzValueProperty]`     | 选项的实际值的属性名                                                                       | `string`                                                                 | `'value'`      |
| `[nzVariant]`           | 形态变体                                                                                   | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`                 | `'outlined'`   | ✅           | 20.0.0 |
| `(ngModelChange)`       | 值发生变化时触发                                                                           | `EventEmitter<any[]>`                                                    | -              |
| `(nzClear)`             | 清除值时触发                                                                               | `EventEmitter<void>`                                                     | -              |
| `(nzRemoved)`           | 多选模式下，移除值时触发                                                                   | `EventEmitter<NzCascaderOption>`                                         | -              |
| `(nzSelectionChange)`   | 值发生变化时触发                                                                           | `EventEmitter<NzCascaderOption[]>`                                       | -              |
| `(nzOpenChange)`        | 菜单浮层的打开/关闭                                                                        | `EventEmitter<boolean>`                                                  | -              |
| ~~`(nzVisibleChange)`~~ | 菜单浮层的显示/隐藏，已废弃，请使用 `(nzOpenChange)` 代替                                  | `EventEmitter<boolean>`                                                  | -              |

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

```ts
export type NzShowSearchOptions =
  | boolean
  | {
      filter?: NzCascaderFilter;
      sorter?: NzCascaderSorter;
    };
```

`nzShowSearch` 为对象时需遵守 `NzShowSearchOptions` 接口：

| 参数     | 说明                                                           | 类型                                                                         | 默认值 |
| -------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------ |
| `filter` | 可选，选择是否保留选项的过滤函数，每级菜单的选项都会被匹配     | `(inputValue: string, path: NzCascaderOption[]): boolean`                    | -      |
| `sorter` | 可选，按照到每个最终选项的路径进行排序，默认按照原始数据的顺序 | `(a: NzCascaderOption[], b: NzCascaderOption[], inputValue: string): number` | -      |

默认的 filter 如下所示：

```ts
const defaultFilter: NzCascaderFilter = (i, p) => {
  return p.some(o => {
    const label = o.label;
    return !!label && label.indexOf(i) !== -1;
  });
};
```

如果你想要在搜索时忽略大小写，就可以编写一个这样的 filter 函数：

```ts
const filter: NzCascaderFilter = (i, p) => {
  return p.some(o => {
    const label = o.label;
    return !!label && label.toLowerCase().indexOf(i.toLowerCase()) !== -1;
  });
};
```

#### 方法

| 名称          | 描述     |
| ------------- | -------- |
| `blur()`      | 移除焦点 |
| `focus()`     | 获取焦点 |
| `closeMenu()` | 隐藏菜单 |

> 注意，如果需要获得中国省市区数据，可以参考 [china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)。

## FAQ

### Q: 为什么使用 `nzLoadData` 时报了一个错误 this === undefined ？

对传递给 Cascader 组件的 `nzLoadData` 参数会成为 `NzCasacderComponent` 对象的一个属性，调用这个函数时，函数中的 `this` 没有指向任何对象。
因此，正确的做法是传递剪头函数，或者使用 `Function.bind` 将 `nzLoadData` 参数和你的对象绑定。
[这里](https://stackoverflow.com/questions/60320913/ng-zorro-cascader-lazy-load-data-nzloaddata-function-got-this-undefined/60928983#60928983)是一个比较有代表性的例子。

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 基本

省市区级联。

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

### 指定选择

通过函数来判断选项是否可以选择。

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

### 选择即改变

这种交互允许只选中父级选项。

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

### 自定义字段名

自定义字段名。

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

### 自定义已选项

例如给最后一项加上邮编链接。

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

### 自定义选择项

自定义选项的模板。

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

### 默认值与异步列表

默认值通过数组的方式指定，但`nzOptions`通过异步加载。

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

### 默认值与延迟加载

默认值通过数组的方式指定，但`nzOptions`没有赋值，通过`nzLoadData`函数延迟加载。

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

### 默认值

默认值通过数组的方式指定。

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

### 禁用选项

通过指定 options 里的 `disabled` 字段。

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

### 移入展开

通过移入展开下级菜单，点击完成选择。

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

### 动态加载选项

使用 `nzLoadData` 实现动态加载选项。

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

### 模态窗口

在模态窗口中使用级联控件。

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

### 多选

一次性选择多个选项。通过添加 `disableCheckbox` 属性，选择具体某一个 `checkbox` 禁用。

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

### 控制浮层显隐

使用 `nzOpen` 控制菜单浮层显隐。

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

### 弹出位置

可以通过 `nzPlacement` 手动指定弹出的位置。

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

### 扩展菜单

使用 `nzPopupRender` 对下拉菜单进行自由扩展。

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

### 前后缀

通过 `nzPrefix` 自定前缀，通过 `nzSuffixIcon` 自定义选择框后缀图标，通过 `nzExpandIcon` 自定义次级菜单展开图标。

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

### 响应表单

通过表单的`重置`功能清空已选择的值。

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

### 搜索

可以直接搜索选项并选择。

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

### 大小

不同大小的级联选择器。

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

### 自定义状态

使用 `nzStatus` 为 Cascader 添加状态，可选 `error` 或者 `warning`。

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

### 鼠标移入触发

鼠标移入触发显示菜单，移出隐藏菜单。

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

### 可以自定义显示

切换按钮和结果分开。

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

### 形态变体

Cascader 形态变体，可选 `outlined`、`filled`、`borderless`、`underlined` 四种形态。

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
