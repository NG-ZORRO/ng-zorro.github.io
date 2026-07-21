---
category: Components
subtitle: 下拉菜单
type: 导航
title: Dropdown
cover: 'https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg'
description: 向下弹出的列表。
---

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## API

### [nz-dropdown]

| 参数                   | 说明                                     | 类型                                                                                        | 默认值         | 版本   |
| ---------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------- | -------------- | ------ |
| `[nzDropdownMenu]`     | Dropdown 下拉菜单组件                    | `NzDropdownMenuComponent`                                                                   | -              |
| `[nzDisabled]`         | 菜单是否禁用                             | `boolean`                                                                                   | -              |
| `[nzPlacement]`        | 菜单弹出位置                             | `'bottomLeft' \| 'bottomCenter' \| 'bottomRight' \| 'topLeft' \| 'topCenter' \| 'topRight'` | `'bottomLeft'` |
| `[nzTrigger]`          | 触发下拉的行为                           | `'click' \| 'hover'`                                                                        | `'hover'`      |
| `[nzClickHide]`        | 点击后是否隐藏菜单                       | `boolean`                                                                                   | `true`         |
| `[nzVisible]`          | 菜单是否显示，可双向绑定                 | `boolean`                                                                                   | -              |
| `[nzOverlayClassName]` | 下拉根元素的类名称                       | `string`                                                                                    | -              |
| `[nzOverlayStyle]`     | 下拉根元素的样式                         | `object`                                                                                    | -              |
| `(nzVisibleChange)`    | 菜单显示状态改变时调用，参数为 nzVisible | `EventEmitter<boolean>`                                                                     | -              |
| `[nzArrow]`            | 下拉框箭头是否显示                       | `boolean`                                                                                   | `false`        | 20.2.0 |

菜单使用 [nz-menu](/components/menu/zh)，还包括菜单项 `[nz-menu-item]`，分割线 `[nz-menu-divider]`。

> 注意：`nz-dropdown` 下的 `[nz-menu]` 默认不可选中。如果需要菜单可选中，可以指定 `<ul nz-menu nzSelectable>`.
>
> `nz-dropdown-menu` 内 `[nz-menu]` 的 `nzMode` 只可以是默认值 `vertical`。

### nz-dropdown-menu

用于包裹菜单项，可以通过 `nzDropdownMenu` 模板变量导出后传入 `[nz-dropdown]` 和 `NzContextMenuService`。

> 注意：每个 `nz-dropdown-menu` 只能作为一个 `[nz-dropdown]` 的输入项

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

用于右键弹出下拉菜单，具体参见示例

| 方法/属性 | 说明         | 参数                                                                        | 返回                   |
| --------- | ------------ | --------------------------------------------------------------------------- | ---------------------- |
| create    | 创建右键菜单 | `($event:MouseEvent \| {x:number, y:number}, menu:NzDropdownMenuComponent)` | `EmbeddedViewRef<any>` |
| close     | 关闭右键菜单 | -                                                                           | -                      |

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 箭头

可以展示一个箭头

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

### 基本

最简单的下拉菜单。

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

### 右键菜单

在区域内任意右击触发。

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

### 带下拉框的按钮

左边是按钮，右边是额外的相关功能菜单。

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

### 触发事件

点击菜单项后会触发事件，用户可以自由添加各种事件进行不同的操作。

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

### 其他元素

分割线和不可用菜单项。

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

### 菜单隐藏方式

默认是点击关闭菜单，可以关闭此功能。

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

### 弹出位置

支持 6 个弹出位置。

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

### 多级菜单

传入的菜单里有多个层级。

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

### 触发方式

默认是移入触发菜单，可以点击触发。

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
