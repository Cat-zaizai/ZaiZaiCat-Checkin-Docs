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

- `cookies`
- `user_id`
- `channel`
- `device_id`

可选字段：

- `user_agent`

## 配置示例

```json
{
  "sf": {
    "accounts": [
      {
        "account_name": "账号1",
        "cookies": "REPLACE_WITH_YOUR_COOKIE",
        "user_id": "REPLACE_WITH_USER_ID",
        "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
        "channel": "weixin",
        "device_id": "REPLACE_WITH_DEVICE_ID"
      }
    ]
  }
}
```

## 运行方式

```bash
python3 script/sf/main.py
```

## 依赖说明

- 需要 `PyExecJS` 和系统可用的 JavaScript 运行时（如 Node.js）。
- `script/sf/code.js` 用于生成签名与 sw8 参数。
