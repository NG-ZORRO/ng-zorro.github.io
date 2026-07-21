---
type: 反馈
category: Components
subtitle: 对话框
title: Modal
cover: 'https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg'
description: 展示一个对话框，提供标题、内容区、操作区。
---

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `NzModalService.confirm()` 等方法。

推荐使用加载 Component 的方式弹出 Modal，这样弹出层的 Component 逻辑可以与外层 Component 完全隔离，并且做到可以随时复用，

在弹出层 Component 中可以通过依赖注入`NzModalRef`方式直接获取模态框的组件实例，用于控制在弹出层组件中控制模态框行为。

## API

### NzModalService

对话框当前分为 2 种模式，`普通模式` 和 `确认框模式`（即`Confirm`对话框，通过调用`confirm/info/success/error/warning`弹出），两种模式对 API 的支持程度稍有不同。

| 参数                  | 说明                                                                                                                                                                                                                                                                                | 类型                                                        | 默认值              | 全局配置 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------- | -------- |
| `nzAfterOpen`         | Modal 打开后的回调                                                                                                                                                                                                                                                                  | `EventEmitter`                                              | -                   |
| `nzAfterClose`        | Modal 完全关闭后的回调，可监听 close/destroy 方法传入的参数                                                                                                                                                                                                                         | `EventEmitter`                                              | -                   |
| `nzBodyStyle`         | Modal body 样式                                                                                                                                                                                                                                                                     | `object`                                                    | -                   |
| `nzCancelText`        | 取消按钮文字。<i>设为 null 表示不显示取消按钮（若在普通模式下使用了 nzFooter 参数，则该值无效）</i>                                                                                                                                                                                 | `string`                                                    | `'取消'`            |
| `nzCentered`          | 垂直居中展示 Modal                                                                                                                                                                                                                                                                  | `boolean`                                                   | `false`             |
| `nzClosable`          | 是否显示右上角的关闭按钮。<i>确认框模式下该值无效（默认会被隐藏）</i>                                                                                                                                                                                                               | `boolean`                                                   | `true`              |
| `nzOkLoading`         | 确定按钮 loading                                                                                                                                                                                                                                                                    | `boolean`                                                   | `false`             |
| `nzCancelLoading`     | 取消按钮 loading                                                                                                                                                                                                                                                                    | `boolean`                                                   | `false`             |
| `nzOkDisabled`        | 是否禁用确定按钮                                                                                                                                                                                                                                                                    | `boolean`                                                   | `false`             |
| `nzCancelDisabled`    | 是否禁用取消按钮                                                                                                                                                                                                                                                                    | `boolean`                                                   | `false`             |
| `nzDraggable`         | 模态框是否可拖动                                                                                                                                                                                                                                                                    | `boolean`                                                   | `false`             |
| `nzFooter`            | 底部内容。<br><i>1. 仅在普通模式下有效。<br>2. 可通过传入 ModalButtonOptions 来最大程度自定义按钮（详见案例或下方说明）。<br>3. 当不需要底部时，可以设为 null</i>                                                                                                                   | `string \| TemplateRef<{}> \| ModalButtonOptions[] \| null` | 默认的确定取消按钮  |
| `nzKeyboard`          | 是否支持键盘 esc 关闭                                                                                                                                                                                                                                                               | `boolean`                                                   | `true`              |
| `nzMask`              | 是否展示遮罩                                                                                                                                                                                                                                                                        | `boolean`                                                   | `true`              | ✅       |
| `nzMaskClosable`      | 点击蒙层是否允许关闭                                                                                                                                                                                                                                                                | `boolean`                                                   | `true`              | ✅       |
| `nzCloseOnNavigation` | 当用户在历史中前进/后退时是否关闭模态框。注意，这通常不包括点击链接（除非用户使用 HashLocationStrategy）。                                                                                                                                                                          | `boolean`                                                   | `true`              | ✅       |
| `nzDirection`         | 文字方向                                                                                                                                                                                                                                                                            | `'ltr' \| 'rtl'`                                            | -                   | ✅       |
| `nzMaskStyle`         | 遮罩样式                                                                                                                                                                                                                                                                            | `object`                                                    | -                   |
| `nzOkText`            | 确认按钮文字。<i>设为 null 表示不显示确认按钮（若在普通模式下使用了 nzFooter 参数，则该值无效）</i>                                                                                                                                                                                 | `string`                                                    | `'确定'`            |
| `nzOkType`            | 确认按钮类型。<i>与 `nz-button` 的 `nzType` 类型值一致</i>                                                                                                                                                                                                                          | `string`                                                    | `primary`           |
| `nzOkDanger`          | 确认按钮是否为危险按钮。<i>与 `nz-button` 的 `nzDanger` 值保持一致</i>                                                                                                                                                                                                              | `boolean`                                                   | `false`             |
| `nzStyle`             | 可用于设置浮层的样式，调整浮层位置等                                                                                                                                                                                                                                                | `object`                                                    | -                   |
| `nzTitle`             | 标题。<i>留空表示不展示标题。TemplateRef 的使用方法可参考案例</i>                                                                                                                                                                                                                   | `string \| TemplateRef<{}>`                                 | -                   |
| `nzCloseIcon`         | 自定义关闭图标                                                                                                                                                                                                                                                                      | `string \| TemplateRef<void>`                               | -                   |
| `nzVisible`           | 对话框是否可见。<i>当以 `<nz-modal>` 标签使用时，请务必使用双向绑定，例如：`[(nzVisible)]="visible"`</i>                                                                                                                                                                            | `boolean`                                                   | `false`             |
| `nzWidth`             | 宽度。<i>使用数字时，默认单位为 px</i>                                                                                                                                                                                                                                              | `string \| number`                                          | `520`               |
| `nzClassName`         | 对话框的类名                                                                                                                                                                                                                                                                        | `string`                                                    | -                   |
| `nzWrapClassName`     | 对话框外层容器的类名                                                                                                                                                                                                                                                                | `string`                                                    | -                   |
| `nzZIndex`            | 设置 Modal 的 `z-index`                                                                                                                                                                                                                                                             | `number`                                                    | `1000`              |
| `nzOnCancel`          | 点击遮罩层或右上角叉或取消按钮的回调（若 nzContent 为 Component，则将会以该 Component 实例作为参数）。<i>注：当以`NzModalService.create`创建时，此参数应传入 function（回调函数）。该函数可返回 promise，待执行完毕或 promise 结束时，将自动关闭对话框（返回 false 可阻止关闭）</i> | `EventEmitter`                                              | -                   |
| `nzOnOk`              | 点击确定回调（若 nzContent 为 Component，则将会以该 Component 实例作为参数）。<i>注：当以`NzModalService.create`创建时，此参数应传入 function（回调函数）。该函数可返回 promise，待执行完毕或 promise 结束时，将自动关闭对话框（返回 false 可阻止关闭）</i>                         | `EventEmitter`                                              | -                   |
| `nzContent`           | 内容                                                                                                                                                                                                                                                                                | `string \| TemplateRef<{}> \| Component \| ng-content`      | -                   |
| `nzIconType`          | 图标 Icon 类型。<i>仅 确认框模式 下有效</i>                                                                                                                                                                                                                                         | `string`                                                    | `'question-circle'` |
| `nzAutofocus`         | 自动聚焦及聚焦位置，为 `null` 时禁用                                                                                                                                                                                                                                                | `'ok' \| 'cancel' \| 'auto' \| null`                        | `'auto'`            |

