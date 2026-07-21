---
category: Components
type: Feedback
title: Notification
cover: 'https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg'
description: Prompt notification message globally.
---

## When To Use

To display a notification message at any of the four corners of the viewport. Typically it can be
used in the following cases:

- A notification with complex content.
- A notification providing a feedback based on the user interaction. Or it may show some details
  about upcoming steps the user may have to follow.
- A notification that is pushed by the application.

## API

### NzNotificationService

The component provides a number of service methods using the following methods and parameters:

- `NzNotificationService.blank(title, content, [options])` // Notification without icon
- `NzNotificationService.success(title, content, [options])`
- `NzNotificationService.error(title, content, [options])`
- `NzNotificationService.info(title, content, [options])`
- `NzNotificationService.warning(title, content, [options])`

| Argument  | Description                                                                          | Type                          | Default |
| --------- | ------------------------------------------------------------------------------------ | ----------------------------- | ------- |
| `title`   | Title                                                                                | `string \| TemplateRef<void>` | -       |
| `content` | Notification content                                                                 | `NzNotificationContentType`   | -       |
| `options` | Support setting the parameters for the current notification box, see the table below | `object`                      | -       |

The parameters that are set by the `options` support are as follows:

| Argument         | Description                                                            | Type                                                            |
| ---------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| `nzKey`          | The unique identifier of the Notification                              | `string`                                                        |
| `nzDuration`     | Duration (milliseconds), does not disappear when set to 0              | `number`                                                        |
| `nzPauseOnHover` | Do not remove automatically when mouse is over while setting to `true` | `boolean`                                                       |
| `nzAnimate`      | Whether to turn on animation                                           | `boolean`                                                       |
| `nzStyle`        | Custom inline style                                                    | `object`                                                        |
| `nzClass`        | Custom CSS class                                                       | `object`                                                        |
| `nzData`         | Anything that would be used as template context                        | `any`                                                           |
| `nzCloseIcon`    | Custom close icon                                                      | `TemplateRef<void> \| string`                                   |
| `nzButton`       | Custom button                                                          | `TemplateRef<{ $implicit: NzNotificationComponent }> \| string` |

Methods for destruction are also provided:

- `NzNotificationService.remove(id)` // Remove the notification with the specified id. When the id is empty, remove all notifications (the notification id is returned by the above method)

### Global Configuration

You can use `NzConfigService` to configure this component globally. Please check the [Global Configuration](/docs/global-config/en) chapter for more information.

| Parameter        | Description                                                                             | Type                                                                            | Default      |
| ---------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------ |
| `nzDuration`     | Duration (milliseconds), does not disappear when set to 0                               | `number`                                                                        | `4500`       |
| `nzMaxStack`     | The maximum number of notifications that can be displayed at the same time              | `number`                                                                        | `8`          |
| `nzPauseOnHover` | Do not remove automatically when mouse is over while setting to `true`                  | `boolean`                                                                       | `true`       |
| `nzAnimate`      | Whether to turn on animation                                                            | `boolean`                                                                       | `true`       |
| `nzTop`          | The top of the notification when it pops up from the top.                               | `string`                                                                        | `'24px'`     |
| `nzBottom`       | The bottom of the notification when it pops up from the bottom.                         | `string`                                                                        | `'24px'`     |
| `nzPlacement`    | Popup position, optional `topLeft` `topRight` `bottomLeft` `bottomRight` `top` `bottom` | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'top' \| 'bottom'` | `'topRight'` |
| `nzDirection`    | Direction of the text in the notification                                               | `'ltr' \| 'rtl'`                                                                | -            |

### NzNotificationRef

It's the object that returned when you call `NzNotificationService.success` and others.

```ts
export interface NzNotificationRef {
  messageId: string;
  onClose: Subject<boolean>; // It would emit an event when the notification is closed, and emit a `true` if it's closed by user
  onClick: Subject<MouseEvent>;
}
```

---

## Examples

### Basic

The simplest usage that close the notification box after 4.5s.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-basic',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="primary" (click)="createNotification()">Open the notification box</button>`
})
export class NzDemoNotificationBasicComponent {
  constructor(private notification: NzNotificationService) {}

  createNotification(): void {
    this.notification
      .blank(
        'Notification Title',
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}
```

### Customized Icon

The icon can be customized to any `TemplateRef<void>`.

```typescript
import { Component, TemplateRef } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { type NzNotificationComponent, NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-custom-icon',
  imports: [NzIconModule, NzButtonModule],
  template: `
    <ng-template #template>
      <div class="ant-notification-notice-content">
        <div class="ant-notification-notice-with-icon">
          <span class="ant-notification-notice-icon">
            <nz-icon nzType="smile" style="color: rgb(16, 142, 233);" />
          </span>
          <div class="ant-notification-notice-message">Notification Title</div>
          <div class="ant-notification-notice-description">
            This is the content of the notification. This is the content of the notification. This is the content of the
            notification.
          </div>
        </div>
      </div>
    </ng-template>
    <button nz-button nzType="primary" (click)="createNotification(template)">Open the notification box</button>
  `
})
export class NzDemoNotificationCustomIconComponent {
  constructor(private notification: NzNotificationService) {}

  createNotification(template: TemplateRef<{ $implicit: NzNotificationComponent; data: undefined }>): void {
    this.notification.template(template);
  }
}
```

### Customized style

The nzStyle and nzClass are available to customize Notification.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-custom-style',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="primary" (click)="createNotification()">Open the notification box</button>`
})
export class NzDemoNotificationCustomStyleComponent {
  constructor(private notification: NzNotificationService) {}

