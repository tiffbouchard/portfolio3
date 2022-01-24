---
templateKey: blog-post
title: "angular: ngSwitch"
date: 2022-01-24T21:46:42.193Z
featuredpost: true
---
* built in directive
* used to compare more than one expression at a time
* ngIf can only resolve with true or false values - you can instead have multiple checks with ngSwitch

```
<div [ngSwitch]="switch_expression">
  <div *ngSwitchCase="match_expression_one"></div>
  <div *ngSwitchCase="match_expression_two"></div>
  <div *ngSwitchDefault>....</div>
</div>
```