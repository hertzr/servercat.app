import React from "react"
import { Link } from "gatsby"

import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <br/>
    <h1 style={{letterSpacing: 1}}>ServerCat</h1>
    <p className={styles.slogan}>
      > Server Status, Docker Management and SSH client.
    </p>
    <h2 className={styles.h2}>Screenshots</h2>
    <div className={styles.previews}>
      <img
        // width={320 height=694
        src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/92/28/0d/92280d9f-a9f6-0e39-dbf2-f671a62c8458/pr_source.png/600x0w.png"
        alt=""/>
      <img
        // width=320 height=694
        src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/c2/05/c4/c205c4fc-637d-8eee-ad65-dd1535bcd0ad/pr_source.png/600x0w.png"
        alt=""/>
      <img
        // width=320 height=694
        src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/51/34/2c/51342c24-3d60-aef7-28be-11e41c4b470a/pr_source.png/600x0w.png"/>
      <img
        // width=320 height=694
        src="https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/46/f1/04/46f104c8-ea37-b8ac-f2ba-61f6d42e1bf9/pr_source.png/600x0w.png"/>
    </div>

    <article>
      <h2 className={styles.h2}>FAQ</h2>
      <h3>ServerCat 是如何工作的，会在服务器上安装程序吗？</h3>
      <p>
        ServerCat 通过 SSH 直接读取 Linux 的 <code>/proc</code> 文件系统来获得系统的运行状态。
        不依赖任何第三方工具，也不会在服务器上残留任何文件。
      </p>
      <h3>我的数据安全吗？</h3>
      <p>数据保存在本地的 App 沙盒中，敏感信息（Key 和 密码）会经 AES 加密保存。
      </p>
      <h3>数据同步安全吗？</h3>
      <p> 数据同步使用 Apple iCloud 的服务，数据（敏感信息同样会经过 AES 加密）直接传到 iCloud 服务器上，不会经过任何第三方服务器。</p>
      <h3>ServerCat 与 HyperApp 有何区别？</h3>
      <p>
        HyperApp 是作者开发的另外一个自动安装应用的 iOS App，自带了预配置的一些 Docker 镜像，来帮助用户快捷的部署应用。
        但由于某些原因导致其在中国区不可用。
        <br/>
        ServerCat 不再提供预配置的应用部署服务，定位于专业的运维工具。
      </p>
    </article>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
