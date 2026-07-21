---
category: Components
subtitle: 警告提示
type: 反馈
title: Alert
cover: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg'
description: 警告提示，展现需要关注的信息。
---

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## API

### nz-alert

| 参数              | 说明                                                      | 类型                                          | 默认值   | 全局配置 |
| ----------------- | --------------------------------------------------------- | --------------------------------------------- | -------- | -------- |
| `[nzBanner]`      | 是否用作顶部公告                                          | `boolean`                                     | `false`  |
| `[nzAction]`      | 自定义操作项                                              | `string \| TemplateRef<void>`                 | -        |
| `[nzCloseable]`   | 默认不显示关闭按钮                                        | `boolean`                                     | -        | ✅       |
| `[nzCloseText]`   | 自定义关闭按钮                                            | `string \| TemplateRef<void>`                 | -        |
| `[nzDescription]` | 警告提示的辅助性文字介绍                                  | `string \| TemplateRef<void>`                 | -        |
| `[nzMessage]`     | 警告提示内容                                              | `string \| TemplateRef<void>`                 | -        |
| `[nzShowIcon]`    | 是否显示辅助图标，`nzBanner` 模式下默认值为 `true`        | `boolean`                                     | `false`  | ✅       |
| `[nzIconType]`    | 自定义图标类型，`nzShowIcon` 为 `true` 时有效             | `string`                                      | -        |
| `[nzType]`        | 指定警告提示的样式，`nzBanner` 模式下默认值为 `'warning'` | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` |
| `[nzIcon]`        | 自定义图标，showIcon 为 true 时有效                       | `string \| TemplateRef<void>`                 | -        |
| `(nzOnClose)`     | 关闭时触发的回调函数                                      | `EventEmitter<void>`                          | -        |

### nz-alert-marquee

将 `nz-alert-marquee` 作为 `[nzMessage]` 的模板内容使用，可在警告提示中实现滚动走马灯效果。

| 参数               | 说明                                | 类型      | 默认值  |
| ------------------ | ----------------------------------- | --------- | ------- |
| `[nzPauseOnHover]` | 鼠标悬停时是否暂停滚动动画          | `boolean` | `false` |
| `[nzSpeed]`        | 滚动速度（像素/秒），值越大滚动越快 | `number`  | `50`    |

---

## 代码示例

### 操作

可以在右上角自定义操作项。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-alert-action',
  imports: [NzAlertModule, NzButtonModule, NzSpaceModule],
  template: `
    <nz-alert nzShowIcon nzType="success" nzMessage="Success Text" [nzAction]="actionTemplate1" />
    <ng-template #actionTemplate1>
      <button nz-button nzSize="small" nzType="text" (click)="doAction('undo')">Undo</button></ng-template
    >
    <br />
    <nz-alert
      nzShowIcon
      nzType="error"
      nzMessage="Error Text"
      [nzDescription]="descriptionTemplate1"
      [nzAction]="actionTemplate2"
    />
    <ng-template #descriptionTemplate1>
      <p>Error Description Error Description Error Description Error Description</p>
    </ng-template>
    <ng-template #actionTemplate2>
      <button nz-button nzSize="small" nzType="default" nzDanger (click)="doAction('detail')">Detail</button>
    </ng-template>
    <br />
    <nz-alert nzCloseable nzType="warning" nzMessage="Warning Text" [nzAction]="actionTemplate3" />
    <ng-template #actionTemplate3>
      <button nz-button nzSize="small" nzType="primary" nzGhost (click)="doAction('ignore')">Ignore</button>
    </ng-template>
    <br />
    <nz-alert
      nzShowIcon
      nzType="info"
      nzMessage="Info Text"
      [nzDescription]="descriptionTemplate2"
      [nzAction]="actionTemplate4"
    />
    <ng-template #descriptionTemplate2>
      <p>Info Description Info Description Info Description Info Description</p>
    </ng-template>
    <ng-template #actionTemplate4>
      <nz-space nzDirection="vertical">
        <button *nzSpaceItem nz-button nzSize="small" nzType="primary" (click)="doAction('accept')">Accept</button>
        <button *nzSpaceItem nz-button nzSize="small" nzType="default" nzDanger (click)="doAction('decline')"
          >Decline</button
        >
      </nz-space>
    </ng-template>
  `
})
export class NzDemoAlertActionComponent {
  doAction(action: string): void {
    console.log(`Do alert's action: ${action}`);
  }
}
```

### 顶部公告

页面顶部通告形式，默认有图标且 `nzType` 为 `'warning'`。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-banner',
  imports: [NzAlertModule],
  template: `
    <nz-alert nzBanner nzMessage="Warning text" />
    <nz-alert nzBanner nzMessage="Very long warning text warning text text text text text text text" nzCloseable />
    <nz-alert nzBanner nzMessage="Warning text without icon" [nzShowIcon]="false" />
    <nz-alert nzBanner nzType="error" nzMessage="Error text" />
  `,
  styles: `
    nz-alert {
      margin-bottom: 12px;
    }
  `
})
export class NzDemoAlertBannerComponent {}
```

### 基本

