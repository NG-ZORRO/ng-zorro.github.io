---
category: Components
subtitle: 标签页
type: 导航
title: Tabs
cols: 1
cover: 'https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg'
description: 选项卡切换组件。
---

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- [RadioButton](/components/radio/zh/#components-radio-demo-radiobutton) 可作为更次级的页签来使用。

## API

### nz-tabs

| 参数                         | 说明                                                               | 类型                                                | 默认值                                | 全局配置 | 版本   |
| ---------------------------- | ------------------------------------------------------------------ | --------------------------------------------------- | ------------------------------------- | -------- | ------ |
| `[nzSelectedIndex]`          | 当前激活 tab 面板的 序列号，可双向绑定                             | `number`                                            | -                                     |
| `[nzAnimated]`               | 是否使用动画切换 Tabs，在 `nzTabPosition="top" \| "bottom"` 时有效 | `boolean \| {inkBar:boolean, tabPane:boolean}`      | `true`, 当 `type="card"` 时为 `false` | ✅       |
| `[nzSize]`                   | 大小，提供 `large` `default` 和 `small` 三种大小                   | `'large' \| 'small' \| 'default'`                   | `'default'`                           | ✅       |
| `[nzTabBarExtraContent]`     | tab bar 上额外的元素                                               | `TemplateRef<void>`                                 | -                                     |
| `[nzTabBarStyle]`            | tab bar 的样式对象                                                 | `object`                                            | -                                     |
| `[nzTabPosition]`            | 页签位置，可选值有 `top` `right` `bottom` `left`                   | `'top' \| 'right' \| 'bottom' \| 'left'`            | `'top'`                               |          |
| `[nzType]`                   | 页签的基本样式                                                     | `'line' \| 'card' \| 'editable-card'`               | `'line'`                              | ✅       |
| `[nzTabBarGutter]`           | tabs 之间的间隙                                                    | `number`                                            | -                                     | ✅       |
| `[nzHideAll]`                | 是否隐藏所有 tab 内容                                              | `boolean`                                           | `false`                               |
| `[nzLinkRouter]`             | 与 Angular 路由联动                                                | `boolean`                                           | `false`                               |          |
| `[nzLinkExact]`              | 以严格匹配模式确定联动的路由                                       | `boolean`                                           | `true`                                |
| `[nzCanDeactivate]`          | 决定一个 tab 是否可以被切换                                        | `NzTabsCanDeactivateFn`                             | -                                     |
| `[nzCentered]`               | 标签居中展示                                                       | `boolean`                                           | `false`                               |
| `[nzDestroyInactiveTabPane]` | 被隐藏时是否销毁 DOM 结构                                          | `boolean`                                           | `false`                               |
| `[nzIndicator]`              | 自定义指示条宽度和对齐方式                                         | `NzIndicator`                                       | -                                     |          | 21.2.0 |
| `(nzSelectedIndexChange)`    | 当前激活 tab 面板的 序列号变更回调函数                             | `EventEmitter<number>`                              | -                                     |
| `(nzSelectChange)`           | 当前激活 tab 面板变更回调函数                                      | `EventEmitter<{index: number,tab: NzTabComponent}>` | -                                     |

### nz-tabs[nzType="editable-card"]

| 参数          | 说明                 | 类型                              | 默认值  | 全局配置 |
| ------------- | -------------------- | --------------------------------- | ------- | -------- |
| `[nzHideAdd]` | 隐藏添加按钮         | `boolean`                         | `false` |
| `[nzAddIcon]` | 添加按钮图标         | `string \| TemplateRef<void>`     | -       |
| `(nzAdd)`     | 点击添加按钮时的事件 | `EventEmitter<>`                  | -       |
| `(nzClose)`   | 点击删除按钮时的事件 | `EventEmitter<{ index: number }>` | -       |

### nz-tab

| 参数              | 说明                      | 类型                                        | 默认值  |
| ----------------- | ------------------------- | ------------------------------------------- | ------- |
| `[nzTitle]`       | 选项卡头显示文字          | `string \| TemplateRef<TabTemplateContext>` | -       |
| `[nzForceRender]` | 被隐藏时是否渲染 DOM 结构 | `boolean`                                   | `false` |
| `[nzDisabled]`    | 是否禁用                  | `boolean`                                   | -       |
| `(nzClick)`       | 单击 title 的回调函数     | `EventEmitter<void>`                        | -       |
| `(nzContextmenu)` | 右键 title 的回调函数     | `EventEmitter<MouseEvent>`                  | -       |
| `(nzSelect)`      | tab 被选中的回调函数      | `EventEmitter<void>`                        | -       |
| `(nzDeselect)`    | tab 被取消选中的回调函数  | `EventEmitter<void>`                        | -       |

### nz-tabs[nzType="editable-card"] > nz-tab

| 参数            | 说明         | 类型                          | 默认值  | 全局配置 |
| --------------- | ------------ | ----------------------------- | ------- | -------- |
| `[nzClosable]`  | 显示删除按钮 | `boolean`                     | `false` |
| `[nzCloseIcon]` | 关闭按钮图标 | `string \| TemplateRef<void>` | -       |

#### `nz-tab[nzTitle]` 的模版引用变量

| 属性      | 说明                                                    | 类型      |
| --------- | ------------------------------------------------------- | --------- |
| `visible` | 表示是否在可见区域, 为 `false` 时将会被渲染到下拉菜单中 | `boolean` |

在 `nz-tab[nzTitle]` 中使用

```html
<nz-tab [nzTitle]="titleTemplate">
  ...
  <ng-template #titleTemplate let-visible="visible">...</ng-template>
</nz-tab>
```

在 `*nzTabLink` 中使用

```html
<nz-tab>
  <a *nzTabLink="let visible = visible" nz-tab-link [routerLink]="['.']">...</a>
</nz-tab>
```

### [nz-tab]

与 `ng-template` 一同使用，用于标记需要懒加载的 `tab` 内容，具体用法见示例。

### ng-template[nzTabLink] > a[nz-tab-link]

路由联动可以让 tab 的切换和路由行为相一致。

```html
<nz-tabs nzLinkRouter>
  <nz-tab>
    <a *nzTabLink nz-tab-link [routerLink]="['.']">Link</a>
    Default.
  </nz-tab>
</nz-tabs>
```

### [nzTabBarExtraContent]

> 注意：`*nzTabBarExtraContent` 比 `nz-tabs[nzTabBarExtraContent]` 具有更高的优先级。

| 参数                     | 说明           | 类型               | 默认值  |
| ------------------------ | -------------- | ------------------ | ------- |
| `[nzTabBarExtraContent]` | 附加内容的位置 | `'start' \| 'end'` | `'end'` |

---

## 代码示例

### 基本

默认选中第一项。

```typescript
import { Component } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-basic',
  imports: [NzTabsModule],
  template: `
    <nz-tabs>
      <nz-tab nzTitle="Tab 1">Content of Tab Pane 1</nz-tab>
      <nz-tab nzTitle="Tab 2">Content of Tab Pane 2</nz-tab>
      <nz-tab nzTitle="Tab 3">Content of Tab Pane 3</nz-tab>
    </nz-tabs>
  `
})
export class NzDemoTabsBasicComponent {}
```

### 卡片式页签容器

用于容器顶部，需要一点额外的样式覆盖。

```typescript
import { Component } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-card-top',
  imports: [NzTabsModule],
  template: `
    <div class="card-container">
      <nz-tabs nzType="card">
        @for (tab of tabs; track tab) {
          <nz-tab [nzTitle]="'Tab Title ' + tab">
            <p>Content of Tab Pane {{ tab }}</p>
            <p>Content of Tab Pane {{ tab }}</p>
            <p>Content of Tab Pane {{ tab }}</p>
          </nz-tab>
        }
      </nz-tabs>
    </div>
  `,
  styles: `
    :host {
      background: #f5f5f5;
      overflow: hidden;
      padding: 24px;
      display: block;
    }

    .card-container ::ng-deep p {
      margin: 0;
    }
    .card-container ::ng-deep > .ant-tabs-card .ant-tabs-content {
      height: 120px;
      margin-top: -16px;
    }
    .card-container ::ng-deep > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
      background: #fff;
      padding: 16px;
    }
    .card-container ::ng-deep > .ant-tabs-card > .ant-tabs-nav::before {
      display: none;
    }
    .card-container ::ng-deep > .ant-tabs-card .ant-tabs-tab {
      border-color: transparent;
      background: transparent;
    }
    .card-container ::ng-deep > .ant-tabs-card .ant-tabs-tab-active {
      border-color: #fff;
      background: #fff;
    }
  `
})
export class NzDemoTabsCardTopComponent {
  tabs = [1, 2, 3];
}
```

