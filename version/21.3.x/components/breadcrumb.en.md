---
category: Components
type: Navigation
title: Breadcrumb
cover: 'https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg'
description: Displays the current location within a hierarchy. And allow going back to states higher up in the hierarchy.
---

## When To Use

- When the system has more than two layers in a hierarchy.
- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.
- When the application has multi-layer architecture.

## API

### nz-breadcrumb

| Property           | Description                                                                                                                                                                                                      | Type                                  | Default          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------- |
| `[nzSeparator]`    | Custom separator                                                                                                                                                                                                 | `string \| TemplateRef<void> \| null` | `'/'`            |
| `[nzAutoGenerate]` | Auto generate breadcrumb                                                                                                                                                                                         | `boolean`                             | `false`          |
| `[nzRouteLabel]`   | Name of property that determines displayed text in routing config. It should be used when `nzAutoGenerate` is `true`                                                                                             | `string`                              | `'breadcrumb'`   |
| `[nzRouteLabelFn]` | Format breadcrumb item label text, normally used in international app to translate i18n key. It should be used when `nzAutoGenerate` is `true`                                                                   | `(label:string) => string`            | `label => label` |
| `[nzRouteFn]`      | Format breadcrumb item route, normally used in international app to bind current params or query strings to avoid losing them while navigate using breadcrumb. It should be used when `nzAutoGenerate` is `true` | `(route:string) => route`             | `route => route` |

Using `[nzAutoGenerate]` by configuring `data` like this:

```ts
{
  path: '/path',
  component: SomeComponent,
  data: {
    breadcrumb: 'Display Name'
  }
}
```

For lazy loading modules, you should write `data` in parent module like this:

```ts
{
  path: 'first',
  loadChildren: () => import('./first/first.module').then(m => m.FirstModule),
  data: {
    breadcrumb: 'First'
  },
}
```

Use `nzRouteLabel` to custom `data` breadcrumb label:

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

Use `nzRouteLabelFn` to format breadcrumb label in international application:

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
translateFn = (key:string) => this.yourI18nService.translate(key);
```

Use `nzRouteFn` to format or bind params and query strings to the route it self in international application:

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

## Examples

### Auto generated breadcrumbs

Auto generate breadcrumbs using `router.data`.

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

### Basic Usage

The simplest use

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

### Bread crumbs with drop down menu

Breadcrumbs support drop down menu.

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

### RouterLink

Used together with [RouterLink](https://angular.dev/api/router/RouterLink).

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

### Configuring the Separator Independently

The separator can be customized by using the component `nz-breadcrumb-separator`.

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

### Configuring the Separator

The separator can be customized by setting the separator property: `nzSeparator`

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

### With an Icon

The icon should be placed in front of the text.

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
