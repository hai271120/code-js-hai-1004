#include<stdio.h>
#include<stdlib.h>
#include<conio.h>
#include<math.h>
int nhapso(){
int n;
do{
    scanf("%d",&n);
    if(n<0){
        printf("vui long nhap lai:");
    }
}while(n<0);
return n;
}
int nhapmang(int a[]){
int i,n;
n = nhapso();
for(i =0;i<n;i++){
    scanf("%d",&a[i]);
}return n;
}
int lamangtangdan(int a[],int n){
int i;
for(i =1;i<n;i++){
    if(a[i]<a[i-1]){
        return 0;
    }
    return 1;
}
}
void inmang(int a[],int n){
int i;
printf("\t");
for(i=0;i<n;i++){
    printf("%4d",a[i]);
}
printf("\n");
}
int ghepmang(int a1[],int a2[],int n1,int n2,int asum[]){
int i,j,l;
a1[n1] = 1<<40;
a2[n2] = 1<<40;
for(i  =0,j=0;l<n1+n2;){
    asum[l++]=a1[i]<a2[j]?a1[i++]:a2[j++];
}
return l;
}
void menu(){
printf("____________________\n");
printf("\t      MENu       |\n");
printf("\t|--------------  |\n");
printf("\t| 1 nhap hai mang|\n");
printf("\t|2 ghep hai mang |\n");
printf("\t| 3 in 3 day so  |\n");
printf("\t|4 ketthuc       |\n");
printf("\tvui long chon:");
}
int main(){
int chon;
int a1[100],a2[100],asum[200];
int flag1 =0;
int flag2 =0;
int n2,n1,nsum;
while(1){
 menu();
 fflush(stdin);
 scanf("%d",&chon);
 system("cls");
switch(chon){
case 1:
    while(1){
        printf("nhap so phan tu mang 1:");
        n1 = nhapso();
        if(!lamangtangdan(a1,n1)){
            printf("\t nhap lai mang 1");
        }else break;
    }
    while(1){
        printf("nhap so phan tu mang 2:");
        n2 = nhapso();
        if(!lamangtangdan(a2,n2)){
            printf("\t nhap lai mang 2");
        }else break;

    }
case 2:
    if(flag1==0){
        printf("chua nhap mang:");
       break;
    } else {
    printf("\t ban dan chon ghep mang ");
    nsum = ghepmang(a1,a2,asum,n1,n2);
    flag2=1;
    printf("\t ghep hai mang thanh cong");
    break;
    }
case 3:
    if(flag1==0){
        printf("nhap mang truoc :");
        break;
    }
    if(flag2==0){
        printf("chua ghep mang");
        break;
    }
    printf("ba mang vua nhap la:");
    inmang(a1,n1);
    inmang(a2,n2);
    inmang(asum,nsum);
    break;
case 4:
    printf("ban chon ket thuc:");
    exit(0);
default:
    printf("\t nhap tu 1 -4 !!\n");
    break;
}
printf("\bam phim bat khi den ve menu");
getch();
system("cls");
}
return 0;
}
