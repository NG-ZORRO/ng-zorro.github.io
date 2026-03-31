---
category: Components
type: 导航
title: PageHeader
cols: 1
subtitle: 页头
cover: 'https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg'
description: 带有通用操作的页头。
---

## 何时使用

页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。

当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。

## API

```html
<nz-page-header nzTitle="Page Title"></nz-page-header>
```

### nz-page-header

| 参数           | 说明               | 类型                          | 默认值                                                                                                                                                                                                                | 全局配置 |
| -------------- | ------------------ | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `[nzGhost]`    | 使背景色透明       | `boolean`                     | `true`                                                                                                                                                                                                                | ✅       |
| `[nzTitle]`    | title 文字         | `string \| TemplateRef<void>` | -                                                                                                                                                                                                                     | -        |
| `[nzSubtitle]` | subTitle 文字      | `string \| TemplateRef<void>` | -                                                                                                                                                                                                                     | -        |
| `[nzBackIcon]` | 自定义 back icon   | `string \| TemplateRef<void>` | -                                                                                                                                                                                                                     | -        |
| `(nzBack)`     | 返回按钮的点击事件 | `EventEmitter<void>`          | 未订阅该事件时默认调用 [Location#back](https://angular.cn/api/common/Location#back)（需要引入 [RouterModule](https://angular.cn/api/router/RouterModule) 或者注册 [Location](https://angular.cn/api/common/Location)) | -        |

### Page header 组成部分

| 元素                                       | 说明                                     |
| ------------------------------------------ | ---------------------------------------- |
| `nz-page-header-title`                     | title 部分，`[nzTitle]` 优先级更高       |
| `nz-page-header-subtitle`                  | subtitle 部分，`[nzSubtitle]` 优先级更高 |
| `nz-page-header-content`                   | 内容部分                                 |
| `nz-page-header-footer`                    | 底部部分                                 |
| `nz-page-header-tags`                      | title 旁的 tag 列表容器                  |
| `nz-page-header-extra`                     | title 的行尾操作区部分                   |
| `nz-breadcrumb[nz-page-header-breadcrumb]` | 面包屑部分                               |
| `nz-avatar[nz-page-header-avatar]`         | 头像部分                                 |

---

## 代码示例

### 多种形态的 PageHeader

使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'nz-demo-page-header-actions',
  imports: [
    NzButtonModule,
    NzDescriptionsModule,
    NzGridModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzStatisticModule,
    NzTagModule
  ],
  template: `
    <nz-page-header nzBackIcon>
      <nz-page-header-title>Title</nz-page-header-title>
      <nz-page-header-subtitle>This is a subtitle</nz-page-header-subtitle>
      <nz-page-header-extra>
        <nz-space>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button nzType="primary">Primary</button>
        </nz-space>
      </nz-page-header-extra>
      <nz-page-header-content>
        <nz-descriptions nzSize="small" [nzColumn]="3">
          <nz-descriptions-item nzTitle="Created" [nzSpan]="1">Lili Qu</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Association" [nzSpan]="1"><a>421421</a></nz-descriptions-item>
          <nz-descriptions-item nzTitle="Creation Time" [nzSpan]="1">2017-01-10</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Effective Time" [nzSpan]="1">2017-10-10</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Remarks" [nzSpan]="2">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </nz-descriptions-item>
        </nz-descriptions>
      </nz-page-header-content>
    </nz-page-header>
    <br />
    <nz-page-header nzBackIcon>
      <nz-page-header-title>Title</nz-page-header-title>
      <nz-page-header-subtitle>This is a subtitle</nz-page-header-subtitle>
      <nz-page-header-tags>
        <nz-tag nzColor="blue">Running</nz-tag>
      </nz-page-header-tags>
      <nz-page-header-extra>
        <nz-space>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button nzType="primary">Primary</button>
        </nz-space>
      </nz-page-header-extra>
      <nz-page-header-content>
        <nz-row>
          <nz-statistic nzTitle="Status" nzValue="Pending" />
          <nz-statistic nzTitle="Price" [nzValue]="568.08" nzPrefix="$" style="margin: 0 32px" />
          <nz-statistic nzTitle="Balance" [nzValue]="3345.08" nzPrefix="$" />
        </nz-row>
      </nz-page-header-content>
    </nz-page-header>
  `
})
export class NzDemoPageHeaderActionsComponent {}
```

### 标准样式

标准页头，适合使用在需要简单描述的场景。

```typescript
import { Component } from '@angular/core';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'nz-demo-page-header-basic',
  imports: [NzPageHeaderModule],
  template: ` <nz-page-header (nzBack)="onBack()" nzBackIcon nzTitle="Title" nzSubtitle="This is a subtitle" /> `
})
export class NzDemoPageHeaderBasicComponent {
  onBack(): void {
    console.log('onBack');
  }
}
```

### 带面包屑页头

带面包屑页头，适合层级比较深的页面，让用户可以快速导航。

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'nz-demo-page-header-breadcrumb',
  imports: [NzBreadCrumbModule, NzPageHeaderModule],
  template: `
    <nz-page-header nzTitle="Title" nzSubtitle="This is a subtitle">
      <nz-breadcrumb nz-page-header-breadcrumb>
        <nz-breadcrumb-item>First-level Menu</nz-breadcrumb-item>
        <nz-breadcrumb-item>
          <a>Second-level Menu</a>
        </nz-breadcrumb-item>
        <nz-breadcrumb-item>Third-level Menu</nz-breadcrumb-item>
      </nz-breadcrumb>
    </nz-page-header>
  `
})
export class NzDemoPageHeaderBreadcrumbComponent {}
```

