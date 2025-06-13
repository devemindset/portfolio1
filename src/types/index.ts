export interface UserData {
  id: number;
  full_name: string;
  email: string;
  auth_provider: "email" | "google";
  is_social_account: boolean;
  created_at: string;
  subscription : UserSubscription | undefined | null;
  clients : Client[] | null | undefined;
  projects : Project[] | null | undefined;
  reports : Report [] | null | undefined;
  time_entries : TimeEntry[] | null | undefined;

}
export interface LimitBrowserPostData{
    date : string;
    contact : number;
    newsletterSub : number;
    
}

export interface UserSubscription{
    paid : boolean | undefined | null;
    method : string | undefined | null;
    created_at : string ;
}

export interface InSimple {
  title : string;
  description : string;
}

export interface Client {
  id : number;
  name : string;
  email : string;
  company :string;
  phone : string;
  notes : string;

}

export interface Project {
  id : number;
  client : Client;
  name : string;
  description : string;
  is_archived : boolean;
  start_date : string;
  end_date : string;
  created_at : string;

}

export interface Report {
  client : Client;
  project : Project;
  start_date: string;
  end_date : string;
  total_hours : number;
  created_at : number;
}

export interface TimeEntry {
  project : Project;
  date : string;
  hours : string;
  note : string;
  created_at : string;
}