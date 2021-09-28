## 什么是Serverless（无服务器）

**Serverless** 圈内俗称为**“无服务器架构”**，**Serverless** 不是具体的一个编程框架、类库或者工具。简单来说，**Serverless** 是一种软件系统架构思想和方法。它的核心思想是用户无须关注支撑应用服务运行的底层主机。相信这种架构的思想和方法将对未来软件应用的设计、开发和运营产生深远的影响。

所谓“无服务器”，并不是说基于 Serverless 架构的软件应用不需要服务器就可以运行，其指的是用户无须关心软件应用运行涉及的底层服务器的状态、资源（比如 CPU、内存、磁盘及网络）及数量。软件应用正常运行所需要的计算资源由底层的**云计算平台**动态提供。

**云计算**的发展从**基础架构即服务**（Infrastructure as a Service， IaaS），**平台即服务**（Platform as a Service，PaaS），**软件即服务**（Software as a Service，SaaS），慢慢开始演变到**函数即服务**（Function as a Service，FaaS）以及**后台即服务**（Backend as a Service，BaaS），**Serverless 无服务化**。									

而目前行业可能更多处在容器 **Docker + Kubernetes**, 利用 **IaaS**、**PaaS**和**SaaS** 来快速搭建部署应用。

- 基础架构即服务（Infrastructure as a Service，IaaS）
- 平台即服务（Platform as a Service，PaaS）
- 软件即服务（Software as a Service，SaaS）

#### 符合serverless概念的例子：

- **CDN:** 相信大家都使用过 CDN，我们开发完成之后，直接将静态文件部署到 CDN 上，通过 CDN 进行内容分发、网络加速，在这个过程中，前端不需要关心 CDN 有多少个节点、如何做负载均衡，也不需要知道 CDN 的 QPS 是多少。所以从这个角度来说，CDN 是一种 serverless 的实现。
- 再比如**对象存储**，和 CDN 一样，我们只需要将文件上传到对象存储，就可以直接使用了，不需要关心它如何存取文件、如何进行权限控制，所以对象存储对前端来说是 Serverless。
- 甚至一些第三方的 **API 服务**，也是 Serverless，因为我们使用的时候，不需要去关心服务器。



所以从技术角度来说，Serverless** 就是 **FaaS** 和 **BaaS** 的结合。



## serverless诞生背景

![img](C:\Users\LHX\AppData\Local\YNote\data\qqC429B3F16869E2A89FA41E430DA9AC53\977d0db50f944bf9abebd421fbd9f533\clipboard.png)

**前端开发模式演进的四个阶段：**

1、基于模板渲染的动态页面

2、基于 AJAX 的前后端分离

3、基于 Node.js 的前端工程化

4、基于 Node.js 的全栈开发



#### 基于模板渲染的动态页面

早期互联网时代的网页都很简单，就是一些静态或简单动态的页面，主要是通过 JSP、PHP 等技术来写，通过 Web Server （nginx，apache） 将模板解析成一个个 HTML 文件，浏览器只负责渲染这些 HTML 文件。这个阶段还没有前后端的分工，通常是后端工程师顺便写了前端页面。



#### 基于 AJAX 的前后端分离

2005 年 AJAX 技术的正式提出，翻开了 Web 开发的新篇章。基于 AJAX，我们可以把 Web 分为前端和后端，前端负责界面和交互，后端负责业务逻辑的处理。前后端通过接口进行数据交互。我们也不再需要在各个后端语言里面写着难以维护的 HTML。网页的复杂度也由后端的 Web Server 转向了浏览器端的 JavaScript。也正因如此，开始有了前端这个职位。



#### 基于 Node.js 的前端工程化

2009年 Node.js 的出现，对于前端来说，也是一个历史性的时刻。随着 Node.js 一同出现的还有 CommonJS 规范和 npm 包管理机制。随后也出现了 Grunt、Gulp、Webpack 等一系列基于 Node.js 的前端开发构建工具。

