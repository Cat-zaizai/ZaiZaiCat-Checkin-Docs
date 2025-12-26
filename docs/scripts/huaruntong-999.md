# 华润通-999 答题

入口：`script/huaruntong/999/main.py`

## 功能

- 自动获取题目
- 解析正确答案并提交
- 多账号执行
- 推送通知

## 账号配置

节点：`huaruntong.999.accounts`

必填字段：

- `token`
- `mobile`

可选字段：

- `user_agent`

## 配置示例

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

## 运行方式

```bash
python3 script/huaruntong/999/main.py
```
