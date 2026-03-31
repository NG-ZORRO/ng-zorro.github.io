---
category: Components
type: Data Display
title: Avatar
cover: 'https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg'
description: Used to represent users or things, supporting the display of images, icons, or characters.
---

## API

### nz-avatar

| Property            | Description                                                                                                                                                     | Type                                        | Default     | Global Config |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ----------- | ------------- |
| `[nzIcon]`          | The `Icon` type for an icon avatar, see `Icon`                                                                                                                  | `string`                                    | -           |
| `[nzShape]`         | The shape of avatar                                                                                                                                             | `'circle' \| 'square'`                      | `'circle'`  | ✅            |
| `[nzSize]`          | The size of the avatar                                                                                                                                          | `'large' \| 'small' \| 'default' \| number` | `'default'` | ✅            |
| `[nzGap]`           | Letter type unit distance between left and right sides                                                                                                          | `number`                                    | `4`         | ✅            |
| `[nzSrc]`           | Avatar image URL                                                                                                                                                | `string`                                    | -           |
| `[nzSrcSet]`        | a list of sources to use for different screen resolutions                                                                                                       | `string`                                    | -           |
| `[nzAlt]`           | This attribute defines the alternative text describing the image                                                                                                | `string`                                    | -           |
| `[nzText]`          | Letter type avatar                                                                                                                                              | `string`                                    | -           |
| `[nzLoading]`       | Sets the native [`loading`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#loading) attribute on the avatar image element             | `'eager' \| 'lazy'`                         | `'eager'`   |               |
| `[nzFetchPriority]` | Sets the native [`fetchpriority`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#fetchpriority) attribute on the avatar image element | `'high' \| 'low' \| 'auto'`                 | `'auto'`    |               |
| `(nzError)`         | Handler when img load error, call the `preventDefault` method to prevent default fallback behavior                                                              | `EventEmitter<Event>`                       | -           |

### nz-avatar-group

```html
<nz-avatar-group>
  <nz-avatar nzIcon="user"></nz-avatar>
  <!--  ...  -->
</nz-avatar-group>
```

---

## Examples

### With Badge

Usually used for messages remind.

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-avatar-badge',
  imports: [NzBadgeModule, NzAvatarModule],
  template: `
    <nz-badge [nzCount]="5" style="margin-right: 24px">
      <nz-avatar nzIcon="user" nzShape="square" />
    </nz-badge>
    <nz-badge nzDot>
      <nz-avatar nzIcon="user" nzShape="square" />
    </nz-badge>
  `
})
export class NzDemoAvatarBadgeComponent {}
```

### Basic

Three sizes and two shapes are available.

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'nz-demo-avatar-basic',
  imports: [NzAvatarModule],
  template: `
    <div>
      <nz-avatar [nzSize]="64" nzIcon="user" />
      <nz-avatar nzSize="large" nzIcon="user" />
      <nz-avatar nzIcon="user" />
      <nz-avatar nzSize="small" nzIcon="user" />
    </div>
    <div>
      <nz-avatar nzShape="square" [nzSize]="64" nzIcon="user" />
      <nz-avatar nzShape="square" nzSize="large" nzIcon="user" />
      <nz-avatar nzShape="square" nzIcon="user" />
      <nz-avatar nzShape="square" nzSize="small" nzIcon="user" />
    </div>
  `,
  styles: `
    nz-avatar {
      margin-top: 16px;
      margin-right: 16px;
    }
  `
})
export class NzDemoAvatarBasicComponent {}
```

### Autoset Font Size

For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.

```typescript
import { Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

const userList = ['Lucy', 'U', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
  selector: 'nz-demo-avatar-dynamic',
  imports: [FormsModule, NzAvatarModule, NzButtonModule, NzInputNumberModule],
  template: `
    <div>
      <label>Gap: </label>
      <nz-input-number [nzMin]="0" [nzMax]="16" [nzStep]="1" [(ngModel)]="gap" />
      <button nz-button (click)="change()">Change Text</button>
    </div>

    <nz-avatar [nzGap]="gap()" [nzText]="text()" nzSize="large" [style.background-color]="color()" />
  `,
  styles: `
    div {
      margin-bottom: 16px;
    }
    button {
      margin-left: 8px;
    }
  `
})
export class NzDemoAvatarDynamicComponent {
  index = signal(3);
  text = computed(() => userList[this.index()]);
  color = computed(() => colorList[this.index()]);
  gap = model(4);
  change(): void {
    this.index.update(idx => (idx + 1) % userList.length);
  }
}
```

### Avatar Group

Avatar group display.

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-avatar-group',
  imports: [NzAvatarModule, NzDividerModule, NzTooltipModule, NzIconModule],
  template: `
    <nz-avatar-group>
      <nz-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <nz-avatar style="background-color: #f56a00" nzText="U" />
      <nz-avatar style="background-color: #87d068" nz-tooltip nzTooltipTitle="NG-ZORRO User" nzIcon="user" />
      <nz-avatar style="background-color: #1890ff" nzText="NG" />
      <nz-avatar [nzSize]="32">
        <nz-icon nzType="ant-design" nzTheme="outline" />
      </nz-avatar>
    </nz-avatar-group>
    <nz-divider />
    <nz-avatar-group>
      <nz-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <nz-avatar style="background-color: #f56a00" nzText="U" />
      <nz-avatar style="background-color: #fde3cf; color: #f56a00" nzText="+2" />
    </nz-avatar-group>
  `
})
export class NzDemoAvatarGroupComponent {}
```

### Type

Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'nz-demo-avatar-type',
  imports: [NzAvatarModule],
  template: `
    <nz-avatar nzIcon="user" />
    <nz-avatar nzText="U" />
    <nz-avatar nzText="USER" />
    <nz-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <nz-avatar nzText="U" style="color:#f56a00; background-color:#fde3cf;" />
    <nz-avatar nzIcon="user" style="background-color:#87d068;" />
  `,
  styles: `
    nz-avatar {
      margin-top: 16px;
      margin-right: 16px;
    }
  `
})
export class NzDemoAvatarTypeComponent {}
```
