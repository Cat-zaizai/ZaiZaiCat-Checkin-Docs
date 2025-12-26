# 看雪论坛

入口：`script/kanxue/sign_in.py`

## 功能

- 每日签到
- 多账号支持
- 推送通知

## 账号配置

节点：`kanxue.accounts` 或 `kanxue.kanxue.accounts`

必填字段：

- `cookie`
- `csrf_token`

可选字段：

- `user_agent`

## 配置示例

```json
{
  "kanxue": {
    "accounts": [
      {
        "account_name": "默认账号",
        "cookie": "REPLACE_WITH_YOUR_COOKIE",
        "csrf_token": "REPLACE_WITH_CSRF_TOKEN",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
      }
    ]
  }
}
```

## 运行方式

```bash
python3 script/kanxue/sign_in.py
```
