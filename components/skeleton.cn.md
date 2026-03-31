---
category: Components
subtitle: 骨架屏
type: 反馈
title: Skeleton
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg'
description: 在需要等待加载内容的位置提供一个占位图形组合。
---

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只适合用在第一次加载数据的场景。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## API

### nz-skeleton

| 属性            | 说明                                           | 类型                             | 默认值  |
| --------------- | ---------------------------------------------- | -------------------------------- | ------- |
| `[nzActive]`    | 是否展示动画效果                               | `boolean`                        | `false` |
| `[nzAvatar]`    | 是否显示头像占位图                             | `boolean \| NzSkeletonAvatar`    | `false` |
| `[nzLoading]`   | 为 `true` 时，显示占位图。反之则直接展示子组件 | `boolean`                        | -       |
| `[nzParagraph]` | 是否显示段落占位图                             | `boolean \| NzSkeletonParagraph` | `true`  |
| `[nzTitle]`     | 是否显示标题占位图                             | `boolean \| NzSkeletonTitle`     | `true`  |
| `[nzRound]`     | 为 `true` 时，段落和标题显示圆角               | `boolean`                        | `false` |

### NzSkeletonAvatar

| 属性    | 说明                 | 类型                                        | 默认值 |
| ------- | -------------------- | ------------------------------------------- | ------ |
| `size`  | 设置头像占位图的大小 | `number \| 'large' \| 'small' \| 'default'` | -      |
| `shape` | 指定头像的形状       | `'circle' \| 'square'`                      | -      |

### NzSkeletonTitle

| 属性    | 说明                 | 类型               | 默认值 |
| ------- | -------------------- | ------------------ | ------ |
| `width` | 设置标题占位图的宽度 | `number \| string` | -      |

### NzSkeletonParagraph

| 属性    | 说明                                                                       | 类型                                          | 默认值 |
| ------- | -------------------------------------------------------------------------- | --------------------------------------------- | ------ |
| `rows`  | 设置段落占位图的行数                                                       | `number`                                      | -      |
| `width` | 设置标题占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | `number \| string \| Array<number \| string>` | -      |

### nz-skeleton-element [nzType="button"]

| 属性         | 说明             | 类型                                           | 默认值      |
| ------------ | ---------------- | ---------------------------------------------- | ----------- |
| `[nzActive]` | 是否展示动画效果 | `boolean`                                      | `false`     |
| `[nzSize]`   | 大小             | `'large' \| 'small' \| 'default'`              | `'default'` |
| `[nzShape]`  | 形状             | `'square' \| 'circle' \| 'round' \| 'default'` | `'default'` |

### nz-skeleton-element [nzType="avatar"]

| 属性         | 说明             | 类型                                        | 默认值      |
| ------------ | ---------------- | ------------------------------------------- | ----------- |
| `[nzActive]` | 是否展示动画效果 | `boolean`                                   | `false`     |
| `[nzSize]`   | 大小             | `number \| 'large' \| 'small' \| 'default'` | `'default'` |
| `[nzShape]`  | 形状             | `'circle' \| 'square'`                      | `'square'`  |

### nz-skeleton-element [nzType="input"]

| 属性         | 说明             | 类型                              | 默认值      |
| ------------ | ---------------- | --------------------------------- | ----------- |
| `[nzActive]` | 是否展示动画效果 | `boolean`                         | `false`     |
| `[nzSize]`   | 大小             | `'large' \| 'small' \| 'default'` | `'default'` |

### nz-skeleton-element [nzType="image"]

| 属性         | 说明             | 类型      | 默认值  |
| ------------ | ---------------- | --------- | ------- |
| `[nzActive]` | 是否展示动画效果 | `boolean` | `false` |

---

## 代码示例

### 动画效果

显示动画效果。

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

### 基本

最简单的用法。

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

### 包含子组件

加载占位图包含子组件。

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

### 复杂的组合

更复杂的组合。

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

### 按钮/头像/输入框/图像

骨架按钮、头像、输入框和图像。

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

### 列表样例

在列表组件中使用加载占位符。

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
