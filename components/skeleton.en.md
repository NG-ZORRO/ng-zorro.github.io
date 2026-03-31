---
category: Components
type: Feedback
title: Skeleton
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg'
description: Provide a placeholder while you wait for content to load or visualize content that doesn't exist yet.
---

## When To Use

- When resource needs long time loading, like low network speed.
- The component contains information, such as a List or Card.
- Only works when loading data for the first time.
- Could be replaced by Spin in any situation but can provide a better user experience.

## API

### nz-skeleton

| Property        | Description                                         | Type                             | Default |
| --------------- | --------------------------------------------------- | -------------------------------- | ------- |
| `[nzActive]`    | Show animation effect                               | `boolean`                        | `false` |
| `[nzAvatar]`    | Show avatar placeholder                             | `boolean \| NzSkeletonAvatar`    | `false` |
| `[nzLoading]`   | Display the skeleton when `true`                    | `boolean`                        | -       |
| `[nzParagraph]` | Show the paragraph placeholder                      | `boolean \| NzSkeletonParagraph` | `true`  |
| `[nzTitle]`     | Show the title placeholder                          | `boolean \| NzSkeletonTitle`     | `true`  |
| `[nzRound]`     | Show the paragraph and the title radius when `true` | `boolean`                        | `false` |

### NzSkeletonAvatar

| Property | Description          | Type                                        | Default |
| -------- | -------------------- | ------------------------------------------- | ------- |
| `size`   | Set the avatar size  | `number \| 'large' \| 'small' \| 'default'` | -       |
| `shape`  | Set the avatar shape | `'circle' \| 'square'`                      | -       |

### NzSkeletonTitle

| Property | Description         | Type               | Default |
| -------- | ------------------- | ------------------ | ------- |
| `width`  | Set the title width | `number \| string` | -       |

### NzSkeletonParagraph

| Property | Description                                                                                                                      | Type                                          | Default |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------- |
| `rows`   | Set the row count of the paragraph                                                                                               | `number`                                      | -       |
| `width`  | Set the width of the paragraph. When width is an Array, it can set the width of each row. Otherwise, only set the last row width | `number \| string \| Array<number \| string>` | -       |

### nz-skeleton-element [nzType="button"]

| Property     | Description           | Type                                           | Default     |
| ------------ | --------------------- | ---------------------------------------------- | ----------- |
| `[nzActive]` | Show animation effect | `boolean`                                      | `false`     |
| `[nzSize]`   | Set the size          | `'large' \| 'small' \| 'default'`              | `'default'` |
| `[nzShape]`  | Set the shape         | `'square' \| 'circle' \| 'round' \| 'default'` | `'default'` |

### nz-skeleton-element [nzType="avatar"]

| Property     | Description           | Type                                        | Default     |
| ------------ | --------------------- | ------------------------------------------- | ----------- |
| `[nzActive]` | Show animation effect | `boolean`                                   | `false`     |
| `[nzSize]`   | Set the size          | `number \| 'large' \| 'small' \| 'default'` | `'default'` |
| `[nzShape]`  | Set the shape         | `'circle' \| 'square'`                      | `'square'`  |

### nz-skeleton-element [nzType="input"]

| Property     | Description           | Type                              | Default     |
| ------------ | --------------------- | --------------------------------- | ----------- |
| `[nzActive]` | Show animation effect | `boolean`                         | `false`     |
| `[nzSize]`   | Set the size          | `'large' \| 'small' \| 'default'` | `'default'` |

### nz-skeleton-element [nzType="image"]

| Property     | Description           | Type      | Default |
| ------------ | --------------------- | --------- | ------- |
| `[nzActive]` | Show animation effect | `boolean` | `false` |

---

## Examples

### Active Animation

Display active animation.

```typescript
import { Component } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'nz-demo-skeleton-active',
  imports: [NzSkeletonModule],
  template: `<nz-skeleton [nzActive]="true" />`
})
export class NzDemoSkeletonActiveComponent {}
```

### Basic

Basic usage.

```typescript
import { Component } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'nz-demo-skeleton-basic',
  imports: [NzSkeletonModule],
  template: `<nz-skeleton />`
})
export class NzDemoSkeletonBasicComponent {}
```

### Contains sub component

Skeleton contains sub component.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'nz-demo-skeleton-children',
  imports: [NzButtonModule, NzSkeletonModule],
  template: `
    <div class="article">
      <nz-skeleton [nzLoading]="loading">
        <h4>Ant Design, a design language</h4>
        <p>
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and
          Axure), to help people create their product prototypes beautifully and efficiently.
        </p>
      </nz-skeleton>
      <button nz-button (click)="showSkeleton()" [disabled]="loading">Show Skeleton</button>
    </div>
  `,
  styles: `
    .article h4 {
      margin-bottom: 16px;
    }
    .article button {
      margin-top: 16px;
    }
  `
})
export class NzDemoSkeletonChildrenComponent {
  loading = false;

