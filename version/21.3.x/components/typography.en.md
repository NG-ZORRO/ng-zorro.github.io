---
category: Components
type: General
title: Typography
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg'
description: Basic text writing, including headings, body text, lists, and more.
---

## When To Use

- When need to display title or paragraph contents in Articles/Blogs/Notes.
- When you need copyable/editable/ellipsis texts.

## API

### [nz-typography]

| Property            | Description                                                                    | Type                                                                 | Default             | Global Config |
| ------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ------------------- | ------------- |
| `[nzContent]`       | Component content                                                              | `string`                                                             | -                   |               |
| `[nzCopyable]`      | Can copy, require use `[nzContent]`                                            | `boolean`                                                            | `false`             |               |
| `[nzEditable]`      | Editable, require use `[nzContent]`                                            | `boolean`                                                            | `false`             |               |
| `[nzCopyIcons]`     | Custom copy icons                                                              | `[string \| TemplateRef<void>, string \| TemplateRef<void>]`         | `['copy', 'check']` | ✅            |
| `[nzCopyTooltips]`  | Custom tooltips text, hide when it is `null`                                   | `null \| [string \| TemplateRef<void>, string \| TemplateRef<void>]` | -                   | ✅            |
| `[nzEditIcon]`      | Custom edit icon                                                               | `string \| TemplateRef<void>`                                        | `'edit'`            | ✅            |
| `[nzEditTooltip]`   | Custom tooltip text, hide when it is `null`                                    | `null \| string \| TemplateRef<void>`                                | -                   | ✅            |
| `[nzEllipsis]`      | Display ellipsis when overflow, require use `[nzContent]` when dynamic content | `boolean`                                                            | `false`             |               |
| `[nzSuffix]`        | The text suffix when used `nzEllipsis`                                         | `string`                                                             | -                   |               |
| `[nzCopyText]`      | Customize the copy text                                                        | `string`                                                             | -                   |               |
| `[nzDisabled]`      | Disable content                                                                | `boolean`                                                            | `false`             |               |
| `[nzExpandable]`    | Expandable when ellipsis                                                       | `boolean`                                                            | `false`             |               |
| `[nzEllipsisRows]`  | Line number                                                                    | `number`                                                             | `1`                 | ✅            |
| `[nzType]`          | Content type                                                                   | `'secondary' \| 'warning' \| 'danger' \| 'success'`                  | -                   |               |
| `(nzContentChange)` | Trigger when user edit the content                                             | `EventEmitter<string>`                                               | -                   |               |
| `(nzExpandChange)`  | Trigger when user expanded the content                                         | `EventEmitter<void>`                                                 | -                   |               |
| `(nzOnEllipsis)`    | Trigger when ellipsis status changed                                           | `EventEmitter<boolean>`                                              | -                   |               |

---

## Examples

### Basic

Display the document sample.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-typography-basic',
  imports: [NzDividerModule, NzTypographyModule],
  template: `
    <article nz-typography>
      <h1 nz-typography>Introduction</h1>
      <p nz-typography>
        In the process of internal desktop applications development, many different design specs and implementations
        would be involved, which might cause designers and developers difficulties and duplication and reduce the
        efficiency of development.
      </p>
      <p nz-typography>
        After massive project practice and summaries, Ant Design, a design language for backgroundapplications, is
        refined by Ant UED Team, which aims to
        <span nz-typography>
          <strong>
            uniform the user interface specs for internal background projects, lower the unnecessary cost of design
            differences and implementation and liberate the resources ofdesign and front-end development
          </strong>
        </span>
        .
      </p>
      <h2 nz-typography>Guidelines and Resources</h2>
      <p nz-typography>
        We supply a series of design principles, practical patterns and high quality design resources (
        <span nz-typography><code>Sketch</code></span>
        and
        <span nz-typography><code>Axure</code></span>
        ), to help people create their product prototypes beautifully and efficiently.
      </p>
      <div nz-typography>
        <ul>
          <li>
            <a href="/docs/spec/proximity">Principles</a>
          </li>
          <li>
            <a href="/docs/pattern/navigation">Patterns</a>
          </li>
          <li>
            <a href="/docs/resource/download">Resource Download</a>
          </li>
        </ul>
      </div>
      <p nz-typography>
        Press
        <span nz-typography><kbd>Esc</kbd></span>
        to exist...
      </p>
    </article>
    <nz-divider />
    <article nz-typography>
      <h1 nz-typography>介绍</h1>
      <p nz-typography>
        蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。
        同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
      </p>
      <p nz-typography>
        随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）
        经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 Ant Design。 基于
        <span nz-typography><mark>『确定』和『自然』</mark></span>
        的设计价值观，通过模块化的解决方案，降低冗余的生产成本， 让设计者专注于
        <span nz-typography><strong>更好的用户体验</strong></span>
        。
      </p>
      <h2 nz-typography>设计资源</h2>
      <p nz-typography>
        我们提供完善的设计原则、最佳实践和设计资源文件 （
        <span nz-typography><code>Sketch</code></span>
        和
        <span nz-typography><code>Axure</code></span>
        ），来帮助业务快速设计出高质 量的产品原型。
      </p>
      <div nz-typography>
        <ul>
          <li>
            <a href="/docs/spec/proximity">设计原则</a>
          </li>
          <li>
            <a href="/docs/pattern/navigation">设计模式</a>
          </li>
          <li>
            <a href="/docs/resource/download">设计资源</a>
          </li>
        </ul>
      </div>
      <p nz-typography>
        按
        <span nz-typography><kbd>Esc</kbd></span>
        键退出阅读……
      </p>
    </article>
  `
})
export class NzDemoTypographyBasicComponent {}
```

### ellipsis

Multiple line ellipsis support.

```typescript
import { Component } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-typography-ellipsis',
  imports: [NzTypographyModule],
  template: `
    <p
      nz-typography
      nzEllipsis
      nzCopyable
      nzContent="Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design"
    ></p>
    <br />
    <p nz-typography nzEllipsis>
      Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by
      Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design
    </p>
    <br />
    <p nz-typography nzEllipsis nzExpandable [nzEllipsisRows]="3">
      Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by
      Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team.
    </p>
    <br />
    <p
      nz-typography
      nzEllipsis
      nzEditable
      [nzEllipsisRows]="2"
      [nzContent]="dynamicContent"
      (nzContentChange)="onChange($event)"
    ></p>
  `
})
export class NzDemoTypographyEllipsisComponent {
  dynamicContent =
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team.';

