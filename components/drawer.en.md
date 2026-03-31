---
type: Feedback
category: Components
title: Drawer
cover: 'https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg'
description: A panel that slides out from the edge of the screen.
---

A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of
information or actions. Since that user can interact with the Drawer without leaving the current page, tasks can be
achieved more efficient within the same context.

## When To Use

- Use a Form to create or edit a set of information.
- Processing subtasks. When subtasks are too heavy for Popover and we still want to keep the subtasks in the context of
  the main task, Drawer comes very handy.
- When a same Form is needed in multiple places.

## API

### nz-drawer

| Props                   | Description                                                                                                                                                                                 | Type                                     | Default     | Global Config |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- | ------------- |
| `[nzClosable]`          | Whether a close (x) button is visible on top left of the Drawer dialog or not.                                                                                                              | `boolean`                                | `true`      |
| `[nzCloseIcon]`         | Custom close icon                                                                                                                                                                           | `string \| TemplateRef<void> \| null`    | `'close'`   |
| `[nzExtra]`             | Extra actions area at corner.                                                                                                                                                               | `string \| TemplateRef<void> \| null`    | -           |
| `[nzMask]`              | Whether to show mask or not.                                                                                                                                                                | `boolean`                                | `true`      | ✅            |
| `[nzMaskClosable]`      | Clicking on the mask (area outside the Drawer) to close the Drawer or not.                                                                                                                  | `boolean`                                | `true`      | ✅            |
| `[nzCloseOnNavigation]` | Whether to close the drawer when the user goes backwards/forwards in history. Note that this usually doesn't include clicking on links (unless the user is using the HashLocationStrategy). | `boolean`                                | `true`      | ✅            |
| `[nzKeyboard]`          | Whether support press esc to close                                                                                                                                                          | `boolean`                                | `true`      |
| `[nzMaskStyle]`         | Style for Drawer's mask element.                                                                                                                                                            | `object`                                 | `{}`        |
| `[nzBodyStyle]`         | Body style for drawer body element. Such as height, padding etc.                                                                                                                            | `object`                                 | `{}`        |
| `[nzTitle]`             | The title for Drawer.                                                                                                                                                                       | `string \| TemplateRef<void>`            | -           |
| `[nzFooter]`            | The footer for Drawer.                                                                                                                                                                      | `string \| TemplateRef<void>`            | -           |
| `[nzVisible]`           | Whether the Drawer dialog is visible or not, you can use `[(nzVisible)]` two-way binding                                                                                                    | `boolean`                                | `false`     |
| `[nzPlacement]`         | The placement of the Drawer.                                                                                                                                                                | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'`   |
| `[nzSize]`              | Preset size of drawer, default `378px` and large `736px`.                                                                                                                                   | `'default' \| 'large'`                   | `'default'` |
| `[nzWidth]`             | Width of the Drawer dialog, only when placement is `'right'` or `'left'`, having a higher priority than `nzSize`.                                                                           | `number \| string`                       | -           |
| `[nzHeight]`            | Height of the Drawer dialog, only when placement is `'top'` or `'bottom'`, having a higher priority than `nzSize`.                                                                          | `number \| string`                       | -           |
| `[nzOffsetX]`           | The X coordinate offset(px), only when placement is `'right'` or `'left'`.                                                                                                                  | `number`                                 | `0`         |
| `[nzOffsetY]`           | The Y coordinate offset(px), only when placement is `'top'` or `'bottom'`.                                                                                                                  | `number`                                 | `0`         |
| `[nzWrapClassName]`     | The class name of the container of the Drawer dialog.                                                                                                                                       | `string`                                 | -           |
| `[nzZIndex]`            | The `z-index` of the Drawer.                                                                                                                                                                | `number`                                 | `1000`      |
| `(nzOnClose)`           | Specify a callback that will be called when a user clicks mask, close button or Cancel button.                                                                                              | `EventEmitter<MouseEvent>`               | -           |

### NzDrawerService

| Method          | Description               | Params                  | Return              |
| --------------- | ------------------------- | ----------------------- | ------------------- |
| create<T, D, R> | create and open an Drawer | `NzDrawerOptions<T, D>` | `NzDrawerRef<T, R>` |

### NzDrawerOptions

