# 接口文档

:::warning
需要注意的是，本文档的接口文档专门为 TypeScript 设计，如果你不使用 `bolt-cep` 开发 Adobe 扩展，那么你可能会发现部分接口可能会有小差异——但你还是可以用于参考，问题不大。
:::


本文档是使用 [docusaurus-plugin-typedoc](https://typedoc-plugin-markdown.org/plugins/docusaurus) 构建的接口文档。

如果你需要其他版本的接口文档，请参考 [自构建 TypeScript API 文档](./build-typescript-docs-tutorial) 学习如何自行搭建。

## 模块

以下是本文档包含的模块：

- [AfterEffects/22.0](AfterEffects/22.0/index.md)

  After Effects 2022 的接口文档。该接口允许你获取或修改项目数据，例如图层、合成等。它只能使用 ExtendScript 进行调用，这意味着使用该接口的代码应位于 `src/jsx/` 目录下。

- [shared/global](shared/global/index.md)

  该模块包含全局接口，这意味着它并非 After Effects 独占。通常情况下，这些接口也适用于 Photoshop、Premiere Pro 和 Illustrator 等应用。

- [shared/JavaScript](shared/JavaScript/index.md)

  该模块包含 JavaScript 相关接口。请特别关注 [\$](api/shared/JavaScript/interfaces/$)，它包含了一些重要方法，例如 [\$.writeln](api/shared/JavaScript/interfaces/$#writeln)，该方法可以在 ExtendScript 控制台中输出内容。

- [shared/PlugPlugExternalObject](shared/PlugPlugExternalObject/index.md)

  该模块允许你导入外部对象，以及使用 CSXSEvent 编写 dispatchTS 方法，从而实现 Host 端和 CEP 端通过事件驱动进行通信。

- [shared/ScriptUI](shared/ScriptUI/index.md)

  该模块包含 ScriptUI 相关接口，通常在进行 ScriptUI 脚本开发时会用到。

- [shared/XMPScript](shared/XMPScript/index.md)