### 组合示例

使用了 PageHeader 提供的所有能力。

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/animation';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-page-header-content',
  imports: [
    NzAvatarModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDropdownModule,
    NzGridModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzNoAnimationDirective
  ],
  template: `
    <nz-page-header>
      <!--breadcrumb-->
      <nz-breadcrumb nz-page-header-breadcrumb>
        <nz-breadcrumb-item>First-level Menu</nz-breadcrumb-item>
        <nz-breadcrumb-item>
          <a>Second-level Menu</a>
        </nz-breadcrumb-item>
        <nz-breadcrumb-item>Third-level Menu</nz-breadcrumb-item>
      </nz-breadcrumb>

      <!--avatar-->
      <nz-avatar nz-page-header-avatar nzSrc="https://avatars0.githubusercontent.com/u/22736418?s=88&v=4" />

      <!--title-->
      <nz-page-header-title>Title</nz-page-header-title>

      <!--subtitle-->
      <nz-page-header-subtitle>This is a subtitle</nz-page-header-subtitle>

      <!--tags-->
      <nz-page-header-tags>
        <nz-tag nzColor="blue">Running</nz-tag>
      </nz-page-header-tags>

      <!--extra-->
      <nz-page-header-extra>
        <nz-space>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button nzType="primary">Primary</button>
          <button
            *nzSpaceItem
            nz-button
            nzNoAnimation
            nz-dropdown
            [nzDropdownMenu]="menu"
            nzPlacement="bottomRight"
            style="border: none; padding: 0"
          >
            <nz-icon nzType="more" nzTheme="outline" style="font-size: 20px; vertical-align: top;" />
          </button>
        </nz-space>
        <nz-dropdown-menu #menu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item>1st menu item length</li>
            <li nz-menu-item>2nd menu item length</li>
            <li nz-menu-item>3rd menu item length</li>
          </ul>
        </nz-dropdown-menu>
      </nz-page-header-extra>

      <!--content-->
      <nz-page-header-content>
        <div nz-row>
          <div class="content">
            <p nz-paragraph>
              Ant Design interprets the color system into two levels: a system-level color system and a product-level
              color system.
            </p>
            <p nz-paragraph>
              Ant Design's design team preferred to design with the HSB color model, which makes it easier for designers
              to have a clear psychological expectation of color when adjusting colors, as well as facilitate
              communication in teams.
            </p>
            <div class="content-link">
              <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" alt="start" />
                Quick Start
              </a>
              <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" alt="info" />
                Product Info
              </a>
              <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" alt="doc" />
                Product Doc
              </a>
            </div>
          </div>
          <div class="content-image">
            <img src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg" alt="content" />
          </div>
        </div>
      </nz-page-header-content>
    </nz-page-header>
  `,
  styles: `
    .content {
      flex: 1;
    }

    .content p {
      margin-bottom: 1em;
    }

    .content-link a {
      margin-right: 16px;
    }

    .content-link a img {
      margin-right: 8px;
    }

    .content-image {
      margin: 0 0 0 60px;
      display: flex;
      align-items: center;
    }

    .content-image img {
      width: 100%;
    }

    @media (max-width: 768px) {
      .content-image {
        flex: 100%;
        margin: 24px 0 0;
      }
    }
  `
})
export class NzDemoPageHeaderContentComponent {}
```

### 白底模式

默认 PageHeader 是透明底色的。在某些情况下，PageHeader 需要自己的背景颜色。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-page-header-ghost',
  imports: [NzButtonModule, NzDescriptionsModule, NzPageHeaderModule, NzSpaceModule],
  template: `
    <nz-page-header nzBackIcon [nzGhost]="false">
      <nz-page-header-title>Title</nz-page-header-title>
      <nz-page-header-subtitle>This is a subtitle</nz-page-header-subtitle>
      <nz-page-header-extra>
        <nz-space>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button nzType="primary">Primary</button>
        </nz-space>
      </nz-page-header-extra>
      <nz-page-header-content>
        <nz-descriptions nzSize="small" [nzColumn]="3">
          <nz-descriptions-item nzTitle="Created" [nzSpan]="1">Lili Qu</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Association" [nzSpan]="1"><a>421421</a></nz-descriptions-item>
          <nz-descriptions-item nzTitle="Creation Time" [nzSpan]="1">2017-01-10</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Effective Time" [nzSpan]="1">2017-10-10</nz-descriptions-item>
          <nz-descriptions-item nzTitle="Remarks" [nzSpan]="2">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </nz-descriptions-item>
        </nz-descriptions>
      </nz-page-header-content>
    </nz-page-header>
  `
})
export class NzDemoPageHeaderGhostComponent {}
```

