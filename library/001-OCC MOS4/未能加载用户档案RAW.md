# MOS4 ME3 未能加载用户档案

##### 问题场景

用户登录车机一直报错未能加载用户档案，有登录二维码，小地球有。

##### 排查建议

```mermaid
graph LR
    A[未能加载用户档案] --> B{确认是否进行过车机升级};
    B -- No --> C[修改SPIN 多尝试登录 ];
    C -- 尝试3天后未修复 --> F[升级L2]
    B -- Yes --> D[已升级到ME3];
    D --> E{确认车机版本}
    E -- 版本未2819/2820 --> C
    E -- 版本未2914/2930 --> G[请用户自行降回原版本]
```

【先确认用户是否进行过车机升级】

- 没有升级，修改SPIN多尝试几次登录。
- 有升级过的话，需要提供下车机软件版本截图，之后按流程图进行处理。

**ME版本对应**

| ME  | VBV      | OCU  | ICAS3     |
|:---:|:--------:|:----:|:---------:|
| ME2 | 4.5.2C   | 0196 | 0456      |
|     | 4.5.3C   | 0199 | 1498      |
|     | 4.5.3.1C | 0502 | 1498      |
|     | 4.5.5C   | 0502 | 1516      |
| ME3 | ME3.0    | 0533 | 2819／2820 |
|     | ME3.1    | 0533 | 2914      |
|     | ME3.2    | 0574 | 2930      |
|     | ME3.4    | 0574 | 2930／2944 |

```flowchart
st=>start: Start :>http://amwiki.xf09.net[blank]
e=>end: End :>http://amwiki.xf09.net[blank]
op1=>operation: My Operation
op2=>operation: Stuff
sub1=>subroutine: My Subroutine
cond=>condition: Yes or No? :>http://amwiki.xf09.net[blank]
c2=>condition: Good idea
io=>inputoutput: catch something...
```
