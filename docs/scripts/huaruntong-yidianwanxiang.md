# 华润通-一点万象

入口：`script/huaruntong/yidianwanxiang/main.py`

## 功能

- 获取账户积分信息
- 执行每日签到
- 多账号执行
- 推送通知

## 账号配置

节点：`huaruntong.yidianwanxiang.accounts`

必填字段：

- `token`
- `mall_no`
- `device_id`
- `phone`

可选字段：

- `user_agent`

## 配置示例

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

## 运行方式

```bash
python3 script/huaruntong/yidianwanxiang/main.py
```

## 签名说明

签名算法在脚本中已实现：

- 过滤 `sign`、`date`、`t` 字段
- 参数按 key 字母序排序后拼接
- 末尾追加固定盐值并做 MD5 小写哈希
