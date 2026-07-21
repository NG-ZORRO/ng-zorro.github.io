---
type: Feedback
category: Components
title: Modal
cover: 'https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg'
description: Display a modal dialog box, providing a title, content area, and action buttons.
---

## When To Use

When requiring users to interact with the application without jumping to a new page to interrupt the user's workflow,
you can use `Modal` to create a new overlay layer over the current page for user-getting feedback or information
purposes. Additionally, if you need to show a simple confirmation dialog, you can use `NzModalService.confirm()` and so
on.

It is recommended to use the `Component` way to pop up the Modal so that the component logic of the popup layer can be
completely isolated from the outer component and reused at any time. In the popup layer component, you can obtain
Modal's component instance by injecting `NzModalRef` to control the behavior of the modal box.

## API

### NzModalService

The dialog is currently divided into 2 modes, `normal mode` and `confirm box mode` (for instance, the `Confirm` dialog,
which is called by `confirm/info/success/error/warning`). The degree of API support for the two modes is slightly
different.

| Property              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                             | Default               | Global Config |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | --------------------- | ------------- |
| `nzAfterOpen`         | Specify a EventEmitter that will be emitted when modal opened                                                                                                                                                                                                                                                                                                                                                                                                                              | `EventEmitter`                                                                                   | -                     |
| `nzAfterClose`        | Specify a EventEmitter that will be emitted when modal is closed completely (Can listen for parameters passed in the close/destroy method)                                                                                                                                                                                                                                                                                                                                                 | `EventEmitter`                                                                                   | -                     |
| `nzBodyStyle`         | Body style for modal body element. Such as height, padding etc.                                                                                                                                                                                                                                                                                                                                                                                                                            | `object`                                                                                         | -                     |
| `nzCancelText`        | Text of the Cancel button. <i>Set to null to show no cancel button (this value is invalid if the nzFooter parameter is used in normal mode)</i>                                                                                                                                                                                                                                                                                                                                            | `string`                                                                                         | `'Cancel'`            |
| `nzCentered`          | Centered Modal                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `boolean`                                                                                        | `false`               |
| `nzClosable`          | Whether a close (x) button is visible on top right of the modal dialog or not. <i>Invalid value in confirm box mode (default will be hidden)</i>                                                                                                                                                                                                                                                                                                                                           | `boolean`                                                                                        | `true`                |
| `nzOkLoading`         | Whether to apply loading visual effect for OK button or not                                                                                                                                                                                                                                                                                                                                                                                                                                | `boolean`                                                                                        | `false`               |
| `nzCancelLoading`     | Whether to apply loading visual effect for Cancel button or not                                                                                                                                                                                                                                                                                                                                                                                                                            | `boolean`                                                                                        | `false`               |
| `nzOkDisabled`        | Whether to disable Ok button or not                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `boolean`                                                                                        | `false`               |
| `nzCancelDisabled`    | Whether to disable Cancel button or not                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `boolean`                                                                                        | `false`               |
| `nzDraggable`         | Whether modal is draggable or not                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `boolean`                                                                                        | `false`               |
| `nzFooter`            | Footer content, set as footer=null when you don't need default buttons. <br><i>1. Only valid in normal mode.<br>2. You can customize the buttons to the maximum extent by passing a `ModalButtonOptions` configuration (see the case or the instructions below).</i>                                                                                                                                                                                                                       | `string \| TemplateRef<{}> \| ModalButtonOptions[] \| null`                                      | OK and Cancel buttons |
| `nzKeyboard`          | Whether support press esc to close                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `boolean`                                                                                        | `true`                |
| `nzMask`              | Whether show mask or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `boolean`                                                                                        | `true`                | ✅            |
| `nzMaskClosable`      | Whether to close the modal dialog when the mask (area outside the modal) is clicked                                                                                                                                                                                                                                                                                                                                                                                                        | `boolean`                                                                                        | `true`                | ✅            |
| `nzCloseOnNavigation` | Whether to close the modal when the user goes backwards/forwards in history. Note that this usually doesn't include clicking on links (unless the user is using the HashLocationStrategy).                                                                                                                                                                                                                                                                                                 | `boolean`                                                                                        | `true`                | ✅            |
| `nzDirection`         | Direction of the text in the modal                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `'ltr' \| 'rtl'`                                                                                 | -                     | ✅            |
| `nzMaskStyle`         | Style for modal's mask element.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `object`                                                                                         | -                     |
| `nzOkText`            | Text of the OK button. <i>Set to null to show no ok button (this value is invalid if the nzFooter parameter is used in normal mode)</i>                                                                                                                                                                                                                                                                                                                                                    | `string`                                                                                         | `'OK'`                |
| `nzOkType`            | Button type of the OK button. <i>Consistent with the `nzType` of the `nz-button`.</i>                                                                                                                                                                                                                                                                                                                                                                                                      | `'primary' \|'dashed' \|'link' \|'text'`                                                         | `primary`             |
| `nzOkDanger`          | Danger status of the OK button. <i>Consistent with the `nzDanger` of the `nz-button`.</i>                                                                                                                                                                                                                                                                                                                                                                                                  | `boolean`                                                                                        | `false`               |
| `nzStyle`             | Style of overlay layer, typically used at least for adjusting the position.                                                                                                                                                                                                                                                                                                                                                                                                                | `object`                                                                                         | -                     |
| `nzCloseIcon`         | Custom close icon                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `string \| TemplateRef<void>`                                                                    | -                     |
| `nzTitle`             | The modal dialog's title. <i>Leave blank to show no title. The usage of TemplateRef can refer to the case</i>                                                                                                                                                                                                                                                                                                                                                                              | `string \| TemplateRef<{}>`                                                                      | -                     |
| `nzVisible`           | Whether the modal dialog is visible or not. <i>When using the `<nz-modal>` tag, be sure to use two-way binding, for example: `[(nzVisible)]="visible"`.</i>                                                                                                                                                                                                                                                                                                                                | `boolean`                                                                                        | `false`               |
| `nzWidth`             | Width of the modal dialog. <i>When using numbers, the default unit is `px`</i>                                                                                                                                                                                                                                                                                                                                                                                                             | `string \| number`                                                                               | `520`                 |
| `nzClassName`         | The class name of the modal dialog                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `string`                                                                                         | -                     |
| `nzWrapClassName`     | The class name of the container of the modal dialog                                                                                                                                                                                                                                                                                                                                                                                                                                        | `string`                                                                                         | -                     |
| `nzZIndex`            | The z-index of the Modal                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `number`                                                                                         | `1000`                |
| `nzOnCancel`          | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button (If nzContent is Component, the Component instance will be put in as an argument). <i>Note: When created with `NzModalService.create`, this parameter should be passed into the type of function (callback function). This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return `false` to prevent closing)</i> | `EventEmitter`                                                                                   | -                     |
| `nzOnOk`              | Specify a EventEmitter that will be emitted when a user clicks the OK button (If nzContent is Component, the Component instance will be put in as an argument). <i>Note: When created with `NzModalService.create`, this parameter should be passed into the type of function (callback function). This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return `false` to prevent closing)</i>                               | `EventEmitter`                                                                                   | -                     |
| `nzContent`           | Content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `string \| TemplateRef<{}> \| Component \| ng-content`                                           | -                     |
| `nzData`              | Will be a template variable when `nzContent` is `TemplateRef`                                                                                                                                                                                                                                                                                                                                                                                                                              | `object`, will be the value of the injection token NZ_MODAL_DATA when `nzContent` is a component | -                     |
| `nzIconType`          | Icon type of the Icon component. <i>Only valid in confirm box mode</i>                                                                                                                                                                                                                                                                                                                                                                                                                     | `string`                                                                                         | `'question-circle'`   |
| `nzAutofocus`         | autofocus and the position，disabled when is `null`                                                                                                                                                                                                                                                                                                                                                                                                                                        | `'ok' \| 'cancel' \| 'auto' \| null`                                                             | `'auto'`              |

