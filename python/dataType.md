# DATA TYPES
 1.    NONE
 2.    Numeric
 3.    List
 4.    Tuple
 5.    Set
 6.    String
 7.    Range 
 8.    Dictionary  (map) 


 * 
   1. **NONE** :-   When a varible is not assigned to any value then its known as **None**. *In other   language (Like c c++) we use keyword Null but in python we use **NONE**.*
   
   2. **Numeric Type**
      * TYPES
         * **int**       
         * **float**
         * **complex**
         * **bool**
      * __Example__
          1. *int*:-
                  ```python
                                num=5
                                type(num)
                                #<class 'int'>
                  ```   
          2. *float*:-
                   ```python  
                              num=2.5
                              type(num)
                              #<class 'float'>
                   ``` 
           3. *complex*:-
                   ```python
                               num=6+9j # a+bj ,j = sqrroot of -1
                               type(num)
                               #<class 'complex'>
                   ```         
           4. *bool*
                   ```python
                         a=True
                         b=False
                         type(a) #<class'bool'>             
                              
                  ```       
           5. *type conversion* 
                * *float to int* 
                ```python 
                               a =5.6
                               b= int(a) #convert any data type to integer type  
                               type(b)  #<class 'int'>
                               print(b) #5
                 ```
                 * *int to float*  
                      ```python 
                               a =5
                               b= float(a) #convert any data type to float type  
                               type(b)  #<class 'float'>
                               print(b) #5.0
                     ```                   
                  *  *normal to complex*
                          ```python 
                               a =5
                               b=9
                               c= complex(a,b) #convert normal  type to complex type   
                               type(c)  #<class 'complex'>
                               print(c) #5+9j
                           ```
                 *  *bool to int*   
                    ```python
                         a= int(True)
                         b= int(False)
                         type(a) #<class'int'>
                         print(a) # 1
                         print(b) # 0            
                              
                    ```
  3. **list**
        ```python
        list=[25,36,45,12]
        type(list) #<class 'list'>             
        ```
  4. **Set**
        ```python
        set={25,36,45,12}
        type(set) #<class 'set'>             
        ```           
  5. **Tuple**
      ```python
      tupl=(25,36,45,12)
      type(typle) #<class 'tuple'>             
      ``` 
  6. **String**
      ```python
      str="saha"
      type(str) #<class 'str'>             
      ```                   
  7. **RANGE**:- for  iteration in value  
       ```python
         range(10) # range(0,10)
         # **** for printing range we need to convert range  to others  *** #
         list(range(10)) #[0,1,2,3,4,5,6,7,8,9]
         # ** use range's  3rd parameter   ,it determine how to iterate or how many steps to jump for second number *** #
        list(range(2,10,2)) #[2,4,6,8] 
      ```    
  8. **Dictionary  (map)** 
       ```python
             a =  {'rahul':'samsung', 'kiran':'Iphone','Dev': 'Oneplus'}
            print(a.keys())
            # dict_keys(['rahul', 'kiran', 'Dev'])
            print(a.values())  
            # dict_values(['samsung', 'Iphone', 'Oneplus'])
            # ** access value of Dictionary
            print(a['rahul'])  
            #samsung
            print(a.get('kiran'))
            #Iphone
      ```     