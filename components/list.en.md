---
category: Components
type: Data Display
title: List
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg'
description: Basic list display, which can carry text, lists, pictures, paragraphs.
---

## When To Use

A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.

## API

### nz-list

| Property         | Description                                                                                                           | Type                              | Default        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------- |
| `[nzBordered]`   | Toggles rendering of the border around the list                                                                       | `boolean`                         | `false`        |
| `[nzFooter]`     | List footer renderer                                                                                                  | `string \| TemplateRef<void>`     | -              |
| `[nzHeader]`     | List header renderer                                                                                                  | `string \| TemplateRef<void>`     | -              |
| `[nzItemLayout]` | The layout of list, default is `horizontal`, If a vertical list is desired, set the itemLayout property to `vertical` | `'vertical' \| 'horizontal'`      | `'horizontal'` |
| `[nzLoading]`    | Shows a loading indicator while the contents of the list are being fetched                                            | `boolean`                         | `false`        |
| `[nzSize]`       | Size of list                                                                                                          | `'large' \| 'small' \| 'default'` | `'default'`    |
| `[nzSplit]`      | Toggles rendering of the split under the list item                                                                    | `boolean`                         | `true`         |

### nz-list-empty

Empty content component for the list.

| Property       | Description   | Type                          | Default |
| -------------- | ------------- | ----------------------------- | ------- |
| `[nzNoResult]` | Empty content | `string \| TemplateRef<void>` | -       |

### nz-list[nzGrid]

Use grid layout for the list.

### nz-list-header

Header component for the list.

### nz-list-footer

Footer component for the list.

### nz-list-pagination

Pagination component for the list.

### nz-list-load-more

Load more component for the list.

---

### nz-list-item

| Property     | Description                              | Type      | Default |
| ------------ | ---------------------------------------- | --------- | ------- |
| `[nzNoFlex]` | Whether it's not `flex` layout rendering | `boolean` | `false` |

#### ul[nz-list-item-actions]

Actions container component for the list items.

#### nz-list-item-action

Action component for the list items.

#### nz-list-item-extra

Extra content for the list items.

---

### nz-list-item-meta

| Property          | Description                  | Type                          | Default |
| ----------------- | ---------------------------- | ----------------------------- | ------- |
| `[nzAvatar]`      | The avatar of list item      | `string \| TemplateRef<void>` | -       |
| `[nzDescription]` | The description of list item | `string \| TemplateRef<void>` | -       |
| `[nzTitle]`       | The title of list item       | `string \| TemplateRef<void>` | -       |

#### nz-list-item-meta-title

Title component for the list items meta part.

#### nz-list-item-meta-description

Description component for the list items meta part.

#### nz-list-item-meta-avatar

Avatar component for the list items meta part.

| Property  | Description                                  | Type     | Default | Global Config |
| --------- | -------------------------------------------- | -------- | ------- | ------------- |
| `[nzSrc]` | The address of the image for an image avatar | `string` | -       |

---

## Examples

### Basic list

Basic list.

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

### Grid

Creating a grid list by setting the `nzGrid` property of `nz-list`.

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

### Infinite & virtualized

An example of infinite list & virtualized loading using [cdk-virtual-scroll](https://material.angular.io/cdk/scrolling/overview).

`Virtualized` rendering is a technique to mount big sets of data. It reduces the amount of rendered DOM nodes by tracking and hiding whatever isn't currently visible.

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

### Load more

Load more list with `loadMore` property.

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

### Responsive grid list

Responsive grid list.

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

### Simple list

Ant Design supports a default list size as well as a large and small size.

If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size.

Customizing the nzHeader and nzFooter of list by setting `nzHeader` and `nzFooter` property.

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

### Vertical

Setting `nzItemLayout` property with `vertical` to create a vertical list.

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
