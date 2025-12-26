# 小米钱包

入口：`script/mipay/main.py`

## 功能

- 每日签到
- 任务组执行与领奖
- 多账号支持

## 账号配置

节点：`mipay.accounts`

必填字段：

- `cookie`
- `tid`
- `oaid`
- `user_agent`

## 配置示例

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

## 运行方式

```bash
python3 script/mipay/main.py
```

## 返回说明

- `code: 1` 表示签到成功
- `code: 0` 表示已签到