| Params              | Description                                                                                                                                                                                                    | Type                                                               | Default     | Global Config |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------- | ------------- |
| nzContent           | The drawer body content.                                                                                                                                                                                       | `TemplateRef<{ $implicit: D, drawerRef: NzDrawerRef }> \| Type<T>` | -           |
| nzContentParams     | Deprecated: Use NzData instead. The component inputs the param / The Template context                                                                                                                          | `D`                                                                | -           |
| nzData              | Will be a template variable when nzContent is TemplateRef. <br /> object, will be the value of the injection token NZ_DRAWER_DATA when nzContent is a component                                                | `D`                                                                | -           |
| nzClosable          | Whether a close (x) button is visible on top left of the Drawer dialog or not.                                                                                                                                 | `boolean`                                                          | `true`      |
| nzCloseIcon         | Custom close icon                                                                                                                                                                                              | `string \| TemplateRef<void> \| null`                              | `'close'`   |
| nzExtra             | Extra actions area at corner.                                                                                                                                                                                  | `string \| TemplateRef<void> \| null`                              | -           |
| nzOnCancel          | Execute when click on the mask or the upper cancel button, This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return false to prevent closing) | `() => Promise<any>`                                               | -           |
| nzMaskClosable      | Clicking on the mask (area outside the Drawer) to close the Drawer or not.                                                                                                                                     | `boolean`                                                          | `true`      | ✅            |
| nzCloseOnNavigation | Whether to close the drawer when the user goes backwards/forwards in history. Note that this usually doesn't include clicking on links (unless the user is using the HashLocationStrategy).                    | `boolean`                                                          | `true`      | ✅            |
| nzMask              | Whether to show mask or not.                                                                                                                                                                                   | `boolean`                                                          | `true`      | ✅            |
| nzDirection         | Direction of the text in the modal                                                                                                                                                                             | `'ltr' \| 'rtl'`                                                   | -           | ✅            |
| nzKeyboard          | Whether support press esc to close                                                                                                                                                                             | `boolean`                                                          | `true`      |
| nzMaskStyle         | Style for Drawer's mask element.                                                                                                                                                                               | `object`                                                           | `{}`        |
| nzBodyStyle         | Body style for modal body element. Such as height, padding etc.                                                                                                                                                | `object`                                                           | `{}`        |
| nzTitle             | The title for Drawer.                                                                                                                                                                                          | `string \| TemplateRef<void>`                                      | -           |
| nzFooter            | The footer for Drawer.                                                                                                                                                                                         | `string \| TemplateRef<void>`                                      | -           |
| nzSize              | Preset size of drawer, default `378px` and large `736px`.                                                                                                                                                      | `'default' \| 'large'`                                             | `'default'` |
| nzWidth             | Width of the Drawer dialog, only when placement is `'right'` or `'left'`, having a higher priority than `nzSize`.                                                                                              | `number \| string`                                                 | -           |
| nzHeight            | Height of the Drawer dialog, only when placement is `'top'` or `'bottom'`, having a higher priority than `nzSize`.                                                                                             | `number \| string`                                                 | -           |
| nzWrapClassName     | The class name of the container of the Drawer dialog.                                                                                                                                                          | `string`                                                           | -           |
| nzZIndex            | The `z-index` of the Drawer.                                                                                                                                                                                   | `number`                                                           | `1000`      |
| nzPlacement         | The placement of the Drawer.                                                                                                                                                                                   | `'top' \| 'right' \| 'bottom' \| 'left'`                           | `'right'`   |
| nzOffsetX           | The X coordinate offset(px).                                                                                                                                                                                   | `number`                                                           | `0`         |
| nzOffsetY           | The Y coordinate offset(px), only when placement is `'top'` or `'bottom'`.                                                                                                                                     | `number`                                                           | `0`         |

### NZ_DRAWER_DATA

NZ_DRAWER_DATA injection token is used to retrieve nzData in the custom component. The drawer created by the service
method NzDrawerService.create() inject a NZ_DRAWER_DATA token (if nzContent is used as Component) to retrieve the
parameters that have used to the 'nzContent component'

### NzDrawerRef

#### Methods

| Name                   | Description                                                               | Type                            |
| ---------------------- | ------------------------------------------------------------------------- | ------------------------------- |
| close                  | close the drawer.                                                         | `(result?: R) => void`          |
| open                   | open the drawer.                                                          | `() => void`                    |
| getContentComponent    | Returns the instance when `nzContent` is the component.                   | `() => T \| null`               |
| getContentComponentRef | Returns the reference of the component when `nzContent` is the component. | `() => ComponentRef<T> \| null` |

#### Property

| Name            | Description                                                                     | Type                                     |
| --------------- | ------------------------------------------------------------------------------- | ---------------------------------------- |
| afterOpen       | Callback called after open.                                                     | `Observable<void>`                       |
| afterClose      | Callback called after close.                                                    | `Observable<R>`                          |
| nzCloseIcon     | Custom close icon                                                               | `string \| TemplateRef<void> \| null`    |
| nzClosable      | Whether a close (x) button is visible on top right of the Drawer dialog or not. | `boolean`                                |
| nzMaskClosable  | Clicking on the mask (area outside the Drawer) to close the Drawer or not.      | `boolean`                                |
| nzMask          | Whether to show mask or not.                                                    | `boolean`                                |
| nzKeyboard      | Whether support press esc to close                                              | `boolean`                                |
| nzMaskStyle     | Style for Drawer's mask element.                                                | `object`                                 |
| nzBodyStyle     | Body style for modal body element. Such as height, padding etc.                 | `object`                                 |
| nzTitle         | The title for Drawer.                                                           | `string \| TemplateRef<void>`            |
| nzFooter        | The footer for Drawer.                                                          | `string \| TemplateRef<void>`            |
| nzWidth         | Width of the Drawer dialog.                                                     | `number \| string`                       |
| nzHeight        | Height of the Drawer dialog, only when placement is `'top'` or `'bottom'`.      | `number \| string`                       |
| nzWrapClassName | The class name of the container of the Drawer dialog.                           | `string`                                 |
| nzZIndex        | The `z-index` of the Drawer.                                                    | `number`                                 |
| nzPlacement     | The placement of the Drawer.                                                    | `'top' \| 'right' \| 'bottom' \| 'left'` |
| nzOffsetX       | The X coordinate offset(px).                                                    | `number`                                 |
| nzOffsetY       | The Y coordinate offset(px), only when placement is `'top'` or `'bottom'`.      | `number`                                 |

---

## Examples

### Basic

Basic drawer.

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

### Extra Actions

Extra actions should be placed at the corner of the drawer in Ant Design, you can use `nzExtra` prop for that.

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

### Edit item in drawer

A drawer containing an editable form which needs to be collapsed by clicking the close button.

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

### Multi-level drawer

Open a new drawer on top of an existing drawer to handle multi branch tasks

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

### Custom Placement

Basic drawer.

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

### Drawer's service

Usage of Drawer's service, examples demonstrate user-defined templates, custom components.

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

### Preset size

The default width (or height) of Drawer is `378px`, and there is a presetted large size `736px`.

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

### Preview drawer

Use when you need to quickly preview the outline of the object. Such as list item preview.

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
