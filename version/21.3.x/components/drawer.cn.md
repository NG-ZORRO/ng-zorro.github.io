---
type: 反馈
category: Components
subtitle: 抽屉
title: Drawer
cover: 'https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg'
description: 屏幕边缘滑出的浮层面板。
---

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

## 何时使用

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## API

### nz-drawer

| 参数                    | 说明                                                                                                         | 类型                                     | 默认值      | 全局配置 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------- | -------- |
| `[nzClosable]`          | 是否显示左上角的关闭按钮                                                                                     | `boolean`                                | `true`      |
| `[nzCloseIcon]`         | 自定义关闭图标                                                                                               | `string \| TemplateRef<void> \| null`    | `'close'`   |
| `[nzExtra]`             | 抽屉右上角的操作区域                                                                                         | `string \| TemplateRef<void> \| null`    | -           |
| `[nzMaskClosable]`      | 点击蒙层是否允许关闭                                                                                         | `boolean`                                | `true`      | ✅       |
| `[nzMask]`              | 是否展示遮罩                                                                                                 | `boolean`                                | `true`      | ✅       |
| `[nzCloseOnNavigation]` | 当用户在历史中前进/后退时是否关闭抽屉组件。注意，这通常不包括点击链接（除非用户使用 HashLocationStrategy）。 | `boolean`                                | `true`      | ✅       |
| `[nzMaskStyle]`         | 遮罩样式                                                                                                     | `object`                                 | `{}`        |
| `[nzKeyboard]`          | 是否支持键盘 esc 关闭                                                                                        | `boolean`                                | `true`      |
| `[nzBodyStyle]`         | Drawer body 样式                                                                                             | `object`                                 | `{}`        |
| `[nzTitle]`             | 标题                                                                                                         | `string \| TemplateRef<void>`            | -           |
| `[nzFooter]`            | 抽屉的页脚                                                                                                   | `string \| TemplateRef<void>`            | -           |
| `[nzVisible]`           | Drawer 是否可见，可以使用 `[(nzVisible)]` 双向绑定                                                           | `boolean`                                | -           |
| `[nzPlacement]`         | 抽屉的方向                                                                                                   | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'`   |
| `[nzSize]`              | 预设抽屉宽度（或高度），default `378px` 和 large `736px`                                                     | `'default' \| 'large'`                   | `'default'` |
| `[nzWidth]`             | 宽度, 只在方向为 `'right'`或`'left'` 时生效，优先级高于 `nzSize`                                             | `number \| string`                       | -           |
| `[nzHeight]`            | 高度, 只在方向为 `'top'`或`'bottom'` 时生效，优先级高于 `nzSize`                                             | `number \| string`                       | -           |
| `[nzOffsetX]`           | x 坐标移量(px), 只在方向为 `'right'`或`'left'` 时生效                                                        | `number`                                 | `0`         |
| `[nzOffsetY]`           | y 坐标移量(px), 高度, 只在方向为 `'top'`或`'bottom'` 时生效                                                  | `number`                                 | `0`         |
| `[nzWrapClassName]`     | 对话框外层容器的类名                                                                                         | `string`                                 | -           |
| `[nzZIndex]`            | 设置 Drawer 的 `z-index`                                                                                     | `number`                                 | `1000`      |
| `(nzOnClose)`           | 点击遮罩层或右上角叉的回调                                                                                   | `EventEmitter<MouseEvent>`               | -           |

### NzDrawerService

| 方法名          | 说明                  | 参数                    | 返回                |
| --------------- | --------------------- | ----------------------- | ------------------- |
| create<T, D, R> | 创建并打开一个 Drawer | `NzDrawerOptions<T, D>` | `NzDrawerRef<T, R>` |

### NzDrawerOptions

