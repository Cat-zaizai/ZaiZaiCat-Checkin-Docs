# 恩山论坛

入口：`script/enshan/sign_in.py`

## 功能

- 每日签到
- 多账号支持
- 推送通知

## 账号配置

节点：`enshan.accounts`

必填字段：

- `cookies`
- `formhash`

可选字段：

- `user_agent`

## 配置示例

> 出于安全考虑，示例中 Cookie 已脱敏，请自行替换真实内容。

```json
{
  "enshan": {
    "accounts": [
      {
        "account_name": "默认账号",
        "cookies": "REPLACE_WITH_YOUR_COOKIE",
        "formhash": "REPLACE_WITH_FORMHASH",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
      }
    ]
  }
}
```

## 运行方式

```bash
python3 script/enshan/sign_in.py
```
