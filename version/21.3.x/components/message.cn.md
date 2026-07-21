---
category: Components
subtitle: 全局提示
type: 反馈
title: Message
cover: 'https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg'
description: 全局展示操作反馈信息。
---

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API

### NzMessageService

组件提供了一些服务方法，使用方式和参数如下：

- `NzMessageService.success(content, [options])`
- `NzMessageService.error(content, [options])`
- `NzMessageService.info(content, [options])`
- `NzMessageService.warning(content, [options])`
- `NzMessageService.loading(content, [options])`

| 参数    | 说明                                     | 类型                          | 默认值 |
| ------- | ---------------------------------------- | ----------------------------- | ------ |
| content | 提示内容                                 | `string \| TemplateRef<void>` | -      |
| options | 支持设置针对当前提示框的参数，见下方表格 | `object`                      | -      |

`options` 支持设置的参数如下：

| 参数           | 说明                              | 类型                         | 版本   |
| -------------- | --------------------------------- | ---------------------------- | ------ |
| nzDuration     | 持续时间(毫秒)，当设置为0时不消失 | `number`                     |        |
| nzPauseOnHover | 鼠标移上时禁止自动移除            | `boolean`                    |        |
| nzAnimate      | 开关动画效果                      | `boolean`                    |        |
| nzData         | 传递给自定义模板的数据            | `NzSafeAny`                  |        |
| nzStyle        | 自定义内联样式                    | `NgStyleInterface \| string` | 20.4.0 |
| nzClass        | 自定义 CSS class                  | `NgClassInterface \| string` | 20.4.0 |

还提供了全局销毁方法：

- `NzMessageService.remove(id)`: 移除特定id的消息，当id为空时，移除所有消息（该消息id通过上述方法返回值中得到）

### 全局配置

可以通过 `NzConfigService` 进行全局配置，详情请见文档中 [全局配置项](/docs/global-config/zh) 章节。

| 参数           | 说明                                | 类型               | 默认值 |
| -------------- | ----------------------------------- | ------------------ | ------ |
| nzDuration     | 持续时间(毫秒)，当设置为 0 时不消失 | `number`           | `3000` |
| nzMaxStack     | 同一时间可展示的最大提示数量        | `number`           | `7`    |
| nzPauseOnHover | 鼠标移上时禁止自动移除              | `boolean`          | `true` |
| nzAnimate      | 开关动画效果                        | `boolean`          | `true` |
| nzTop          | 消息距离顶部的位置                  | `number \| string` | `24`   |
| nzDirection    | 消息文字方向                        | `'ltr' \| 'rtl'`   | -      |

### NzMessageRef

当你调用 `NzMessageService.success` 或其他方法时会返回该对象。

```ts
export interface NzMessageRef {
  messageId: string;
  onClose: Subject<false>; // 当 message 关闭时它会派发一个事件
}
```

---

## 代码示例

### 结束事件

可通过订阅 `onClose` 事件在 message 关闭时做出某些操作。以上用例将依次打开三个 message。

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

### 自定义样式

使用 `nzStyle` 和 `nzClass` 来定义样式。

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

### 修改延时

自定义时长 `10s`，默认时长为 `3s`。

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

### 普通提示

信息提醒反馈。

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

### 加载中

进行全局 loading，异步自行移除。

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

### 其他提示类型

包括成功、失败、警告。

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

### 自定义模板

您可以为消息内容创建自定义模板。
通过 `nzData` 选项，您可以传递一些可选的数据给此自定义模板。

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
