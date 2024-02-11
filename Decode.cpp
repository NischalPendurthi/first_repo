#include<iostream>
#include<string>
#include<cstring>
using namespace std;
int decode(string ns,int k){
	if(ns[k-1]==0||k==1){ return 0;}
	if(k==1){cout<<'o'<<endl;
		return 1;}
	if(k==2){cout<<'t'<<endl;
		if(ns[k-2]==2||ns[k-2]==1){return 2;}
		else return 1;}
	if(ns[k-1]==0){return decode(ns,k-2);}
	else {	cout<<'y'<<endl;
		cout<<ns[k-2]<<endl;
		if(ns[k-2]==2||ns[k-2]==1){cout<<'n'<<endl;
					   return decode(ns,k-2)+decode(ns,k-1);}
		else if(ns[k-2]!=2) {  cout<<'f'<<endl;
					cout<<ns[k-2];
				       return decode(ns,k-1); }
	      }
}
int main(){
	int n=1234;
	string nstr=to_string(n);
	int k=nstr.length();
	cout<<decode(nstr,k);

}

