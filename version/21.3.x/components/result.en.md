---
category: Components
type: Feedback
title: Result
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg'
description: Used to feed back the results of a series of operational tasks.
---

## When To Use

Use when important operations need to inform the user to process the results and the feedback is more complicated.

## API

### nz-result

| Property     | Description                             | Type                                                                    | Default  |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------- | -------- |
| `nzTitle`    | title                                   | `TemplateRef<void> \| string`                                           | -        |
| `nzSubTitle` | subTitle                                | `TemplateRef<void> \| string`                                           | -        |
| `nzStatus`   | result status, decides icons and colors | `'success' \| 'error' \| 'info' \| 'warning'\| '404' \| '403' \| '500'` | `'info'` |
| `nzIcon`     | custom icon                             | `TemplateRef<void> \| string`                                           | -        |
| `nzExtra`    | operating area                          | `TemplateRef<void> \| string`                                           | -        |

### Counter Parts

You can use these directives as children of nz-result.

| Directive                 | Description                              |
| ------------------------- | ---------------------------------------- |
| `[nz-result-icon]`        | custom icon                              |
| `div[nz-result-title]`    | title                                    |
| `div[nz-result-subtitle]` | subtitle                                 |
| `div[nz-result-content]`  | contents, for detailed explanations      |
| `div[nz-result-extra]`    | extra content, usually an operating area |

---

## Examples

### Custom Icon

Custom icon.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'nz-demo-result-custom',
  imports: [NzButtonModule, NzResultModule],
  template: `
    <nz-result nzIcon="smile-o" nzTitle="Great, we have done all the operators!">
      <div nz-result-extra>
        <button nz-button nzType="primary">Next</button>
      </div>
    </nz-result>
  `
})
export class NzDemoResultCustomComponent {}
```

### Error

Complex error feedback.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-result-error',
  imports: [NzButtonModule, NzIconModule, NzResultModule, NzTypographyModule],
  template: `
    <nz-result
      nzTitle="Submission Failed"
      nzStatus="error"
      nzSubTitle="Please check and modify the following information before resubmitting."
    >
      <div nz-result-content>
        <div class="desc">
          <h4 nz-title>The content you submitted has the following error:</h4>
          <p nz-paragraph>
            <nz-icon nzType="close-circle" />
            Your account has been frozen
            <a>Thaw immediately &gt;</a>
          </p>
          <p nz-paragraph>
            <nz-icon nzType="close-circle" />
            Your account is not yet eligible to apply
            <a>Apply immediately &gt;</a>
          </p>
        </div>
      </div>
      <div nz-result-extra>
        <button nz-button nzType="primary">Go Console</button>
        <button nz-button>Buy Again</button>
      </div>
    </nz-result>
  `
})
export class NzDemoResultErrorComponent {}
```

### 404

The page you visited does not exist.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'nz-demo-result-fof',
  imports: [NzButtonModule, NzResultModule],
  template: `
    <nz-result nzStatus="404" nzTitle="404" nzSubTitle="Sorry, the page you visited does not exist.">
      <div nz-result-extra>
        <button nz-button nzType="primary">Back Home</button>
      </div>
    </nz-result>
  `
})
export class NzDemoResultFofComponent {}
```

### 500

There is an error on server.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'nz-demo-result-foo',
  imports: [NzButtonModule, NzResultModule],
  template: `
    <nz-result nzStatus="500" nzTitle="500" nzSubTitle="Sorry, there is an error on server.">
      <div nz-result-extra>
        <button nz-button nzType="primary">Back Home</button>
      </div>
    </nz-result>
  `
})
export class NzDemoResultFooComponent {}
```

### 403

You are not authorized to access this page.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'nz-demo-result-fot',
  imports: [NzButtonModule, NzResultModule],
  template: `
    <nz-result nzStatus="403" nzTitle="403" nzSubTitle="Sorry, you are not authorized to access this page.">
      <div nz-result-extra>
        <button nz-button nzType="primary">Back Home</button>
      </div>
    </nz-result>
  `
})
export class NzDemoResultFotComponent {}
```

### Info

Show processing results.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'nz-demo-result-info',
  imports: [NzButtonModule, NzResultModule],
  template: `
    <nz-result nzStatus="info" nzTitle="Your operation has been executed">
      <div nz-result-extra>
        <button nz-button nzType="primary">Go Console</button>
      </div>
    </nz-result>
  `
})
export class NzDemoResultInfoComponent {}
```

### Success

Show successful results.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'nz-demo-result-success',
  imports: [NzButtonModule, NzResultModule],
  template: `
    <nz-result
      nzStatus="success"
      nzTitle="Successfully Purchased Cloud Server ECS!"
      nzSubTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    >
      <div nz-result-extra>
        <button nz-button nzType="primary">Go Console</button>
        <button nz-button>Buy Again</button>
      </div>
    </nz-result>
  `
})
export class NzDemoResultSuccessComponent {}
```

### Warning

Show warning.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'nz-demo-result-warning',
  imports: [NzButtonModule, NzResultModule],
  template: `
    <nz-result nzStatus="warning" nzTitle="There are some problems with your operation">
      <div nz-result-extra>
        <button nz-button nzType="primary">Go Console</button>
      </div>
    </nz-result>
  `
})
export class NzDemoResultWarningComponent {}
```
