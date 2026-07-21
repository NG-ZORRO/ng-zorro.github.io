---
category: Components
type: Feedback
title: Alert
cover: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg'
description: Alert component for feedback.
---

## When To Use

- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.

## API

### nz-alert

| Property          | Description                                                     | Type                                          | Default  | Global Config |
| ----------------- | --------------------------------------------------------------- | --------------------------------------------- | -------- | ------------- |
| `[nzBanner]`      | Whether to show as banner                                       | `boolean`                                     | `false`  |
| `[nzAction]`      | Customized alert's action                                       | `string \| TemplateRef<void>`                 | -        |
| `[nzCloseable]`   | Whether Alert can be closed                                     | `boolean`                                     | -        | ✅            |
| `[nzCloseText]`   | Close text to show                                              | `string \| TemplateRef<void>`                 | -        |
| `[nzDescription]` | Additional content of Alert                                     | `string \| TemplateRef<void>`                 | -        |
| `[nzMessage]`     | Content of Alert                                                | `string \| TemplateRef<void>`                 | -        |
| `[nzShowIcon]`    | Whether to show icon, in `nzBanner` mode default is `true`      | `boolean`                                     | `false`  | ✅            |
| `[nzIconType]`    | Icon type, effective when `nzShowIcon` is `true`                | `string`                                      | -        |
| `[nzType]`        | Type of Alert styles, in `nzBanner` mode default is `'warning'` | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` |
| `[nzIcon]`        | Custom icon, effective when showIcon is true                    | `string \| TemplateRef<void>`                 | -        |
| `(nzOnClose)`     | Callback when Alert is closed                                   | `EventEmitter<void>`                          | -        |

### nz-alert-marquee

Use `nz-alert-marquee` as the `[nzMessage]` template content to create a scrolling loop banner inside an alert.

| Property           | Description                                                      | Type      | Default |
| ------------------ | ---------------------------------------------------------------- | --------- | ------- |
| `[nzPauseOnHover]` | Whether to pause the scrolling animation on mouse hover          | `boolean` | `false` |
| `[nzSpeed]`        | Animation speed in pixels per second (higher = faster scrolling) | `number`  | `50`    |

---

## Examples

### Custom action

Custom action.

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

### Banner

Display Alert as a banner at top of page.

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

### Basic

The simplest usage for short messages.

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

### Closable

To show close button.

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

### Customized Close Text

Replace the default icon with customized content.

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

### Custom icon

Make information more clear and more friendly and meet customized needs.

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

### Description

Additional description for alert message.

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

### Icon

Decent icon make information more clear and more friendly.

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

### Loop Banner

Pass `nz-alert-marquee` as the `[nzMessage]` template content of a `nzBanner` alert to create a scrolling loop banner.
Use `nzPauseOnHover` to pause the animation on mouse hover, and `nzSpeed` to control the scrolling speed in pixels per second (default 50, higher value = faster scrolling).

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

### More types

There are 4 types of Alert: `success`, `info`, `warning`, `error`.

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