| 参数                | 说明                                                                                                                   | 类型                                                               | 默认值      | 全局配置 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------- | -------- |
| nzContent           | Drawer body 的内容                                                                                                     | `TemplateRef<{ $implicit: D, drawerRef: NzDrawerRef }> \| Type<T>` | -           |
| nzContentParams     | 内容组件的输入参数 / Template 的 context                                                                               | `D`                                                                | -           |
| nzOnCancel          | 点击遮罩层或右上角叉时执行,该函数可返回 promise 待执行完毕或 promise 结束时，将自动关闭对话框（返回 false 可阻止关闭） | `() => Promise<any>`                                               | -           |
| nzClosable          | 是否显示左上角的关闭按钮                                                                                               | `boolean`                                                          | `true`      |
| nzCloseIcon         | 自定义关闭图标                                                                                                         | `string \| TemplateRef<void> \| null`                              | `'close'`   |
| nzExtra             | 抽屉右上角的操作区域                                                                                                   | `string \| TemplateRef<void> \| null`                              | -           |
| nzMaskClosable      | 点击蒙层是否允许关闭                                                                                                   | `boolean`                                                          | `true`      | ✅       |
| nzMask              | 是否展示遮罩                                                                                                           | `boolean`                                                          | `true`      | ✅       |
| nzCloseOnNavigation | 当用户在历史中前进/后退时是否关闭抽屉组件。注意，这通常不包括点击链接（除非用户使用 HashLocationStrategy）。           | `boolean`                                                          | `true`      | ✅       |
| nzDirection         | 文字方向                                                                                                               | `'ltr' \| 'rtl'`                                                   | -           | ✅       |
| nzKeyboard          | 是否支持键盘 esc 关闭                                                                                                  | `boolean`                                                          | `true`      |
| nzMaskStyle         | 遮罩样式                                                                                                               | `object`                                                           | `{}`        |
| nzBodyStyle         | Modal body 样式                                                                                                        | `object`                                                           | `{}`        |
| nzTitle             | 标题                                                                                                                   | `string \| TemplateRef<void>`                                      | -           |
| nzFooter            | 页脚                                                                                                                   | `string \| TemplateRef<void>`                                      | -           |
| nzSize              | 预设抽屉宽度（或高度），default `378px` 和 large `736px`                                                               | `'default' \| 'large'`                                             | `'default'` |
| nzWidth             | 宽度, 只在方向为 `'right'`或`'left'` 时生效，优先级高于 `nzSize`                                                       | `number \| string`                                                 | -           |
| nzHeight            | 高度, 只在方向为 `'top'`或`'bottom'` 时生效，优先级高于 `nzSize`                                                       | `number \| string`                                                 | -           |
| nzWrapClassName     | 对话框外层容器的类名                                                                                                   | `string`                                                           | -           |
| nzZIndex            | 设置 Drawer 的 `z-index`                                                                                               | `number`                                                           | `1000`      |
| nzPlacement         | 抽屉的方向                                                                                                             | `'top' \| 'right' \| 'bottom' \| 'left'`                           | `'right'`   |
| nzOffsetX           | x 坐标移量(px)                                                                                                         | `number`                                                           | `0`         |
| nzOffsetY           | y 坐标移量(px), 高度, 只在方向为 `'top'`或`'bottom'` 时生效                                                            | `number`                                                           | `0`         |

### NzDrawerRef

#### 方法

| 名称                | 说明                                | 类型                   |
| ------------------- | ----------------------------------- | ---------------------- |
| close               | 关闭 Drawer                         | `(result?: R) => void` |
| open                | 打开 Drawer                         | `() => void`           |
| getContentComponent | 返回 `nzContent` 为组件时的组件实例 | `() => T \| null`      |

#### 属性

| 名称            | 说明                                                        | 类型                                     |
| --------------- | ----------------------------------------------------------- | ---------------------------------------- |
| afterOpen       | 打开之后的回调                                              | `Observable<void>`                       |
| afterClose      | 关闭之后的回调                                              | `Observable<R>`                          |
| nzClosable      | 是否显示右上角的关闭按钮                                    | `boolean`                                |
| nzCloseIcon     | 自定义关闭图标                                              | `string \| TemplateRef<void> \| null`    |
| nzMaskClosable  | 点击蒙层是否允许关闭                                        | `boolean`                                |
| nzMask          | 是否展示遮罩                                                | `boolean`                                |
| nzMaskStyle     | 遮罩样式                                                    | `object`                                 |
| nzKeyboard      | 是否支持键盘 esc 关闭                                       | `boolean`                                |
| nzBodyStyle     | Modal body 样式                                             | `object`                                 |
| nzTitle         | 标题                                                        | `string \| TemplateRef<void>`            |
| nzWidth         | 宽度                                                        | `number \| string`                       |
| nzHeight        | 高度, 只在方向为 `'top'`或`'bottom'` 时生效                 | `number \| string`                       |
| nzWrapClassName | 对话框外层容器的类名                                        | `string`                                 |
| nzZIndex        | 设置 Drawer 的 `z-index`                                    | `number`                                 |
| nzPlacement     | 抽屉的方向                                                  | `'top' \| 'right' \| 'bottom' \| 'left'` |
| nzOffsetX       | x 坐标移量(px)                                              | `number`                                 |
| nzOffsetY       | y 坐标移量(px), 高度, 只在方向为 `'top'`或`'bottom'` 时生效 | `number`                                 |

