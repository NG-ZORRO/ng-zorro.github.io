---
category: Components
type: Feedback
title: Message
cover: 'https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg'
description: Display global messages as feedback in response to user operations.
---

## When To Use

- To provide feedback such as success, warning, error etc.
- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted
  prompt.

## API

### NzMessageService

This components provides some service methods, with usage and arguments as following:

- `NzMessageService.success(content, [options])`
- `NzMessageService.error(content, [options])`
- `NzMessageService.info(content, [options])`
- `NzMessageService.warning(content, [options])`
- `NzMessageService.loading(content, [options])`

| Argument | Description                                                                     | Type                          | Default |
| -------- | ------------------------------------------------------------------------------- | ----------------------------- | ------- |
| content  | The content of message                                                          | `string \| TemplateRef<void>` | -       |
| options  | Support setting the parameters for the current message box, see the table below | `object`                      | -       |

The parameters that are set by the `options` support are as follows:

| Argument       | Description                                                            | Type                         | Version |
| -------------- | ---------------------------------------------------------------------- | ---------------------------- | ------- |
| nzDuration     | Duration (milliseconds), does not disappear when set to 0              | `number`                     |         |
| nzPauseOnHover | Do not remove automatically when mouse is over while setting to `true` | `boolean`                    |         |
| nzAnimate      | Whether to turn on animation                                           | `boolean`                    |         |
| nzData         | Data to pass to custom template                                        | `NzSafeAny`                  |         |
| nzStyle        | Customized inline style                                                | `NgStyleInterface \| string` | 20.4.0  |
| nzClass        | Customized CSS class                                                   | `NgClassInterface \| string` | 20.4.0  |

Methods for destruction are also provided:

- `message.remove(id)` : Remove the message with the specified id. When the id is empty, remove all messages (the
  message id is returned by the above method)

### Global Configuration

You can use `NzConfigService` to configure this component globally. Please check
the [Global Configuration](/docs/global-config/en) chapter for more information.

| Argument       | Description                                                            | Type               | Default |
| -------------- | ---------------------------------------------------------------------- | ------------------ | ------- |
| nzDuration     | Duration (milliseconds), does not disappear when set to 0              | `number`           | `3000`  |
| nzMaxStack     | The maximum number of messages that can be displayed at the same time  | `number`           | `7`     |
| nzPauseOnHover | Do not remove automatically when mouse is over while setting to `true` | `boolean`          | `true`  |
| nzAnimate      | Whether to turn on animation                                           | `boolean`          | `true`  |
| nzTop          | Distance from top                                                      | `number \| string` | `24`    |
| nzDirection    | Direction of the text in the messages                                  | `'ltr' \| 'rtl'`   | -       |

### NzMessageRef

It's the object that returned when you call `NzMessageService.success` and others.

```ts
export interface NzMessageRef {
  messageId: string;
  onClose: Subject<false>; // It would emit an event when the message is closed
}
```

---

## Examples

### Customize duration

You can subscribe to `onClose` event to make some operations. This case would open three messages in sequence.

```typescript
import { Component } from '@angular/core';
import { concatMap } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-close',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="default" (click)="startShowMessages()">Display a sequence of messages</button>`
})
export class NzDemoMessageCloseComponent {
  constructor(private message: NzMessageService) {}

  startShowMessages(): void {
    this.message
      .loading('Action in progress', { nzDuration: 2500 })
      .onClose!.pipe(
        concatMap(() => this.message.success('Loading finished', { nzDuration: 2500 }).onClose!),
        concatMap(() => this.message.info('Loading finished is finished', { nzDuration: 2500 }).onClose!)
      )
      .subscribe(() => {
        console.log('All completed!');
      });
  }
}
```

### Customized style

The `nzStyle` and `nzClass` are available to customize Message.

```typescript
import { Component, inject } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-custom-style',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="primary" (click)="createNotification()">Open the notification box</button>`
})
export class NzDemoMessageCustomStyleComponent {
  readonly #messageService = inject(NzMessageService);

  createNotification(): void {
    this.#messageService.success('This is the content of the notification', {
      nzStyle: {
        'margin-top': '20vh'
      },
      nzClass: 'custom-class'
    });
  }
}
```

### Customize duration

Customize message display duration from default `3s` to `10s`.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-duration',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="default" (click)="createBasicMessage()">Customized display duration</button>`
})
export class NzDemoMessageDurationComponent {
  createBasicMessage(): void {
    this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', {
      nzDuration: 10000
    });
  }

  constructor(private message: NzMessageService) {}
}
```

### Normal prompt

Normal messages as feedbacks.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-info',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="primary" (click)="createBasicMessage()">Display normal message</button>`
})
export class NzDemoMessageInfoComponent {
  constructor(private message: NzMessageService) {}

  createBasicMessage(): void {
    this.message.info('This is a normal message');
  }
}
```

### Message of loading

Display a global loading indicator, which is dismissed by itself asynchronously.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-loading',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="default" (click)="createBasicMessage()">Display a loading indicator</button>`
})
export class NzDemoMessageLoadingComponent {
  constructor(private message: NzMessageService) {}

  createBasicMessage(): void {
    const id = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
    setTimeout(() => {
      this.message.remove(id);
    }, 2500);
  }
}
```

### Other types of message

Messages of success, error and warning types.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-other',
  imports: [NzButtonModule],
  template: `
    <button nz-button (click)="createMessage('success')">Success</button>
    <button nz-button (click)="createMessage('error')">Error</button>
    <button nz-button (click)="createMessage('warning')">Warning</button>
  `,
  styles: `
    [nz-button] {
      margin-right: 8px;
    }
  `
})
export class NzDemoMessageOtherComponent {
  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

  constructor(private message: NzMessageService) {}
}
```

### Custom Template

You can have a custom template for the message content.
You would have the possibility to pass some optional data to this custom template thanks to the `nzData` option

```typescript
import { Component, TemplateRef, ViewChild } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-template',
  imports: [NzButtonModule],
  template: `
    <button nz-button nzType="default" (click)="showMessage()">Display a custom template</button>
    <ng-template #customTemplate let-data="data">My Favorite Framework is {{ data }}</ng-template>
  `
})
export class NzDemoMessageTemplateComponent {
  @ViewChild('customTemplate', { static: true }) customTemplate!: TemplateRef<{
    $implicit: NzMessageComponent;
    data: string;
  }>;

  constructor(private message: NzMessageService) {}

  showMessage(): void {
    this.message.success(this.customTemplate, { nzData: 'Angular' });
  }
}
```
