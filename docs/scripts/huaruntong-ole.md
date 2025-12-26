# 华润通-Ole

入口：`script/huaruntong/ole/main.py`

## 功能

- Ole 小程序签到
- 多账号执行
- 推送通知

## 账号配置

节点：`huaruntong.ole.accounts`

必填字段：

- `session_id`
- `device_name`
- `unique`
- `ole_wx_open_id`
- `shop_code`
- `city_id`

可选字段：

- `user_agent`

## 配置示例

```json
{
  "huaruntong": {
    "ole": {
      "accounts": [
        {
          "account_name": "账号1",
          "session_id": "REPLACE_WITH_SESSION_ID",
          "device_name": "REPLACE_WITH_DEVICE_NAME",
          "unique": "REPLACE_WITH_UNIQUE",
          "ole_wx_open_id": "REPLACE_WITH_OPEN_ID",
          "shop_code": "REPLACE_WITH_SHOP_CODE",
          "city_id": "REPLACE_WITH_CITY_ID",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
        }
      ]
    }
  }
}
```

## 运行方式

```bash
python3 script/huaruntong/ole/main.py
```

## 状态说明

当前脚本需要动态获取微信 code 换取 token，项目 README 中标记为不可用。
