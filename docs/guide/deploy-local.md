# 本地/服务器部署

适合自建服务器或本地运行场景。

## 基本流程

1. 克隆项目并安装依赖。
2. 配置 `config/token.json` 与 `config/notification.json`。
3. 使用 cron 设置定时任务。

## 定时任务示例

```bash
# 顺丰速运 - 每天 08:00
0 8 * * * python3 /ql/scripts/ZaiZaiCat-Checkin/script/sf/main.py

# 恩山论坛 - 每天 09:00
0 9 * * * python3 /ql/scripts/ZaiZaiCat-Checkin/script/enshan/sign_in.py

# 看雪论坛 - 每天 09:30
30 9 * * * python3 /ql/scripts/ZaiZaiCat-Checkin/script/kanxue/sign_in.py

# 上海杨浦 - 每天 10:00
0 10 * * * python3 /ql/scripts/ZaiZaiCat-Checkin/script/shyp/main.py

# 鸿星尔克 - 每天 08:30
30 8 * * * python3 /ql/scripts/ZaiZaiCat-Checkin/script/erke/main.py

# WPS Office - 每天 07:30
30 7 * * * python3 /ql/scripts/ZaiZaiCat-Checkin/script/wps/main.py

# 什么值得买 - 每天 07:00
0 7 * * * python3 /ql/scripts/ZaiZaiCat-Checkin/script/smzdm/sign_daily_task/main.py
```
