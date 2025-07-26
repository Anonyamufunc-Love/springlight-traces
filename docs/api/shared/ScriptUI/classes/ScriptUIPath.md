# 类: ScriptUIPath

定义于: types-for-adobe/shared/ScriptUI.d.ts:485

A helper object that encapsulates a drawing path for a figure to be drawn into a window or control.
Create with the newPath(), moveto(), lineto(), rectPath(), and ellipsePath() methods.Used as value of currentPath, where it is acted upon by methods such as closePath().Pass as optional argument to fillPath() and strokePath(), which otherwise act upon the current path.

## 构造函数

### 构造函数

> **new ScriptUIPath**(): `ScriptUIPath`

#### 返回

`ScriptUIPath`
