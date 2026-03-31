---
category: Components
subtitle: 代码编辑器
type: 数据录入
title: Code Editor
cols: 1
experimental: true
description: 基于 monaco-editor 的代码编辑器。
---

## 何时使用

需要在网页上渲染 monaco editor 时使用。

### 引入样式

```less
@import 'node_modules/ng-zorro-antd/code-editor/style/entry.less';
```

## API

别忘记先安装 monaco editor：

```sh
npm install monaco-editor
```

### 动态加载

如果你使用动态加载，你就需要在运行时加载 monaco editor 本身的资源。

在 `angular.json` 中添加：

```diff
"assets": [
+ {
+   "glob": "**/*",
+   "input": "./node_modules/monaco-editor/min/vs",
+   "output": "/assets/vs/"
+ }
],
```

这样就 OK 了！CodeEditor 组件在需要加载 monaco editor 时自动去 `/assets/vs/` 目录下查询。

如果你的静态资源都部署在 CDN 上，你就无须修改 `angular.json` 文件，但你必须通过 `NzConfigService` 配置 `assetsRoot` 属性。例如你将 monaco editor 的资源放置在了 https://mycdn.com/assets/vs ，你就需要传递 `{ assetsRoot: 'https://mycdn.com/assets' }` 。

> 如果你使用静态加载，你就无需修改 `angular.json` 文件，详见下文。

### 静态加载

有时候你可能需要在运行时加载 AMD module，但 monaco editor 的加载文件 loader.js patch 了 `window[require]` 属性，导致你无法使用 requireJS 等模块加载库，这时，你可以启用静态加载功能。

