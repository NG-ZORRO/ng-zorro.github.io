---
category: Components
subtitle: 气泡确认框
type: 反馈
title: Popconfirm
cover: 'https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg'
description: 点击元素，弹出气泡式的确认框。
---

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。

## API

### [nz-popconfirm]

| 参数                               | 说明                                     | 类型                                                                                                                                                                              | 默认值    |
| ---------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `[nzPopconfirmArrowPointAtCenter]` | 箭头指向锚点的中心                       | `boolean`                                                                                                                                                                         | `false`   |
| `[nzPopconfirmTitle]`              | 确认框的描述                             | `string \| TemplateRef<void>`                                                                                                                                                     | -         |
| `[nzPopconfirmTitleContext]`       | 确认框描述的上下文                       | `object`                                                                                                                                                                          | -         |
| `[nzPopconfirmTrigger]`            | 触发行为，为 `null` 时不响应光标事件     | `'click' \| 'focus' \| 'hover' \| null`                                                                                                                                           | `'click'` |
| `[nzPopconfirmPlacement]`          | 气泡框位置                               | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom' \| Array<string>` | `'top'`   |
| `[nzPopconfirmOrigin]`             | 气泡框定位元素                           | `ElementRef`                                                                                                                                                                      | -         |
| `[nzPopconfirmVisible]`            | 显示隐藏气泡框                           | `boolean`                                                                                                                                                                         | `false`   |
| `[nzPopconfirmShowArrow]`          | 气泡框是否包含箭头                       | `boolean`                                                                                                                                                                         | `true`    |
| `[nzPopconfirmPlacement]`          | 确认框位置                               | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'`                  | `'top'`   |
| `[nzPopconfirmOrigin]`             | 确认框定位元素                           | `ElementRef`                                                                                                                                                                      | -         |
| `[nzPopconfirmVisible]`            | 显示隐藏确认框                           | `boolean`                                                                                                                                                                         | `false`   |
| `(nzPopconfirmVisibleChange)`      | 显示隐藏的事件                           | `EventEmitter<boolean>`                                                                                                                                                           | -         |
| `[nzPopconfirmMouseEnterDelay]`    | 鼠标移入后延时多少才显示确认框，单位：秒 | `number`                                                                                                                                                                          | `0.15`    |
| `[nzPopconfirmMouseLeaveDelay]`    | 鼠标移出后延时多少才隐藏确认框，单位：秒 | `number`                                                                                                                                                                          | `0.1`     |
| `[nzPopconfirmOverlayClassName]`   | 卡片类名                                 | `string`                                                                                                                                                                          | -         |
| `[nzPopconfirmOverlayStyle]`       | 卡片样式                                 | `object`                                                                                                                                                                          | -         |
| `[nzPopconfirmBackdrop]`           | 浮层是否应带有背景板                     | `boolean`                                                                                                                                                                         | `false`   |

| 参数                    | 说明                                                                                                         | 类型                                                                 | 默认值      | 全局配置 | 版本   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------- | -------- | ------ |
| `[nzCancelText]`        | 取消按钮文字 （已弃用，请使用 nzCancelButtonProps 代替)                                                      | `string`                                                             | `'取消'`    | -        |
| `[nzOkText]`            | 确认按钮文字 （已弃用，请使用 nzOkButtonProps 代替)                                                          | `string`                                                             | `'确定'`    | -        |
| `[nzOkType]`            | 确认按钮类型 （已弃用，请使用 nzOkButtonProps 代替)                                                          | `'primary' \| 'ghost' \| 'dashed' \| 'default'`                      | `'primary'` | -        |
| `[nzOkDanger]`          | 确认按钮是否为危险按钮。<i>与 `nz-button` 的 `nzDanger` 值保持一致</i>（已弃用，请使用 nzOkButtonProps 代替) | `boolean`                                                            | `false`     | -        |
| `[nzOkDisabled]`        | 禁止与确认按钮交互。<i>与 `nz-button` 的 `disabled` 值保持一致</i>（已弃用，请使用 nzOkButtonProps 代替)     | `boolean`                                                            | `false`     | -        |
| `[nzOkButtonProps]`     | 确定按钮的配置对象                                                                                           | `NzPopConfirmButtonProps`                                            | `null`      | -        | 20.0.0 |
| `[nzCancelButtonProps]` | 取消按钮的配置对象                                                                                           | `NzPopConfirmButtonProps`                                            | `null`      | -        | 20.0.0 |
| `[nzCondition]`         | 是否直接触发 `nzOnConfirm` 而不弹出框                                                                        | `boolean`                                                            | `false`     | -        |
| `[nzIcon]`              | 自定义弹出框的 icon，设置为 `null` 时隐藏图标                                                                | `string \| TemplateRef<void> \| null`                                | -           | -        |
| `[nzAutoFocus]`         | 按钮的自动聚焦                                                                                               | `null \| 'ok' \| 'cancel'`                                           | `null`      | ✅       |
| `[nzBeforeConfirm]`     | 确认操作之前的钩子，决定是否继续响应 `nzOnConfirm` 回调，支持异步验证。                                      | `(() => Observable<boolean> \| Promise<boolean> \| boolean) \| null` | `null`      | -        |
| `(nzOnCancel)`          | 点击取消的回调                                                                                               | `EventEmitter<void>`                                                 | -           | -        |
| `(nzOnConfirm)`         | 点击确认的回调                                                                                               | `EventEmitter<void>`                                                 | -           | -        |

