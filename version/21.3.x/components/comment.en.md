---
category: Components
type: Data Display
title: Comment
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg'
description: A comment displays user feedback and discussion to website content.
---

## When To Use

Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.

## API

### nz-comment

| Property       | Description                                            | Type                          | Default |
| -------------- | ------------------------------------------------------ | ----------------------------- | ------- |
| `[nzAuthor]`   | The element to display as the comment author           | `string \| TemplateRef<void>` | -       |
| `[nzDatetime]` | A datetime element containing the time to be displayed | `string \| TemplateRef<void>` | -       |

### [nz-comment-avatar]

The element to display as the comment avatar.

### nz-comment-content

The main content of the comment.

### nz-comment-action

The element items rendered below the comment content.

---

## Examples

### Basic comment

A basic comment with author, avatar, time and actions.

```typescript
import { Component } from '@angular/core';

import { formatDistance } from 'date-fns';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-comment-basic',
  imports: [NzAvatarModule, NzCommentModule, NzIconModule, NzTooltipModule],
  template: `
    <nz-comment nzAuthor="Han Solo" [nzDatetime]="time">
      <nz-avatar nz-comment-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <nz-comment-content>
        <p>
          We supply a series of design principles, practical patterns and high quality design resources(Sketch and
          Axure), to help people create their product prototypes beautifully and efficiently.
        </p>
      </nz-comment-content>
      <nz-comment-action>
        <nz-icon
          nz-tooltip
          nzTooltipTitle="Like"
          nzType="like"
          [nzTheme]="likes > 0 ? 'twotone' : 'outline'"
          (click)="like()"
        />
        <span class="count like">{{ likes }}</span>
      </nz-comment-action>
      <nz-comment-action>
        <nz-icon
          nz-tooltip
          nzTooltipTitle="Dislike"
          nzType="dislike"
          [nzTheme]="dislikes > 0 ? 'twotone' : 'outline'"
          (click)="dislike()"
        />
        <span class="count dislike">{{ dislikes }}</span>
      </nz-comment-action>
      <nz-comment-action>Reply to</nz-comment-action>
    </nz-comment>
  `,
  styles: `
    .count {
      padding-left: 8px;
      cursor: auto;
    }
    .ant-comment-rtl .count {
      padding-right: 8px;
      padding-left: 0;
    }
  `
})
export class NzDemoCommentBasicComponent {
  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
}
```

### Reply Editor

Comment can be used as editor, user can customize the editor component.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { formatDistance } from 'date-fns';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';

interface User {
  author: string;
  avatar: string;
}

interface Data extends User {
  content: string;
  datetime: Date;
  displayTime: string;
}

@Component({
  selector: 'nz-demo-comment-editor',
  imports: [FormsModule, NzAvatarModule, NzButtonModule, NzCommentModule, NzFormModule, NzInputModule, NzListModule],
  template: `
    @if (data.length) {
      <nz-list [nzDataSource]="data" [nzRenderItem]="item" nzItemLayout="horizontal">
        <ng-template #item let-item>
          <nz-comment [nzAuthor]="item.author" [nzDatetime]="item.displayTime">
            <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="item.avatar" />
            <nz-comment-content>
              <p>{{ item.content }}</p>
            </nz-comment-content>
          </nz-comment>
        </ng-template>
      </nz-list>
    }

    <nz-comment>
      <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="user.avatar" />
      <nz-comment-content>
        <nz-form-item>
          <textarea [(ngModel)]="inputValue" nz-input rows="4"></textarea>
        </nz-form-item>
        <nz-form-item>
          <button nz-button nzType="primary" [nzLoading]="submitting" [disabled]="!inputValue" (click)="handleSubmit()">
            Add Comment
          </button>
        </nz-form-item>
      </nz-comment-content>
    </nz-comment>
  `
})
export class NzDemoCommentEditorComponent {
  data: Data[] = [];
  submitting = false;
  user: User = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => ({
        ...e,
        displayTime: formatDistance(new Date(), e.datetime)
      }));
    }, 800);
  }
}
```

### Usage with list

Displaying a series of comments using the `nz-list` Component.

```typescript
import { Component } from '@angular/core';

import { addDays, formatDistance } from 'date-fns';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'nz-demo-comment-list',
  imports: [NzAvatarModule, NzCommentModule, NzListModule],
  template: `
    <nz-list [nzDataSource]="data" [nzRenderItem]="item" nzItemLayout="horizontal">
      <ng-template #item let-item>
        <nz-comment [nzAuthor]="item.author" [nzDatetime]="item.datetime">
          <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="item.avatar" />
          <nz-comment-content>
            <p>{{ item.content }}</p>
          </nz-comment-content>
          <nz-comment-action>Reply to</nz-comment-action>
        </nz-comment>
      </ng-template>
    </nz-list>
  `
})
export class NzDemoCommentListComponent {
  data = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 1))
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 2))
    }
  ];
}
```

### Nested comments

Comments can be nested.

```typescript
import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';

@Component({
  selector: 'nz-demo-comment-nested',
  imports: [NgTemplateOutlet, NzAvatarModule, NzCommentModule],
  template: `
    <ng-template #commentTemplateRef let-comment="comment">
      <nz-comment [nzAuthor]="comment.author">
        <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="comment.avatar" />
        <nz-comment-content>
          <p>{{ comment.content }}</p>
        </nz-comment-content>
        <nz-comment-action>Reply to</nz-comment-action>
        @if (comment.children && comment.children.length) {
          @for (child of comment.children; track child) {
            <ng-template [ngTemplateOutlet]="commentTemplateRef" [ngTemplateOutletContext]="{ comment: child }" />
          }
        }
      </nz-comment>
    </ng-template>

    <ng-template [ngTemplateOutlet]="commentTemplateRef" [ngTemplateOutletContext]="{ comment: data }" />
  `
})
export class NzDemoCommentNestedComponent {
  data = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    children: [
      {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        children: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          },
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          }
        ]
      }
    ]
  };
}
```
