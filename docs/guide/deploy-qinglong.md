# 青龙部署

推荐使用青龙面板进行部署和定时管理。

## 基本流程

1. 将整个项目上传到青龙的 `scripts` 目录。
2. 在青龙中添加定时任务执行对应脚本。
3. 在 `config/token.json` 填写账号信息。
4. 如需推送，在 `config/notification.json` 中配置或设置环境变量。

## 青龙命令行拉库

```bash
# ql repo <repo_url> <whitelist> <blacklist> <dependence> <branch> <extensions>
ql repo https://github.com/Cat-zaizai/ZaiZaiCat-Checkin.git "main.py|sign_in.py" "" ".py|.js|.json" "" "ts js py json"
```

## 青龙面板订阅

- 名称：ZaiZaiCat-Checkin
- 链接：https://github.com/Cat-zaizai/ZaiZaiCat-Checkin.git
- 分支：`main`
- 定时：`0 0 1 * * *`
- 白名单：`main|sign_in`
- 黑名单：`(留空)`
- 依赖文件：`.py|.js|.json`
- 文件后缀：`ts js py json`

> 青龙拉库脚本默认定时规则为 `1 1 1 1 1`，请按需求调整。
