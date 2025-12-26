# 华润通-微信版

入口：`script/huaruntong/huaruntong_wx/main.py`

## 功能

- 微信小程序签到
- 多账号执行
- 推送通知

## 账号配置

节点：`huaruntong.huaruntong_wx.accounts`

必填字段：

- `token`

可选字段（脚本内置默认值）：

- `answerResult`
- `channelId`
- `merchantCode`
- `storeCode`
- `sysId`
- `transactionUuid`
- `inviteCode`
- `user_agent`

## 配置示例

```json
{
  "huaruntong": {
    "huaruntong_wx": {
      "accounts": [
        {
          "account_name": "账号1",
          "token": "REPLACE_WITH_TOKEN",
          "answerResult": 1,
          "channelId": "APP",
          "merchantCode": "1641000001532",
          "storeCode": "qiandaosonjifen",
          "sysId": "T0000001",
          "transactionUuid": "REPLACE_WITH_UUID",
          "inviteCode": "REPLACE_WITH_INVITE",
          "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"
        }
      ]
    }
  }
}
```

## 运行方式

```bash
python3 script/huaruntong/huaruntong_wx/main.py
```
