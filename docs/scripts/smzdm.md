# 什么值得买

入口：`script/smzdm/sign_daily_task/main.py`

## 功能

- 众测任务
- 互动任务（浏览/点赞/收藏/分享）
- 任务奖励领取
- 多账号支持
- 详细日志

## 账号配置

节点：`smzdm.accounts`

必填字段：

- `cookie`

可选字段：

- `name`（账号展示名）
- `user_agent`
- `setting`

## 配置示例

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

## 运行方式

```bash
python3 script/smzdm/sign_daily_task/main.py
```

## 日志输出

- 控制台：简洁日志
- 文件：`script/smzdm/smzdm_task.log`
