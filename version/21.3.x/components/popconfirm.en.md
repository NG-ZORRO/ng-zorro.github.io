---
category: Components
type: Feedback
title: Popconfirm
cover: 'https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg'
description: Pop up a bubble confirmation box for an action.
---

## When To Use

A simple and compact dialog is used for asking for user confirmation.

The difference with the `confirm` modal dialog is that it's more lightweight than the static-popped full-screen confirm modal.

## API

### [nz-popconfirm]

| Param                              | Description                                                         | Type                                                                                                                                                                              | Default value |
| ---------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `[nzPopconfirmArrowPointAtCenter]` | Arrow point at center of the origin                                 | `boolean`                                                                                                                                                                         | `false`       |
| `[nzPopconfirmTitle]`              | Title of the confirmation box                                       | `string \| TemplateRef<void>`                                                                                                                                                     | -             |
| `[nzPopconfirmTitleContext]`       | The context of confirmation box title                               | `object`                                                                                                                                                                          | -             |
| `[nzPopconfirmTrigger]`            | Popconfirm trigger mode. If set to `null` it would not be triggered | `'click' \| 'focus' \| 'hover' \| null`                                                                                                                                           | `'click'`     |
| `[nzPopconfirmPlacement]`          | The position of the popconfirm relative to the target               | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom' \| Array<string>` | `'top'`       |
| `[nzPopconfirmOrigin]`             | Origin of the popconfirm                                            | `ElementRef`                                                                                                                                                                      | -             |
| `[nzPopconfirmVisible]`            | Show or hide popconfirm                                             | `boolean`                                                                                                                                                                         | `false`       |
| `[nzPopconfirmShowArrow]`          | Whether popconfirm has arrow                                        | `boolean`                                                                                                                                                                         | `true`        |
| `(nzPopconfirmVisibleChange)`      | Callback of hide or show                                            | `EventEmitter<boolean>`                                                                                                                                                           | -             |
| `[nzPopconfirmMouseEnterDelay]`    | Delay in seconds, before popconfirm is shown on mouse enter         | `number`                                                                                                                                                                          | `0.15`        |
| `[nzPopconfirmMouseLeaveDelay]`    | Delay in seconds, before popconfirm is hidden on mouse leave        | `number`                                                                                                                                                                          | `0.1`         |
| `[nzPopconfirmOverlayClassName]`   | Class name of the popconfirm card                                   | `string`                                                                                                                                                                          | -             |
| `[nzPopconfirmOverlayStyle]`       | Style of the popconfirm card                                        | `object`                                                                                                                                                                          | -             |
| `[nzPopconfirmBackdrop]`           | whether or not the overlay should attach a backdrop                 | `boolean`                                                                                                                                                                         | `false`       |

| Param                   | Description                                                                                                                                                     | Type                                                                 | Default value | Global Config | Version |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------- | ------------- | ------- |
| `[nzCancelText]`        | Text of the Cancel button (Deprecated, please use nzCancelButtonProps instead)                                                                                  | `string`                                                             | `'Cancel'`    | -             |
| `[nzOkText]`            | Text of the Confirm button (Deprecated, please use nzOkButtonProps instead)                                                                                     | `string`                                                             | `'Confirm'`   | -             |
| `[nzOkType]`            | Button `type` of the Confirm button (Deprecated, please use nzOkButtonProps instead)                                                                            | `'primary' \| 'ghost' \| 'dashed' \| 'danger' \| 'default'`          | `'primary'`   | -             |
| `[nzOkDanger]`          | Danger status of the OK button. <i>Consistent with the `nzDanger` of the `nz-button`.</i> (Deprecated, please use nzOkButtonProps instead)                      | `boolean`                                                            | `false`       | -             |
| `[nzOkDisabled]`        | prevents a user from interacting with the OK button. <i>Consistent with the `disabled` of the `nz-button`.</i> (Deprecated, please use nzOkButtonProps instead) | `boolean`                                                            | `false`       | -             |
| `[nzOkButtonProps]`     | config object of the ok button                                                                                                                                  | `NzPopConfirmButtonProps`                                            | `null`        | -             | 20.0.0  |
| `[nzCancelButtonProps]` | config object of the cancel button                                                                                                                              | `NzPopConfirmButtonProps`                                            | `null`        | -             | 20.0.0  |
| `[nzCondition]`         | Whether to directly emit `onConfirm` without showing Popconfirm                                                                                                 | `boolean`                                                            | `false`       | -             |
| `[nzIcon]`              | Customize icon of confirmation. Set to `null` to hide the icon                                                                                                  | `string \| TemplateRef<void> \| null`                                | -             | -             |
| `[nzAutoFocus]`         | Autofocus a button                                                                                                                                              | `null \| 'ok' \| 'cancel'`                                           | `null`        | ✅            |
| `[nzBeforeConfirm]`     | The hook before the confirmation operation, decides whether to continue responding to the `nzOnConfirm` callback, supports asynchronous verification.           | `(() => Observable<boolean> \| Promise<boolean> \| boolean) \| null` | `null`        | -             |
| `(nzOnCancel)`          | Callback of cancel                                                                                                                                              | `EventEmitter<void>`                                                 | -             | -             |
| `(nzOnConfirm)`         | Callback of confirmation                                                                                                                                        | `EventEmitter<void>`                                                 | -             | -             |

Consult [Tooltip's documentation](/components/tooltip/en#api) to find more APIs.

## Note

Please ensure that the node of `[nz-popconfirm]` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Asynchronously close

Asynchronously close a popconfirm when a the OK button is pressed. For example, you can use this pattern when you submit a form.

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

### Basic

The basic example.

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

### Customize icon

Set `nzIcon` to customize the icon.

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

### Conditional trigger

Make it pop up under some conditions.

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

### Hide arrow

Set `[nzPopconfirmShowArrow]="false"` to hide arrow.

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

### Locale text

Set `okText` and `cancelText` props to customise the button's labels.

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

### Placement

There are 12 placement options available.

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

### Asynchronously close on Promise

Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you submit a form.

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