  onChange(event: string): void {
    this.dynamicContent = event;
  }
}
```

### Interactive

Provide additional interactive capacity of editable and copyable.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-typography-interactive',
  imports: [NzIconModule, NzTypographyModule],
  template: `
    <p nz-typography nzEditable [(nzContent)]="editStr"></p>
    <p
      nz-typography
      nzEditable
      nzEditIcon="highlight"
      nzEditTooltip="click to edit text"
      [(nzContent)]="customEditIconStr"
    ></p>
    <p nz-typography nzEditable [nzEditTooltip]="null" [(nzContent)]="hideEditTooltipStr"></p>
    <p nz-typography nzCopyable nzEditable [(nzContent)]="copyStr"></p>
    <p nz-typography nzCopyable nzCopyText="Hello, Ant Design!">Replace copy text.</p>
    <p
      nz-typography
      nzCopyable
      nzContent="Custom copy icons and tooltips text."
      [nzCopyTooltips]="['click here', copedIcon]"
      [nzCopyIcons]="['meh', 'smile']"
    ></p>
    <ng-template #copedIcon>
      <nz-icon nzType="smile" nzTheme="fill" />
      you clicked!!
    </ng-template>
    <p nz-typography nzCopyable [nzCopyTooltips]="null" nzContent="Hide copy tooltips."></p>
  `,
  styles: `
    p[nz-typography] {
      margin-bottom: 1em;
    }
  `
})
export class NzDemoTypographyInteractiveComponent {
  editStr = 'This is an editable text.';
  customEditIconStr = 'Custom edit icon and tooltip text.';
  hideEditTooltipStr = 'Hide edit tooltip.';
  copyStr = 'This is a copyable text.';
}
```

### suffix

add suffix ellipsis support.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-typography-suffix',
  imports: [FormsModule, NzSliderModule, NzTypographyModule],
  template: `
    <nz-slider [(ngModel)]="rows" [nzMax]="10" [nzMin]="1" />
    <p
      nz-typography
      nzEllipsis
      nzExpandable
      [attr.title]="content + suffix"
      [nzEllipsisRows]="rows"
      [nzSuffix]="suffix"
      (nzOnEllipsis)="onEllipsisChange($event)"
    >
      {{ content }}
    </p>
  `
})
export class NzDemoTypographySuffixComponent {
  content =
    'To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of ' +
    'outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; ' +
    'No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, ' +
    'tis a consummation Devoutly to be wish d. To die, to sleep To sleep- perchance to dream: ay, there s the rub! ' +
    'For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. ' +
    'There s the respect That makes calamity of so long life';

  suffix = '--William Shakespeare';
  rows = 1;

  onEllipsisChange(ellipsis: boolean): void {
    console.log(ellipsis);
  }
}
```

### Text Component

Provides multiple types of text.

```typescript
import { Component } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-typography-text',
  imports: [NzTypographyModule],
  template: `
    <span nz-typography>Ant Design (default)</span>
    <span nz-typography nzType="secondary">Ant Design (secondary)</span>
    <span nz-typography nzType="success">Ant Design (success)</span>
    <span nz-typography nzType="warning">Ant Design (warning)</span>
    <span nz-typography nzType="danger">Ant Design (danger)</span>
    <span nz-typography nzDisabled>Ant Design (disabled)</span>
    <span nz-typography><mark>Ant Design (mark)</mark></span>
    <span nz-typography><code>Ant Design (code)</code></span>
    <span nz-typography><kbd>Ant Design (keyboard)</kbd></span>
    <span nz-typography><u>Ant Design (underline)</u></span>
    <span nz-typography><del>Ant Design (delete)</del></span>
    <span nz-typography><strong>Ant Design (strong)</strong></span>
    <span nz-typography>
      <a href="https://ng.ant.design/" target="_blank">Ant Design</a>
    </span>
  `,
  styles: `
    span[nz-typography] {
      display: block;
    }
    span[nz-typography] + span[nz-typography] {
      margin-top: 8px;
    }
  `
})
export class NzDemoTypographyTextComponent {}
```

### Title Component

Display title in different level.

```typescript
import { Component } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-typography-title',
  imports: [NzTypographyModule],
  template: `
    <h1 nz-typography>h1. Ant Design</h1>
    <h2 nz-typography>h2. Ant Design</h2>
    <h3 nz-typography>h3. Ant Design</h3>
    <h4 nz-typography>h4. Ant Design</h4>
    <h5 nz-typography>h5. Ant Design</h5>
  `
})
export class NzDemoTypographyTitleComponent {}
```
