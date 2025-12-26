# 账号配置（token.json）

所有平台账号统一写入 `config/token.json`，每个平台使用独立节点。结构遵循：

```json
{
  "platform_key": {
    "accounts": [
      {
        "account_name": "账号备注",
        "...": "平台所需字段"
      }
    ]
  }
}
```

> 建议只保留你需要的节点，避免无效账号被执行。

## 通用字段

- `account_name`：账号备注名（可选但推荐）。
- `user_agent`：部分平台需要（可选/必填视平台而定）。

## 说明

具体的平台账号配置示例请前往“项目列表”页面查看对应脚本的配置块。

## 获取参数建议

- Cookie：浏览器或抓包工具中从请求头复制。
- Token：通常在请求头 `Authorization` 或接口参数中。
- user_agent：复制请求头中的 `User-Agent`。
- device_id：请求参数或请求头中可见。