#### NZ_MODAL_DATA

> NZ_MODAL_DATA injection token is used to retrieve `nzData` in the custom component.
> The dialog created by the service method `NzModalService.create()` inject a `NZ_MODAL_DATA` token (if `nzContent` is
> used as Component) to retrieve the parameters that have used to the '`nzContent` component'

#### Using service to create Normal Mode modal

> You can call `NzModalService.create(options)` to dynamically create **normal mode** modals, where `options` is an
> object that supports the support given in the API above **normal mode** parameters

### Confirm box mode - NzModalService.method()

There are five ways to display the information based on the content's nature:

- `NzModalService.info`
- `NzModalService.success`
- `NzModalService.error`
- `NzModalService.warning`
- `NzModalService.confirm`

The above items are all functions, expecting a settings object as a parameter.
Consistent with the above API, some property types or initial values are different as follows:

| Property         | Description                                                                                                                                                                                                                                                                                                                                                 | Type               | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| `nzOnOk`         | Specify a EventEmitter that will be emitted when a user clicks the OK button (If nzContent is Component, the Component instance will be put in as an argument.). <i>This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return `false` to prevent closing)</i>                               | `function`         | -       |
| `nzOnCancel`     | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button (If nzContent is Component, the Component instance will be put in as an argument.). <i>This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return `false` to prevent closing)</i> | `function`         | -       |
| `nzWidth`        | Width of the modal dialog                                                                                                                                                                                                                                                                                                                                   | `string \| number` | `416`   |
| `nzMaskClosable` | Whether to close the modal dialog when the mask (area outside the modal) is clicked                                                                                                                                                                                                                                                                         | `boolean`          | `false` |

