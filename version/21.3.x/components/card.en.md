---
category: Components
type: Data Display
title: Card
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/keNB-R8Y9/Card.svg'
description: Simple rectangular container.
---

## When To Use

A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## API

```html
<nz-card nzTitle="card title">card content</nz-card>
```

### nz-card

| Property        | Description                                                                | Type                          | Default     | Global Config |
| --------------- | -------------------------------------------------------------------------- | ----------------------------- | ----------- | ------------- |
| `[nzActions]`   | The action list, shows at the bottom of the Card.                          | `Array<TemplateRef<void>>`    | -           |
| `[nzBodyStyle]` | Inline style to apply to the card content                                  | `{ [key: string]: string }`   | -           |
| `[nzBordered]`  | Toggles rendering of the border around the card                            | `boolean`                     | `true`      | ✅            |
| `[nzCover]`     | Card cover                                                                 | `TemplateRef<void>`           | -           |
| `[nzExtra]`     | Content to render in the top-right corner of the card                      | `string \| TemplateRef<void>` | -           |
| `[nzHoverable]` | Lift up when hovering card                                                 | `boolean`                     | `false`     | ✅            |
| `[nzLoading]`   | Shows a loading indicator while the contents of the card are being fetched | `boolean`                     | `false`     |
| `[nzTitle]`     | Card title                                                                 | `string \| TemplateRef<void>` | -           |
| `[nzType]`      | Card style type, can be set to `inner` or not set                          | `'inner'`                     | -           |
| `[nzSize]`      | Size of card                                                               | `'default' \| 'small'`        | `'default'` | ✅            |

### nz-card-meta

| Property          | Description         | Type                          | Default |
| ----------------- | ------------------- | ----------------------------- | ------- |
| `[nzAvatar]`      | avatar or icon      | `TemplateRef<void>`           | -       |
| `[nzDescription]` | description content | `string \| TemplateRef<void>` | -       |
| `[nzTitle]`       | title content       | `string \| TemplateRef<void>` | -       |

### [nz-card-grid]

| Property        | Description                | Type      | Default | Global Config |
| --------------- | -------------------------- | --------- | ------- | ------------- |
| `[nzHoverable]` | Lift up when hovering card | `boolean` | `true`  | -             |

Area for grid style card

### nz-card-tab

Area for tab card

---

## Examples

### Basic card

A basic card containing a title, content and an extra corner content.

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

### No border

A borderless card on a gray background.

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

### Customized content

You can use `nz-card-meta` to support more flexible content.

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

### Grid card

Grid style card content.

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

### Card in column

Cards usually cooperate with grid column layout in overview page.

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

### Inner card

It can be placed inside the ordinary card to display the information of the multilevel structure.

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

### Loading card

Shows a loading indicator while the contents of the card is being fetched.

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

### Support more content configuration

A Card that supports `cover`, `avatar`, `title` and `description`.

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

### Simple card

A simple card only containing a content area.

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

### With tabs

More content can be hosted.

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