### 卡片式页签

另一种样式的页签，不提供对应的垂直样式。

```typescript
import { Component } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-card',
  imports: [NzTabsModule],
  template: `
    <nz-tabs nzType="card">
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab' + tab">Content of Tab Pane {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsCardComponent {
  tabs = [1, 2, 3];
}
```

### 居中

标签居中展示。

```typescript
import { Component } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-centered',
  imports: [NzTabsModule],
  template: `
    <nz-tabs nzCentered>
      <nz-tab nzTitle="Tab 1">Content of Tab Pane 1</nz-tab>
      <nz-tab nzTitle="Tab 2">Content of Tab Pane 2</nz-tab>
      <nz-tab nzTitle="Tab 3">Content of Tab Pane 3</nz-tab>
    </nz-tabs>
  `
})
export class NzDemoTabsCenteredComponent {}
```

### 自定义新增页签触发器

给自定义触发器绑定事件。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-custom-add-trigger',
  imports: [NzButtonModule, NzTabsModule],
  template: `
    <div style="margin-bottom: 16px;">
      <button nz-button (click)="newTab()">ADD</button>
    </div>
    <nz-tabs [(nzSelectedIndex)]="index" nzType="editable-card" nzHideAdd (nzClose)="closeTab($event)">
      @for (tab of tabs; track tab) {
        <nz-tab [nzClosable]="$index > 1" [nzTitle]="tab">Content of {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsCustomAddTriggerComponent {
  index = 0;
  tabs = ['Tab 1', 'Tab 2'];

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.index = this.tabs.length - 1;
  }
}
```

### 禁用

禁用某一项。

```typescript
import { Component } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-disabled',
  imports: [NzTabsModule],
  template: `
    <nz-tabs>
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="tab.name" [nzDisabled]="tab.disabled">
          {{ tab.name }}
        </nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsDisabledComponent {
  tabs = [
    {
      name: 'Tab 1',
      disabled: false
    },
    {
      name: 'Tab 2',
      disabled: true
    },
    {
      name: 'Tab 3',
      disabled: false
    }
  ];
}
```

### 可拖拽标签

通过 CDK `DragDropModule` 实现标签可拖拽。

```typescript
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, inject } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-draggable',
  imports: [NzTabsModule, CdkDrag, CdkDropList],
  template: `
    <nz-tabs
      [(nzSelectedIndex)]="selectedTabIndex"
      class="example-drag-tabs"
      cdkDropList
      (cdkDropListDropped)="drop($event)"
      cdkDropListOrientation="horizontal"
      cdkDropListElementContainer=".ant-tabs-nav-list"
    >
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="title">
          {{ tab.content }}
        </nz-tab>
        <ng-template #title>
          <span cdkDrag cdkDragRootElement=".ant-tabs-tab" cdkDragPreviewClass="preview">
            {{ tab.name }}
          </span>
        </ng-template>
      }
    </nz-tabs>
  `,
  styles: `
    :host ::ng-deep .ant-tabs-tab-btn {
      cursor: move;
    }
    nz-tabs.cdk-drop-list-dragging {
      pointer-events: none;
    }
    .preview.cdk-drag-animating {
      transition: all 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    ::ng-deep .ant-tabs-tab.cdk-drag-placeholder .ant-tabs-tab-btn {
      opacity: 0.5;
    }
  `
})
export class NzDemoTabsDraggableComponent {
  private cdr = inject(ChangeDetectorRef);
  tabs = [
    {
      name: 'Tab 1',
      content: 'Content of Tab Pane 1'
    },
    {
      name: 'Tab 2',
      content: 'Content of Tab Pane 2'
    },
    {
      name: 'Tab 3',
      content: 'Content of Tab Pane 3'
    }
  ];
  selectedTabIndex = 0;

  drop(event: CdkDragDrop<string[]>): void {
    const prevActive = this.tabs[this.selectedTabIndex];
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
    this.selectedTabIndex = this.tabs.indexOf(prevActive);
    this.cdr.markForCheck();
  }
}
```

### 新增和关闭页签

只有卡片样式的页签支持新增和关闭选项。

```typescript
import { Component } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-editable-card',
  imports: [NzTabsModule],
  template: `
    <nz-tabs [(nzSelectedIndex)]="selectedIndex" nzType="editable-card" (nzAdd)="newTab()" (nzClose)="closeTab($event)">
      @for (tab of tabs; track tab) {
        <nz-tab nzClosable [nzTitle]="tab">Content of {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsEditableCardComponent {
  tabs = ['Tab 1', 'Tab 2'];
  selectedIndex = 0;

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.selectedIndex = this.tabs.length;
  }
}
```

### 附加内容

可以在页签两边添加附加操作。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-extra',
  imports: [NzButtonModule, NzTabsModule, NzCheckboxModule, FormsModule],
  template: `
    <nz-tabs [nzTabBarExtraContent]="extraTemplate">
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabs>
    <ng-template #extraTemplate>
      <button nz-button>Extra Action</button>
    </ng-template>

    <br />
    <br />
    <p>You can also specify its direction or both side</p>
    <br />
    <nz-checkbox-group [nzOptions]="positionOptions" [(ngModel)]="positions" />
    <br />
    <br />

    <nz-tabs>
      @if (positions.includes('start')) {
        <button *nzTabBarExtraContent="'start'" nz-button [style.margin-right.px]="16">Start Extra Action</button>
      }
      @if (positions.includes('end')) {
        <button *nzTabBarExtraContent="'end'" nz-button [style.margin-left.px]="16">End Extra Action</button>
      }

      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsExtraComponent {
  tabs = [1, 2, 3];
  positionOptions = [
    { label: 'start', value: 'start' },
    { label: 'end', value: 'end' }
  ];
  positions = ['start', 'end'];
}
```

### 标签守卫

通过 `nzCanDeactivate` 决定一个 tab 是否可以被切换。

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTabsCanDeactivateFn, NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-guard',
  imports: [NzTabsModule, NzModalModule],
  template: `
    <nz-tabs [nzCanDeactivate]="canDeactivate">
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab' + tab">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzDemoTabsGuardComponent {
  tabs = [1, 2, 3, 4];
  private modalService = inject(NzModalService);

  canDeactivate: NzTabsCanDeactivateFn = (fromIndex: number, toIndex: number) => {
    switch (fromIndex) {
      case 0:
        return toIndex === 1;
      case 1:
        return Promise.resolve(toIndex === 2);
      case 2:
        return this.confirm();
      default:
        return true;
    }
  };

  private confirm(): Observable<boolean> {
    return new Observable(observer => {
      this.modalService.confirm({
        nzTitle: 'Are you sure you want to leave this tab?',
        nzOnOk: () => {
          observer.next(true);
          observer.complete();
        },
        nzOnCancel: () => {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}
```

### 图标

有图标的标签。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-icon',
  imports: [NzIconModule, NzTabsModule],
  template: `
    <nz-tabs>
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="titleTemplate">
          <ng-template #titleTemplate>
            <nz-icon [nzType]="tab.icon" />
            {{ tab.name }}
          </ng-template>
          {{ tab.name }}
        </nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsIconComponent {
  tabs = [
    {
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      name: 'Tab 2',
      icon: 'android'
    }
  ];
}
```

### 指示条

设置 `nzIndicator` 属性，自定义指示条宽度和对齐方式。

```typescript
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabsModule, type NzIndicator, type NzIndicatorAlign } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-indicator',
  imports: [NzTabsModule, NzRadioModule, FormsModule],
  template: `
    <nz-radio-group nzButtonStyle="solid" [(ngModel)]="positionIndicator">
      <label nz-radio-button nzValue="start">Start</label>
      <label nz-radio-button nzValue="center">Center</label>
      <label nz-radio-button nzValue="end">End</label>
    </nz-radio-group>
    <nz-tabs [nzIndicator]="indicator()">
      <nz-tab nzTitle="Tab 1">Content of Tab Pane 1</nz-tab>
      <nz-tab nzTitle="Tab 2">Content of Tab Pane 2</nz-tab>
      <nz-tab nzTitle="Tab 3">Content of Tab Pane 3</nz-tab>
    </nz-tabs>
  `
})
export class NzDemoTabsIndicatorComponent {
  readonly positionIndicator = signal<NzIndicatorAlign>('start');

  protected readonly indicator = computed<NzIndicator>(() => ({
    size: origin => origin - 25,
    align: this.positionIndicator()
  }));
}
```

### 延迟加载

默认情况下，`nz-tab` 中的组件是立即加载的。可以通过在 `ng-template` 中使用 `[nz-tab]` 指令来实现延迟加载选项卡内容。

> 配合 `nzDestroyInactiveTabPane` 使用，可以实现 tab 隐藏时销毁组件。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tab-content-lazy',
  template: `lazy`
})
export class NzDemoTabContentLazyComponent implements OnInit {
  ngOnInit(): void {
    console.log(`I will init when tab active`);
  }
}

@Component({
  selector: 'nz-demo-tab-content-eagerly',
  template: `eagerly`
})
export class NzDemoTabContentEagerlyComponent implements OnInit {
  ngOnInit(): void {
    console.log(`I will init eagerly`);
  }
}

@Component({
  selector: 'nz-demo-tabs-lazy',
  imports: [NzTabsModule, NzDemoTabContentEagerlyComponent, NzDemoTabContentLazyComponent],
  template: `
    <nz-tabs>
      <nz-tab nzTitle="Tab Eagerly 1">
        <nz-demo-tab-content-eagerly />
      </nz-tab>
      <nz-tab nzTitle="Tab Eagerly 2">
        <nz-demo-tab-content-eagerly />
      </nz-tab>
      <nz-tab nzTitle="Tab Lazy 1">
        <ng-template nz-tab>
          <nz-demo-tab-content-lazy />
        </ng-template>
      </nz-tab>
      <nz-tab nzTitle="Tab Lazy 2">
        <ng-template nz-tab>
          <nz-demo-tab-content-lazy />
        </ng-template>
      </nz-tab>
    </nz-tabs>
  `
})
export class NzDemoTabsLazyComponent {}
```

### 路由联动

与路由联动，点击 tab 更改路由，并且在路由改变时自动切换 tab。

```typescript
import { Component } from '@angular/core';
import { Params, RouterLink } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-link-router',
  imports: [RouterLink, NzTabsModule, NzButtonModule],
  template: `
    <div style="margin-bottom: 16px;">
      <button nz-button (click)="newTab()">ADD</button>
    </div>
    <nz-tabs nzLinkRouter>
      <nz-tab>
        <a *nzTabLink nz-tab-link [routerLink]="['.']" [queryParams]="{ tab: 'one' }" queryParamsHandling="merge">
          Default
        </a>
        Default.
      </nz-tab>
      <nz-tab>
        <a *nzTabLink nz-tab-link [routerLink]="['.']" [queryParams]="{ tab: 'two' }" queryParamsHandling="merge">
          Two
        </a>
        Two.
      </nz-tab>
      <nz-tab>
        <a *nzTabLink nz-tab-link [routerLink]="['.']" [queryParams]="{ tab: 'three' }" queryParamsHandling="merge">
          Three
        </a>
        Three.
      </nz-tab>
      <nz-tab>
        <a *nzTabLink nz-tab-link [routerLink]="['.']" [queryParams]="{ tab: 'four' }" queryParamsHandling="merge">
          Four
        </a>
        Four.
      </nz-tab>
      @for (tab of dynamicTabs; track tab.title) {
        <nz-tab>
          <a
            *nzTabLink
            nz-tab-link
            [routerLink]="tab.routerLink"
            [queryParams]="tab.queryParams ?? {}"
            queryParamsHandling="merge"
          >
            {{ tab.title }}
          </a>
          {{ tab.content }}
        </nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsLinkRouterComponent {
  dynamicTabs: Array<{ title: string; content: string; queryParams?: Params; routerLink: string[] }> = [];

  newTab(): void {
    const { length } = this.dynamicTabs;
    const newTabId = length + 1;
    const title = `NewTab${newTabId}`;
    this.dynamicTabs = [
      ...this.dynamicTabs,
      {
        title,
        content: title,
        routerLink: ['.'],
        queryParams: {
          tab: newTabId
        }
      }
    ];
  }
}
```

### 位置

有四个位置，`nzTabPosition="left|right|top|bottom"`。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabPosition, NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-position',
  imports: [FormsModule, NzSelectModule, NzTabsModule],
  template: `
    <div style="margin-bottom: 16px;">
      Tab position:
      <nz-select [(ngModel)]="position" style="width: 80px;">
        @for (option of options; track option.value) {
          <nz-option [nzLabel]="option.label" [nzValue]="option.value" />
        }
      </nz-select>
    </div>
    <nz-tabs [nzTabPosition]="position">
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsPositionComponent {
  position: NzTabPosition = 'top';
  tabs = [1, 2, 3];
  options = [
    { value: 'top', label: 'top' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom' }
  ];
}
```

### 大小

大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-size',
  imports: [FormsModule, NzRadioModule, NzTabsModule],
  template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="small"><span>Small</span></label>
      <label nz-radio-button nzValue="default"><span>Default</span></label>
      <label nz-radio-button nzValue="large"><span>Large</span></label>
    </nz-radio-group>
    <nz-tabs [nzSize]="size">
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsSizeComponent {
  size: 'large' | 'default' | 'small' = 'small';
  tabs = [1, 2, 3];
}
```

### 滑动

可以左右、上下滑动，容纳更多标签。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabPosition, NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-slide',
  imports: [FormsModule, NzInputNumberModule, NzRadioModule, NzTabsModule],
  template: `
    <nz-radio-group [(ngModel)]="nzTabPosition" style="margin-bottom: 8px;">
      <label nz-radio-button nzValue="top">Horizontal</label>
      <label nz-radio-button nzValue="left">Vertical</label>
    </nz-radio-group>
    <nz-input-number style="float:right;" [nzMin]="0" [nzMax]="29" [(ngModel)]="selectedIndex" />

    <nz-tabs
      style="height:220px;"
      [nzTabPosition]="nzTabPosition"
      [(nzSelectedIndex)]="selectedIndex"
      (nzSelectChange)="log([$event])"
    >
      @for (tab of tabs; track tab) {
        <nz-tab
          [nzTitle]="tab.name"
          [nzDisabled]="tab.disabled"
          (nzSelect)="log(['select', tab])"
          (nzClick)="log(['click', tab])"
          (nzContextmenu)="log(['contextmenu', tab])"
          (nzDeselect)="log(['deselect', tab])"
        >
          {{ tab.content }}
        </nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsSlideComponent implements OnInit {
  tabs: Array<{ name: string; content: string; disabled: boolean }> = [];
  nzTabPosition: NzTabPosition = 'top';
  selectedIndex = 27;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      this.tabs.push({
        name: `Tab ${i}`,
        disabled: i === 28,
        content: `Content of tab ${i}`
      });
    }
  }
}
```
