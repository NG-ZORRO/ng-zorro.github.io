---
category: Components
type: Data Display
title: Tag
cover: 'https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg'
description: Used for marking and categorization.
---

## When To Use

- It can be used to tag by dimension or property.

- When categorizing.

## API

### nz-tag

| Property            | Description                                                                 | Type                                      | Default     |
| ------------------- | --------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| `[nzMode]`          | Mode of tag                                                                 | `'closeable' \| 'default' \| 'checkable'` | `'default'` |
| `[nzChecked]`       | Checked status of Tag, double binding, only works when `nzMode="checkable"` | `boolean`                                 | `false`     |
| `[nzColor]`         | Color of the Tag                                                            | `string`                                  | -           |
| `[nzBordered]`      | Whether has border style                                                    | `boolean`                                 | `true`      |
| `(nzOnClose)`       | Callback executed when tag is closed, only works when `nzMode="closable"`   | `EventEmitter<MouseEvent>`                | -           |
| `(nzCheckedChange)` | Checked status change call back, only works when `nzMode="checkable"`       | `EventEmitter<boolean>`                   | -           |

---

## Examples

### Basic

Usage of basic Tag, and it could be closeable by set `nzMode="closeable"` property. Closeable Tag supports `nzOnClose` events.

```typescript
import { Component } from '@angular/core';

import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-tag-basic',
  imports: [NzTagModule],
  template: `
    <nz-tag>Tag 1</nz-tag>
    <nz-tag>
      <a href="https://github.com/NG-ZORRO/ng-zorro-antd">Link</a>
    </nz-tag>
    <nz-tag nzMode="closeable" (nzOnClose)="onClose()">Tag 2</nz-tag>
    <nz-tag nzMode="closeable" (nzOnClose)="preventDefault($event)">Prevent Default</nz-tag>
  `
})
export class NzDemoTagBasicComponent {
  onClose(): void {
    console.log('tag was closed.');
  }

  preventDefault(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('tag can not be closed.');
  }
}
```

### Borderless

borderless.

```typescript
import { Component } from '@angular/core';

import { presetColors } from 'ng-zorro-antd/core/color';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-tag-borderless',
  imports: [NzTagModule],
  template: `
    @for (color of tagColors; track color) {
      <nz-tag [nzColor]="color" [nzBordered]="false">{{ color }}</nz-tag>
    }
  `
})
export class NzDemoTagBorderlessComponent {
  readonly tagColors = presetColors;
}
```

### Checkable

`nzMode="checkable"` works like Checkbox, click it to toggle checked state.

```typescript
import { Component } from '@angular/core';

import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-tag-checkable',
  imports: [NzTagModule],
  template: `
    <nz-tag nzMode="checkable" [nzChecked]="true" (nzCheckedChange)="checkChange($event)">Tag1</nz-tag>
    <nz-tag nzMode="checkable" [nzChecked]="true" (nzCheckedChange)="checkChange($event)">Tag2</nz-tag>
    <nz-tag nzMode="checkable" [nzChecked]="true" (nzCheckedChange)="checkChange($event)">Tag3</nz-tag>
  `
})
export class NzDemoTagCheckableComponent {
  checkChange(e: boolean): void {
    console.log(e);
  }
}
```

### Colorful Tag

We preset a series of colorful tag style for different situation usage.
And you can always set it to a hex color string for custom color.

```typescript
import { Component } from '@angular/core';

import { presetColors } from 'ng-zorro-antd/core/color';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-tag-colorful',
  imports: [NzTagModule],
  template: `
    <h4 style="margin-bottom: 16px">Presets:</h4>
    <div>
      @for (color of presetColors; track color) {
        <nz-tag [nzColor]="color">{{ color }}</nz-tag>
      }
    </div>
    <h4 style="margin: 16px 0">Custom:</h4>
    <div>
      @for (color of customColors; track color) {
        <nz-tag [nzColor]="color">{{ color }}</nz-tag>
      }
    </div>
  `,
  styles: `
    .ant-tag {
      margin-bottom: 8px;
    }
  `
})
export class NzDemoTagColorfulComponent {
  readonly presetColors = presetColors;
  readonly customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
}
```

### Add & Remove Dynamically

