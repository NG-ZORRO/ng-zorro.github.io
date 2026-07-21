---
category: Components
subtitle: 列表
type: 数据展示
title: List
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg'
description: 最基础的列表展示，可承载文字、列表、图片、段落。
---

## 何时使用

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## API

### nz-list

| 参数             | 说明                                                                 | 类型                              | 默认值         |
| ---------------- | -------------------------------------------------------------------- | --------------------------------- | -------------- |
| `[nzBordered]`   | 是否展示边框                                                         | `boolean`                         | `false`        |
| `[nzFooter]`     | 列表底部                                                             | `string \| TemplateRef<void>`     | -              |
| `[nzHeader]`     | 列表头部                                                             | `string \| TemplateRef<void>`     | -              |
| `[nzItemLayout]` | 设置 `nz-list-item` 布局, 设置成 `vertical` 则竖直样式显示, 默认横排 | `'vertical' \| 'horizontal'`      | `'horizontal'` |
| `[nzLoading]`    | 当卡片内容还在加载中时，可以用 `loading` 展示一个占位                | `boolean`                         | `false`        |
| `[nzSize]`       | list 的尺寸                                                          | `'large' \| 'small' \| 'default'` | `'default'`    |
| `[nzSplit]`      | 是否展示分割线                                                       | `boolean`                         | `true`         |

### nz-list-empty

列表空内容组件

| 参数           | 说明           | 类型                          | 默认值 |
| -------------- | -------------- | ----------------------------- | ------ |
| `[nzNoResult]` | 空内容显示内容 | `string \| TemplateRef<void>` | -      |

### nz-list[nzGrid]

使用栅格布局

### nz-list-header

列表头部位置组件

### nz-list-footer

列表脚部位置组件

### nz-list-pagination

列表分页位置组件

### nz-list-load-more

列表加载更多位置组件

---

### nz-list-item

| 参数         | 说明                   | 类型      | 默认值  |
| ------------ | ---------------------- | --------- | ------- |
| `[nzNoFlex]` | 是否非 `flex` 布局渲染 | `boolean` | `false` |

### ul[nz-list-item-actions]

列表项操作项容器组件

### nz-list-item-action

列表项操作项组件

### nz-list-item-extra

---

列表项扩展内容位置组件

### nz-list-item-meta

| 参数              | 说明               | 类型                          | 默认值 |
| ----------------- | ------------------ | ----------------------------- | ------ |
| `[nzAvatar]`      | 列表元素的图标     | `string \| TemplateRef<void>` | -      |
| `[nzDescription]` | 列表元素的描述内容 | `string \| TemplateRef<void>` | -      |
| `[nzTitle]`       | 列表元素的标题     | `string \| TemplateRef<void>` | -      |

### nz-list-item-meta-title

列表项元信息标题部分组件

### nz-list-item-meta-description

列表项元信息描述部分组件

### nz-list-item-meta-avatar

列表项元信息头像部分组件

| 参数      | 说明                 | 类型     | 默认值 |
| --------- | -------------------- | -------- | ------ |
| `[nzSrc]` | 图片类头像的资源地址 | `string` | -      |

---

## 代码示例

### 基础列表

基础列表。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'nz-demo-list-basic',
  imports: [NzButtonModule, NzListModule],
  template: `
    <div style="margin-bottom: 8px;">
      <button nz-button (click)="change()">Switch Data</button>
    </div>
    <nz-list nzItemLayout="horizontal" [nzLoading]="loading">
      @for (item of data; track item) {
        <nz-list-item>
          <nz-list-item-meta
            nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <nz-list-item-meta-title>
              <a href="https://ng.ant.design">{{ item.title }}</a>
            </nz-list-item-meta-title>
          </nz-list-item-meta>
        </nz-list-item>
      } @empty {
        <nz-list-empty />
      }
    </nz-list>
  `
})
export class NzDemoListBasicComponent {
  loading = false;
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  change(): void {
    this.loading = true;
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: 'Ant Design Title 1'
          },
          {
            title: 'Ant Design Title 2'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 4'
          }
        ];
        this.loading = false;
      }, 1000);
    }
  }
}
```

### 栅格列表

可以通过设置 `nz-list` 的 `nzGrid` 属性来实现栅格列表。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'nz-demo-list-grid',
  imports: [NzCardModule, NzGridModule, NzListModule],
  template: `
    <nz-list nzGrid>
      <div nz-row [nzGutter]="16">
        @for (item of data; track item) {
          <div nz-col [nzSpan]="6">
            <nz-list-item>
              <nz-card [nzTitle]="item.title">Card content</nz-card>
            </nz-list-item>
          </div>
        }
      </div>
    </nz-list>
  `
})
export class NzDemoListGridComponent {
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];
}
```