---

## 代码示例

### 基础抽屉

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'nz-demo-drawer-basic-right',
  imports: [NzButtonModule, NzDrawerModule],
  template: `
    <button nz-button nzType="primary" (click)="open()">Open</button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      nzPlacement="right"
      nzTitle="Basic Drawer"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ng-container>
    </nz-drawer>
  `
})
export class NzDemoDrawerBasicRightComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
```

### 额外操作

在 Ant Design 规范中，操作按钮建议放在抽屉的右上角，可以使用 `nzExtra` 属性来实现。

```typescript
import { Component, signal } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'nz-demo-drawer-extra',
  imports: [NzButtonModule, NzDrawerModule, NzFlexModule],
  template: `
    <button nz-button nzType="primary" (click)="open()">Open</button>
    <nz-drawer
      [nzClosable]="false"
      nzPlacement="right"
      nzTitle="Basic Drawer"
      (nzOnClose)="close()"
      [nzVisible]="visible()"
      [nzExtra]="extra"
    >
      <ng-container *nzDrawerContent>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ng-container>

      <ng-template #extra>
        <div nz-flex nzGap="small">
          <button nz-button nzType="primary" (click)="close()">OK</button>
          <button nz-button nzType="default" (click)="close()">Cancel</button>
        </div>
      </ng-template>
    </nz-drawer>
  `
})
export class NzDemoDrawerExtraComponent {
  readonly visible = signal(false);

  open(): void {
    this.visible.set(true);
  }

  close(): void {
    this.visible.set(false);
  }
}
```

### 对象编辑

用于承载编辑相关操作，需要点击关闭按钮关闭。

```typescript
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-drawer-from-drawer',
  imports: [
    NzButtonModule,
    NzDrawerModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    CdkTextareaAutosize
  ],
  template: `
    <button nz-button nzType="primary" (click)="open()">Create</button>
    <nz-drawer
      [nzBodyStyle]="{ overflow: 'auto' }"
      [nzMaskClosable]="false"
      [nzWidth]="720"
      [nzVisible]="visible"
      nzTitle="Create"
      [nzFooter]="footerTpl"
      (nzOnClose)="close()"
    >
      <form nz-form *nzDrawerContent>
        <div nz-row [nzGutter]="8">
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label>Name</nz-form-label>
              <nz-form-control>
                <input nz-input placeholder="please enter user name" />
              </nz-form-control>
            </nz-form-item>
          </div>
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label>Url</nz-form-label>
              <nz-form-control>
                <nz-input-wrapper nzAddonBefore="http://" nzAddonAfter=".com">
                  <input type="text" nz-input placeholder="please enter url" />
                </nz-input-wrapper>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row [nzGutter]="8">
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label>Owner</nz-form-label>
              <nz-form-control>
                <nz-select nzPlaceHolder="Please select an owner" />
              </nz-form-control>
            </nz-form-item>
          </div>
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label>Type</nz-form-label>
              <nz-form-control>
                <nz-select nzPlaceHolder="Please choose the type" />
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row [nzGutter]="8">
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label>Approver</nz-form-label>
              <nz-form-control>
                <nz-select nzPlaceHolder="Please choose the approver" />
              </nz-form-control>
            </nz-form-item>
          </div>
          <div nz-col nzSpan="12">
            <nz-form-item>
              <nz-form-label>DateTime</nz-form-label>
              <nz-form-control>
                <nz-range-picker />
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row [nzGutter]="8">
          <div nz-col nzSpan="24">
            <nz-form-item>
              <nz-form-label>Description</nz-form-label>
              <nz-form-control>
                <textarea
                  nz-input
                  placeholder="please enter url description"
                  cdkTextareaAutosize
                  cdkAutosizeMinRows="4"
                  cdkAutosizeMaxRows="4"
                ></textarea>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
      </form>

      <ng-template #footerTpl>
        <div style="float: right">
          <button nz-button style="margin-right: 8px;" (click)="close()">Cancel</button>
          <button nz-button nzType="primary" (click)="close()">Submit</button>
        </div>
      </ng-template>
    </nz-drawer>
  `
})
export class NzDemoDrawerFromDrawerComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
```

### 多层抽屉

在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-drawer-multi-level-drawer',
  imports: [NzButtonModule, NzDrawerModule, NzFormModule, NzInputModule, NzListModule, NzTagModule],
  template: `
    <button nz-button nzType="primary" (click)="open()">New Cookbook</button>
    <nz-drawer
      [nzClosable]="false"
      [nzOffsetX]="childrenVisible ? 180 : 0"
      [nzWidth]="320"
      [nzVisible]="visible"
      nzTitle="Cookbook"
      (nzOnClose)="close()"
    >
      <form *nzDrawerContent nz-form>
        <div nz-row>
          <div nz-col nzSpan="24">
            <nz-form-item>
              <nz-form-label>Name</nz-form-label>
              <nz-form-control>
                <input nz-input placeholder="please enter cookbook name" />
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row>
          <div nz-col nzSpan="24">
            <nz-form-item>
              <nz-form-label>Food</nz-form-label>
              <nz-form-control>
                <nz-tag>potato</nz-tag>
                <nz-tag>eggplant</nz-tag>
                <nz-tag (click)="openChildren()">+</nz-tag>
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
      </form>
      <nz-drawer [nzClosable]="false" [nzVisible]="childrenVisible" nzTitle="Food" (nzOnClose)="closeChildren()">
        <nz-list *nzDrawerContent [nzDataSource]="vegetables" [nzRenderItem]="item">
          <ng-template #item let-item>
            <nz-list-item [nzContent]="item" />
          </ng-template>
        </nz-list>
      </nz-drawer>
    </nz-drawer>
  `
})
export class NzDemoDrawerMultiLevelDrawerComponent {
  visible = false;
  childrenVisible = false;

  vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  openChildren(): void {
    this.childrenVisible = true;
  }

  closeChildren(): void {
    this.childrenVisible = false;
  }
}
```