All the `NzModalService.method`s will return a reference, and then we can close the popup by the reference.

```ts
constructor(modal: NzModalService) {
  const ref: NzModalRef = modal.info();
  ref.close(); // Or ref.destroy(); This dialog will be destroyed directly
}
```

### Related type definition

#### Other Methods/Attributes for NzModalService

| Methods/Attributes | Description                                        | Type               |
| ------------------ | -------------------------------------------------- | ------------------ |
| `openModals`       | All currently open Modal list                      | `NzModalRef[]`     |
| `afterAllClose`    | Callback called after all Modals closed completely | `Observable<void>` |
| `closeAll()`       | Close all modals                                   | `function`         |

#### NzModalRef

> `NzModalRef` object is used to control dialogs and communicate with their content

The dialog created by the service method `NzModalService.xxx()` will return a `NzModalRef` object that is used to
manipulate the dialog (this object can also be obtained by dependency injection `NzModalRef` if `nzContent` is used as
Component), This object has the following methods:

| Method                                     | Description                                                                                                                                                                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterOpen`                                | Same as nzAfterOpen but of type Observable&lt;void&gt;                                                                                                                                          |
| `afterClose`                               | Same as nzAfterClose, but of type Observable&lt;result:any&gt;                                                                                                                                  |
| `close()`                                  | Close (hide) the dialog. <i>Note: When used for a dialog created as a service, this method will destroy the dialog directly (as with the destroy method)</i>                                    |
| `destroy()`                                | Destroy the dialog. <i>Note: Used only for dialogs created by the service (non-service created dialogs, this method only hides the dialog)</i>                                                  |
| `getContentComponent()`                    | Gets the Component instance in the contents of the dialog for `nzContent`. <i> Note: When the dialog is not initialized (`ngOnInit` is not executed), this function will return `undefined`</i> |
| `getContentComponentRef()`                 | Gets the Component ref in the contents of the dialog for `nzContent`. <i> Note: When the dialog is not initialized (`ngOnInit` is not executed), this function will return `null`</i>           |
| `triggerOk()`                              | Manually trigger nzOnOk                                                                                                                                                                         |
| `triggerCancel()`                          | Manually trigger nzOnCancel                                                                                                                                                                     |
| `updateConfig(config: ModalOptions): void` | Update the config                                                                                                                                                                               |

### ModalButtonOptions (used to customize the bottom button)

An array of `ModalButtonOptions` type can be passed to `nzFooter` for custom bottom buttons.

The button configuration items are as follows (along with the button component):

```ts
nzFooter: [{
  label: string; // Button text
  type? : string; // Types
  danger? : boolean; // Whether danger
  shape? : string; // Shape
  ghost? : boolean; // Whether ghost
  size? : string; // Size
  autoLoading? : boolean; // The default is true. If true, this button will automatically be set to the loading state when onClick returns a promise.

  // Tip: The `this` of below methods points to the configuration object itself. When nzContent is a component class, the contentComponentInstance parameter passed in by the method below is an instance of the component class
  // Whether to show this button
  show? : boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // Whether to display loading
  loading? : boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // Is it disabled
  disabled? : boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // Callback of clicking
  onClick? (this: ModalButtonOptions, contentComponentInstance?: object): void | Promise<void> | any;
}]
```

The above configuration items can also be changed in real-time to trigger the button behavior change.

### [nzModalTitle]

Customize the title.

```html
<div *nzModalTitle> Custom Modal Title</div>