### 滚动加载无限长列表

结合 [cdk-virtual-scroll](https://material.angular.io/cdk/scrolling/overview) 实现滚动加载无限长列表，带有虚拟化 virtualization 功能，能够提高数据量大时候长列表的性能。

`Virtualized` 是在大数据列表中应用的一种技术，主要是为了减少不可见区域不必要的渲染从而提高性能，特别是数据量在成千上万条效果尤为明显。

```typescript
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

interface ItemData {
  gender: string;
  name: Name;
  email: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

@Component({
  selector: 'nz-demo-list-infinite-load',
  imports: [CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, NzListModule, NzSkeletonModule],
  template: `
    <div>
      <cdk-virtual-scroll-viewport itemSize="73" class="demo-infinite-container">
        <nz-list>
          <nz-list-item *cdkVirtualFor="let item of ds">
            @if (item) {
              <nz-list-item-meta
                nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                [nzDescription]="item.email"
              >
                <nz-list-item-meta-title>
                  <a href="https://ng.ant.design">{{ item.name.last }}</a>
                </nz-list-item-meta-title>
              </nz-list-item-meta>
            } @else {
              <nz-skeleton [nzAvatar]="true" [nzParagraph]="{ rows: 1 }" />
            }
          </nz-list-item>
        </nz-list>
      </cdk-virtual-scroll-viewport>
    </div>
  `,
  styles: `
    .demo-infinite-container {
      height: 300px;
      border: 1px solid #e8e8e8;
      border-radius: 4px;
    }

    nz-list {
      padding: 24px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzDemoListInfiniteLoadComponent implements OnInit {
  private http = inject(HttpClient);
  private nzMessage = inject(NzMessageService);
  private destroyRef = inject(DestroyRef);

  ds = new MyDataSource(this.http);

  ngOnInit(): void {
    this.ds
      .completed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.nzMessage.warning('Infinite List loaded all');
      });
  }
}

class MyDataSource extends DataSource<ItemData> {
  private pageSize = 10;
  private cachedData: ItemData[] = [];
  private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<ItemData[]>(this.cachedData);
  private complete$ = new Subject<void>();
  private disconnect$ = new Subject<void>();

  constructor(private http: HttpClient) {
    super();
  }

