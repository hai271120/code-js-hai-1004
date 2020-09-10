#include<stdio.h>
#include<stdlib.h>
int nhapmang(int n){
srand(time(NULL));
int* a = (int*)malloc(n*sizeof(int));
for(int i=0;i<n;i++){
a[i]=rand()%10;
}return a;
}
void xuatmang(int*a,int n){
for(int i =0;i<n;i++){
    printf("%4d\t",a[i]);
}
printf("\n");
}
int* noimang(int* a,int* b,int m,int n)
{
    int i,j =0;
    int*c =(int*)malloc((m+n)*sizeof(int));
    for(int i =0;i<n;i++){
        c[i]=a[i];
    }
    for(int i=n;i<m+n;i++,j++){
        c[i]=b[j];
    }return c;

}
int main(){
srand(time(NULL));
int n;
printf("nhap vao n:");
scanf("%d",&n);
int*a = nhapmang(n);
xuatmang(a,n);
int m;
printf("nhap m:");
int*b = nhapmang(m);
xuatmang(b,m);
int *c = noimang(a,b,n,m);
xuatmang(c,m+n);
}
