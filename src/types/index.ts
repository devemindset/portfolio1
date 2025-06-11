export interface UserData {
  id: number;
  full_name: string;
  email: string;
  auth_provider: "email" | "google";
  is_social_account: boolean;
  created_at: string;
  subscription : UserSubscription | undefined | null;

}
export interface LimitBrowserPostData{
    date : string;
    contact : number;
    newsletterSub : number;
    
}

export interface UserSubscription{
    credits : number | undefined | null;
    paid : boolean | undefined | null;
    method : string | undefined | null;
    created_at : string ;
}

export interface InSimple {
  title : string;
  description : string;
}