  createNotification(): void {
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      {
        nzStyle: {
          width: '600px',
          marginLeft: '-265px'
        },
        nzClass: 'test-class'
      }
    );
  }
}
```

### Duration after which the notification box is closed

`nzDuration` can be used to specify how long the notification stays open. After the duration time elapses,
the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,
the notification box will never close automatically.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-duration',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="primary" (click)="createNotification()">Open the notification box</button>`
})
export class NzDemoNotificationDurationComponent {
  constructor(private notification: NzNotificationService) {}

  createNotification(): void {
    this.notification.blank(
      'Notification Title',
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      { nzDuration: 0 }
    );
  }
}
```

### Placement

A notification box can pop up from `topRight` or `bottomRight` or `bottomLeft` or `topLeft` or `top` or `bottom`.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-placement',
  imports: [NzButtonModule, NzDividerModule, NzIconModule],
  template: `
    <button nz-button (click)="createNotification('top')" nzType="primary">
      <nz-icon nzType="border-top" nzTheme="outline" />
      top
    </button>
    <button nz-button (click)="createNotification('bottom')" nzType="primary">
      <nz-icon nzType="border-bottom" nzTheme="outline" />
      bottom
    </button>
    <nz-divider />
    <button nz-button (click)="createNotification('topLeft')" nzType="primary">
      <nz-icon nzType="radius-upleft" />
      topLeft
    </button>
    <button nz-button (click)="createNotification('topRight')" nzType="primary">
      <nz-icon nzType="radius-upright" />
      topRight
    </button>
    <nz-divider />
    <button nz-button (click)="createNotification('bottomLeft')" nzType="primary">
      <nz-icon nzType="radius-bottomleft" />
      bottomLeft
    </button>
    <button nz-button (click)="createNotification('bottomRight')" nzType="primary">
      <nz-icon nzType="radius-bottomright" />
      bottomRight
    </button>
  `,
  styles: `
    button {
      margin-right: 1em;
    }
  `
})
export class NzDemoNotificationPlacementComponent {
  placement = 'topRight';

  constructor(private notification: NzNotificationService) {}

  createNotification(position: NzNotificationPlacement): void {
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      { nzPlacement: position }
    );
  }
}
```

### Use a template

Use template to implement more complex interactions.

```typescript
import { Component, TemplateRef, ViewChild } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { type NzNotificationComponent, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-notification-template',
  imports: [NzButtonModule, NzTagModule],
  template: `
    <button nz-button nzType="primary" (click)="createNotification()">Open the notification box</button>
    <ng-template let-fruit="data">
      It's a
      <nz-tag [nzColor]="fruit.color">{{ fruit.name }}</nz-tag>
      <button nz-button nzSize="small">Cut It!</button>
    </ng-template>
  `,
  styles: `
    button {
      margin-top: 8px;
    }
  `
})
export class NzDemoNotificationTemplateComponent {
  @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{
    $implicit: NzNotificationComponent;
    data: Array<{ name: string; color: string }>;
  }>;

  constructor(private notificationService: NzNotificationService) {}

  createNotification(): void {
    const fruits = [
      { name: 'Apple', color: 'red' },
      { name: 'Orange', color: 'orange' },
      { name: 'Watermelon', color: 'green' }
    ];

    fruits.forEach(fruit => {
      this.notificationService.template(this.template!, { nzData: fruit });
    });
  }
}
```

### Update Notification Content

Update content with unique `nzKey`.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-update',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="primary" (click)="createNotification()"> Open the notification box </button>`
})
export class NzDemoNotificationUpdateComponent {
  constructor(private notification: NzNotificationService) {}

  createNotification(): void {
    this.notification.blank('Notification Title', 'Description.', {
      nzKey: 'key'
    });

    setTimeout(() => {
      this.notification.blank('New Title', 'New description', {
        nzKey: 'key'
      });
    }, 1000);
  }
}
```

### Custom close button

To customize the style or font of the close button.

```typescript
import { Component, TemplateRef, ViewChild } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationComponent, NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-with-btn',
  imports: [NzButtonModule],
  template: `
    <ng-template #notificationBtnTpl let-notification>
      <button nz-button nzType="primary" nzSize="small" (click)="notification.close()">Confirm</button>
    </ng-template>

    <button nz-button nzType="primary" (click)="createNotification()">Open the notification box</button>
  `
})
export class NzDemoNotificationWithBtnComponent {
  @ViewChild('notificationBtnTpl', { static: true }) btnTemplate!: TemplateRef<{ $implicit: NzNotificationComponent }>;
  constructor(private notification: NzNotificationService) {}

  createNotification(): void {
    this.notification.blank(
      'Notification Title',
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      {
        nzButton: this.btnTemplate
      }
    );
  }
}
```

### Notification with icon

A notification box with a icon at the left side.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-with-icon',
  imports: [NzButtonModule],
  template: `
    <button nz-button (click)="createNotification('success')">Success</button>
    <button nz-button (click)="createNotification('info')">Info</button>
    <button nz-button (click)="createNotification('warning')">Warning</button>
    <button nz-button (click)="createNotification('error')">Error</button>
  `,
  styles: `
    button {
      margin-right: 1em;
    }
  `
})
export class NzDemoNotificationWithIconComponent {
  constructor(private notification: NzNotificationService) {}

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }
}
```