在 2013 年前后，前端三大框架 Angular/React.js/Vue.js 相继发布第一个版本。我们可以从以往基于一个个页面的开发，变为基于一个个组件进行开发。开发完成后使用 webpack 等工具进行打包构建，并通过基于 Node.js 实现的命令行工具将构建结果发布上线。前端开发开始变得规范化、标准化、工程化。



#### 基于 Node.js 的全栈开发

Node.js 对前端的意义不止工程化，还使得以往只能运行在浏览器中的 js 也可以运行在服务器上，前端可以用自己最熟悉的语言来写服务端的代码。于是前端开始使用 Node.js 做全栈开发，开始由前端向全栈的方向转变。这是前端主动突破自己的边界。



#### 背景总结

根据上诉背景得知，随着 Node 的流行，前端逐渐有点小全栈那味，但前端工程师一直希望回归 Web 工程师的角色，前端全栈工程师的也在各种场合和文章被提到，最近几年大前端组织架构也成为超火话题。

1、从**前端工程师自身视角度**来讲，希望扩大自己的业务范围，进而才能有职业发展，仅仅做前台展现相关的东西，碰不到核心业务，价值得不到展现。

2、如果从**组织或是技术 leader 视角**上来看问题的话，则会更关注技术对业务的贡献，关注团队的整体的执行效率、质量控制、角色合作这样一些问题。

大前端的开发模式，会提升业务的迭代效率：

1. 前端和后端都使用 JavasScript，技术栈是统一的。从写代码，到编译、打包、脚手架、组件化、包管理，再到 CICD，采用同一套都不是问题。
2. Client Side JavaScript 和 Server Side JavaScript 本身就有很多可复用的代码，例如现在行业里有很多同构代码的 CSR 和 SSR 解决方案。
3. 优化研发组织结构。大前端的开发模式，让接口定义、接口联调、环境模拟等，原来需要两种不同技术能力栈的工程师互相协作的模式，变为同一种技术技术能力栈的工程师独立完成的模式，让沟通和推动的成本降到最低。

想法很美好，但是实话实说，大前端这条路一直走的不是很顺畅。

大多数人都认为，`前端+后端+数据库`，基本业务就可以做出来了，而这个理解是建立在业务功能实现层面的。

但实际完整的业务流程却是分为四层：

- 第一层，是核心业务逻辑，前、后端功能、API、数据；
- 第二层，是业务架构，具体包括应用框架、技术架构、数据库等；
- 第三层：是业务运维，包括日志、监控告警、扩展性、负载均衡等；
- 第四层：是底层架构，包括计算资源、系统及网络安全、灾备等。

其实第一层是全栈工程师们想做的东西，第二层到第四层则是 Serverless 可以解决的问题。

在 **Serverless** 的赋能下，前端工程师依旧只需要关注核心的业务逻辑，而底层的技术架构、计算资源、稳定性、系统运维工作，则可以完全由 **Serverless** 进行支撑。即实现了从前端到真全栈的可能。

#### Serverless 的主要特点

