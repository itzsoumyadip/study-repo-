import java.util.Scanner;

public class NNaturalNumbers {
    
    public static void main(String [] args){

        Scanner kb =new Scanner(System.in);
        System.out.println("enter a Natural numbers");
        int N=kb.nextInt();
        for(int i=1;i<=N;i+=2)
        System.out.print(" "+i);
        kb.close();


    }
}