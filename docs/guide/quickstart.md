# 快速开始

本节提供最短路径，快速跑通一个脚本。

## 1. 克隆项目

```bash
git clone https://github.com/Cat-zaizai/ZaiZaiCat-Checkin.git
cd ZaiZaiCat-Checkin
```

## 2. 安装依赖

```bash
pip install requests
pip install pycryptodome
pip install PyExecJS
```

## 3. 配置账号

编辑 `config/token.json`，填入对应平台的账号信息。示例可参考 `/config/token`。

## 4. 配置推送（可选）

编辑 `config/notification.json` 或使用环境变量配置推送，详见 `/config/notification`。

## 5. 运行脚本

以顺丰为例：

```bash
python3 script/sf/main.py
```

其他脚本路径见 `/scripts/index`。

## 6. 定时执行

使用 cron 或青龙面板定时任务即可，示例在 `/guide/deploy-qinglong` 与 `/guide/deploy-local`。

## 7. 本地预览官网（可选）

```bash
npm install
npm run docs:dev
```

打开 `http://localhost:5173` 即可预览。