- **事件驱动**----函数在 FaaS 平台中，需要通过一系列的事件来驱动函数执行。Serverless 架构的应用并不总是一直在线，而是按需加载执行。应用的加载和执行由事件驱动，比如HTTP请求到达、消息队列接收到新的信息或存储服务的文件被修改了等。通过将不同事件来源（Event Source）的事件（Event）与特定的函数进行关联，实现对不同事件采取不同的反应动作，这样可以非常容易地实现事件驱动（Event Driven）架构。
- **无状态**----因为每次函数执行，可能使用的都是不同的容器，无法进行内存或数据共享。云计算平台自动控制应用实例的加载和卸载，且应用和服务器完全解耦，应用不再与特定的服务器关联。因此应用的状态不能，也不会保存在其运行的服务器之上，不能做到传统意义上的状态本地持久化。如果要共享数据，则只能通过第三方服务，比如 ```Redis`` 等。

- **无运维**----使用serverless我们不需要关心服务器，也不需要关心运维，这也是serverles思想的核心；
- **低成本**----使用 Serverless 成本很低，因为我们只需要为每次函数的运行付费。函数不运行，则不花钱，也不会浪费服务器资源过度
- **按需加载**----在 Serverless 架构下，应用的加载（load）和卸载（unload）由 Serverless 云计算平台控制。这意味着应用不总是一直在线的。只有当有请求到达或者有事件发生时才会被部署和启动。当应用空闲至一定时长时，应用会到达或者有事件发生时才会被部署和启动。当应用空闲至一定时长时，应用会被自动停止和卸载。因此应用并不会持续在线，不会持续占用计算资源。
- **自动弹性伸缩**----Serverless 应用原生可以支持高可用，可以应对突发的高访问量。应用实例数量根据实际的访问量由云计算平台进行弹性的自动扩展或收缩，云计算平台动态地保证有足够的计算资源和足够数量的应用实例对请求进行处理。


#### Serverless的局限

世界上没有能解决所有问题的万能解决方案和架构理念。Serverless 有它的特点和优势，但是同时也有它的局限。有的局限是由其架构特点决定的，有的是目前技术的成熟度决定的，毕竟 Serverless 还是一个起步时间不长的新兴技术领域，在许多方面还需要逐步完善。

- **控制力**

Serverless 的一个突出优点是用户无须关注底层的计算资源，但是这个优点的反面是用户对底层的计算资源没有控制力。对于一些希望掌控底层计算资源的应用场景，Serverless 架构并不是最合适的选择。

- **可移植性**

Serverless 应用的实现在很大程度上依赖于 Serverless 平台及该平台上的 FaaS 和 BaaS 服务。不同IT厂商的 Serverless 平台和解决方案的具体实现并不相同。而且，目前 Serverless 领域尚没有形成有关的行业标准，这意味着用户将一个平台上的 Serverless 应用移植到另一个平台时所需要付出的成本会比较高。较低的可移植性将造成厂商锁定（Vendor Lock-in）。这对希望发展 Serverless 技术，但是又不希望过度依赖特定供应商的企业而言是一个挑战。

- **安全性**

在 Serverless 架构下，用户不能直接控制应用实际所运行的主机。不同用户的应用，或者同一用户的不同应用在运行时可能共用底层的主机资源。对于一些安全性要求较高的应用，这将带来潜在的安全风险。

- **性能**

当一个 Serverless 应用长时间空闲时将会被从主机上卸载。当请求再次到达时，平台需要重新加载应用。应用的首次加载及重新加载的过程将产生一定的延时。对于一些对延时敏感的应用，需要通过预先加载或延长空闲超时时间等手段进行处理。

- **技术成熟度**

虽然 Serverless 技术的发展很快，但是毕竟它还是一门起步时间不长的新兴技术。因此，目前 Serverless 相关平台、工具和框架还处在一个不断变化和演进的阶段，开发和调试的用户体验还需要进一步提升。Serverless 相关的文档和资料相对比较少，深入了解 Serverless 架构的架构师、开发人员和运维人员也相对较少。



## Serverless 的原理

![img](C:\Users\LHX\AppData\Local\YNote\data\qqC429B3F16869E2A89FA41E430DA9AC53\d93e802016e44457a7c46958d01618ae\clipboard.png)

Serverless Framework 就是这样的一款标准化、组件化的框架。在底层，提供了针对开发者的基础支持，包括开发、部署、调试、监控，这些支持针对云厂商接口进行了封装，开发者完全不用关注云计算平台的差异；在上层，每一个业务场景、业务框架都以组件化的方式进行封装，以更好的进行维护和复用。

Serverless Framework 是一个拥有 34.5K star 的开源框架：[github.com/serverless/…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fserverless%2Fserverless)

Serverless Framework 的 CLI 就叫「serverless」，以命令行的形式提供了全部功能。



## Serverless 的使用

**1、安装**

以下基于 腾讯云 作为云服务平台，serverless framework 作为标准化框架，来搭建 express 应用的过程。 

其它的操作指南可查看官方文档：https://cloud.tencent.com/document/product/1154/51106



通过 npm  安装 serverless
```
npm install serverless -g
```

**2、搭建模板**
```
serverless
```

输入该指令后，将可快速部署如下模板（下拉还有很多模板）：

![img](C:\Users\LHX\AppData\Local\YNote\data\qqC429B3F16869E2A89FA41E430DA9AC53\b0b6ea46cddf48b693c6ea275864c815\clipboard.png)

我选择了 express.js 模板，然后输入 项目名称后 就会自动给你安装 express-starter 应用：

![img](C:\Users\LHX\AppData\Local\YNote\data\qqC429B3F16869E2A89FA41E430DA9AC53\43ec9a13214045e0a5f18912b7f08770\clipboard.png)

部署完后，会生成如下目录：

![img](C:\Users\LHX\AppData\Local\YNote\data\qqC429B3F16869E2A89FA41E430DA9AC53\faf83ce45f4d435793c9878376f16533\clipboard.png)
```
│  .gitignore
│  index.html
│  package.json
│  README.md
│  serverless.yml // serverless 部署脚本
│  sls.js // express 基础使用代码
└─__tests__
        index.test.js
