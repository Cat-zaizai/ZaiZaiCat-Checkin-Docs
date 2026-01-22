# 顺丰速运

入口：`script/sf/main.py`

## 功能

- 自动签到
- 查询任务并完成任务
- 领取积分奖励
- 支持多账号

## 账号配置

节点：`sf.accounts`

必填字段：

- `sign`
- `channel`
- `device_id`

可选字段：

- `user_agent`
- `account_name`

说明：

- `cookies` 与 `user_id` 会通过分享登录接口自动获取，无需手动配置。

## 配置示例

```json
{
  "sf": {
    "accounts": [
      {
        "account_name": "账号1",
        "sign": "REPLACE_WITH_SIGN",
        "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
        "channel": "weixin",
        "device_id": "REPLACE_WITH_DEVICE_ID"
      }
    ]
  }
}
```

## 抓包获取参数

使用 App 登录并抓包，确认是否出现以下接口：

- `https://mcs-mimp-web.sf-express.com/mcs-mimp/share/app/shareLogin`
- `https://mcs-mimp-web.sf-express.com/mcs-mimp/share/app/activityRedirec`

尝试定位 `https://mcs-mimp-web.sf-express.com/mcs-mimp/share/` 相关接口请求，找到请求参数中的 `sign`，并填入配置文件。

同时：

- 对请求中的 Cookie 进行 URL 解码，提取设备 `device_id` 并填入配置文件。
- 记录该请求对应的 `User-Agent`，填入配置文件的 `user_agent`。

## 运行方式

```bash
python3 script/sf/main.py
```

## 依赖说明

- 需要 `PyExecJS` 和系统可用的 JavaScript 运行时（如 Node.js）。
- `script/sf/code.js` 用于生成签名与 sw8 参数。
