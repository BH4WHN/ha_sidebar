# ha_sidebar
在HA里使用的侧边栏管理


# 使用方式

```

ha_sidebar:

```

```
# 完整配置
ha_sidebar:
  sidebar_title: 侧边栏管理
  sidebar_icon: mdi:xbox-controller-menu
  tabs_name: 二级菜单
  tabs_icon: mdi:format-list-numbered

```

# 更新日志

### v1.4
- 修复URL没有编码，导致部分信息被截断的问题

### v1.3
- 修复二级菜单删除不重新加载的问题
- 加入重新加载功能（无需重启HA）

### v1.2
- 二级菜单主页默认显示全部链接
- 二级菜单支持HA内置页面的链接
- 管理界面支持打开链接功能
- 加入mdi官方图标推荐
- mdi官方图标自动修正

### v1.1
- 加入子菜单模式
- 解决内置页面第一次显示不全的问题

### v1.0
- 基本功能实现
- 支持新选项卡
- 支持内置页面
- 支持全屏显示