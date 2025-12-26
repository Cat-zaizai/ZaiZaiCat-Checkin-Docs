# 华润通-文体未来荟

入口：`script/huaruntong/wentiweilaihui/main.py`

## 功能

- 签到
- 查询万象星积分
- 多账号执行
- 推送通知

## 账号配置

节点：`huaruntong.wentiweilaihui.accounts`

必填字段：

- `token`
- `mobile`

可选字段：

- `user_agent`

## 配置示例

```json
{
  "huaruntong": {
    "wentiweilaihui": {
      "accounts": [
        {
          "account_name": "账号1",
          "token": "REPLACE_WITH_TOKEN",
          "mobile": "REPLACE_WITH_MOBILE",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
        }
      ]
    }
  }
}
```

## 运行方式

```bash
python3 script/huaruntong/wentiweilaihui/main.py
```
