---
category: Components
type: 反馈
title: Result
subtitle: 结果
cols: 1
cover: 'https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg'
description: 用于反馈一系列操作任务的处理结果。
---

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## API

### nz-result

| 属性         | 说明                       | 类型                                                                    | 默认值   |
| ------------ | -------------------------- | ----------------------------------------------------------------------- | -------- |
| `nzTitle`    | 标题                       | `TemplateRef<void> \| string`                                           | -        |
| `nzSubTitle` | 副标题                     | `TemplateRef<void> \| string`                                           | -        |
| `nzStatus`   | 结果的状态，决定图标和颜色 | `'success' \| 'error' \| 'info' \| 'warning'\| '404' \| '403' \| '500'` | `'info'` |
| `nzIcon`     | 自定义 icon                | `TemplateRef<void> \| string`                                           | -        |
| `nzExtra`    | 操作区域                   | `TemplateRef<void> \| string`                                           | -        |

### 子元素

你可以在 nz-result 中加入如下指令，它们的优先级低于上面的参数。

| 元素                      | 说明                     |
| ------------------------- | ------------------------ |
| `[nz-result-icon]`        | 在顶部展示的大图标       |
| `div[nz-result-title]`    | 标题                     |
| `div[nz-result-subtitle]` | 副标题                   |
| `div[nz-result-content]`  | 内容，可以展示详细的信息 |
| `div[nz-result-extra]`    | 操作区域                 |

---

## 代码示例

### 自定义 icon

自定义 icon。

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

复杂的错误反馈。

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

此页面未找到。

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

服务器发生了错误。

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

你没有此页面的访问权限。

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

展示处理结果。

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

成功的结果。

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

警告类型的结果。

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