<!-- or -->

<ng-template [nzModalTitle]> Custom Modal Title</ng-template>
```

### [nzModalContent]

Customize the content.

```html
<div *nzModalContent> Custom Modal Content</div>

<!-- or -->

<ng-template [nzModalContent]> Custom Modal Content</ng-template>
```

### [nzModalFooter]

Customize the footer.

```html
<div *nzModalFooter>
  <button nz-button nzType="default" (click)="handleCancel()">Custom Callback</button>
  <button nz-button nzType="primary" (click)="handleOk()" [nzLoading]="isConfirmLoading">Custom Submit</button>
</div>

<!-- or -->

<ng-template [nzModalFooter]>
  <button nz-button nzType="default" (click)="handleCancel()">Custom Callback</button>
  <button nz-button nzType="primary" (click)="handleOk()" [nzLoading]="isConfirmLoading">Custom Submit</button>
</ng-template>
```

---

## Examples

### Asynchronously close

Asynchronously close a modal dialog when a user clicked OK button, for example,
you can use this pattern when you submit a form.

```typescript
import { Component, model, signal } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-async',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button nzType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <nz-modal
      [(nzVisible)]="visible"
      nzTitle="Modal Title"
      (nzOnCancel)="handleCancel()"
      (nzOnOk)="handleOk()"
      [nzOkLoading]="loading()"
    >
      <p *nzModalContent>Modal Content</p>
    </nz-modal>
  `
})
export class NzDemoModalAsyncComponent {
  visible = model(false);
  loading = signal(false);

  showModal(): void {
    this.visible.set(true);
  }

  handleOk(): void {
    this.loading.set(true);
    setTimeout(() => {
      this.visible.set(false);
      this.loading.set(false);
    }, 3000);
  }

  handleCancel(): void {
    this.visible.set(false);
  }
}
```

### Basic

Basic modal.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-basic',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button nzType="primary" (click)="showModal()"><span>Show Modal</span></button>
    <nz-modal [(nzVisible)]="isVisible" nzTitle="The first Modal" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
      <ng-container *nzModalContent>
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
      </ng-container>
    </nz-modal>
  `
})
export class NzDemoModalBasicComponent {
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
```

### Confirmation modal dialog

To use `NzModalService.confirm()` to popup confirmation modal dialog. Let NzOnCancel/NzOnOk function return a promise object to
delay closing the dialog.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-confirm-promise',
  imports: [NzButtonModule, NzModalModule],
  template: `<button nz-button nzType="primary" (click)="showConfirm()">Confirm</button>`
})
export class NzDemoModalConfirmPromiseComponent {
  confirmModal?: NzModalRef; // For testing by now

