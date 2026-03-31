---
category: Components
type: 数据展示
title: Card
subtitle: 卡片
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/keNB-R8Y9/Card.svg'
description: 通用卡片容器。
---

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## API

```html
<nz-card nzTitle="卡片标题">卡片内容</nz-card>
```

### nz-card

| 参数            | 说明                                                | 类型                          | 默认值      | 支持全局配置 |
| --------------- | --------------------------------------------------- | ----------------------------- | ----------- | ------------ |
| `[nzActions]`   | 卡片操作组，位置在卡片底部                          | `Array<TemplateRef<void>>`    | -           |
| `[nzBodyStyle]` | 内容区域自定义样式                                  | `{ [key: string]: string }`   | -           |
| `[nzBordered]`  | 是否有边框                                          | `boolean`                     | `true`      | ✅           |
| `[nzCover]`     | 卡片封面                                            | `TemplateRef<void>`           | -           |
| `[nzExtra]`     | 卡片右上角的操作区域                                | `string \| TemplateRef<void>` | -           |
| `[nzHoverable]` | 鼠标移过时可浮起                                    | `boolean`                     | `false`     | ✅           |
| `[nzLoading]`   | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | `boolean`                     | `false`     |
| `[nzTitle]`     | 卡片标题                                            | `string \| TemplateRef<void>` | -           |
| `[nzType]`      | 卡片类型，可设置为 `inner` 或 不设置                | `'inner'`                     | -           |
| `[nzSize]`      | 卡片的尺寸                                          | `'default' \| 'small'`        | `'default'` | ✅           |

### nz-card-meta

| 参数              | 说明      | 类型                          | 默认值 |
| ----------------- | --------- | ----------------------------- | ------ |
| `[nzAvatar]`      | 头像/图标 | `TemplateRef<void>`           | -      |
| `[nzDescription]` | 描述内容  | `string \| TemplateRef<void>` | -      |
| `[nzTitle]`       | 标题内容  | `string \| TemplateRef<void>` | -      |

### [nz-card-grid]

| 参数            | 说明             | 类型      | 默认值 | 支持全局配置 |
| --------------- | ---------------- | --------- | ------ | ------------ |
| `[nzHoverable]` | 鼠标移过时可浮起 | `boolean` | `true` | -            |

分隔卡片内容区域

### nz-card-tab

分隔页签标题区域

---

## 代码示例

### 典型卡片

包含标题、内容、操作区域。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-card-basic',
  imports: [NzCardModule],
  template: `
    <nz-card style="width:300px;" nzTitle="Card title" [nzExtra]="extraTemplate">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </nz-card>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
  `,
  styles: `
    p {
      margin: 0;
    }
  `
})
export class NzDemoCardBasicComponent {}
```

### 无边框

在灰色背景上使用无边框的卡片。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-card-border-less',
  imports: [NzCardModule],
  template: `
    <div style="background: #ECECEC; padding:30px;">
      <nz-card style="width:300px;" [nzBordered]="false" nzTitle="Card title" [nzExtra]="extraTemplate">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </nz-card>
    </div>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
  `,
  styles: `
    p {
      margin: 0;
    }
  `
})
export class NzDemoCardBorderLessComponent {}
```

### 更灵活的内容展示

可以利用 `nz-card-meta` 支持更灵活的内容。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-card-flexible-content',
  imports: [NzCardModule],
  template: `
    <nz-card nzHoverable style="width:240px" [nzCover]="coverTemplate">
      <nz-card-meta nzTitle="Europe Street beat" nzDescription="www.instagram.com" />
    </nz-card>
    <ng-template #coverTemplate>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </ng-template>
  `
})
export class NzDemoCardFlexibleContentComponent {}
```

### 网格型内嵌卡片

一种常见的卡片内容区隔模式。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-card-grid-card',
  imports: [NzCardModule],
  template: `
    <nz-card nzTitle="Cart Title">
      <div nz-card-grid>Content</div>
      <div nz-card-grid>Content</div>
      <div nz-card-grid>Content</div>
      <div nz-card-grid>Content</div>
      <div nz-card-grid>Content</div>
      <div nz-card-grid>Content</div>
      <div nz-card-grid>Content</div>
    </nz-card>
  `,
  styles: `
    [nz-card-grid] {
      width: 25%;
      text-align: center;
    }
  `
})
export class NzDemoCardGridCardComponent {}
```

### 栅格卡片