更多属性请参考 [Tooltip](/components/tooltip/zh#api)。

## 注意

请确保 `[nz-popconfirm]` 元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 异步关闭

点击确定后异步关闭 Popconfirm，例如提交表单。

```typescript
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'nz-demo-popconfirm-async',
  imports: [NzButtonModule, NzPopconfirmModule],
  template: `
    <button
      nz-button
      nzType="primary"
      nz-popconfirm
      nzPopconfirmTitle="Title"
      [nzBeforeConfirm]="beforeConfirm"
      (nzOnConfirm)="confirm()"
      (nzOnCancel)="cancel()"
    >
      Open Popconfirm with async logic
    </button>
  `
})
export class NzDemoPopconfirmAsyncComponent {
  constructor(private nzMessageService: NzMessageService) {}

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }

  beforeConfirm(): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(true);
        observer.complete();
      }, 3000);
    });
  }
}
```

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'nz-demo-popconfirm-basic',
  imports: [NzPopconfirmModule],
  template: `
    <a
      nz-popconfirm
      nzPopconfirmTitle="Are you sure delete this task?"
      (nzOnConfirm)="confirm()"
      (nzOnCancel)="cancel()"
    >
      Delete
    </a>
  `
})
export class NzDemoPopconfirmBasicComponent {
  constructor(private nzMessageService: NzMessageService) {}

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }
}
```

### 自定义 icon 图标

使用 `nzIcon` 自定义提示图标。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'nz-demo-popconfirm-custom-icon',
  imports: [NzIconModule, NzPopconfirmModule],
  template: `
    <a nz-popconfirm nzPopconfirmTitle="Are you sure?" [nzIcon]="iconTpl">Delete</a>
    <ng-template #iconTpl>
      <nz-icon nzType="question-circle-o" style="color: red;" />
    </ng-template>
  `
})
export class NzDemoPopconfirmCustomIconComponent {}
```

### 条件触发

可以判断是否需要弹出。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-popconfirm-dynamic-trigger',
  imports: [FormsModule, NzPopconfirmModule, NzSwitchModule],
  template: `
    <a
      nz-popconfirm
      nzPopconfirmTitle="Are you sure delete this task?"
      [nzCondition]="switchValue"
      (nzOnConfirm)="confirm()"
      (nzOnCancel)="cancel()"
    >
      Delete a task
    </a>
    <br />
    <br />
    Whether directly execute:
    <nz-switch [(ngModel)]="switchValue" />
  `
})
export class NzDemoPopconfirmDynamicTriggerComponent {
  switchValue = false;

  constructor(private nzMessageService: NzMessageService) {}

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }
}
```

### 隐藏箭头

设置 `[nzPopconfirmShowArrow]="false"` 隐藏箭头。

```typescript
import { Component } from '@angular/core';

import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'nz-demo-popconfirm-hide-arrow',
  imports: [NzPopconfirmModule],
  template: `<a nz-popconfirm nzPopconfirmTitle="Are you sure?" [nzPopconfirmShowArrow]="false">Delete</a>`
})
export class NzDemoPopconfirmHideArrowComponent {}
```

### 国际化

使用 `okText` 和 `cancelText` 自定义按钮文字。

```typescript
import { Component } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'nz-demo-popconfirm-locale',
  imports: [NzPopconfirmModule],
  template: `
    <a
      nz-popconfirm
      nzPopconfirmTitle="Are you sure?"
      nzOkText="ok"
      nzCancelText="cancel"
      (nzOnConfirm)="confirm()"
      (nzOnCancel)="cancel()"
    >
      delete
    </a>
  `
})
export class NzDemoPopconfirmLocaleComponent {
  constructor(private nzMessageService: NzMessageService) {}

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }
}
```

### 位置

位置有十二个方向。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'nz-demo-popconfirm-placement',
  imports: [NzButtonModule, NzPopconfirmModule],
  template: `
    <div style="margin-left: 60px">
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="topLeft"
        nz-button
      >
        TL
      </button>
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="top"
        nz-button
      >
        Top
      </button>
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="topRight"
        nz-button
      >
        TR
      </button>
    </div>
    <div style="width: 60px; float: left;">
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="leftTop"
        nz-button
      >
        LT
      </button>
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="left"
        nz-button
      >
        Left
      </button>
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="leftBottom"
        nz-button
      >
        LB
      </button>
    </div>
    <div style="width: 60px; margin-left: 252px;">
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="rightTop"
        nz-button
      >
        RT
      </button>
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="right"
        nz-button
      >
        Right
      </button>
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="rightBottom"
        nz-button
      >
        RB
      </button>
    </div>
    <div style="margin-left: 60px; clear: both;">
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="bottomLeft"
        nz-button
      >
        BL
      </button>
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="bottom"
        nz-button
      >
        Bottom
      </button>
      <button
        nz-popconfirm
        nzPopconfirmTitle="Are you sure delete this task?"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()"
        nzPopconfirmPlacement="bottomRight"
        nz-button
      >
        BR
      </button>
    </div>
  `,
  styles: `
    button {
      margin-right: 8px;
      margin-bottom: 8px;
      width: 70px;
      text-align: center;
      padding: 0;
    }
  `
})
export class NzDemoPopconfirmPlacementComponent {
  constructor(private nzMessageService: NzMessageService) {}

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }
}
```

### 基于 Promise 的异步关闭

点击确定后异步关闭 Popconfirm，例如提交表单。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'nz-demo-popconfirm-promise',
  imports: [NzButtonModule, NzPopconfirmModule],
  template: `
    <button
      nz-button
      nzType="primary"
      nz-popconfirm
      nzPopconfirmTitle="Title"
      [nzBeforeConfirm]="beforeConfirm"
      (nzOnConfirm)="confirm()"
      (nzOnCancel)="cancel()"
    >
      Open Popconfirm with Promise
    </button>
  `
})
export class NzDemoPopconfirmPromiseComponent {
  constructor(private nzMessageService: NzMessageService) {}

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }

  beforeConfirm(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
}
```