  constructor(private modal: NzModalService) {}

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }
}
```

### Confirmation modal dialog

To use `NzModalService.confirm()` to popup a confirmation modal dialog.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-confirm',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button nzType="primary" (click)="showConfirm()">Confirm</button>
    <button nz-button nzType="dashed" (click)="showDeleteConfirm()">Delete</button>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoModalConfirmComponent {
  constructor(private modal: NzModalService) {}

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => console.log('OK')
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
```

### Draggable

Draggable modal.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-draggable',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button nzType="default" (click)="showModal()">
      <span>Open Draggable Modal</span>
    </button>

    <nz-modal
      nzDraggable
      nzCentered
      [(nzVisible)]="isVisible"
      nzTitle="Draggable Modal"
      (nzOnCancel)="handleCancel()"
      (nzOnOk)="handleOk()"
    >
      <ng-container *nzModalContent>
        <p>Just don't learn physics at school and your life will be full of magic and miracles.</p>
        <p>Day before yesterday I saw a rabbit, and yesterday a deer, and today, you.</p>
      </ng-container>
    </nz-modal>
  `
})
export class NzDemoModalDraggableComponent {
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
```

### Customized Parts

A more complex example which define a customized footer button bar,
the dialog will change to loading state after clicking submit button, when the loading is over,
the modal dialog will be closed.

You could set `nzFooter` to `null` if you don't need default footer buttons.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-footer',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button nzType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <nz-modal
      [(nzVisible)]="isVisible"
      [nzTitle]="modalTitle"
      [nzContent]="modalContent"
      [nzFooter]="modalFooter"
      (nzOnCancel)="handleCancel()"
    >
      <ng-template #modalTitle>Custom Modal Title</ng-template>

      <ng-template #modalContent>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
      </ng-template>

      <ng-template #modalFooter>
        <span>Modal Footer:</span>
        <button nz-button nzType="default" (click)="handleCancel()">Custom Callback</button>
        <button nz-button nzType="primary" (click)="handleOk()" [nzLoading]="isConfirmLoading">Custom Submit</button>
      </ng-template>
    </nz-modal>
  `
})
export class NzDemoModalFooterComponent {
  isVisible = false;
  isConfirmLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
```

### Customized Footer

use `nzModalFooter` directive to customized footer button bar.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-footer2',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button nzType="primary" (click)="showModal1()">
      <span>In Template</span>
    </button>
    <br />
    <br />
    <button nz-button nzType="primary" (click)="showModal2()">
      <span>In Component</span>
    </button>
    <nz-modal [(nzVisible)]="isVisible" nzTitle="Custom Modal Title" (nzOnCancel)="handleCancel()">
      <div *nzModalContent>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
      </div>
      <div *nzModalFooter>
        <span>Modal Footer:</span>
        <button nz-button nzType="default" (click)="handleCancel()">Custom Callback</button>
        <button nz-button nzType="primary" (click)="handleOk()" [nzLoading]="isConfirmLoading">Custom Submit</button>
      </div>
    </nz-modal>
  `,
  styles: []
})
export class NzDemoModalFooter2Component {
  isVisible = false;
  isConfirmLoading = false;

  constructor(private modalService: NzModalService) {}

  showModal1(): void {
    this.isVisible = true;
  }

  showModal2(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: NzModalCustomFooterComponent
    });
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}

@Component({
  selector: 'nz-modal-custom-footer-component',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <div>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
    </div>
    <div *nzModalFooter>
      <button nz-button nzType="default" (click)="destroyModal()">Custom Callback</button>
      <button nz-button nzType="primary" (click)="destroyModal()">Custom Submit</button>
    </div>
  `
})
export class NzModalCustomFooterComponent {
  constructor(private modal: NzModalRef) {}

