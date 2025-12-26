# 上海杨浦

入口：`script/shyp/main.py`

## 功能

- 获取任务列表
- 阅读任务
- 视频任务
- 收藏任务（含取消收藏）
- 评论任务
- 分享任务
- 积分查询

## 账号配置

节点：`shyp.accounts`

必填字段：

- `token`
- `device_id`

可选字段：

- `site_id`（默认 `310110`）
- `user_agent`

## 配置示例

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

## 运行方式

```bash
python3 script/shyp/main.py
```

## 注意事项

- 脚本会写入 `script/shyp/shyp_tasks.log`，便于排查问题。
- 任务间隔与行为节奏已内置随机延迟。
