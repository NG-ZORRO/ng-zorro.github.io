---
category: Components
subtitle: 面包屑
type: 导航
title: Breadcrumb
cover: 'https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg'
description: 显示当前页面在系统层级结构中的位置，并能向上返回。
---

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## API

### nz-breadcrumb

| 参数               | 说明                                                                                               | 类型                                  | 默认值           |
| ------------------ | -------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------- |
| `[nzSeparator]`    | 分隔符自定义                                                                                       | `string \| TemplateRef<void> \| null` | `'/'`            |
| `[nzAutoGenerate]` | 自动生成 Breadcrumb                                                                                | `boolean`                             | `false`          |
| `[nzRouteLabel]`   | 自定义 route data 属性名称，`nzAutoGenerate` 为 `true` 时才生效                                    | `string`                              | `'breadcrumb'`   |
| `[nzRouteLabelFn]` | 格式化面包屑导航项的显示文字，通常用于在国际化应用中翻译键值， `nzAutoGenerate` 为 `true` 时才生效 | `(label:string) => string`            | `label => label` |
| `[nzRouteFn]`      | 格式化面包屑路由格式，可用于为 URL 添加 query params，`nzAutoGenerate` 为 `true` 时才生效          | `(route:string) => route`             | `route => route` |

使用 `[nzAutoGenerate]` 时，需要在路由类中定义 `data`:

```ts
{
  path: 'path',
  component: SomeComponent,
  data: {
    breadcrumb: 'Display Name'
  }
}
```

对于懒加载路由，应该在父层路由写 `data`：

```ts
{
  path: 'first',
  loadChildren: () => import('./first/first.module').then(m => m.FirstModule),
  data: {
    breadcrumb: 'First'
  },
}
```

使用 `nzRouteLabel` 自定义路由属性名称:

```html
<nz-breadcrumb [nzAutoGenerate]="true" [nzRouteLabel]="'customBreadcrumb'"></nz-breadcrumb>
```

```ts
{
  path: 'path',
  component: SomeComponent,
  data: {
    customBreadcrumb: 'Display Name'
  }
}
```

使用 `nzRouteLabelFn` 在国际化应用中格式化面包屑导航项的文本:

```html
<nz-breadcrumb
  [nzAutoGenerate]="true"
  [nzRouteLabel]="'breadcrumbI18nKey'"
  [nzRouteLabelFn]="translateFn"
></nz-breadcrumb>
```

```ts
// In Route
{
  path: 'path',
  component: SomeComponent,
  data: {
    breadcrumbI18nKey: 'i18n.aaa.bbbb'
  }
}

// In component
translateFn = (key: string) => this.yourI18nService.translate(key);
```

使用 `nzRouteFn` 来使用格式化 URL 或添加 query params：

```html
<nz-breadcrumb
  [nzAutoGenerate]="true"
  [nzRouteLabel]="'breadcrumbI18nKey'"
  [nzRouteLabelFn]="translateFn"
  [nzRouteFn]="customRoute"
></nz-breadcrumb>
```

```ts
// In component
bindCurrentParams(params, route) {
  let newRoute = route;
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      newRoute += `;${key}=${params[key]}`;
    }
  }
  return newRoute;
}

const params = this.activatedRoute.snapshot.params;

customRoute = (route:string) => this.bindCurrentParams(params,route);
```

---

## 代码示例

### 自动生成

通过配置 `router.data` 自动生成面包屑。

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'nz-demo-breadcrumb-auto',
  imports: [NzBreadCrumbModule],
  template: `
    <nz-breadcrumb [nzAutoGenerate]="true">
      Please refer to StackBlitz demo at https://stackblitz.com/edit/ng-zorro-breadcrumb-auto
    </nz-breadcrumb>
  `
})
export class NzDemoBreadcrumbAutoComponent {}
```

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'nz-demo-breadcrumb-basic',
  imports: [NzBreadCrumbModule],
  template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item>Home</nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a>Application List</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>An Application</nz-breadcrumb-item>
    </nz-breadcrumb>
  `
})
export class NzDemoBreadcrumbBasicComponent {}
```

### 带下拉菜单的面包屑

面包屑支持下拉菜单。

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'nz-demo-breadcrumb-dropdown',
  imports: [NzBreadCrumbModule, NzDropdownModule],
  template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item>Ant Design</nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a>Component</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item [nzOverlay]="menu">
        <a href>An Application</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>Button</nz-breadcrumb-item>
    </nz-breadcrumb>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu nzSelectable>
        <li nz-menu-item>General</li>
        <li nz-menu-item>Layout</li>
        <li nz-menu-item>Navigation</li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoBreadcrumbDropdownComponent {}
```

### 路由

和 [RouterLink](https://angular.cn/api/router/RouterLink) 进行结合使用。

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'nz-demo-breadcrumb-router',
  imports: [RouterLink, NzBreadCrumbModule],
  template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item>
        <a [routerLink]="['../../']">Home</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>Breadcrumb</nz-breadcrumb-item>
    </nz-breadcrumb>
  `
})
export class NzDemoBreadcrumbRouterComponent {}
```

### 独立的分隔符

使用 `nz-breadcrumb-separator` 可以自定义分隔符。

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'nz-demo-breadcrumb-separator-independent',
  imports: [NzBreadCrumbModule],
  template: `
    <nz-breadcrumb [nzSeparator]="null">
      <nz-breadcrumb-item>Location</nz-breadcrumb-item>
      <nz-breadcrumb-separator>:</nz-breadcrumb-separator>
      <nz-breadcrumb-item>
        <a>Application Center</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-separator>/</nz-breadcrumb-separator>
      <nz-breadcrumb-item>Application List</nz-breadcrumb-item>
      <nz-breadcrumb-separator>/</nz-breadcrumb-separator>
      <nz-breadcrumb-item>An Application</nz-breadcrumb-item>
    </nz-breadcrumb>
  `
})
export class NzDemoBreadcrumbSeparatorIndependentComponent {}
```

### 分隔符

使用 `nzSeparator` 可以自定义分隔符。

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-breadcrumb-separator',
  imports: [NzBreadCrumbModule, NzIconModule],
  template: `
    <h4>String</h4>
    <nz-breadcrumb nzSeparator=">">
      <nz-breadcrumb-item>Home</nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a>Application List</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>An Application</nz-breadcrumb-item>
    </nz-breadcrumb>
    <br />
    <h4>TemplateRef</h4>
    <nz-breadcrumb [nzSeparator]="iconTemplate">
      <nz-breadcrumb-item>Home</nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a>Application List</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>An Application</nz-breadcrumb-item>
    </nz-breadcrumb>
    <ng-template #iconTemplate><nz-icon nzType="arrow-right" /></ng-template>
  `,
  styles: `
    h4:first-child {
      margin-top: 0;
    }

    h4 {
      margin: 16px 0;
      font-size: 14px;
      line-height: 1;
      font-weight: normal;
    }
  `
})
export class NzDemoBreadcrumbSeparatorComponent {}
```

### 带有图标的

图标放在文字前面。

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-breadcrumb-with-icon',
  imports: [NzBreadCrumbModule, NzIconModule],
  template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item>
        <nz-icon nzType="home" />
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a>
          <nz-icon nzType="user" />
          <span>Application List</span>
        </a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>Application</nz-breadcrumb-item>
    </nz-breadcrumb>
  `
})
export class NzDemoBreadcrumbWithIconComponent {}
```
