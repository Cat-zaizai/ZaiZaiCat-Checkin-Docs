# 项目介绍

ZaiZaiCat-Checkin 是自用每日签到脚本集合，主要面向青龙面板与本地执行场景。它将多个平台签到、积分任务与每日操作做了统一封装，并使用 `config/token.json` 进行集中账号管理，配合 `notification.py` 实现统一推送。

::: tip 免责声明
本项目仅供学习交流使用，请勿用于商业用途。使用脚本带来的后果由使用者自行承担。
:::

## 功能概览

- 多平台支持：覆盖顺丰、恩山、看雪、上海杨浦、华润通系列、鸿星尔克、WPS、SMZDM、小米钱包等。
- 多账号管理：每个平台支持 `accounts` 数组，按顺序执行并汇总结果。
- 统一推送：支持 Bark、Server酱、Telegram、飞书、钉钉、企业微信等多种推送方式。
- 智能延迟：脚本内置随机等待，尽量模拟真实操作节奏。
- 模块化结构：每个平台都有独立目录和 API 封装，便于维护扩展。

## 脚本可用性状态

| 平台 | 脚本路径 | 状态 | 说明 |
| --- | --- | --- | --- |
| 顺丰速运 | `script/sf/main.py` | ✅ 可用 | 支持签到与积分任务 |
| 恩山论坛 | `script/enshan/sign_in.py` | ✅ 可用 | 支持每日签到 |
| 看雪论坛 | `script/kanxue/sign_in.py` | ✅ 可用 | 支持每日签到 |
| 上海杨浦 | `script/shyp/main.py` | ✅ 可用 | 支持任务列表与积分任务 |
| 华润通-万象星 | `script/huaruntong/999/main.py` | ✅ 可用 | 支持答题任务 |
| 华润通-微信版 | `script/huaruntong/huaruntong_wx/main.py` | ✅ 可用 | 支持签到送积分 |
| 华润通-Ole | `script/huaruntong/ole/main.py` | ❌ 不可用 | 需要动态获取微信 code 换取 token |
| 华润通-文体未来荟 | `script/huaruntong/wentiweilaihui/main.py` | ✅ 可用 | 支持签到与积分查询 |
| 鸿星尔克 | `script/erke/main.py` | ✅ 可用 | 支持签到与积分明细 |
| WPS Office | `script/wps/main.py` | ✅ 可用 | 支持签到与抽奖 |
| 什么值得买 | `script/smzdm/sign_daily_task/main.py` | ✅ 可用 | 支持签到与任务系统 |
| 小米钱包 | `script/mipay/main.py` | ✅ 可用 | 支持签到与任务组 |

## 环境要求

- Python 3.7+（推荐 3.9+）
- 依赖库：`requests`、`pycryptodome`（WPS）、`PyExecJS`（顺丰）

## 推荐阅读

- 账号配置：/config/token
- 推送配置：/config/notification
- 脚本索引：/scripts/index