#### 采用服务方式创建普通模式对话框

> 您可调用 `NzModalService.create(options)` 来动态创建**普通模式**对话框，这里的 `options` 是一个对象，支持上方 API 中给出的支持 **普通模式** 的参数

### 确认框模式 - NzModalService.method()

包括：

- `NzModalService.info`
- `NzModalService.success`
- `NzModalService.error`
- `NzModalService.warning`
- `NzModalService.confirm`

以上均为一个函数，参数为 object，与上方 API 一致。部分属性类型或初始值有所不同，已列在下方：

| 参数             | 说明                                                                                                                                                                                                      | 类型               | 默认值  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| `nzOnOk`         | 点击确定按钮时将执行的回调函数（若 nzContent 为 Component，则将会以该 Component 实例作为参数）。<i>该函数可返回 promise，待执行完毕或 promise 结束时，将自动关闭对话框（返回 false 可阻止关闭）</i>       | `function`         | -       |
| `nzOnCancel`     | 点击遮罩层或右上角叉或取消按钮的回调（若 nzContent 为 Component，则将会以该 Component 实例作为参数）。<i>该函数可返回 promise，待执行完毕或 promise 结束时，将自动关闭对话框（返回 false 可阻止关闭）</i> | `function`         | -       |
| `nzWidth`        | 宽度                                                                                                                                                                                                      | `string \| number` | `416`   |
| `nzMaskClosable` | 点击蒙层是否允许关闭                                                                                                                                                                                      | `boolean`          | `false` |

以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。

```ts
constructor(modal: NzModalService) {
  const ref: NzModalRef = modal.info();
  ref.close(); // 或 ref.destroy(); 将直接销毁对话框
}
```

### 相关类型定义

#### NzModalService 的其他方法/属性

| 方法/属性       | 说明                          | 类型               |
| --------------- | ----------------------------- | ------------------ |
| `openModals`    | 当前打开的所有 Modal 引用列表 | `NzModalRef[]`     |
| `afterAllClose` | 所有 Modal 完全关闭后的回调   | `Observable<void>` |
| `closeAll()`    | 关闭所有模态框                | `function`         |

