# 推送配置（notification.json）

统一推送配置位于 `config/notification.json`，优先级为：

1. `config/notification.json`
2. 环境变量
3. 默认值

脚本通过 `notification.py` 的 `send_notification` 发送消息。

## 支持的推送平台

- Bark
- Server酱 / Server酱 Turbo
- CoolPush
- Qmsg酱
- Telegram
- 飞书
- 钉钉
- 企业微信群机器人
- 企业微信应用消息
- PushPlus
- Gotify
- Ntfy
- PushDeer

## 配置示例

```json
{
  "bark": {
    "push": "https://api.day.app/your_key",
    "icon": "",
    "sound": "birdsong",
    "group": "ZaiZaiCat-Checkin",
    "level": "active",
    "url": ""
  },
  "server": {
    "sckey": "",
    "sendkey": ""
  },
  "pushplus": {
    "token": "",
    "topic": ""
  },
  "pushdeer": {
    "pushkey": "",
    "url": "https://api2.pushdeer.com/message/push",
    "type": "text"
  }
}
```

## 使用方式

```python
from notification import send_notification
send_notification("签到结果", "账号 A: 成功\n账号 B: 失败")
```

## 注意事项

- 建议将敏感字段放在环境变量中。
- 不同平台对内容格式支持不同，详见 `notification.py` 实现。
