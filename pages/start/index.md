---
title: 开始
---

The world is not beautiful. Therefore, it is. -《奇诺之旅》

## 播放音符测试

### 单个音符
<PlayNote notes="C4" />

### 多个音符
<PlayNote notes="A0 B0 " />

<PlayNote notes="C1 D1 E1 F1 G1 A1 B1" />

<PlayNote notes="C2 D2 E2 F2 G2 A2 B2" />

<PlayNote notes="C3 D3 E3 F3 G3 A3 B3" />

<PlayNote notes="C4 D4 E4 F4 G4 A4 B4" />

<PlayNote notes="C5 D5 E5 F5 G5 A5 B5" />

<PlayNote notes="C6 D6 E6 F6 G6 A6 B6" />

<PlayNote notes="C7 D7 E7 F7 G7 A7 B7" />

<PlayNote notes="C8" />

### 带升降号的音符
<PlayNote notes="C4 D#4 Eb4 F#4" />


### 显示五线谱
<PlayNote notes="C4 D4 E4 F4
| G4 A4 B4 c4 |
G1 G2 G2" :show-sheet-music="true" />

### 简单旋律
<PlayNote notes="G4 G4 A4 A4 |
 G42 G42 E4 E4" :show-sheet-music="true" />

### 控制标题显示
<PlayNote notes="C4 D4 E4 F4 | G4 A4 B4 C4" :show-sheet-music="true"  :show-title="true"  />

### 自定义标题
<PlayNote notes="C4 D4 E4 F4  F4 |  F4 | G4 A4 B4 c4" :show-sheet-music="true"  :show-title="true" :conversion-options="{ title: '我的旋律' }" />

### 小节线测试
<PlayNote notes="C4 D4 | E4 F4 | G4 A4 | B4 c4" :show-sheet-music="true" />

### 双小节线
<PlayNote notes="C4 D4 E4 F4 || G4 A4 B4 c4" :show-sheet-music="true" />

### 反复记号
<PlayNote notes="|: C4 D4 E4 F4 :| G4 A4" :show-sheet-music="true" />

---

## 简谱播放测试

### 基本音阶
<PlayJianpuNote jianpu="1 2 3 4 5 6 7" :show-sheet-music="true" />

### 高八度
<PlayJianpuNote jianpu="1' 2' 3' 4' 5' 6' 7'" :show-sheet-music="true" />

### 低八度
<PlayJianpuNote jianpu="1, 2, 3, 4, 5, 6, 7," :show-sheet-music="true" />

### 带小节的音阶
<PlayJianpuNote jianpu="1 2 3 4 | 5 6 7 1'" :show-sheet-music="true" />

### 带升降号
<PlayJianpuNote jianpu="1 2# 3 4 | 5 6 7 1'" :show-sheet-music="true" />

### 带降号
<PlayJianpuNote jianpu="1 2b 3 4 | 5 6b 7 1'" :show-sheet-music="true" />

### 延长线（二分音符）
<PlayJianpuNote jianpu="1- 2- 3- 4-" :show-sheet-music="true" />

### 减半时值（八分音符）
<PlayJianpuNote jianpu="1_ 2_ 3_ 4_" :show-sheet-music="true" />

### 附点音符
<PlayJianpuNote jianpu="1. 2. 3. 4." :show-sheet-music="true" />

### 休止符
<PlayJianpuNote jianpu="1 0 3 0 | 5 - 7 -" :show-sheet-music="true" />

### 小星星
<PlayJianpuNote jianpu="1 1 5 5 | 6 6 5- | 4 4 3 3 | 2 2 1- | 5 5 4 4 | 3 3 2- | 5 5 4 4 | 3 3 2- | 1 1 5 5 | 6 6 5- | 4 4 3 3 | 2 2 1-" :show-sheet-music="true" />

### 生日快乐
<PlayJianpuNote jianpu="5 5 6 5 1' 7 | 5 5 6 5 2' 1' | 5 5 5'' 3' 1' 7 6 | 4' 4' 3' 1' 2' 1'" :show-sheet-music="true" />

### 两只老虎
<PlayJianpuNote jianpu="1 2 3 1 | 1 2 3 1 | 3 4 5 | 3 4 5 | 5 6 5 4 3 1 | 5 6 5 4 3 1 | 2 5- | 2 5- | 1 2 3 1" :show-sheet-music="true" />

### 反复记号
<PlayJianpuNote jianpu="|: 1 2 3 1 | 5 6 5- :| 4 4 3 3 | 2 2 1-" :show-sheet-music="true" />

### 自定义基音（G大调）
<PlayJianpuNote jianpu="1 2 3 4 | 5 6 7 1'" :conversion-options="{ baseNote: 'G4', key: 'G' }" :show-sheet-music="true" />

### 复杂混合
<PlayJianpuNote jianpu="1 2# 3 4 | 5. 6 7= 1' | 1' 7 6b 5 | 4 3 2# 1" :show-sheet-music="true" />

### 夕颜

<PlayJianpuNote jianpu="6/2 1'/2 |
2' 2'/2 1'/2 2'/2 3'/4 2'/4 1'/2 2'/2  |
3'/2 5'/2 5'/2 6'/2 3'  3'/2 5'/2 |
2' 2'/2 1'/2 2'/2 1'/2 1'/2 2'/2 |
3'2 0 |
6/2 1'/2 |
2' 2' 2'/2 3'/4 2'/4 1'/2 2'/2 |
3'/2 5'/2 5'/2 6'/2 3' 5'/2 3'/2 |
2' 5'/2 3'/2 2'/2 6/2 6/2 1'/2 |
1'2 0 |" :show-sheet-music="true"/>