#### NzModalRef

> NzModalRef 对象用于控制对话框以及进行内容间的通信

通过服务方式 `NzModalService.xxx()` 创建的对话框，都会返回一个 `NzModalRef` 对象，用于操控该对话框（若使用 nzContent 为 Component 时，也可通过依赖注入 `NzModalRef` 方式获得此对象），该对象具有以下方法：

| 方法/属性                                  | 说明                                                                                                                                    |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `afterOpen`                                | 同 nzAfterOpen，但类型为 Observable&lt;void&gt;                                                                                         |
| `afterClose`                               | 同 nzAfterClose，但类型为 Observable&lt;result:any&gt;                                                                                  |
| `close(result: any)`                       | 关闭(隐藏)对话框。<i>注：当用于以服务方式创建的对话框，此方法将直接 销毁 对话框（同 destroy 方法）</i>                                  |
| `destroy(result: any)`                     | 销毁对话框。<i>注：仅用于服务方式创建的对话框（非服务方式创建的对话框，此方法只会隐藏对话框）</i>                                       |
| `getContentComponent()`                    | 获取对话框内容中`nzContent`的 Component 实例 instance。<i>注：当对话框还未初始化完毕（`ngOnInit`未执行）时，此函数将返回`undefined`</i> |
| `getContentComponentRef()`                 | 获取对话框内容中`nzContent`的 Component 引用 ComponentRef。<i>注：当对话框还未初始化完毕（`ngOnInit`未执行）时，此函数将返回`null`</i>  |
| `triggerOk()`                              | 手动触发 nzOnOk                                                                                                                         |
| `triggerCancel()`                          | 手动触发 nzOnCancel                                                                                                                     |
| `updateConfig(config: ModalOptions): void` | 更新配置                                                                                                                                |

### ModalButtonOptions（用于自定义底部按钮）

可将此类型数组传入 `nzFooter`，用于自定义底部按钮。

按钮配置项如下（与 button 组件保持一致）：

```ts
nzFooter: [{
  label: string; // 按钮文本
  type?: string; // 类型
  danger?: boolean; // 是否danger
  shape?: string; // 形状
  ghost?: boolean; // 是否ghost
  size?: string; // 大小
  autoLoading?: boolean; // 默认为true，若为true时，当onClick返回promise时此按钮将自动置为loading状态

  // 提示：下方方法的this指向该配置对象自身。当nzContent为组件类时，下方方法传入的contentComponentInstance参数为该组件类的实例
  // 是否显示该按钮
  show?: boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // 是否显示为loading
  loading?: boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // 是否禁用
  disabled?: boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // 按钮点击回调
  onClick?(this: ModalButtonOptions, contentComponentInstance?: object): void | Promise<void> | any;
}]
```

以上配置项也可在运行态实时改变，来触发按钮行为改变。

### [nzModalTitle]

自定义标题。

```html
<div *nzModalTitle> Custom Modal Title </div>

<!-- or -->

<ng-template [nzModalTitle]> Custom Modal Title </ng-template>
```

### [nzModalContent]

自定义内容。

```html
<div *nzModalContent> Custom Modal Content </div>

<!-- or -->

<ng-template [nzModalContent]> Custom Modal Content </ng-template>
```

### [nzModalFooter]

自定义页脚。

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

## 代码示例

### 异步关闭

点击确定后异步关闭对话框，例如提交表单。

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

### 基本

第一个对话框。

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

### 确认对话框

使用 `NzModalService.confirm()` 可以快捷地弹出确认框。NzOnCancel/NzOnOk 返回 promise 可以延迟关闭

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

### 确认对话框

使用 `NzModalService.confirm()` 可以快捷地弹出确认框。

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

### 可拖拽

可拖拽的对话框。

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

### 自定义组成部分

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `nzFooter` 设为 `null`。

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

### 自定义页脚

使用 `nzModalFooter` 指令自定义了页脚的按钮。

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

### 信息提示

各种类型的信息提示，只提供一个按钮用于关闭。

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

### 国际化

设置 `nzOkText` 与 `nzCancelText` 以自定义按钮文字。

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

### 手动移除

手动关闭modal。

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

### 自定义位置

使用 `nzCentered` 或类似 `style.top` 的样式来设置对话框位置。

> **注意** 由于Angular的样式隔离，若在Component中没有加入`encapsulation: ViewEncapsulation.None`，则您可能需要在自定义样式内采用`::ng-deep`来覆盖NgZorro的样式

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

### 服务方式创建

Modal的service用法，示例中演示了用户自定义模板、自定义component、以及注入模态框实例的方法。

使用模版作为内容或页脚时的上下文为 ` { $implicit: nzData, modalRef: NzModalRef }`

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
