#include<stdio.h>
#include<stdlib.h>
#include<string.h>

// function
int distinct(int A[], int N){
    int B[N];
    int count = 0;
    
    for (int i = 0; i < N; i++){
        int flag = 1;
        for (int j = 0; j < count; j++){
            if (A[i] == B[j])
            {flag = 0;
            break;}
        }
        if (flag == 1){
            B[count] = A[i];
            count++;   
        }
    }
    return count;
}

//structures
struct student
{
    char name[50];
    int age;
    int grade;
};

int main(){
    // Data type
    int day;
    const int num;
    int A[6] = {2,1,1,2,3,2}; // array
    int *a = A; // *a = &A[0]
    char *str ="Monday"; // string, ends with '\0'
    char hello[] = "hello world";
    hello[0] = 'H';
    // bus error: 
    //str[0] = 'H'; 

    printf("integer is %d\n",A[0]);
    printf("string is %s\n",hello);

    // user input
    printf("Enter a number for weekday: \n");
    scanf("%d", &day);

    // if else
    if (A[0] < A[1]) {
        printf("%d < %d\n", A[0], A[1]);
    }
    else {
        printf("%d >= %d\n", A[0], A[1]);
    }

    // switch
    switch (day)
    {
    case 1:
        printf("Today is Monday\n");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        printf("Today is not Monday\n");
        break;
    default:
        printf("Error input\n");
        break;
    }

    // while loop
    while(*str) {
        printf("%c",*str++);
    }
    printf("\n");

    // for loop
    for (int i = 0; i < sizeof(A)/sizeof(int); i++) {
        printf("%d ",*a++);
    }
    printf("\n");

    // call function
    printf("%d\n",distinct(A,6));

    // define a struct
    struct student Alice = {"Alice", 10, 5};
    printf("%s\n",Alice.name);

    return 0;
}
