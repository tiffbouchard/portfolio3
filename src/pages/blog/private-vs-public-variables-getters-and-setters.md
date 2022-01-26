---
templateKey: blog-post
title: "private vs public variables + getters and setters "
date: 2022-01-26T16:53:17.056Z
featuredpost: true
---
* useful for achieving encapsulation (oop) - refers to the bundling of data with the methods that operate on that data

  * data inside objects should only be accessed through public interface - objects methods
  * you should never need to only access the data that is within a class/object and manipulate it outside of the class/object 

    * everything that has to do with the given class/object and thus its data should stay within the class/object - that is why we have private variables to prevent them from being manipulated outside of the object/class which ensures encapsulation 
    * it is bad practice to retrieve the information from inside the object and write separate code to perform the action outside of the object
  * encapsulation is important because 

    * functionality is defined in one spot and logically kept with the data 
    * we only need to know the outcome of the method not the actual data 
* private vars are a means of abstraction, we don't want external parts of the program to have access to them or see them - we don't need to expose the details of the data, but only what is needed (express the data in abstract terms) 

  * this can be accomplished through...

    * getters and setters (although not the best option) 
    * interfaces 
    * represent the data the object contains in the best way, perhaps through a public method which manipulates the data in the way it will be used outside of the class 
* a **setter** updates the value of a variable, while a **getter** reads the value of a variable.
* without getters and setters we need to set vars to be public - lose control over the data and go against encapsulation 
* since public vars can be changed anywhere outside of the class, we also don't achieve **immutability** 
* any implementation of a certain class can do whatever they want with the data if public, and there is no control over validation of the change 
* we can choose public, protected or default (for different access)
* getters and setters are good for hiding implementation details, so they cannot be used directly elsewhere 
* getters, setters, private variables achieve both **encapsulation** and **abstraction**
* however,try to only use getters and setters where really needed and opt for writing methods that manipulate them and abstract the unneeded details about the data
* if something goes wrong with a public field, the problem can be anywhere in the code, private can only be accessed and manipulated within the class so if there is a bug it would likely only be in that file
* another advantage of private vars is **coupling**

<https://www.baeldung.com/java-why-getters-setters>

<https://softwareengineering.stackexchange.com/questions/143736/why-do-we-need-private-variables>

<https://press.rebus.community/programmingfundamentals/chapter/encapsulation/>