```

部署的时候 serverless 会根据 serverless.yml 部署脚本执行，默认执行 sls.js 中的代码
<p style="font-weight:700;background-color:#ccc">
记住 express-starter 模板部署的应用，必须得是 express 作为服务入口去访问应用，所以得是 app.get 去读取静态文件返回，而且最后得要 export 导出 express 的 app 实例 
</p>


**3、安装依赖**

部署完模板后，就安装 package.json 中的依赖
```
npm install
```

**4、编辑 serverless 部署脚本**

打开 serverless.yml 文件，一般直接使用默认的模板配置即可

具体的配置可查看 [官方文档](https://github.com/tencentyun/qcloud-documents/blob/master/product/%E8%AE%A1%E7%AE%97%E4%B8%8E%E7%BD%91%E7%BB%9C/Serverless%20Framework/%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97/yml%20%E6%96%87%E4%BB%B6%E8%A7%84%E8%8C%83.md)

```
##应用信息##
app: test1-b213a02f # app名称(app唯一识别标识)。同账号下需唯一，留空则继承组件实例名称
component: express # [必选]要使用组件，更多组件请查看 https://github.com/serverless-components
name: express-starter # [必选]组件实例名称

# ##express 组件配置##
# 更多配置请查看：https://github.com/serverless-components/tencent-express/blob/master/docs/configure.md
inputs:
  src: # 执行目录
    src: ./
    exclude:
      - .env
  region: ap-guangzhou # 部署目标地区。 更多参考 https://cloud.tencent.com/document/api/583/17238#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8
  runtime: Nodejs10.15 # 运行环境。[Nodejs10.15, Nodejs12.16]
  apigatewayConf: # API 网关
    protocols:
      - http
      - https
    environment: release # 发布环境。[test, prepub，release]
```
从如上配置中可以看出，默认读取路口是根目录下的 index 文件。若是需要特指某个文件，可以加 entryFile 配置
```
inputs:
  src: # 执行目录
    src: ./dist
    exclude:
      - .env
  region: ap-guangzhou # 部署目标地区。 更多参考 https://cloud.tencent.com/document/api/583/17238#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8
  runtime: Nodejs10.15 # 运行环境。[Nodejs10.15, Nodejs12.16]
  entryFile: pro.js
  apigatewayConf: # API 网关
    protocols:
      - http
      - https
    environment: release # 发布环境。[test, prepub，release]
```
5、发布到云服务器上
执行如下命令
```
serverless deploy
```