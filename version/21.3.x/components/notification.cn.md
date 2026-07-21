---
category: Components
type: 反馈
title: Notification
subtitle: 通知提醒框
cover: 'https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg'
description: 全局展示通知提醒信息。
---

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## API

### NzNotificationService

组件提供了一些服务方法，使用方式和参数如下：

- `NzNotificationService.blank(title, content, [options])` // 不带图标的提示
- `NzNotificationService.success(title, content, [options])`
- `NzNotificationService.error(title, content, [options])`
- `NzNotificationService.info(title, content, [options])`
- `NzNotificationService.warning(title, content, [options])`

| 参数      | 说明                                     | 类型                          | 默认值 |
| --------- | ---------------------------------------- | ----------------------------- | ------ |
| `title`   | 标题                                     | `string \| TemplateRef<void>` | -      |
| `content` | 提示内容                                 | `NzNotificationContentType`   | -      |
| `options` | 支持设置针对当前提示框的参数，见下方表格 | `object`                      | -      |

`options` 支持设置的参数如下：

| 参数             | 说明                                | 类型                                                            |
| ---------------- | ----------------------------------- | --------------------------------------------------------------- |
| `nzKey`          | 通知提示的唯一标识符                | `string`                                                        |
| `nzDuration`     | 持续时间(毫秒)，当设置为 0 时不消失 | `number`                                                        |
| `nzPauseOnHover` | 鼠标移上时禁止自动移除              | `boolean`                                                       |
| `nzAnimate`      | 开关动画效果                        | `boolean`                                                       |
| `nzStyle`        | 自定义内联样式                      | `object`                                                        |
| `nzClass`        | 自定义 CSS class                    | `object`                                                        |
| `nzData`         | 任何想要在模板中作为上下文的数据    | `any`                                                           |
| `nzCloseIcon`    | 自定义关闭图标                      | `TemplateRef<void> \| string`                                   |
| `nzButton`       | 自定义按钮                          | `TemplateRef<{ $implicit: NzNotificationComponent }> \| string` |

还提供了全局销毁方法：

- `NzNotificationService.remove(id)` // 移除特定id的消息，当id为空时，移除所有消息（该消息id通过上述方法返回值中得到）

### 全局配置

可以通过 `NzConfigService` 进行全局配置，详情请见文档中 [全局配置项](/docs/global-config/zh) 章节。

| 参数             | 说明                                                                          | 类型                                                                            | 默认值       |
| ---------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------ |
| `nzDuration`     | 持续时间(毫秒)，当设置为0时不消失                                             | `number`                                                                        | `4500`       |
| `nzMaxStack`     | 同一时间可展示的最大提示数量                                                  | `number`                                                                        | `8`          |
| `nzPauseOnHover` | 鼠标移上时禁止自动移除                                                        | `boolean`                                                                       | `true`       |
| `nzAnimate`      | 开关动画效果                                                                  | `boolean`                                                                       | `true`       |
| `nzTop`          | 消息从顶部弹出时，距离顶部的位置。                                            | `string`                                                                        | `'24px'`     |
| `nzBottom`       | 消息从底部弹出时，距离底部的位置。                                            | `string`                                                                        | `'24px'`     |
| `nzPlacement`    | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` `top` `bottom` | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'top' \| 'bottom'` | `'topRight'` |
| `nzDirection`    | 通知的文字方向                                                                | `'ltr' \| 'rtl'`                                                                | -            |

### NzNotificationRef

当你调用 `NzNotificationService.success` 或其他方法时会返回该对象。

```ts
export interface NzNotificationDataRef {
  messageId: string;
  onClose: Subject<boolean>; // 当 notification 关闭时它会派发一个事件，如果为用户手动关闭会派发 `true`
  onClick: Subject<MouseEvent>;
}
```

---

## 代码示例

### 基本

最简单的用法，4.5 秒后自动关闭。

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

### 自定义图标

图标可以被自定义。

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

### 自定义样式

使用 nzStyle 和 nzClass 来定义样式。

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

### 自动关闭的延时

自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。

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

### 位置

通知从右上角、右下角、左下角、左上角、上方、下方弹出。

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

### 使用模板

通过模板来实现更加复杂的效果和交互。

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

### 更新消息内容

可以通过唯一的 `nzKey` 来更新内容。

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

### 自定义按钮

自定义关闭按钮的样式和文字。

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

### 带有图标的通知提醒框

通知提醒框左侧有图标。

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
