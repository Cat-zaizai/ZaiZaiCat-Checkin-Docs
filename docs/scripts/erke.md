# 鸿星尔克

入口：`script/erke/main.py`

## 功能

- 查询积分明细
- 自动签到
- 多账号支持
- 推送通知

## 账号配置

节点：`erke.accounts`

必填字段：

- `member_id`
- `enterprise_id`
- `unionid`
- `openid`
- `wx_openid`

可选字段：

- `user_agent`

## 配置示例

```json
{
  "erke": {
    "accounts": [
      {
        "account_name": "账号1",
        "member_id": "REPLACE_WITH_MEMBER_ID",
        "enterprise_id": "REPLACE_WITH_ENTERPRISE_ID",
        "unionid": "REPLACE_WITH_UNIONID",
        "openid": "REPLACE_WITH_OPENID",
        "wx_openid": "REPLACE_WITH_WX_OPENID",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
      }
    ]
  }
}
```

## 运行方式

```bash
python3 script/erke/main.py
```

## 参数获取建议

随便抓取一个小程序的 POST 请求，在请求数据里可以找到所需字段。