在系统概览页面常常和栅格进行配合。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-card-in-column',
  imports: [NzCardModule, NzGridModule],
  template: `
    <div style="background: #ECECEC; padding:30px;">
      <div nz-row [nzGutter]="8">
        <div nz-col [nzSpan]="8">
          <nz-card nzTitle="Card title">
            <p>Card content</p>
          </nz-card>
        </div>
        <div nz-col [nzSpan]="8">
          <nz-card nzTitle="Card title">
            <p>Card content</p>
          </nz-card>
        </div>
        <div nz-col [nzSpan]="8">
          <nz-card nzTitle="Card title">
            <p>Card content</p>
          </nz-card>
        </div>
      </div>
    </div>
  `,
  styles: `
    p {
      margin: 0;
    }
  `
})
export class NzDemoCardInColumnComponent {}
```

### 内部卡片

可以放在普通卡片内部，展示多层级结构的信息。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-card-inner',
  imports: [NzCardModule],
  template: `
    <nz-card nzTitle="Card Title">
      <p style="font-size:14px;color:rgba(0, 0, 0, 0.85);margin-bottom:16px;font-weight: 500;">Group title</p>
      <nz-card nzType="inner" nzTitle="Inner Card Title" [nzExtra]="extraTemplate">
        <a>Inner Card Content</a>
      </nz-card>
      <nz-card nzType="inner" style="margin-top:16px;" nzTitle="Inner Card Title" [nzExtra]="extraTemplate">
        <a>Inner Card Content</a>
      </nz-card>
    </nz-card>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
  `
})
export class NzDemoCardInnerComponent {}
```

### 预加载的卡片

数据读入前会有文本块样式。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-card-loading',
  imports: [FormsModule, NzAvatarModule, NzCardModule, NzIconModule, NzSwitchModule, NzSkeletonModule],
  template: `
    <nz-switch [(ngModel)]="loading" />
    <nz-card style="width: 300px;margin-top: 16px" [nzLoading]="loading">
      <nz-card-meta [nzAvatar]="avatarTemplate" nzTitle="Card title" nzDescription="This is the description" />
    </nz-card>
    <nz-card style="width: 300px;margin-top: 16px" [nzActions]="[actionSetting, actionEdit, actionEllipsis]">
      <nz-skeleton [nzActive]="true" [nzLoading]="loading" [nzAvatar]="{ size: 'large' }">
        <nz-card-meta [nzAvatar]="avatarTemplate" nzTitle="Card title" nzDescription="This is the description" />
      </nz-skeleton>
    </nz-card>
    <ng-template #avatarTemplate>
      <nz-avatar nzSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </ng-template>
    <ng-template #actionSetting>
      <nz-icon nzType="setting" />
    </ng-template>
    <ng-template #actionEdit>
      <nz-icon nzType="edit" />
    </ng-template>
    <ng-template #actionEllipsis>
      <nz-icon nzType="ellipsis" />
    </ng-template>
  `
})
export class NzDemoCardLoadingComponent {
  loading = true;
}
```

### 支持更多内容配置

一种支持封面、头像、标题和描述信息的卡片。

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-card-meta',
  imports: [NzAvatarModule, NzCardModule, NzIconModule],
  template: `
    <nz-card style="width:300px;" [nzCover]="coverTemplate" [nzActions]="[actionSetting, actionEdit, actionEllipsis]">
      <nz-card-meta nzTitle="Card title" nzDescription="This is the description" [nzAvatar]="avatarTemplate" />
    </nz-card>
    <ng-template #avatarTemplate>
      <nz-avatar nzSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </ng-template>
    <ng-template #coverTemplate>
      <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
    </ng-template>
    <ng-template #actionSetting>
      <nz-icon nzType="setting" />
    </ng-template>
    <ng-template #actionEdit>
      <nz-icon nzType="edit" />
    </ng-template>
    <ng-template #actionEllipsis>
      <nz-icon nzType="ellipsis" />
    </ng-template>
  `
})
export class NzDemoCardMetaComponent {}
```

### 简洁卡片

只包含内容区域。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-card-simple',
  imports: [NzCardModule],
  template: `
    <nz-card style="width:300px;">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </nz-card>
  `,
  styles: `
    p {
      margin: 0;
    }
  `
})
export class NzDemoCardSimpleComponent {}
```

### 带页签的卡片

可承载更多内容。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-card-tabs',
  imports: [NzCardModule, NzTabsModule],
  template: `
    <nz-card style="width: 100%;" nzTitle="Card title" [nzExtra]="extraTemplate">
      <nz-card-tab>
        <nz-tabs nzSize="large" [(nzSelectedIndex)]="index1">
          <nz-tab nzTitle="tab1" />
          <nz-tab nzTitle="tab2" />
        </nz-tabs>
      </nz-card-tab>
      content{{ index1 }}
    </nz-card>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
    <br />
    <br />
    <nz-card style="width: 100%;">
      <nz-card-tab>
        <nz-tabs nzSize="large" [(nzSelectedIndex)]="index2">
          <nz-tab nzTitle="article" />
          <nz-tab nzTitle="app" />
          <nz-tab nzTitle="project" />
        </nz-tabs>
      </nz-card-tab>
      content{{ index2 }}
    </nz-card>
  `
})
export class NzDemoCardTabsComponent {
  index1 = 0;
  index2 = 0;
}
```
