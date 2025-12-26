# 项目列表

本项目脚本集中在 `script/` 目录。以下为可用性与入口概览：

| 平台 | 入口脚本 | 状态 | 说明 |
| --- | --- | --- | --- |
| 顺丰速运 | `script/sf/main.py` | ✅ 可用 | 签到、积分任务 |
| 恩山论坛 | `script/enshan/sign_in.py` | ✅ 可用 | 每日签到 |
| 看雪论坛 | `script/kanxue/sign_in.py` | ✅ 可用 | 每日签到 |
| 上海杨浦 | `script/shyp/main.py` | ✅ 可用 | 阅读/视频/收藏/评论任务 |
| 华润通-万象星 | `script/huaruntong/999/main.py` | ✅ 可用 | 答题任务 |
| 华润通-微信版 | `script/huaruntong/huaruntong_wx/main.py` | ✅ 可用 | 小程序签到 |
| 华润通-Ole | `script/huaruntong/ole/main.py` | ❌ 不可用 | 依赖动态微信 code |
| 华润通-文体未来荟 | `script/huaruntong/wentiweilaihui/main.py` | ✅ 可用 | 签到 + 积分查询 |
| 华润通-一点万象 | `script/huaruntong/yidianwanxiang/main.py` | ✅ 可用 | 签到 + 积分查询 |
| 鸿星尔克 | `script/erke/main.py` | ✅ 可用 | 签到 + 积分明细 |
| WPS Office | `script/wps/main.py` | ✅ 可用 | 签到 + 抽奖 |
| 什么值得买 | `script/smzdm/sign_daily_task/main.py` | ✅ 可用 | 众测 + 互动任务 |
| 小米钱包 | `script/mipay/main.py` | ✅ 可用 | 签到 + 任务组 |
| 上海杨浦-自动抢购 | `script/shyp/auto_buy.py` | ⚠️ 需手动配置 | 手动编辑参数后使用 |

> 每个项目的详细说明见对应脚本页面；以下提供可复制的配置示例。

## 顺丰速运

详情：/scripts/sf

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

## 恩山论坛

详情：/scripts/enshan

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

## 看雪论坛

详情：/scripts/kanxue

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

## 上海杨浦

详情：/scripts/shyp

```json
{
  "shyp": {
    "accounts": [
      {
        "account_name": "账号1",
        "token": "REPLACE_WITH_TOKEN",
        "device_id": "REPLACE_WITH_DEVICE_ID",
        "site_id": "310110",
        "user_agent": "okhttp/4.10.0"
      }
    ]
  }
}
```

## 华润通-999 答题

详情：/scripts/huaruntong-999

```json
{
  "huaruntong": {
    "999": {
      "accounts": [
        {
          "account_name": "账号1",
          "token": "REPLACE_WITH_TOKEN",
          "mobile": "REPLACE_WITH_MOBILE",
          "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
        }
      ]
    }
  }
}
```

## 华润通-微信版

详情：/scripts/huaruntong-wx

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

## 华润通-Ole

详情：/scripts/huaruntong-ole

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

## 华润通-文体未来荟

详情：/scripts/huaruntong-wentiweilaihui

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

## 华润通-一点万象

详情：/scripts/huaruntong-yidianwanxiang

```json
{
  "huaruntong": {
    "yidianwanxiang": {
      "accounts": [
        {
          "account_name": "账号1",
          "token": "REPLACE_WITH_TOKEN",
          "mall_no": "REPLACE_WITH_MALL_NO",
          "device_id": "REPLACE_WITH_DEVICE_ID",
          "phone": "REPLACE_WITH_PHONE",
          "user_agent": "okhttp/4.10.0"
        }
      ]
    }
  }
}
```

## 鸿星尔克

详情：/scripts/erke

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

## WPS Office

详情：/scripts/wps

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

## 什么值得买

详情：/scripts/smzdm

```json
{
  "smzdm": {
    "accounts": [
      {
        "name": "账号1",
        "cookie": "REPLACE_WITH_YOUR_COOKIE",
        "user_agent": "smzdm 11.1.35 rv:167 (iPhone; iOS 16.0; zh_CN)/iphone_smzdmapp/11.1.35",
        "setting": ""
      }
    ]
  }
}
```

## 小米钱包

详情：/scripts/mipay

```json
{
  "mipay": {
    "accounts": [
      {
        "account_name": "账号1",
        "cookie": "cUserId=xxx; mjrmicom_serviceToken=xxx; mjrmicom_slh=xxx; mjrmicom_ph=xxx",
        "tid": "REPLACE_WITH_TID",
        "oaid": "REPLACE_WITH_OAID",
        "user_agent": "REPLACE_WITH_USER_AGENT"
      }
    ]
  }
}
```

## 上海杨浦-自动抢购

详情：/scripts/shyp-auto-buy

该脚本不读取 `config/token.json`，需要在 `script/shyp/auto_buy.py` 中手动修改参数。