  showSkeleton(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
```

### Complex combination

Complex combination with avatar and multiple paragraphs.

```typescript
import { Component } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'nz-demo-skeleton-complex',
  imports: [NzSkeletonModule],
  template: `<nz-skeleton [nzAvatar]="true" [nzParagraph]="{ rows: 4 }" />`
})
export class NzDemoSkeletonComplexComponent {}
```

### Button/Avatar/Input/Image

Skeleton button, avatar, input and image.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import {
  NzSkeletonAvatarShape,
  NzSkeletonButtonShape,
  NzSkeletonInputSize,
  NzSkeletonModule
} from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-skeleton-element',
  imports: [FormsModule, NzDividerModule, NzGridModule, NzSkeletonModule, NzRadioModule, NzSpaceModule, NzSwitchModule],
  template: `
    <nz-space nzSize="middle">
      <nz-skeleton-element
        *nzSpaceItem
        nzType="button"
        [nzActive]="elementActive"
        [nzSize]="elementSize"
        [nzShape]="buttonShape"
      />
      <nz-skeleton-element
        *nzSpaceItem
        nzType="avatar"
        [nzActive]="elementActive"
        [nzSize]="elementSize"
        [nzShape]="avatarShape"
      />
      <nz-skeleton-element
        *nzSpaceItem
        nzType="input"
        [nzActive]="elementActive"
        [nzSize]="elementSize"
        style="width:200px"
      />
    </nz-space>
    <br />
    <br />
    <nz-skeleton-element nzType="image" [nzActive]="elementActive" />
    <nz-divider />
    <div nz-row nzAlign="middle" [nzGutter]="8">
      <div nz-col nzSpan="10">
        Size:
        <nz-radio-group [(ngModel)]="elementSize">
          <label nz-radio-button nzValue="default">Default</label>
          <label nz-radio-button nzValue="large">Large</label>
          <label nz-radio-button nzValue="small">Small</label>
        </nz-radio-group>
      </div>
      <div nz-col nzSpan="5">
        Active:
        <nz-switch [(ngModel)]="elementActive" />
      </div>
    </div>
    <br />
    <br />
    <div nz-row nzAlign="middle" [nzGutter]="8">
      <div nz-col nzSpan="10">
        Button Shape:
        <nz-radio-group [(ngModel)]="buttonShape">
          <label nz-radio-button nzValue="default">Default</label>
          <label nz-radio-button nzValue="square">Square</label>
          <label nz-radio-button nzValue="circle">Circle</label>
          <label nz-radio-button nzValue="round">Round</label>
        </nz-radio-group>
      </div>
      <div nz-col nzSpan="10">
        Avatar Shape:
        <nz-radio-group [(ngModel)]="avatarShape">
          <label nz-radio-button nzValue="circle">Circle</label>
          <label nz-radio-button nzValue="square">Square</label>
        </nz-radio-group>
      </div>
    </div>
  `
})
export class NzDemoSkeletonElementComponent {
  elementActive = false;
  buttonShape: NzSkeletonButtonShape = 'default';
  avatarShape: NzSkeletonAvatarShape = 'circle';
  elementSize: NzSkeletonInputSize = 'default';
}
```

### List Sample

Use skeleton in list component.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-skeleton-list',
  imports: [FormsModule, NzIconModule, NzListModule, NzSkeletonModule, NzSwitchModule],
  template: `
    <nz-switch [(ngModel)]="loading" />
    <nz-list [nzDataSource]="listData" [nzRenderItem]="item" nzItemLayout="vertical">
      <ng-template #item let-item>
        <nz-list-item
          [nzContent]="loading ? ' ' : item.content"
          [nzActions]="loading ? [] : [starAction, likeAction, msgAction]"
          [nzExtra]="loading ? null : extra"
        >
          <nz-skeleton [nzLoading]="loading" [nzActive]="true" [nzAvatar]="true">
            <ng-template #starAction>
              <nz-icon nzType="star-o" style="margin-right: 8px;" />
              156
            </ng-template>
            <ng-template #likeAction>
              <nz-icon nzType="like-o" style="margin-right: 8px;" />
              156
            </ng-template>
            <ng-template #msgAction>
              <nz-icon nzType="message" style="margin-right: 8px;" />
              2
            </ng-template>
            <nz-list-item-meta [nzAvatar]="item.avatar" [nzTitle]="nzTitle" [nzDescription]="item.description">
              <ng-template #nzTitle>
                <a href="{{ item.href }}">{{ item.title }}</a>
              </ng-template>
            </nz-list-item-meta>
            <ng-template #extra>
              <img width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
            </ng-template>
          </nz-skeleton>
        </nz-list-item>
      </ng-template>
    </nz-list>
  `
})
export class NzDemoSkeletonListComponent {
  loading = true;
  listData = new Array(3).fill({}).map((_i, index) => ({
    href: 'https://ng.ant.design',
    title: `ant design part ${index}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources ' +
      '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  }));
}
```
