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
  image : string;
  social_image : string;
  branding_image : string;
  branding_background : string;
  branding_description : string;
  branding_name : string;

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
  time_entries : TimeEntry[];
  reports : Report[];
  name : string;
  description : string;
  is_archived : boolean;
  start_date : string;
  end_date : string;
  created_at : string;

}

export interface Report {
  id : string
   client : string;
   created_at : string;
   project : string;
   start_date : string;
   end_date : string;
   total_hours : string;
  
}
export interface ReportPreview{
  report_project : FullProject;
  start_date: string;
  end_date: string;
  total_hours: number;
  created_at : string;
}

export interface TimeEntry {
  id: number;
  project: { id: number; name: string }; // ← simple pour éviter les cycles
  date: string;
  hours: string;
  note: string;
  created_at: string;
}

export interface FullProject {
  id: number;
  name: string;
  client: Client;
  time_entries: TimeEntry[];
}

export interface ClientAgreement {
  id : number;
  client : string;
  project : string;
  project_id : string;
  content : string;
  title : string;
  version : number;
  created_at : string;
  modification_request  : string;
  status : "pending" | "accepted" | "rejected";
  validated_at : string;
  validated_email : string;
  is_active : boolean;
  validate_ip : string;
  uuid : string;
}