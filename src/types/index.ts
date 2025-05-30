export interface UserData {
  id: number;
  username: string;
  email: string;
  auth_provider: "email" | "google";
  is_social_account: boolean;
  created_at: string;

}

export interface CreateTrack {
  title : string;
  description : string;
  file_url : string;
  all_receiver : string;

}
