(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0deea7"],{"884e":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("title-detail",{attrs:{title:"介绍",detail:"wh-component主要是基于 Ant Design of Vue（后续简称 antd） UI组件库，并结合业务需求，进行特定封装的UI组件库，其中较多的组件是拥有和 antd 一样的API，所以具体的API不会在本文档中展示，但新增的API都会在本文档上说明。"}}),n._v(" antd具体API文档地址："),t("a",{attrs:{href:"https://www.antdv.com/docs/vue/introduce-cn/"}},[n._v("Ant Design of Vue")]),t("h3",{staticClass:"fun-title"},[n._v("快速使用")]),t("funTitleDetail",{attrs:{title:"安装",detail:"目前 wh-component 只发布在公司内网，所以无法通过外网的 npm 进行安装，需要先设置代理"}}),n._m(0),t("funTitleDetail",{attrs:{title:"使用",detail:"在安装好的项目中找到 main.js 文件并注册组件 wh-component"}}),n._m(1),n._m(2)],1)},o=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{staticClass:"line-numbers"},[n._v("      "),t("code",{staticClass:"language-JavaScript"},[n._v("\n        // 设置内网 npm 代理\n        npm config set registry http://192.168.101.160:8081/repository/npm-group/\n        // 开始安装 wh-component\n        npm i --save wh-component\n      ")]),n._v("\n  ")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{staticClass:"line-numbers"},[n._v("      "),t("code",{staticClass:"language-JavaScript"},[n._v('\n        import winhongcomponent from "wh-component";\n        import "wh-component/lib/wh-component.css";\n        Vue.use(winhongcomponent);\n      ')]),n._v("\n  ")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{staticClass:"line-numbers"},[n._v("      "),t("code",{staticClass:"language-JavaScript"},[n._v("\n        ## 更新日志\n\n        ### 1.0.1\n\n        -- 新增 Svg Icon 图标组件\n\n        ### 1.0.2\n\n        -- 修复引入 index.js 出错\n\n        ### 1.0.3\n\n        -- 修复 Svg Icon 图标 样式不生效\n\n        ### 1.0.4\n\n        -- 新增 breadcrumb 面包屑组件\n\n        ### 1.0.5\n\n        2021-03-25\n\n        -- 新增 标签 Tag 组件 规范表格状态 tag\n\n        ### 1.0.6\n\n        2021-03-26\n\n        -- 修复 标签 Tag 组件 双向绑定的，回填赋值不生效的问题\n\n        ### 1.0.7\n\n        2021-04-26\n\n        -- 新增 buttonAction 组件 插槽 自定义 icon\n\n        ### 1.0.8/1.0.9\n\n        2021-04-26\n\n        -- 修复新增不生效，执行操作 npm run build ,应该执行 npm run dist:prod\n\n        ### 1.0.10\n\n        2021-05-10\n\n        -- 新增 buttonAction 组件 按钮失效状态\n\n        ### 1.0.11\n\n        2021-05-10\n\n        -- 修复 覆盖 ant-design-vue 部分全局样式,button 去掉圆角不生效\n\n        ### 1.0.12\n\n        2021-05-17\n\n        -- 新增 linkTag 组件 禁用功能 disabled\n\n        ### 1.0.13\n\n        2021-05-27\n\n        -- 修复 breadcrumb 面包屑组件 pathToRegexp 点击链接报错\n\n        ### 1.0.15\n\n        2021-06-09\n\n        -- 以 a-modal 为基础添加带有滑动功能的弹窗组件\n\n        ### 1.0.16\n\n        2021-06-09\n\n        -- 解决弹窗组件的滑动在某些情况会出现异常的问题\n\n        ### 1.0.17/18/19\n\n        2021-06-18\n\n        -- 优化实现按需加载\n\n        ### 1.0.20\n\n        2021-06-22\n\n        -- 优化调整 package.json  \n        将 dependencies {\n        vuex@3.6.2\n        ant-design-vue@1.7.5\n        vue@2.6.14\n        vue-router@3.5.2\n        } 调整到 devDependencies\n        原因：生成环境中，不需要这些包\n\n        ### 1.0.21\n\n        2021-06-22\n\n        -- 实现按需加载\n\n        ### 1.0.22\n\n        2021-06-23\n\n        -- 弹窗默认点击遮罩不关闭\n\n        ### 1.0.23\n\n        2021-06-24\n\n        -- 面包屑提供指定路径跳转，且重定向不是以 / 开头不做跳转\n\n        ### 1.0.24\n\n        2021-06-25\n\n        -- 基于 antd-design-vue 的 $confirm 基础上封装 $YConfirm ,原有配置一样，多了一个 move，默认为 true 支持 confirm 窗口可移动，并优化原来的 modal 弹窗移动，解决出现多个弹窗时，只移动第一个的问题。\n\n        ### 1.0.25\n\n        2021-06-28\n\n        -- 给面包屑添加打印，方便查看线上测试。\n\n        ### 1.0.26\n\n        2021-07-12\n\n        -- 添加 YTableActionButton 组件用于表格组件自动显示更多按钮\n\n        ### 1.0.27\n\n        2021-07-27\n\n        -- 编写组件使用说明文档，并封装 table 组件\n\n        ### 1.0.28\n\n        2021-07-28\n\n        -- 处理table组件rowKey为函数的情况，以及拖拽header的类名缺漏问题\n\n        ### 1.0.29\n\n        2021-07-28\n\n        -- table组件的行点击以遍历 modelKeys 为准\n\n        ### 1.0.30\n\n        2021-07-28\n\n        -- 解决table组件v-model绑定失效问题\n\n        ### 1.0.31\n\n        2021-07-28\n\n        -- 解决table组件v-model不传的时候，checkbox选择报错问题\n\n        ### 1.0.32\n\n        2021-07-28\n\n        -- 解决table组件选择配置为单选 radio 时，行点击还是多选的问题\n\n        ### 1.0.33\n\n        2021-07-30\n\n        -- 去除组件样式的scoped，使样式成为全局属性，避免被其它样式覆盖\n\n        ### 1.0.34\n\n        2021-08-02\n\n        -- 表格拖拽最长宽度不能超过表格一半，去掉没数据时的滚动条\n\n        ### 1.0.35\n\n        2021-08-05\n\n        -- 解决表格添加拖拽后，头部中的排序点击事件无法触发的问题\n\n        ### 1.0.37\n\n        2021-08-09\n\n        -- 解决表格和表格按钮没有导出，导致打包后的无法编译组件\n\n        ### 1.0.38\n\n        2021-08-18\n\n        -- 新增提示按钮和可添加标签选择输入框两个组件，并解决a标签的href问题\n\n        ### 1.0.39\n\n        2021-09-03\n\n        -- 每次表格数据发生改变时（增删），确保选中 modelKeys 还保留在 dataSource 中和受控 modelKeys 和 selectedData 保持一致\n\n        ### 1.0.40\n\n        2021-08-18\n\n        -- 表格组件的 modelKeys 和 selectedData 设置默认值\n      ")]),n._v("\n  ")])}],i={name:"way"},s=i,c=t("2877"),l=Object(c["a"])(s,a,o,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0deea7.18df24e5.js.map