  destroyModal(): void {
    this.modal.destroy();
  }
}
```

### Information modal dialog

In the various types of information modal dialog, only one button to close dialog is provided.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-info',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button (click)="info()">Info</button>
    <button nz-button (click)="success()">Success</button>
    <button nz-button (click)="error()">Error</button>
    <button nz-button (click)="warning()">Warning</button>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoModalInfoComponent {
  constructor(private modal: NzModalService) {}

  info(): void {
    this.modal.info({
      nzTitle: 'This is a notification message',
      nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }

  success(): void {
    this.modal.success({
      nzTitle: 'This is a success message',
      nzContent: 'some messages...some messages...'
    });
  }

  error(): void {
    this.modal.error({
      nzTitle: 'This is an error message',
      nzContent: 'some messages...some messages...'
    });
  }

  warning(): void {
    this.modal.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'some messages...some messages...'
    });
  }
}
```

### Internationalization

To customize the text of the buttons, you need to set `nzOkText` and `nzCancelText` props.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-locale',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <div>
      <button nz-button nzType="primary" (click)="showModal()">Modal</button>
      <nz-modal
        [(nzVisible)]="isVisible"
        nzTitle="Modal"
        nzOkText="Ok"
        nzCancelText="Cancel"
        (nzOnOk)="handleOk()"
        (nzOnCancel)="handleCancel()"
      >
        <ng-container *nzModalContent>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </ng-container>
      </nz-modal>
    </div>
    <br />
    <button nz-button nzType="primary" (click)="showConfirm()">Confirm</button>
  `
})
export class NzDemoModalLocaleComponent {
  isVisible = false;

  constructor(private modalService: NzModalService) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Bla bla ...',
      nzOkText: 'OK',
      nzCancelText: 'Cancel'
    });
  }
}
```

### Manual to destroy

Manually destroying a modal.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-manual',
  imports: [NzButtonModule, NzModalModule],
  template: `<button nz-button (click)="success()">Success</button>`
})
export class NzDemoModalManualComponent {
  constructor(private modalService: NzModalService) {}

