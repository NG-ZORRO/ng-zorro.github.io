---
category: Components
type: 特色组件
title: CheckList
subtitle: 任务清单
cols: 1
tag: 19.1.0
cover: 'https://img.alicdn.com/imgextra/i2/O1CN01E9BUpE1TCyZry8ETC_!!6000000002347-2-tps-386-453.png'
description: 用于在项目中梳理任务流程。
---

## 何时使用

如果当前页面业务逻辑过于复杂，且带有较为强制的顺序流控制，那么你可以采用这个组件来帮你简化流程。

## API

### nz-check-list

| 参数                | 说明                   | 类型                          | 默认值  | 全局配置 |
| ------------------- | ---------------------- | ----------------------------- | ------- | -------- |
| `[nzItems]`         | 任务清单元素           | `NzItemProps`                 | `[]`    | -        |
| `[nzVisible]`       | 显示任务清单           | `boolean`                     | `false` | -        |
| `[nzIndex]`         | 当前所属位置           | `number`                      | `1`     | -        |
| `[nzProgress]`      | 显示任务进度           | `boolean`                     | `true`  | -        |
| `[nzTriggerRender]` | 清单悬浮按钮的渲染模板 | `TemplateRef<void> \| string` | -       | -        |
| `[nzTitle]`         | 清单面板标题的渲染模板 | `TemplateRef<void> \| string` | -       | -        |
| `[nzFooter]`        | 清单面板底部的渲染模板 | `TemplateRef<void> \| string` | -       | -        |
| `(nzHide)`          | 隐藏清单的回调         | `EventEmitter<boolean>`       | `false` | -        |

> `(nzHide)` 的回调值为是否不再显示清单。你可以在回调中存储数据到 `LocalStorage` 中，以避免再次显示清单。

### Interfaces

#### NzItemProps

| 参数          | 说明               | 类型                          | 默认值 |
| ------------- | ------------------ | ----------------------------- | ------ |
| `key`         | 清单元素的唯一 key | `string`                      | -      |
| `description` | 清单元素描述内容   | `string`                      | -      |
| `checked`     | 当前清单是否完成   | `boolean`                     | -      |
| `onClick`     | 点击步骤触发的方法 | `(item: NzItemProps) => void` | -      |

> `key` 为清单元素的唯一标识，如果不填写，则默认使用 `description` 作为 key。

---

## 代码示例

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzCheckListModule, NzItemProps } from 'ng-zorro-antd/check-list';

@Component({
  selector: 'nz-demo-check-list-basic',
  imports: [NzCheckListModule],
  template: `<nz-check-list [nzItems]="nzItems" [nzIndex]="index" />`
})
export class NzDemoCheckListBasicComponent {
  index = 2;
  readonly nzItems: NzItemProps[] = [
    {
      description: 'step 1',
      checked: true,
      onClick: (item: NzItemProps) => {
        this.index++;
        item.checked = true;
      }
    },
    {
      description: 'step 2',
      onClick: (item: NzItemProps) => {
        this.index++;
        item.checked = true;
      }
    },
    {
      description: 'step 3',
      onClick: (item: NzItemProps) => {
        this.index++;
        item.checked = true;
      }
    },
    {
      description: 'step 4',
      onClick: (item: NzItemProps) => {
        this.index++;
        item.checked = true;
      }
    }
  ];
}
```

### 复杂场景

通过自定义参数配置预览效果。

```typescript
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckListModule, NzItemProps } from 'ng-zorro-antd/check-list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-check-list-custom',
  imports: [
    NzCheckListModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzInputModule,
    NzSegmentedModule
  ],
  template: `
    <form nz-form nzLayout="vertical" [formGroup]="form">
      <nz-form-item>
        <nz-form-label>Visible</nz-form-label>
        <nz-form-control>
          <label nz-checkbox formControlName="nzVisible"></label>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Show Progress</nz-form-label>
        <nz-form-control>
          <label nz-checkbox formControlName="nzProgress"></label>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Index</nz-form-label>
        <nz-form-control>
          <nz-segmented [nzOptions]="options" (nzValueChange)="handleIndexChange($event)" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Trigger Render</nz-form-label>
        <nz-form-control>
          <input nz-input formControlName="nzTriggerRender" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Title</nz-form-label>
        <nz-form-control>
          <input nz-input formControlName="nzTitle" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Footer</nz-form-label>
        <nz-form-control>
          <input nz-input formControlName="nzFooter" />
        </nz-form-control>
      </nz-form-item>
    </form>

    <nz-check-list
      [nzItems]="nzItems"
      [nzVisible]="form.controls.nzVisible.value"
      [nzIndex]="form.controls.nzIndex.value || 0"
      [nzProgress]="form.controls.nzProgress.value"
      [nzTriggerRender]="form.controls.nzTriggerRender.value"
      [nzTitle]="form.controls.nzTitle.value"
      [nzFooter]="form.controls.nzFooter.value"
      (nzHide)="hideCancel($event)"
    />
  `,
  styles: `
    :host {
      position: relative;
    }
    form {
      width: 300px;
    }
    nz-check-list {
      position: absolute;
    }
  `
})
export class NzDemoCheckListCustomComponent {
  private fb = inject(NonNullableFormBuilder);
  readonly nzItems: NzItemProps[] = [
    {
      description: 'step 1',
      onClick: () => console.log('step 1')
    },
    {
      description: 'Step 2',
      onClick: () => console.log('step 1')
    },
    {
      description: 'Step 3',
      onClick: () => console.log('step 3')
    },
    {
      description: 'Step 4',
      onClick: () => console.log('step 4')
    }
  ];
  readonly options = this.nzItems.map((_, index) => index).concat(this.nzItems.length + 1);
  form = this.fb.group({
    nzProgress: true,
    nzVisible: false,
    nzIndex: 0,
    nzTriggerRender: 'Open List',
    nzTitle: 'Customize task lists',
    nzFooter: 'Custom Footer Name'
  });

  handleIndexChange(num: number | string): void {
    this.form.controls.nzIndex.setValue(Number(num));
  }

  hideCancel(check: boolean): void {
    console.log(check);
    this.form.controls.nzVisible.setValue(false);
  }
}
```
