# 上海杨浦-自动抢购

入口：`script/shyp/auto_buy.py`

## 功能

- 在指定时间自动下单
- 支持自定义 SKU、活动 ID、数量等参数

## 使用方式

1. 打开脚本并更新 `params` 和 `headers` 中的字段。
2. 调用 `timed_buy` 设置目标时间。

```python
buyer = AutoBuy()
buyer.update_config(
    sku_id="YOUR_SKU",
    num=1,
    activity_id="YOUR_ACTIVITY_ID",
    promotion_type="EXCHANGE",
    authorization="YOUR_AUTH"
)
buyer.timed_buy("08:00:00")
```

## 注意事项

- 该脚本未接入统一配置文件，需要手动修改参数。
- 请求字段与 Token 建议使用抓包工具获取。