  completed(): Observable<void> {
    return this.complete$.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<ItemData[]> {
    this.setup(collectionViewer);
    return this.dataStream;
  }

  disconnect(): void {
    this.disconnect$.next();
    this.disconnect$.complete();
  }

  private setup(collectionViewer: CollectionViewer): void {
    this.fetchPage(0);
    collectionViewer.viewChange.pipe(takeUntil(this.complete$), takeUntil(this.disconnect$)).subscribe(range => {
      if (this.cachedData.length >= 50) {
        this.complete$.next();
        this.complete$.complete();
      } else {
        const endPage = this.getPageForIndex(range.end);
        this.fetchPage(endPage + 1);
      }
    });
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private fetchPage(page: number): void {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);

    this.http
      .get<{ results: ItemData[] }>(
        `https://randomuser.me/api/?results=${this.pageSize}&inc=name,gender,email,nat&noinfo`
      )
      .pipe(catchError(() => of({ results: [] })))
      .subscribe(res => {
        this.cachedData.splice(page * this.pageSize, this.pageSize, ...res.results);
        this.dataStream.next(this.cachedData);
      });
  }
}
```

### 加载更多

可通过 `loadMore` 属性实现加载更多功能。

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'nz-demo-list-loadmore',
  imports: [NzButtonModule, NzListModule, NzSkeletonModule],
  template: `
    <nz-list class="demo-loadmore-list" [nzLoading]="initLoading">
      @for (item of list; track item) {
        <nz-list-item>
          @if (item.loading) {
            <nz-skeleton [nzAvatar]="true" [nzActive]="true" [nzTitle]="false" [nzLoading]="true" />
          } @else {
            <ng-container>
              <nz-list-item-meta
                nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team"
              >
                <nz-list-item-meta-title>
                  <a href="https://ng.ant.design">{{ item.name.last }}</a>
                </nz-list-item-meta-title>
              </nz-list-item-meta>
              content
              <ul nz-list-item-actions>
                <nz-list-item-action><a (click)="edit(item)">edit</a></nz-list-item-action>
                <nz-list-item-action><a (click)="edit(item)">more</a></nz-list-item-action>
              </ul>
            </ng-container>
          }
        </nz-list-item>
      }
      <div class="loadmore" nz-list-load-more>
        @if (!loadingMore) {
          <button nz-button (click)="onLoadMore()">loading more</button>
        }
      </div>
    </nz-list>
  `,
  styles: `
    .demo-loadmore-list {
      min-height: 350px;
    }
    .loadmore {
      text-align: center;
      margin-top: 12px;
      height: 32px;
      line-height: 32px;
    }
  `
})
export class NzDemoListLoadmoreComponent implements OnInit {
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  constructor(
    private http: HttpClient,
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => {
        this.data = this.data.concat(res.results);
        this.list = [...this.data];
        this.loadingMore = false;
      });
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }
}
```

### 响应式的栅格列表

响应式的栅格列表。

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'nz-demo-list-responsive',
  imports: [NzCardModule, NzGridModule, NzListModule],
  template: `
    <nz-list nzGrid>
      <div nz-row [nzGutter]="16">
        @for (item of data; track item) {
          <div nz-col [nzXXl]="8" [nzXl]="4" [nzLg]="6" [nzMd]="6" [nzSm]="12" [nzXs]="24">
            <nz-list-item>
              <nz-card [nzTitle]="item.title">Card content</nz-card>
            </nz-list-item>
          </div>
        }
      </div>
    </nz-list>
  `
})
export class NzDemoListResponsiveComponent {
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    },
    {
      title: 'Title 5'
    },
    {
      title: 'Title 6'
    }
  ];
}
```

### 简单列表

列表拥有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

可通过设置 `nzHeader` 和 `nzFooter`，来自定义列表头部和尾部。

```typescript
import { Component } from '@angular/core';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-list-simple',
  imports: [NzListModule, NzTypographyModule],
  template: `
    <h3>Default Size</h3>
    <nz-list nzBordered nzHeader="Header" nzFooter="Footer">
      @for (item of data; track item) {
        <nz-list-item>
          <span nz-typography><mark>[ITEM]</mark></span>
          {{ item }}
        </nz-list-item>
      }
    </nz-list>

    <h3>Small Size</h3>
    <nz-list nzBordered nzSize="small">
      <nz-list-header>Header</nz-list-header>
      @for (item of data; track item) {
        <nz-list-item>{{ item }}</nz-list-item>
      }

      <nz-list-footer>Footer</nz-list-footer>
    </nz-list>

    <h3>Large Size</h3>
    <ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
      <nz-list-header>Header</nz-list-header>
      @for (item of data; track item) {
        <li nz-list-item nzNoFlex>
          <ul nz-list-item-actions>
            <nz-list-item-action>
              <a (click)="msg.info('edit')">edit</a>
            </nz-list-item-action>
          </ul>
          {{ item }}
        </li>
      }
      <nz-list-footer>Footer</nz-list-footer>
    </ul>
  `,
  styles: `
    h3 {
      margin: 16px 0;
    }
    h3:first-child {
      margin-top: 0;
    }
    h3:last-child {
      margin-bottom: 0;
    }
  `
})
export class NzDemoListSimpleComponent {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  constructor(public msg: NzMessageService) {}
}
```

### 竖排列表样式

通过设置 `nzItemLayout` 属性为 `vertical` 可实现竖排列表样式。

```typescript
import { Component, OnInit } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

@Component({
  selector: 'nz-demo-list-vertical',
  imports: [NzIconModule, NzListModule],
  template: `
    <nz-list nzItemLayout="vertical">
      @for (item of data; track item) {
        <nz-list-item>
          <nz-list-item-meta>
            <nz-list-item-meta-avatar [nzSrc]="item.avatar" />
            <nz-list-item-meta-title>
              <a href="{{ item.href }}">{{ item.title }}</a>
            </nz-list-item-meta-title>
            <nz-list-item-meta-description>
              {{ item.description }}
            </nz-list-item-meta-description>
          </nz-list-item-meta>
          {{ item.content }}
          <ul nz-list-item-actions>
            <nz-list-item-action>
              <nz-icon nzType="star-o" style="margin-right: 8px;" />
              156
            </nz-list-item-action>
            <nz-list-item-action>
              <nz-icon nzType="star-o" style="margin-right: 8px;" />
              156
            </nz-list-item-action>
            <nz-list-item-action>
              <nz-icon nzType="star-o" style="margin-right: 8px;" />
              2
            </nz-list-item-action>
          </ul>
          <nz-list-item-extra>
            <img width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          </nz-list-item-extra>
        </nz-list-item>
      }
    </nz-list>
  `
})
export class NzDemoListVerticalComponent implements OnInit {
  data: ItemData[] = [];

  ngOnInit(): void {
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => ({
      href: 'https://ant.design',
      title: `ant design part ${index} (page: ${pi})`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }));
  }
}
```