### 自定义位置

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule, NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-drawer-placement',
  imports: [FormsModule, NzButtonModule, NzDrawerModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="placement">
      <label nz-radio nzValue="top">top</label>
      <label nz-radio nzValue="right">right</label>
      <label nz-radio nzValue="bottom">bottom</label>
      <label nz-radio nzValue="left">left</label>
    </nz-radio-group>
    <button nz-button nzType="primary" (click)="open()">Open</button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      [nzPlacement]="placement"
      nzTitle="Basic Drawer"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ng-container>
    </nz-drawer>
  `
})
export class NzDemoDrawerPlacementComponent {
  visible = false;
  placement: NzDrawerPlacement = 'left';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
```

### 服务方式创建

Drawer 的 service 用法，示例中演示了用户自定义模板、自定义component。

```typescript
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NZ_DRAWER_DATA, NzDrawerModule, NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-drawer-service',
  imports: [FormsModule, NzButtonModule, NzDrawerModule, NzFormModule, NzInputModule],
  template: `
    <ng-template #drawerTemplate let-data let-drawerRef="drawerRef">
      value: {{ data?.value }}
      <br />
      <br />
      <button nz-button nzType="primary" (click)="drawerRef.close()">close</button>
    </ng-template>
    <div nz-form>
      <nz-form-item>
        <input nz-input [(ngModel)]="value" />
      </nz-form-item>
    </div>
    <button nz-button nzType="primary" (click)="openTemplate()">Use Template</button>
    &nbsp;
    <button nz-button nzType="primary" (click)="openComponent()">Use Component</button>
  `
})
export class NzDemoDrawerServiceComponent {
  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  value = 'ng';

  constructor(private drawerService: NzDrawerService) {}

  openTemplate(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Template',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: this.drawerTemplate,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }

  openComponent(): void {
    const drawerRef = this.drawerService.create<NzDrawerCustomComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: NzDrawerCustomComponent,
      nzContentParams: {
        value: this.value
      },
      nzData: {
        value: 'Ng Zorro'
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
    });
  }
}

@Component({
  selector: 'nz-drawer-custom-component',
  imports: [FormsModule, NzButtonModule, NzDividerModule, NzInputModule],
  template: `
    <div>
      <input nz-input [(ngModel)]="nzData.value" />
      <nz-divider />
      <button nzType="primary" (click)="close()" nz-button>Confirm</button>
    </div>
  `
})
export class NzDrawerCustomComponent {
  // @Input() value = '';
  nzData: { value: string } = inject(NZ_DRAWER_DATA);

  constructor(private drawerRef: NzDrawerRef<string>) {}

  close(): void {
    this.drawerRef.close(this.nzData);
  }
}
```

### 预设宽度

抽屉的默认宽度为 `378px`，另外还提供一个大号抽屉 `736px`，可以用 `size` 属性来设置。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-drawer-size',
  imports: [NzButtonModule, NzDrawerModule, NzSpaceModule],
  template: `
    <nz-space>
      <button *nzSpaceItem nz-button nzType="primary" (click)="showDefault()">Open Default Size (378px)</button>
      <button *nzSpaceItem nz-button nzType="primary" (click)="showLarge()">Open Large Size (736px)</button>
    </nz-space>
    <nz-drawer
      [nzSize]="size"
      [nzVisible]="visible"
      nzPlacement="right"
      [nzTitle]="title"
      [nzExtra]="extra"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ng-container>
    </nz-drawer>
    <ng-template #extra>
      <button nz-button nzType="default" (click)="close()">Cancel</button>
      &nbsp;
      <button nz-button nzType="primary" (click)="close()">OK</button>
    </ng-template>
  `
})
export class NzDemoDrawerSizeComponent {
  visible = false;
  size: 'large' | 'default' = 'default';

