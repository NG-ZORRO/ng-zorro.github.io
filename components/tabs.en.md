---
category: Components
type: Navigation
title: Tabs
cols: 1
cover: 'https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg'
description: Tabs make it easy to switch between different views.
---

## When To Use

Ant Design has 3 types of Tabs for different situations.

- Card Tabs: for managing too many closeable views.
- Normal Tabs: for functional aspects of a page.
- [RadioButton](/components/radio/en/#components-radio-demo-radiobutton): for secondary tabs.

## API

### nz-tabs

| Property                     | Description                                                                               | Type                                                | Default                            | Global Config | Version |
| ---------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------- | ------------- | ------- |
| `[nzSelectedIndex]`          | Current tab's index                                                                       | `number`                                            | -                                  |
| `[nzAnimated]`               | Whether to change tabs with animation. Only works while `nzTabPosition="top" \| "bottom"` | `boolean \| {inkBar:boolean, tabPane:boolean}`      | `true`, `false` when `type="card"` | ✅            |
| `[nzSize]`                   | preset tab bar size                                                                       | `'large' \| 'small' \| 'default'`                   | `'default'`                        | ✅            |
| `[nzTabBarExtraContent]`     | Extra content in tab bar                                                                  | `TemplateRef<void>`                                 | -                                  |
| `[nzTabBarStyle]`            | Tab bar style object                                                                      | `object`                                            | -                                  |
| `[nzTabPosition]`            | Position of tabs                                                                          | `'top' \| 'right' \| 'bottom' \| 'left'`            | `'top'`                            |               |
| `[nzType]`                   | Basic style of tabs                                                                       | `'line' \| 'card' \| 'editable-card'`               | `'line'`                           | ✅            |
| `[nzTabBarGutter]`           | The gap between tabs                                                                      | `number`                                            | -                                  | ✅            |
| `[nzHideAll]`                | Whether hide all tabs                                                                     | `boolean`                                           | `false`                            |
| `[nzLinkRouter]`             | Link with Angular router. It supports child mode and query param mode                     | `boolean`                                           | `false`                            |               |
| `[nzLinkExact]`              | Use exact routing matching                                                                | `boolean`                                           | `true`                             |
| `[nzCanDeactivate]`          | Determine if a tab can be deactivated                                                     | `NzTabsCanDeactivateFn`                             | -                                  |
| `[nzCentered]`               | Centers tabs                                                                              | `boolean`                                           | `false`                            |
| `[nzDestroyInactiveTabPane]` | Whether destroy inactive TabPane when change tab                                          | `boolean`                                           | `false`                            |
| `[nzIndicator]`              | Custom indicator size and align                                                           | `NzIndicator`                                       | -                                  |               | 21.2.0  |
| `(nzSelectedIndexChange)`    | Current tab's index change callback                                                       | `EventEmitter<number>`                              | -                                  |
| `(nzSelectChange)`           | Current tab's change callback                                                             | `EventEmitter<{index: number,tab: NzTabComponent}>` | -                                  |

### nz-tabs[nzType="editable-card"]

| Property      | Description                    | Type                              | Default | Global Config |
| ------------- | ------------------------------ | --------------------------------- | ------- | ------------- |
| `[nzHideAdd]` | Hide plus icon or not          | `boolean`                         | `false` |
| `[nzAddIcon]` | Add icon                       | `string \| TemplateRef<void>`     | -       |
| `(nzAdd)`     | When add button clicked emit   | `EventEmitter<>`                  | -       |
| `(nzClose)`   | When close button clicked emit | `EventEmitter<{ index: number }>` | -       |

### nz-tab

| Property          | Description                                                              | Type                          | Default |
| ----------------- | ------------------------------------------------------------------------ | ----------------------------- | ------- |
| `[nzTitle]`       | Show text in tab's head                                                  | `string \| TemplateRef<void>` | -       |
| `[nzForceRender]` | Forced render of content in tabs, not lazy render after clicking on tabs | `boolean`                     | `false` |
| `[nzDisabled]`    | tab disable                                                              | `boolean`                     | -       |
| `(nzClick)`       | title click callback                                                     | `EventEmitter<void>`          | -       |
| `(nzContextmenu)` | title contextmenu callback                                               | `EventEmitter<MouseEvent>`    | -       |
| `(nzSelect)`      | title select callback                                                    | `EventEmitter<void>`          | -       |
| `(nzDeselect)`    | title deselect callback                                                  | `EventEmitter<void>`          | -       |

### nz-tabs[nzType="editable-card"] > nz-tab

| Property        | Description            | Type                          | Default | Global Config |
| --------------- | ---------------------- | ----------------------------- | ------- | ------------- |
| `[nzClosable]`  | Show close icon or not | `boolean`                     | `false` |
| `[nzCloseIcon]` | Close icon             | `string \| TemplateRef<void>` | -       |

#### Template variable references of `nz-tab[nzTitle]`

| Property  | Description                                                                         | Type      |
| --------- | ----------------------------------------------------------------------------------- | --------- |
| `visible` | Is the title in the visible area, will be rendered to the dropdown menu if `false`. | `boolean` |

Use in `nz-tab[nzTitle]`

```html
<nz-tab [nzTitle]="titleTemplate">
  ...
  <ng-template #titleTemplate let-visible="visible">...</ng-template>
</nz-tab>
```

Use in `*nzTabLink`

```html
<nz-tab>
  <a *nzTabLink="let visible = visible" nz-tab-link [routerLink]="['.']">...</a>
</nz-tab>
```

### [nz-tab]

Tab contents can be lazy loaded by declaring the body in a `ng-template` with the `[nz-tab]` attribute.

### ng-template[nzTabLink] > a[nz-tab-link]

Show a link in tab's head. Used in router link mode.

```html
<nz-tabs nzLinkRouter>
  <nz-tab>
    <a *nzTabLink nz-tab-link [routerLink]="['.']">Link</a>
    Default.
  </nz-tab>
</nz-tabs>
```

### [nzTabBarExtraContent]

> Note: `*nzTabBarExtraContent` has a higher priority than `nz-tabs[nzTabBarExtraContent]`.

| Property                 | Description               | Type               | Default | Global Config |
| ------------------------ | ------------------------- | ------------------ | ------- | ------------- |
| `[nzTabBarExtraContent]` | Position of extra content | `'start' \| 'end'` | `'end'` |

---

## Examples

### Basic

Default activate first tab.

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

### Container of card type Tab

Should be used at the top of container, needs to override styles.

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

### Card type tab

Another type Tabs, which doesn't support vertical mode.

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

### Centered

Centered tabs.

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

### Customized trigger of new tab

Bind event for customized trigger.

```typescript
import { Component, signal } from '@angular/core';

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
      @for (tab of tabs(); track tab) {
        <nz-tab [nzClosable]="$index > 1" [nzTitle]="tab">Content of {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsCustomAddTriggerComponent {
  readonly index = signal(0);
  readonly tabs = signal(['Tab 1', 'Tab 2']);

  closeTab({ index }: { index: number }): void {
    this.tabs.update(tabs => tabs.filter((_, i) => i !== index));
  }

  newTab(): void {
    this.tabs.update(tabs => [...tabs, 'New Tab']);
    this.index.set(this.tabs().length - 1);
  }
}
```

### Disabled

Disabled a tab.

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

### Draggable Tabs

Use CDK `DragDropModule` to make tabs draggable.

```typescript
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, signal } from '@angular/core';

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
      @for (tab of tabs(); track tab) {
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
  readonly tabs = signal([
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
  ]);
  readonly selectedTabIndex = signal(0);

  drop(event: CdkDragDrop<string[]>): void {
    const tabs = [...this.tabs()];
    const prevActive = tabs[this.selectedTabIndex()];
    moveItemInArray(tabs, event.previousIndex, event.currentIndex);
    this.tabs.set(tabs);
    this.selectedTabIndex.set(tabs.indexOf(prevActive));
  }
}
```

### Add & close tab

Only card type Tabs support adding & closable.

```typescript
import { Component, signal } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-editable-card',
  imports: [NzTabsModule],
  template: `
    <nz-tabs [(nzSelectedIndex)]="selectedIndex" nzType="editable-card" (nzAdd)="newTab()" (nzClose)="closeTab($event)">
      @for (tab of tabs(); track tab) {
        <nz-tab nzClosable [nzTitle]="tab">Content of {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsEditableCardComponent {
  readonly tabs = signal(['Tab 1', 'Tab 2']);
  readonly selectedIndex = signal(0);

  closeTab({ index }: { index: number }): void {
    this.tabs.update(tabs => tabs.filter((_, i) => i !== index));
  }

  newTab(): void {
    this.tabs.update(tabs => [...tabs, 'New Tab']);
    this.selectedIndex.set(this.tabs().length);
  }
}
```

### Extra content

You can add extra actions to the start or end or even both sides of Tabs.

```typescript
import { Component, signal } from '@angular/core';
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
      @if (positions().includes('start')) {
        <button *nzTabBarExtraContent="'start'" nz-button [style.margin-right.px]="16">Start Extra Action</button>
      }
      @if (positions().includes('end')) {
        <button *nzTabBarExtraContent="'end'" nz-button [style.margin-left.px]="16">End Extra Action</button>
      }

      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsExtraComponent {
  readonly tabs = [1, 2, 3];
  readonly positionOptions = [
    { label: 'start', value: 'start' },
    { label: 'end', value: 'end' }
  ];
  readonly positions = signal(['start', 'end']);
}
```

### Tab guard

Via `nzCanDeactivate` to determine if a tab can be deactivated.

```typescript
import { Component, inject } from '@angular/core';
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
  `
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

### Icon

The Tab with Icon.

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

### Indicator

Set `nzIndicator` prop to custom indicator size and align.

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

### LazyLoad

By default, the contents in `nz-tab` are eagerly loaded. Tab contents can be lazy loaded by declaring the body in a `ng-template` with the `[nz-tab]` directive.

> Combine with `nzDestroyInactiveTabPane` to destroy the component when the tab is hidden.

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

### With Router

Link with router.

```typescript
import { Component, signal } from '@angular/core';
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
      @for (tab of dynamicTabs(); track tab.title) {
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
  readonly dynamicTabs = signal<Array<{ title: string; content: string; queryParams?: Params; routerLink: string[] }>>(
    []
  );

  newTab(): void {
    const { length } = this.dynamicTabs();
    const newTabId = length + 1;
    const title = `NewTab${newTabId}`;
    this.dynamicTabs.update(dynamicTabs => [
      ...dynamicTabs,
      {
        title,
        content: title,
        routerLink: ['.'],
        queryParams: {
          tab: newTabId
        }
      }
    ]);
  }
}
```

### Position

Tab's position: left, right, top or bottom.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabPosition, NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-position',
  imports: [FormsModule, NzSelectModule, NzTabsModule],
  template: `
    <div>
      Tab position:
      <nz-select [nzOptions]="options" [(ngModel)]="position" style="width: 80px;" />
    </div>
    <br />
    <br />
    <nz-tabs [nzTabPosition]="position()">
      @for (tab of tabs; track tab) {
        <nz-tab nzTitle="Tab {{ tab }}">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsPositionComponent {
  readonly position = signal<NzTabPosition>('top');
  readonly tabs = [1, 2, 3];
  readonly options = [
    { value: 'top', label: 'top' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom' }
  ];
}
```

### Size

Large size tabs are usually used in page header, and small size could be used in Modal.

```typescript
import { Component, signal } from '@angular/core';
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
    <nz-tabs [nzSize]="size()">
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabs>
  `
})
export class NzDemoTabsSizeComponent {
  readonly size = signal<'large' | 'default' | 'small'>('small');
  readonly tabs = [1, 2, 3];
}
```

### Slide

Tab can be slide to left or right(up or down), which is used for a lot of tabs.

```typescript
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabPosition, NzTabsModule } from 'ng-zorro-antd/tabs';

interface Tab {
  name: string;
  content: string;
  disabled: boolean;
}

@Component({
  selector: 'nz-demo-tabs-slide',
  imports: [FormsModule, NzInputNumberModule, NzRadioModule, NzTabsModule],
  template: `
    <nz-radio-group [(ngModel)]="position" style="margin-bottom: 8px;">
      <label nz-radio-button nzValue="top">Horizontal</label>
      <label nz-radio-button nzValue="left">Vertical</label>
    </nz-radio-group>
    <nz-input-number style="float:right;" [nzMin]="0" [nzMax]="29" [(ngModel)]="selectedIndex" />

    <nz-tabs
      style="height:220px;"
      [nzTabPosition]="position()"
      [(nzSelectedIndex)]="selectedIndex"
      (nzSelectChange)="log([$event])"
    >
      @for (tab of tabs(); track tab) {
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
  readonly tabs = signal<Tab[]>([]);
  readonly position = signal<NzTabPosition>('top');
  readonly selectedIndex = signal(27);

  log(args: unknown[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    const tabs: Tab[] = [];
    for (let i = 0; i < 30; i++) {
      tabs.push({
        name: `Tab ${i}`,
        disabled: i === 28,
        content: `Content of tab ${i}`
      });
    }
    this.tabs.set(tabs);
  }
}
```
