---
category: Components
type: Navigation
title: Dropdown
cover: 'https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg'
description: A dropdown list.
---

## When To Use

If there are too many operations to display, you can wrap them in a `Dropdown`. By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.

## API

### [nz-dropdown]

| Property               | Description                                                                                       | Type                                                                                        | Default        | Version |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------- | ------- |
| `[nzDropdownMenu]`     | Dropdown menu                                                                                     | `NzDropdownMenuComponent`                                                                   | -              |
| `[nzDisabled]`         | whether the dropdown menu is disabled                                                             | `boolean`                                                                                   | -              |
| `[nzPlacement]`        | placement of pop menu                                                                             | `'bottomLeft' \| 'bottomCenter' \| 'bottomRight' \| 'topLeft' \| 'topCenter' \| 'topRight'` | `'bottomLeft'` |
| `[nzTrigger]`          | the trigger mode which executes the drop-down action                                              | `'click' \| 'hover'`                                                                        | `'hover'`      |
| `[nzClickHide]`        | whether hide menu when click                                                                      | `boolean`                                                                                   | `true`         |
| `[nzVisible]`          | whether the dropdown menu is visible, double binding                                              | `boolean`                                                                                   | -              |
| `[nzOverlayClassName]` | Class name of the dropdown root element                                                           | `string`                                                                                    | -              |
| `[nzOverlayStyle]`     | Style of the dropdown root element                                                                | `object`                                                                                    | -              |
| `(nzVisibleChange)`    | a callback function takes an argument: `nzVisible`, is executed when the visible state is changed | `EventEmitter<boolean>`                                                                     | -              |
| `[nzArrow]`            | Whether the dropdown arrow should be visible                                                      | `boolean`                                                                                   | `false`        | 20.2.0  |

You should use [nz-menu](/components/menu/en) in `nz-dropdown`. The menu items and dividers are also available by using `nz-menu-item` and `nz-menu-divider`.

> Note: `[nz-menu]` of `nz-dropdown` is unselectable by default, you can make it selectable via `<ul nz-menu nzSelectable>`.
>
> The `nzMode` of `[nz-menu]` inside `nz-dropdown-menu` can only be the default value `vertical`.

### nz-dropdown-menu

Wrap Dropdown Menu and pass to `[nz-dropdown]` and `NzContextMenuService`, you can export it via Template Syntax `nzDropdownMenu`

> Note: Every `[nz-dropdown]` should pass independent `nz-dropdown-menu`.

```html
<a nz-dropdown [nzDropdownMenu]="menu">Hover me</a>
<nz-dropdown-menu #menu="nzDropdownMenu">
  <ul nz-menu>
    <li nz-menu-item>1st menu item</li>
    <li nz-menu-item>2nd menu item</li>
    <li nz-menu-item>3rd menu item</li>
  </ul>
</nz-dropdown-menu>
```

### NzContextMenuService

Create dropdown with contextmenu, the detail can be found in the example above

| Property | Description     | Arguments                                                                   | Return Value           |
| -------- | --------------- | --------------------------------------------------------------------------- | ---------------------- |
| create   | create dropdown | `($event:MouseEvent \| {x:number, y:number}, menu:NzDropdownMenuComponent)` | `EmbeddedViewRef<any>` |
| close    | close dropdown  | -                                                                           | -                      |

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Arrow