最简单的用法，适用于简短的警告提示。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-basic',
  imports: [NzAlertModule],
  template: `<nz-alert nzType="success" nzMessage="Success Text" />`
})
export class NzDemoAlertBasicComponent {}
```

### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-closable',
  imports: [NzAlertModule],
  template: `
    <nz-alert
      nzType="warning"
      nzCloseable
      nzMessage="Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text"
      (nzOnClose)="afterClose()"
    />
    <nz-alert
      nzType="error"
      nzCloseable
      nzMessage="Error Text"
      nzDescription="Error Description Error Description Error Description Error Description Error Description Error Description"
      (nzOnClose)="afterClose()"
    />
  `,
  styles: `
    nz-alert {
      margin-bottom: 16px;
    }
  `
})
export class NzDemoAlertClosableComponent {
  afterClose(): void {
    console.log('close');
  }
}
```

### 自定义关闭

可以自定义关闭，自定义的内容会替换原先的关闭按钮。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-close-text',
  imports: [NzAlertModule],
  template: `<nz-alert nzType="info" nzMessage="Info Text" nzCloseText="Close Now" />`
})
export class NzDemoAlertCloseTextComponent {}
```

### 自定义图标

让信息类型更加醒目, 满足定制化需求。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-custom-icon',
  imports: [NzAlertModule],
  template: `
    <nz-alert
      nzType="success"
      nzMessage="Success Tips"
      nzDescription="Detailed description and advices about successful copywriting."
      [nzIcon]="customIconTemplate"
      nzShowIcon
    />

    <ng-template #customIconTemplate>
      <div> S </div>
    </ng-template>
  `
})
export class NzDemoAlertCustomIconComponent {}
```

### 含有辅助性文字介绍

含有辅助性文字介绍的警告提示。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-description',
  imports: [NzAlertModule],
  template: `
    <nz-alert
      nzType="success"
      nzMessage="Success Text"
      nzDescription="Success Description Success Description Success Description"
    />
    <nz-alert
      nzType="info"
      nzMessage="Info Text"
      nzDescription="Info Description Info Description Info Description Info Description"
    />
    <nz-alert
      nzType="warning"
      nzMessage="Warning Text"
      nzDescription="Warning Description Warning Description Warning Description Warning Description"
    />
    <nz-alert
      nzType="error"
      nzMessage="Error Text"
      nzDescription="Error Description Error Description Error Description Error Description"
    />
  `,
  styles: `
    nz-alert {
      margin-bottom: 16px;
    }
  `
})
export class NzDemoAlertDescriptionComponent {}
```

### 图标

可口的图标让信息类型更加醒目。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-icon',
  imports: [NzAlertModule],
  template: `
    <nz-alert nzType="success" nzMessage="Success Tips" nzShowIcon />
    <nz-alert nzType="info" nzMessage="Informational Notes" nzShowIcon />
    <nz-alert nzType="warning" nzMessage="Warning" nzShowIcon />
    <nz-alert nzType="error" nzMessage="Error" nzShowIcon />
    <nz-alert
      nzType="success"
      nzMessage="Success Tips"
      nzDescription="Detailed description and advices about successful copywriting."
      nzShowIcon
    />
    <nz-alert
      nzType="info"
      nzMessage="Informational Notes"
      nzDescription="Additional description and informations about copywriting."
      nzShowIcon
    />
    <nz-alert
      nzType="warning"
      nzMessage="Warning"
      nzDescription="This is a warning notice about copywriting."
      nzShowIcon
    />
    <nz-alert nzType="error" nzMessage="Error" nzDescription="This is an error message about copywriting." nzShowIcon />
  `,
  styles: `
    nz-alert {
      margin-bottom: 16px;
    }
  `
})
export class NzDemoAlertIconComponent {}
```

### 滚动公告

将 `nz-alert-marquee` 作为 `nzBanner` 警告的 `[nzMessage]` 模板内容传入，可实现滚动走马灯公告效果。
使用 `nzPauseOnHover` 属性可在鼠标悬停时暂停滚动，`nzSpeed` 属性用于控制滚动速度（单位：像素/秒，默认 50，值越大滚动越快）。

```typescript
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-loop-banner',
  imports: [NzAlertModule],
  template: `
    <nz-alert nzBanner [nzMessage]="message" />
    <br />
    <nz-alert nzBanner [nzMessage]="messagePauseOnHover" />

    <ng-template #message>
      <nz-alert-marquee nzSpeed="60">
        I can be a long text that scrolls continuously in the banner alert. This text will loop seamlessly.
      </nz-alert-marquee>
    </ng-template>

    <ng-template #messagePauseOnHover>
      <nz-alert-marquee nzSpeed="60" nzPauseOnHover="true">
        Hover over me to pause the scrolling animation. This text loops continuously.
      </nz-alert-marquee>
    </ng-template>
  `
})
export class NzDemoAlertLoopBannerComponent {}
```

### 四种样式

共有四种样式 `success`、`info`、`warning`、`error`。

```typescript
import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'nz-demo-alert-style',
  imports: [NzAlertModule],
  template: `
    <nz-alert nzType="success" nzMessage="Success Text" />
    <nz-alert nzType="info" nzMessage="Info Text" />
    <nz-alert nzType="warning" nzMessage="Warning Text" />
    <nz-alert nzType="error" nzMessage="Error Text" />
  `,
  styles: `
    nz-alert {
      margin-bottom: 16px;
    }
  `
})
export class NzDemoAlertStyleComponent {}
```
