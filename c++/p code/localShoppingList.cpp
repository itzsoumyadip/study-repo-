#include<iostream>
 const int m=50;
  using namespace std;
 class  item
 {
 private:
     int itemcode[m],count;  
     float itemPrice[m]; 
 public:  
    item(){
        count=0;
        cout<<"hello \a"<<count<<endl;
    } 
void AddList(){
    cout<<"Enter the item code"<<endl;
        cin>>itemcode[count];
    cout<<"enter item price"<<endl; 
        cin>>itemPrice[count];
        cout<<"\a\a\a"<<endl;
        count++;
}
void DisplayTotal(){
            if(count!=0){
         int sum=0;
        for(int i=0;i<count;i++)
            sum = sum + itemcode[i];

        cout<<"\n \atotalprice"<<sum<<count<<endl;            
}  else { cout<<"\n NO Item in CART "<< count<<endl;}}
   void DisplayItem(){
           
        cout<<"ItemCODE"<<"\t"<<"IteamPrice"<<endl;
            if(count!=0){
                for(int i=0;i<count;i++)
                cout<<itemcode[i]<<"\t\t\a"<<itemPrice[i]<<endl;
            }else{
                cout<<"no iteam to show\a"<<endl;           
                 }
                 }
    void Delete(){
                
                if(count!=0){
                    int a;
                    cout<<"enter ICode to Delete"<<endl;
                    cin>>a;
                    for(int i=0;i<count;i++){
                       if (itemcode[i]==a){
                            itemPrice[i]=0;
                            itemcode[i]=0;
                            cout<<"\a"<<endl;
                       }
                    }

                }else{  cout<<"no iteams to delet"<<endl;}

    }        
 
 };

int  main(){
   item order;
   int ch;
   do { cout<<"\n 1. enter for  ITEM TO ADD TO CART "<<endl;    
        cout<<"\n 2. enter for DISPLAY TOTAL COST "<<endl;
        cout<<"\n 3. enter for FOR VIEWING CART"<<endl;
        cout<<"\n 4. enter for DELETE ITEM FROM CART "<<endl;
        cout<<"\n 5. enter for Exit "<<endl;

       cin>>ch;  
          
          switch (ch)
          {
              case 1: order.AddList(); break;
              case 2:order.DisplayTotal();break;
              case 3:order.DisplayItem();break;
              case 4:order.Delete();break;
              case 5: default:
                  break;
          }
        
   
   }while(ch!=5);
  return 0;
}