### 响应式

在不同大小的屏幕下，应该有不同的表现

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-page-header-responsive',
  imports: [NzButtonModule, NzDescriptionsModule, NzPageHeaderModule, NzSpaceModule, NzStatisticModule, NzTabsModule],
  template: `
    <nz-page-header nzBackIcon>
      <nz-page-header-title>Title</nz-page-header-title>
      <nz-page-header-subtitle>This is a subtitle</nz-page-header-subtitle>
      <nz-page-header-extra>
        <nz-space>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button>Operation</button>
          <button *nzSpaceItem nz-button nzType="primary">Primary</button>
        </nz-space>
      </nz-page-header-extra>
      <nz-page-header-content>
        <div class="content">
          <div class="main">
            <nz-descriptions nzSize="small" [nzColumn]="2">
              <nz-descriptions-item nzTitle="Created" [nzSpan]="1">Lili Qu</nz-descriptions-item>
              <nz-descriptions-item nzTitle="Association" [nzSpan]="1"><a>421421</a></nz-descriptions-item>
              <nz-descriptions-item nzTitle="Creation Time" [nzSpan]="1">2017-01-10</nz-descriptions-item>
              <nz-descriptions-item nzTitle="Effective Time" [nzSpan]="1">2017-10-10</nz-descriptions-item>
              <nz-descriptions-item nzTitle="Remarks" [nzSpan]="2">
                Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
              </nz-descriptions-item>
            </nz-descriptions>
          </div>
          <div class="extra">
            <div>
              <nz-statistic nzTitle="Status" nzValue="Pending" />
              <nz-statistic nzTitle="Price" [nzValue]="568.08" nzPrefix="$" style="margin: 0 32px" />
            </div>
          </div>
        </div>
      </nz-page-header-content>
      <nz-page-header-footer>
        <nz-tabs [nzSelectedIndex]="1">
          <nz-tab nzTitle="Details" />
          <nz-tab nzTitle="Rule" />
        </nz-tabs>
      </nz-page-header-footer>
    </nz-page-header>
  `,
  styles: `
    .content {
      display: flex;
    }

    .extra > div {
      display: flex;
      width: max-content;
      justify-content: flex-end;
    }

    @media (max-width: 576px) {
      .content {
        display: block;
      }

      .main {
        width: 100%;
        margin-bottom: 12px;
      }

      .extra {
        width: 100%;
        margin-left: 0;
        text-align: left;
      }
    }
  `
})
export class NzDemoPageHeaderResponsiveComponent {}
```