Generating a set of Tags by array, you can add and remove dynamically.

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzNoAnimationDirective } from 'ng-zorro-antd/core/animation';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-tag-control',
  imports: [FormsModule, NzIconModule, NzInputModule, NzTagModule, NzNoAnimationDirective],
  template: `
    @for (tag of tags; track tag) {
      <nz-tag [nzMode]="$first ? 'default' : 'closeable'" (nzOnClose)="handleClose(tag)">
        {{ sliceTagName(tag) }}
      </nz-tag>
    }

    @if (!inputVisible) {
      <nz-tag class="editable-tag" nzNoAnimation (click)="showInput()">
        <nz-icon nzType="plus" />
        New Tag
      </nz-tag>
    } @else {
      <input
        #inputElement
        nz-input
        nzSize="small"
        type="text"
        [(ngModel)]="inputValue"
        style="width: 78px;"
        (blur)="handleInputConfirm()"
        (keydown.enter)="handleInputConfirm()"
      />
    }
  `,
  styles: `
    .editable-tag {
      background: rgb(255, 255, 255);
      border-style: dashed;
    }
  `
})
export class NzDemoTagControlComponent {
  tags = ['Unremovable', 'Tag 2', 'Tag 3'];
  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags = [...this.tags, this.inputValue];
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
}
```

### Draggable Tag

Use CDK `DragDropModule` to make tags draggable.

```typescript
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-tag-draggable',
  imports: [CdkDropList, CdkDrag, NzTagModule],
  template: `
    <div class="tag-list" cdkDropList cdkDropListOrientation="mixed" (cdkDropListDropped)="drop($event)">
      @for (tag of tags; track tag) {
        <nz-tag cdkDrag>{{ tag }}</nz-tag>
      }
    </div>
  `,
  styles: `
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tag-list nz-tag {
      margin-inline-end: 0;
      cursor: move;
    }

    .tag-list .cdk-drag-placeholder {
      opacity: 0;
    }
  `
})
export class NzDemoTagDraggableComponent {
  tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tags, event.previousIndex, event.currentIndex);
  }
}
```

### Hot Tags

Select your favourite topics.

```typescript
import { Component } from '@angular/core';

import { NzTagModule } from 'ng-zorro-antd/tag';

const tagsFromServer = ['Movie', 'Books', 'Music', 'Sports'];

@Component({
  selector: 'nz-demo-tag-hot-tags',
  imports: [NzTagModule],
  template: `
    <strong>Categories:</strong>
    @for (tag of hotTags; track $index) {
      <nz-tag
        nzMode="checkable"
        [nzChecked]="selectedTags.indexOf(tag) > -1"
        (nzCheckedChange)="handleChange($event, tag)"
      >
        {{ tag }}
      </nz-tag>
    }
  `
})
export class NzDemoTagHotTagsComponent {
  hotTags = tagsFromServer;
  selectedTags: string[] = [];

  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    console.log('You are interested in: ', this.selectedTags);
  }
}
```

### Icon

Tag components can contain an icon.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-tag-icon',
  imports: [NzIconModule, NzTagModule],
  template: `
    <nz-tag nzColor="#55acee">
      <nz-icon nzType="twitter" />
      <span>Twitter</span>
    </nz-tag>
    <nz-tag nzColor="#cd201f">
      <nz-icon nzType="youtube" />
      <span>Youtube</span>
    </nz-tag>
    <nz-tag nzColor="#3b5999">
      <nz-icon nzType="facebook" />
      <span>Facebook</span>
    </nz-tag>
    <nz-tag nzColor="#55acee">
      <nz-icon nzType="linkedin" />
      <span>LinkedIn</span>
    </nz-tag>
  `
})
export class NzDemoTagIconComponent {}
```

### Status Tag

We preset five different colors, you can set `nzColor` property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-tag-status',
  imports: [NzIconModule, NzTagModule],
  template: `
    <div>
      <h4>Without icon</h4>
      <nz-tag nzColor="success">success</nz-tag>
      <nz-tag nzColor="processing">processing</nz-tag>
      <nz-tag nzColor="error">error</nz-tag>
      <nz-tag nzColor="warning">warning</nz-tag>
      <nz-tag nzColor="default">default</nz-tag>
    </div>
    <div>
      <h4>With icon</h4>
      <nz-tag nzColor="success">
        <nz-icon nzType="check-circle" />
        <span>success</span>
      </nz-tag>
      <nz-tag nzColor="processing">
        <nz-icon nzType="sync" nzSpin />
        <span>processing</span>
      </nz-tag>
      <nz-tag nzColor="error">
        <nz-icon nzType="close-circle" />
        <span>error</span>
      </nz-tag>
      <nz-tag nzColor="warning">
        <nz-icon nzType="exclamation-circle" />
        <span>warning</span>
      </nz-tag>
      <nz-tag nzColor="default">
        <nz-icon nzType="clock-circle" />
        <span>default</span>
      </nz-tag>
    </div>
  `
})
export class NzDemoTagStatusComponent {}
```