  success(): void {
    const modal = this.modalService.success({
      nzTitle: 'This is a notification message',
      nzContent: 'This modal will be destroyed after 1 second'
    });

    setTimeout(() => modal.destroy(), 1000);
  }
}
```

### To customize the position of modal

You can use `nzCentered`,`style.top` or other styles to set position of modal dialog.

> **NOTE** Due to Angular's style isolation, you may need to override the NgZorro style with `:: ng-deep` within a custom style if `encapsulation: ViewEncapsulation.None` is not included in the Component

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'nz-demo-modal-position',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button nzType="primary" (click)="showModalTop()">Display a modal dialog at 20px to Top</button>
    <nz-modal
      [nzStyle]="{ top: '20px' }"
      [(nzVisible)]="isVisibleTop"
      nzTitle="20px to Top"
      (nzOnCancel)="handleCancelTop()"
      (nzOnOk)="handleOkTop()"
    >
      <ng-container *nzModalContent>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </ng-container>
    </nz-modal>

    <br />
    <br />

    <button nz-button nzType="primary" (click)="showModalMiddle()">Vertically centered modal dialog</button>
    <nz-modal
      [(nzVisible)]="isVisibleMiddle"
      nzTitle="Vertically centered modal dialog"
      nzCentered
      (nzOnCancel)="handleCancelMiddle()"
      (nzOnOk)="handleOkMiddle()"
    >
      <ng-container *nzModalContent>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </ng-container>
    </nz-modal>
  `
})
export class NzDemoModalPositionComponent {
  isVisibleTop = false;
  isVisibleMiddle = false;

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    console.log('点击了确定');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
```

### Modal's service

Usage of Modal's service, examples demonstrate user-defined templates, custom components, and methods for injecting modal instances.

The template context is ` { $implicit: nzData, modalRef: NzModalRef }` when the content or footer is templates.

```typescript
import { Component, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalRef, NzModalService, NZ_MODAL_DATA, NzModalModule } from 'ng-zorro-antd/modal';

interface IModalData {
  favoriteLibrary: string;
  favoriteFramework: string;
}

@Component({
  selector: 'nz-demo-modal-service',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <button nz-button nzType="primary" (click)="createModal()">
      <span>String</span>
    </button>

    <button nz-button nzType="primary" (click)="createTplModal(tplTitle, tplContent, tplFooter)">
      <span>Template</span>
    </button>
    <ng-template #tplTitle>
      <span>Title Template</span>
    </ng-template>
    <ng-template #tplContent let-params>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>{{ params?.value }}</p>
    </ng-template>
    <ng-template #tplFooter let-ref="modalRef">
      <button nz-button (click)="ref.destroy()">Destroy</button>
      <button nz-button nzType="primary" (click)="destroyTplModal(ref)" [nzLoading]="tplModalButtonLoading">
        Close after submit
      </button>
    </ng-template>

    <br />
    <br />

    <button nz-button nzType="primary" (click)="createComponentModal()">
      <span>Use Component</span>
    </button>

    <button nz-button nzType="primary" (click)="createCustomButtonModal()">Custom Button</button>

    <br />
    <br />

    <button nz-button nzType="primary" (click)="openAndCloseAll()">Open more modals then close all after 2s</button>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoModalServiceComponent {
  tplModalButtonLoading = false;
  disabled = false;

  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  createModal(): void {
    this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: 'string, will close after 1 sec',
      nzClosable: false,
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
    });
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      modelRef.destroy();
    }, 1000);
  }

  createComponentModal(): void {
    const modal = this.modal.create<NzModalCustomComponent, IModalData>({
      nzTitle: 'Modal Title',
      nzContent: NzModalCustomComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzData: {
        favoriteLibrary: 'angular',
        favoriteFramework: 'angular'
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  createCustomButtonModal(): void {
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'custom button demo',
      nzContent: 'pass array of button config to nzFooter to create multiple buttons',
      nzFooter: [
        {
          label: 'Close',
          shape: 'round',
          onClick: () => modal.destroy()
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: () => this.modal.confirm({ nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content' })
        },
        {
          label: 'Change Button Status',
          type: 'primary',
          danger: true,
          loading: false,
          onClick(): void {
            this.loading = true;
            setTimeout(() => (this.loading = false), 1000);
            setTimeout(() => {
              this.loading = false;
              this.disabled = true;
              this.label = 'can not be clicked！';
            }, 2000);
          }
        },
        {
          label: 'async load',
          type: 'dashed',
          onClick: () => new Promise(resolve => setTimeout(resolve, 2000))
        }
      ]
    });
  }

  openAndCloseAll(): void {
    let pos = 0;

    ['create', 'info', 'success', 'error'].forEach(method =>
      // @ts-ignore
      this.modal[method]({
        nzMask: false,
        nzTitle: `Test ${method} title`,
        nzContent: `Test content: <b>${method}</b>`,
        nzStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${pos++ * 300}px` }
      })
    );

    this.modal.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));

    setTimeout(() => this.modal.closeAll(), 2000);
  }
}

@Component({
  selector: 'nz-modal-custom-component',
  imports: [NzButtonModule],
  template: `
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
    <p>
      My favorite framework is {{ nzModalData.favoriteFramework }} and my favorite library is
      {{ nzModalData.favoriteLibrary }}
    </p>
    <br />
    <button nz-button (click)="destroyModal()">destroy modal in the component</button>
  `
})
export class NzModalCustomComponent {
  @Input() title?: string;
  @Input() subtitle?: string;

  readonly modalRef = inject(NzModalRef);
  readonly nzModalData = inject<IModalData>(NZ_MODAL_DATA);

  destroyModal(): void {
    this.modalRef.destroy({ data: 'this the result data' });
  }
}
```