  get title(): string {
    return `${this.size} Drawer`;
  }

  showDefault(): void {
    this.size = 'default';
    this.open();
  }

  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
```

### 信息预览抽屉

需要快速预览对象概要时使用，点击遮罩区关闭。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'nz-demo-drawer-user-profile',
  imports: [NzButtonModule, NzDescriptionsModule, NzDividerModule, NzDrawerModule, NzListModule],
  template: `
    <nz-list [nzDataSource]="data" [nzRenderItem]="item" nzItemLayout="horizontal">
      <ng-template #item let-item>
        <nz-list-item [nzActions]="[viewAction]">
          <ng-template #viewAction>
            <a (click)="open()">View Profile</a>
          </ng-template>
          <nz-list-item-meta
            [nzTitle]="nzTitle"
            nzAvatar="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            nzDescription="Progresser AFX"
          >
            <ng-template #nzTitle>
              <a href="https://ng.ant.design">{{ item.name }}</a>
            </ng-template>
          </nz-list-item-meta>
        </nz-list-item>
      </ng-template>
    </nz-list>
    <nz-drawer [nzVisible]="visible" [nzWidth]="640" [nzClosable]="false" (nzOnClose)="close()">
      <ng-container *nzDrawerContent>
        <p class="title">User Profile</p>
        <nz-descriptions [nzColumn]="2" nzTitle="Personal">
          <nz-descriptions-item nzTitle="Full Name" [nzSpan]="1">Lily</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Account" [nzSpan]="1">AntDesign&#64;example.com</nz-descriptions-item>
          <nz-descriptions-item nzTitle="City" [nzSpan]="1">HangZhou</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Country" [nzSpan]="1">China🇨🇳</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Birthday" [nzSpan]="1">February 2,1900</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Website" [nzSpan]="1">-</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Message" [nzSpan]="2">
            Make things as simple as possible but no simpler.
          </nz-descriptions-item>
        </nz-descriptions>
        <nz-divider />
        <nz-descriptions [nzColumn]="2" nzTitle="Company">
          <nz-descriptions-item nzTitle="Position" [nzSpan]="1">Programmer</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Responsibilities" [nzSpan]="1">Coding</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Department" [nzSpan]="1">AFX</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Supervisor" [nzSpan]="1">Lin</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Skills" [nzSpan]="2">
            C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler
            theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java,
            ASP, etc.
          </nz-descriptions-item>
        </nz-descriptions>
        <nz-divider />
        <nz-descriptions [nzColumn]="2" nzTitle="Contacts">
          <nz-descriptions-item nzTitle="Email" [nzSpan]="1">AntDesign&#64;example.com</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Phone Number" [nzSpan]="1">+86 181 0000 0000</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Github" [nzSpan]="2">
            <a href="https://github.com/NG-ZORRO/ng-zorro-antd" target="_blank">github.com/NG-ZORRO/ng-zorro-antd</a>
          </nz-descriptions-item>
        </nz-descriptions>
      </ng-container>
    </nz-drawer>
  `,
  styles: `
    .title {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      line-height: 24px;
      display: block;
      margin-bottom: 24px;
    }
  `
})
export class NzDemoDrawerUserProfileComponent {
  data = [
    {
      name: 'Lily'
    },
    {
      name: 'Lily'
    }
  ];

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
```