You could display an arrow

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownModule, NzPlacementType } from 'ng-zorro-antd/dropdown';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'nz-demo-dropdown-arrow',
  imports: [NzDropdownModule, NzButtonModule, NzFlexModule],
  template: `
    <div nz-flex [nzGap]="8" nzWrap="wrap">
      @for (position of listOfPosition; track position) {
        <button nz-button nz-dropdown [nzDropdownMenu]="menu" [nzPlacement]="position" nzArrow>{{ position }}</button>
        <nz-dropdown-menu #menu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item>1st menu item length</li>
            <li nz-menu-item>2nd menu item length</li>
            <li nz-menu-item>3rd menu item length</li>
          </ul>
        </nz-dropdown-menu>
      }
    </div>
  `
})
export class NzDemoDropdownArrowComponent {
  listOfPosition: NzPlacementType[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
}
```

### Basic

The most basic dropdown menu.

```typescript
import { Component } from '@angular/core';

import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-dropdown-basic',
  imports: [NzDropdownModule, NzIconModule],
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu">
      Hover me
      <nz-icon nzType="down" />
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu nzSelectable>
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-menu-item>3rd menu item</li>
        <li nz-menu-item nzDanger>4th danger item</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownBasicComponent {}
```

### Context Menu

Trigger `dropdown` with contextmenu.

```typescript
import { Component } from '@angular/core';

import { NzContextMenuService, NzDropdownMenuComponent, NzDropdownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'nz-demo-dropdown-context-menu',
  imports: [NzDropdownModule],
  template: `
    <div class="context-area" (contextmenu)="contextMenu($event, menu)">Right Click on here</div>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-menu-item nzDisabled>disabled menu item</li>
        <li nz-submenu nzTitle="sub menu">
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
        <li nz-submenu nzDisabled nzTitle="disabled sub menu">
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
  styles: `
    .context-area {
      background: #f7f7f7;
      color: #777;
      text-align: center;
      height: 200px;
      line-height: 200px;
    }
  `
})
export class NzDemoDropdownContextMenuComponent {
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  constructor(private nzContextMenuService: NzContextMenuService) {}
}
```

### Button with dropdown menu

A button is on the left, and a related functional menu is on the right.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-dropdown-dropdown-button',
  imports: [NzButtonModule, NzDropdownModule, NzFlexModule, NzIconModule, NzSpaceModule],
  template: `
    <div nz-flex nzGap="small" nzWrap="wrap">
      <nz-space-compact>
        <button nz-button (click)="log()">Dropdown</button>
        <button nz-button nz-dropdown [nzDropdownMenu]="menu" nzPlacement="bottomRight">
          <nz-icon nzType="ellipsis" />
        </button>
      </nz-space-compact>
      <nz-space-compact>
        <button nz-button (click)="log()">Dropdown</button>
        <button nz-button nz-dropdown [nzDropdownMenu]="menu" nzPlacement="bottomRight">
          <nz-icon nzType="user" />
        </button>
      </nz-space-compact>
      <nz-space-compact>
        <button nz-button disabled>Dropdown</button>
        <button nz-button disabled nz-dropdown [nzDropdownMenu]="menu" nzDisabled nzPlacement="bottomRight">
          <nz-icon nzType="ellipsis" />
        </button>
      </nz-space-compact>
      <button nz-button nz-dropdown [nzDropdownMenu]="menu">
        Button
        <nz-icon nzType="down" />
      </button>
    </div>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>menu 1st menu item</li>
        <li nz-menu-item>menu 2nd menu item</li>
        <li nz-menu-item>menu 3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownDropdownButtonComponent {
  log(): void {
    console.log('click dropdown button');
  }
}
```

### Click event

An event will be triggered when you click menu items, in which you can make different operations by adding events to item.

```typescript
import { Component } from '@angular/core';

import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-dropdown-event',
  imports: [NzDropdownModule, NzIconModule],
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu">
      Hover me, Click menu item
      <nz-icon nzType="down" />
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item (click)="log('1st menu item')">1st menu item</li>
        <li nz-menu-item (click)="log('2nd menu item')">2nd menu item</li>
        <li nz-menu-item (click)="log('3rd menu item')">3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownEventComponent {
  log(data: string): void {
    console.log(data);
  }
}
```

### Other elements

Divider and disabled menu item.

```typescript
import { Component } from '@angular/core';

import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-dropdown-item',
  imports: [NzDropdownModule, NzIconModule],
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu">
      Hover me
      <nz-icon nzType="down" />
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-menu-divider></li>
        <li nz-menu-item nzDisabled>3rd menu item（disabled）</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownItemComponent {}
```

### The way of hiding menu.

The default is to close the menu when you click on menu items, this feature can be turned off.

```typescript
import { Component } from '@angular/core';

import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-dropdown-overlay-visible',
  imports: [NzDropdownModule, NzIconModule],
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu" [nzClickHide]="false" [(nzVisible)]="visible">
      Hover me
      <nz-icon nzType="down" />
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>Clicking me will not close the menu.</li>
        <li nz-menu-item>Clicking me will not close the menu also.</li>
        <li nz-menu-item (click)="visible = false">Clicking me will close the menu</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownOverlayVisibleComponent {
  visible = false;
}
```

### Placement

Support 6 placements.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownModule, NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'nz-demo-dropdown-placement',
  imports: [NzDropdownModule, NzButtonModule],
  template: `
    <div>
      @for (position of listOfPosition; track position) {
        <button nz-button nz-dropdown [nzDropdownMenu]="menu" [nzPlacement]="position">{{ position }}</button>
        <nz-dropdown-menu #menu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item>1st menu item length</li>
            <li nz-menu-item>2nd menu item length</li>
            <li nz-menu-item>3rd menu item length</li>
          </ul>
        </nz-dropdown-menu>
      }
    </div>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `
})
export class NzDemoDropdownPlacementComponent {
  listOfPosition: NzPlacementType[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
}
```

### Cascading menu

The menu has multiple levels.

```typescript
import { Component } from '@angular/core';

import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-dropdown-sub-menu',
  imports: [NzDropdownModule, NzIconModule],
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu" (nzVisibleChange)="change($event)">
      Cascading menu
      <nz-icon nzType="down" />
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-submenu nzTitle="sub menu">
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
        <li nz-submenu nzDisabled nzTitle="disabled sub menu">
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownSubMenuComponent {
  change(value: boolean): void {
    console.log(value);
  }
}
```

### Trigger mode

The default trigger mode is `hover`, you can change it to `click`.

```typescript
import { Component } from '@angular/core';

import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-dropdown-trigger',
  imports: [NzDropdownModule, NzIconModule],
  template: `
    <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
      Click me
      <nz-icon nzType="down" />
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-menu-divider></li>
        <li nz-menu-item nzDisabled>disabled menu item</li>
        <li nz-submenu nzTitle="sub menu">
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
        <li nz-submenu nzDisabled nzTitle="disabled sub menu">
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownTriggerComponent {}
```