方法是使用 Microsoft 提供的 [monaco-editor-webpack-plugin](https://github.com/microsoft/monaco-editor-webpack-plugin) 插件。

1. 在 `app.config.ts` 中提供 `NZ_CONFIG` 的值，并设置 `codeEditor` 属性下的 `useStaticLoading` 为 `true` 。
2. 创建一个 webpack.partial.js 文件，根据插件文档进行相应的配置。
3. 使用自定义脚本加载器，例如 [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus)，在打包时加载这个 webpack 配置。

使用静态加载时，你无需在 `angular.json` 文件中注册 monaco editor 的资源。

### nz-code-editor

| 参数                    | 说明                                                                                                                                | 类型                                               | 默认值   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------- |
| `[nzEditorMode]`        | 编辑器的模式                                                                                                                        | `normal`\|`diff`                                   | `normal` |
| `[nzLoading]`           | 加载中                                                                                                                              | `boolean`                                          | `false`  |
| `[nzOriginalText]`      | Diff 模式下，左半边的文本内容                                                                                                       | `boolean`                                          | `false`  |
| `[nzFullControl]`       | 完全控制模式，此模式下组件不会帮助用户处理 `TextModel`，用户应当自行管理 monaco editor 实例                                         | `boolean`                                          | `false`  |
| `[nzEditorOption]`      | 编辑器选项，[参考 monaco editor 的定义](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOptions.html) | `IEditorConstructionOptions`                       | `{}`     |
| `[nzToolkit]`           | 暴露快捷操作                                                                                                                        | `TemplateRef<void>`                                | -        |
| `(nzEditorInitialized)` | 当编辑器组件初始化完毕之后派发事件                                                                                                  | `IStandaloneCodeEditor` \| `IStandaloneDiffEditor` | -        |

#### 方法

| 名称       | 描述             |
| ---------- | ---------------- |
| `layout()` | 强制组件重新渲染 |

### 全局配置

你可以通过 `NzConfigService` 的 `set` 方法，设置 `CodeEditor` 组件的默认配置。

#### CodeEditorConfig

| 属性                  | 说明                                                                                                                                                              | 类型                         | 默认值  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| `assetsRoot`          | 组件加载 monaco editor 资源文件的位置                                                                                                                             | `string` \| `SafeUrl`        | -       |
| `defaultEditorOption` | 默认的编辑器设置，[参考 monaco editor 的定义](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorConstructionOptions.html)              | `IEditorConstructionOptions` | `{}`    |
| `onLoad`              | 当 monaco editor 资源加载完毕时触发的钩子，此时全局对象 `monaco` 可用 (monaco-editor 版本不小于 0.22.0 时需定义 `window.MonacoEnvironment = { globalAPI: true }`) | `() => void`                 | -       |
| `onFirstEditorInit`   | 当第一个编辑器请求初始化时触发的钩子                                                                                                                              | `() => void`                 | -       |
| `onInit`              | 每个编辑器请求初始化时触发的钩子                                                                                                                                  | `() => void`                 | -       |
| `useStaticLoading`    | 使用静态加载                                                                                                                                                      | `boolean`                    | `false` |

---

## 代码示例

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({
  selector: 'nz-demo-code-editor-basic',
  imports: [FormsModule, NzCodeEditorModule],
  template: ` <nz-code-editor class="editor" [ngModel]="code" [nzEditorOption]="{ language: 'typescript' }" /> `,
  styles: `
    .editor {
      height: 200px;
    }
  `
})
export class NzDemoCodeEditorBasicComponent {
  code = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor'

@Component({})
export class SomeComponent {}`;
}
```

### 复杂

带加载效果和工具条的更复杂的例子。

```typescript
import { Component, DOCUMENT, inject, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCodeEditorComponent, NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTooltipDirective, NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-code-editor-complex',
  imports: [FormsModule, NzCodeEditorModule, NzIconModule, NzTypographyModule, NzSwitchModule, NzTooltipModule],
  template: `
    <p nz-paragraph style="margin-bottom: 8px;">
      Loading
      <nz-switch [(ngModel)]="loading" />
    </p>
    <nz-code-editor
      class="editor"
      [class.full-screen]="fullScreen"
      [ngModel]="code"
      [nzLoading]="loading"
      [nzToolkit]="toolkit"
      [nzEditorOption]="{ language: 'javascript' }"
    />
    <ng-template #toolkit>
      <nz-icon
        [class.active]="fullScreen"
        nz-tooltip
        nzTooltipTitle="Toggle Fullscreen"
        [nzType]="fullScreen ? 'fullscreen-exit' : 'fullscreen'"
        (click)="toggleFullScreen()"
      />
    </ng-template>
  `,
  styles: `
    .editor {
      height: 200px;
    }

    .full-screen {
      position: fixed;
      z-index: 999;
      height: 100vh;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
  `
})
export class NzDemoCodeEditorComplexComponent {
  @ViewChild(NzCodeEditorComponent, { static: false }) editorComponent?: NzCodeEditorComponent;
  @ViewChild(NzTooltipDirective, { static: false }) tooltip?: NzTooltipDirective;

  loading = true;
  fullScreen = false;
  code = `function flatten(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('The parameter must be an array.');
  }

  function partial(arr_) {
    return arr_.reduce((previous, current) => {
      if (current instanceof Array) {
        previous.push(...partial(current));
        return previous;
      } else {
        previous.push(current);
        return previous;
      }
    }, []);
  }

  return partial(arr);
}

console.log(flatten(['1', 2, [[3]]]))`;
  private document: Document = inject(DOCUMENT);
  private renderer: Renderer2 = inject(Renderer2);

  toggleFullScreen(): void {
    this.fullScreen = !this.fullScreen;
    this.renderer.setStyle(this.document.body, 'overflow-y', this.fullScreen ? 'hidden' : null);
    this.editorComponent?.layout();
    this.tooltip?.hide();
  }
}
```

### 修改配置

可以在运行时修改编辑器的默认配置，和页面上编辑器的配置。

```typescript
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'nz-demo-code-editor-config',
  imports: [FormsModule, NzCodeEditorModule, NzIconModule, NzSwitchModule, NzTypographyModule],
  template: `
    <p nz-paragraph style="margin-bottom: 8px;">
      Change Theme
      <nz-switch
        [ngModel]="dark"
        (ngModelChange)="onDarkModeChange($event)"
        [nzUnCheckedChildren]="unchecked"
        [nzCheckedChildren]="checked"
      />
    </p>
    <ng-template #unchecked>
      <nz-icon nzType="bulb" />
    </ng-template>
    <ng-template #checked>
      <nz-icon nzType="poweroff" />
    </ng-template>
    <nz-code-editor style="height: 200px" [ngModel]="code" [nzEditorOption]="{ language: 'markdown' }" />
  `
})
export class NzDemoCodeEditorConfigComponent {
  private nzConfigService = inject(NzConfigService);

  dark = false;

  code = `**All monaco editor instances on the same page always have the same color. It's a by-design of monaco editor.**

You can refer to [this issue](https://github.com/Microsoft/monaco-editor/issues/338).`;

  onDarkModeChange(dark: boolean): void {
    this.dark = dark;
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: dark ? 'vs-dark' : 'vs'
      }
    });
  }
}
```

### Diff 编辑器

使用 diff 模式。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({
  selector: 'nz-demo-code-editor-diff',
  imports: [FormsModule, NzCodeEditorModule],
  template: `
    <nz-code-editor
      class="editor"
      [nzOriginalText]="originalCode"
      nzEditorMode="diff"
      [ngModel]="code"
      [nzEditorOption]="{ language: 'typescript' }"
    />
  `,
  styles: `
    .editor {
      height: 200px;
    }
  `
})
export class NzDemoCodeEditorDiffComponent {
  originalCode = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({})
export class SomeComponent {}`;

  code = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({})
export class SomeComponent {}`;
}
```

### 完全受控模式

使用完全受控模式，自行管理 monaco editor 的 TextModel。

```typescript
import { Component } from '@angular/core';

import type { editor } from 'monaco-editor';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
declare const monaco: any;

@Component({
  selector: 'nz-demo-code-editor-full-control',
  imports: [NzCodeEditorModule],
  template: ` <nz-code-editor class="editor" [nzFullControl]="true" (nzEditorInitialized)="onEditorInit($event)" /> `,
  styles: `
    .editor {
      height: 200px;
    }
  `
})
export class NzDemoCodeEditorFullControlComponent {
  editor?: editor.ICodeEditor | editor.IEditor;

  onEditorInit(e: editor.ICodeEditor | editor.IEditor): void {
    this.editor = e;
    this.editor.setModel(monaco.editor.createModel("console.log('Hello ng-zorro-antd')", 'typescript'));
  }
}
```
