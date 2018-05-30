import firebase from 'firebase';
export class AuthService{
    signup(email:string, password:string){
       return firebase.auth().createUserWithEmailAndPassword(email,password);
    }
    signin(email: string, password: string) {
         return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logout() {
        firebase.auth().signOut();
        console.log('logout');
    }

    getActiveUser() {
        console.log('getActiveUser');
        return firebase.auth().currentUser;
    }

    msgErro(codigoErro: string){
        switch(codigoErro) { 
            case "auth/user-not-found" : { 
                return "Usuário ou senha incorretos, verifique.";
                
            }
            case "auth/invalid-email" : { 
                return "Usuário ou senha incorretos, verifique.";
                
            }
            default: { 
                return "Ocorreu um erro desconhecido ao tentar executar a ação. ";
                
            } 
        } 
    }    
}