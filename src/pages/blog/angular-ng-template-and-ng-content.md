---
templateKey: blog-post
title: "angular: ng-template and ng-content"
date: 2022-01-24T21:43:24.960Z
featuredpost: true
---
* ng-template directive is a template that you define 
* the template you create is often used when you want to show a template conditionally 

  * ```
    <ng-template #template>
      <div>Example</div>
     </ng-template>
     
     <div *ngIf="array.length; else template"></div>
    ```