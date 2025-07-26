import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {

  tutorialSidebar: [
    {
      type: 'category',
      label: '春日影踪',
      collapsible: false,
      collapsed: false,
      link: {
        type: 'doc',
        id: `springlight-traces`
      },
      items: [
        'preparations',
        'install-bolt-cep',
        "build-bolt-cep",
        'getting-started-with-project-files',
        'eval-ts-and-eval-es',
        'listen-ts-and-dispatch-ts',
        'build-typescript-docs-tutorial',
        'getting-started-panel-frontend',
        'use-component-library',
        'data-stroage',
        "extend-backend",
        'use-web-assembly',
        'custom-compilation',
        'publishing-extension',
        'use-jest-unit-test',
        'use-eslint',
        'add-host-3rd-library',
        'ext_join-bolt-cep-community'
      ]
    },
    {
      type: 'category',
      label: '就算迷茫也要写下去！—— 入门ExtendScript',
      collapsed: false,
      collapsible: false,
      link: {
        type: 'doc',
        id: 'extend-script/getting-started-with-extendscript'
      },
      items: [
        'extend-script/vscode-plugin-extendscript-debugger',
        'extend-script/writeln',
        'extend-script/app-project',
        'extend-script/comp-item',
        'extend-script/layer',
        'extend-script/property',
        'extend-script/av-layer',
        `extend-script/camera-layer`,
        `extend-script/light-layer`,
        'extend-script/footage-item',
        'extend-script/file'
      ]
    },
    {
      type: 'doc',
      id: 'ext_bolt-cep-donts'
    },
    {
      type: 'doc',
      id: 'ext_sources'
    },
    {
      type: 'category',
      label: '接口文档',
      link: {
        type: 'doc',
        id: 'api/index',
      },
      items: require("./docs/api/typedoc-sidebar")
    }
  ]

};

export default sidebars;
