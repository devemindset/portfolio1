export interface UserData {
  id: number;
  username: string;
  email: string;
  auth_provider: "email" | "google";
  is_social_account: boolean;
  created_at: string;
  subscription : UserSubscription | undefined | null;

}

export interface CreateTrack {
  title : string;
  description : string;
  file_url : string;
  all_receiver : string;
  collect : string;

}


export interface RequestTrack {
  id: number;
  title: string;
  slug : string;
  description: string;
  file_url: string;
  token: string;
  all_source: object[];
  all_receiver: string;
  deadline?: string | undefined;
  validators: Validator[];
};

export interface Validator {
  id: number;
  email_or_name: string;
  status: string;
  source?: string;
  comment : string;
  responded_at: string


};

// export interface AllSource {
//   general : string;
//   reddit : string;
//   facebook : string;
//   whatsapp : string;
//   email : string;
//   telegram : string;

// }

export interface DataValidation {
  request_id : number;
  email_or_name : string;
  source : string | undefined | string[];
  comment : string;
  status : string;
}

export interface RequestInTheTokenPage{
  id : number;
  title : string;
  description : string;
  file_url : string;
  collect : string;
}

export interface LimitBrowserPostData{
    date : string;
    contact : number;
    newsletterSub : number;
    view_request : boolean;
}

export interface UserSubscription{
    credits : number | undefined | null;
    paid : boolean | undefined | null;
    method : string | undefined | null;
    created_at : string ;
}