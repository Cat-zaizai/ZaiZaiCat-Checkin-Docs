# WPS Office

入口：`script/wps/main.py`

## 功能

- 自动签到
- 自动抽奖（可限制抽奖次数）
- 多账号支持
- 推送通知

## 账号配置

节点：`wps.accounts`

必填字段：

- `user_id`（从 Cookie 的 `uid` 获取）
- `cookies`

可选字段：

- `user_agent`
- `max_lottery_limit`（默认 2 次）

## 配置示例

```json
{
  "wps": {
    "accounts": [
      {
        "account_name": "账号1",
        "user_id": 123456789,
        "cookies": "REPLACE_WITH_YOUR_COOKIE",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
        "max_lottery_limit": 2
      }
    ]
  }
}
```

## 运行方式

```bash
python3 script/wps/main.py
```

## Cookie 获取建议

- 建议从签到请求接口中复制 Cookie
- 保证 Cookie 包含 `uid=数字`，并将该值填入 `user_id`
